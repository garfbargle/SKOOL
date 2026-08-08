/**
 * Skool curriculum schema.
 *
 * Everything in the app is generated from these shapes: the browser, the
 * scripted teach mode, the printable worksheet, and — most importantly — the
 * per-image prompt composer. Image prompts are never stored as flat strings.
 * They are stored as structured specs so a single spec can be re-rendered for
 * any art style and any image model without rewriting the curriculum.
 */

/* ------------------------------------------------------------------ grades */

export type GradeId =
  | 'pk3'
  | 'pk4'
  | 'k'
  | 'g1'
  | 'g2'
  | 'g3'
  | 'g4'
  | 'g5'
  | 'g6'
  | 'g7'
  | 'g8'
  | 'g9'
  | 'g10'
  | 'g11'
  | 'g12'

export type GradeBand = 'early' | 'primary' | 'intermediate' | 'middle' | 'high'

export interface Grade {
  id: GradeId
  /** "Kindergarten", "Grade 3" */
  name: string
  /** "K", "3" — used in dense UI */
  short: string
  band: GradeBand
  /** Typical age range, e.g. "5–6" */
  ages: string
  /** One line a parent can actually use to orient themselves. */
  focus: string
}

/* ---------------------------------------------------------------- subjects */

export type SubjectId = 'math' | 'ela' | 'science' | 'social-studies'

export interface Subject {
  id: SubjectId
  name: string
  short: string
  /** Tailwind-ish accent token, resolved in theme.ts */
  accent: 'amber' | 'violet' | 'emerald' | 'rose'
  icon: string
  blurb: string
}

/* --------------------------------------------------------------- standards */

export type StandardFramework =
  | 'CCSS-M'
  | 'CCSS-ELA'
  | 'NGSS'
  | 'C3'
  | 'HeadStart-ELOF'
  | 'State'

export interface Standard {
  /** Official code, e.g. "CCSS.MATH.CONTENT.K.CC.B.4" or "K-PS3-1" */
  code: string
  framework: StandardFramework
  /** The standard's actual text, paraphrased tightly enough to be useful. */
  text: string
}

/* ----------------------------------------------------------- image prompts */

export type StylePresetId =
  | 'line-art'
  | 'flat-vector'
  | 'storybook'
  | 'realistic'
  | 'diagram'
  | 'historical'
  | 'manipulative'

export type ModelTarget =
  | 'universal'
  | 'midjourney'
  | 'gpt-image'
  | 'flux'
  | 'sdxl'
  | 'ideogram'

/**
 * `3:1` and `4:1` are unusual for image models but essential here: a row of
 * countable objects has to be a wide strip or the objects render too small to
 * count on a printed page.
 */
export type AspectRatio = '1:1' | '4:3' | '3:2' | '16:9' | '3:4' | '2:3' | '3:1' | '4:1'

/**
 * One image on one worksheet. Every illustration gets its own spec — there is
 * deliberately no "generate all the pictures" shortcut, because the countable
 * and labelled images that make a worksheet work need individually exact
 * instructions ("exactly three apples, not four").
 */
export interface ImageSpec {
  id: string
  /** Human label for the slot: "Item 4 — set of five" */
  slot: string
  /** Why this picture exists pedagogically. Shown in the UI, not in the prompt. */
  purpose: string
  /** The core content of the picture, written as a noun phrase. */
  subject: string
  /** Framing and layout instructions. */
  composition?: string
  /** Non-negotiables — rendered as emphatic clauses in every model dialect. */
  mustInclude?: string[]
  /** Things that would break the worksheet if they appeared. */
  mustAvoid?: string[]
  /**
   * For countable images. When set, the composer hard-asserts the number in
   * the prompt and the UI shows a count badge so you can verify the result.
   */
  count?: number
  aspect: AspectRatio
  /** Accessibility text, also used as the print caption fallback. */
  altText: string
  /** Overrides the worksheet's default style for this one image. */
  style?: StylePresetId
}

export interface StylePreset {
  id: StylePresetId
  name: string
  description: string
  bestFor: string
  /** Style clauses appended to the subject. */
  positive: string[]
  /** Style-specific things to suppress. */
  negative: string[]
}

/* -------------------------------------------------------------- worksheets */

export type SectionLayout = 'grid' | 'row' | 'column' | 'full' | 'trace' | 'split'

export interface WorksheetSection {
  id: string
  title: string
  /** Kid-facing directions, written to be read aloud verbatim. */
  directions: string
  layout: SectionLayout
  /** Text-only items: problems, words, sentence frames. */
  items?: string[]
  /** Illustrations required by this section, each with its own prompt spec. */
  images?: ImageSpec[]
  /** Ruled/blank space to leave under the section, in lines. */
  writingLines?: number
}

export interface Worksheet {
  id: string
  title: string
  /** Default art style for images in this worksheet. */
  style: StylePresetId
  /** Setup notes for the adult before handing the page over. */
  prepNotes?: string
  sections: WorksheetSection[]
  answerKey?: string[]
}

/* ------------------------------------------------------------ lesson script */

export type BeatPhase = 'hook' | 'teach' | 'guided' | 'practice' | 'close'

export interface CheckForUnderstanding {
  ask: string
  /** What a correct/on-track answer sounds like. */
  lookFor: string
  /** What to do if it doesn't land. */
  ifStuck?: string
}

/**
 * One move in the lesson. `say` is verbatim — the whole point of "scripted" is
 * that a tired parent at 8am can read the line out loud and it works.
 */
export interface LessonBeat {
  id: string
  phase: BeatPhase
  title: string
  minutes: number
  /** Verbatim teacher lines. Each string is one spoken chunk. */
  say: string[]
  /** Physical actions: what to hold up, write, point at. */
  do?: string[]
  /** What the learner is doing during this beat. */
  studentDoes?: string[]
  checks?: CheckForUnderstanding[]
  tip?: string
}

/* ------------------------------------------------------------------ lesson */

export interface Misconception {
  misconception: string
  looksLike: string
  correction: string
}

export interface Lesson {
  id: string
  unitId: string
  gradeId: GradeId
  subjectId: SubjectId
  /** 1-based position within the unit. */
  sequence: number
  title: string
  /** The question the lesson answers. */
  essentialQuestion: string
  summary: string
  durationMin: number
  standards: Standard[]
  /** "I can …" statements, learner-facing. */
  objectives: string[]
  vocabulary: { term: string; definition: string; example?: string }[]
  materials: string[]
  prep: string[]
  script: LessonBeat[]
  worksheet: Worksheet
  assessment: {
    successCriteria: string[]
    exitTicket: string
    /** What mastery vs. developing vs. emerging looks like. */
    rubric?: { level: 'emerging' | 'developing' | 'secure'; descriptor: string }[]
  }
  differentiation: {
    support: string[]
    extension: string[]
    /** Multilingual learners / second-language support. */
    language?: string[]
  }
  misconceptions: Misconception[]
  homeExtension: string[]
  teacherNotes?: string
  /** 'authored' = fully scripted. 'outline' = structure + objectives only. */
  status: 'authored' | 'outline'
}

/* -------------------------------------------------------------------- unit */

export interface Unit {
  id: string
  gradeId: GradeId
  subjectId: SubjectId
  sequence: number
  title: string
  /** The through-line of the unit in one sentence. */
  bigIdea: string
  description: string
  /** Rough weeks of instruction. */
  weeks: number
  standards: Standard[]
  /** Titles of lessons in order — the spine, even where lessons are outlines. */
  lessonTitles: string[]
  lessons: Lesson[]
  /** Culminating task for the unit. */
  performanceTask?: string
}

export interface SubjectCourse {
  gradeId: GradeId
  subjectId: SubjectId
  /** Course-level orientation, e.g. "Kindergarten Mathematics". */
  title: string
  overview: string
  /** The 3–5 things that matter most this year in this subject. */
  yearGoals: string[]
  units: Unit[]
}
