'use client';

import { useRef } from 'react';
import { LiquidGlass } from '@/components/ui/liquid-glass';

export default function LogoLens() {
  const stage = useRef<HTMLDivElement>(null);
  const art = useRef<HTMLImageElement>(null);
  return (
    <div
      ref={stage}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '780 / 440',
        overflow: 'hidden',
        isolation: 'isolate',
        background: '#fafafa',
      }}
    >
      <img
        ref={art}
        src='/image-effects/ui-layouts-wordmark.svg'
        alt='UI Layouts wordmark'
        draggable={false}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
      />
      <LiquidGlass
        backdropImage={art}
        dragWithin={stage}
        role='group'
        aria-roledescription='movable lens'
        aria-label='Logo lens'
        title='Drag to move. Use arrow keys to nudge or Home to reset.'
        width='22%'
        borderRadius='50%'
        bevel={0.3}
        refraction={2.35}
        frost={0}
        style={{
          position: 'absolute',
          top: '34%',
          left: '30%',
          aspectRatio: '1',
          boxShadow: '0 5px 13px #10291b23, 0 1px 3px #10291b29',
        }}
      />
    </div>
  );
}
