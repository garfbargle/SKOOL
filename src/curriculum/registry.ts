import type { GradeId, Lesson, SubjectCourse, SubjectId, Unit } from './types'

/**
 * Courses live in `content/<gradeId>/<subjectId>.ts` and are discovered
 * automatically. Nothing has to be registered by hand, which means content
 * files can be added independently without ever touching a shared index.
 *
 * Each course is a separate lazy chunk — the app ships a small bundle and
 * fetches a course only when it is opened.
 */
const modules = import.meta.glob<{ default: SubjectCourse }>('./content/*/*.ts')

export interface CourseKey {
  gradeId: GradeId
  subjectId: SubjectId
}

function parseKey(path: string): CourseKey | null {
  const m = path.match(/\.\/content\/([^/]+)\/([^/]+)\.ts$/)
  if (!m) return null
  return { gradeId: m[1] as GradeId, subjectId: m[2] as SubjectId }
}

/** Every course present in the build, as `${gradeId}:${subjectId}`. */
export const AVAILABLE_COURSES: ReadonlySet<string> = new Set(
  Object.keys(modules)
    .map(parseKey)
    .filter((k): k is CourseKey => k !== null)
    .map((k) => `${k.gradeId}:${k.subjectId}`),
)

export function hasCourse(gradeId: GradeId, subjectId: SubjectId) {
  return AVAILABLE_COURSES.has(`${gradeId}:${subjectId}`)
}

const cache = new Map<string, Promise<SubjectCourse | null>>()

export function loadCourse(gradeId: GradeId, subjectId: SubjectId): Promise<SubjectCourse | null> {
  const key = `${gradeId}:${subjectId}`
  const cached = cache.get(key)
  if (cached) return cached

  const loader = modules[`./content/${gradeId}/${subjectId}.ts`]
  const promise: Promise<SubjectCourse | null> = loader
    ? loader().then((m) => m.default)
    : Promise.resolve(null)

  cache.set(key, promise)
  return promise
}

/* ------------------------------------------------------------- traversal */

export function findUnit(course: SubjectCourse, unitId: string): Unit | undefined {
  return course.units.find((u) => u.id === unitId)
}

export function findLesson(course: SubjectCourse, lessonId: string): { unit: Unit; lesson: Lesson } | undefined {
  for (const unit of course.units) {
    const lesson = unit.lessons.find((l) => l.id === lessonId)
    if (lesson) return { unit, lesson }
  }
  return undefined
}

/** All lessons in a course, flattened in teaching order. */
export function allLessons(course: SubjectCourse): Lesson[] {
  return course.units.flatMap((u) => u.lessons)
}

export function authoredLessons(course: SubjectCourse): Lesson[] {
  return allLessons(course).filter((l) => l.status === 'authored')
}

/** Total image count across every worksheet in the course. */
export function countImages(course: SubjectCourse): number {
  return allLessons(course).reduce(
    (n, l) => n + l.worksheet.sections.reduce((m, s) => m + (s.images?.length ?? 0), 0),
    0,
  )
}

export interface CourseStats {
  units: number
  lessons: number
  authored: number
  images: number
  weeks: number
}

export function courseStats(course: SubjectCourse): CourseStats {
  const lessons = allLessons(course)
  return {
    units: course.units.length,
    lessons: course.units.reduce((n, u) => n + Math.max(u.lessonTitles.length, u.lessons.length), 0),
    authored: lessons.filter((l) => l.status === 'authored').length,
    images: countImages(course),
    weeks: course.units.reduce((n, u) => n + u.weeks, 0),
  }
}
