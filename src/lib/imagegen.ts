import type { AspectRatio } from '../curriculum/types'
import { cropToAspect } from './openrouter'

/**
 * Direct OpenAI image generation — the fallback path.
 *
 * OpenRouter (see `openrouter.ts`) is the route everything prefers: it reaches
 * every image model, quotes prices, and reports what each image actually cost.
 * This exists for people who already had an OpenAI key configured here before
 * that landed, so their setup keeps working untouched. It is fixed to
 * gpt-image-1 and has no model choice and no cost estimate.
 *
 * The key is held in localStorage on this device and sent only to
 * api.openai.com. It is never transmitted to skool.c0di.com, which is a static
 * site with no backend at all.
 */

/** gpt-image-1 accepts three sizes; map each aspect to the closest one. */
function sizeFor(aspect: AspectRatio): '1024x1024' | '1536x1024' | '1024x1536' {
  switch (aspect) {
    case '3:4':
    case '2:3':
      return '1024x1536'
    case '4:3':
    case '3:2':
    case '16:9':
    case '3:1':
    case '4:1':
      return '1536x1024'
    default:
      return '1024x1024'
  }
}

export interface GenerateResult {
  blob: Blob
  /** The size actually requested, so the UI can explain any crop. */
  size: string
}

export async function generateImage(
  prompt: string,
  aspect: AspectRatio,
  apiKey: string,
  signal?: AbortSignal,
): Promise<GenerateResult> {
  if (!apiKey.trim()) throw new Error('No API key set. Add one in Settings.')

  const size = sizeFor(aspect)

  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey.trim()}`,
    },
    body: JSON.stringify({
      model: 'gpt-image-1',
      prompt,
      size,
      n: 1,
      background: 'opaque',
    }),
    signal,
  })

  if (!res.ok) {
    let detail = `${res.status} ${res.statusText}`
    try {
      const body = (await res.json()) as { error?: { message?: string } }
      if (body.error?.message) detail = body.error.message
    } catch {
      // Non-JSON error body; the status line is the best we have.
    }
    throw new Error(detail)
  }

  const json = (await res.json()) as { data?: { b64_json?: string; url?: string }[] }
  const first = json.data?.[0]

  // Wide strips (3:1, 4:1) have no native size here, so they come back at
  // 1536x1024 and get trimmed to the exact ratio — an uncropped result wastes
  // most of the worksheet row.
  if (first?.b64_json) {
    const bytes = Uint8Array.from(atob(first.b64_json), (c) => c.charCodeAt(0))
    const raw = new Blob([bytes], { type: 'image/png' })
    return { blob: await cropToAspect(raw, aspect), size }
  }
  if (first?.url) {
    const img = await fetch(first.url)
    return { blob: await cropToAspect(await img.blob(), aspect), size }
  }

  throw new Error('The API returned no image data.')
}
