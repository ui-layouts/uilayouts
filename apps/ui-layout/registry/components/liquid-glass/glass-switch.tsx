'use client';

import { useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { LiquidGlass } from '@/components/ui/liquid-glass';

// One centered, cover-fit image supplies both the visible track and the lens
// texture. Drawing the rail twice at different sizes creates a second thumb.
function track(fill: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="92" height="54"><rect width="92" height="54" fill="white"/><rect x="3" y="3" width="86" height="48" rx="24" fill="${fill}"/></svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

const tracks = [track('#babdc2'), track('#34c759')];

export default function GlassSwitch() {
  const [on, setOn] = useState(true);
  const [drag, setDrag] = useState<number | null>(null);
  const origin = useRef<number | null>(null);
  const suppressClick = useRef(false);
  const surface = useRef<HTMLImageElement>(null);
  const reduced = useReducedMotion();
  const start = on ? 44 : 6;
  return (
    <div
      style={{
        width: '100%',
        height: 220,
        display: 'grid',
        placeItems: 'center',
        background: 'white',
        borderRadius: 14,
      }}
    >
      <button
        type='button'
        role='switch'
        aria-label='Enable liquid switch'
        aria-checked={on}
        onPointerDown={(event) => {
          if (!event.isPrimary || event.button !== 0) return;
          origin.current = event.clientX;
          suppressClick.current = false;
          event.currentTarget.setPointerCapture(event.pointerId);
          setDrag(start);
        }}
        onPointerMove={(event) => {
          if (origin.current !== null && event.isPrimary) {
            setDrag(
              Math.min(44, Math.max(6, start + event.clientX - origin.current))
            );
          }
        }}
        onPointerUp={(event) => {
          if (origin.current === null || !event.isPrimary) return;
          const distance = event.clientX - origin.current;
          if (Math.abs(distance) > 3) {
            setOn(start + distance >= 25);
            suppressClick.current = true;
          }
          origin.current = null;
          setDrag(null);
        }}
        onLostPointerCapture={() => {
          origin.current = null;
          setDrag(null);
        }}
        onClick={(event) => {
          if (event.detail === 0 || !suppressClick.current)
            setOn((value) => !value);
          suppressClick.current = false;
        }}
        style={{
          position: 'relative',
          width: 92,
          height: 54,
          padding: 0,
          border: 0,
          borderRadius: 27,
          background: 'white',
          cursor: 'pointer',
          touchAction: 'pan-y',
          outlineOffset: 3,
        }}
      >
        <img
          ref={surface}
          src={tracks[Number(on)]}
          alt=''
          draggable={false}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
          }}
        />
        <LiquidGlass
          backdropImage={surface}
          aria-hidden='true'
          width='42px'
          height='42px'
          borderRadius='50%'
          bevel={0.19}
          refraction={0.93}
          frost={0}
          shadowIntensity='sm'
          glowIntensity='none'
          initial={false}
          animate={{ x: drag ?? start, scale: drag === null ? 1 : 1.09 }}
          transition={
            reduced || drag !== null
              ? { duration: 0 }
              : { type: 'spring', stiffness: 520, damping: 36 }
          }
          style={{
            position: 'absolute',
            top: 6,
            left: 0,
            pointerEvents: 'none',
            boxShadow: '0 1px 4px #10291f40, 0 0 0 0.5px #10291f26',
          }}
        >
          <span
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              background:
                drag === null
                  ? 'rgba(255,255,255,.19)'
                  : 'rgba(255,255,255,.06)',
              boxShadow: 'inset 0 1px 2px #fff',
              transition: reduced ? 'none' : 'background 120ms ease',
            }}
          />
        </LiquidGlass>
      </button>
    </div>
  );
}
