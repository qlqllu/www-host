import type { CSSProperties } from 'react'
import { css, classNames } from 'jimu-core'

export interface DotLoadingProps {
  // default 6px
  size?: number;
  // default #6ea8fe
  color?: string;
  // default auto based on size
  borderWidth?: number;
  // accessibility label
  label?: string;
  className?: string;
  style?: CSSProperties;
}

const cssStyle = css`
display: inline-flex;
align-items: center;
justify-content: center;
color: var(--dot-wave-color, #6ea8fe);

.dots {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(var(--dot-wave-size, 6px) + 2px);
  height: calc(var(--dot-wave-size, 6px) * 5 + 8px);
}

.dot {
  display: block;
  box-sizing: border-box;
  width: var(--dot-wave-size, 6px);
  height: var(--dot-wave-size, 6px);
  border-radius: 50%;
  background: transparent;
  border: var(--dot-wave-border, 1.5px) solid currentColor;
  animation: dotWave 1s ease-in-out infinite;
}

.dot:nth-child(2) {
  animation-delay: 0.25s;
}

@keyframes dotWave {
  0%,
  100% {
    transform: translateY(3px) scale(0.75);
    opacity: 0.35;
    box-shadow: 0 0 0 0 currentColor;
  }
  50% {
    transform: translateY(-3px) scale(1.05);
    opacity: 1;
    box-shadow: 0 0 6px color-mix(in srgb, currentColor 35%, transparent);
  }
}
`

/**
 * Dot loading
 *
 * @example
 * ```tsx
 * <DotLoading />
 * <DotLoading size={8} color="#1677ff" borderWidth={2} />
 * ```
 */
export function DotLoading ({
  size = 6,
  color = '#6ea8fe',
  borderWidth,
  label = '',
  className,
  style,
}: DotLoadingProps) {
  const stroke = borderWidth ?? Math.max(1, Math.round(size * 0.22))

  return (
    <div
      className={classNames('dot-loading', className)}
      css={cssStyle}
      style={
        {
          ...style,
          '--dot-wave-size': `${size}px`,
          '--dot-wave-color': color,
          '--dot-wave-border': `${stroke}px`,
        } as CSSProperties
      }
      role='status'
      aria-label={label}
    >
      <div className='dots'>
        <span className='dot' />
        <span className='dot' />
      </div>
    </div>
  )
}
