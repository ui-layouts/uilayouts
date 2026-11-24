'use client';

import { useRef, useState, type CSSProperties } from 'react';
import { LiquidGlass } from '@/components/ui/liquid-glass';

const photos = [
  { src: '/image-effects/pager-01.webp', alt: 'Looking down an orange spiral staircase' },
  {
    src: '/image-effects/pager-02.webp',
    alt: 'Blue stairs crossing a cobalt courtyard at La Muralla Roja',
  },
  {
    src: '/image-effects/pager-03.webp',
    alt: 'Pink terraces and a rooftop pool overlooking the sea',
  },
];

const button: CSSProperties = {
  display: 'grid',
  placeItems: 'center',
  width: 58,
  height: 58,
  padding: 0,
  borderRadius: '50%',
  background: 'transparent',
  border: 0,
  color: 'inherit',
  textShadow: 'inherit',
  filter: 'drop-shadow(0 1px 2px #1119)',
  cursor: 'pointer',
};

function Chevron({ previous = false }: { previous?: boolean }) {
  return (
    <svg aria-hidden='true' width='26' height='26' viewBox='0 0 24 24' fill='none'>
      <path
        d={previous ? 'M15 5 8 12l7 7' : 'm9 5 7 7-7 7'}
        stroke='currentColor'
        strokeWidth='2.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default function PhotoControls() {
  const stage = useRef<HTMLElement>(null);
  const wasDragged = useRef(false);
  const photo = useRef<HTMLImageElement>(null);
  const [index, setIndex] = useState(0);
  const change = (offset: number) => setIndex((i) => (i + offset + photos.length) % photos.length);

  return (
    <figure
      ref={stage}
      aria-label='Architectural photo gallery'
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
        draggable={false}
        style={{ height: '100%', width: '100%', objectFit: 'cover', display: 'block' }}
      />
      <div
        style={{ position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)' }}
      >
        <LiquidGlass
          role='group'
          aria-label='Photo controls'
          backdropImage={photo}
          dragWithin={stage}
          dragSnapToOrigin
          dragTransition={{ bounceStiffness: 300, bounceDamping: 10, power: 0.3 }}
          whileDrag={{ scale: 1.02, cursor: 'grabbing', zIndex: 4 }}
          onPointerDownCapture={() => {
            wasDragged.current = false;
          }}
          onDragStart={() => {
            wasDragged.current = true;
          }}
          onClickCapture={(event) => {
            if (event.detail > 0 && wasDragged.current) event.stopPropagation();
          }}
          onKeyDown={(event) => {
            if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
            event.preventDefault();
            change(event.key === 'ArrowLeft' ? -1 : 1);
          }}
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
            <Chevron previous />
          </button>
          <output
            aria-live='polite'
            style={{
              font: '600 15px system-ui',
              minWidth: 52,
              textAlign: 'center',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {index + 1} / {photos.length}
          </output>
          <button type='button' aria-label='Next photo' style={button} onClick={() => change(1)}>
            <Chevron />
          </button>
        </LiquidGlass>
      </div>
    </figure>
  );
}
