import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { GRADES, GRADE_BANDS, SUBJECTS } from '../curriculum/taxonomy'
import { AVAILABLE_COURSES } from '../curriculum/registry'
import { SUBJECT_ICONS } from '../ui/icons'
import { Badge, Segmented, SUBJECT_COLOUR } from '../ui/primitives'
import type { GradeBand } from '../curriculum/types'

/**
 * The curriculum matrix: every grade against every subject. This is the
 * primary way through the app — pick where your child is, pick a subject, go.
 */
export default function Browse() {
  const [band, setBand] = useState<GradeBand | 'all'>('all')

  const grades = useMemo(
    () => (band === 'all' ? GRADES : GRADES.filter((g) => g.band === band)),
    [band],
  )

  return (
    <div className="max-w-6xl mx-auto px-5 py-7 lg:py-9">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Curriculum</h1>
        <p className="muted mt-1 text-[15px] max-w-2xl leading-relaxed">
          Every grade, every core subject. Pick a course to see its units, then open any lesson for
          the full script and its worksheet.
        </p>
      </header>

      <div className="mb-6">
        <Segmented
          value={band}
          onChange={setBand}
          options={[
            { value: 'all' as const, label: 'All grades' },
            ...GRADE_BANDS.map((b) => ({ value: b.id, label: b.name, title: b.blurb })),
          ]}
        />
      </div>

      <div className="flex flex-col gap-3">
        {grades.map((grade) => (
          <div key={grade.id} className="surface p-4 sm:p-5">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3.5">
              <h2 className="font-semibold text-[16px]">{grade.name}</h2>
              <span className="text-[12px] faint">ages {grade.ages}</span>
              <p className="text-[13px] muted w-full sm:w-auto sm:flex-1 sm:min-w-[16rem] leading-snug">
                {grade.focus}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
              {SUBJECTS.map((subject) => {
                const available = AVAILABLE_COURSES.has(`${grade.id}:${subject.id}`)
                const Icon = SUBJECT_ICONS[subject.icon as keyof typeof SUBJECT_ICONS]
                const colour = SUBJECT_COLOUR[subject.id]

                if (!available) {
                  return (
                    <div
                      key={subject.id}
                      className="rounded-lg border border-dashed p-3 opacity-45 select-none"
                      title="Not authored yet"
                    >
                      <div className="flex items-center gap-2 faint">
                        <Icon size={16} />
                        <span className="text-[13px] font-medium">{subject.short}</span>
                      </div>
                      <p className="text-[11px] faint mt-1.5">Coming soon</p>
                    </div>
                  )
                }

                return (
                  <Link
                    key={subject.id}
                    to={`/c/${grade.id}/${subject.id}`}
                    className={clsx(
                      'group rounded-lg border p-3 transition-all hover:shadow-md focus-ring',
                      'hover:-translate-y-0.5',
                    )}
                    style={{ borderColor: `color-mix(in srgb, ${colour} 26%, transparent)` }}
                  >
                    <div className="flex items-center gap-2" style={{ color: colour }}>
                      <Icon size={16} />
                      <span className="text-[13px] font-semibold text-[var(--text)]">
                        {subject.short}
                      </span>
                    </div>
                    <p className="text-[11.5px] muted mt-1.5 line-clamp-2 leading-snug">
                      {subject.blurb}
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 surface p-4 flex items-start gap-3">
        <Badge tone="accent">Note</Badge>
        <p className="text-[13px] muted leading-relaxed">
          Courses marked <em>Coming soon</em> have not been authored yet. Everything else has real
          unit structure and at least one fully scripted lesson with its own worksheet image
          prompts.
        </p>
      </div>
    </div>
  )
}
