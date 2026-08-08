# Skool — Curriculum Studio

A standards-aligned curriculum application for teachers and parents. Every
grade from preschool to Grade 12, four core subjects, scripted lesson plans,
printable worksheets, and **a separate, fully-specified prompt for every
illustration on every worksheet**.

Live at **[skool.c0di.com](https://skool.c0di.com)**. Also ships as a native
desktop app via Tauri.

---

## What it does

**Curriculum browser** — Grades PK3 through 12 × Mathematics, English Language
Arts, Science and Social Studies. Each course has real unit structure with a
big idea, standards, a lesson spine and a culminating performance task.

**Scripted lessons** — Not a summary of what to teach: the actual words. Every
authored lesson has five beats (hook, teach, guided, practice, close) with
verbatim lines to say, physical actions to take, checks for understanding with
what a good answer sounds like, and what to do when it doesn't land. Plus the
misconceptions that reliably appear, differentiation in both directions, an
exit ticket and a three-level rubric.

**Teach Mode** — Full-screen presenter. One beat at a time in large type, a
timer, keyboard-driven so you never look at the screen to advance.

**Worksheet Studio** — The core idea. Worksheet images aren't stored as prompt
strings; they're stored as structured specs. The composer renders each spec
into a finished prompt for whichever model you actually use — Midjourney, GPT
Image, Flux, SDXL, Ideogram, or a model-neutral format — and applies invariants
that a worksheet image must satisfy but a general image must not:

- no text in the image (the worksheet supplies all wording)
- prints legibly in black and white on a home inkjet
- **exact counts** — when a child counts the apples, "about five" is a wrong
  answer, so the count is asserted three ways and the UI shows a verify badge

Switch art style or target model and every prompt on the page recomposes.

**Workbook mode** — Photograph finished work, attach it to the lesson it came
from, and it accumulates into a printable portfolio. Downscaled on device.

**Planner** — Drag lessons onto a week, print the week.

Everything is local-first: IndexedDB, no accounts, no server. Backup and
restore is a single JSON file.

---

## Running it

```bash
npm install
npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server on :5273 |
| `npm run build` | Typecheck, then production build |
| `npm run typecheck` | Types only |
| `npm run deploy` | Build and push to Cloudflare |
| `npm run tauri:dev` | Desktop app in dev |
| `npm run tauri:build` | Desktop app bundles |

## Deploying

```bash
npm run deploy
```

Builds and pushes to the Cloudflare Pages project `skool`, which owns
`skool.c0di.com` and `school.c0di.com`.

> **Heads up:** that Pages project is also connected to this GitHub repo, and
> its build settings predate this rewrite — they serve the repository root
> rather than `dist/`. A `git push` to `main` will therefore trigger a build
> that overwrites the deploy above with raw source. Before pushing, either set
> the project's build command to `npm run build` with output directory `dist`,
> or disconnect the git integration and rely on `npm run deploy`.

## Adding curriculum

Courses live at `src/curriculum/content/<gradeId>/<subjectId>.ts` and are
discovered automatically — there is no registry to update, and each course is
its own lazy chunk.

Read **[AUTHORING.md](AUTHORING.md)** first, and use
`src/curriculum/content/k/math.ts` as the reference implementation.

## Layout

```
src/
  curriculum/
    types.ts            the schema everything is built on
    promptComposer.ts   ImageSpec + style + model → finished prompt
    styles.ts           seven print-oriented art styles
    taxonomy.ts         grades and subjects
    registry.ts         auto-discovery and lazy loading
    content/            the courses
  lib/                  storage, state, search, image generation
  pages/                the screens
  ui/                   design primitives and icons
```

## Standards

Common Core (Math and ELA), NGSS, the C3 Framework for social studies, and
Head Start ELOF for the preschool years. Codes are real and link to the
standard's actual text on hover.

## Image generation

Optional. Paste an [OpenRouter](https://openrouter.ai/keys) key in Settings and
the studio fills worksheet slots directly. One key reaches every image model —
GPT Image, Nano Banana, Flux, Recraft, Seedream — and the picker shows the price
of a single image next to each one, read live from OpenRouter, so the thirty-fold
spread between the cheapest usable model and the most accurate one is a visible
choice rather than a surprise on the invoice.

The key lives in this device's local storage and is sent only to `openrouter.ai`
— the site is static files on a CDN with no backend, so there is nowhere else
for it to go. An OpenAI key still works as a fallback if you already had one
here; that route is fixed to `gpt-image-1` and quotes no prices.

**One button.** The worksheet studio, the lesson page and the planner each carry
a single control that works out every image still missing in scope, prices the
run, and generates the lot. The planner's version covers a whole week of
lessons. Slots that already have an image are skipped, so pressing it twice
costs nothing.

Runs are safe to interrupt. Each finished image is written to IndexedDB the
moment it arrives rather than at the end, so closing the tab mid-run loses only
what was in flight, and starting again resumes from there. Generated images
persist across refreshes and the actual amount billed is totalled in Settings.

Aspect ratios the model refuses (worksheets need `3:1` and `4:1` strips for rows
of countable objects) are requested at the nearest supported ratio and centre-
cropped to the exact target — which is safe because every prompt already demands
generous empty margin on all four sides.

Without a key everything still works: copy any single prompt, or all of a
worksheet's prompts as one numbered brief, into whatever generator you prefer.
