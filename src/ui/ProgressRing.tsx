/**
 * A ring that reads as a fill level, not a chart. The track stays visible at
 * low percentages so an untouched subject still looks like a complete object
 * rather than a broken one.
 *
 * Fluid by design: `size` is a ceiling, not a fixed width. Four of these sit in
 * a four-column grid on a 375px phone, where a hard pixel size would overflow
 * the cell and sit on top of the label underneath.
 */
export function ProgressRing({
  percent,
  size = 76,
  stroke = 5,
  colour,
  children,
}: {
  percent: number
  /** Maximum rendered width. Shrinks to fit a narrower container. */
  size?: number
  /** Ring thickness at full size, in the same units as `size`. */
  stroke?: number
  colour: string
  children?: React.ReactNode
}) {
  // Everything is drawn in a 0–100 viewBox so it scales with the container.
  const strokeVb = (stroke / size) * 100
  const r = (100 - strokeVb) / 2
  const circumference = 2 * Math.PI * r
  const filled = Math.max(0, Math.min(100, percent)) / 100

  return (
    <span
      className="relative grid place-items-center w-full aspect-square shrink-0"
      style={{ maxWidth: size }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90" aria-hidden="true">
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeVb}
          className="text-[var(--surface-3)]"
        />
        {filled > 0 && (
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke={colour}
            strokeWidth={strokeVb}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - filled)}
            style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
          />
        )}
      </svg>
      {children}
    </span>
  )
}
