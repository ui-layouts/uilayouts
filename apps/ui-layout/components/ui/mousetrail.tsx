'use client';

import { cn } from '@/lib/utils';
import { type ReactNode, useEffect, useMemo, useRef } from 'react';

export type ImageTrailVariant = 'follow' | 'momentum' | 'bounce';

export interface ImageMouseTrailProps {
  items: string[];
  children?: ReactNode;
  className?: string;
  imgClass?: string;
  /** Legacy density control. Higher values emit more images. */
  distance?: number;
  /** Distance in local CSS pixels between images. Overrides distance. */
  threshold?: number;
  maxNumberOfImages?: number;
  fadeAnimation?: boolean;
  variant?: ImageTrailVariant;
  /** Lifetime in milliseconds for fading trails. */
  duration?: number;
}

type Point = { x: number; y: number };
const finite = (value: number, fallback: number) => (Number.isFinite(value) ? value : fallback);

export default function ImageMouseTrail({
  items,
  children,
  className,
  imgClass = 'w-40 h-48',
  distance = 20,
  threshold,
  maxNumberOfImages = 5,
  fadeAnimation = false,
  variant = 'follow',
  duration = 1200,
}: ImageMouseTrailProps) {
  // Equal URL lists should not restart the trail when a parent re-renders.
  const sourceKey = JSON.stringify(items);
  const sources = useMemo<string[]>(() => JSON.parse(sourceKey), [sourceKey]);
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const poolSize = items.length
    ? Math.min(30, Math.max(1, Math.floor(finite(maxNumberOfImages, 5))))
    : 0;

  useEffect(() => {
    const container = containerRef.current;
    const layer = layerRef.current;
    if (!container || !layer || !poolSize) return;
    const images = Array.from(layer.querySelectorAll('img'));
    const animations = new Map<HTMLImageElement, Animation>();
    const ready = new Set<string>();
    let disposed = false;
    // Warm the browser cache without blocking the page behind a loader.
    const preload = [...new Set(sources)].map((src) => {
      const image = new Image();
      image.onload = () => {
        if (!disposed) ready.add(src);
      };
      image.src = src;
      if (image.complete && image.naturalWidth > 0) ready.add(src);
      return image;
    });
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let pending: Point | null = null;
    let last: Point | null = null;
    let index = 0;
    let sequence = 0;
    let order: HTMLImageElement[] = [];
    const lifetime = Math.max(400, finite(duration, 1200));

    const clear = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      pending = last = null;
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      images.forEach((image) => {
        image.style.opacity = '0';
      });
      order = [];
    };

    const emit = (at: Point, delta: Point) => {
      const available = sources.filter((src) => ready.has(src));
      if (!available.length) return;
      const image = images[index++ % images.length];
      animations.get(image)?.cancel();
      image.src = available[sequence++ % available.length];
      image.style.left = `${at.x}px`;
      image.style.top = `${at.y}px`;
      // Rebase a bounded stack instead of wrapping z-index underneath older images.
      order = order.filter((item) => item !== image);
      order.push(image);
      order.forEach((item, i) => {
        item.style.zIndex = String(i + 1);
      });
      const transform = (x = 0, y = 0, scale = 1, rotation = 0) =>
        `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`;
      const dx = Math.max(-100, Math.min(100, delta.x));
      const dy = Math.max(-100, Math.min(100, delta.y));
      let keyframes: Keyframe[];
      const fading = fadeAnimation || variant !== 'follow';
      if (reducedMotion.matches) {
        keyframes = [
          { opacity: 0, transform: transform() },
          { opacity: 1, transform: transform(), offset: 0.2 },
          { opacity: fading ? 0 : 1, transform: transform() },
        ];
      } else if (variant === 'bounce') {
        keyframes = [
          { opacity: 0, transform: transform(0, 0, 0.15), offset: 0 },
          { opacity: 1, transform: transform(0, 0, 1.14), offset: 0.18 },
          { opacity: 1, transform: transform(0, 0, 0.94), offset: 0.28 },
          { opacity: 1, transform: transform(), offset: 0.38 },
          { opacity: 1, transform: transform(), offset: 0.65 },
          { opacity: 1, transform: transform(0, 0, 1.12), offset: 0.76 },
          { opacity: 0, transform: transform(0, 0, 0), offset: 1 },
        ];
      } else if (variant === 'momentum') {
        const angle = dx * 0.12;
        keyframes = [
          { opacity: 0, transform: transform(-dx * 0.35, -dy * 0.35, 0.75, -angle), offset: 0 },
          { opacity: 1, transform: transform(0, 0, 1, angle), offset: 0.2 },
          { opacity: 1, transform: transform(dx * 0.5, dy * 0.5, 1, angle), offset: 0.55 },
          { opacity: 0, transform: transform(dx, dy + 35, 0.85, angle * 1.8), offset: 1 },
        ];
      } else {
        keyframes = [
          { opacity: 0, transform: transform(-dx * 0.5, -dy * 0.5, 0.8), offset: 0 },
          { opacity: 1, transform: transform(), offset: 0.25 },
          { opacity: 1, transform: transform(), offset: 0.6 },
          { opacity: fading ? 0 : 1, transform: transform(0, 0, fading ? 0.85 : 1), offset: 1 },
        ];
      }
      // Ease each segment without compressing the hold and rebound phases.
      for (const keyframe of keyframes) keyframe.easing = 'cubic-bezier(0.22, 1, 0.36, 1)';
      const animation = image.animate(keyframes, {
        duration: lifetime,
        fill: 'forwards',
      });
      animations.set(image, animation);
      if (fading)
        animation.onfinish = () => {
          if (animations.get(image) !== animation) return;
          image.style.opacity = '0';
          animation.cancel();
          animations.delete(image);
          order = order.filter((item) => item !== image);
        };
    };

    const render = () => {
      frame = 0;
      if (!pending) return;
      const target = pending;
      pending = null;
      if (!last) {
        emit(target, { x: 0, y: 0 });
        last = target;
        return;
      }
      const dx = target.x - last.x;
      const dy = target.y - last.y;
      const length = Math.hypot(dx, dy);
      const spacing = Math.max(
        8,
        finite(threshold ?? container.clientWidth / Math.max(1, finite(distance, 20)), 40)
      );
      // Fill gaps along fast movements, but bound work after a large pointer jump.
      const steps = Math.min(poolSize, Math.floor(length / spacing));
      const start = last;
      for (let i = 1; i <= steps; i++) {
        const fraction = steps === poolSize ? i / steps : (i * spacing) / length;
        const point = { x: start.x + dx * fraction, y: start.y + dy * fraction };
        emit(point, { x: dx / Math.max(1, steps), y: dy / Math.max(1, steps) });
        last = point;
      }
    };
    const move = (event: PointerEvent) => {
      if (!event.isPrimary || (event.pointerType === 'touch' && !event.buttons)) return;
      const rect = container.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = ((event.clientX - rect.left) * container.clientWidth) / rect.width;
      const y = ((event.clientY - rect.top) * container.clientHeight) / rect.height;
      if (x < 0 || y < 0 || x > container.clientWidth || y > container.clientHeight) return;
      pending = { x, y };
      if (!frame) frame = requestAnimationFrame(render);
    };
    const end = (event: PointerEvent) => {
      if (event.isPrimary) clear();
    };
    const leave = (event: PointerEvent) => {
      if (!event.isPrimary) return;
      cancelAnimationFrame(frame);
      frame = 0;
      pending = last = null;
      // Let an in-flight bounce/fade complete its exit after the pointer leaves.
      if (!fadeAnimation && variant === 'follow') clear();
    };
    container.addEventListener('pointermove', move, { passive: true });
    container.addEventListener('pointerleave', leave);
    container.addEventListener('pointercancel', end);
    container.addEventListener('pointerup', end);
    window.addEventListener('blur', clear);
    window.addEventListener('resize', clear);
    reducedMotion.addEventListener('change', clear);
    return () => {
      disposed = true;
      clear();
      preload.forEach((image) => {
        image.onload = null;
      });
      container.removeEventListener('pointermove', move);
      container.removeEventListener('pointerleave', leave);
      container.removeEventListener('pointercancel', end);
      container.removeEventListener('pointerup', end);
      window.removeEventListener('blur', clear);
      window.removeEventListener('resize', clear);
      reducedMotion.removeEventListener('change', clear);
    };
  }, [sources, poolSize, distance, threshold, fadeAnimation, variant, duration]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative isolate grid h-[600px] w-full place-items-center overflow-hidden rounded-lg bg-muted text-foreground',
        className
      )}
    >
      <div
        ref={layerRef}
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 z-0 overflow-hidden'
      >
        {Array.from({ length: poolSize }, (_, index) => (
          // Decorative images never capture the pointer or enter the accessibility tree.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            src={items[index % items.length]}
            alt=''
            draggable={false}
            className={cn(
              'pointer-events-none absolute left-0 top-0 object-cover opacity-0 will-change-transform',
              imgClass
            )}
          />
        ))}
      </div>
      <div className='relative z-10 w-full'>{children}</div>
    </div>
  );
}
