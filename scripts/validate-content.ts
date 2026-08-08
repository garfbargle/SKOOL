/**
 * Content validator.
 *
 * The curriculum is large and written by many hands, so the invariants that
 * make a worksheet actually work are checked here rather than trusted. Run it
 * with `npm run validate`.
 *
 * Errors fail the build. Warnings are things worth a look that are not
 * necessarily wrong.
 */
import { readdirSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import type { ImageSpec, Lesson, SubjectCourse } from '../src/curriculum/types.ts'

const CONTENT_DIR = resolve(import.meta.dirname, '../src/curriculum/content')

const VALID_GRADES = new Set([
  'pk3', 'pk4', 'k', 'g1', 'g2', 'g3', 'g4', 'g5',
  'g6', 'g7', 'g8', 'g9', 'g10', 'g11', 'g12',
])
const VALID_SUBJECTS = new Set(['math', 'ela', 'science', 'social-studies'])
const VALID_ASPECTS = new Set(['1:1', '4:3', '3:2', '16:9', '3:4', '2:3', '3:1', '4:1'])
const VALID_STYLES = new Set([
  'line-art', 'flat-vector', 'storybook', 'realistic', 'diagram', 'historical', 'manipulative',
])
const VALID_FRAMEWORKS = new Set(['CCSS-M', 'CCSS-ELA', 'NGSS', 'C3', 'HeadStart-ELOF', 'State'])

const errors: string[] = []
const warnings: string[] = []

const seenLessonIds = new Map<string, string>()
const seenUnitIds = new Map<string, string>()
const seenImageIds = new Map<string, string>()

let courseCount = 0
let unitCount = 0
let lessonCount = 0
let authoredCount = 0
let imageCount = 0
let countedImages = 0
let beatCount = 0

/** Words that mean the worksheet is asking a child to count the picture. */
const COUNTING_HINTS = /\b(count|how many|tally|group of|set of|altogether)\b/i

function checkImage(
  where: string,
  spec: ImageSpec,
  sectionText: string,
  withinLesson: Set<string>,
) {
  imageCount++

  // Specs are only ever resolved inside a single lesson (the studio loads
  // images by lessonId), so a collision *within* a lesson is fatal — one slot
  // would silently render the other's image — while a repeat of the same id in
  // a different course is merely untidy.
  if (withinLesson.has(spec.id)) {
    errors.push(`${where}: duplicate image id "${spec.id}" within the same lesson`)
  }
  withinLesson.add(spec.id)

  const dupe = seenImageIds.get(spec.id)
  if (dupe) warnings.push(`${where}: image id "${spec.id}" is reused in ${dupe}`)
  else seenImageIds.set(spec.id, where)

  if (!spec.subject?.trim()) errors.push(`${where}/${spec.id}: empty subject`)
  if (!spec.altText?.trim()) errors.push(`${where}/${spec.id}: missing altText`)
  if (!spec.purpose?.trim()) errors.push(`${where}/${spec.id}: missing purpose`)
  if (!spec.slot?.trim()) errors.push(`${where}/${spec.id}: missing slot label`)
  if (!VALID_ASPECTS.has(spec.aspect)) errors.push(`${where}/${spec.id}: bad aspect "${spec.aspect}"`)
  if (spec.style && !VALID_STYLES.has(spec.style)) {
    errors.push(`${where}/${spec.id}: unknown style "${spec.style}"`)
  }

  if (spec.count != null) {
    countedImages++
    if (!Number.isInteger(spec.count) || spec.count < 0) {
      errors.push(`${where}/${spec.id}: count must be a non-negative integer, got ${spec.count}`)
    }
  } else if (COUNTING_HINTS.test(sectionText) || COUNTING_HINTS.test(spec.slot)) {
    // The most damaging silent failure: a counting task whose image has no
    // asserted count, so the generator is free to draw four instead of five.
    warnings.push(`${where}/${spec.id}: counting-style task but no \`count\` set`)
  }

  // The composer forbids rendered text globally, so a spec that actively asks
  // for some is contradictory. Phonics specs legitimately *mention* a word as
  // naming context ("an object whose name is the word cat"), which is fine —
  // only flag phrasing that reads as a request to draw the characters.
  const asksForText =
    /\b(with the (word|letter|number)|showing the (word|letter|number)|labelled with|spelling out|written (above|below|on)|the word ["“]?\w+["”]? (printed|written|displayed))\b/i
  if (asksForText.test(spec.subject) || asksForText.test(spec.composition ?? '')) {
    warnings.push(
      `${where}/${spec.id}: subject appears to request rendered text, which the composer forbids`,
    )
  }

  if (spec.purpose && spec.purpose.trim().length < 30) {
    warnings.push(`${where}/${spec.id}: purpose looks too short to be useful`)
  }
}

function checkLesson(courseKey: string, lesson: Lesson, unitId: string) {
  lessonCount++
  const where = `${courseKey}/${lesson.id}`

  const dupe = seenLessonIds.get(lesson.id)
  if (dupe) errors.push(`${where}: duplicate lesson id (also in ${dupe})`)
  else seenLessonIds.set(lesson.id, where)

  if (lesson.unitId !== unitId) {
    errors.push(`${where}: unitId "${lesson.unitId}" does not match its parent unit "${unitId}"`)
  }
  if (!lesson.title?.trim()) errors.push(`${where}: missing title`)
  if (!lesson.essentialQuestion?.trim()) errors.push(`${where}: missing essentialQuestion`)
  if (!lesson.objectives?.length) errors.push(`${where}: no objectives`)
  if (!lesson.materials?.length) errors.push(`${where}: no materials`)
  if (!lesson.assessment?.exitTicket?.trim()) errors.push(`${where}: missing exit ticket`)
  if (!lesson.assessment?.successCriteria?.length) errors.push(`${where}: no success criteria`)
  if (!lesson.misconceptions?.length) errors.push(`${where}: no misconceptions`)
  if (!lesson.homeExtension?.length) warnings.push(`${where}: no home extension`)
  if (!lesson.differentiation?.support?.length) errors.push(`${where}: no support strategies`)
  if (!lesson.differentiation?.extension?.length) errors.push(`${where}: no extension strategies`)
  if (!(lesson.durationMin > 0)) errors.push(`${where}: durationMin must be positive`)

  for (const s of lesson.standards ?? []) {
    if (!VALID_FRAMEWORKS.has(s.framework)) {
      errors.push(`${where}: unknown standards framework "${s.framework}" on ${s.code}`)
    }
    if (!s.code?.trim()) errors.push(`${where}: standard with no code`)
    if (!s.text?.trim()) errors.push(`${where}: standard ${s.code} has no text`)
  }
  if (!lesson.standards?.length) errors.push(`${where}: no standards`)

  if (lesson.status === 'authored') {
    authoredCount++

    if (!lesson.script?.length) {
      errors.push(`${where}: status 'authored' but the script is empty`)
    } else {
      const total = lesson.script.reduce((n, b) => n + b.minutes, 0)
      beatCount += lesson.script.length
      // A plan whose beats don't add up to its stated length misleads whoever
      // is trying to fit it into a real morning.
      if (Math.abs(total - lesson.durationMin) > Math.max(5, lesson.durationMin * 0.2)) {
        warnings.push(
          `${where}: beat minutes total ${total} but durationMin is ${lesson.durationMin}`,
        )
      }
      for (const beat of lesson.script) {
        if (!beat.say?.length) errors.push(`${where}/${beat.id}: beat has no spoken lines`)
      }
      if (!lesson.script.some((b) => b.checks?.length)) {
        warnings.push(`${where}: no checks for understanding anywhere in the script`)
      }
    }

    if (!lesson.assessment.rubric?.length) {
      warnings.push(`${where}: authored lesson has no rubric`)
    }
    if (lesson.misconceptions.length < 2) {
      warnings.push(`${where}: authored lesson has fewer than two misconceptions`)
    }

    const images = lesson.worksheet.sections.flatMap((s) => s.images ?? [])
    if (!lesson.worksheet.sections.length) {
      errors.push(`${where}: status 'authored' but the worksheet has no sections`)
    } else if (images.length === 0) {
      warnings.push(`${where}: authored worksheet has no images`)
    }
  } else {
    if (lesson.script?.length) {
      warnings.push(`${where}: status 'outline' but has a script — should it be 'authored'?`)
    }
  }

  if (!VALID_STYLES.has(lesson.worksheet.style)) {
    errors.push(`${where}: unknown worksheet style "${lesson.worksheet.style}"`)
  }

  const idsInLesson = new Set<string>()
  for (const section of lesson.worksheet.sections ?? []) {
    if (!section.directions?.trim()) errors.push(`${where}/${section.id}: no directions`)
    const text = `${section.title} ${section.directions} ${(section.items ?? []).join(' ')}`
    for (const spec of section.images ?? []) checkImage(where, spec, text, idsInLesson)
  }
}

function checkCourse(gradeId: string, subjectId: string, course: SubjectCourse) {
  courseCount++
  const key = `${gradeId}/${subjectId}`

  if (course.gradeId !== gradeId) {
    errors.push(`${key}: course.gradeId is "${course.gradeId}" but the file lives under ${gradeId}`)
  }
  if (course.subjectId !== subjectId) {
    errors.push(`${key}: course.subjectId is "${course.subjectId}" but the file is ${subjectId}.ts`)
  }
  if (!course.title?.trim()) errors.push(`${key}: missing title`)
  if (!course.overview?.trim()) errors.push(`${key}: missing overview`)
  if (!course.yearGoals?.length) errors.push(`${key}: no year goals`)
  if (!course.units?.length) {
    errors.push(`${key}: no units`)
    return
  }

  for (const unit of course.units) {
    unitCount++
    const uwhere = `${key}/${unit.id}`

    const dupe = seenUnitIds.get(unit.id)
    if (dupe) errors.push(`${uwhere}: duplicate unit id (also in ${dupe})`)
    else seenUnitIds.set(unit.id, uwhere)

    if (unit.gradeId !== gradeId || unit.subjectId !== subjectId) {
      errors.push(`${uwhere}: unit grade/subject does not match its course`)
    }
    if (!unit.bigIdea?.trim()) errors.push(`${uwhere}: missing bigIdea`)
    if (!unit.description?.trim()) errors.push(`${uwhere}: missing description`)
    if (!(unit.weeks > 0)) errors.push(`${uwhere}: weeks must be positive`)
    if (!unit.standards?.length) warnings.push(`${uwhere}: no unit-level standards`)
    if (!unit.lessonTitles?.length) errors.push(`${uwhere}: no lessonTitles`)

    const titles = new Set(unit.lessonTitles)
    for (const lesson of unit.lessons ?? []) {
      // The Course page renders from lessonTitles and looks each one up by
      // title, so a lesson whose title is not in the spine is unreachable.
      if (!titles.has(lesson.title)) {
        errors.push(
          `${uwhere}: lesson "${lesson.title}" is not listed in lessonTitles, so it will not render`,
        )
      }
      checkLesson(key, lesson, unit.id)
    }
  }

  const authored = course.units.flatMap((u) => u.lessons).filter((l) => l.status === 'authored')
  if (authored.length === 0) errors.push(`${key}: no fully authored lessons`)
}

/* ------------------------------------------------------------------- run */

const grades = readdirSync(CONTENT_DIR).filter((d) =>
  statSync(join(CONTENT_DIR, d)).isDirectory(),
)

for (const gradeId of grades.sort()) {
  if (!VALID_GRADES.has(gradeId)) {
    errors.push(`content/${gradeId}: not a valid grade directory`)
    continue
  }
  const files = readdirSync(join(CONTENT_DIR, gradeId)).filter((f) => f.endsWith('.ts'))
  for (const file of files.sort()) {
    const subjectId = file.replace(/\.ts$/, '')
    if (!VALID_SUBJECTS.has(subjectId)) {
      errors.push(`content/${gradeId}/${file}: not a valid subject filename`)
      continue
    }
    const mod = await import(pathToFileURL(join(CONTENT_DIR, gradeId, file)).href)
    const course = mod.default as SubjectCourse | undefined
    if (!course) {
      errors.push(`content/${gradeId}/${file}: no default export`)
      continue
    }
    checkCourse(gradeId, subjectId, course)
  }
}

/* --------------------------------------------------------------- report */

const bold = (s: string) => `\x1b[1m${s}\x1b[0m`
const red = (s: string) => `\x1b[31m${s}\x1b[0m`
const yellow = (s: string) => `\x1b[33m${s}\x1b[0m`
const green = (s: string) => `\x1b[32m${s}\x1b[0m`

console.log(bold('\nSkool content validation\n'))
console.log(`  courses          ${courseCount}`)
console.log(`  units            ${unitCount}`)
console.log(`  lessons          ${lessonCount}  (${authoredCount} fully authored)`)
console.log(`  script beats     ${beatCount}`)
console.log(`  image prompts    ${imageCount}  (${countedImages} with an asserted count)`)

if (warnings.length) {
  console.log(yellow(bold(`\n${warnings.length} warning${warnings.length === 1 ? '' : 's'}`)))
  for (const w of warnings.slice(0, 60)) console.log(yellow(`  · ${w}`))
  if (warnings.length > 60) console.log(yellow(`  … and ${warnings.length - 60} more`))
}

if (errors.length) {
  console.log(red(bold(`\n${errors.length} error${errors.length === 1 ? '' : 's'}`)))
  for (const e of errors.slice(0, 80)) console.log(red(`  · ${e}`))
  if (errors.length > 80) console.log(red(`  … and ${errors.length - 80} more`))
  console.log()
  process.exit(1)
}

console.log(green(bold('\n✓ All content valid\n')))
