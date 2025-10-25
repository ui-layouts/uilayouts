import { cn } from '@/lib/utils'

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  vertical?: boolean
  repeat?: number
  [key: string]: any
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] gap-(--gap)',
        {
          'flex-row': !vertical,
          'flex-col': vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn('flex shrink-0 justify-around gap-(--gap)', {
              'animate-marquee flex-row': !vertical && !reverse,
              'animate-marquee-vertical flex-col': vertical && !reverse,
              'animate-marquee-reverse flex-row': !vertical && reverse,
              'animate-marquee-vertical-reverse flex-col': vertical && reverse,
              'group-hover:[animation-play-state:paused]': pauseOnHover,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  )
}
