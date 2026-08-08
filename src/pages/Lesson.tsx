import { Link, useParams } from 'react-router-dom'
import clsx from 'clsx'
import { useLesson } from '../lib/useCourse'
import { GRADE_BY_ID, SUBJECT_BY_ID } from '../curriculum/taxonomy'
import { Badge, Button, EmptyState, Section, Spinner, SUBJECT_COLOUR } from '../ui/primitives'
import {
  IconAlert,
  IconArrowLeft,
  IconChevron,
  IconClock,
  IconImage,
  IconLightbulb,
  IconPlay,
  IconPrint,
  IconTarget,
  IconUsers,
} from '../ui/icons'
import { MASTERY_LABEL, useLearners, usePrefs } from '../lib/store'
import { GenerateAllButton, useMissingCount } from '../ui/GenerateRun'
import type { BeatPhase, GradeId, Lesson, SubjectId } from '../curriculum/types'
import { useMemo, useState } from 'react'

const PHASE_LABEL: Record<BeatPhase, string> = {
  hook: 'Hook',
  teach: 'Teach',
  guided: 'Guided practice',
  practice: 'Independent practice',
  close: 'Close',
}

export default function LessonPage() {
  const { gradeId, subjectId, lessonId } = useParams()
  const { lesson, unit, loading, missing, prev, next } = useLesson(gradeId, subjectId, lessonId)

  const activeLearnerId = usePrefs((s) => s.activeLearnerId)
  const { records, setLessonStatus } = useLearners()
  const [notesDraft, setNotesDraft] = useState<string | null>(null)

  // Hooks must run unconditionally, so the list is empty until the lesson loads.
  const scope = useMemo(() => (lesson ? [lesson] : []), [lesson])
  const missingImages = useMissingCount(scope)

  if (loading) return <Spinner label="Loading lesson…" />
  if (missing || !lesson || !unit) {
    return <EmptyState title="Lesson not found" body="This lesson does not exist in that course." />
  }

  const grade = GRADE_BY_ID[gradeId as GradeId]
  const subject = SUBJECT_BY_ID[subjectId as SubjectId]
  const colour = SUBJECT_COLOUR[subject.id]
  const record = records[lesson.id]
  const imageCount = lesson.worksheet.sections.reduce((n, s) => n + (s.images?.length ?? 0), 0)
  const base = `/c/${gradeId}/${subjectId}`

  const mark = (patch: Parameters<typeof setLessonStatus>[1]) => {
    if (!activeLearnerId) return
    void setLessonStatus(
      {
        learnerId: activeLearnerId,
        lessonId: lesson.id,
        gradeId: lesson.gradeId,
        subjectId: lesson.subjectId,
        lessonTitle: lesson.title,
      },
      patch,
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-5 py-7 lg:py-9 print-root">
      <Link
        to={base}
        className="inline-flex items-center gap-1.5 text-[13px] muted hover:text-[var(--text)] mb-5 focus-ring rounded no-print"
      >
        <IconArrowLeft size={14} />
        {grade.short} {subject.short} · {unit.title}
      </Link>

      {/* -------------------------------------------------------- header */}
      <header className="mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2.5">
          <span
            className="text-[11px] font-bold px-1.5 py-0.5 rounded"
            style={{ background: `color-mix(in srgb, ${colour} 16%, transparent)`, color: colour }}
          >
            LESSON {lesson.sequence}
          </span>
          <span className="inline-flex items-center gap-1 text-[12px] faint">
            <IconClock size={13} /> {lesson.durationMin} min
          </span>
          {imageCount > 0 && (
            <span className="inline-flex items-center gap-1 text-[12px] faint">
              <IconImage size={13} /> {imageCount} images
            </span>
          )}
          {lesson.status === 'outline' && <Badge>outline</Badge>}
        </div>

        <h1 className="text-[26px] font-semibold tracking-tight leading-tight">{lesson.title}</h1>
        <p className="mt-2.5 text-[16px] font-serif italic" style={{ color: colour }}>
          {lesson.essentialQuestion}
        </p>
        <p className="mt-3 text-[15px] muted leading-relaxed">{lesson.summary}</p>

        <div className="flex flex-wrap gap-2 mt-5 no-print">
          {lesson.status === 'authored' && (
            <Link to={`${base}/${lesson.id}/teach`}>
              <Button variant="primary" icon={<IconPlay size={14} />}>
                Start teaching
              </Button>
            </Link>
          )}
          {imageCount > 0 && (
            <Link to={`${base}/${lesson.id}/worksheet`}>
              <Button icon={<IconImage size={15} />}>
                Worksheet &amp; {imageCount} image prompts
              </Button>
            </Link>
          )}
          {missingImages != null && missingImages > 0 && (
            <GenerateAllButton
              collect={async () => [lesson]}
              scope="this lesson"
              variant="secondary"
              label={`Generate ${missingImages} image${missingImages === 1 ? '' : 's'}`}
            />
          )}
          {imageCount > 0 && missingImages === 0 && (
            <Badge tone="success">all {imageCount} images ready</Badge>
          )}
          <Button icon={<IconPrint size={15} />} onClick={() => window.print()}>
            Print plan
          </Button>
        </div>
      </header>

      {/* ------------------------------------------------------- progress */}
      {activeLearnerId && (
        <div className="surface p-4 mb-6 flex flex-wrap items-center gap-3">
          <span className="text-[13px] font-medium">Progress</span>
          <div className="flex gap-1.5">
            {(['planned', 'in-progress', 'done'] as const).map((s) => (
              <button
                key={s}
                onClick={() => mark({ status: s })}
                className={clsx(
                  'px-2.5 py-1 rounded-md text-[12px] font-medium border transition-colors',
                  record?.status === s
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'hover:bg-[var(--surface-3)]',
                )}
              >
                {s === 'in-progress' ? 'In progress' : s === 'done' ? 'Done' : 'Planned'}
              </button>
            ))}
          </div>

          <span className="w-px h-5 bg-[var(--border)]" />

          <span className="text-[13px] font-medium">Mastery</span>
          <div className="flex gap-1.5">
            {(['emerging', 'developing', 'secure'] as const).map((m) => (
              <button
                key={m}
                onClick={() => mark({ mastery: m })}
                className={clsx(
                  'px-2.5 py-1 rounded-md text-[12px] font-medium border transition-colors',
                  record?.mastery === m
                    ? m === 'secure'
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : m === 'developing'
                        ? 'bg-amber-500 text-white border-amber-500'
                        : 'bg-rose-500 text-white border-rose-500'
                    : 'hover:bg-[var(--surface-3)]',
                )}
              >
                {MASTERY_LABEL[m]}
              </button>
            ))}
          </div>

          <textarea
            value={notesDraft ?? record?.notes ?? ''}
            onChange={(e) => setNotesDraft(e.target.value)}
            onBlur={() => {
              if (notesDraft !== null && notesDraft !== (record?.notes ?? '')) {
                mark({ notes: notesDraft })
              }
              setNotesDraft(null)
            }}
            rows={1}
            placeholder="How did it go? (saved on this device)"
            className="w-full mt-1 px-3 py-2 rounded-lg border bg-[var(--surface-2)] text-[13px] outline-none focus:border-blue-500 resize-y min-h-[38px]"
          />
        </div>
      )}

      {lesson.status === 'outline' && (
        <div className="surface p-4 mb-6 flex items-start gap-3 border-amber-500/40">
          <IconAlert size={17} className="text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[13.5px] leading-relaxed">
            This lesson is an <strong>outline</strong>. The objectives, materials and assessment
            below are complete and usable, but the beat-by-beat script and the worksheet have not
            been written yet.
          </p>
        </div>
      )}

      <div className="flex flex-col gap-5">
        {/* ---------------------------------------------------- objectives */}
        <Section title="Objectives" icon={<IconTarget size={16} style={{ color: colour }} />}>
          <ul className="flex flex-col gap-1.5">
            {lesson.objectives.map((o, i) => (
              <li key={i} className="flex gap-2.5 text-[14px] leading-relaxed">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: colour }} />
                {o}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t">
            {lesson.standards.map((s) => (
              <span
                key={s.code}
                title={s.text}
                className="text-[10.5px] font-mono px-1.5 py-1 rounded bg-[var(--surface-3)] muted cursor-help"
              >
                {s.code}
              </span>
            ))}
          </div>
        </Section>

        {/* --------------------------------------------- materials and prep */}
        <div className="grid md:grid-cols-2 gap-5">
          <Section title="You will need">
            <ul className="flex flex-col gap-1.5">
              {lesson.materials.map((m, i) => (
                <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed">
                  <span className="faint shrink-0">□</span>
                  {m}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Before you start">
            <ol className="flex flex-col gap-1.5">
              {lesson.prep.map((p, i) => (
                <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed">
                  <span className="faint shrink-0 tabular-nums">{i + 1}.</span>
                  {p}
                </li>
              ))}
            </ol>
          </Section>
        </div>

        {/* ---------------------------------------------------- vocabulary */}
        {lesson.vocabulary.length > 0 && (
          <Section title="Vocabulary" hint="Words to use out loud, repeatedly, on purpose.">
            <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {lesson.vocabulary.map((v) => (
                <div key={v.term}>
                  <dt className="text-[13.5px] font-semibold">{v.term}</dt>
                  <dd className="text-[13px] muted leading-relaxed">
                    {v.definition}
                    {v.example && (
                      <span className="block italic mt-0.5 faint">“{v.example}”</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Section>
        )}

        {/* -------------------------------------------------------- script */}
        {lesson.script.length > 0 && (
          <section className="surface overflow-hidden">
            <div className="p-5 pb-3 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-[15px]">The lesson, beat by beat</h3>
                <p className="text-[13px] muted mt-0.5">
                  Lines in quotes are meant to be read aloud as written.
                </p>
              </div>
              <Link to={`${base}/${lesson.id}/teach`} className="shrink-0">
                <Button size="sm" icon={<IconPlay size={13} />}>
                  Teach mode
                </Button>
              </Link>
            </div>

            <div className="divide-y border-t">
              {lesson.script.map((beat) => (
                <article key={beat.id} className="p-5 avoid-break">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className="text-[10.5px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded"
                      style={{
                        background: `color-mix(in srgb, ${colour} 16%, transparent)`,
                        color: colour,
                      }}
                    >
                      {PHASE_LABEL[beat.phase]}
                    </span>
                    <h4 className="font-semibold text-[15px]">{beat.title}</h4>
                    <span className="text-[12px] faint ml-auto tabular-nums">{beat.minutes} min</span>
                  </div>

                  <div className="flex flex-col gap-2 mb-3">
                    {beat.say.map((line, i) => (
                      <p
                        key={i}
                        className="text-[15px] leading-relaxed pl-3.5 border-l-2 font-serif"
                        style={{ borderColor: colour }}
                      >
                        “{line}”
                      </p>
                    ))}
                  </div>

                  {beat.do && beat.do.length > 0 && (
                    <SubList label="Do" items={beat.do} />
                  )}
                  {beat.studentDoes && beat.studentDoes.length > 0 && (
                    <SubList label="Learner" items={beat.studentDoes} />
                  )}

                  {beat.checks && beat.checks.length > 0 && (
                    <div className="mt-3 rounded-lg bg-[var(--surface-2)] border p-3.5">
                      <p className="text-[11px] font-semibold uppercase tracking-wide faint mb-2">
                        Check for understanding
                      </p>
                      <div className="flex flex-col gap-3">
                        {beat.checks.map((c, i) => (
                          <div key={i} className="text-[13.5px] leading-relaxed">
                            <p className="font-medium">{c.ask}</p>
                            <p className="muted mt-0.5">
                              <span className="faint">Look for: </span>
                              {c.lookFor}
                            </p>
                            {c.ifStuck && (
                              <p className="muted mt-0.5">
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
                    <p className="mt-3 flex gap-2 text-[13px] leading-relaxed muted">
                      <IconLightbulb size={15} className="shrink-0 mt-0.5 text-amber-500" />
                      {beat.tip}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* --------------------------------------------------- assessment */}
        <Section title="Did it land?" hint="What success looks like, and how to check quickly.">
          <p className="text-[12px] font-semibold uppercase tracking-wide faint mb-2">
            Success criteria
          </p>
          <ul className="flex flex-col gap-1.5 mb-4">
            {lesson.assessment.successCriteria.map((c, i) => (
              <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed">
                <span className="faint shrink-0">□</span>
                {c}
              </li>
            ))}
          </ul>

          <div className="rounded-lg bg-[var(--surface-2)] border p-3.5 mb-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide faint mb-1">
              Exit ticket
            </p>
            <p className="text-[13.5px] leading-relaxed">{lesson.assessment.exitTicket}</p>
          </div>

          {lesson.assessment.rubric && (
            <div className="grid sm:grid-cols-3 gap-3">
              {lesson.assessment.rubric.map((r) => (
                <div key={r.level} className="rounded-lg border p-3">
                  <p
                    className={clsx(
                      'text-[11px] font-bold uppercase tracking-wide mb-1',
                      r.level === 'secure'
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : r.level === 'developing'
                          ? 'text-amber-600 dark:text-amber-400'
                          : 'text-rose-600 dark:text-rose-400',
                    )}
                  >
                    {MASTERY_LABEL[r.level]}
                  </p>
                  <p className="text-[12.5px] muted leading-relaxed">{r.descriptor}</p>
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* ------------------------------------------------ misconceptions */}
        {lesson.misconceptions.length > 0 && (
          <Section
            title="What usually goes wrong"
            icon={<IconAlert size={16} className="text-amber-500" />}
            hint="Recognise these early and you save a week."
          >
            <div className="flex flex-col gap-4">
              {lesson.misconceptions.map((m, i) => (
                <div key={i} className="text-[13.5px] leading-relaxed">
                  <p className="font-semibold">{m.misconception}</p>
                  <p className="muted mt-1">
                    <span className="faint">Looks like: </span>
                    {m.looksLike}
                  </p>
                  <p className="mt-1">
                    <span className="faint">Fix: </span>
                    {m.correction}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* ------------------------------------------------ differentiation */}
        <Section title="Adjusting the lesson" icon={<IconUsers size={16} style={{ color: colour }} />}>
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
            <DiffList title="If it is too hard" items={lesson.differentiation.support} />
            <DiffList title="If it is too easy" items={lesson.differentiation.extension} />
            {lesson.differentiation.language && (
              <DiffList
                title="Language support"
                items={lesson.differentiation.language}
                className="md:col-span-2"
              />
            )}
          </div>
        </Section>

        {/* ------------------------------------------------ home extension */}
        <Section title="Keep it going at home" hint="No printing, no setup — just life.">
          <ul className="flex flex-col gap-1.5">
            {lesson.homeExtension.map((h, i) => (
              <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed">
                <span className="faint shrink-0">→</span>
                {h}
              </li>
            ))}
          </ul>
        </Section>

        {lesson.teacherNotes && (
          <div className="surface p-5 border-l-4" style={{ borderLeftColor: colour }}>
            <p className="text-[11px] font-semibold uppercase tracking-wide faint mb-1.5">
              A note from the author
            </p>
            <p className="text-[14px] leading-relaxed">{lesson.teacherNotes}</p>
          </div>
        )}
      </div>

      <LessonNav base={base} prev={prev} next={next} />
    </div>
  )
}

function SubList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="mt-2.5">
      <p className="text-[11px] font-semibold uppercase tracking-wide faint mb-1">{label}</p>
      <ul className="flex flex-col gap-1">
        {items.map((t, i) => (
          <li key={i} className="flex gap-2 text-[13.5px] leading-relaxed muted">
            <span className="faint shrink-0">·</span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}

function DiffList({
  title,
  items,
  className,
}: {
  title: string
  items: string[]
  className?: string
}) {
  return (
    <div className={className}>
      <p className="text-[12px] font-semibold uppercase tracking-wide faint mb-1.5">{title}</p>
      <ul className="flex flex-col gap-1.5">
        {items.map((t, i) => (
          <li key={i} className="flex gap-2 text-[13.5px] leading-relaxed">
            <span className="faint shrink-0">·</span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}

function LessonNav({
  base,
  prev,
  next,
}: {
  base: string
  prev: Lesson | null
  next: Lesson | null
}) {
  if (!prev && !next) return null

  return (
    <nav className="grid sm:grid-cols-2 gap-3 mt-7 no-print">
      {prev ? (
        <Link
          to={`${base}/${prev.id}`}
          className="surface p-4 hover:shadow-md transition-shadow group focus-ring"
        >
          <span className="flex items-center gap-1.5 text-[11px] faint uppercase tracking-wide mb-1">
            <IconArrowLeft size={12} /> Previous
          </span>
          <span className="text-[14px] font-medium line-clamp-1">{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          to={`${base}/${next.id}`}
          className="surface p-4 hover:shadow-md transition-shadow text-right focus-ring"
        >
          <span className="flex items-center justify-end gap-1.5 text-[11px] faint uppercase tracking-wide mb-1">
            Next <IconChevron size={12} />
          </span>
          <span className="text-[14px] font-medium line-clamp-1">{next.title}</span>
        </Link>
      )}
    </nav>
  )
}
