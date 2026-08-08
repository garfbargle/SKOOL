import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import clsx from 'clsx'
import { useLesson } from '../lib/useCourse'
import { GRADE_BY_ID, SUBJECT_BY_ID } from '../curriculum/taxonomy'
import { STYLE_LIST, STYLE_PRESETS } from '../curriculum/styles'
import { MODEL_TARGETS, composePrompt, resolveStyle } from '../curriculum/promptComposer'
import type { GradeId, ImageSpec, ModelTarget, StylePresetId, SubjectId } from '../curriculum/types'
import {
  Badge,
  Button,
  CopyButton,
  EmptyState,
  Spinner,
  SUBJECT_COLOUR,
} from '../ui/primitives'
import {
  IconAlert,
  IconArrowLeft,
  IconCheck,
  IconImage,
  IconPrint,
  IconSparkle,
  IconTrash,
} from '../ui/icons'
import { usePrefs, useToasts } from '../lib/store'
import { planJobs, useQueue } from '../lib/imageQueue'
import { GenerateAllButton, useQueueCompletions } from '../ui/GenerateRun'
import {
  deleteSavedImage,
  imagesForLesson,
  saveGeneratedImage,
  uid,
  type SavedImage,
} from '../lib/db'

export default function WorksheetStudio() {
  const { gradeId, subjectId, lessonId } = useParams()
  const { lesson, unit, loading, missing } = useLesson(gradeId, subjectId, lessonId)

  const { promptTarget, setPromptTarget, styleOverride, setStyleOverride, openrouterKey, openaiKey } =
    usePrefs()
  const push = useToasts((s) => s.push)
  const enqueue = useQueue((s) => s.enqueue)
  const queueJobs = useQueue((s) => s.jobs)

  const [saved, setSaved] = useState<Record<string, SavedImage>>({})
  const [openSpec, setOpenSpec] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    if (!lessonId) return
    const list = await imagesForLesson(lessonId)
    setSaved(Object.fromEntries(list.map((i) => [i.specId, i])))
  }, [lessonId])

  useEffect(() => {
    void refresh()
  }, [refresh])

  // Images land in IndexedDB one at a time during a run; re-read as they do so
  // the page fills in live rather than only after a reload.
  useQueueCompletions(lessonId, refresh)

  const specs = useMemo(
    () => lesson?.worksheet.sections.flatMap((s) => s.images ?? []) ?? [],
    [lesson],
  )

  if (loading) return <Spinner label="Loading worksheet…" />
  if (missing || !lesson || !unit) {
    return <EmptyState title="Worksheet not found" body="This lesson has no worksheet." />
  }

  const grade = GRADE_BY_ID[gradeId as GradeId]
  const subject = SUBJECT_BY_ID[subjectId as SubjectId]
  const colour = SUBJECT_COLOUR[subject.id]
  const ws = lesson.worksheet
  const effectiveStyle: StylePresetId = styleOverride ?? ws.style

  const ctx = {
    gradeName: grade.name,
    subjectName: subject.name,
    lessonTitle: lesson.title,
    defaultStyle: effectiveStyle,
    target: promptTarget,
  }

  const compose = (spec: ImageSpec) => composePrompt(spec, ctx)

  /** One numbered brief covering every image, for pasting into a chat. */
  const allPrompts = specs
    .map((spec, i) => {
      const c = compose(spec)
      return [
        `── IMAGE ${i + 1} of ${specs.length} — ${spec.slot} ──`,
        c.prompt,
        c.negativePrompt ? `\nNEGATIVE PROMPT:\n${c.negativePrompt}` : '',
      ]
        .filter(Boolean)
        .join('\n')
    })
    .join('\n\n')

  const base = `/c/${gradeId}/${subjectId}`
  const filled = specs.filter((s) => saved[s.id]).length
  const missingCount = specs.length - filled
  const hasKey = Boolean(openrouterKey.trim() || openaiKey.trim())
  const busySpecs = new Set(
    queueJobs
      .filter((j) => j.lessonId === lesson.id && (j.status === 'running' || j.status === 'pending'))
      .map((j) => j.specId),
  )

  /**
   * A single slot goes through the same queue as a batch. One code path means
   * one set of retry rules, one progress display, and no way for a stray
   * single generation to race a run that is already going.
   */
  async function generate(spec: ImageSpec) {
    if (!hasKey) {
      push('Add an API key in Settings to generate images in the app.', 'error')
      return
    }
    const [job] = await planJobs([lesson!], { styleOverride, includeFilled: true })
      .then((jobs) => jobs.filter((j) => j.specId === spec.id))
    if (job) enqueue([job])
  }

  async function attach(spec: ImageSpec, file: File) {
    const record: SavedImage = {
      id: uid(),
      specId: spec.id,
      lessonId: lesson!.id,
      image: file,
      prompt: compose(spec).prompt,
      model: 'uploaded',
      provider: 'uploaded',
      aspect: spec.aspect,
      createdAt: Date.now(),
    }
    await saveGeneratedImage(record)
    await refresh()
    push('Image attached to this slot.', 'success')
  }

  return (
    <div className="max-w-[1400px] mx-auto px-5 py-7 lg:py-9">
      <div className="no-print">
        <Link
          to={`${base}/${lesson.id}`}
          className="inline-flex items-center gap-1.5 text-[13px] muted hover:text-[var(--text)] mb-5 focus-ring rounded"
        >
          <IconArrowLeft size={14} />
          {lesson.title}
        </Link>

        <header className="mb-5">
          <div className="flex items-center gap-2 mb-2" style={{ color: colour }}>
            <IconImage size={17} />
            <span className="text-[12px] font-semibold uppercase tracking-wide">
              Worksheet studio
            </span>
          </div>
          <h1 className="text-[24px] font-semibold tracking-tight">{ws.title}</h1>
          <p className="muted text-[14px] mt-1.5">
            {grade.name} · {subject.name} · {specs.length} image
            {specs.length === 1 ? '' : 's'}, each with its own prompt
            {filled > 0 && ` · ${filled} filled`}
          </p>
        </header>

        {/* ------------------------------------------------------- toolbar */}
        <div className="surface p-4 mb-6 flex flex-wrap items-end gap-4">
          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-wide faint block mb-1.5">
              Image model
            </span>
            <select
              value={promptTarget}
              onChange={(e) => setPromptTarget(e.target.value as ModelTarget)}
              className="px-3 py-2 rounded-lg border bg-[var(--surface-2)] text-[13px] outline-none focus:border-blue-500 min-w-[13rem]"
            >
              {MODEL_TARGETS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-wide faint block mb-1.5">
              Art style
            </span>
            <select
              value={styleOverride ?? ''}
              onChange={(e) => setStyleOverride((e.target.value || null) as StylePresetId | null)}
              className="px-3 py-2 rounded-lg border bg-[var(--surface-2)] text-[13px] outline-none focus:border-blue-500 min-w-[15rem]"
            >
              <option value="">Lesson default — {STYLE_PRESETS[ws.style].name}</option>
              {STYLE_LIST.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>

          <div className="flex flex-wrap gap-2 ml-auto">
            <CopyButton
              text={allPrompts}
              label={`Copy all ${specs.length} prompts`}
              size="md"
              variant="secondary"
            />
            {missingCount > 0 && (
              <GenerateAllButton
                collect={async () => [lesson]}
                scope="this worksheet"
                label={`Generate ${missingCount} missing image${missingCount === 1 ? '' : 's'}`}
              />
            )}
            <Button
              variant={missingCount > 0 ? 'secondary' : 'primary'}
              icon={<IconPrint size={15} />}
              onClick={() => window.print()}
            >
              Print worksheet
            </Button>
          </div>

          <p className="w-full text-[12px] muted leading-relaxed border-t pt-3">
            <strong className="text-[var(--text)]">{MODEL_TARGETS.find((m) => m.id === promptTarget)?.name}: </strong>
            {MODEL_TARGETS.find((m) => m.id === promptTarget)?.hint}
            {' — '}
            {STYLE_PRESETS[effectiveStyle].bestFor}.
          </p>
        </div>
      </div>

      <div className="grid xl:grid-cols-[minmax(0,1fr)_460px] gap-6 items-start">
        {/* ------------------------------------------------ worksheet page */}
        <div className="print-root">
          <div className="surface print:border-0 print:shadow-none overflow-hidden">
            <div className="p-7 sm:p-9 bg-white text-black print-page">
              <header className="flex items-end justify-between gap-4 border-b-2 border-black pb-2.5 mb-6">
                <div>
                  <h2 className="text-[20px] font-bold leading-tight">{ws.title}</h2>
                  <p className="text-[11px] mt-0.5 text-neutral-600">
                    {grade.name} · {subject.name} · {unit.title}
                  </p>
                </div>
                <div className="text-[10px] text-neutral-600 text-right shrink-0">
                  <div className="mb-1.5">Name _________________</div>
                  <div>Date _____________</div>
                </div>
              </header>

              <div className="flex flex-col gap-7">
                {ws.sections.map((section, si) => (
                  <section key={section.id} className="avoid-break">
                    <h3 className="text-[13px] font-bold uppercase tracking-wide mb-1">
                      {si + 1}. {section.title}
                    </h3>
                    <p className="text-[13px] mb-3.5 leading-relaxed">{section.directions}</p>

                    {section.images && section.images.length > 0 && (
                      <div
                        className={clsx(
                          'gap-3 mb-3',
                          section.layout === 'grid' && 'grid grid-cols-2 sm:grid-cols-3',
                          section.layout === 'row' && 'flex flex-col',
                          section.layout === 'split' && 'flex flex-col',
                          section.layout === 'column' && 'flex flex-col',
                          section.layout === 'full' && 'flex flex-col',
                          section.layout === 'trace' && 'flex flex-col',
                        )}
                      >
                        {section.images.map((spec) => (
                          <ImageSlot
                            key={spec.id}
                            spec={spec}
                            saved={saved[spec.id]}
                            onFocus={() => setOpenSpec(spec.id)}
                          />
                        ))}
                      </div>
                    )}

                    {section.items && section.items.length > 0 && (
                      <ul className="flex flex-col gap-2 text-[13.5px]">
                        {section.items.map((item, i) => (
                          <li key={i} className="font-mono whitespace-pre-wrap">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.writingLines
                      ? Array.from({ length: section.writingLines }).map((_, i) => (
                          <div key={i} className="border-b border-neutral-400 h-8 mt-2" />
                        ))
                      : null}
                  </section>
                ))}
              </div>

              {ws.sections.length === 0 && (
                <p className="text-[13px] text-neutral-500 py-10 text-center">
                  This lesson is an outline — its worksheet has not been written yet.
                </p>
              )}
            </div>

            {ws.answerKey && ws.answerKey.length > 0 && (
              <div className="p-7 sm:p-9 bg-white text-black border-t-4 border-dashed border-neutral-300 print-page">
                <h3 className="text-[13px] font-bold uppercase tracking-wide mb-3">Answer key</h3>
                <ul className="flex flex-col gap-1.5 text-[13px]">
                  {ws.answerKey.map((a, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-neutral-500 shrink-0">{i + 1}.</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {ws.prepNotes && (
            <div className="no-print surface p-4 mt-4 flex gap-3">
              <IconAlert size={16} className="text-amber-500 shrink-0 mt-0.5" />
              <p className="text-[13px] leading-relaxed">
                <span className="font-semibold">Before printing: </span>
                {ws.prepNotes}
              </p>
            </div>
          )}
        </div>

        {/* -------------------------------------------------- prompt panel */}
        <aside className="no-print flex flex-col gap-3 xl:sticky xl:top-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-[15px]">Image prompts</h2>
            <span className="text-[12px] faint">
              {specs.length} dedicated prompt{specs.length === 1 ? '' : 's'}
            </span>
          </div>

          {specs.length === 0 ? (
            <div className="surface">
              <EmptyState
                icon={<IconImage size={20} />}
                title="No images in this worksheet"
                body="Outline lessons do not have worksheet images yet."
              />
            </div>
          ) : (
            specs.map((spec, i) => (
              <PromptCard
                key={spec.id}
                index={i + 1}
                spec={spec}
                composed={compose(spec)}
                styleName={resolveStyle(spec, effectiveStyle).name}
                saved={saved[spec.id]}
                busy={busySpecs.has(spec.id)}
                expanded={openSpec === spec.id}
                onToggle={() => setOpenSpec((c) => (c === spec.id ? null : spec.id))}
                onGenerate={() => void generate(spec)}
                onAttach={(f) => void attach(spec, f)}
                onClear={async () => {
                  const rec = saved[spec.id]
                  if (rec) {
                    await deleteSavedImage(rec.id)
                    await refresh()
                  }
                }}
                canGenerate={hasKey}
                colour={colour}
              />
            ))
          )}
        </aside>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- slot */

function ImageSlot({
  spec,
  saved,
  onFocus,
}: {
  spec: ImageSpec
  saved?: SavedImage
  onFocus: () => void
}) {
  const [url, setUrl] = useState<string | null>(null)

  useEffect(() => {
    if (!saved) {
      setUrl(null)
      return
    }
    const u = URL.createObjectURL(saved.image)
    setUrl(u)
    return () => URL.revokeObjectURL(u)
  }, [saved])

  const ratio = spec.aspect.split(':').map(Number)
  const paddingTop = `${(ratio[1] / ratio[0]) * 100}%`

  if (url) {
    return (
      <figure className="avoid-break">
        <img
          src={url}
          alt={spec.altText}
          className="w-full rounded border border-neutral-300 object-contain bg-white"
        />
      </figure>
    )
  }

  return (
    <button
      onClick={onFocus}
      className="no-print block w-full text-left group avoid-break"
      title="Show this image's prompt"
    >
      <div
        className="relative w-full rounded border-2 border-dashed border-neutral-300 bg-neutral-50 group-hover:border-blue-400 group-hover:bg-blue-50/40 transition-colors"
        style={{ paddingTop }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-3 text-center">
          <IconImage size={20} className="text-neutral-400" />
          <span className="text-[11px] font-medium text-neutral-600 leading-tight">
            {spec.slot}
          </span>
          <span className="text-[10px] text-neutral-400">
            {spec.aspect}
            {spec.count != null && ` · exactly ${spec.count}`}
          </span>
        </div>
      </div>
    </button>
  )
}

/* -------------------------------------------------------- prompt card */

function PromptCard({
  index,
  spec,
  composed,
  styleName,
  saved,
  busy,
  expanded,
  onToggle,
  onGenerate,
  onAttach,
  onClear,
  canGenerate,
  colour,
}: {
  index: number
  spec: ImageSpec
  composed: ReturnType<typeof composePrompt>
  styleName: string
  saved?: SavedImage
  busy: boolean
  expanded: boolean
  onToggle: () => void
  onGenerate: () => void
  onAttach: (f: File) => void
  onClear: () => void
  canGenerate: boolean
  colour: string
}) {
  return (
    <div
      className={clsx(
        'surface overflow-hidden transition-shadow',
        expanded && 'shadow-md ring-1 ring-blue-500/25',
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-3 p-3.5 text-left hover:bg-[var(--surface-3)] transition-colors"
      >
        <span
          className="w-6 h-6 rounded-md grid place-items-center text-[11px] font-bold shrink-0 mt-0.5"
          style={{ background: `color-mix(in srgb, ${colour} 18%, transparent)`, color: colour }}
        >
          {index}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[13.5px] font-medium">{spec.slot}</span>
          <span className="flex flex-wrap items-center gap-1.5 mt-1">
            <Badge>{spec.aspect}</Badge>
            <Badge tone="info">{styleName}</Badge>
            {spec.count != null && <Badge tone="warn">exactly {spec.count}</Badge>}
            {saved && (
              <Badge tone="success">
                <IconCheck size={10} /> filled
              </Badge>
            )}
          </span>
        </span>
      </button>

      {expanded && (
        <div className="border-t p-3.5 flex flex-col gap-3 animate-fade-up">
          <p className="text-[12.5px] muted leading-relaxed">
            <span className="font-semibold text-[var(--text)]">Why: </span>
            {spec.purpose}
          </p>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-wide faint">Prompt</span>
              <CopyButton text={composed.prompt} />
            </div>
            <pre className="text-[12px] leading-relaxed whitespace-pre-wrap font-mono bg-[var(--surface-2)] border rounded-lg p-3 max-h-64 overflow-y-auto scroll-thin select-all">
              {composed.prompt}
            </pre>
          </div>

          {composed.negativePrompt && (
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-semibold uppercase tracking-wide faint">
                  Negative prompt
                </span>
                <CopyButton text={composed.negativePrompt} />
              </div>
              <pre className="text-[12px] leading-relaxed whitespace-pre-wrap font-mono bg-[var(--surface-2)] border rounded-lg p-3 max-h-32 overflow-y-auto scroll-thin select-all">
                {composed.negativePrompt}
              </pre>
            </div>
          )}

          {composed.notes.length > 0 && (
            <ul className="flex flex-col gap-1.5">
              {composed.notes.map((n, i) => (
                <li key={i} className="flex gap-2 text-[12px] muted leading-relaxed">
                  <span className="faint shrink-0">·</span>
                  {n}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 pt-1 border-t pt-3">
            <Button
              size="sm"
              variant="primary"
              onClick={onGenerate}
              disabled={busy || !canGenerate}
              icon={<IconSparkle size={13} />}
              title={canGenerate ? undefined : 'Add an API key in Settings'}
            >
              {busy ? 'Generating…' : 'Generate'}
            </Button>

            <label className="inline-flex">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0]
                  if (f) onAttach(f)
                  e.target.value = ''
                }}
              />
              <span className="inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[13px] font-medium bg-[var(--surface)] border border-[var(--border-strong)] hover:bg-[var(--surface-3)] cursor-pointer transition-colors">
                Attach file
              </span>
            </label>

            {saved && (
              <Button size="sm" variant="ghost" onClick={onClear} icon={<IconTrash size={13} />}>
                Clear
              </Button>
            )}
          </div>

          <p className="text-[11px] faint leading-relaxed">
            Alt text: {spec.altText}
          </p>
        </div>
      )}
    </div>
  )
}
