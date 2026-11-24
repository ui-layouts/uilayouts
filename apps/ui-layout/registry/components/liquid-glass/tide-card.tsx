'use client';

import { useRef } from 'react';
import { LiquidGlass } from '@/components/ui/liquid-glass';

export default function TideCard() {
  const stage = useRef<HTMLElement>(null);
  const shore = useRef<HTMLImageElement>(null);
  return (
    <figure
      ref={stage}
      aria-label='Tide study'
      style={{
        position: 'relative',
        isolation: 'isolate',
        width: '100%',
        height: '100svh',
        overflow: 'hidden',
        margin: 0,
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <img
        ref={shore}
        src='/image-effects/tide-study.webp'
        alt='White surf curling onto a black sand shore'
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <LiquidGlass
        backdropImage={shore}
        dragWithin={stage}
        dragSnapToOrigin
        dragTransition={{ bounceStiffness: 420, bounceDamping: 34 }}
        role='group'
        aria-label='Tide card'
        title='Drag the card and release to return.'
        width='min(69%, 240px)'
        borderRadius='26px'
        bevel={0.12}
        frost={1.4}
        refraction={1.3}
        glowIntensity='md'
        style={{
          padding: '21px 24px 19px',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden='true'
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(8,31,30,.47)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: 14,
              fontWeight: 530,
            }}
          >
            Tide height
            <svg
              aria-hidden='true'
              viewBox='0 0 20 16'
              width='19'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.35'
            >
              <path d='M1 7Q4 3 7 6T13 6T19 6M1 12Q4 8 7 11T13 11T19 11' />
            </svg>
          </div>
          <div
            style={{
              margin: '18px 0 14px',
              fontSize: 59,
              lineHeight: 1,
              letterSpacing: '-.06em',
              fontWeight: 450,
            }}
          >
            1.8 <span style={{ fontSize: 24, letterSpacing: '-.05em' }}>m</span>
          </div>
          <svg
            aria-hidden='true'
            viewBox='0 0 190 25'
            width='100%'
            fill='none'
            style={{ display: 'block' }}
          >
            <path
              d='M1 22C34 22 49 14 69 9S113 0 135 5S169 16 189 17'
              stroke='currentColor'
              opacity='.7'
              strokeWidth='1.3'
            />
            <circle cx='69' cy='9' r='3' fill='white' />
          </svg>
          <span style={{ fontSize: 12 }}>Rising tide</span>
        </div>
      </LiquidGlass>
    </figure>
  );
}
