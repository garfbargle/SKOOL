import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCourse } from '../lib/useCourse'
import { courseStats } from '../curriculum/registry'
import { GRADE_BY_ID, SUBJECT_BY_ID } from '../curriculum/taxonomy'
import { courseProgress } from '../lib/progress'
import { EmptyState, Spinner, SUBJECT_COLOUR } from '../ui/primitives'
import { ProgressRing } from '../ui/ProgressRing'
import { LessonPath } from '../ui/LessonPath'
import { IconArrowLeft, IconChevronDown, IconTarget, SUBJECT_ICONS } from '../ui/icons'
import { useLearners } from '../lib/store'
import type { GradeId, SubjectId } from '../curriculum/types'

/**
 * A subject, as a trail of lessons.
 *
 * The course overview and year goals are genuinely useful — to an adult, once,
 * at the start of a year. They used to be the first six hundred words on the
 * page, which buried the only thing anyone opens this screen for. Now they fold
 * away behind "Plan details" and the path starts immediately.
 */
export default function Course() {
  const { gradeId, subjectId } = useParams()
  const { course, loading, missing } = useCourse(gradeId, subjectId)
  const records = useLearners((s) => s.records)

  const progress = useMemo(
    () =>
      gradeId && subjectId
        ? courseProgress(gradeId as GradeId, subjectId as SubjectId, records)
        : null,
    [gradeId, subjectId, records],
  )

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
    <div className="max-w-2xl mx-auto px-5 sm:px-8 pt-7 pb-24">
      <Link
        to="/browse"
        className="inline-flex items-center gap-1.5 text-[13px] muted hover:text-[var(--text)] mb-5 focus-ring rounded"
      >
        <IconArrowLeft size={14} />
        All curriculum
      </Link>

      {/* -------------------------------------------------------- header */}
      <header className="flex items-center gap-4 mb-6">
        <ProgressRing percent={progress?.percent ?? 0} size={64} stroke={5} colour={colour}>
          <span style={{ color: colour }}>
            <Icon size={26} strokeWidth={1.6} />
          </span>
        </ProgressRing>

        <div className="min-w-0">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.09em]"
            style={{ color: colour }}
          >
            {grade.name}
          </p>
          <h1 className="text-[24px] sm:text-[28px] font-semibold tracking-[-0.025em] leading-tight">
            {subject.name}
          </h1>
          {progress && (
            <p className="text-[13px] muted mt-0.5">
              {progress.done} of {progress.total} lessons done
            </p>
          )}
        </div>
      </header>

      {/* ---------------------------------------------------- plan details */}
      <details className="surface mb-8 group">
        <summary className="flex items-center gap-2 px-4 py-3 cursor-pointer select-none list-none focus-ring rounded-[var(--radius-card)]">
          <IconChevronDown
            size={16}
            className="faint transition-transform group-open:rotate-180"
          />
          <span className="text-[13.5px] font-semibold whitespace-nowrap">Plan details</span>
          {/* The stats are a nicety; on a phone they wrap the summary onto
              three lines, so they simply go away. */}
          <span className="hidden sm:block text-[12px] faint ml-auto tabular-nums truncate">
            {stats.units} units · {stats.weeks} weeks · {stats.images} image prompts
          </span>
        </summary>

        <div className="px-4 pb-4 pt-1 border-t mt-1">
          <h2 className="text-[17px] font-semibold tracking-tight mt-3">{course.title}</h2>
          <p className="mt-2 text-[14px] muted leading-relaxed">{course.overview}</p>

          <h3 className="flex items-center gap-2 font-semibold text-[13.5px] mt-5 mb-2.5">
            <IconTarget size={15} style={{ color: colour }} />
            By the end of the year
          </h3>
          <ul className="flex flex-col gap-2">
            {course.yearGoals.map((g, i) => (
              <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed">
                <span
                  className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: colour }}
                />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </details>

      {/* ------------------------------------------------------------ path */}
      {progress && (
        <LessonPath
          steps={progress.steps}
          gradeId={gradeId as GradeId}
          subjectId={subjectId as SubjectId}
          colour={colour}
          currentId={progress.next?.id ?? null}
        />
      )}
    </div>
  )
}
