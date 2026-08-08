import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { indexProgress, search, warmIndex, type SearchEntry } from '../lib/search'
import { IconBook, IconFolder, IconGrid, IconSearch } from './icons'
import { SUBJECT_COLOUR } from './primitives'

const KIND_ICON = { lesson: IconBook, unit: IconFolder, course: IconGrid } as const

export default function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [cursor, setCursor] = useState(0)
  const [, forceUpdate] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  // Warming publishes results incrementally; poll while the palette is open so
  // the list fills in rather than sitting empty on a cold start.
  useEffect(() => {
    if (!open) return
    void warmIndex()
    const { done, total } = indexProgress()
    if (done >= total) return
    const t = setInterval(() => {
      forceUpdate((n) => n + 1)
      const p = indexProgress()
      if (p.done >= p.total) clearInterval(t)
    }, 250)
    return () => clearInterval(t)
  }, [open])

  useEffect(() => {
    if (open) {
      setQuery('')
      setCursor(0)
      // Wait for the element to mount before focusing.
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  const results = useMemo(() => (open ? search(query) : []), [open, query])

  useEffect(() => setCursor(0), [query])

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-idx="${cursor}"]`)
      ?.scrollIntoView({ block: 'nearest' })
  }, [cursor])

  if (!open) return null

  const go = (entry: SearchEntry) => {
    navigate(entry.path)
    onClose()
  }

  const progress = indexProgress()
  const warmingUp = progress.done < progress.total

  return (
    <div className="fixed inset-0 z-[70] no-print">
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search lessons"
        className="relative mx-auto mt-[12vh] w-[min(640px,calc(100%-2rem))] surface overflow-hidden animate-pop"
        style={{ boxShadow: 'var(--shadow-pop)' }}
      >
        <div className="flex items-center gap-3 px-4 border-b">
          <IconSearch size={17} className="faint shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') onClose()
              if (e.key === 'ArrowDown') {
                e.preventDefault()
                setCursor((c) => Math.min(c + 1, results.length - 1))
              }
              if (e.key === 'ArrowUp') {
                e.preventDefault()
                setCursor((c) => Math.max(c - 1, 0))
              }
              if (e.key === 'Enter' && results[cursor]) {
                e.preventDefault()
                go(results[cursor])
              }
            }}
            placeholder="Search lessons, units, standards…"
            className="flex-1 bg-transparent py-3.5 text-[15px] outline-none placeholder:text-[var(--text-3)]"
          />
          {warmingUp && (
            <span className="text-[11px] faint tabular-nums shrink-0">
              indexing {progress.done}/{progress.total}
            </span>
          )}
        </div>

        <div ref={listRef} className="max-h-[52vh] overflow-y-auto scroll-thin py-1.5">
          {results.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm muted">
              {warmingUp ? 'Building the search index…' : `Nothing matches “${query}”.`}
            </p>
          ) : (
            results.map((entry, i) => {
              const Icon = KIND_ICON[entry.kind]
              return (
                <button
                  key={`${entry.path}-${i}`}
                  data-idx={i}
                  onMouseEnter={() => setCursor(i)}
                  onClick={() => go(entry)}
                  className={clsx(
                    'w-full flex items-center gap-3 px-4 py-2 text-left transition-colors',
                    i === cursor ? 'bg-blue-500/10' : 'hover:bg-[var(--surface-3)]',
                  )}
                >
                  <span
                    className="w-7 h-7 rounded-md grid place-items-center shrink-0"
                    style={{
                      background: `color-mix(in srgb, ${SUBJECT_COLOUR[entry.subjectId]} 16%, transparent)`,
                      color: SUBJECT_COLOUR[entry.subjectId],
                    }}
                  >
                    <Icon size={15} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[13.5px] font-medium">{entry.title}</span>
                    <span className="block truncate text-[12px] faint">{entry.subtitle}</span>
                  </span>
                  {entry.kind === 'lesson' && !entry.authored && (
                    <span className="text-[10px] faint uppercase tracking-wide shrink-0">outline</span>
                  )}
                </button>
              )
            })
          )}
        </div>

        <div className="flex items-center gap-4 px-4 py-2 border-t text-[11px] faint">
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  )
}
