'use client';

import { useRef } from 'react';
import { LiquidGlass } from '@/components/ui/liquid-glass';

// Embed the original mark so the displayed image and optical texture are identical.
const logo =
  'data:image/svg+xml;charset=utf-8,' +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1560" height="880" viewBox="0 0 780 440">
    <rect width="780" height="440" fill="#f6f5ee"/>
    <g transform="translate(168 168)" fill="none" stroke="#122d26" stroke-width="13" stroke-linecap="round">
      <path d="M0 61C25 61 23 7 49 7S73 61 98 61"/>
      <path d="M0 82C25 82 23 28 49 28S73 82 98 82"/>
      <path d="M0 103C25 103 23 49 49 49S73 103 98 103"/>
    </g>
    <text x="290" y="280" fill="#122d26" font-family="Arial, Helvetica, sans-serif" font-size="172" font-weight="700" letter-spacing="-12">Rill</text>
    <circle cx="554" cy="163" r="10" fill="#eb5a37"/>
  </svg>`);

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
        background: '#f6f5ee',
      }}
    >
      <img
        ref={art}
        src={logo}
        alt='Rill wave mark and wordmark'
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
