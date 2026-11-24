'use client';
import { useRef } from 'react';
import { LiquidGlass } from '@/components/ui/liquid-glass';

export default function LandscapeIcons() {
  const photo = useRef<HTMLImageElement>(null);
  return (
    <div
      role='group'
      aria-label='Clear and frosted Home icons'
      style={{
        position: 'relative',
        isolation: 'isolate',
        width: '100%',
        height: 'clamp(245px,48vw,395px)',
        borderRadius: 14,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(14px,6vw,54px)',
        background: '#9dbac1',
      }}
    >
      <img
        ref={photo}
        src='/image-effects/ridge.webp'
        alt=''
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {[0, 3.8].map((frost, i) => (
        <LiquidGlass
          key={frost}
          backdropImage={photo}
          width='clamp(103px,20vw,156px)'
          height='clamp(103px,20vw,156px)'
          borderRadius='50%'
          bevel={0.23}
          refraction={1.7}
          frost={frost}
          shadowIntensity='xl'
          glowIntensity='lg'
          aria-label={i ? 'Frosted Home icon' : 'Clear Home icon'}
        >
          <span
            style={{
              position: 'absolute',
              zIndex: 2,
              inset: 0,
              display: 'grid',
              alignContent: 'center',
              justifyItems: 'center',
              gap: 3,
              color: '#fff',
              textShadow: '0 2px 9px #172b2355',
              font: '500 clamp(15px,3vw,21px)/1.2 system-ui',
            }}
          >
            <svg
              viewBox='0 0 32 32'
              width='38%'
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
