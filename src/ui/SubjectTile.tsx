import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { SUBJECT_ICONS } from './icons'
import { SUBJECT_COLOUR } from './primitives'
import type { GradeId, Subject } from '../curriculum/types'

/**
 * One subject, one grade. The icon and the name do the work; the description
 * is held back until you point at the tile, because the same four sentences
 * would otherwise repeat down the whole curriculum page.
 */
export function SubjectTile({
  subject,
  gradeId,
  available,
}: {
  subject: Subject
  gradeId: GradeId
  available: boolean
}) {
  const Icon = SUBJECT_ICONS[subject.icon as keyof typeof SUBJECT_ICONS]
  const colour = SUBJECT_COLOUR[subject.id]

  const inner = (
    <>
      {/* Takes the slack, so opening the description slides the name up and
          leaves the icon where it is. */}
      <span className="flex-1 min-h-0 flex items-start overflow-hidden">
        <Icon
          size={30}
          strokeWidth={1.5}
          className="shrink-0"
          style={available ? { color: colour } : undefined}
        />
      </span>
      <span className="text-[15.5px] font-semibold leading-none tracking-tight">
        {subject.short}
      </span>
      <span className="tile-reveal">
        <span>
          <span className="line-clamp-2 pt-1.5 text-[11.5px] leading-snug muted">
            {available ? subject.blurb : 'Not written yet'}
          </span>
        </span>
      </span>
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
      aria-label={subject.name}
    >
      {inner}
    </Link>
  )
}
