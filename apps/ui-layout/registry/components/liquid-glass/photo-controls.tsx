'use client';

import { useRef, useState, type CSSProperties } from 'react';
import { LiquidGlass } from '@/components/ui/liquid-glass';

const photos = [
  { src: '/image-effects/coast.webp', alt: 'Coastal landscape' },
  { src: '/image-effects/ridge.webp', alt: 'Mountain ridge' },
  { src: '/image-effects/forest.webp', alt: 'Forest landscape' },
];

const button: CSSProperties = {
  width: 44,
  height: 44,
  background: 'transparent',
  border: 0,
  color: 'inherit',
  textShadow: 'inherit',
  fontSize: 23,
  cursor: 'pointer',
};

export default function PhotoControls() {
  const photo = useRef<HTMLImageElement>(null);
  const [index, setIndex] = useState(0);
  const change = (offset: number) => setIndex((i) => (i + offset + photos.length) % photos.length);

  return (
    <figure
      aria-label='Landscape photo gallery'
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '3 / 2',
        margin: 0,
        overflow: 'hidden',
        background: '#151515',
      }}
    >
      <img
        ref={photo}
        src={photos[index].src}
        alt={photos[index].alt}
        style={{ height: '100%', width: '100%', objectFit: 'cover', display: 'block' }}
      />
      <div
        style={{ position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)' }}
      >
        <LiquidGlass
          role='group'
          aria-label='Photo controls'
          backdropImage={photo}
          borderRadius='999px'
          frost={0}
          bevel={0.22}
          refraction={1.4}
          glowIntensity='sm'
          shadowIntensity='sm'
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '3px 7px',
            color: 'white',
            textShadow: '0 1px 4px #111',
          }}
        >
          <button
            type='button'
            aria-label='Previous photo'
            style={button}
            onClick={() => change(-1)}
          >
            ‹
          </button>
          <output
            aria-live='polite'
            style={{
              font: '500 13px system-ui',
              minWidth: 42,
              textAlign: 'center',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {index + 1} / {photos.length}
          </output>
          <button type='button' aria-label='Next photo' style={button} onClick={() => change(1)}>
            ›
          </button>
        </LiquidGlass>
      </div>
    </figure>
  );
}
