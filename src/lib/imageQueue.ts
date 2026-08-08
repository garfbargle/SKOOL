import { create } from 'zustand'
import { composePrompt } from '../curriculum/promptComposer'
import { GRADE_BY_ID, SUBJECT_BY_ID } from '../curriculum/taxonomy'
import type {
  AspectRatio,
  GradeId,
  ImageSpec,
  Lesson,
  ModelTarget,
  StylePresetId,
  SubjectId,
} from '../curriculum/types'
import { filledSlots, saveGeneratedImage, uid, type SavedImage } from './db'
import { generateImage as generateViaOpenAI } from './imagegen'
import {
  estimatePerImage,
  formatUsd,
  generateImage as generateViaOpenRouter,
  loadImageModels,
  loadPricing,
  type SupportedParameters,
} from './openrouter'
import { usePrefs, useToasts } from './store'

/**
 * One queue for the whole app.
 *
 * A worksheet needs five to ten images and a week of lessons needs fifty, so
 * generating them has to be something you start and then walk away from. The
 * queue is global rather than owned by the worksheet page for exactly that
 * reason: you can kick off a week's worth, navigate to the planner, and watch
 * the dock fill in.
 *
 * Every finished image is written to IndexedDB the moment it arrives, not at
 * the end of the run. That is what makes the whole thing safe to interrupt —
 * closing the tab halfway costs you the images still in flight and nothing
 * else, and starting the same run again simply skips whatever already landed.
 */

export type JobStatus = 'pending' | 'running' | 'done' | 'failed' | 'cancelled'

export interface QueueJob {
  id: string
  lessonId: string
  lessonTitle: string
  gradeId: GradeId
  subjectId: SubjectId
  specId: string
  slot: string
  aspect: AspectRatio
  prompt: string
  status: JobStatus
  attempts: number
  error?: string
  costUsd?: number
}

/** A job as planned, before it enters the queue. */
export type PlannedJob = Omit<QueueJob, 'id' | 'status' | 'attempts'>

interface QueueState {
  jobs: QueueJob[]
  running: boolean
  /** Actual USD billed across the current run, summed from each response. */
  spentUsd: number
  /** Set when the dock should be visible; cleared when the user dismisses it. */
  visible: boolean
  enqueue: (jobs: PlannedJob[]) => void
  cancel: () => void
  retryFailed: () => void
  dismiss: () => void
}

let controllers = new Set<AbortController>()
let pumping = false

export const useQueue = create<QueueState>((set, get) => ({
  jobs: [],
  running: false,
  spentUsd: 0,
  visible: false,

  enqueue: (planned) => {
    if (!planned.length) return
    const jobs: QueueJob[] = planned.map((j) => ({
      ...j,
      id: uid(),
      status: 'pending',
      attempts: 0,
    }))
    set((s) => ({
      // A finished run's jobs are cleared out when a new one starts, so the
      // dock always shows the run you just asked for.
      jobs: s.running ? [...s.jobs, ...jobs] : jobs,
      spentUsd: s.running ? s.spentUsd : 0,
      running: true,
      visible: true,
    }))
    void pump()
  },

  cancel: () => {
    for (const c of controllers) c.abort()
    controllers = new Set()
    set((s) => ({
      jobs: s.jobs.map((j) =>
        j.status === 'pending' || j.status === 'running' ? { ...j, status: 'cancelled' } : j,
      ),
      running: false,
    }))
  },

  retryFailed: () => {
    const hasFailed = get().jobs.some((j) => j.status === 'failed' || j.status === 'cancelled')
    if (!hasFailed) return
    set((s) => ({
      jobs: s.jobs.map((j) =>
        j.status === 'failed' || j.status === 'cancelled'
          ? { ...j, status: 'pending', attempts: 0, error: undefined }
          : j,
      ),
      running: true,
      visible: true,
    }))
    void pump()
  },

  dismiss: () => set({ visible: false, jobs: [], spentUsd: 0 }),
}))

/* -------------------------------------------------------------- the runner */

/** Errors worth a second attempt: transport blips, rate limits, provider 5xx. */
function isRetryable(err: unknown): boolean {
  if (err instanceof DOMException && err.name === 'AbortError') return false
  const message = err instanceof Error ? err.message : String(err)
  return /429|5\d\d|rate.?limit|timeout|network|fetch failed|temporarily/i.test(message)
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function runJob(job: QueueJob, params: SupportedParameters | undefined) {
  const prefs = usePrefs.getState()
  const controller = new AbortController()
  controllers.add(controller)

  try {
    let blob: Blob
    let costUsd: number | null = null
    let model: string

    if (prefs.openrouterKey.trim()) {
      model = prefs.imageModel
      const result = await generateViaOpenRouter({
        apiKey: prefs.openrouterKey,
        model,
        prompt: job.prompt,
        aspect: job.aspect,
        resolution: prefs.imageResolution,
        quality: prefs.imageQuality,
        params,
        signal: controller.signal,
      })
      blob = result.blob
      costUsd = result.costUsd
    } else {
      model = 'gpt-image-1'
      const result = await generateViaOpenAI(
        job.prompt,
        job.aspect,
        prefs.openaiKey,
        controller.signal,
      )
      blob = result.blob
    }

    const record: SavedImage = {
      id: uid(),
      specId: job.specId,
      lessonId: job.lessonId,
      image: blob,
      prompt: job.prompt,
      model,
      aspect: job.aspect,
      provider: prefs.openrouterKey.trim() ? 'openrouter' : 'openai',
      costUsd: costUsd ?? undefined,
      createdAt: Date.now(),
    }
    await saveGeneratedImage(record)

    useQueue.setState((s) => ({
      jobs: s.jobs.map((j) =>
        j.id === job.id ? { ...j, status: 'done', costUsd: costUsd ?? undefined } : j,
      ),
      spentUsd: s.spentUsd + (costUsd ?? 0),
    }))
  } finally {
    controllers.delete(controller)
  }
}

/**
 * Pulls pending jobs until the queue drains, keeping `concurrency` in flight.
 * Only one pump ever runs; enqueueing during a run just widens the pool.
 */
async function pump() {
  if (pumping) return
  pumping = true

  try {
    // Model capabilities decide which request parameters are legal, so they
    // are resolved once per run rather than once per image.
    const modelId = usePrefs.getState().imageModel
    let params: SupportedParameters | undefined
    try {
      const models = await loadImageModels()
      params = models.find((m) => m.id === modelId)?.supported_parameters
    } catch {
      // Generation still works without the capability map; it just sends fewer
      // optional parameters.
    }

    const limit = Math.max(1, Math.min(6, usePrefs.getState().concurrency))
    const inFlight = new Set<Promise<void>>()

    const take = (): QueueJob | undefined => {
      const next = useQueue.getState().jobs.find((j) => j.status === 'pending')
      if (!next) return undefined
      useQueue.setState((s) => ({
        jobs: s.jobs.map((j) =>
          j.id === next.id ? { ...j, status: 'running', attempts: j.attempts + 1 } : j,
        ),
      }))
      return next
    }

    const attempt = async (job: QueueJob) => {
      try {
        await runJob(job, params)
      } catch (err) {
        const cancelled = err instanceof DOMException && err.name === 'AbortError'
        const current = useQueue.getState().jobs.find((j) => j.id === job.id)
        if (cancelled || !current || current.status === 'cancelled') return

        if (isRetryable(err) && current.attempts < 3) {
          await sleep(1200 * current.attempts)
          // A cancel during the backoff must not resurrect the job.
          if (!useQueue.getState().running) return
          useQueue.setState((s) => ({
            jobs: s.jobs.map((j) => (j.id === job.id ? { ...j, status: 'pending' } : j)),
          }))
          return
        }

        useQueue.setState((s) => ({
          jobs: s.jobs.map((j) =>
            j.id === job.id
              ? {
                  ...j,
                  status: 'failed',
                  error: err instanceof Error ? err.message : 'Generation failed.',
                }
              : j,
          ),
        }))
      }
    }

    while (useQueue.getState().running) {
      while (inFlight.size < limit) {
        const job = take()
        if (!job) break
        const promise = attempt(job).finally(() => inFlight.delete(promise))
        inFlight.add(promise)
      }
      if (!inFlight.size) break
      await Promise.race(inFlight)
    }

    await Promise.allSettled(inFlight)

    const { jobs, spentUsd, running } = useQueue.getState()
    // A cancel already reported itself; only summarise a run that finished.
    if (running) {
      useQueue.setState({ running: false })
      const done = jobs.filter((j) => j.status === 'done').length
      const failed = jobs.filter((j) => j.status === 'failed').length
      const push = useToasts.getState().push
      if (failed) {
        push(`${done} image${done === 1 ? '' : 's'} saved, ${failed} failed.`, 'error')
      } else if (done) {
        const cost = spentUsd > 0 ? ` · ${formatUsd(spentUsd)}` : ''
        push(`${done} image${done === 1 ? '' : 's'} generated and saved${cost}.`, 'success')
      }
    }
  } finally {
    pumping = false
    // A job re-queued for retry right at the end would otherwise be stranded.
    const { running, jobs } = useQueue.getState()
    if (running && jobs.some((j) => j.status === 'pending')) void pump()
  }
}

/* ------------------------------------------------------------- job planning */

/**
 * The prompt dialect that suits the model actually doing the work.
 *
 * The prompt-format selector in the studio governs what you *copy out* to a
 * generator you drive by hand. When Skool drives the model itself it knows
 * which one it is talking to, so it picks the dialect that model reads best
 * instead of making that the adult's problem.
 */
export function targetForModel(modelId: string): ModelTarget {
  if (modelId.startsWith('black-forest-labs/')) return 'flux'
  if (modelId.includes('ideogram')) return 'ideogram'
  // Prose beats keyword soup on every current instruction-following model, and
  // these are the ones a worksheet depends on for exact counts.
  if (modelId.startsWith('openai/') || modelId.startsWith('google/')) return 'gpt-image'
  if (modelId.startsWith('stability') || modelId.includes('sdxl')) return 'sdxl'
  return 'universal'
}

export function specsForLesson(lesson: Lesson): ImageSpec[] {
  return lesson.worksheet.sections.flatMap((s) => s.images ?? [])
}

export interface PlanOptions {
  styleOverride: StylePresetId | null
  /** Prompt dialect. Defaults to whatever suits the configured model. */
  target?: ModelTarget
  /** Include slots that already have an image. Defaults to false. */
  includeFilled?: boolean
}

/**
 * Works out exactly what is missing across a set of lessons and writes the
 * prompt for each one. Nothing here spends money — the result is what the
 * confirmation dialog prices up before anything is queued.
 */
export async function planJobs(
  lessons: Lesson[],
  { styleOverride, target, includeFilled = false }: PlanOptions,
): Promise<PlannedJob[]> {
  const dialect = target ?? targetForModel(usePrefs.getState().imageModel)
  const filled = includeFilled ? new Set<string>() : await filledSlots(lessons.map((l) => l.id))

  const jobs: PlannedJob[] = []
  for (const lesson of lessons) {
    const grade = GRADE_BY_ID[lesson.gradeId]
    const subject = SUBJECT_BY_ID[lesson.subjectId]

    for (const spec of specsForLesson(lesson)) {
      if (filled.has(`${lesson.id}:${spec.id}`)) continue
      const composed = composePrompt(spec, {
        gradeName: grade.name,
        subjectName: subject.name,
        lessonTitle: lesson.title,
        defaultStyle: styleOverride ?? lesson.worksheet.style,
        target: dialect,
      })
      jobs.push({
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        gradeId: lesson.gradeId,
        subjectId: lesson.subjectId,
        specId: spec.id,
        slot: spec.slot,
        aspect: spec.aspect,
        prompt: composed.prompt,
      })
    }
  }
  return jobs
}

/* ------------------------------------------------------------------ costing */

export interface CostEstimate {
  count: number
  /** Null when the model publishes no output price. */
  perImage: number | null
  total: number | null
}

/** Prices a planned run using the currently configured model and resolution. */
export async function estimateRun(count: number): Promise<CostEstimate> {
  const { imageModel, imageResolution, imageQuality, openrouterKey } = usePrefs.getState()
  if (!openrouterKey.trim()) return { count, perImage: null, total: null }

  const pricing = await loadPricing(imageModel)
  const perImage = estimatePerImage(imageModel, pricing, {
    resolution: imageResolution,
    quality: imageQuality,
  })
  return { count, perImage, total: perImage == null ? null : perImage * count }
}
