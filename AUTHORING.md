# Authoring a course

Every course is one file: `src/curriculum/content/<gradeId>/<subjectId>.ts`.
It default-exports a `SubjectCourse` typed by `src/curriculum/types.ts`.
There is no registry to update — files are discovered automatically.

Grade ids: `pk3 pk4 k g1 g2 g3 g4 g5 g6 g7 g8 g9 g10 g11 g12`
Subject ids: `math ela science social-studies`

**Read `src/curriculum/content/k/math.ts` before writing anything.** It is the
reference implementation and the quality bar.

## The file shape

```ts
import type { SubjectCourse } from '../../types'

const course: SubjectCourse = { /* … */ }
export default course
```

## Required depth

| Grade band | Units | Lessons per unit | Fully authored lessons |
|---|---|---|---|
| PK3 – G5 | 5–6 | 5–7 titles in `lessonTitles` | **4 per course**, spread across different units |
| G6 – G12 | 5–6 | 5–8 titles in `lessonTitles` | **2 per course** |

Every unit needs complete metadata (`bigIdea`, `description`, `weeks`,
`standards`, `lessonTitles`, `performanceTask`). Lessons you do not fully script
still appear in `lessons[]` with `status: 'outline'` and every required field
filled — objectives, vocabulary, materials, prep, one misconception, an exit
ticket, differentiation, home extension — but `script: []` and
`worksheet.sections: []`. An outline must still be genuinely useful to a parent.

`status: 'authored'` lessons need everything: a full `script`, a complete
`worksheet` with image specs, `assessment.rubric`, and at least two
`misconceptions`.

## Standards

Use real codes and real text.

- Math → `CCSS-M`, e.g. `CCSS.MATH.CONTENT.3.NF.A.1`
- ELA → `CCSS-ELA`, e.g. `CCSS.ELA-LITERACY.RF.1.2.B`
- Science → `NGSS`, e.g. `3-LS4-1`
- Social studies → `C3`, e.g. `D2.Civ.1.3-5`
- PK3/PK4 → `HeadStart-ELOF`, e.g. `ELOF-MATH-Goal P-MATH 2`

Never invent a code. If you are unsure of the exact code, use the closest one
you are confident in and make the `text` accurate.

## The script is the product

`say` lines are **verbatim**. Write what a tired adult reads aloud at 8am
without rehearsal. Contractions, short sentences, real speech. Not
"the educator will introduce the concept of place value" — instead
"Watch my hands. I am putting ten in this cup and I am never taking them out."

A good lesson has 5 beats: `hook`, `teach`, `guided`, `practice`, `close`.
Minutes must sum to roughly `durationMin`. Nearly every beat should carry a
`checks` entry with `ask`, `lookFor` and usually `ifStuck`.

Hooks that work: an adult making a deliberate mistake for the child to catch, a
surprising result, a genuine question the child wants answered. Hooks that do
not: "Today we are going to learn about…".

## Image specs — the part that matters most

Every illustration on a worksheet gets its **own** `ImageSpec`. Never write one
spec covering several pictures. Aim for **3–6 images per authored worksheet**.

```ts
{
  id: 'img-apples-5',
  slot: 'Row 2 — five apples',
  purpose: 'Why this picture exists pedagogically. Shown to the adult, never sent to the model.',
  subject: 'a horizontal row of identical simple apples, each with one short stem and one leaf',
  count: 5,                    // REQUIRED whenever the child counts the objects
  composition: 'evenly spaced in one straight horizontal row, generous white space between each',
  mustInclude: ['each apple exactly the same size'],
  mustAvoid: ['a basket, tree or table', 'overlapping fruit'],
  aspect: '4:3',
  altText: 'Five identical apples in a row',
  style: 'line-art',           // optional; overrides the worksheet default
}
```

Rules:

- **`count` is mandatory for anything countable.** The composer builds a
  triple-redundant count assertion from it and the UI shows a verification
  badge. Omitting it on a counting worksheet is a correctness bug.
- **`subject` is a noun phrase**, not a sentence and not a command. No "create",
  no "an image of".
- **Never request text in an image.** The worksheet supplies all wording. The
  composer already forbids it globally; do not undo that.
- **`mustAvoid` should name the specific failure mode for that image** — the
  background that would clutter it, the overlap that would break the count.
  Generic exclusions are already handled globally.
- **`purpose` explains the pedagogy** and is the reason a teacher trusts the
  page. Write a real sentence, not a restatement of the subject.
- For manipulatives (ten-frames, number lines, base-ten blocks, fraction bars)
  use `style: 'manipulative'` and be obsessive about geometry in `composition`.

Available styles: `line-art` `flat-vector` `storybook` `realistic` `diagram`
`historical` `manipulative`. See `src/curriculum/styles.ts`.

Aspect ratios: `1:1 4:3 3:2 16:9 3:4 2:3 3:1 4:1`. Use `3:1` or `4:1` for a row
of countable objects, `16:9` for paired matching rows.

## Worksheets

`sections` carry kid-facing `directions` written to be read aloud verbatim.
`items` are text problems, one string per item. Include an `answerKey` — for
open responses, describe what a correct answer looks like.

## Voice

British-neutral spelling is used throughout (`colour`, `recognise`,
`organise`). Write with warmth and zero condescension. Address the adult as
"you". Be honest in `teacherNotes` about what is genuinely hard and what can be
skipped.

## Before you finish

Run `npx tsc --noEmit` and fix every error in your files. A course that does not
typecheck does not ship.
