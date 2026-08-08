import { useMemo, useState } from 'react'
import { GRADES, GRADE_BANDS, SUBJECTS } from '../curriculum/taxonomy'
import { AVAILABLE_COURSES } from '../curriculum/registry'
import { Segmented } from '../ui/primitives'
import { SubjectTile } from '../ui/SubjectTile'
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
    <div className="max-w-5xl mx-auto px-5 sm:px-8 pb-24">
      <header className="pt-10 pb-6 lg:pt-14">
        <h1 className="text-[40px] lg:text-[52px] font-semibold tracking-[-0.03em] leading-[0.95]">
          Curriculum
        </h1>
        <p className="muted mt-3 text-[16px]">Every grade. Every core subject.</p>
      </header>

      {/* The page is long — keep the filter reachable the whole way down. */}
      <div className="sticky top-0 z-10 -mx-5 sm:-mx-8 px-5 sm:px-8 py-3 bg-[var(--surface-2)]/85 backdrop-blur-md">
        <Segmented
          value={band}
          onChange={setBand}
          options={[
            { value: 'all' as const, label: 'All grades' },
            ...GRADE_BANDS.map((b) => ({ value: b.id, label: b.name, title: b.blurb })),
          ]}
        />
      </div>

      <div className="flex flex-col gap-10 pt-5">
        {grades.map((grade) => (
          <section key={grade.id} className="row">
            <div className="flex items-baseline gap-3 mb-3.5">
              <h2 className="text-[22px] font-semibold tracking-tight leading-none">
                {grade.name}
              </h2>
              <span className="text-[12px] faint tabular-nums shrink-0">{grade.ages}</span>
              <p className="row-reveal hidden md:block min-w-0 flex-1 text-[13px] faint truncate">
                {grade.focus}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {SUBJECTS.map((subject) => (
                <SubjectTile
                  key={subject.id}
                  subject={subject}
                  gradeId={grade.id}
                  available={AVAILABLE_COURSES.has(`${grade.id}:${subject.id}`)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
