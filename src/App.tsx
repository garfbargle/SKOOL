import { Suspense, lazy, useEffect, useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import {
  IconCalendar,
  IconFolder,
  IconGrid,
  IconHome,
  IconMenu,
  IconMoon,
  IconSearch,
  IconSettings,
  IconSparkle,
  IconSun,
} from './ui/icons'
import { Spinner, Toaster } from './ui/primitives'
import { useLearners, usePrefs } from './lib/store'
import CommandPalette from './ui/CommandPalette'
import LearnerSwitcher from './ui/LearnerSwitcher'

const Home = lazy(() => import('./pages/Home'))
const Browse = lazy(() => import('./pages/Browse'))
const Course = lazy(() => import('./pages/Course'))
const LessonPage = lazy(() => import('./pages/Lesson'))
const TeachMode = lazy(() => import('./pages/TeachMode'))
const WorksheetStudio = lazy(() => import('./pages/WorksheetStudio'))
const Planner = lazy(() => import('./pages/Planner'))
const Workbook = lazy(() => import('./pages/Workbook'))
const Settings = lazy(() => import('./pages/Settings'))
const NotFound = lazy(() => import('./pages/NotFound'))

const NAV = [
  { to: '/', label: 'Today', icon: IconHome, end: true },
  { to: '/browse', label: 'Curriculum', icon: IconGrid },
  { to: '/planner', label: 'Planner', icon: IconCalendar },
  { to: '/workbook', label: 'Workbook', icon: IconFolder },
  { to: '/settings', label: 'Settings', icon: IconSettings },
]

export default function App() {
  const location = useLocation()
  const load = useLearners((s) => s.load)
  const [navOpen, setNavOpen] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)

  useEffect(() => {
    void load()
  }, [load])

  // Close the mobile drawer whenever the route changes.
  useEffect(() => setNavOpen(false), [location.pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Teach mode takes over the whole window — no chrome, no distractions.
  const isImmersive = location.pathname.endsWith('/teach')

  if (isImmersive) {
    return (
      <>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/c/:gradeId/:subjectId/:lessonId/teach" element={<TeachMode />} />
          </Routes>
        </Suspense>
        <Toaster />
      </>
    )
  }

  return (
    <div className="h-full flex bg-[var(--surface-2)]">
      {/* -------------------------------------------------------- sidebar */}
      <aside
        className={clsx(
          'no-print fixed lg:static inset-y-0 left-0 z-40 w-[248px] shrink-0 flex flex-col',
          'bg-[var(--surface)] border-r transition-transform duration-200 dragless',
          navOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        )}
      >
        <div className="px-4 h-14 flex items-center gap-2.5 border-b">
          <div className="w-7 h-7 rounded-lg bg-blue-600 text-white grid place-items-center shrink-0">
            <IconSparkle size={16} />
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-[15px] tracking-tight">Skool</div>
            <div className="text-[10.5px] faint uppercase tracking-[0.08em]">Curriculum Studio</div>
          </div>
        </div>

        <div className="px-3 pt-3">
          <button
            onClick={() => setPaletteOpen(true)}
            className="w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-[13px] muted bg-[var(--surface-2)] border hover:bg-[var(--surface-3)] transition-colors focus-ring"
          >
            <IconSearch size={15} />
            <span className="flex-1 text-left">Search lessons…</span>
            <kbd className="text-[10px] font-sans px-1.5 py-0.5 rounded border bg-[var(--surface)] faint">
              ⌘K
            </kbd>
          </button>
        </div>

        <nav className="p-3 flex flex-col gap-0.5">
          {NAV.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                clsx(
                  'flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13.5px] font-medium transition-colors focus-ring',
                  isActive
                    ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300'
                    : 'text-[var(--text-2)] hover:bg-[var(--surface-3)] hover:text-[var(--text)]',
                )
              }
            >
              <Icon size={17} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto p-3 border-t">
          <LearnerSwitcher />
        </div>
      </aside>

      {navOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden no-print"
          onClick={() => setNavOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ----------------------------------------------------------- main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="no-print lg:hidden h-14 shrink-0 flex items-center gap-2 px-3 border-b bg-[var(--surface)]">
          <button
            onClick={() => setNavOpen(true)}
            className="p-2 rounded-lg hover:bg-[var(--surface-3)] focus-ring"
            aria-label="Open navigation"
          >
            <IconMenu size={18} />
          </button>
          <span className="font-semibold">Skool</span>
          <div className="ml-auto flex items-center gap-1">
            <button
              onClick={() => setPaletteOpen(true)}
              className="p-2 rounded-lg hover:bg-[var(--surface-3)] focus-ring"
              aria-label="Search"
            >
              <IconSearch size={18} />
            </button>
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto scroll-thin">
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/c/:gradeId/:subjectId" element={<Course />} />
              <Route path="/c/:gradeId/:subjectId/:lessonId" element={<LessonPage />} />
              <Route
                path="/c/:gradeId/:subjectId/:lessonId/worksheet"
                element={<WorksheetStudio />}
              />
              <Route path="/planner" element={<Planner />} />
              <Route path="/workbook" element={<Workbook />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
      <Toaster />
    </div>
  )
}

export function ThemeToggle() {
  const { theme, setTheme } = usePrefs()
  const isDark = document.documentElement.classList.contains('dark')
  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2 rounded-lg hover:bg-[var(--surface-3)] focus-ring"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={`Theme: ${theme}`}
    >
      {isDark ? <IconSun size={18} /> : <IconMoon size={18} />}
    </button>
  )
}
