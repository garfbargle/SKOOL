import { getSetting, setSetting } from './db'
import type { AspectRatio } from '../curriculum/types'

/**
 * OpenRouter's dedicated Image API.
 *
 * One key reaches every image model worth using — OpenAI, Google, Flux,
 * Recraft, Seedream — which matters here because worksheet images have an
 * unusual requirement profile (exact counts, no text, prints in black and
 * white) and the model that does that best changes every few months. Rather
 * than hard-coding a provider we read the live catalogue and let the adult
 * pick, with the price per image shown next to each option.
 *
 * The key lives in this browser's localStorage and is sent only to
 * openrouter.ai. Skool is a static site with no backend, so there is nowhere
 * else for it to go.
 */

const API = 'https://openrouter.ai/api/v1'

/* ---------------------------------------------------------------- catalogue */

export interface ParamEnum {
  type: 'enum'
  values: string[]
}
export interface ParamRange {
  type: 'range'
  min: number
  max: number
}
export interface ParamBoolean {
  type: 'boolean'
}

/**
 * What one endpoint actually accepts. An absent key means the parameter is
 * unsupported, so every optional field is omitted from the request rather than
 * sent as a default — providers reject unknown parameters outright.
 */
export interface SupportedParameters {
  resolution?: ParamEnum
  aspect_ratio?: ParamEnum
  quality?: ParamEnum
  background?: ParamEnum
  output_format?: ParamEnum
  n?: ParamRange
  input_references?: ParamRange
  output_compression?: ParamRange
  seed?: ParamBoolean
}

export interface ImageModel {
  id: string
  name: string
  description?: string
  architecture?: { input_modalities?: string[]; output_modalities?: string[] }
  supported_parameters?: SupportedParameters
  supports_streaming?: boolean
}

export interface PricingLine {
  /** 'output_image', 'input_image', 'input_reference', … */
  billable: string
  unit: 'image' | 'megapixel' | 'token'
  cost_usd: number
  /** Resolution tier this line applies to, e.g. '2k'. Absent = the base tier. */
  variant?: string
}

export type Resolution = '512' | '1K' | '2K' | '4K'
export type Quality = 'auto' | 'low' | 'medium' | 'high'

/**
 * A short list that suits worksheet art specifically, in the order a parent
 * should consider them: cheapest-that-works first. Everything else in the
 * catalogue is still selectable behind "show every model".
 */
export const RECOMMENDED: { id: string; why: string }[] = [
  { id: 'openai/gpt-image-1-mini', why: 'Cheapest option that still follows "exactly five apples".' },
  { id: 'google/gemini-3.1-flash-image', why: 'Best all-round accuracy on counts and layout.' },
  { id: 'google/gemini-3.1-flash-lite-image', why: 'Faster and cheaper sibling of the above.' },
  { id: 'google/gemini-2.5-flash-image', why: 'Proven on simple, countable clip-art.' },
  { id: 'openai/gpt-image-2', why: 'Strong instruction following, higher price.' },
  { id: 'black-forest-labs/flux.2-pro', why: 'Clean line art. Weaker at exact counts.' },
  { id: 'bytedance-seed/seedream-4.5', why: 'Crisp storybook illustration.' },
  { id: 'recraft/recraft-v4', why: 'Purpose-built for flat vector and icon styles.' },
  { id: 'google/gemini-3-pro-image', why: 'The most accurate, and the most expensive.' },
]

export const DEFAULT_MODEL = 'openai/gpt-image-1-mini'

/**
 * Enough of the catalogue to render a working picker with no network at all —
 * the app is offline-first and the settings screen should never be blank on a
 * plane. Live data replaces this the moment a fetch succeeds.
 */
const FALLBACK_MODELS: ImageModel[] = [
  {
    id: 'openai/gpt-image-1-mini',
    name: 'OpenAI: GPT Image 1 Mini',
    supported_parameters: {
      aspect_ratio: { type: 'enum', values: ['1:1', '3:2', '2:3'] },
      quality: { type: 'enum', values: ['auto', 'low', 'medium', 'high'] },
      output_format: { type: 'enum', values: ['png', 'jpeg', 'webp'] },
      background: { type: 'enum', values: ['auto', 'transparent', 'opaque'] },
    },
  },
  {
    id: 'google/gemini-3.1-flash-image',
    name: 'Google: Nano Banana 2 (Gemini 3.1 Flash Image)',
    supported_parameters: {
      resolution: { type: 'enum', values: ['1K', '2K', '4K'] },
      aspect_ratio: {
        type: 'enum',
        values: ['1:1', '2:3', '3:2', '3:4', '4:3', '4:5', '5:4', '9:16', '16:9', '21:9'],
      },
    },
  },
  {
    id: 'google/gemini-2.5-flash-image',
    name: 'Google: Nano Banana (Gemini 2.5 Flash Image)',
    supported_parameters: {
      resolution: { type: 'enum', values: ['1K', '2K'] },
      aspect_ratio: {
        type: 'enum',
        values: ['1:1', '2:3', '3:2', '3:4', '4:3', '4:5', '5:4', '9:16', '16:9'],
      },
    },
  },
]

const CATALOGUE_KEY = 'openrouter.imageModels'
const PRICING_KEY = 'openrouter.pricing'
/** The catalogue changes on the order of weeks; a day of staleness is fine. */
const TTL_MS = 24 * 60 * 60 * 1000

interface Cached<T> {
  at: number
  value: T
}

let cataloguePromise: Promise<ImageModel[]> | null = null

/**
 * The model list. Served from the IndexedDB cache when fresh, refetched when
 * stale, and falling back to the last cached copy (however old) if the network
 * is unavailable — a stale list beats no list.
 */
export async function loadImageModels(force = false): Promise<ImageModel[]> {
  if (cataloguePromise && !force) return cataloguePromise

  cataloguePromise = (async () => {
    const cached = await getSetting<Cached<ImageModel[]>>(CATALOGUE_KEY)
    if (!force && cached && Date.now() - cached.at < TTL_MS && cached.value.length) {
      return cached.value
    }

    try {
      const res = await fetch(`${API}/images/models`)
      if (!res.ok) throw new Error(`${res.status}`)
      const json = (await res.json()) as { data?: ImageModel[] }
      const models = (json.data ?? []).filter((m) =>
        m.architecture?.output_modalities?.includes('image') ?? true,
      )
      if (!models.length) throw new Error('empty catalogue')
      await setSetting(CATALOGUE_KEY, { at: Date.now(), value: models } satisfies Cached<ImageModel[]>)
      return models
    } catch {
      return cached?.value?.length ? cached.value : FALLBACK_MODELS
    }
  })()

  return cataloguePromise
}

/** Sorted so the recommended models come first, in their curated order. */
export function sortModels(models: ImageModel[]): ImageModel[] {
  const rank = new Map(RECOMMENDED.map((r, i) => [r.id, i]))
  return [...models].sort((a, b) => {
    const ra = rank.get(a.id) ?? Number.MAX_SAFE_INTEGER
    const rb = rank.get(b.id) ?? Number.MAX_SAFE_INTEGER
    if (ra !== rb) return ra - rb
    return a.name.localeCompare(b.name)
  })
}

/* ------------------------------------------------------------------ pricing */

const pricingMemo = new Map<string, Promise<PricingLine[] | null>>()

/**
 * Per-model pricing, which lives on a separate endpoint from the catalogue.
 * Cached in IndexedDB alongside the catalogue so the picker can show prices
 * offline.
 */
export async function loadPricing(modelId: string): Promise<PricingLine[] | null> {
  const memo = pricingMemo.get(modelId)
  if (memo) return memo

  const promise = (async () => {
    const cache = (await getSetting<Record<string, Cached<PricingLine[]>>>(PRICING_KEY)) ?? {}
    const hit = cache[modelId]
    if (hit && Date.now() - hit.at < TTL_MS) return hit.value

    try {
      const res = await fetch(`${API}/images/models/${modelId}/endpoints`)
      if (!res.ok) throw new Error(`${res.status}`)
      const json = (await res.json()) as {
        endpoints?: { pricing?: PricingLine[] }[]
      }
      // Endpoints are returned best-first; the first one that actually quotes a
      // price is the one a default (unpinned) request will be routed to.
      const lines =
        json.endpoints?.find((e) => e.pricing && e.pricing.length)?.pricing ?? []
      const fresh = await getSetting<Record<string, Cached<PricingLine[]>>>(PRICING_KEY)
      await setSetting(PRICING_KEY, { ...(fresh ?? {}), [modelId]: { at: Date.now(), value: lines } })
      return lines
    } catch {
      return hit?.value ?? null
    }
  })()

  pricingMemo.set(modelId, promise)
  return promise
}

/**
 * Approximate output pixels at each resolution tier. Providers derive their
 * own concrete dimensions, but every one of them lands close enough to these
 * for a cost estimate.
 */
const MEGAPIXELS: Record<Resolution, number> = {
  '512': 0.26,
  '1K': 1.05,
  '2K': 4.19,
  '4K': 16.78,
}

/**
 * Image tokens per generated image, for the models that bill by token.
 *
 * These are not published as a formula anywhere, so they are derived from each
 * family's advertised per-image price divided by its per-token rate. They are
 * only ever used for the *estimate* — the run reports the real cost, which
 * OpenRouter returns with every response.
 */
function tokensPerImage(modelId: string, resolution: Resolution, quality: Quality): number {
  if (modelId.startsWith('openai/')) {
    // OpenAI bills by render quality rather than by resolution tier.
    switch (quality) {
      case 'low':
        return 272
      case 'high':
        return 4160
      default:
        return 1056
    }
  }
  if (modelId.includes('gemini-3')) return resolution === '4K' ? 2000 : 1120
  if (modelId.includes('gemini')) return 1290
  return 1120
}

export interface EstimateOptions {
  resolution: Resolution
  quality: Quality
}

/**
 * Estimated USD for one generated image. Returns null when the model quotes no
 * output price, in which case the UI says so instead of inventing a number.
 */
export function estimatePerImage(
  modelId: string,
  pricing: PricingLine[] | null,
  { resolution, quality }: EstimateOptions,
): number | null {
  if (!pricing?.length) return null

  const outputs = pricing.filter((p) => p.billable === 'output_image')
  if (!outputs.length) return null

  const tier = resolution.toLowerCase()
  // Resolution-tiered lines carry a `variant`; the untagged line is the base.
  const line =
    outputs.find((p) => p.variant?.toLowerCase() === tier) ??
    outputs.find((p) => !p.variant) ??
    outputs[0]

  switch (line.unit) {
    case 'image':
      return line.cost_usd
    case 'megapixel':
      return line.cost_usd * MEGAPIXELS[resolution]
    case 'token':
      return line.cost_usd * tokensPerImage(modelId, resolution, quality)
    default:
      return null
  }
}

export function formatUsd(n: number): string {
  if (n === 0) return '$0.00'
  if (n < 0.01) return `$${n.toFixed(4)}`
  if (n < 1) return `$${n.toFixed(3)}`
  return `$${n.toFixed(2)}`
}

/* -------------------------------------------------------------- generation */

export interface GenerateOptions {
  apiKey: string
  model: string
  prompt: string
  aspect: AspectRatio
  resolution: Resolution
  quality: Quality
  /** Capabilities of the chosen model, used to omit unsupported parameters. */
  params?: SupportedParameters
  signal?: AbortSignal
}

export interface GenerateResult {
  blob: Blob
  /** Actual USD billed, straight from the response. */
  costUsd: number | null
  /** The aspect ratio actually requested, which may differ from the target. */
  requestedAspect: string | null
}

const ratioValue = (aspect: string) => {
  const [w, h] = aspect.split(':').map(Number)
  return h ? w / h : 1
}

/**
 * The closest aspect ratio the model will actually accept.
 *
 * Worksheets need `3:1` and `4:1` strips — a row of countable objects has to be
 * wide or the objects print too small to count — and most models refuse them.
 * We ask for the nearest supported ratio and crop the result to the exact
 * target afterwards, which works because every prompt already demands generous
 * empty margin on all four sides.
 */
export function nearestAspect(target: AspectRatio, params?: SupportedParameters): string | null {
  const supported = params?.aspect_ratio?.values
  if (!supported?.length) return null
  if (supported.includes(target)) return target

  const want = ratioValue(target)
  let best: string | null = null
  let bestGap = Infinity
  for (const value of supported) {
    if (value === 'auto') continue
    const gap = Math.abs(Math.log(ratioValue(value) / want))
    if (gap < bestGap) {
      bestGap = gap
      best = value
    }
  }
  return best
}

/** Centre-crops a blob to an exact ratio. A no-op when it is already close. */
export async function cropToAspect(blob: Blob, target: AspectRatio): Promise<Blob> {
  const want = ratioValue(target)
  const bitmap = await createImageBitmap(blob)
  try {
    const have = bitmap.width / bitmap.height
    if (Math.abs(have - want) < 0.02) return blob

    let w = bitmap.width
    let h = bitmap.height
    if (have > want) w = Math.round(bitmap.height * want)
    else h = Math.round(bitmap.width / want)

    const canvas = document.createElement('canvas')
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext('2d')
    if (!ctx) return blob
    ctx.drawImage(bitmap, Math.round((bitmap.width - w) / 2), Math.round((bitmap.height - h) / 2), w, h, 0, 0, w, h)

    return await new Promise<Blob>((resolve) =>
      canvas.toBlob((out) => resolve(out ?? blob), 'image/png'),
    )
  } finally {
    bitmap.close()
  }
}

function b64ToBlob(b64: string, type: string): Blob {
  const binary = atob(b64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return new Blob([bytes], { type })
}

export async function generateImage(opts: GenerateOptions): Promise<GenerateResult> {
  const key = opts.apiKey.trim()
  if (!key) throw new Error('No OpenRouter key set. Add one in Settings.')

  const params = opts.params
  const aspect = nearestAspect(opts.aspect, params)

  const body: Record<string, unknown> = { model: opts.model, prompt: opts.prompt }
  if (aspect) body.aspect_ratio = aspect
  if (params?.resolution?.values.includes(opts.resolution)) body.resolution = opts.resolution
  if (params?.quality?.values.includes(opts.quality)) body.quality = opts.quality
  // Worksheets are printed on white paper; a transparent background reads as
  // black on some printers, so ask for opaque wherever it is offered.
  if (params?.background?.values.includes('opaque')) body.background = 'opaque'
  if (params?.output_format?.values.includes('png')) body.output_format = 'png'

  const res = await fetch(`${API}/images`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
      // Shown on the OpenRouter activity page so a shared key's spend is
      // attributable to this app rather than appearing anonymous.
      'HTTP-Referer': window.location.origin,
      'X-Title': 'Skool Curriculum Studio',
    },
    body: JSON.stringify(body),
    signal: opts.signal,
  })

  if (!res.ok) {
    let detail = `${res.status} ${res.statusText}`
    try {
      const json = (await res.json()) as { error?: { message?: string } }
      if (json.error?.message) detail = json.error.message
    } catch {
      // Non-JSON error body; the status line is the best we have.
    }
    if (res.status === 401) detail = 'OpenRouter rejected the key. Check it in Settings.'
    if (res.status === 402) detail = 'OpenRouter reports insufficient credit on this key.'
    throw new Error(detail)
  }

  const json = (await res.json()) as {
    data?: { b64_json?: string; media_type?: string }[]
    usage?: { cost?: number }
  }

  const first = json.data?.[0]
  if (!first?.b64_json) throw new Error('OpenRouter returned no image data.')

  const raw = b64ToBlob(first.b64_json, first.media_type ?? 'image/png')
  // SVG (Recraft's vector models) has no raster geometry to crop.
  const blob = first.media_type === 'image/svg+xml' ? raw : await cropToAspect(raw, opts.aspect)

  return {
    blob,
    costUsd: typeof json.usage?.cost === 'number' ? json.usage.cost : null,
    requestedAspect: aspect,
  }
}
