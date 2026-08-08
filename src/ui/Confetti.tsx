import { useMemo } from 'react'
import { SUBJECT_COLOUR } from './primitives'

const PALETTE = [...Object.values(SUBJECT_COLOUR), '#60a5fa', '#f472b6', '#fbbf24']

/**
 * A burst of paper, done with transforms only so it costs nothing and honours
 * `prefers-reduced-motion` through the global rule in styles.css. Purely
 * decorative — it is hidden from assistive tech and never blocks a click.
 */
export function Confetti({ pieces = 44 }: { pieces?: number }) {
  const bits = useMemo(
    () =>
      Array.from({ length: pieces }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        colour: PALETTE[i % PALETTE.length],
        delay: Math.random() * 0.5,
        duration: 2.4 + Math.random() * 1.6,
        drift: (Math.random() - 0.5) * 240,
        spin: (Math.random() - 0.5) * 900,
        size: 6 + Math.random() * 7,
        round: Math.random() > 0.6,
      })),
    [pieces],
  )

  return (
    <div className="confetti no-print" aria-hidden="true">
      {bits.map((b) => (
        <span
          key={b.id}
          className="confetti-bit"
          style={
            {
              left: `${b.left}%`,
              width: b.size,
              height: b.size * (b.round ? 1 : 1.6),
              background: b.colour,
              borderRadius: b.round ? '50%' : '2px',
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
              '--drift': `${b.drift}px`,
              '--spin': `${b.spin}deg`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
