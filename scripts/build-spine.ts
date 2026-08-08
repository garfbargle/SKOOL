/**
 * Spine generator.
 *
 * Course files are 150–200 KB each. The home screen needs to know, for all four
 * of a learner's subjects at once, how many lessons there are and which one
 * comes next — loading four course chunks to answer that would cost more than
 * the rest of the app put together.
 *
 * So the ordered list of lesson ids and titles is extracted here, at build
 * time, into one small module. Everything that needs *content* still loads the
 * real course lazily; only the skeleton lives in the main bundle.
 *
 * Run with `npm run spine`. The output is committed so a fresh checkout can
 * `npm run dev` without a generate step.
 */
import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import type { SubjectCourse } from '../src/curriculum/types.ts'

const CONTENT_DIR = resolve(import.meta.dirname, '../src/curriculum/content')
const OUT = resolve(import.meta.dirname, '../src/curriculum/spine.generated.ts')

/** `[id, title, authored, minutes]` — id is '' for a title with no lesson yet. */
type PackedLesson = [string, string, 0 | 1, number]
/** `[id, sequence, title, lessons]` */
type PackedUnit = [string, number, string, PackedLesson[]]
/** `[courseTitle, units]` */
type PackedCourse = [string, PackedUnit[]]

const spine: Record<string, PackedCourse> = {}

const grades = readdirSync(CONTENT_DIR).filter((d) => statSync(join(CONTENT_DIR, d)).isDirectory())

for (const gradeId of grades.sort()) {
  const files = readdirSync(join(CONTENT_DIR, gradeId)).filter((f) => f.endsWith('.ts'))
  for (const file of files.sort()) {
    const subjectId = file.replace(/\.ts$/, '')
    const mod = await import(pathToFileURL(join(CONTENT_DIR, gradeId, file)).href)
    const course = mod.default as SubjectCourse | undefined
    if (!course) continue

    spine[`${gradeId}:${subjectId}`] = [
      course.title,
      course.units.map((unit): PackedUnit => {
        const byTitle = new Map(unit.lessons.map((l) => [l.title, l]))
        return [
          unit.id,
          unit.sequence,
          unit.title,
          // lessonTitles is the spine of record — it includes planned lessons
          // that have no lesson object yet, and the path has to show those as
          // locked steps rather than pretend the unit is shorter than it is.
          unit.lessonTitles.map((title): PackedLesson => {
            const lesson = byTitle.get(title)
            return [
              lesson?.id ?? '',
              title,
              lesson?.status === 'authored' ? 1 : 0,
              lesson?.durationMin ?? 0,
            ]
          }),
        ]
      }),
    ]
  }
}

const body = `/**
 * GENERATED FILE — do not edit. Run \`npm run spine\` after changing content.
 *
 * The lesson skeleton for every authored course: ids, titles and order, with
 * none of the scripts, worksheets or image prompts. Small enough to ship in the
 * main bundle so progress and "what's next" can be answered without a fetch.
 *
 * Stored as tuples rather than objects — repeating four property names across
 * a thousand lessons more than doubled the file — and expanded once on import.
 */

export interface SpineLesson {
  id: string
  title: string
  /** False for a lesson that exists as a title in the spine but has no script. */
  authored: boolean
  minutes: number
}

export interface SpineUnit {
  id: string
  sequence: number
  title: string
  lessons: SpineLesson[]
}

export interface SpineCourse {
  title: string
  units: SpineUnit[]
}

type PackedLesson = [string, string, 0 | 1, number]
type PackedUnit = [string, number, string, PackedLesson[]]
type PackedCourse = [string, PackedUnit[]]

const PACKED: Record<string, PackedCourse> = ${JSON.stringify(spine)}

/** Keyed by \`\${gradeId}:\${subjectId}\`. */
export const SPINE: Record<string, SpineCourse> = Object.fromEntries(
  Object.entries(PACKED).map(([key, [title, units]]) => [
    key,
    {
      title,
      units: units.map(([id, sequence, unitTitle, lessons]) => ({
        id,
        sequence,
        title: unitTitle,
        lessons: lessons.map(([lessonId, lessonTitle, authored, minutes]) => ({
          id: lessonId,
          title: lessonTitle,
          authored: authored === 1,
          minutes,
        })),
      })),
    },
  ]),
)
`

writeFileSync(OUT, body)

const courses = Object.keys(spine).length
const lessons = Object.values(spine).reduce(
  (n, [, units]) => n + units.reduce((m, u) => m + u[3].length, 0),
  0,
)
const kb = Math.round(body.length / 102.4) / 10
console.log(`\n✓ spine: ${courses} courses, ${lessons} lessons → ${kb} KB\n`)
