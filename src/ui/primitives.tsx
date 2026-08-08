import clsx from 'clsx'
import {
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react'
import { IconCheck, IconClose, IconCopy } from './icons'
import { useToasts } from '../lib/store'
import type { SubjectId } from '../curriculum/types'

/* ------------------------------------------------------------------ button */

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
}

export function Button({
  variant = 'secondary',
  size = 'md',
  icon,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all focus-ring',
        'disabled:opacity-45 disabled:pointer-events-none active:scale-[0.98]',
        size === 'sm' && 'px-2.5 py-1.5 text-[13px]',
        size === 'md' && 'px-3.5 py-2 text-sm',
        size === 'lg' && 'px-5 py-2.5 text-[15px]',
        variant === 'primary' &&
          'bg-blue-600 text-white hover:bg-blue-500 shadow-sm dark:bg-blue-500 dark:hover:bg-blue-400',
        variant === 'secondary' &&
          'bg-[var(--surface)] border border-[var(--border-strong)] hover:bg-[var(--surface-3)]',
        variant === 'ghost' && 'hover:bg-[var(--surface-3)]',
        variant === 'danger' &&
          'bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-600/90 dark:hover:bg-rose-500',
        className,
      )}
      {...rest}
    >
      {icon}
      {children}
    </button>
  )
}

/* ------------------------------------------------------------------- badge */

export function Badge({
  children,
  tone = 'neutral',
  className,
}: {
  children: ReactNode
  tone?: 'neutral' | 'accent' | 'success' | 'warn' | 'info'
  className?: string
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase',
        tone === 'neutral' && 'bg-[var(--surface-3)] text-[var(--text-2)]',
        tone === 'accent' && 'bg-blue-500/12 text-blue-700 dark:text-blue-300',
        tone === 'success' && 'bg-emerald-500/12 text-emerald-700 dark:text-emerald-300',
        tone === 'warn' && 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
        tone === 'info' && 'bg-violet-500/12 text-violet-700 dark:text-violet-300',
        className,
      )}
    >
      {children}
    </span>
  )
}

/* ------------------------------------------------------- subject accenting */

export const SUBJECT_COLOUR: Record<SubjectId, string> = {
  math: '#f59e0b',
  ela: '#a78bfa',
  science: '#34d399',
  'social-studies': '#fb7185',
}

export function subjectStyle(subjectId: SubjectId) {
  return { '--sc': SUBJECT_COLOUR[subjectId] } as React.CSSProperties
}

/* ------------------------------------------------------------------ tabs */

export function Segmented<T extends string>({
  options,
  value,
  onChange,
  size = 'md',
}: {
  options: { value: T; label: string; title?: string }[]
  value: T
  onChange: (v: T) => void
  size?: 'sm' | 'md'
}) {
  return (
    <div
      role="tablist"
      className="inline-flex rounded-full bg-[var(--surface-3)] p-1 gap-0.5 overflow-x-auto scroll-none max-w-full"
    >
      {options.map((o) => (
        <button
          key={o.value}
          role="tab"
          aria-selected={value === o.value}
          title={o.title}
          onClick={() => onChange(o.value)}
          className={clsx(
            'rounded-full font-medium whitespace-nowrap transition-colors focus-ring',
            size === 'sm' ? 'px-3 py-1 text-[12.5px]' : 'px-3.5 py-1.5 text-[13.5px]',
            value === o.value
              ? 'bg-[var(--surface)] shadow-sm text-[var(--text)]'
              : 'text-[var(--text-2)] hover:text-[var(--text)]',
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------ copy button */

export function CopyButton({
  text,
  label = 'Copy',
  variant = 'secondary',
  size = 'sm',
  className,
}: {
  text: string
  label?: string
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  className?: string
}) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  const push = useToasts((s) => s.push)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      timer.current = window.setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard API needs a secure context and can be blocked outright.
      // Falling back to a selectable prompt beats silently doing nothing.
      push('Could not reach the clipboard — select the text and copy manually.', 'error')
    }
  }

  return (
    <Button
      variant={copied ? 'primary' : variant}
      size={size}
      onClick={copy}
      className={className}
      icon={copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
    >
      {copied ? 'Copied' : label}
    </Button>
  )
}

/* ------------------------------------------------------------------ modal */

export function Modal({
  open,
  onClose,
  title,
  children,
  wide,
}: {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
  wide?: boolean
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 no-print">
      <div
        className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={clsx(
          'relative surface w-full overflow-hidden animate-pop',
          wide ? 'max-w-3xl' : 'max-w-lg',
        )}
        style={{ boxShadow: 'var(--shadow-pop)' }}
      >
        <div className="flex items-center justify-between px-5 py-3.5 border-b">
          <h2 className="font-semibold">{title}</h2>
          <button onClick={onClose} className="p-1.5 rounded-md hover:bg-[var(--surface-3)] focus-ring" aria-label="Close">
            <IconClose size={16} />
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto scroll-thin px-5 py-4">{children}</div>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------- toasts */

export function Toaster() {
  const { toasts, dismiss } = useToasts()
  if (!toasts.length) return null
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[60] flex flex-col gap-2 no-print pointer-events-none">
      {toasts.map((t) => (
        <button
          key={t.id}
          onClick={() => dismiss(t.id)}
          className={clsx(
            'pointer-events-auto animate-fade-up rounded-lg px-4 py-2.5 text-sm font-medium shadow-lg text-left max-w-md',
            t.tone === 'error'
              ? 'bg-rose-600 text-white'
              : t.tone === 'success'
                ? 'bg-emerald-600 text-white'
                : 'bg-[var(--text)] text-[var(--surface)]',
          )}
        >
          {t.message}
        </button>
      ))}
    </div>
  )
}

/* --------------------------------------------------------------- section */

export function Section({
  title,
  hint,
  icon,
  children,
  className,
  action,
}: {
  title: string
  hint?: string
  icon?: ReactNode
  children: ReactNode
  className?: string
  action?: ReactNode
}) {
  return (
    <section className={clsx('surface p-5 avoid-break', className)}>
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="flex items-center gap-2 font-semibold text-[15px]">
            {icon}
            {title}
          </h3>
          {hint && <p className="text-[13px] muted mt-0.5">{hint}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  )
}

/* ------------------------------------------------------------------ empty */

export function EmptyState({
  icon,
  title,
  body,
  action,
}: {
  icon?: ReactNode
  title: string
  body: string
  action?: ReactNode
}) {
  return (
    <div className="text-center py-14 px-6">
      {icon && <div className="mx-auto mb-3 w-11 h-11 grid place-items-center rounded-xl bg-[var(--surface-3)] faint">{icon}</div>}
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm muted max-w-sm mx-auto leading-relaxed">{body}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  )
}

/* ---------------------------------------------------------------- spinner */

export function Spinner({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 py-16 muted text-sm">
      <span
        className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin"
        aria-hidden="true"
      />
      {label ?? 'Loading…'}
    </div>
  )
}
