import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { GRADE_BY_ID, SUBJECT_BY_ID, SUBJECTS } from '../curriculum/taxonomy'
import { useLearners, usePrefs } from '../lib/store'
import { gradeProgress, streak, suggestedNext } from '../lib/progress'
import { scheduleWarm } from '../lib/search'
import { Button, SUBJECT_COLOUR } from '../ui/primitives'
import { SubjectBubble } from '../ui/SubjectBubble'
import { IconChevron, IconFlame, IconGrid, IconPlay, IconSparkle, IconStar } from '../ui/icons'
import type { GradeId, SubjectId } from '../curriculum/types'

function greeting() {
  const h = new Date().getHours()
  if (h < 5) return 'Still up'
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

/**
 * The learner's own screen.
 *
 * One question gets answered above the fold — what are we doing right now —
 * and the four subjects sit underneath as targets rather than as a table of
 * contents. Everything an adult needs to prepare lives one tap further in.
 */
export default function Home() {
  const { learners, records } = useLearners()
  const { activeLearnerId, seenIntro, setSeenIntro } = usePrefs()
  const active = learners.find((l) => l.id === activeLearnerId)

  useEffect(() => scheduleWarm(), [])

  const gradeId = active?.gradeId as GradeId | undefined
  const grade = gradeId ? GRADE_BY_ID[gradeId] : null

  const subjects = useMemo(
    () => (gradeId ? gradeProgress(gradeId, records) : []),
    [gradeId, records],
  )
  const today = useMemo(
    () => (gradeId ? suggestedNext(gradeId, records) : null),
    [gradeId, records],
  )
  const run = useMemo(() => streak(records), [records])

  if (!active) return <Welcome />

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-8 pb-20 lg:pt-12">
      {/* ---------------------------------------------------------- greeting */}
      <header className="flex items-center gap-3.5 mb-8">
        <span
          className="w-14 h-14 rounded-2xl grid place-items-center text-[30px] shrink-0"
          style={{ background: `color-mix(in srgb, ${active.colour} 20%, transparent)` }}
        >
          {active.avatar}
        </span>
        <div className="min-w-0">
          <h1 className="text-[30px] sm:text-[36px] font-semibold tracking-[-0.03em] leading-none">
            Hi, {active.name}!
          </h1>
          <p className="muted text-[13.5px] mt-1.5">
            {greeting()} · {grade?.name}
          </p>
        </div>
      </header>

      {/* ------------------------------------------------------ today's lesson */}
      {today ? (
        <TodayCard
          gradeId={gradeId!}
          subjectId={today.subject.id}
          lessonId={today.progress.next!.id}
          title={today.progress.next!.title}
          unitTitle={today.progress.next!.unitTitle}
          minutes={today.progress.next!.minutes}
          resuming={today.progress.next!.status === 'in-progress'}
        />
      ) : (
        <div className="surface p-6 text-center mb-9">
          <p className="text-[15px] font-semibold mb-1">Nothing queued up yet</p>
          <p className="text-[13.5px] muted mb-4">
            No courses are written for {grade?.name} yet — pick another grade to teach from.
          </p>
          <Link to="/browse">
            <Button variant="primary" icon={<IconGrid size={15} />}>
              Browse the curriculum
            </Button>
          </Link>
        </div>
      )}

      {/* ----------------------------------------------------------- bubbles */}
      <section className="mb-9">
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {subjects.map(({ subject, progress }) => (
            <SubjectBubble
              key={subject.id}
              subject={subject}
              gradeId={gradeId!}
              progress={progress}
            />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ ribbon */}
      <Ribbon days={run.days} thisWeek={run.thisWeek} total={run.total} />

      {/* Shown once, then never again — it is onboarding, not furniture. */}
      {!seenIntro && <HowItWorks onDismiss={() => setSeenIntro(true)} />}
    </div>
  )
}

/* ------------------------------------------------------------ today's card */

function TodayCard({
  gradeId,
  subjectId,
  lessonId,
  title,
  unitTitle,
  minutes,
  resuming,
}: {
  gradeId: GradeId
  subjectId: SubjectId
  lessonId: string
  title: string
  unitTitle: string
  minutes: number
  resuming: boolean
}) {
  const colour = SUBJECT_COLOUR[subjectId]
  const base = `/c/${gradeId}/${subjectId}/${lessonId}`

  return (
    <section
      className="rounded-3xl p-6 sm:p-7 mb-9 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, color-mix(in srgb, ${colour} 20%, var(--surface)), color-mix(in srgb, ${colour} 7%, var(--surface)))`,
        boxShadow: `0 14px 34px -18px ${colour}`,
      }}
    >
      <p
        className="text-[11px] font-bold uppercase tracking-[0.1em] mb-2.5"
        style={{ color: colour }}
      >
        {resuming ? 'Carry on with' : "Today's lesson"} · {SUBJECT_BY_ID[subjectId].short}
      </p>

      <h2 className="text-[26px] sm:text-[32px] font-semibold tracking-[-0.025em] leading-[1.08]">
        {title}
      </h2>
      <p className="text-[13.5px] muted mt-2">
        {unitTitle} · about {minutes} minutes
      </p>

      <div className="flex flex-wrap gap-2.5 mt-6">
        <Link to={`${base}/teach`}>
          <Button
            size="lg"
            icon={<IconPlay size={15} />}
            className="text-white border-0 shadow-md"
            style={{ background: colour }}
          >
            {resuming ? 'Keep going' : 'Start teaching'}
          </Button>
        </Link>
        <Link to={base}>
          <Button size="lg">See the plan</Button>
        </Link>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ ribbon */

function Ribbon({ days, thisWeek, total }: { days: number; thisWeek: number; total: number }) {
  return (
    <div className="surface flex items-stretch divide-x">
      <RibbonCell
        icon={<IconFlame size={16} className="text-amber-500" />}
        value={days}
        label={days === 1 ? 'day in a row' : 'days in a row'}
      />
      <RibbonCell
        icon={<IconStar size={16} className="text-violet-500" />}
        value={thisWeek}
        label="this week"
      />
      <RibbonCell
        icon={<IconSparkle size={16} className="text-emerald-500" />}
        value={total}
        label="lessons finished"
      />
    </div>
  )
}

function RibbonCell({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: number
  label: string
}) {
  return (
    <div className="flex-1 px-3 py-3.5 flex flex-col items-center gap-1 text-center">
      <span className="flex items-center gap-1.5">
        {icon}
        <span className="text-[20px] font-semibold tabular-nums leading-none">{value}</span>
      </span>
      <span className="text-[11.5px] faint leading-tight">{label}</span>
    </div>
  )
}

/* ---------------------------------------------------------------- one-offs */

function HowItWorks({ onDismiss }: { onDismiss: () => void }) {
  return (
    <section className="surface p-5 mt-6">
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
            body: 'Each picture has its own dedicated prompt, written for the model you actually use.',
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
      <div className="mt-4 pt-4 border-t">
        <Button size="sm" onClick={onDismiss}>
          Got it
        </Button>
      </div>
    </section>
  )
}

function Welcome() {
  return (
    <div className="max-w-xl mx-auto px-5 pt-16 pb-20 text-center">
      <div className="flex justify-center gap-3 mb-7">
        {SUBJECTS.map((s, i) => (
          <span
            key={s.id}
            className="w-12 h-12 rounded-full animate-fade-up"
            style={{
              background: `color-mix(in srgb, ${SUBJECT_COLOUR[s.id]} 28%, var(--surface))`,
              animationDelay: `${i * 0.07}s`,
            }}
          />
        ))}
      </div>

      <h1 className="text-[34px] font-semibold tracking-[-0.03em] leading-tight mb-3">
        Every lesson, ready to teach.
      </h1>
      <p className="text-[15px] muted leading-relaxed mb-7">
        Full spoken scripts, printable worksheets, and a separate prompt for every illustration.
        Add whoever you are teaching and Skool keeps the trail for them — or just browse, it all
        works without one.
      </p>

      <div className="flex flex-wrap justify-center gap-2.5">
        <Link to="/browse">
          <Button variant="primary" size="lg" icon={<IconGrid size={16} />}>
            Browse the curriculum
          </Button>
        </Link>
      </div>

      <p className="text-[12.5px] faint mt-6 flex items-center justify-center gap-1.5">
        Add a learner from the bottom of the sidebar
        <IconChevron size={13} className="rotate-90" />
      </p>
    </div>
  )
}
