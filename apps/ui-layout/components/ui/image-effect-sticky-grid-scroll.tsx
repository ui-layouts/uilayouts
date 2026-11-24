'use client';
import React, { useRef, useState, useLayoutEffect } from 'react';

type Props = {
  images: readonly string[];
  progress?: number;
  title?: string;
  description?: string;
  className?: string;
  style?: React.CSSProperties;
};
const clamp = (v: number) => Math.min(1, Math.max(0, v));
const ease = (v: number) => (v < 0.5 ? 2 * v * v : 1 - 2 * (1 - v) ** 2);
export function StickyGridScroll({
  images,
  progress,
  title = 'Sticky Grid Scroll',
  description = 'A structured scroll-driven image grid where movement unfolds progressively within a sticky layout.',
  className,
  style,
}: Props) {
  const el = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  useLayoutEffect(() => {
    if (el.current && progress !== undefined)
      el.current.scrollTop =
        clamp(progress) * (el.current.scrollHeight - el.current.clientHeight);
  }, [progress]);
  const step = clamp((page - 0.75) / 3.5),
    zoom = ease(clamp((step - 0.35) / 0.65)),
    show = clamp((step - 0.8) * 8);
  return (
    <div
      ref={el}
      className={className}
      tabIndex={0}
      role='region'
      aria-label={title}
      onScroll={(e) =>
        setPage(
          e.currentTarget.scrollTop / Math.max(1, e.currentTarget.clientHeight)
        )
      }
      style={{
        position: 'relative',
        aspectRatio: '16/10',
        width: '100%',
        containerType: 'size',
        overflowY: 'auto',
        scrollbarWidth: 'none',
        background: '#e9e8e4',
        color: '#101010',
        ...style,
      }}
    >
      <div
        style={{
          height: '100%',
          display: 'grid',
          placeItems: 'center',
          position: 'relative',
        }}
      >
        {images.length > 0 && (
          <img
            src={images[7 % images.length]}
            alt=''
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}
        <span
          style={{
            zIndex: 1,
            textTransform: 'uppercase',
            color: 'white',
            fontSize: '1.3cqw',
          }}
        >
          Scroll-driven layout experiment
        </span>
      </div>
      <div style={{ height: '425%', position: 'relative' }}>
        <div
          style={{
            height: '100cqh',
            position: 'sticky',
            top: 0,
            overflow: 'hidden',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <div
            style={{
              width: '51.11%',
              position: 'absolute',
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              columnGap: '2.22cqw',
              rowGap: '2.78cqw',
              transform: `scale(${1 + 1.05 * zoom})`,
            }}
          >
            {images.length > 0 &&
              Array.from({ length: 12 }, (_, i) => {
                const col = i % 3,
                  row = Math.floor(i / 3),
                  dir = col === 1 ? 1 : -1;
                const reveal = ease(
                  clamp((step * 1.55 - (dir > 0 ? row : 3 - row) * 0.06) / 0.5)
                );
                const spread =
                  col === 1
                    ? (row < 2 ? -40 : 40) * ease(clamp((zoom - 0.5) * 2))
                    : 0;
                return (
                  <img
                    key={i}
                    src={images[i % images.length]}
                    alt=''
                    style={{
                      width: '100%',
                      aspectRatio: 1,
                      objectFit: 'cover',
                      transform: `translate(calc(${(col - 1) * 40 * zoom}%),calc(${dir * (1 - reveal)} * (50cqh + 34cqw) + ${spread}%))`,
                    }}
                  />
                );
              })}
          </div>
          <div
            style={{
              zIndex: 1,
              textAlign: 'center',
              width: '68%',
              pointerEvents: 'none',
            }}
          >
            <h3
              style={{
                fontFamily: 'Georgia,serif',
                fontWeight: 400,
                fontSize: '7.22cqw',
                lineHeight: 1.15,
                letterSpacing: '-.02em',
                margin: 0,
                transform: `translateY(${(1 - show) * 25}%)`,
              }}
            >
              {title}
            </h3>
            <p
              style={{
                maxWidth: '36cqw',
                margin: '1.65cqw auto 0',
                opacity: show,
                textTransform: 'uppercase',
                fontSize: '1.1cqw',
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
