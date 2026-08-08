import { STYLE_PRESETS } from './styles'
import type { AspectRatio, ImageSpec, ModelTarget, StylePresetId } from './types'

/**
 * Turns a structured ImageSpec into a finished prompt for a specific image
 * model.
 *
 * The reason this exists rather than storing prompt strings in the curriculum:
 * a worksheet image has hard requirements that differ from ordinary image
 * generation. It must print legibly in black and white, it must not contain
 * text (the worksheet supplies the words), and when it is countable the count
 * has to be exact or the math is wrong. Those invariants are enforced here,
 * once, for every image in the app — instead of being re-typed (and forgotten)
 * a few thousand times.
 */

export interface ComposedPrompt {
  /** The prompt to paste into the model. */
  prompt: string
  /** Separate negative prompt, for models that take one. */
  negativePrompt?: string
  /** Model-specific advice shown next to the copy button. */
  notes: string[]
  target: ModelTarget
  aspect: AspectRatio
}

export interface ComposeContext {
  gradeName: string
  subjectName: string
  lessonTitle: string
  /** Worksheet default; the spec can override it per image. */
  defaultStyle: StylePresetId
  target: ModelTarget
  /** Adds the "leave room to write" clause. Default true. */
  printSafe?: boolean
}

/**
 * Invariants for anything that will be printed onto a worksheet. These are
 * appended to every prompt regardless of style, because every one of them
 * represents a way a generated image can silently ruin a worksheet.
 */
const PRINT_SAFE_POSITIVE = [
  'the entire subject fully visible inside the frame with generous empty margin on all four sides',
  'high contrast so the image stays legible when printed in black and white on a home printer',
  'single clear focal subject, nothing cropped by the edge of the frame',
]

const PRINT_SAFE_NEGATIVE = [
  'text',
  'letters',
  'numbers',
  'words',
  'captions',
  'labels',
  'watermarks',
  'signatures',
  'logos',
  'speech bubbles',
  'borders or decorative frames',
  'page edges',
  'multiple panels',
]

/** Never appropriate on a children's worksheet, in any style. */
const UNIVERSAL_NEGATIVE = [
  'scary or distressing imagery',
  'weapons',
  'gore',
  'anatomically incorrect hands',
  'extra limbs',
  'deformed features',
]

function titleCase(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

/** Joins clauses into a readable sentence list without double punctuation. */
function clauses(parts: string[]): string {
  return parts
    .map((p) => p.trim().replace(/[.,]+$/, ''))
    .filter(Boolean)
    .join(', ')
}

function sentences(parts: string[]): string {
  return parts
    .map((p) => p.trim().replace(/\s+/g, ' '))
    .filter(Boolean)
    .map((p) => (/[.!?]$/.test(p) ? p : `${p}.`))
    .join(' ')
}

/**
 * The count assertion. Getting "exactly five apples" out of an image model is
 * genuinely hard, so we say it three ways: as a numeral, as a word, and as a
 * verification instruction.
 */
const NUMBER_WORDS = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
  'seventeen', 'eighteen', 'nineteen', 'twenty',
]

function countClause(count: number, subject: string): string {
  const word = NUMBER_WORDS[count] ?? String(count)
  return `EXACTLY ${count} (${word}) of them — count them: there must be ${count} and no more and no fewer, each one whole, separate, non-overlapping and evenly spaced so a child can count them accurately${
    subject ? '' : ''
  }`
}

export function resolveStyle(spec: ImageSpec, defaultStyle: StylePresetId) {
  return STYLE_PRESETS[spec.style ?? defaultStyle]
}

export function composePrompt(spec: ImageSpec, ctx: ComposeContext): ComposedPrompt {
  const style = resolveStyle(spec, ctx.defaultStyle)
  const printSafe = ctx.printSafe !== false

  // --- assemble the shared ingredients ------------------------------------
  const subject = spec.subject.trim().replace(/\.$/, '')

  const positives: string[] = []
  if (spec.count != null) positives.push(countClause(spec.count, subject))
  if (spec.mustInclude?.length) positives.push(...spec.mustInclude)
  if (spec.composition) positives.push(spec.composition)
  positives.push(...style.positive)
  if (printSafe) positives.push(...PRINT_SAFE_POSITIVE)

  const negatives: string[] = [
    ...(spec.mustAvoid ?? []),
    ...style.negative,
    ...(printSafe ? PRINT_SAFE_NEGATIVE : []),
    ...UNIVERSAL_NEGATIVE,
  ]
  const uniqueNegatives = [...new Set(negatives.map((n) => n.trim().toLowerCase()))]

  const contextLine = `Educational worksheet illustration for ${ctx.gradeName} ${ctx.subjectName} — "${ctx.lessonTitle}"`

  const notes: string[] = []
  if (spec.count != null) {
    notes.push(
      `Verify the count before you use it: this image must show exactly ${spec.count}. Image models miscount constantly — regenerate rather than accept "close enough".`,
    )
  }
  if (printSafe) {
    notes.push('No text is requested on purpose — the worksheet supplies all wording.')
  }

  switch (ctx.target) {
    /* ------------------------------------------------------------ Midjourney */
    case 'midjourney': {
      const body = clauses([subject, ...positives])
      const no = uniqueNegatives.slice(0, 22).join(', ')
      const prompt = `${body} --ar ${spec.aspect} --no ${no} --style raw --stylize 150`
      notes.push('Uses `--style raw` to keep Midjourney from over-stylising instructional art.')
      if (spec.count != null) {
        notes.push('Midjourney is the weakest of the major models at exact counts — expect to reroll.')
      }
      return { prompt, notes, target: ctx.target, aspect: spec.aspect }
    }

    /* --------------------------------------------------- GPT Image / DALL·E */
    case 'gpt-image': {
      // Natural-language models do better with prose and explicit exclusions
      // than with keyword soup or a separate negative field.
      const prompt = sentences([
        contextLine,
        `Create ${subject}`,
        ...(spec.count != null ? [`There must be ${countClause(spec.count, subject)}`] : []),
        ...(spec.mustInclude ?? []),
        ...(spec.composition ? [spec.composition] : []),
        `Style: ${clauses(style.positive)}`,
        ...(printSafe ? [`Format: ${clauses(PRINT_SAFE_POSITIVE)}`] : []),
        `Aspect ratio ${spec.aspect}`,
        `Do not include any of the following: ${uniqueNegatives.join(', ')}`,
      ])
      notes.push('Written as prose — GPT Image and DALL·E follow descriptive sentences far better than keyword lists.')
      return { prompt, notes, target: ctx.target, aspect: spec.aspect }
    }

    /* ------------------------------------------------------------------ Flux */
    case 'flux': {
      const prompt = sentences([
        `${titleCase(subject)}`,
        ...(spec.count != null ? [`Show ${countClause(spec.count, subject)}`] : []),
        ...(spec.mustInclude ?? []),
        ...(spec.composition ? [spec.composition] : []),
        clauses(style.positive),
        ...(printSafe ? [clauses(PRINT_SAFE_POSITIVE)] : []),
      ])
      notes.push(
        'Flux ignores negative prompts, so exclusions are handled by describing the desired result positively. Set the aspect ratio in your tool.',
      )
      return { prompt, notes, target: ctx.target, aspect: spec.aspect }
    }

    /* ------------------------------------------------------------------ SDXL */
    case 'sdxl': {
      const prompt = clauses([subject, ...positives, 'masterpiece', 'sharp clean edges'])
      notes.push('Paste the negative prompt into the dedicated negative field, not the main box.')
      notes.push('Recommended: 30 steps, CFG 6–7. Higher CFG tends to muddy flat line art.')
      return {
        prompt,
        negativePrompt: uniqueNegatives.join(', '),
        notes,
        target: ctx.target,
        aspect: spec.aspect,
      }
    }

    /* -------------------------------------------------------------- Ideogram */
    case 'ideogram': {
      const prompt = sentences([
        contextLine,
        `${titleCase(subject)}`,
        ...(spec.count != null ? [`Show ${countClause(spec.count, subject)}`] : []),
        ...(spec.mustInclude ?? []),
        ...(spec.composition ? [spec.composition] : []),
        clauses(style.positive),
        ...(printSafe ? [clauses(PRINT_SAFE_POSITIVE)] : []),
        `Absolutely no text, letters or numbers anywhere in the image`,
      ])
      notes.push(
        'Ideogram renders text unusually well, which is a liability here — the "no text" instruction is repeated deliberately.',
      )
      return { prompt, notes, target: ctx.target, aspect: spec.aspect }
    }

    /* ----------------------------------------------------------- Universal */
    default: {
      const prompt = [
        contextLine,
        '',
        `SUBJECT: ${titleCase(subject)}.`,
        ...(spec.count != null ? [`COUNT: ${countClause(spec.count, subject)}.`] : []),
        ...(spec.mustInclude?.length ? [`MUST INCLUDE: ${clauses(spec.mustInclude)}.`] : []),
        ...(spec.composition ? [`COMPOSITION: ${spec.composition}.`] : []),
        `STYLE: ${clauses(style.positive)}.`,
        ...(printSafe ? [`PRINT: ${clauses(PRINT_SAFE_POSITIVE)}.`] : []),
        `ASPECT RATIO: ${spec.aspect}.`,
        `AVOID: ${uniqueNegatives.join(', ')}.`,
      ].join('\n')
      notes.push('Model-neutral format — works as a starting point anywhere, including in a chat assistant.')
      return { prompt, notes, target: ctx.target, aspect: spec.aspect }
    }
  }
}

export const MODEL_TARGETS: { id: ModelTarget; name: string; hint: string }[] = [
  { id: 'universal', name: 'Universal', hint: 'Structured and model-neutral. Good for pasting into any chat assistant.' },
  { id: 'gpt-image', name: 'GPT Image / DALL·E', hint: 'Prose format. Strongest instruction-following for counts and layout.' },
  { id: 'midjourney', name: 'Midjourney', hint: 'Keyword clauses with --ar and --no parameters.' },
  { id: 'flux', name: 'Flux', hint: 'Natural language, no negative prompt support.' },
  { id: 'sdxl', name: 'Stable Diffusion / SDXL', hint: 'Keyword prompt plus a separate negative prompt field.' },
  { id: 'ideogram', name: 'Ideogram', hint: 'Prose format with reinforced no-text instruction.' },
]

/** Every image in a worksheet, flattened, in reading order. */
export function collectImages(sections: { images?: ImageSpec[] }[]): ImageSpec[] {
  return sections.flatMap((s) => s.images ?? [])
}
