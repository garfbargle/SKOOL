import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { IconCheck, IconLock, IconPlay } from './icons'
import type { PathStep } from '../lib/progress'
import type { GradeId, SubjectId } from '../curriculum/types'

/**
 * The course as a trail rather than a document.
 *
 * A list of thirty lessons with a summary each is a wall of text; the same
 * thirty as a winding line of stops is something a six-year-old can point at.
 * Only one node is ever the loud one — the lesson you are actually on — so the
 * page answers "what now?" before it answers anything else.
 */

/** Repeating horizontal offsets, in units of `--sway`. A gentle S, not a zigzag. */
const SWAY = [0, 0.75, 1, 0.75, 0, -0.75, -1, -0.75]

export function LessonPath({
  steps,
  gradeId,
  subjectId,
  colour,
  currentId,
}: {
  steps: PathStep[]
  gradeId: GradeId
  subjectId: SubjectId
  colour: string
  /** The one node that gets the pulse and the label. */
  currentId: string | null
}) {
  let renderedUnit = -1

  return (
    <div className="lesson-path" style={{ '--sc': colour } as React.CSSProperties}>
      {steps.map((step, i) => {
        const isCurrent = step.id !== '' && step.id === currentId
        const newUnit = step.unitSequence !== renderedUnit
        renderedUnit = step.unitSequence

        return (
          <Fragment key={`${step.unitId}-${step.title}-${i}`}>
            {newUnit && <UnitBanner step={step} colour={colour} first={i === 0} />}
            {!newUnit && <Connector from={SWAY[(i - 1) % SWAY.length]} to={SWAY[i % SWAY.length]} />}
            <PathNode
              step={step}
              sway={SWAY[i % SWAY.length]}
              colour={colour}
              current={isCurrent}
              gradeId={gradeId}
              subjectId={subjectId}
            />
          </Fragment>
        )
      })}
    </div>
  )
}

function UnitBanner({ step, colour, first }: { step: PathStep; colour: string; first: boolean }) {
  return (
    <div className={clsx('flex items-center gap-3 w-full', first ? 'mb-5' : 'mt-9 mb-5')}>
      <span className="h-px flex-1" style={{ background: `color-mix(in srgb, ${colour} 30%, transparent)` }} />
      <span className="text-center px-2">
        <span
          className="block text-[10.5px] font-bold uppercase tracking-[0.1em]"
          style={{ color: colour }}
        >
          Unit {step.unitSequence}
        </span>
        <span className="block text-[14px] font-semibold tracking-tight mt-0.5">
          {step.unitTitle}
        </span>
      </span>
      <span className="h-px flex-1" style={{ background: `color-mix(in srgb, ${colour} 30%, transparent)` }} />
    </div>
  )
}

/** Three dots interpolating between one node's offset and the next. */
function Connector({ from, to }: { from: number; to: number }) {
  return (
    <div className="flex flex-col items-center gap-[7px] py-[7px]" aria-hidden="true">
      {[0.25, 0.5, 0.75].map((t) => (
        <span
          key={t}
          className="w-[7px] h-[7px] rounded-full bg-[var(--surface-3)]"
          style={{ transform: `translateX(calc(${from + (to - from) * t} * var(--sway)))` }}
        />
      ))}
    </div>
  )
}

function PathNode({
  step,
  sway,
  colour,
  current,
  gradeId,
  subjectId,
}: {
  step: PathStep
  sway: number
  colour: string
  current: boolean
  gradeId: GradeId
  subjectId: SubjectId
}) {
  const done = step.status === 'done'
  const locked = step.status === 'locked'

  const face = (
    <span
      className={clsx(
        'path-node grid place-items-center rounded-full font-bold shrink-0',
        current ? 'w-[68px] h-[68px] text-[17px]' : 'w-[52px] h-[52px] text-[15px]',
        current && 'path-node-current',
        done && 'text-white',
        locked && 'path-node-locked',
      )}
      style={
        done
          ? { background: colour, boxShadow: `0 6px 16px -6px ${colour}` }
          : current
            ? { background: colour, color: '#fff', boxShadow: `0 10px 24px -8px ${colour}` }
            : locked
              ? undefined
              : {
                  background: `color-mix(in srgb, ${colour} 14%, var(--surface))`,
                  color: colour,
                  border: `2px solid color-mix(in srgb, ${colour} 34%, transparent)`,
                }
      }
    >
      {done ? (
        <IconCheck size={24} strokeWidth={2.75} />
      ) : locked ? (
        <IconLock size={19} />
      ) : current ? (
        <IconPlay size={22} />
      ) : (
        step.index
      )}
    </span>
  )

  const label = (
    <span className="block max-w-[15rem] mx-auto">
      <span
        className={clsx(
          'block leading-snug',
          current
            ? 'text-[15px] font-semibold'
            : done
              ? 'text-[12.5px] font-medium muted'
              : 'text-[12.5px] faint',
        )}
      >
        {step.title}
      </span>
      {current && (
        <span className="block text-[11.5px] font-semibold uppercase tracking-wide mt-1" style={{ color: colour }}>
          Start · {step.minutes} min
        </span>
      )}
      {locked && <span className="block text-[11px] faint mt-0.5">Not written yet</span>}
    </span>
  )

  const body = (
    <span className="flex flex-col items-center gap-2 text-center">
      {face}
      {label}
    </span>
  )

  const style = { transform: `translateX(calc(${sway} * var(--sway)))` }

  if (locked) {
    return (
      <div className="w-full flex justify-center" style={style} title="Planned — not written yet">
        <span className="opacity-45 select-none">{body}</span>
      </div>
    )
  }

  return (
    <div className="w-full flex justify-center" style={style}>
      <Link
        to={`/c/${gradeId}/${subjectId}/${step.id}`}
        className="path-link rounded-2xl p-1.5 focus-ring select-none"
        aria-current={current ? 'step' : undefined}
      >
        {body}
      </Link>
    </div>
  )
}
