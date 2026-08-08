import { Link, useParams } from 'react-router-dom'
import clsx from 'clsx'
import { useCourse } from '../lib/useCourse'
import { courseStats } from '../curriculum/registry'
import { GRADE_BY_ID, SUBJECT_BY_ID } from '../curriculum/taxonomy'
import { Badge, EmptyState, Spinner, SUBJECT_COLOUR } from '../ui/primitives'
import {
  IconArrowLeft,
  IconChevron,
  IconClock,
  IconImage,
  IconTarget,
  SUBJECT_ICONS,
} from '../ui/icons'
import { useLearners } from '../lib/store'
import type { GradeId, SubjectId } from '../curriculum/types'

export default function Course() {
  const { gradeId, subjectId } = useParams()
  const { course, loading, missing } = useCourse(gradeId, subjectId)
  const records = useLearners((s) => s.records)

  if (loading) return <Spinner label="Loading course…" />
  if (missing || !course) {
    return (
      <EmptyState
        title="Course not found"
        body="This grade and subject combination has not been authored yet."
      />
    )
  }

  const grade = GRADE_BY_ID[gradeId as GradeId]
  const subject = SUBJECT_BY_ID[subjectId as SubjectId]
  const Icon = SUBJECT_ICONS[subject.icon as keyof typeof SUBJECT_ICONS]
  const colour = SUBJECT_COLOUR[subject.id]
  const stats = courseStats(course)

  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-16 lg:pt-10">
      <Link
        to="/browse"
        className="inline-flex items-center gap-1.5 text-[13px] muted hover:text-[var(--text)] mb-6 focus-ring rounded"
      >
        <IconArrowLeft size={14} />
        All curriculum
      </Link>

      {/* -------------------------------------------------------- header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3" style={{ color: colour }}>
          <Icon size={20} />
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.08em]">
            {grade.name} · {subject.name}
          </span>
        </div>
        <h1 className="text-[34px] lg:text-[42px] font-semibold tracking-[-0.03em] leading-[1.02]">
          {course.title}
        </h1>
        <p className="mt-4 text-[15px] muted leading-relaxed max-w-2xl">{course.overview}</p>

        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 text-[13px]">
          <Stat label="units" value={stats.units} />
          <Stat label="lessons" value={stats.lessons} />
          <Stat label="fully scripted" value={stats.authored} />
          <Stat label="image prompts" value={stats.images} />
          <Stat label="weeks" value={stats.weeks} />
        </div>
      </header>

      {/* ----------------------------------------------------- year goals */}
      <section className="surface p-5 mb-7">
        <h2 className="flex items-center gap-2 font-semibold text-[15px] mb-3">
          <IconTarget size={16} style={{ color: colour }} />
          By the end of the year
        </h2>
        <ul className="flex flex-col gap-2">
          {course.yearGoals.map((g, i) => (
            <li key={i} className="flex gap-2.5 text-[14px] leading-relaxed">
              <span
                className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: colour }}
              />
              <span>{g}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------------------------------------------------- units */}
      <div className="flex flex-col gap-5">
        {course.units.map((unit) => {
          const byTitle = new Map(unit.lessons.map((l) => [l.title, l]))

          return (
            <section key={unit.id} id={unit.id} className="surface overflow-hidden scroll-mt-6">
              <div className="p-5 pb-4">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span
                    className="text-[11px] font-bold px-1.5 py-0.5 rounded"
                    style={{ background: `color-mix(in srgb, ${colour} 16%, transparent)`, color: colour }}
                  >
                    UNIT {unit.sequence}
                  </span>
                  <span className="text-[12px] faint">{unit.weeks} weeks</span>
                </div>
                <h2 className="text-[18px] font-semibold tracking-tight">{unit.title}</h2>
                <p className="text-[14px] mt-2 leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  <span className="font-medium text-[var(--text)]">Big idea: </span>
                  {unit.bigIdea}
                </p>
                <p className="text-[13.5px] muted mt-2 leading-relaxed">{unit.description}</p>

                {unit.standards.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {unit.standards.map((s) => (
                      <span
                        key={s.code}
                        title={s.text}
                        className="text-[10.5px] font-mono px-1.5 py-0.5 rounded bg-[var(--surface-3)] muted cursor-help"
                      >
                        {s.code}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* lessons */}
              <ol className="border-t divide-y">
                {unit.lessonTitles.map((title, i) => {
                  const lesson = byTitle.get(title)
                  const record = lesson ? records[lesson.id] : undefined
                  const authored = lesson?.status === 'authored'
                  const images =
                    lesson?.worksheet.sections.reduce((n, s) => n + (s.images?.length ?? 0), 0) ?? 0

                  const inner = (
                    <>
                      <span
                        className={clsx(
                          'w-6 h-6 rounded-md grid place-items-center text-[11px] font-bold shrink-0 mt-0.5',
                          record?.status === 'done'
                            ? 'bg-emerald-500 text-white'
                            : authored
                              ? 'text-white'
                              : 'bg-[var(--surface-3)] faint',
                        )}
                        style={
                          record?.status !== 'done' && authored ? { background: colour } : undefined
                        }
                      >
                        {record?.status === 'done' ? '✓' : i + 1}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-2">
                          <span
                            className={clsx(
                              'text-[14.5px] font-medium',
                              !lesson && 'muted',
                            )}
                          >
                            {title}
                          </span>
                          {!authored && <Badge>outline</Badge>}
                          {record?.status === 'in-progress' && <Badge tone="warn">in progress</Badge>}
                        </span>

                        {lesson && (
                          <span className="block text-[12.5px] muted mt-1 leading-snug line-clamp-2">
                            {lesson.summary}
                          </span>
                        )}

                        {lesson && (
                          <span className="flex items-center gap-3 mt-1.5 text-[11.5px] faint">
                            <span className="inline-flex items-center gap-1">
                              <IconClock size={12} /> {lesson.durationMin} min
                            </span>
                            {images > 0 && (
                              <span className="inline-flex items-center gap-1">
                                <IconImage size={12} /> {images} image{images === 1 ? '' : 's'}
                              </span>
                            )}
                          </span>
                        )}
                      </span>

                      {lesson && <IconChevron size={15} className="faint shrink-0 mt-1" />}
                    </>
                  )

                  return (
                    <li key={title}>
                      {lesson ? (
                        <Link
                          to={`/c/${gradeId}/${subjectId}/${lesson.id}`}
                          className="flex items-start gap-3 px-5 py-3.5 hover:bg-[var(--surface-3)] transition-colors focus-ring"
                        >
                          {inner}
                        </Link>
                      ) : (
                        <div
                          className="flex items-start gap-3 px-5 py-3.5 opacity-55"
                          title="Planned — not written yet"
                        >
                          {inner}
                        </div>
                      )}
                    </li>
                  )
                })}
              </ol>

              {unit.performanceTask && (
                <div className="px-5 py-4 border-t bg-[var(--surface-2)]">
                  <p className="text-[12px] font-semibold uppercase tracking-wide faint mb-1">
                    Unit performance task
                  </p>
                  <p className="text-[13.5px] leading-relaxed">{unit.performanceTask}</p>
                </div>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <span className="flex items-baseline gap-1.5">
      <span className="font-semibold tabular-nums">{value}</span>
      <span className="faint">{label}</span>
    </span>
  )
}
