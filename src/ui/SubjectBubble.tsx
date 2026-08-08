import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { SUBJECT_ICONS } from './icons'
import { SUBJECT_COLOUR } from './primitives'
import { ProgressRing } from './ProgressRing'
import type { SubjectProgress } from '../lib/progress'
import type { GradeId, Subject } from '../curriculum/types'

/**
 * One subject as a single tappable object: a coloured disc wrapped in its own
 * progress ring, with the lesson that comes next written underneath. A child
 * can aim at it and a parent can see, without reading, how far in they are.
 */
export function SubjectBubble({
  subject,
  gradeId,
  progress,
  size = 92,
}: {
  subject: Subject
  gradeId: GradeId
  progress: SubjectProgress | null
  size?: number
}) {
  const Icon = SUBJECT_ICONS[subject.icon as keyof typeof SUBJECT_ICONS]
  const colour = SUBJECT_COLOUR[subject.id]
  const complete = progress ? progress.done === progress.total && progress.total > 0 : false

  // Percentages rather than pixels throughout, so the whole bubble scales down
  // with its grid cell on a narrow screen instead of spilling over the label.
  const disc = (
    <ProgressRing percent={progress?.percent ?? 0} size={size} stroke={6} colour={colour}>
      <span
        className="bubble-disc absolute inset-[10%] grid place-items-center rounded-full"
        style={{
          background: `color-mix(in srgb, ${colour} ${progress ? '22%' : '8%'}, var(--surface))`,
          color: progress ? colour : 'var(--text-3)',
        }}
      >
        <Icon className="w-[38%] h-[38%]" strokeWidth={1.6} />
      </span>
    </ProgressRing>
  )

  if (!progress) {
    return (
      <div
        className="flex flex-col items-center gap-2.5 text-center opacity-45 select-none min-w-0"
        aria-label={`${subject.name} — not written yet`}
      >
        {disc}
        <span className="min-w-0">
          <span className="block text-[14px] font-semibold tracking-tight">{subject.short}</span>
          <span className="block text-[11.5px] faint mt-0.5 h-[2.1rem]">Coming soon</span>
        </span>
      </div>
    )
  }

  return (
    <Link
      to={`/c/${gradeId}/${subject.id}`}
      className="bubble group flex flex-col items-center gap-2.5 text-center focus-ring rounded-3xl p-1 select-none min-w-0"
      style={{ '--sc': colour } as React.CSSProperties}
    >
      {disc}
      <span className="min-w-0 w-full">
        <span className="block text-[14px] font-semibold tracking-tight">{subject.short}</span>
        {/* Two lines' worth of space, always — a long lesson title in one
            subject must not shove that bubble lower than its neighbours. */}
        <span
          className={clsx(
            'block text-[11.5px] mt-0.5 leading-snug line-clamp-2 h-[2.1rem]',
            complete ? 'text-emerald-600 dark:text-emerald-400 font-medium' : 'faint',
          )}
        >
          {complete ? 'All done!' : (progress.next?.title ?? `${progress.done}/${progress.total}`)}
        </span>
      </span>
    </Link>
  )
}
