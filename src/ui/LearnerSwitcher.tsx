import { useState } from 'react'
import clsx from 'clsx'
import { useLearners, usePrefs } from '../lib/store'
import { GRADES } from '../curriculum/taxonomy'
import { Button, Modal } from './primitives'
import { IconChevron, IconUsers } from './icons'

const AVATARS = ['🦊', '🐻', '🐼', '🦁', '🐨', '🐸', '🦉', '🐙', '🦄', '🐝', '🦕', '🐳']
const COLOURS = ['#f59e0b', '#a78bfa', '#34d399', '#fb7185', '#60a5fa', '#f472b6']

export default function LearnerSwitcher() {
  const { learners, loaded, addLearner } = useLearners()
  const { activeLearnerId, setActiveLearner } = usePrefs()
  const [open, setOpen] = useState(false)
  const [adding, setAdding] = useState(false)

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState(AVATARS[0])
  const [gradeId, setGradeId] = useState('k')
  const [colour, setColour] = useState(COLOURS[0])

  const active = learners.find((l) => l.id === activeLearnerId)

  async function create() {
    if (!name.trim()) return
    const learner = await addLearner({ name: name.trim(), avatar, gradeId, colour })
    setActiveLearner(learner.id)
    setName('')
    setAdding(false)
    setOpen(false)
  }

  if (!loaded) return <div className="h-10" />

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-[var(--surface-3)] transition-colors focus-ring text-left"
      >
        {active ? (
          <>
            <span
              className="w-8 h-8 rounded-lg grid place-items-center text-base shrink-0"
              style={{ background: `color-mix(in srgb, ${active.colour} 18%, transparent)` }}
            >
              {active.avatar}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-medium">{active.name}</span>
              <span className="block truncate text-[11px] faint">
                {GRADES.find((g) => g.id === active.gradeId)?.name ?? ''}
              </span>
            </span>
          </>
        ) : (
          <>
            <span className="w-8 h-8 rounded-lg grid place-items-center bg-[var(--surface-3)] faint shrink-0">
              <IconUsers size={16} />
            </span>
            <span className="text-[13px] muted flex-1">Add a learner</span>
          </>
        )}
        <IconChevron size={14} className="faint shrink-0 rotate-90" />
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title="Learners">
        <p className="text-[13px] muted mb-4 leading-relaxed">
          Progress, notes and uploaded work are tracked per learner and stored only on this device.
        </p>

        <div className="flex flex-col gap-1.5 mb-4">
          {learners.map((l) => (
            <button
              key={l.id}
              onClick={() => {
                setActiveLearner(l.id)
                void useLearners.getState().loadRecords(l.id)
                setOpen(false)
              }}
              className={clsx(
                'flex items-center gap-3 p-2.5 rounded-lg border transition-colors text-left',
                l.id === activeLearnerId
                  ? 'border-blue-500/50 bg-blue-500/8'
                  : 'hover:bg-[var(--surface-3)]',
              )}
            >
              <span
                className="w-9 h-9 rounded-lg grid place-items-center text-lg"
                style={{ background: `color-mix(in srgb, ${l.colour} 18%, transparent)` }}
              >
                {l.avatar}
              </span>
              <span className="flex-1">
                <span className="block text-sm font-medium">{l.name}</span>
                <span className="block text-[12px] faint">
                  {GRADES.find((g) => g.id === l.gradeId)?.name ?? ''}
                </span>
              </span>
            </button>
          ))}
        </div>

        {adding ? (
          <div className="border-t pt-4 flex flex-col gap-3">
            <label className="block">
              <span className="text-[12px] font-medium muted block mb-1">Name</span>
              <input
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && void create()}
                placeholder="e.g. Maya"
                className="w-full px-3 py-2 rounded-lg border bg-[var(--surface-2)] text-sm outline-none focus:border-blue-500"
              />
            </label>

            <label className="block">
              <span className="text-[12px] font-medium muted block mb-1">Working at</span>
              <select
                value={gradeId}
                onChange={(e) => setGradeId(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border bg-[var(--surface-2)] text-sm outline-none focus:border-blue-500"
              >
                {GRADES.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name} · ages {g.ages}
                  </option>
                ))}
              </select>
            </label>

            <div>
              <span className="text-[12px] font-medium muted block mb-1.5">Avatar</span>
              <div className="flex flex-wrap gap-1.5">
                {AVATARS.map((a) => (
                  <button
                    key={a}
                    onClick={() => setAvatar(a)}
                    className={clsx(
                      'w-9 h-9 rounded-lg text-lg grid place-items-center border transition-colors',
                      avatar === a ? 'border-blue-500 bg-blue-500/10' : 'hover:bg-[var(--surface-3)]',
                    )}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[12px] font-medium muted block mb-1.5">Colour</span>
              <div className="flex gap-2">
                {COLOURS.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColour(c)}
                    aria-label={`Colour ${c}`}
                    className={clsx(
                      'w-7 h-7 rounded-full transition-transform',
                      colour === c && 'ring-2 ring-offset-2 ring-offset-[var(--surface)] scale-110',
                    )}
                    style={{ background: c, boxShadow: colour === c ? `0 0 0 2px ${c}` : undefined }}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-2 pt-1">
              <Button variant="primary" onClick={() => void create()} disabled={!name.trim()}>
                Add learner
              </Button>
              <Button variant="ghost" onClick={() => setAdding(false)}>
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <Button variant="secondary" onClick={() => setAdding(true)} className="w-full">
            + Add a learner
          </Button>
        )}
      </Modal>
    </>
  )
}
