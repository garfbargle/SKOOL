import { AVAILABLE_COURSES, loadCourse } from '../curriculum/registry'
import { GRADE_BY_ID, SUBJECT_BY_ID } from '../curriculum/taxonomy'
import type { GradeId, SubjectId } from '../curriculum/types'

/**
 * A flat searchable index over every course in the build.
 *
 * Courses are lazy chunks, so the index is warmed in the background after the
 * app is interactive rather than at boot. Opening the palette before warming
 * finishes still works — it searches whatever has landed and shows progress.
 */

export type SearchKind = 'course' | 'unit' | 'lesson'

export interface SearchEntry {
  kind: SearchKind
  title: string
  subtitle: string
  path: string
  gradeId: GradeId
  subjectId: SubjectId
  /** Lowercased haystack. */
  hay: string
  authored?: boolean
}

let entries: SearchEntry[] = []
let warming: Promise<void> | null = null
let warmed = 0

export function indexProgress() {
  return { done: warmed, total: AVAILABLE_COURSES.size }
}

export function currentEntries() {
  return entries
}

export function warmIndex(): Promise<void> {
  if (warming) return warming

  warming = (async () => {
    const keys = [...AVAILABLE_COURSES].map((k) => k.split(':') as [GradeId, SubjectId])
    const next: SearchEntry[] = []

    for (const [gradeId, subjectId] of keys) {
      const course = await loadCourse(gradeId, subjectId)
      warmed++
      if (!course) continue

      const grade = GRADE_BY_ID[gradeId]
      const subject = SUBJECT_BY_ID[subjectId]
      const base = `/c/${gradeId}/${subjectId}`
      const where = `${grade?.name ?? gradeId} · ${subject?.name ?? subjectId}`

      next.push({
        kind: 'course',
        title: course.title,
        subtitle: where,
        path: base,
        gradeId,
        subjectId,
        hay: `${course.title} ${where} ${course.overview}`.toLowerCase(),
      })

      for (const unit of course.units) {
        next.push({
          kind: 'unit',
          title: unit.title,
          subtitle: `${where} · Unit ${unit.sequence}`,
          path: `${base}#${unit.id}`,
          gradeId,
          subjectId,
          hay: `${unit.title} ${unit.bigIdea} ${where}`.toLowerCase(),
        })

        for (const lesson of unit.lessons) {
          next.push({
            kind: 'lesson',
            title: lesson.title,
            subtitle: `${where} · ${unit.title}`,
            path: `${base}/${lesson.id}`,
            gradeId,
            subjectId,
            authored: lesson.status === 'authored',
            hay: `${lesson.title} ${lesson.summary} ${lesson.essentialQuestion} ${unit.title} ${where} ${lesson.standards.map((s) => s.code).join(' ')}`.toLowerCase(),
          })
        }
      }

      // Publish incrementally so the palette is useful while warming.
      entries = next.slice()
    }
  })()

  return warming
}

/** Warm during idle time so it never competes with first paint. */
export function scheduleWarm() {
  const run = () => void warmIndex()
  if ('requestIdleCallback' in window) {
    ;(window as { requestIdleCallback: (cb: () => void, o?: { timeout: number }) => void }).requestIdleCallback(
      run,
      { timeout: 3000 },
    )
  } else {
    setTimeout(run, 1200)
  }
}

const KIND_RANK: Record<SearchKind, number> = { lesson: 0, unit: 1, course: 2 }

export function search(query: string, limit = 24): SearchEntry[] {
  const q = query.trim().toLowerCase()
  if (!q) {
    return entries
      .filter((e) => e.kind === 'lesson' && e.authored)
      .slice(0, limit)
  }

  const terms = q.split(/\s+/)
  const scored: { entry: SearchEntry; score: number }[] = []

  for (const entry of entries) {
    let score = 0
    let matchedAll = true

    for (const term of terms) {
      const inTitle = entry.title.toLowerCase().includes(term)
      const inHay = entry.hay.includes(term)
      if (!inHay) {
        matchedAll = false
        break
      }
      score += inTitle ? 10 : 2
      if (entry.title.toLowerCase().startsWith(term)) score += 6
    }

    if (!matchedAll) continue
    score -= KIND_RANK[entry.kind]
    if (entry.authored) score += 3
    scored.push({ entry, score })
  }

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.entry)
}
