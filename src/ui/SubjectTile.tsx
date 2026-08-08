import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { SUBJECT_ICONS } from './icons'
import { SUBJECT_COLOUR } from './primitives'
import type { SubjectProgress } from '../lib/progress'
import type { GradeId, Subject } from '../curriculum/types'

/**
 * One subject, one grade. The icon and the name do the work; the description
 * is held back until you point at the tile, because the same four sentences
 * would otherwise repeat down the whole curriculum page. Once a learner has
 * started, the blurb gives way to how far in they are — which is the only thing
 * anyone actually wants from a tile they have already opened.
 */
export function SubjectTile({
  subject,
  gradeId,
  available,
  progress,
}: {
  subject: Subject
  gradeId: GradeId
  available: boolean
  progress?: SubjectProgress | null
}) {
  const Icon = SUBJECT_ICONS[subject.icon as keyof typeof SUBJECT_ICONS]
  const colour = SUBJECT_COLOUR[subject.id]
  const started = Boolean(progress && progress.done > 0)

  const inner = (
    <>
      {/* Takes the slack, so opening the description slides the name up and
          leaves the icon where it is. */}
      <span className="flex-1 min-h-0 flex items-start justify-between gap-2 overflow-hidden">
        <Icon
          size={30}
          strokeWidth={1.5}
          className="shrink-0"
          style={available ? { color: colour } : undefined}
        />
        {started && (
          <span className="text-[11px] font-bold tabular-nums shrink-0" style={{ color: colour }}>
            {progress!.percent}%
          </span>
        )}
      </span>

      <span className="text-[15.5px] font-semibold leading-none tracking-tight">
        {subject.short}
      </span>

      {started ? (
        <span className="block mt-2 h-1.5 rounded-full overflow-hidden bg-[var(--surface-3)]">
          <span
            className="block h-full rounded-full"
            style={{ width: `${Math.max(progress!.percent, 4)}%`, background: colour }}
          />
        </span>
      ) : (
        <span className="tile-reveal">
          <span>
            <span className="line-clamp-2 pt-1.5 text-[11.5px] leading-snug muted">
              {available ? subject.blurb : 'Not written yet'}
            </span>
          </span>
        </span>
      )}
    </>
  )

  const shape = 'flex flex-col h-[7.5rem] p-4 rounded-2xl select-none'

  if (!available) {
    return (
      <div
        className={clsx('tile-ghost', shape)}
        aria-label={`${subject.name} — not written yet`}
      >
        {inner}
      </div>
    )
  }

  return (
    <Link
      to={`/c/${gradeId}/${subject.id}`}
      style={{ '--sc': colour } as React.CSSProperties}
      className={clsx('tile focus-ring', shape)}
      aria-label={
        started
          ? `${subject.name} — ${progress!.done} of ${progress!.total} lessons done`
          : subject.name
      }
    >
      {inner}
    </Link>
  )
}
