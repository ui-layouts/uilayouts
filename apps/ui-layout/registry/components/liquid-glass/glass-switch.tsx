'use client';

import { useRef, useState } from 'react';
import { LiquidGlass } from '@/components/ui/liquid-glass';

function track(color: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="214" height="112" viewBox="0 0 214 112"><rect width="214" height="112" fill="white"/><rect x="29" y="25" width="146" height="62" rx="31" fill="${color}"/></svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

const tracks = [track('#c3c6c9'), track('#08c94d')];

export default function GlassSwitch() {
  const [on, setOn] = useState(true);
  const surface = useRef<HTMLImageElement>(null);
  return (
    <div
      style={{
        width: '100%',
        height: 250,
        display: 'grid',
        placeItems: 'center',
        borderRadius: 14,
        background: '#fff',
      }}
    >
      <button
        type='button'
        role='switch'
        aria-label='Enable liquid switch'
        aria-checked={on}
        onClick={() => setOn(!on)}
        style={{
          position: 'relative',
          width: 214,
          height: 112,
          padding: 0,
          border: 0,
          borderRadius: 55,
          background: 'transparent',
          cursor: 'pointer',
          outlineOffset: 2,
        }}
      >
        <img
          ref={surface}
          src={tracks[Number(on)]}
          alt=''
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
          width='115px'
          height='82px'
          borderRadius='999px'
          bevel={0.17}
          refraction={1.2}
          frost={0.35}
          shadowIntensity='md'
          animate={{ x: on ? 76 : 10 }}
          transition={{ type: 'spring', stiffness: 340, damping: 26 }}
          style={{
            position: 'absolute',
            left: 0,
            top: 15,
            pointerEvents: 'none',
            boxShadow: on
              ? 'inset 0 0 0 1.5px #009b42bb,0 -1px 2px #009a464f,1px 2px 4px #008b3d99,0 7px 24px #06a34735'
              : 'inset 0 0 0 1px #6b778a99,0 4px 16px #30404430',
          }}
        />
      </button>
    </div>
  );
}
