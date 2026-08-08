import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { deletePlanEntry, planForLearner, putPlanEntry, uid, type PlanEntry } from '../lib/db'
import { useLearners, usePrefs, useToasts } from '../lib/store'
import { search, warmIndex, type SearchEntry } from '../lib/search'
import { Badge, Button, EmptyState, Modal, SUBJECT_COLOUR } from '../ui/primitives'
import { IconCalendar, IconChevron, IconPrint, IconSearch, IconTrash } from '../ui/icons'
import { GenerateAllButton, useMissingCount } from '../ui/GenerateRun'
import { GRADE_BY_ID, SUBJECT_BY_ID } from '../curriculum/taxonomy'
import { findLesson, loadCourse } from '../curriculum/registry'
import type { GradeId, Lesson, SubjectId } from '../curriculum/types'

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function isoDate(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function startOfWeek(d: Date) {
  const copy = new Date(d)
  copy.setHours(0, 0, 0, 0)
  copy.setDate(copy.getDate() - copy.getDay())
  return copy
}

export default function Planner() {
  const activeLearnerId = usePrefs((s) => s.activeLearnerId)
  const learners = useLearners((s) => s.learners)
  const push = useToasts((s) => s.push)

  const [weekStart, setWeekStart] = useState(() => startOfWeek(new Date()))
  const [entries, setEntries] = useState<PlanEntry[]>([])
  const [pickerDate, setPickerDate] = useState<string | null>(null)

  const active = learners.find((l) => l.id === activeLearnerId)

  const refresh = useCallback(async () => {
    if (!activeLearnerId) {
      setEntries([])
      return
    }
    setEntries(await planForLearner(activeLearnerId))
  }, [activeLearnerId])

  useEffect(() => {
    void refresh()
  }, [refresh])

  const days = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => {
        const d = new Date(weekStart)
        d.setDate(d.getDate() + i)
        return d
      }),
    [weekStart],
  )

  /**
   * The lessons scheduled in the week on screen, resolved from their plan
   * entries. This is what "prep this week" actually operates on — courses are
   * lazy chunks, so every one referenced by the week has to be loaded first.
   */
  const [weekLessons, setWeekLessons] = useState<Lesson[]>([])

  useEffect(() => {
    const isos = new Set(days.map(isoDate))
    const inWeek = entries.filter((e) => isos.has(e.date))
    let cancelled = false

    void Promise.all(
      inWeek.map(async (e) => {
        const course = await loadCourse(e.gradeId as GradeId, e.subjectId as SubjectId)
        return course ? (findLesson(course, e.lessonId)?.lesson ?? null) : null
      }),
    ).then((found) => {
      if (cancelled) return
      const seen = new Set<string>()
      const unique: Lesson[] = []
      for (const lesson of found) {
        // The same lesson can be scheduled on two days; generate its images once.
        if (lesson && !seen.has(lesson.id)) {
          seen.add(lesson.id)
          unique.push(lesson)
        }
      }
      setWeekLessons(unique)
    })

    return () => {
      cancelled = true
    }
  }, [entries, days])

  const missingImages = useMissingCount(weekLessons)

  const byDate = useMemo(() => {
    const map = new Map<string, PlanEntry[]>()
    for (const e of entries) {
      const list = map.get(e.date) ?? []
      list.push(e)
      map.set(e.date, list)
    }
    for (const list of map.values()) list.sort((a, b) => a.order - b.order)
    return map
  }, [entries])

  async function addLesson(date: string, entry: SearchEntry) {
    if (!activeLearnerId) return
    const lessonId = entry.path.split('/').pop()!
    const existing = byDate.get(date) ?? []
    await putPlanEntry({
      id: uid(),
      learnerId: activeLearnerId,
      date,
      lessonId,
      lessonTitle: entry.title,
      gradeId: entry.gradeId,
      subjectId: entry.subjectId,
      order: existing.length,
    })
    await refresh()
    push(`Added to ${DAY_NAMES[new Date(`${date}T00:00:00`).getDay()]}.`, 'success')
  }

  async function remove(id: string) {
    await deletePlanEntry(id)
    await refresh()
  }

  const todayIso = isoDate(new Date())
  const weekLabel = `${days[0].toLocaleDateString(undefined, { month: 'long', day: 'numeric' })} – ${days[6].toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}`

  if (!active) {
    return (
      <div className="max-w-2xl mx-auto">
        <EmptyState
          icon={<IconCalendar size={20} />}
          title="Add a learner first"
          body="The planner schedules lessons for a specific learner. Add one from the sidebar to get started."
        />
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-7 lg:py-9">
      <div className="no-print flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Planner</h1>
          <p className="muted mt-1 text-[14px]">
            {active.avatar} {active.name} · {weekLabel}
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() => {
              const d = new Date(weekStart)
              d.setDate(d.getDate() - 7)
              setWeekStart(d)
            }}
            icon={<IconChevron size={14} className="rotate-180" />}
          >
            Previous
          </Button>
          <Button onClick={() => setWeekStart(startOfWeek(new Date()))}>This week</Button>
          <Button
            onClick={() => {
              const d = new Date(weekStart)
              d.setDate(d.getDate() + 7)
              setWeekStart(d)
            }}
          >
            Next
            <IconChevron size={14} />
          </Button>
          <Button icon={<IconPrint size={15} />} onClick={() => window.print()}>
            Print
          </Button>
        </div>
      </div>

      {/* One press turns a planned week into a printable one. */}
      {weekLessons.length > 0 && (
        <div className="no-print surface p-4 mb-5 flex flex-wrap items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[13.5px] font-medium">
              {missingImages == null
                ? 'Checking this week’s worksheets…'
                : missingImages === 0
                  ? 'Every worksheet this week is ready to print.'
                  : `${missingImages} worksheet image${missingImages === 1 ? '' : 's'} still to generate.`}
            </p>
            <p className="text-[12px] faint mt-0.5">
              {weekLessons.length} lesson{weekLessons.length === 1 ? '' : 's'} planned ·{' '}
              {missingImages === 0
                ? 'nothing left to do before Monday.'
                : 'generated once and kept on this device.'}
            </p>
          </div>
          {missingImages != null && missingImages > 0 && (
            <GenerateAllButton
              collect={async () => weekLessons}
              scope="this week’s plan"
              label={`Prepare the week — ${missingImages} image${missingImages === 1 ? '' : 's'}`}
            />
          )}
        </div>
      )}

      <div className="print-root grid md:grid-cols-2 xl:grid-cols-4 gap-3">
        {days.map((day) => {
          const iso = isoDate(day)
          const list = byDate.get(iso) ?? []
          const isToday = iso === todayIso
          const isWeekend = day.getDay() === 0 || day.getDay() === 6

          return (
            <div
              key={iso}
              className={clsx(
                'surface p-3.5 flex flex-col min-h-[9rem] avoid-break',
                isToday && 'ring-2 ring-blue-500/40',
                isWeekend && 'opacity-80',
              )}
            >
              <div className="flex items-baseline justify-between mb-2.5">
                <span className="text-[13px] font-semibold">
                  {DAY_NAMES[day.getDay()].slice(0, 3)}
                </span>
                <span className={clsx('text-[12px] tabular-nums', isToday ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'faint')}>
                  {day.getDate()}
                </span>
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                {list.map((e) => {
                  const colour = SUBJECT_COLOUR[e.subjectId as SubjectId]
                  return (
                    <div key={e.id} className="group relative">
                      <Link
                        to={`/c/${e.gradeId}/${e.subjectId}/${e.lessonId}`}
                        className="block rounded-lg border p-2 pr-7 hover:bg-[var(--surface-3)] transition-colors"
                        style={{ borderLeftColor: colour, borderLeftWidth: 3 }}
                      >
                        <span className="block text-[12.5px] font-medium leading-snug line-clamp-2">
                          {e.lessonTitle}
                        </span>
                        <span className="block text-[10.5px] faint mt-0.5">
                          {SUBJECT_BY_ID[e.subjectId as SubjectId]?.short}
                        </span>
                      </Link>
                      <button
                        onClick={() => void remove(e.id)}
                        aria-label="Remove from plan"
                        className="no-print absolute top-1.5 right-1.5 p-1 rounded opacity-0 group-hover:opacity-100 hover:bg-rose-500/15 hover:text-rose-500 transition-opacity focus-ring"
                      >
                        <IconTrash size={12} />
                      </button>
                    </div>
                  )
                })}

                {list.length === 0 && (
                  <p className="text-[11.5px] faint py-2">Nothing planned</p>
                )}
              </div>

              <button
                onClick={() => setPickerDate(iso)}
                className="no-print mt-2 w-full py-1.5 rounded-lg border border-dashed text-[12px] muted hover:bg-[var(--surface-3)] hover:text-[var(--text)] transition-colors focus-ring"
              >
                + Add lesson
              </button>
            </div>
          )
        })}
      </div>

      <LessonPicker
        open={pickerDate !== null}
        onClose={() => setPickerDate(null)}
        onPick={(entry) => {
          if (pickerDate) void addLesson(pickerDate, entry)
          setPickerDate(null)
        }}
        dateLabel={
          pickerDate
            ? new Date(`${pickerDate}T00:00:00`).toLocaleDateString(undefined, {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })
            : ''
        }
      />
    </div>
  )
}

function LessonPicker({
  open,
  onClose,
  onPick,
  dateLabel,
}: {
  open: boolean
  onClose: () => void
  onPick: (e: SearchEntry) => void
  dateLabel: string
}) {
  const [query, setQuery] = useState('')
  const [, tick] = useState(0)

  useEffect(() => {
    if (!open) return
    setQuery('')
    void warmIndex().then(() => tick((n) => n + 1))
  }, [open])

  const results = useMemo(
    () => (open ? search(query, 40).filter((e) => e.kind === 'lesson') : []),
    [open, query],
  )

  return (
    <Modal open={open} onClose={onClose} title={`Add a lesson to ${dateLabel}`} wide>
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
              <span className="text-[11px] faint shrink-0">
                {GRADE_BY_ID[entry.gradeId as GradeId]?.short}
              </span>
            </button>
          ))
        )}
      </div>
    </Modal>
  )
}
