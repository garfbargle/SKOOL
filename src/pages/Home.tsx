import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { GRADE_BY_ID, SUBJECTS } from '../curriculum/taxonomy'
import { AVAILABLE_COURSES } from '../curriculum/registry'
import { useLearners, usePrefs } from '../lib/store'
import { scheduleWarm } from '../lib/search'
import { Badge, Button, SUBJECT_COLOUR } from '../ui/primitives'
import { SubjectTile } from '../ui/SubjectTile'
import { IconChevron, IconGrid, IconPlay, IconSparkle } from '../ui/icons'
import type { GradeId, SubjectId } from '../curriculum/types'

function greeting() {
  const h = new Date().getHours()
  if (h < 5) return 'Still up'
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

export default function Home() {
  const { learners, records } = useLearners()
  const activeLearnerId = usePrefs((s) => s.activeLearnerId)
  const active = learners.find((l) => l.id === activeLearnerId)

  // Warm the search index once the dashboard is on screen.
  useEffect(() => scheduleWarm(), [])

  const recent = useMemo(
    () =>
      Object.values(records)
        .sort((a, b) => b.updatedAt - a.updatedAt)
        .slice(0, 5),
    [records],
  )

  const counts = useMemo(() => {
    const list = Object.values(records)
    return {
      done: list.filter((r) => r.status === 'done').length,
      inProgress: list.filter((r) => r.status === 'in-progress').length,
      secure: list.filter((r) => r.mastery === 'secure').length,
    }
  }, [records])

  const grade = active ? GRADE_BY_ID[active.gradeId as GradeId] : null

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-16 lg:pt-14">
      <header className="mb-9">
        <h1 className="text-[40px] lg:text-[52px] font-semibold tracking-[-0.03em] leading-[0.95]">
          {greeting()}
          {active ? `. Ready for ${active.name}?` : '.'}
        </h1>
        <p className="muted mt-3 text-[16px] max-w-2xl">
          {active
            ? `Working at ${grade?.name ?? ''} level.`
            : 'Add a learner to track progress — or just browse. Everything works without one.'}
        </p>
      </header>

      {/* --------------------------------------------------- continue row */}
      {recent.length > 0 && (
        <section className="mb-8">
          <h2 className="text-[13px] font-semibold uppercase tracking-wide faint mb-3">
            Pick up where you left off
          </h2>
          <div className="flex flex-col gap-2">
            {recent.map((r) => {
              const colour = SUBJECT_COLOUR[r.subjectId as SubjectId]
              return (
                <Link
                  key={r.id}
                  to={`/c/${r.gradeId}/${r.subjectId}/${r.lessonId}`}
                  className="surface p-3.5 flex items-center gap-3 hover:shadow-md transition-shadow focus-ring"
                >
                  <span
                    className="w-1.5 h-9 rounded-full shrink-0"
                    style={{ background: colour }}
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[14px] font-medium truncate">{r.lessonTitle}</span>
                    <span className="block text-[12px] faint truncate">
                      {GRADE_BY_ID[r.gradeId as GradeId]?.name} ·{' '}
                      {SUBJECTS.find((s) => s.id === r.subjectId)?.name}
                    </span>
                  </span>
                  {r.status === 'done' ? (
                    <Badge tone="success">done</Badge>
                  ) : r.status === 'in-progress' ? (
                    <Badge tone="warn">in progress</Badge>
                  ) : (
                    <Badge>planned</Badge>
                  )}
                  <IconChevron size={15} className="faint shrink-0" />
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* --------------------------------------------------------- subjects */}
      {active && grade && (
        <section className="mb-8">
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="text-[13px] font-semibold uppercase tracking-wide faint">
              {grade.name} subjects
            </h2>
            <Link to="/browse" className="text-[12.5px] muted hover:text-[var(--text)]">
              All grades →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {SUBJECTS.map((s) => (
              <SubjectTile
                key={s.id}
                subject={s}
                gradeId={active.gradeId as GradeId}
                available={AVAILABLE_COURSES.has(`${active.gradeId}:${s.id}`)}
              />
            ))}
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------ stats */}
      {active && (
        <section className="grid grid-cols-3 gap-3 mb-8">
          <StatCard label="lessons done" value={counts.done} />
          <StatCard label="in progress" value={counts.inProgress} />
          <StatCard label="secure" value={counts.secure} />
        </section>
      )}

      {/* ------------------------------------------------------- empty state */}
      {!active && (
        <section className="surface p-7 text-center">
          <div className="mx-auto w-11 h-11 rounded-xl bg-blue-500/12 text-blue-600 dark:text-blue-400 grid place-items-center mb-3">
            <IconSparkle size={20} />
          </div>
          <h2 className="font-semibold text-[17px] mb-1.5">Start anywhere</h2>
          <p className="text-[14px] muted max-w-md mx-auto leading-relaxed mb-5">
            Every lesson has a full spoken script, a printable worksheet, and a separate,
            fully-specified prompt for each illustration on the page.
          </p>
          <Link to="/browse">
            <Button variant="primary" size="lg" icon={<IconGrid size={16} />}>
              Browse the curriculum
            </Button>
          </Link>
        </section>
      )}

      {/* --------------------------------------------------------- how-to */}
      <section className="surface p-5">
        <h2 className="font-semibold text-[15px] mb-3">How a lesson works</h2>
        <ol className="grid sm:grid-cols-3 gap-4">
          {[
            {
              n: 1,
              title: 'Read the plan',
              body: 'Objectives, materials, the misconceptions to watch for, and what to do when it goes sideways.',
            },
            {
              n: 2,
              title: 'Generate the worksheet art',
              body: 'Each picture has its own dedicated prompt, written for the model you actually use. Copy one, or all of them at once.',
            },
            {
              n: 3,
              title: 'Teach it',
              body: 'Teach Mode gives you one beat at a time in large type, with the lines to say and a timer.',
            },
          ].map((s) => (
            <li key={s.n}>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[var(--surface-3)] text-[12px] font-bold mb-2">
                {s.n}
              </span>
              <p className="text-[13.5px] font-semibold">{s.title}</p>
              <p className="text-[12.5px] muted leading-relaxed mt-0.5">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-4 pt-4 border-t flex flex-wrap gap-2">
          <Link to="/browse">
            <Button size="sm" icon={<IconGrid size={14} />}>
              Curriculum
            </Button>
          </Link>
          <Link to="/planner">
            <Button size="sm" icon={<IconPlay size={13} />}>
              Plan a week
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="surface p-4">
      <p className="text-[26px] font-semibold tabular-nums leading-none">{value}</p>
      <p className="text-[12px] faint mt-1.5">{label}</p>
    </div>
  )
}
