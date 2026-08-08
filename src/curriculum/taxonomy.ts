import type { Grade, GradeBand, GradeId, Subject, SubjectId } from './types'

export const GRADES: Grade[] = [
  { id: 'pk3', name: 'Preschool (3s)', short: 'PK3', band: 'early', ages: '3–4', focus: 'Talking, playing, noticing. Language explodes and hands get busy.' },
  { id: 'pk4', name: 'Pre-K (4s)', short: 'PK4', band: 'early', ages: '4–5', focus: 'Letters and numbers become real. Stories get retold, not just heard.' },
  { id: 'k', name: 'Kindergarten', short: 'K', band: 'early', ages: '5–6', focus: 'Reading begins: letter sounds blend into words. Counting becomes quantity.' },
  { id: 'g1', name: 'Grade 1', short: '1', band: 'primary', ages: '6–7', focus: 'Decoding to fluency. Addition and subtraction within 20 become automatic.' },
  { id: 'g2', name: 'Grade 2', short: '2', band: 'primary', ages: '7–8', focus: 'Reading to learn starts. Place value to 1,000 and standard measurement.' },
  { id: 'g3', name: 'Grade 3', short: '3', band: 'primary', ages: '8–9', focus: 'Multiplication, division and fractions. Paragraphs with evidence.' },
  { id: 'g4', name: 'Grade 4', short: '4', band: 'intermediate', ages: '9–10', focus: 'Multi-digit operations, fraction equivalence, and research writing.' },
  { id: 'g5', name: 'Grade 5', short: '5', band: 'intermediate', ages: '10–11', focus: 'Decimals, volume, and analysing texts across sources.' },
  { id: 'g6', name: 'Grade 6', short: '6', band: 'middle', ages: '11–12', focus: 'Ratios and rates, negative numbers, argument writing.' },
  { id: 'g7', name: 'Grade 7', short: '7', band: 'middle', ages: '12–13', focus: 'Proportional reasoning, probability, and evidence-based analysis.' },
  { id: 'g8', name: 'Grade 8', short: '8', band: 'middle', ages: '13–14', focus: 'Linear functions, transformations, and sustained argumentation.' },
  { id: 'g9', name: 'Grade 9', short: '9', band: 'high', ages: '14–15', focus: 'Algebra I, biology, and close reading of complex texts.' },
  { id: 'g10', name: 'Grade 10', short: '10', band: 'high', ages: '15–16', focus: 'Geometry and proof, chemistry, world literature and history.' },
  { id: 'g11', name: 'Grade 11', short: '11', band: 'high', ages: '16–17', focus: 'Algebra II, physics, American literature and history.' },
  { id: 'g12', name: 'Grade 12', short: '12', band: 'high', ages: '17–18', focus: 'Precalculus or statistics, government and economics, capstone writing.' },
]

export const GRADE_BANDS: { id: GradeBand; name: string; blurb: string }[] = [
  { id: 'early', name: 'Early Years', blurb: 'Preschool through Kindergarten' },
  { id: 'primary', name: 'Primary', blurb: 'Grades 1–3' },
  { id: 'intermediate', name: 'Intermediate', blurb: 'Grades 4–5' },
  { id: 'middle', name: 'Middle School', blurb: 'Grades 6–8' },
  { id: 'high', name: 'High School', blurb: 'Grades 9–12' },
]

export const SUBJECTS: Subject[] = [
  {
    id: 'math',
    name: 'Mathematics',
    short: 'Math',
    accent: 'amber',
    icon: 'calculator',
    blurb: 'Number, operations, shape and data.',
  },
  {
    id: 'ela',
    name: 'English Language Arts',
    short: 'ELA',
    accent: 'violet',
    icon: 'book',
    blurb: 'Phonics, fluency, comprehension, writing.',
  },
  {
    id: 'science',
    name: 'Science',
    short: 'Science',
    accent: 'emerald',
    icon: 'flask',
    blurb: 'Phenomenon-first investigation, NGSS aligned.',
  },
  {
    id: 'social-studies',
    name: 'Social Studies',
    short: 'Social',
    accent: 'rose',
    icon: 'globe',
    blurb: 'Civics, geography, economics, history.',
  },
]

export const GRADE_BY_ID = Object.fromEntries(GRADES.map((g) => [g.id, g])) as Record<GradeId, Grade>
export const SUBJECT_BY_ID = Object.fromEntries(SUBJECTS.map((s) => [s.id, s])) as Record<SubjectId, Subject>

export function gradesInBand(band: GradeBand) {
  return GRADES.filter((g) => g.band === band)
}
