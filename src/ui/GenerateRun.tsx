import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import type { Lesson } from '../curriculum/types'
import { estimateRun, planJobs, useQueue, type PlannedJob } from '../lib/imageQueue'
import { formatUsd } from '../lib/openrouter'
import { usePrefs, useToasts } from '../lib/store'
import { Badge, Button, Modal } from './primitives'
import { IconAlert, IconCheck, IconImage, IconRefresh, IconSparkle, IconStop } from './icons'
import { ModelPicker, OutputControls } from './ModelPicker'

/**
 * The single button.
 *
 * Everything that has to happen before a batch of images can be generated —
 * finding which slots are empty, writing a prompt for each, choosing a model,
 * pricing the run, and collecting an API key if there isn't one yet — happens
 * behind this one control. The adult presses "Generate", reads one number, and
 * presses "Start".
 */

export function GenerateAllButton({
  collect,
  label = 'Generate all images',
  scope,
  size = 'md',
  variant = 'primary',
  className,
}: {
  /** Resolves the lessons in scope. Async because courses load lazily. */
  collect: () => Promise<Lesson[]>
  label?: string
  /** Human description of what is covered, e.g. "this week's 6 lessons". */
  scope: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const [planning, setPlanning] = useState(false)
  const [jobs, setJobs] = useState<PlannedJob[] | null>(null)
  const push = useToasts((s) => s.push)
  const running = useQueue((s) => s.running)

  async function start() {
    setPlanning(true)
    try {
      const lessons = await collect()
      const planned = await planJobs(lessons, {
        styleOverride: usePrefs.getState().styleOverride,
      })
      if (!planned.length) {
        push('Every image in scope has already been generated.', 'success')
        return
      }
      setJobs(planned)
      setOpen(true)
    } catch (err) {
      push(err instanceof Error ? err.message : 'Could not work out what to generate.', 'error')
    } finally {
      setPlanning(false)
    }
  }

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() => void start()}
        disabled={planning || running}
        icon={<IconSparkle size={size === 'sm' ? 13 : 15} />}
        title={running ? 'A generation run is already in progress' : undefined}
      >
        {planning ? 'Checking…' : running ? 'Generating…' : label}
      </Button>

      <RunDialog
        open={open}
        onClose={() => setOpen(false)}
        jobs={jobs ?? []}
        scope={scope}
      />
    </>
  )
}

/* ------------------------------------------------------------- the dialog */

function RunDialog({
  open,
  onClose,
  jobs,
  scope,
}: {
  open: boolean
  onClose: () => void
  jobs: PlannedJob[]
  scope: string
}) {
  const { openrouterKey, setOpenrouterKey, openaiKey, imageModel, imageResolution, imageQuality } =
    usePrefs()
  const enqueue = useQueue((s) => s.enqueue)

  const [estimate, setEstimate] = useState<{ perImage: number | null; total: number | null } | null>(
    null,
  )
  const [keyDraft, setKeyDraft] = useState('')

  const hasKey = Boolean(openrouterKey.trim() || openaiKey.trim())
  const lessonCount = new Set(jobs.map((j) => j.lessonId)).size

  // Re-price whenever anything that moves the number changes.
  useEffect(() => {
    if (!open) return
    let cancelled = false
    setEstimate(null)
    void estimateRun(jobs.length).then((e) => {
      if (!cancelled) setEstimate({ perImage: e.perImage, total: e.total })
    })
    return () => {
      cancelled = true
    }
  }, [open, jobs.length, imageModel, imageResolution, imageQuality, openrouterKey])

  function begin() {
    enqueue(jobs)
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title="Generate worksheet images" wide>
      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-3 rounded-lg border p-3.5 bg-[var(--surface-2)]">
          <IconImage size={17} className="shrink-0 mt-0.5 text-blue-500" />
          <p className="text-[13.5px] leading-relaxed">
            <strong>
              {jobs.length} image{jobs.length === 1 ? '' : 's'}
            </strong>{' '}
            still missing across {scope}
            {lessonCount > 1 && ` (${lessonCount} lessons)`}. Slots that already have an image are
            skipped, so nothing is generated twice.
          </p>
        </div>

        {!hasKey ? (
          <div className="flex flex-col gap-2.5">
            <h3 className="font-semibold text-[14px]">Add an OpenRouter key to generate in-app</h3>
            <p className="text-[13px] muted leading-relaxed">
              One key reaches every image model. Create one at{' '}
              <a
                href="https://openrouter.ai/keys"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-600 dark:text-blue-400 underline underline-offset-2"
              >
                openrouter.ai/keys
              </a>
              , paste it below, and it stays in this browser.
            </p>
            <div className="flex gap-2">
              <input
                type="password"
                value={keyDraft}
                onChange={(e) => setKeyDraft(e.target.value)}
                placeholder="sk-or-v1-…"
                spellCheck={false}
                autoComplete="off"
                className="flex-1 px-3 py-2 rounded-lg border bg-[var(--surface-2)] text-[13px] font-mono outline-none focus:border-blue-500"
              />
              <Button
                variant="primary"
                onClick={() => setOpenrouterKey(keyDraft.trim())}
                disabled={!keyDraft.trim()}
              >
                Save key
              </Button>
            </div>
          </div>
        ) : openrouterKey.trim() ? (
          <>
            <div>
              <h3 className="font-semibold text-[14px] mb-2">Model</h3>
              <ModelPicker compact />
            </div>
            <OutputControls />
          </>
        ) : (
          <p className="text-[13px] muted leading-relaxed">
            Using your OpenAI key with <code className="text-[11.5px]">gpt-image-1</code>. Add an
            OpenRouter key in <Link to="/settings" className="text-blue-600 dark:text-blue-400 underline underline-offset-2">Settings</Link>{' '}
            to choose from every image model and see costs before each run.
          </p>
        )}

        {hasKey && (
          <div className="rounded-lg border p-3.5 flex items-center justify-between gap-4">
            <div>
              <p className="text-[13px] font-medium">Estimated cost</p>
              <p className="text-[12px] faint mt-0.5">
                {estimate?.perImage != null
                  ? `${jobs.length} × ${formatUsd(estimate.perImage)} per image`
                  : 'Billed by your provider at the end of the run.'}
              </p>
            </div>
            <p className="text-[22px] font-semibold tabular-nums shrink-0">
              {estimate === null ? '…' : estimate.total == null ? '—' : `~${formatUsd(estimate.total)}`}
            </p>
          </div>
        )}

        <p className="text-[12px] faint leading-relaxed">
          An estimate, not a quote — the exact figure comes back with each image and is totalled in
          Settings. You can close this tab mid-run; every finished image is saved as it arrives, and
          starting again picks up where it left off.
        </p>

        <div className="flex justify-end gap-2 pt-1 border-t pt-4">
          <Button onClick={onClose}>Cancel</Button>
          <Button
            variant="primary"
            onClick={begin}
            disabled={!hasKey || !jobs.length}
            icon={<IconSparkle size={15} />}
          >
            Generate {jobs.length} image{jobs.length === 1 ? '' : 's'}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

/* ---------------------------------------------------------------- the dock */

/**
 * Live progress, pinned to the corner of every screen so a long run is
 * watchable from wherever you happen to be working.
 */
export function GenerationDock() {
  const { jobs, running, spentUsd, visible, cancel, retryFailed, dismiss } = useQueue()
  const [expanded, setExpanded] = useState(false)

  // Losing a run to an accidental refresh is the one failure worth interrupting
  // the browser for; anything already generated is safe on disk.
  useEffect(() => {
    if (!running) return
    const warn = (e: BeforeUnloadEvent) => e.preventDefault()
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [running])

  if (!visible || !jobs.length) return null

  const done = jobs.filter((j) => j.status === 'done').length
  const failed = jobs.filter((j) => j.status === 'failed')
  const active = jobs.filter((j) => j.status === 'running')
  const pct = Math.round((done / jobs.length) * 100)

  return (
    <div className="no-print fixed bottom-4 right-4 z-[55] w-[min(24rem,calc(100vw-2rem))] surface shadow-lg overflow-hidden animate-fade-up">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center gap-3 p-3.5 text-left hover:bg-[var(--surface-3)] transition-colors"
      >
        <span className="shrink-0">
          {running ? (
            <span className="block w-4 h-4 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
          ) : failed.length ? (
            <IconAlert size={17} className="text-amber-500" />
          ) : (
            <IconCheck size={17} className="text-emerald-500" />
          )}
        </span>

        <span className="min-w-0 flex-1">
          <span className="block text-[13.5px] font-medium">
            {running
              ? `Generating images — ${done} of ${jobs.length}`
              : failed.length
                ? `${done} saved, ${failed.length} failed`
                : `${done} image${done === 1 ? '' : 's'} saved`}
          </span>
          <span className="block text-[11.5px] faint mt-0.5 truncate">
            {running && active[0]
              ? active[0].slot
              : // When a run fails wholesale the reason is the only thing worth
                // showing — every job carries the same one.
                !done && failed[0]?.error
                ? failed[0].error
                : spentUsd > 0
                  ? `${formatUsd(spentUsd)} billed`
                  : 'Saved to this device'}
          </span>
        </span>

        <span className="text-[12px] tabular-nums faint shrink-0">{pct}%</span>
      </button>

      <div className="h-1 bg-[var(--surface-3)]">
        <div
          className={clsx('h-full transition-all duration-300', failed.length ? 'bg-amber-500' : 'bg-blue-500')}
          style={{ width: `${pct}%` }}
        />
      </div>

      {expanded && (
        <div className="max-h-64 overflow-y-auto scroll-thin border-t divide-y">
          {jobs.map((job) => (
            <div key={job.id} className="flex items-start gap-2.5 px-3.5 py-2">
              <span className="mt-0.5 shrink-0">
                {job.status === 'done' && <IconCheck size={13} className="text-emerald-500" />}
                {job.status === 'running' && (
                  <span className="block w-3 h-3 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
                )}
                {job.status === 'failed' && <IconAlert size={13} className="text-rose-500" />}
                {(job.status === 'pending' || job.status === 'cancelled') && (
                  <span className="block w-3 h-3 rounded-full border border-[var(--border-strong)]" />
                )}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[12.5px] leading-snug">{job.slot}</span>
                <span className="block text-[11px] faint truncate">
                  {job.error ?? job.lessonTitle}
                </span>
              </span>
              <Badge>{job.aspect}</Badge>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-2 p-3 border-t">
        {running ? (
          <Button size="sm" variant="ghost" onClick={cancel} icon={<IconStop size={13} />}>
            Stop
          </Button>
        ) : (
          <>
            {failed.length > 0 && (
              <Button size="sm" onClick={retryFailed} icon={<IconRefresh size={13} />}>
                Retry {failed.length}
              </Button>
            )}
            <Button size="sm" variant="ghost" onClick={dismiss} className="ml-auto">
              Dismiss
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

/**
 * How many image slots in these lessons are still empty. Recounted whenever
 * the queue finishes something, so a button's label ticks down during a run.
 */
export function useMissingCount(lessons: Lesson[]): number | null {
  const [count, setCount] = useState<number | null>(null)
  const doneCount = useQueue((s) => s.jobs.filter((j) => j.status === 'done').length)
  const ids = lessons.map((l) => l.id).join(',')

  useEffect(() => {
    let cancelled = false
    void planJobs(lessons, { styleOverride: usePrefs.getState().styleOverride }).then((jobs) => {
      if (!cancelled) setCount(jobs.length)
    })
    return () => {
      cancelled = true
    }
    // `lessons` is rebuilt each render by its caller; the ids are the real key.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids, doneCount])

  return count
}

/**
 * Re-renders a subscriber whenever the queue finishes writing images for a
 * lesson, so pages showing saved images refresh themselves during a run.
 */
export function useQueueCompletions(lessonId: string | undefined, onChange: () => void) {
  const stable = useCallback(onChange, [onChange])

  useEffect(() => {
    if (!lessonId) return
    let lastDone = 0
    return useQueue.subscribe((state) => {
      const done = state.jobs.filter((j) => j.lessonId === lessonId && j.status === 'done').length
      if (done !== lastDone) {
        lastDone = done
        stable()
      }
    })
  }, [lessonId, stable])
}
