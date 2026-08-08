import type { StylePreset, StylePresetId } from './types'

/**
 * Art styles a worksheet image can be rendered in.
 *
 * These are deliberately opinionated toward *print*: a worksheet lives or dies
 * on whether it reads clearly after a home inkjet has had its way with it.
 * Every preset below is chosen to survive that trip.
 */
export const STYLE_PRESETS: Record<StylePresetId, StylePreset> = {
  'line-art': {
    id: 'line-art',
    name: 'Coloring-book line art',
    description:
      'Bold black outlines on pure white, no fill. The default for anything a child will trace, circle, count, or color in.',
    bestFor: 'Tracing, counting, coloring, cut-and-paste, anything printed in black and white',
    positive: [
      'black and white coloring book line art',
      'clean bold uniform outlines, 4px stroke weight',
      'no shading, no hatching, no gradients, no fill',
      'pure white background',
      'simple, friendly, highly legible shapes suitable for a young child',
      'thick closed contours so colored pencil stays inside the lines',
    ],
    negative: [
      'grayscale fill',
      'shadows',
      'crosshatching',
      'sketchy or broken lines',
      'photorealism',
      'busy background detail',
    ],
  },
  'flat-vector': {
    id: 'flat-vector',
    name: 'Flat vector illustration',
    description:
      'Bright flat colors with clean edges and no texture. Reads instantly at small sizes and stays crisp on a screen.',
    bestFor: 'Matching, sorting, categorizing, vocabulary cards, anything color-coded',
    positive: [
      'flat vector illustration, modern educational infographic style',
      'bold saturated primary colors with clean crisp edges',
      'minimal detail, strong silhouette, instantly recognizable',
      'solid pure white background',
      'even lighting, no texture, no gradients',
    ],
    negative: ['3d render', 'drop shadows', 'noise or grain', 'photographic texture', 'gradients'],
  },
  storybook: {
    id: 'storybook',
    name: 'Storybook watercolor',
    description:
      'Soft, warm picture-book illustration. Use when the image should invite a child in rather than be worked on.',
    bestFor: 'Read-aloud scenes, story prompts, narrative writing, social-emotional topics',
    positive: [
      "children's picture book watercolor illustration",
      'soft warm palette, gentle washes, visible paper texture',
      'kind expressive characters, cozy inviting mood',
      'clean uncluttered composition with clear focal point',
      'light cream or white background',
    ],
    negative: ['harsh contrast', 'dark or menacing mood', 'cluttered background', 'photorealism'],
  },
  realistic: {
    id: 'realistic',
    name: 'Clean photographic',
    description:
      'Studio-style photograph on white. Use when a child needs to recognize the real thing, not a cartoon of it.',
    bestFor: 'Real-world objects, science specimens, artifacts, food, tools, animals',
    positive: [
      'clean studio product photograph',
      'soft even diffused lighting, no harsh shadows',
      'seamless pure white background',
      'sharp focus throughout, entire subject in frame',
      'true-to-life color and proportion',
    ],
    negative: ['cartoon', 'illustration', 'heavy shadow', 'cluttered scene', 'motion blur'],
  },
  diagram: {
    id: 'diagram',
    name: 'Labeled science diagram',
    description:
      'Technical, accurate, and structured. Parts are visually separated so the learner can label them.',
    bestFor: 'Life cycles, anatomy, systems, cross-sections, processes, cycles with arrows',
    positive: [
      'clean scientific textbook diagram',
      'accurate proportions and structure',
      'distinct parts separated by clear outlines and flat color coding',
      'leader lines pointing to each labelled part, with the label boxes left EMPTY',
      'plain white background, orthographic side view',
    ],
    negative: ['artistic interpretation', 'decorative flourishes', 'perspective distortion', 'clutter'],
  },
  historical: {
    id: 'historical',
    name: 'Period illustration',
    description:
      'Historically grounded scenes and objects, drawn respectfully and without anachronism.',
    bestFor: 'Social studies, historical figures, artifacts, maps, daily life in another era',
    positive: [
      'carefully researched historical illustration',
      'period-accurate clothing, tools, architecture and materials',
      'muted natural period palette',
      'respectful dignified portrayal of all people depicted',
      'clear uncluttered composition, museum-plate quality',
    ],
    negative: [
      'anachronistic objects',
      'modern clothing or technology',
      'caricature or stereotype',
      'violence or distressing imagery',
      'fantasy elements',
    ],
  },
  manipulative: {
    id: 'manipulative',
    name: 'Math manipulative',
    description:
      'Ten-frames, base-ten blocks, counters, number lines and fraction bars drawn to be countable at a glance.',
    bestFor: 'Counting, place value, fractions, arrays, number sense',
    positive: [
      'clean flat mathematical manipulative graphic',
      'precise geometry, perfectly aligned grid, uniform spacing between objects',
      'high contrast solid colors, each countable object clearly separated from its neighbours',
      'pure white background, orthographic straight-on view',
      'objects arranged so they can be counted accurately without overlap',
    ],
    negative: [
      'overlapping objects',
      'perspective or 3d tilt',
      'decorative background',
      'uneven spacing',
      'ambiguous partial objects at the edge of frame',
    ],
  },
}

export const STYLE_LIST = Object.values(STYLE_PRESETS)
