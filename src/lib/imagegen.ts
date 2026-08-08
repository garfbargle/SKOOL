import type { AspectRatio } from '../curriculum/types'

/**
 * Optional in-app image generation.
 *
 * The app is fully usable without this — copying a prompt into whatever
 * generator you already pay for is the default path. But if you paste an
 * OpenAI key into Settings, the worksheet studio can fill the slots directly.
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

  if (first?.b64_json) {
    const bytes = Uint8Array.from(atob(first.b64_json), (c) => c.charCodeAt(0))
    return { blob: new Blob([bytes], { type: 'image/png' }), size }
  }
  if (first?.url) {
    const img = await fetch(first.url)
    return { blob: await img.blob(), size }
  }

  throw new Error('The API returned no image data.')
}

/**
 * Wide strips (3:1, 4:1) are requested at 1536x1024 and then trimmed, because
 * no current model offers those ratios natively and an uncropped result wastes
 * most of the worksheet row.
 */
export const NON_NATIVE_ASPECTS: AspectRatio[] = ['3:1', '4:1']
