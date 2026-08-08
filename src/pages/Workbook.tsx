import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  addWorkPage,
  allSavedImages,
  deleteWorkPage,
  pagesForLearner,
  processUpload,
  uid,
  type LessonRecord,
  type SavedImage,
  type WorkPage,
} from '../lib/db'
import { useBlobUrl } from '../lib/useBlobUrl'
import { useLearners, usePrefs, useToasts } from '../lib/store'
import { search, warmIndex, type SearchEntry } from '../lib/search'
import { Badge, Button, EmptyState, Modal, Segmented, SUBJECT_COLOUR } from '../ui/primitives'
import { IconFolder, IconPrint, IconSearch, IconStar, IconTrash, IconUpload } from '../ui/icons'
import { GRADE_BY_ID, SUBJECT_BY_ID, SUBJECTS } from '../curriculum/taxonomy'
import type { GradeId, SubjectId } from '../curriculum/types'

/**
 * Workbook mode: the finished-work side of the app.
 *
 * You photograph the completed worksheet, it gets downscaled and stored on the
 * device, and it accumulates into a portfolio you can print at the end of a
 * term. Nothing is uploaded anywhere.
 */
export default function Workbook() {
  const activeLearnerId = usePrefs((s) => s.activeLearnerId)
  const learners = useLearners((s) => s.learners)
  const records = useLearners((s) => s.records)
  const push = useToasts((s) => s.push)

  const [view, setView] = useState<'stickers' | 'work'>('stickers')
  const [pages, setPages] = useState<WorkPage[]>([])
  const [filter, setFilter] = useState<SubjectId | 'all'>('all')
  const [uploading, setUploading] = useState(false)
  const [picker, setPicker] = useState<File | null>(null)
  const [lightbox, setLightbox] = useState<WorkPage | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const active = learners.find((l) => l.id === activeLearnerId)

  const refresh = useCallback(async () => {
    if (!activeLearnerId) {
      setPages([])
      return
    }
    setPages(await pagesForLearner(activeLearnerId))
  }, [activeLearnerId])

  useEffect(() => {
    void refresh()
  }, [refresh])

  const filtered = useMemo(
    () => (filter === 'all' ? pages : pages.filter((p) => p.subjectId === filter)),
    [pages, filter],
  )

  async function attachTo(file: File, entry: SearchEntry) {
    if (!activeLearnerId) return
    setUploading(true)
    try {
      const { image, thumb } = await processUpload(file)
      await addWorkPage({
        id: uid(),
        learnerId: activeLearnerId,
        lessonId: entry.path.split('/').pop()!,
        lessonTitle: entry.title,
        gradeId: entry.gradeId,
        subjectId: entry.subjectId,
        image,
        thumb,
        createdAt: Date.now(),
      })
      await refresh()
      push('Added to the workbook.', 'success')
    } catch (err) {
      push(err instanceof Error ? err.message : 'Could not process that image.', 'error')
    } finally {
      setUploading(false)
      setPicker(null)
    }
  }

  if (!active) {
    return (
      <div className="max-w-2xl mx-auto">
        <EmptyState
          icon={<IconFolder size={20} />}
          title="Add a learner first"
          body="The workbook collects finished work for a specific learner. Add one from the sidebar to get started."
        />
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-7 lg:py-9">
      <div className="no-print flex flex-wrap items-end justify-between gap-4 mb-5">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Workbook</h1>
          <p className="muted mt-1 text-[14px]">
            {active.avatar} {active.name} · everything kept on this device
          </p>
        </div>

        <div className="flex gap-2">
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) setPicker(f)
              e.target.value = ''
            }}
          />
          {view === 'work' && (
            <>
              <Button
                variant="primary"
                icon={<IconUpload size={15} />}
                onClick={() => fileRef.current?.click()}
                disabled={uploading}
              >
                {uploading ? 'Processing…' : 'Add finished work'}
              </Button>
              {pages.length > 0 && (
                <Button icon={<IconPrint size={15} />} onClick={() => window.print()}>
                  Print portfolio
                </Button>
              )}
            </>
          )}
        </div>
      </div>

      <div className="no-print mb-5">
        <Segmented
          value={view}
          onChange={setView}
          options={[
            { value: 'stickers' as const, label: 'Stickers' },
            { value: 'work' as const, label: `Finished work (${pages.length})` },
          ]}
        />
      </div>

      {view === 'stickers' && <Stickers records={records} />}

      {view === 'work' && pages.length > 0 && (
        <div className="no-print mb-5">
          <Segmented
            value={filter}
            onChange={setFilter}
            options={[
              { value: 'all' as const, label: `All (${pages.length})` },
              ...SUBJECTS.filter((s) => pages.some((p) => p.subjectId === s.id)).map((s) => ({
                value: s.id,
                label: `${s.short} (${pages.filter((p) => p.subjectId === s.id).length})`,
              })),
            ]}
          />
        </div>
      )}

      {view === 'work' &&
        (filtered.length === 0 ? (
        <div className="surface">
          <EmptyState
            icon={<IconFolder size={20} />}
            title={pages.length === 0 ? 'Nothing in the workbook yet' : 'Nothing in this subject'}
            body={
              pages.length === 0
                ? 'Take a photo of a finished worksheet and attach it to the lesson it came from. Over a term it becomes a portfolio you can print.'
                : 'Try a different subject filter.'
            }
            action={
              pages.length === 0 ? (
                <Button variant="primary" onClick={() => fileRef.current?.click()}>
                  Add the first page
                </Button>
              ) : undefined
            }
          />
        </div>
      ) : (
        <div className="print-root">
          <div className="no-print grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((page) => (
              <WorkCard
                key={page.id}
                page={page}
                onOpen={() => setLightbox(page)}
                onDelete={async () => {
                  await deleteWorkPage(page.id)
                  await refresh()
                }}
              />
            ))}
          </div>

          {/* Print layout: one page per sheet with its provenance. */}
          <div className="hidden print:block">
            {filtered.map((page) => (
              <PrintPage key={page.id} page={page} learnerName={active.name} />
            ))}
          </div>
        </div>
        ))}

      <AttachPicker
        file={picker}
        onCancel={() => setPicker(null)}
        onPick={(entry) => picker && void attachTo(picker, entry)}
      />

      <Lightbox page={lightbox} onClose={() => setLightbox(null)} />
    </div>
  )
}

/* -------------------------------------------------------------- stickers */

interface Sticker {
  image: SavedImage
  lessonTitle: string
  subjectId: SubjectId
  gradeId: string
  earnedAt: number
}

/**
 * The trophy case.
 *
 * Nothing new is stored to build this — a sticker is simply the worksheet art
 * already generated for a lesson the learner has since finished. Art for a
 * lesson they have not done yet stays hidden, which is what makes finishing one
 * feel like it produced something.
 */
function Stickers({ records }: { records: Record<string, LessonRecord> }) {
  const [stickers, setStickers] = useState<Sticker[] | null>(null)

  useEffect(() => {
    let cancelled = false
    void allSavedImages().then((images) => {
      if (cancelled) return

      const earned = new Map<string, Sticker>()
      for (const image of images) {
        const record = records[image.lessonId]
        if (record?.status !== 'done') continue
        // One sticker per lesson: the first image generated for it.
        const existing = earned.get(image.lessonId)
        if (existing && existing.image.createdAt <= image.createdAt) continue
        earned.set(image.lessonId, {
          image,
          lessonTitle: record.lessonTitle,
          subjectId: record.subjectId as SubjectId,
          gradeId: record.gradeId,
          earnedAt: record.completedAt ?? record.updatedAt,
        })
      }

      setStickers([...earned.values()].sort((a, b) => b.earnedAt - a.earnedAt))
    })
    return () => {
      cancelled = true
    }
  }, [records])

  const doneCount = Object.values(records).filter((r) => r.status === 'done').length

  if (stickers === null) return null

  if (stickers.length === 0) {
    return (
      <div className="surface">
        <EmptyState
          icon={<IconStar size={20} />}
          title={doneCount === 0 ? 'No stickers yet' : 'Generate some worksheet art'}
          body={
            doneCount === 0
              ? 'Finish a lesson and the picture from its worksheet becomes a sticker you keep here.'
              : `${doneCount} lesson${doneCount === 1 ? '' : 's'} finished. Generate the worksheet art for a lesson and its picture turns into a sticker.`
          }
        />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {stickers.map((sticker) => (
        <StickerCard key={sticker.image.id} sticker={sticker} />
      ))}
    </div>
  )
}

function StickerCard({ sticker }: { sticker: Sticker }) {
  const url = useBlobUrl(sticker.image.image)
  const colour = SUBJECT_COLOUR[sticker.subjectId]

  return (
    <Link
      to={`/c/${sticker.gradeId}/${sticker.subjectId}/${sticker.image.lessonId}`}
      className="surface overflow-hidden focus-ring hover:shadow-md transition-shadow"
    >
      <span
        className="block aspect-square p-2.5"
        style={{ background: `color-mix(in srgb, ${colour} 12%, var(--surface))` }}
      >
        {url && (
          <img
            src={url}
            alt={`Sticker for ${sticker.lessonTitle}`}
            className="w-full h-full object-contain"
          />
        )}
      </span>
      <span className="block p-2.5 border-t">
        <span className="block text-[12px] font-medium leading-snug line-clamp-2">
          {sticker.lessonTitle}
        </span>
        <span className="flex items-center gap-1.5 mt-1">
          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: colour }} />
          <span className="text-[10.5px] faint">
            {SUBJECT_BY_ID[sticker.subjectId]?.short} ·{' '}
            {new Date(sticker.earnedAt).toLocaleDateString()}
          </span>
        </span>
      </span>
    </Link>
  )
}

/* ------------------------------------------------------------------ card */

function WorkCard({
  page,
  onOpen,
  onDelete,
}: {
  page: WorkPage
  onOpen: () => void
  onDelete: () => void
}) {
  const url = useBlobUrl(page.thumb)
  const colour = SUBJECT_COLOUR[page.subjectId as SubjectId]

  return (
    <div className="group surface overflow-hidden">
      <button onClick={onOpen} className="block w-full aspect-[3/4] bg-[var(--surface-3)]">
        {url && (
          <img
            src={url}
            alt={`Finished work: ${page.lessonTitle}`}
            className="w-full h-full object-cover"
          />
        )}
      </button>
      <div className="p-2.5 relative">
        <span className="block text-[12px] font-medium leading-snug line-clamp-2 pr-6">
          {page.lessonTitle}
        </span>
        <span className="flex items-center gap-1.5 mt-1">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: colour }} />
          <span className="text-[10.5px] faint">
            {SUBJECT_BY_ID[page.subjectId as SubjectId]?.short} ·{' '}
            {new Date(page.createdAt).toLocaleDateString()}
          </span>
        </span>
        <button
          onClick={onDelete}
          aria-label="Delete this page"
          className="absolute top-2 right-2 p-1 rounded opacity-0 group-hover:opacity-100 hover:bg-rose-500/15 hover:text-rose-500 transition-opacity focus-ring"
        >
          <IconTrash size={13} />
        </button>
      </div>
    </div>
  )
}

function PrintPage({ page, learnerName }: { page: WorkPage; learnerName: string }) {
  const url = useBlobUrl(page.image)
  return (
    <div className="print-page py-4">
      <div className="flex items-baseline justify-between border-b border-black pb-1.5 mb-3">
        <span className="text-[13px] font-bold">{page.lessonTitle}</span>
        <span className="text-[10px]">
          {learnerName} · {GRADE_BY_ID[page.gradeId as GradeId]?.name} ·{' '}
          {SUBJECT_BY_ID[page.subjectId as SubjectId]?.name} ·{' '}
          {new Date(page.createdAt).toLocaleDateString()}
        </span>
      </div>
      {url && <img src={url} alt="" className="w-full object-contain" />}
    </div>
  )
}

/* -------------------------------------------------------------- lightbox */

function Lightbox({ page, onClose }: { page: WorkPage | null; onClose: () => void }) {
  const url = useBlobUrl(page?.image)

  useEffect(() => {
    if (!page) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [page, onClose])

  if (!page) return null

  return (
    <div
      className="fixed inset-0 z-[65] bg-black/85 flex items-center justify-center p-6 no-print"
      onClick={onClose}
    >
      <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        {url && (
          <img
            src={url}
            alt={`Finished work: ${page.lessonTitle}`}
            className="w-full max-h-[80vh] object-contain rounded-lg bg-white"
          />
        )}
        <div className="mt-3 flex items-center justify-between gap-4 text-white">
          <div>
            <p className="font-medium">{page.lessonTitle}</p>
            <p className="text-[12px] opacity-70">
              {GRADE_BY_ID[page.gradeId as GradeId]?.name} ·{' '}
              {SUBJECT_BY_ID[page.subjectId as SubjectId]?.name} ·{' '}
              {new Date(page.createdAt).toLocaleDateString()}
            </p>
          </div>
          <Link
            to={`/c/${page.gradeId}/${page.subjectId}/${page.lessonId}`}
            className="text-[13px] underline underline-offset-4 opacity-80 hover:opacity-100"
          >
            Open the lesson →
          </Link>
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------- attach picker */

function AttachPicker({
  file,
  onCancel,
  onPick,
}: {
  file: File | null
  onCancel: () => void
  onPick: (e: SearchEntry) => void
}) {
  const [query, setQuery] = useState('')
  const [, tick] = useState(0)
  const preview = useBlobUrl(file ?? undefined)

  useEffect(() => {
    if (!file) return
    setQuery('')
    void warmIndex().then(() => tick((n) => n + 1))
  }, [file])

  const results = useMemo(
    () => (file ? search(query, 30).filter((e) => e.kind === 'lesson') : []),
    [file, query],
  )

  return (
    <Modal open={Boolean(file)} onClose={onCancel} title="Which lesson is this from?" wide>
      {preview && (
        <img
          src={preview}
          alt="The page you are adding"
          className="w-full max-h-40 object-contain rounded-lg border mb-4 bg-[var(--surface-2)]"
        />
      )}

      <div className="flex items-center gap-2.5 px-3 mb-3 rounded-lg border bg-[var(--surface-2)]">
        <IconSearch size={15} className="faint shrink-0" />
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search lessons…"
          className="flex-1 bg-transparent py-2.5 text-[14px] outline-none placeholder:text-[var(--text-3)]"
        />
      </div>

      <div className="flex flex-col gap-1">
        {results.length === 0 ? (
          <p className="text-[13px] muted py-8 text-center">
            {query ? `Nothing matches “${query}”.` : 'Loading lessons…'}
          </p>
        ) : (
          results.map((entry, i) => (
            <button
              key={`${entry.path}-${i}`}
              onClick={() => onPick(entry)}
              className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[var(--surface-3)] transition-colors text-left"
            >
              <span
                className="w-1.5 h-8 rounded-full shrink-0"
                style={{ background: SUBJECT_COLOUR[entry.subjectId] }}
              />
              <span className="min-w-0 flex-1">
                <span className="block text-[13.5px] font-medium truncate">{entry.title}</span>
                <span className="block text-[11.5px] faint truncate">{entry.subtitle}</span>
              </span>
              {!entry.authored && <Badge>outline</Badge>}
            </button>
          ))
        )}
      </div>
    </Modal>
  )
}

