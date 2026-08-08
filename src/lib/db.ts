import { openDB, type DBSchema, type IDBPDatabase } from 'idb'

/**
 * Local-first storage.
 *
 * Everything a family produces — which lessons they finished, photos of
 * completed worksheets, notes about how it went — stays on the device. There
 * is no account and no server round-trip. Photos are stored as Blobs in
 * IndexedDB rather than base64 strings, which keeps them roughly a third
 * smaller and avoids blowing the quota on a workbook with a few hundred
 * pages in it.
 */

export type Mastery = 'emerging' | 'developing' | 'secure'

export interface Learner {
  id: string
  name: string
  /** Emoji avatar — cheap, expressive, no upload needed. */
  avatar: string
  /** Nominal grade, used to pick a sensible starting view. */
  gradeId: string
  colour: string
  createdAt: number
}

export interface LessonRecord {
  /** `${learnerId}:${lessonId}` */
  id: string
  learnerId: string
  lessonId: string
  gradeId: string
  subjectId: string
  lessonTitle: string
  status: 'planned' | 'in-progress' | 'done'
  mastery?: Mastery
  /** Free-text note from the adult. */
  notes?: string
  /** Minutes actually spent, if the teach-mode timer was used. */
  minutesSpent?: number
  startedAt?: number
  completedAt?: number
  updatedAt: number
}

export interface WorkPage {
  id: string
  learnerId: string
  lessonId: string
  lessonTitle: string
  gradeId: string
  subjectId: string
  /** The scan or photo of the finished worksheet. */
  image: Blob
  thumb: Blob
  caption?: string
  createdAt: number
}

/** A generated (or hand-picked) image saved against a worksheet image slot. */
export interface SavedImage {
  id: string
  /** ImageSpec id it fulfils. */
  specId: string
  lessonId: string
  image: Blob
  prompt: string
  model: string
  createdAt: number
  /** What actually got billed, as reported by the provider. */
  costUsd?: number
  /** Target ratio of the slot, kept so the studio can flag a mismatch. */
  aspect?: string
  provider?: 'openrouter' | 'openai' | 'uploaded'
}

export interface PlanEntry {
  id: string
  learnerId: string
  /** ISO date, YYYY-MM-DD. */
  date: string
  lessonId: string
  lessonTitle: string
  gradeId: string
  subjectId: string
  order: number
}

interface SkoolDB extends DBSchema {
  learners: { key: string; value: Learner }
  lessonRecords: {
    key: string
    value: LessonRecord
    indexes: { byLearner: string; byLesson: string }
  }
  workPages: {
    key: string
    value: WorkPage
    indexes: { byLearner: string; byLesson: string }
  }
  // Indexed by lesson only: spec ids are unique within a lesson but may repeat
  // across courses, so a bySpec index would return the wrong lesson's images.
  savedImages: { key: string; value: SavedImage; indexes: { byLesson: string } }
  planEntries: {
    key: string
    value: PlanEntry
    indexes: { byLearner: string; byDate: string }
  }
  settings: { key: string; value: unknown }
}

let dbPromise: Promise<IDBPDatabase<SkoolDB>> | null = null

export function db() {
  if (!dbPromise) {
    dbPromise = openDB<SkoolDB>('skool', 1, {
      upgrade(d) {
        d.createObjectStore('learners', { keyPath: 'id' })

        const records = d.createObjectStore('lessonRecords', { keyPath: 'id' })
        records.createIndex('byLearner', 'learnerId')
        records.createIndex('byLesson', 'lessonId')

        const pages = d.createObjectStore('workPages', { keyPath: 'id' })
        pages.createIndex('byLearner', 'learnerId')
        pages.createIndex('byLesson', 'lessonId')

        const images = d.createObjectStore('savedImages', { keyPath: 'id' })
        images.createIndex('byLesson', 'lessonId')

        const plan = d.createObjectStore('planEntries', { keyPath: 'id' })
        plan.createIndex('byLearner', 'learnerId')
        plan.createIndex('byDate', 'date')

        d.createObjectStore('settings')
      },
    })
  }
  return dbPromise
}

export const uid = () =>
  `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 9)}`

/* ---------------------------------------------------------------- learners */

export async function listLearners() {
  return (await db()).getAll('learners')
}

export async function saveLearner(l: Learner) {
  await (await db()).put('learners', l)
  return l
}

export async function deleteLearner(id: string) {
  const d = await db()
  const tx = d.transaction(['learners', 'lessonRecords', 'workPages', 'planEntries'], 'readwrite')
  await tx.objectStore('learners').delete(id)
  for (const store of ['lessonRecords', 'workPages', 'planEntries'] as const) {
    const idx = tx.objectStore(store).index('byLearner')
    let cursor = await idx.openCursor(IDBKeyRange.only(id))
    while (cursor) {
      await cursor.delete()
      cursor = await cursor.continue()
    }
  }
  await tx.done
}

/* --------------------------------------------------------- lesson records */

export function recordId(learnerId: string, lessonId: string) {
  return `${learnerId}:${lessonId}`
}

export async function getRecord(learnerId: string, lessonId: string) {
  return (await db()).get('lessonRecords', recordId(learnerId, lessonId))
}

export async function putRecord(rec: LessonRecord) {
  await (await db()).put('lessonRecords', { ...rec, updatedAt: Date.now() })
}

export async function recordsForLearner(learnerId: string) {
  return (await db()).getAllFromIndex('lessonRecords', 'byLearner', learnerId)
}

/* ------------------------------------------------------------- work pages */

export async function addWorkPage(p: WorkPage) {
  await (await db()).put('workPages', p)
}

export async function pagesForLearner(learnerId: string) {
  const all = await (await db()).getAllFromIndex('workPages', 'byLearner', learnerId)
  return all.sort((a, b) => b.createdAt - a.createdAt)
}

export async function pagesForLesson(learnerId: string, lessonId: string) {
  const all = await (await db()).getAllFromIndex('workPages', 'byLesson', lessonId)
  return all.filter((p) => p.learnerId === learnerId).sort((a, b) => b.createdAt - a.createdAt)
}

export async function deleteWorkPage(id: string) {
  await (await db()).delete('workPages', id)
}

/* ----------------------------------------------------------- saved images */

export async function saveGeneratedImage(img: SavedImage) {
  await (await db()).put('savedImages', img)
}

export async function imagesForLesson(lessonId: string) {
  return (await db()).getAllFromIndex('savedImages', 'byLesson', lessonId)
}

/**
 * Which slots are already filled, across many lessons at once. The batch
 * planner needs this to work out what is actually missing before it spends
 * anything, and doing it per lesson would mean a transaction per lesson.
 */
export async function filledSlots(lessonIds: string[]): Promise<Set<string>> {
  const d = await db()
  const filled = new Set<string>()
  await Promise.all(
    [...new Set(lessonIds)].map(async (lessonId) => {
      const list = await d.getAllFromIndex('savedImages', 'byLesson', lessonId)
      for (const img of list) filled.add(`${lessonId}:${img.specId}`)
    }),
  )
  return filled
}

export async function deleteSavedImage(id: string) {
  await (await db()).delete('savedImages', id)
}

/** Every generated image, for the spend total on the settings screen. */
export async function allSavedImages() {
  return (await db()).getAll('savedImages')
}

/* ------------------------------------------------------------------- plan */

export async function planForLearner(learnerId: string) {
  return (await db()).getAllFromIndex('planEntries', 'byLearner', learnerId)
}

export async function putPlanEntry(e: PlanEntry) {
  await (await db()).put('planEntries', e)
}

export async function deletePlanEntry(id: string) {
  await (await db()).delete('planEntries', id)
}

/* --------------------------------------------------------------- settings */

export async function getSetting<T>(key: string): Promise<T | undefined> {
  return (await db()).get('settings', key) as Promise<T | undefined>
}

export async function setSetting(key: string, value: unknown) {
  await (await db()).put('settings', value, key)
}

/* ------------------------------------------------------------ image utils */

/**
 * Downscales an uploaded photo before storage. A phone photo of a worksheet is
 * typically 4–8 MB; at 1600px on the long edge it is legible, printable and
 * about 300 KB, which is the difference between a workbook that holds a year
 * of work and one that hits the storage quota by March.
 */
export async function processUpload(file: File | Blob): Promise<{ image: Blob; thumb: Blob }> {
  const bitmap = await createImageBitmap(file)
  const image = await resize(bitmap, 1600, 0.85)
  const thumb = await resize(bitmap, 400, 0.72)
  bitmap.close()
  return { image, thumb }
}

async function resize(bitmap: ImageBitmap, maxEdge: number, quality: number): Promise<Blob> {
  const scale = Math.min(1, maxEdge / Math.max(bitmap.width, bitmap.height))
  const w = Math.round(bitmap.width * scale)
  const h = Math.round(bitmap.height * scale)
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Could not get a 2D canvas context')
  ctx.imageSmoothingQuality = 'high'
  ctx.drawImage(bitmap, 0, 0, w, h)
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error('Image encoding failed'))),
      'image/jpeg',
      quality,
    )
  })
}

/* ------------------------------------------------------- export / import */

export interface BackupBundle {
  version: 1
  exportedAt: string
  learners: Learner[]
  lessonRecords: LessonRecord[]
  planEntries: PlanEntry[]
  /** Photos as data URLs so the backup is a single portable file. */
  workPages: (Omit<WorkPage, 'image' | 'thumb'> & { image: string; thumb: string })[]
}

const blobToDataUrl = (b: Blob) =>
  new Promise<string>((resolve, reject) => {
    const r = new FileReader()
    r.onload = () => resolve(r.result as string)
    r.onerror = () => reject(r.error)
    r.readAsDataURL(b)
  })

const dataUrlToBlob = async (u: string) => (await fetch(u)).blob()

export async function exportBackup(): Promise<BackupBundle> {
  const d = await db()
  const [learners, lessonRecords, planEntries, pages] = await Promise.all([
    d.getAll('learners'),
    d.getAll('lessonRecords'),
    d.getAll('planEntries'),
    d.getAll('workPages'),
  ])
  const workPages = await Promise.all(
    pages.map(async (p) => ({
      ...p,
      image: await blobToDataUrl(p.image),
      thumb: await blobToDataUrl(p.thumb),
    })),
  )
  return { version: 1, exportedAt: new Date().toISOString(), learners, lessonRecords, planEntries, workPages }
}

export async function importBackup(bundle: BackupBundle) {
  if (bundle.version !== 1) throw new Error(`Unsupported backup version: ${bundle.version}`)
  const d = await db()
  const tx = d.transaction(['learners', 'lessonRecords', 'planEntries', 'workPages'], 'readwrite')
  for (const l of bundle.learners) await tx.objectStore('learners').put(l)
  for (const r of bundle.lessonRecords) await tx.objectStore('lessonRecords').put(r)
  for (const p of bundle.planEntries) await tx.objectStore('planEntries').put(p)
  for (const w of bundle.workPages) {
    await tx.objectStore('workPages').put({
      ...w,
      image: await dataUrlToBlob(w.image),
      thumb: await dataUrlToBlob(w.thumb),
    })
  }
  await tx.done
}

/** Rough storage usage, for the settings screen. */
export async function storageEstimate() {
  if (!navigator.storage?.estimate) return null
  const { usage = 0, quota = 0 } = await navigator.storage.estimate()
  return { usage, quota }
}
