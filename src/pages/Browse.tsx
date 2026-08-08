import { useMemo, useState } from 'react'
import { GRADES, GRADE_BANDS, GRADE_BY_ID, SUBJECTS } from '../curriculum/taxonomy'
import { AVAILABLE_COURSES } from '../curriculum/registry'
import { courseProgress } from '../lib/progress'
import { useLearners, usePrefs } from '../lib/store'
import { Segmented } from '../ui/primitives'
import { SubjectTile } from '../ui/SubjectTile'
import type { GradeBand, GradeId } from '../curriculum/types'

/**
 * The curriculum matrix: every grade against every subject.
 *
 * It opens on the band the active learner is actually in — showing all fifteen
 * grades by default meant the four rows that mattered were somewhere in the
 * middle of a very long page — with the rest one tap away.
 */
export default function Browse() {
  const { learners, records } = useLearners()
  const activeLearnerId = usePrefs((s) => s.activeLearnerId)
  const active = learners.find((l) => l.id === activeLearnerId)
  const activeGrade = active ? GRADE_BY_ID[active.gradeId as GradeId] : null

  const [band, setBand] = useState<GradeBand | 'all'>(activeGrade?.band ?? 'all')

  const grades = useMemo(() => {
    const list = band === 'all' ? GRADES : GRADES.filter((g) => g.band === band)
    // The learner's own grade leads its band — it is the row they came for.
    if (!activeGrade) return list
    return [...list].sort((a, b) =>
      a.id === activeGrade.id ? -1 : b.id === activeGrade.id ? 1 : 0,
    )
  }, [band, activeGrade])

  // Progress for every tile on screen, in one pass rather than per render of
  // each of the fifty-six tiles. Without a learner there is nothing to show.
  const progress = useMemo(() => {
    if (!active) return {}
    const map: Record<string, ReturnType<typeof courseProgress>> = {}
    for (const grade of grades) {
      for (const subject of SUBJECTS) {
        map[`${grade.id}:${subject.id}`] = courseProgress(grade.id, subject.id, records)
      }
    }
    return map
  }, [grades, records, active])

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 pb-24">
      <header className="pt-9 pb-5 lg:pt-12">
        <h1 className="text-[34px] lg:text-[42px] font-semibold tracking-[-0.03em] leading-none">
          Subjects
        </h1>
        <p className="muted mt-2.5 text-[15px]">
          {activeGrade
            ? `${active!.name} is working at ${activeGrade.name}. Any grade is fair game.`
            : 'Every grade. Every core subject.'}
        </p>
      </header>

      {/* The page is long — keep the filter reachable the whole way down. */}
      <div className="sticky top-0 z-10 -mx-5 sm:-mx-8 px-5 sm:px-8 py-3 bg-[var(--surface-2)]/85 backdrop-blur-md">
        <Segmented
          value={band}
          onChange={setBand}
          options={[
            ...GRADE_BANDS.map((b) => ({ value: b.id, label: b.name, title: b.blurb })),
            { value: 'all' as const, label: 'All grades' },
          ]}
        />
      </div>

      <div className="flex flex-col gap-9 pt-5">
        {grades.map((grade) => (
          <section key={grade.id} className="row">
            <div className="flex items-baseline gap-3 mb-3.5">
              <h2 className="text-[21px] font-semibold tracking-tight leading-none">{grade.name}</h2>
              {grade.id === activeGrade?.id && (
                <span className="text-[10.5px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-blue-500/12 text-blue-700 dark:text-blue-300 shrink-0">
                  {active!.name}
                </span>
              )}
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
                  progress={progress[`${grade.id}:${subject.id}`] ?? null}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
