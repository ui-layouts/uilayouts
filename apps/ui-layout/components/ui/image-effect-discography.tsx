'use client';
import React, { useRef, useState } from 'react';

type Props = {
  images: readonly string[];
  labels?: readonly string[];
  backs?: readonly string[];
  booklets?: readonly (readonly string[])[];
  previews?: readonly string[];
  progress?: number;
  className?: string;
  style?: React.CSSProperties;
};
export function Discography({
  images,
  labels,
  backs,
  booklets,
  previews,
  progress,
  className,
  style,
}: Props) {
  const [at, select] = useState(0),
    [state, set] = useState<'closed' | 'open' | 'back' | 'booklet' | 'disc'>(
      'closed'
    ),
    [page, turn] = useState(0);
  const start = useRef<number | null>(null),
    lastWheel = useRef(0);
  const idx = Math.max(
    0,
    Math.min(
      images.length - 1,
      progress === undefined ? at : Math.floor(progress * images.length)
    )
  );
  function browse(n: number) {
    select(Math.max(0, Math.min(images.length - 1, n)));
    set('closed');
    turn(0);
  }
  const pages = booklets?.[idx] ?? images;
  const button: React.CSSProperties = {
    border: 0,
    borderBottom: '1px solid currentColor',
    background: 'none',
    color: 'inherit',
    font: 'inherit',
    cursor: 'pointer',
    padding: '2px 4px',
  };
  return (
    <section
      className={className}
      tabIndex={0}
      aria-label='Discography'
      onKeyDown={(e) => {
        if (e.key === 'Escape') set('closed');
        if (e.key === 'ArrowRight') browse(idx + 1);
        if (e.key === 'ArrowLeft') browse(idx - 1);
      }}
      onWheel={(e) => {
        if (
          state !== 'closed' ||
          Math.abs(e.deltaY) + Math.abs(e.deltaX) < 5 ||
          Date.now() - lastWheel.current < 280
        )
          return;
        lastWheel.current = Date.now();
        browse(idx + Math.sign(e.deltaX || e.deltaY));
      }}
      style={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        containerType: 'size',
        aspectRatio: '16/10',
        background:
          'radial-gradient(ellipse at 48% 38%,#f6f0e5,#ebe3d4 68%,#e1d7c5)',
        color: '#252521',
        fontFamily: 'Arial,sans-serif',
        ...style,
      }}
    >
      <header
        style={{
          position: 'absolute',
          top: '6%',
          left: '5%',
          fontFamily: 'Georgia,serif',
          fontSize: '3cqw',
        }}
      >
        Discography
      </header>
      <div
        onPointerDown={(e) => {
          start.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (start.current === null) return;
          const d = e.clientX - start.current;
          start.current = null;
          if (Math.abs(d) > 30) browse(idx - Math.sign(d));
        }}
        style={{
          position: 'absolute',
          inset: '13% 0 24%',
          perspective: '110cqw',
          transformStyle: 'preserve-3d',
          touchAction: 'pan-y',
        }}
      >
        {images.map((src, i) => {
          const offset = i - idx,
            chosen = i === idx,
            open = chosen && state !== 'closed' && state !== 'back';
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: 'min(32cqw,43cqh)',
                aspectRatio: '1.12',
                transformStyle: 'preserve-3d',
                transition:
                  'transform .6s cubic-bezier(.2,.75,.25,1), opacity .3s',
                opacity: !chosen && state !== 'closed' ? 0 : 1,
                transform: `translate(-50%,-50%) translateX(${offset * 92 + (open ? 27 : 0)}%) translateZ(${-Math.min(4, Math.abs(offset)) * 7}cqw) rotateY(${chosen ? (state === 'back' ? 180 : -8) : Math.sign(offset) * -49}deg)`,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: '#353738',
                  border: '3px ridge #b7b6b3',
                  boxShadow: '1cqw 2cqw 2cqw #3a321d3b',
                  borderRadius: 3,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    height: '91%',
                    aspectRatio: 1,
                    top: '4%',
                    left: '8%',
                    borderRadius: '50%',
                    background:
                      'radial-gradient(circle, #242424 0 8%,transparent 8.5%), repeating-radial-gradient(circle, transparent 0 1px,#ffffff33 2px 3px),conic-gradient(#92959c,#e6e3bd,#8baab9,#eee,#b995b4,#92959c)',
                    transition: 'transform .5s',
                    transform:
                      state === 'disc' && chosen
                        ? 'translateY(-15%) translateX(-70%)'
                        : 'none',
                  }}
                />
              </div>
              <button
                type='button'
                aria-label={labels?.[i] ?? `Case ${i + 1}`}
                onClick={() =>
                  chosen
                    ? set(state === 'closed' ? 'open' : 'closed')
                    : browse(i)
                }
                style={{
                  position: 'absolute',
                  inset: 0,
                  padding: '2% 2% 2% 8%',
                  border: '3px ridge #bfc0bd',
                  background:
                    'linear-gradient(90deg,#464747 0 6%,#a7a9a7 6.5% 8%,#c2c2bf 8%)',
                  transformOrigin: 'left',
                  transformStyle: 'preserve-3d',
                  transform: `translateZ(2px) rotateY(${open ? -145 : 0}deg)`,
                  transition: 'transform .7s',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={state === 'back' && chosen ? (backs?.[i] ?? src) : src}
                  draggable={false}
                  alt=''
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    transform:
                      state === 'back' && chosen ? 'rotateY(180deg)' : 'none',
                  }}
                />
              </button>
            </div>
          );
        })}
        {state === 'booklet' && pages.length > 0 && (
          <button
            aria-label='Turn booklet page'
            onClick={() => turn((page + 1) % pages.length)}
            style={{
              position: 'absolute',
              inset: '4% 28%',
              border: 0,
              padding: 0,
              background: 'none',
              cursor: 'pointer',
            }}
          >
            <img
              src={pages[page % pages.length]}
              alt={`Booklet page ${page + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </button>
        )}
      </div>
      <footer
        style={{
          position: 'absolute',
          inset: 'auto 5% 5%',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'Georgia,serif',
            fontSize: '3cqw',
            marginBottom: 8,
          }}
        >
          {labels?.[idx] ?? `Album ${idx + 1}`}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 10,
            flexWrap: 'wrap',
            fontSize: 'max(10px,1.2cqw)',
          }}
        >
          <button
            style={button}
            onClick={() => browse(idx - 1)}
            disabled={!idx}
          >
            Previous
          </button>
          <button
            style={button}
            onClick={() => set(state === 'open' ? 'closed' : 'open')}
          >
            {state === 'open' ? 'Close' : 'Open case'}
          </button>
          <button
            style={button}
            onClick={() => set(state === 'back' ? 'closed' : 'back')}
          >
            Flip
          </button>
          <button
            style={button}
            onClick={() => {
              set('booklet');
              turn(0);
            }}
          >
            Booklet
          </button>
          <button
            style={button}
            onClick={() => set(state === 'disc' ? 'open' : 'disc')}
          >
            Disc
          </button>
          <button
            style={button}
            onClick={() => browse(idx + 1)}
            disabled={idx >= images.length - 1}
          >
            Next
          </button>
        </div>
        {state === 'disc' && previews?.[idx] && (
          <audio key={idx} controls preload='none' src={previews[idx]} />
        )}
      </footer>
    </section>
  );
}
