import { SPINE, type SpineLesson } from '../curriculum/spine.generated'
export type { SpineLesson }
import { SUBJECTS } from '../curriculum/taxonomy'
import type { GradeId, SubjectId } from '../curriculum/types'
import type { LessonRecord } from './db'

/**
 * Progress, derived rather than stored.
 *
 * Everything here is computed from the lesson spine plus whatever records the
 * learner has, so there is no second source of truth to keep in sync and no
 * migration to run when a course gains a lesson. All of it is cheap enough to
 * call during render.
 */

export interface PathStep extends SpineLesson {
  unitId: string
  unitTitle: string
  unitSequence: number
  /** 1-based position across the whole course, counting locked steps. */
  index: number
  status: 'done' | 'in-progress' | 'planned' | 'locked'
}

export interface SubjectProgress {
  gradeId: GradeId
  subjectId: SubjectId
  courseTitle: string
  steps: PathStep[]
  /** Teachable lessons only — locked outlines are not counted against you. */
  total: number
  done: number
  percent: number
  /** The lesson to open next: the one in progress, else the first unfinished. */
  next: PathStep | null
}

export function courseProgress(
  gradeId: GradeId,
  subjectId: SubjectId,
  records: Record<string, LessonRecord>,
): SubjectProgress | null {
  const course = SPINE[`${gradeId}:${subjectId}`]
  if (!course) return null

  const steps: PathStep[] = []
  let index = 0

  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      index++
      const record = lesson.id ? records[lesson.id] : undefined
      steps.push({
        ...lesson,
        unitId: unit.id,
        unitTitle: unit.title,
        unitSequence: unit.sequence,
        index,
        status: !lesson.authored
          ? 'locked'
          : record?.status === 'done'
            ? 'done'
            : record?.status === 'in-progress'
              ? 'in-progress'
              : 'planned',
      })
    }
  }

  const teachable = steps.filter((s) => s.status !== 'locked')
  const done = teachable.filter((s) => s.status === 'done').length

  return {
    gradeId,
    subjectId,
    courseTitle: course.title,
    steps,
    total: teachable.length,
    done,
    percent: teachable.length ? Math.round((done / teachable.length) * 100) : 0,
    next:
      teachable.find((s) => s.status === 'in-progress') ??
      teachable.find((s) => s.status === 'planned') ??
      null,
  }
}

/**
 * The next lesson that can actually be taught after this one.
 *
 * Deliberately positional rather than record-driven: this is called the instant
 * a lesson is marked done, before that write has landed in the store, and it
 * must never offer an outline — a "next" button that leads to a lesson with no
 * script is worse than no button.
 */
export function nextTeachable(
  gradeId: GradeId,
  subjectId: SubjectId,
  afterLessonId: string,
): SpineLesson | null {
  const course = SPINE[`${gradeId}:${subjectId}`]
  if (!course) return null

  const flat = course.units.flatMap((u) => u.lessons)
  const i = flat.findIndex((l) => l.id === afterLessonId)
  if (i === -1) return null

  return flat.slice(i + 1).find((l) => l.authored && l.id) ?? null
}

/** All four subjects for a grade, in curriculum order. Missing courses are null. */
export function gradeProgress(gradeId: GradeId, records: Record<string, LessonRecord>) {
  return SUBJECTS.map((subject) => ({
    subject,
    progress: courseProgress(gradeId, subject.id, records),
  }))
}

/**
 * What to offer as "today's lesson": whatever is already underway, otherwise
 * the next step in the subject that has been touched most recently, otherwise
 * simply the first subject that has a course. Picking up where you actually
 * left off beats a fixed subject order.
 */
export function suggestedNext(gradeId: GradeId, records: Record<string, LessonRecord>) {
  const all = gradeProgress(gradeId, records).filter(
    (s): s is { subject: (typeof SUBJECTS)[number]; progress: SubjectProgress } =>
      s.progress !== null && s.progress.next !== null,
  )
  if (!all.length) return null

  const underway = all.find((s) => s.progress.next!.status === 'in-progress')
  if (underway) return underway

  const lastTouched = (p: SubjectProgress) =>
    Object.values(records)
      .filter((r) => r.subjectId === p.subjectId && r.gradeId === p.gradeId)
      .reduce((max, r) => Math.max(max, r.updatedAt), 0)

  return [...all].sort((a, b) => lastTouched(b.progress) - lastTouched(a.progress))[0]
}

/* ------------------------------------------------------------------ streak */

const DAY = 86_400_000
const dayKey = (ms: number) => {
  const d = new Date(ms)
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
}

export interface Streak {
  /** Consecutive days ending today or yesterday. Yesterday still counts so a
   *  morning check-in does not show the streak as already broken. */
  days: number
  thisWeek: number
  total: number
}

export function streak(records: Record<string, LessonRecord>): Streak {
  const completed = Object.values(records)
    .filter((r) => r.status === 'done' && r.completedAt)
    .map((r) => r.completedAt!)

  const days = new Set(completed.map(dayKey))

  let run = 0
  const now = Date.now()
  // Start from today if there is work today, otherwise from yesterday.
  let cursor = days.has(dayKey(now)) ? now : now - DAY
  while (days.has(dayKey(cursor))) {
    run++
    cursor -= DAY
  }

  const weekAgo = now - 7 * DAY
  return {
    days: run,
    thisWeek: completed.filter((t) => t >= weekAgo).length,
    total: completed.length,
  }
}
