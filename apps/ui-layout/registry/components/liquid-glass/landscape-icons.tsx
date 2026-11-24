'use client';
import { useRef } from 'react';
import { LiquidGlass } from '@/components/ui/liquid-glass';

export default function LandscapeIcons() {
  const stage = useRef<HTMLDivElement>(null);
  const photo = useRef<HTMLImageElement>(null);
  return (
    <div
      ref={stage}
      role='group'
      aria-label='Clear and frosted Home icons'
      style={{
        position: 'relative',
        isolation: 'isolate',
        width: '100%',
        height: 'clamp(245px,48vw,395px)',
        containerType: 'inline-size',
        borderRadius: 14,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(14px,8%,65px)',
        background: '#9dbac1',
      }}
    >
      <style>{`[data-lens-finish="frosted"] canvas { filter: blur(5px); transform: scale(1.10); }`}</style>
      <img
        ref={photo}
        src='/image-effects/meadow-stream.webp'
        alt=''
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {[0, 2.6].map((frost, i) => (
        <LiquidGlass
          key={frost}
          dragWithin={stage}
          dragSnapToOrigin
          dragTransition={{ bounceStiffness: 420, bounceDamping: 34 }}
          data-lens-finish={i ? 'frosted' : 'clear'}
          role='group'
          aria-roledescription='movable lens'
          title='Drag and release to return. Use arrow keys to nudge or Home to reset.'
          backdropImage={photo}
          width='clamp(92px,34cqw,190px)'
          height='clamp(92px,34cqw,190px)'
          borderRadius='50%'
          bevel={0.17}
          refraction={1.1}
          frost={frost}
          style={{
            flexShrink: 0,
            boxShadow: '0 3px 5px #192b2429, 0 7px 14px #1328221c',
          }}
          shadowIntensity='md'
          glowIntensity='lg'
          aria-label={i ? 'Frosted Home icon' : 'Clear Home icon'}
        >
          <span
            aria-hidden='true'
            style={{
              position: 'absolute',
              zIndex: 2,
              borderRadius: 'inherit',
              boxShadow:
                'inset 0 1.5px 2px #ffffffce, inset 0 -2px 2px #ffffff7d, inset -2px -4px 5px #17251c39',
              background: i
                ? 'linear-gradient(155deg,#ffffff12 5%,transparent 40%,#09232155 90%)'
                : undefined,
              inset: 0,
              display: 'grid',
              alignContent: 'center',
              justifyItems: 'center',
              gap: 5,
              color: '#fff',
              textShadow: '0 2px 9px #172b2355',
              font: '500 clamp(15px,3vw,21px)/1.2 system-ui',
            }}
          >
            <svg
              viewBox='0 0 32 32'
              width='35%'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='m3 14 12-11a1.5 1.5 0 0 1 2 0l12 11v14a1 1 0 0 1-1 1h-8v-9h-8v9H4a1 1 0 0 1-1-1z' />
            </svg>
            Home
          </span>
        </LiquidGlass>
      ))}
    </div>
  );
}
