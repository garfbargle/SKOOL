import { useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import {
  RECOMMENDED,
  estimatePerImage,
  formatUsd,
  loadImageModels,
  loadPricing,
  sortModels,
  type ImageModel,
  type PricingLine,
  type Quality,
  type Resolution,
} from '../lib/openrouter'
import { usePrefs } from '../lib/store'
import { Badge } from './primitives'
import { IconCheck } from './icons'

/**
 * Choosing the image model, with the price of one image next to each option.
 *
 * Prices are the whole point of this component. Generating a week of
 * worksheets is a few hundred images, and the spread between the cheapest
 * usable model and the most accurate one is more than thirty times — which is
 * a decision nobody can make sensibly without seeing the numbers.
 */

const WHY = new Map(RECOMMENDED.map((r) => [r.id, r.why]))

/** Fetches pricing for a list of models without hammering the endpoint. */
function usePricing(models: ImageModel[]) {
  const [pricing, setPricing] = useState<Record<string, PricingLine[] | null>>({})

  useEffect(() => {
    let cancelled = false
    const ids = models.map((m) => m.id)

    void (async () => {
      const queue = [...ids]
      const workers = Array.from({ length: 5 }, async () => {
        while (queue.length && !cancelled) {
          const id = queue.shift()
          if (!id) return
          const lines = await loadPricing(id)
          if (cancelled) return
          setPricing((prev) => (id in prev && prev[id] === lines ? prev : { ...prev, [id]: lines }))
        }
      })
      await Promise.all(workers)
    })()

    return () => {
      cancelled = true
    }
  }, [models])

  return pricing
}

export function ModelPicker({ compact = false }: { compact?: boolean }) {
  const { imageModel, setImageModel, imageResolution, imageQuality } = usePrefs()

  const [all, setAll] = useState<ImageModel[]>([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    void loadImageModels().then((models) => setAll(sortModels(models)))
  }, [])

  const visible = useMemo(() => {
    if (showAll) return all
    const shortlist = all.filter((m) => WHY.has(m.id))
    // Never hide the current selection behind the "show all" toggle.
    const selected = all.find((m) => m.id === imageModel)
    if (selected && !shortlist.includes(selected)) return [...shortlist, selected]
    return shortlist
  }, [all, showAll, imageModel])

  const pricing = usePricing(visible)

  const priceFor = (id: string) => {
    const lines = pricing[id]
    if (lines === undefined) return undefined // still loading
    return estimatePerImage(id, lines, { resolution: imageResolution, quality: imageQuality })
  }

  if (!all.length) {
    return <p className="text-[13px] muted">Loading the model list from OpenRouter…</p>
  }

  return (
    <div className="flex flex-col gap-2">
      {/* Inside the run dialog the list has to stay short so the cost and the
          start button remain on screen; on the settings page the page itself
          scrolls, and a nested scroller there just clips rows confusingly. */}
      <div
        className={clsx(
          'flex flex-col gap-1.5',
          compact && 'max-h-[15rem] overflow-y-auto scroll-thin',
        )}
      >
        {visible.map((model) => {
          const selected = model.id === imageModel
          const price = priceFor(model.id)
          return (
            <button
              key={model.id}
              onClick={() => setImageModel(model.id)}
              className={clsx(
                'flex items-start gap-3 rounded-lg border p-2.5 text-left transition-colors focus-ring',
                selected
                  ? 'border-blue-500 bg-blue-500/8 ring-1 ring-blue-500/30'
                  : 'hover:bg-[var(--surface-3)]',
              )}
            >
              <span
                className={clsx(
                  'mt-0.5 w-4 h-4 rounded-full border grid place-items-center shrink-0',
                  selected ? 'bg-blue-600 border-blue-600 text-white' : 'border-[var(--border-strong)]',
                )}
              >
                {selected && <IconCheck size={11} />}
              </span>

              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[13.5px] font-medium">{model.name}</span>
                  {WHY.has(model.id) && <Badge tone="info">suggested</Badge>}
                </span>
                <span className="block text-[11.5px] faint mt-0.5 leading-relaxed">
                  {WHY.get(model.id) ?? model.id}
                </span>
              </span>

              <span className="text-right shrink-0 tabular-nums">
                <span className="block text-[13px] font-semibold">
                  {price === undefined ? '…' : price === null ? '—' : formatUsd(price)}
                </span>
                <span className="block text-[10.5px] faint">per image</span>
              </span>
            </button>
          )
        })}
      </div>

      <button
        onClick={() => setShowAll((v) => !v)}
        className="self-start text-[12px] muted hover:text-[var(--text)] focus-ring rounded"
      >
        {showAll ? 'Show suggested models only' : `Show all ${all.length} image models`}
      </button>
    </div>
  )
}

/* --------------------------------------------------------- output controls */

/**
 * Resolution and quality, filtered to what the chosen model accepts. Both
 * change the price, so they live next to the picker rather than in a separate
 * "advanced" corner.
 */
export function OutputControls() {
  const {
    imageModel,
    imageResolution,
    setImageResolution,
    imageQuality,
    setImageQuality,
  } = usePrefs()
  const [model, setModel] = useState<ImageModel | null>(null)

  useEffect(() => {
    void loadImageModels().then((models) => setModel(models.find((m) => m.id === imageModel) ?? null))
  }, [imageModel])

  const resolutions = model?.supported_parameters?.resolution?.values
  const qualities = model?.supported_parameters?.quality?.values

  if (!resolutions?.length && !qualities?.length) {
    return (
      <p className="text-[12px] faint leading-relaxed">
        This model has a fixed output size — there is nothing to tune, and the price above is what
        each image costs.
      </p>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {resolutions?.length ? (
        <label className="block">
          <span className="text-[12px] font-medium muted block mb-1.5">Resolution</span>
          <select
            value={resolutions.includes(imageResolution) ? imageResolution : resolutions[0]}
            onChange={(e) => setImageResolution(e.target.value as Resolution)}
            className="w-full px-3 py-2 rounded-lg border bg-[var(--surface-2)] text-[13px] outline-none focus:border-blue-500"
          >
            {resolutions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <span className="block text-[11.5px] faint mt-1.5 leading-relaxed">
            1K is plenty for a printed worksheet. Higher tiers cost more and print no better.
          </span>
        </label>
      ) : null}

      {qualities?.length ? (
        <label className="block">
          <span className="text-[12px] font-medium muted block mb-1.5">Quality</span>
          <select
            value={qualities.includes(imageQuality) ? imageQuality : qualities[0]}
            onChange={(e) => setImageQuality(e.target.value as Quality)}
            className="w-full px-3 py-2 rounded-lg border bg-[var(--surface-2)] text-[13px] outline-none focus:border-blue-500"
          >
            {qualities.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
          <span className="block text-[11.5px] faint mt-1.5 leading-relaxed">
            Medium suits flat worksheet art. High costs roughly four times as much.
          </span>
        </label>
      ) : null}
    </div>
  )
}
