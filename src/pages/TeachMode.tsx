import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import clsx from 'clsx'
import { useLesson } from '../lib/useCourse'
import { SUBJECT_BY_ID } from '../curriculum/taxonomy'
import { Button, EmptyState, Spinner, SUBJECT_COLOUR } from '../ui/primitives'
import { Confetti } from '../ui/Confetti'
import { IconCheck, IconClose, IconLightbulb, IconStar, IconTarget } from '../ui/icons'
import { useBlobUrl } from '../lib/useBlobUrl'
import { nextTeachable } from '../lib/progress'
import { imagesForLesson, type SavedImage } from '../lib/db'
import { useLearners, usePrefs } from '../lib/store'
import type { BeatPhase, SubjectId } from '../curriculum/types'

const PHASE_LABEL: Record<BeatPhase, string> = {
  hook: 'Hook',
  teach: 'Teach',
  guided: 'Guided practice',
  practice: 'Independent practice',
  close: 'Close',
}

/**
 * Full-screen presenter. Designed to be read from arm's length across a
 * kitchen table, one beat at a time, with the elapsed timer visible but not
 * shouty. Space and the arrow keys drive it so you never have to look at the
 * screen to move on.
 */
export default function TeachMode() {
  const { gradeId, subjectId, lessonId } = useParams()
  const navigate = useNavigate()
  const { lesson, loading, missing } = useLesson(gradeId, subjectId, lessonId)

  const activeLearnerId = usePrefs((s) => s.activeLearnerId)
  const setLessonStatus = useLearners((s) => s.setLessonStatus)

  const [step, setStep] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [running, setRunning] = useState(true)
  const [celebrating, setCelebrating] = useState(false)
  const startedRef = useRef(false)

  const beats = useMemo(() => lesson?.script ?? [], [lesson])
  const lessonRef = useRef(lesson)
  lessonRef.current = lesson

  useEffect(() => {
    if (!running) return
    const t = setInterval(() => setElapsed((e) => e + 1), 1000)
    return () => clearInterval(t)
  }, [running])

  // Mark the lesson in-progress the first time the presenter is opened —
  // unless it is already finished, because re-teaching something you have
  // done should not quietly take the tick back off the trail.
  useEffect(() => {
    const l = lessonRef.current
    if (!l || !activeLearnerId || startedRef.current) return
    startedRef.current = true
    if (useLearners.getState().records[l.id]?.status === 'done') return
    void setLessonStatus(
      {
        learnerId: activeLearnerId,
        lessonId: l.id,
        gradeId: l.gradeId,
        subjectId: l.subjectId,
        lessonTitle: l.title,
      },
      { status: 'in-progress' },
    )
  }, [activeLearnerId, setLessonStatus, lesson])

  const exit = () => navigate(`/c/${gradeId}/${subjectId}/${lessonId}`)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // The celebration has its own choices to make; letting Space fall through
      // to the beat navigation would scrub it away before it can be read.
      if (celebrating) return
      if (e.key === 'Escape') exit()
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        setStep((s) => Math.min(s + 1, beats.length))
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setStep((s) => Math.max(s - 1, 0))
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beats.length, celebrating])

  if (loading) return <Spinner label="Loading lesson…" />
  if (missing || !lesson) {
    return <EmptyState title="Lesson not found" body="Nothing to teach here." />
  }
  if (!beats.length) {
    return (
      <EmptyState
        title="No script yet"
        body="This lesson is an outline — it has objectives and materials but no beat-by-beat script."
        action={<Button onClick={exit}>Back to the lesson</Button>}
      />
    )
  }

  const subject = SUBJECT_BY_ID[subjectId as SubjectId]
  const colour = SUBJECT_COLOUR[subject.id]
  const finished = step >= beats.length
  const beat = beats[Math.min(step, beats.length - 1)]
  const targetMin = lesson.durationMin
  const mm = String(Math.floor(elapsed / 60)).padStart(2, '0')
  const ss = String(elapsed % 60).padStart(2, '0')
  const overtime = elapsed > targetMin * 60

  function finish() {
    if (activeLearnerId && lesson) {
      void setLessonStatus(
        {
          learnerId: activeLearnerId,
          lessonId: lesson.id,
          gradeId: lesson.gradeId,
          subjectId: lesson.subjectId,
          lessonTitle: lesson.title,
        },
        { status: 'done', minutesSpent: Math.round(elapsed / 60) },
      )
    }
    setRunning(false)
    setCelebrating(true)
  }

  if (celebrating) {
    // Not `useLesson`'s `next`, which happily returns an outline: the only
    // useful next step is one that has a script to teach.
    const upcoming = nextTeachable(lesson.gradeId, lesson.subjectId, lesson.id)
    return (
      <Celebration
        lessonId={lesson.id}
        lessonTitle={lesson.title}
        colour={colour}
        minutes={Math.max(1, Math.round(elapsed / 60))}
        backTo={`/c/${gradeId}/${subjectId}`}
        nextTo={upcoming ? `/c/${gradeId}/${subjectId}/${upcoming.id}` : null}
        nextTitle={upcoming?.title ?? null}
      />
    )
  }

  return (
    <div className="h-full flex flex-col bg-[var(--surface-2)] dragless">
      {/* ---------------------------------------------------------- top bar */}
      <header className="shrink-0 h-14 flex items-center gap-4 px-4 sm:px-6 border-b bg-[var(--surface)]">
        <button
          onClick={exit}
          className="p-2 rounded-lg hover:bg-[var(--surface-3)] focus-ring"
          aria-label="Exit teach mode"
        >
          <IconClose size={18} />
        </button>

        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-semibold truncate">{lesson.title}</p>
          <p className="text-[11px] faint truncate">
            {finished ? 'Wrap up' : `${PHASE_LABEL[beat.phase]} · beat ${step + 1} of ${beats.length}`}
          </p>
        </div>

        <button
          onClick={() => setRunning((r) => !r)}
          className={clsx(
            'font-mono text-[15px] tabular-nums px-2.5 py-1 rounded-lg transition-colors',
            overtime ? 'text-amber-600 dark:text-amber-400' : 'muted',
            'hover:bg-[var(--surface-3)]',
          )}
          title={running ? 'Pause the timer' : 'Resume the timer'}
        >
          {mm}:{ss}
          <span className="faint text-[11px] ml-1.5">/ {targetMin}m</span>
        </button>
      </header>

      {/* -------------------------------------------------------- progress */}
      <div className="shrink-0 h-1 bg-[var(--surface-3)]">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${(Math.min(step, beats.length) / beats.length) * 100}%`,
            background: colour,
          }}
        />
      </div>

      {/* ------------------------------------------------------------ body */}
      <div className="flex-1 overflow-y-auto scroll-thin">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
          {finished ? (
            <div className="animate-fade-up">
              <h1 className="text-3xl font-semibold tracking-tight mb-3">That is the lesson.</h1>
              <p className="text-[17px] muted leading-relaxed mb-8">
                Before you pack up, run the exit ticket — it takes a minute and tells you whether to
                move on or stay here.
              </p>

              <div className="surface p-6 mb-5">
                <p className="text-[11px] font-semibold uppercase tracking-wide faint mb-2">
                  Exit ticket
                </p>
                <p className="text-[17px] leading-relaxed font-serif">
                  {lesson.assessment.exitTicket}
                </p>
              </div>

              <div className="surface p-6 mb-8">
                <p className="text-[11px] font-semibold uppercase tracking-wide faint mb-3">
                  Success criteria
                </p>
                <ul className="flex flex-col gap-2">
                  {lesson.assessment.successCriteria.map((c, i) => (
                    <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
                      <span className="faint shrink-0">□</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="lg" onClick={finish} icon={<IconCheck size={16} />}>
                  Mark done &amp; exit
                </Button>
                <Button size="lg" onClick={() => setStep(beats.length - 1)}>
                  Back to last beat
                </Button>
              </div>
            </div>
          ) : (
            <div key={beat.id} className="animate-fade-up">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className="text-[11px] font-bold uppercase tracking-wide px-2 py-1 rounded"
                  style={{
                    background: `color-mix(in srgb, ${colour} 16%, transparent)`,
                    color: colour,
                  }}
                >
                  {PHASE_LABEL[beat.phase]}
                </span>
                <span className="text-[13px] faint">about {beat.minutes} minutes</span>
              </div>

              <h1 className="text-[30px] sm:text-[34px] font-semibold tracking-tight leading-tight mb-7">
                {beat.title}
              </h1>

              <div className="flex flex-col gap-4 mb-8">
                {beat.say.map((line, i) => (
                  <p
                    key={i}
                    className="text-[20px] sm:text-[23px] leading-[1.5] font-serif pl-5 border-l-[3px]"
                    style={{ borderColor: colour }}
                  >
                    “{line}”
                  </p>
                ))}
              </div>

              {beat.do && beat.do.length > 0 && (
                <TeachList label="Do" items={beat.do} />
              )}
              {beat.studentDoes && beat.studentDoes.length > 0 && (
                <TeachList label="Learner is doing" items={beat.studentDoes} />
              )}

              {beat.checks && beat.checks.length > 0 && (
                <div className="surface p-5 mb-5">
                  <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide faint mb-3">
                    <IconTarget size={14} />
                    Check for understanding
                  </p>
                  <div className="flex flex-col gap-4">
                    {beat.checks.map((c, i) => (
                      <div key={i}>
                        <p className="text-[17px] font-medium leading-snug">{c.ask}</p>
                        <p className="text-[14.5px] muted mt-1.5 leading-relaxed">
                          <span className="faint">Look for: </span>
                          {c.lookFor}
                        </p>
                        {c.ifStuck && (
                          <p className="text-[14.5px] muted mt-1 leading-relaxed">
                            <span className="faint">If stuck: </span>
                            {c.ifStuck}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {beat.tip && (
                <p className="flex gap-3 text-[14.5px] leading-relaxed muted rounded-lg bg-amber-500/8 border border-amber-500/25 p-4">
                  <IconLightbulb size={17} className="shrink-0 mt-0.5 text-amber-500" />
                  {beat.tip}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ------------------------------------------------------- bottom bar */}
      <footer className="shrink-0 border-t bg-[var(--surface)] px-4 sm:px-6 py-3 flex items-center gap-3">
        <Button onClick={() => setStep((s) => Math.max(s - 1, 0))} disabled={step === 0}>
          Back
        </Button>

        <div className="flex-1 flex justify-center gap-1.5">
          {beats.map((b, i) => (
            <button
              key={b.id}
              onClick={() => setStep(i)}
              aria-label={`Go to ${b.title}`}
              title={b.title}
              className="h-2 rounded-full transition-all"
              style={{
                width: i === step ? 26 : 10,
                background: i <= step ? colour : 'var(--border-strong)',
              }}
            />
          ))}
        </div>

        {finished ? (
          <Button variant="primary" onClick={finish} icon={<IconCheck size={15} />}>
            Finish
          </Button>
        ) : (
          <Button variant="primary" onClick={() => setStep((s) => s + 1)}>
            {step === beats.length - 1 ? 'Wrap up' : 'Next'}
          </Button>
        )}
      </footer>
    </div>
  )
}

/* ------------------------------------------------------------ celebration */

/**
 * The payoff. Finishing a lesson used to drop you back on the plan you had
 * just taught, with nothing to show for it — so this closes the loop: the
 * worksheet art you generated for this lesson comes back as the sticker you
 * earned, and it stays in the workbook.
 */
function Celebration({
  lessonId,
  lessonTitle,
  colour,
  minutes,
  backTo,
  nextTo,
  nextTitle,
}: {
  lessonId: string
  lessonTitle: string
  colour: string
  minutes: number
  backTo: string
  nextTo: string | null
  nextTitle: string | null
}) {
  const [sticker, setSticker] = useState<SavedImage | null>(null)
  const url = useBlobUrl(sticker?.image)

  useEffect(() => {
    let cancelled = false
    void imagesForLesson(lessonId).then((images) => {
      if (cancelled || !images.length) return
      // Oldest first, so the sticker for a lesson is stable rather than
      // changing every time another image is generated for it.
      setSticker([...images].sort((a, b) => a.createdAt - b.createdAt)[0])
    })
    return () => {
      cancelled = true
    }
  }, [lessonId])

  return (
    <div className="h-full overflow-y-auto scroll-thin bg-[var(--surface-2)] dragless">
      <Confetti />

      <div className="max-w-lg mx-auto px-6 py-14 text-center animate-fade-up">
        <span
          className="mx-auto mb-6 w-20 h-20 rounded-full grid place-items-center text-white"
          style={{ background: colour, boxShadow: `0 16px 40px -12px ${colour}` }}
        >
          <IconCheck size={40} strokeWidth={2.5} />
        </span>

        <h1 className="text-[34px] font-semibold tracking-[-0.03em] leading-tight mb-2">
          Lesson complete!
        </h1>
        <p className="text-[15px] muted mb-8">
          {lessonTitle} · {minutes} minute{minutes === 1 ? '' : 's'}
        </p>

        {url ? (
          <figure className="mb-8">
            <div
              className="rounded-2xl overflow-hidden bg-white p-3 mx-auto max-w-xs"
              style={{ boxShadow: `0 18px 44px -20px ${colour}` }}
            >
              <img src={url} alt={`Sticker earned for ${lessonTitle}`} className="w-full rounded-lg" />
            </div>
            <figcaption className="flex items-center justify-center gap-1.5 text-[12.5px] faint mt-3">
              <IconStar size={13} style={{ color: colour }} />
              Sticker earned — it is in the workbook
            </figcaption>
          </figure>
        ) : (
          <p className="text-[13px] faint mb-8 leading-relaxed max-w-xs mx-auto">
            Generate this lesson's worksheet art and it becomes a sticker in the workbook.
          </p>
        )}

        <div className="flex flex-col gap-2.5">
          {nextTo && (
            <Link to={nextTo}>
              <Button
                size="lg"
                className="w-full text-white border-0 shadow-md"
                style={{ background: colour }}
              >
                Next: {nextTitle}
              </Button>
            </Link>
          )}
          <Link to={backTo}>
            <Button size="lg" className="w-full">
              Back to the trail
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function TeachList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="mb-5">
      <p className="text-[11px] font-semibold uppercase tracking-wide faint mb-2">{label}</p>
      <ul className="flex flex-col gap-2">
        {items.map((t, i) => (
          <li key={i} className="flex gap-3 text-[15.5px] leading-relaxed">
            <span className="faint shrink-0">·</span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}
