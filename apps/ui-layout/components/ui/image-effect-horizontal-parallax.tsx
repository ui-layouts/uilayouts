'use client';
import React, { useLayoutEffect, useRef } from 'react';

type Props = {
  images: readonly string[];
  progress?: number;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
};
export function HorizontalParallax({
  images,
  progress,
  label,
  className,
  style,
}: Props) {
  const host = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const el = host.current;
    if (!el) return;
    const paint = () => {
      const r = el.getBoundingClientRect(),
        mid = r.left + r.width / 2;
      for (const frame of el.querySelectorAll<HTMLElement>('figure')) {
        const f = frame.getBoundingClientRect(),
          delta = (f.left + f.width / 2 - mid) / (r.width / 2 || 1);
        const image = frame.querySelector('img');
        if (image)
          image.style.transform =
            'translate3d(' + -10 * Math.max(-1, Math.min(1, delta)) + '%,0,0)';
      }
    };
    function wheel(e: WheelEvent) {
      if (!el || Math.abs(e.deltaX) >= Math.abs(e.deltaY)) return;
      const next = Math.max(
        0,
        Math.min(el.scrollWidth - el.clientWidth, el.scrollLeft + e.deltaY)
      );
      if (next !== el.scrollLeft) {
        e.preventDefault();
        el.scrollLeft = next;
      }
    }
    const observer = new ResizeObserver(paint);
    observer.observe(el);
    paint();
    el.addEventListener('scroll', paint);
    el.addEventListener('wheel', wheel, { passive: false });
    return () => {
      observer.disconnect();
      el.removeEventListener('scroll', paint);
      el.removeEventListener('wheel', wheel);
    };
  }, [images.length]);
  useLayoutEffect(() => {
    if (host.current && progress !== undefined)
      host.current.scrollLeft =
        progress * (host.current.scrollWidth - host.current.clientWidth);
  }, [progress]);
  return (
    <div
      className={className}
      style={{
        width: '100%',
        aspectRatio: '16/10',
        display: 'grid',
        alignItems: 'center',
        background: '#f7f6f2',
        ...style,
      }}
    >
      <div
        ref={host}
        tabIndex={0}
        role='region'
        aria-label={label ?? 'Horizontal parallax photographs'}
        style={{
          height: '60%',
          display: 'flex',
          gap: '2rem',
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollbarWidth: 'none',
        }}
      >
        {images.map((src, i) => (
          <figure
            key={i}
            style={{
              flexShrink: 0,
              aspectRatio: '4/3',
              margin: 0,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img
              src={src}
              alt={`Photograph ${i + 1}`}
              draggable={false}
              style={{
                position: 'absolute',
                left: '-12.5%',
                height: '100%',
                width: '125%',
                maxWidth: 'none',
                objectFit: 'cover',
              }}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
