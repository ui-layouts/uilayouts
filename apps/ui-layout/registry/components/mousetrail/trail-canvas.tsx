'use client';

import { useEffect, useRef, useState } from 'react';
import ImageMouseTrail from '@/components/ui/mousetrail';
import {
  cropPicture,
  drawGooConnections,
  drawPhoto,
  drawStamp,
  type Brush,
  type CanvasEffect,
  type TrailPicture,
  type TrailStamp,
} from './trail-canvas-draw';

type Point = { x: number; y: number };
const distance = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y);
const mix = (a: Point, b: Point, amount: number) => ({
  x: a.x + (b.x - a.x) * amount,
  y: a.y + (b.y - a.y) * amount,
});

const settings: Record<CanvasEffect, { lifetime: number; spacing: number; limit: number }> = {
  'motion-tile': { lifetime: 720, spacing: 45, limit: 12 },
  'motion-strata': { lifetime: 1750, spacing: 74, limit: 9 },
  'motion-tail': { lifetime: 650, spacing: 50, limit: 8 },
  'motion-silk': { lifetime: 1550, spacing: 86, limit: 6 },
  'motion-liquid': { lifetime: 1480, spacing: 72, limit: 6 },
  'motion-dust': { lifetime: 2100, spacing: 90, limit: 6 },
  'motion-gooey': { lifetime: 1450, spacing: 34, limit: 10 },
  'motion-swirl': { lifetime: 1500, spacing: 75, limit: 6 },
};

function pointAlong(path: Point[], offset: number) {
  for (let i = 1; i < path.length; i++) {
    const segment = distance(path[i - 1], path[i]);
    if (segment && offset <= segment) return mix(path[i - 1], path[i], offset / segment);
    offset -= segment;
  }
  return path[path.length - 1];
}

function drawTail(
  brush: Brush,
  photos: TrailPicture[],
  path: Point[],
  presence: number,
  rest: number
) {
  const { context: ctx, size } = brush;
  const count = Math.min(8, photos.length);
  const spacing = Math.min(48, size.x * 0.36) * (1 - rest) * presence;
  for (let i = count - 1; i >= 0; i--) {
    const point = pointAlong(path, spacing * i);
    const next = pointAlong(path, spacing * i + 8);
    const lean = Math.max(-0.15, Math.min(0.15, (point.x - next.x) * 0.018));
    const scale = 1 - i * 0.075;
    const width = size.x * scale;
    const height = size.y * scale;
    ctx.save();
    ctx.translate(point.x, point.y);
    ctx.rotate(lean);
    ctx.globalAlpha = presence * (i === 0 ? 1 : (1 - rest) * (1 - i * 0.07));
    drawPhoto(ctx, photos[i], -width / 2, -height / 2, width, height);
    ctx.restore();
  }
}

export default function TrailCanvas({
  effect,
  images,
}: {
  effect: CanvasEffect;
  images: string[];
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const canvas = ref.current;
    const stage = canvas?.parentElement;
    if (!canvas || !stage) return;
    const context = canvas.getContext('2d');
    if (!context) {
      setUnavailable(true);
      return;
    }
    const ctx = context;

    const photos = new Map<string, TrailPicture>();
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const { lifetime, spacing, limit } = settings[effect];
    let stamps: TrailStamp[] = [];
    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let size = { x: 144, y: 180 };
    let pointer: Point | null = null;
    let previousPointer: Point | null = null;
    let sampled: Point | null = null;
    let velocity = { x: 0, y: 0 };
    let movedAt = -Infinity;
    let prevTime = 0;
    let id = 0;
    let path: Point[] = [];
    let showTail = 0;

    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      pointer = previousPointer = sampled = null;
      stamps = [];
      path = [];
      showTail = 0;
      movedAt = -Infinity;
      prevTime = 0;
      velocity = { x: 0, y: 0 };
      ctx.clearRect(0, 0, width, height);
    };

    const resize = () => {
      const newWidth = stage.clientWidth;
      const newHeight = stage.clientHeight;
      const newDpr = Math.min(window.devicePixelRatio || 1, 2);
      if (width === newWidth && height === newHeight && dpr === newDpr) return;
      reset();
      width = newWidth;
      height = newHeight;
      dpr = newDpr;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cardWidth = Math.min(166, Math.max(74, width * 0.2));
      size = { x: cardWidth, y: cardWidth / 0.8 };
    };

    function queueFrame() {
      if (!frame) frame = requestAnimationFrame(render);
    }

    function render(now: number) {
      frame = 0;
      const elapsed = prevTime ? Math.min(50, now - prevTime) : 16;
      prevTime = now;
      const reduced = media.matches;
      const available = [...photos.values()];
      if (!available.length || !width || !height) return;
      ctx.clearRect(0, 0, width, height);
      const wantTail = effect === 'motion-tail' && !reduced;
      const timeSinceMove = Math.max(0, now - movedAt);

      if (pointer && wantTail) {
        const head = path[0] ? mix(path[0], pointer, 1 - 0.7 ** (elapsed / 16)) : pointer;
        if (!path.length || distance(head, path[0]) > 1) {
          path.unshift(head);
          if (path.length > 240) path.pop();
        }
        showTail = Math.min(1, showTail + elapsed / 220);
      }

      if (wantTail && path.length) {
        const rest = Math.min(1, Math.max(0, (timeSinceMove - 300) / 370));
        const presence = showTail * Math.max(0, 1 - (timeSinceMove - 625) / 360);
        if (presence > 0) {
          drawTail(
            { context: ctx, size, pointer: pointer || path[0], velocity, now },
            available,
            path,
            Math.min(showTail, presence),
            rest
          );
          queueFrame();
        } else {
          path = [];
          showTail = 0;
        }
        return;
      }

      const activeLifetime = reduced ? 540 : lifetime;
      stamps = stamps.filter((stamp) => now - stamp.born < activeLifetime);
      if (pointer) {
        const length = sampled ? distance(pointer, sampled) : 0;
        const step = reduced ? Math.max(75, spacing) : spacing;
        if (!sampled || length >= step) {
          const start = sampled || pointer;
          const count = sampled ? Math.min(3, Math.floor(length / step)) : 1;
          const direction = length
            ? { x: (pointer.x - start.x) / length, y: (pointer.y - start.y) / length }
            : { x: 1, y: 0 };
          for (let i = 1; i <= count; i++) {
            sampled = mix(start, pointer, length && count < 3 ? (step * i) / length : i / count);
            stamps.push({
              image: available[id % available.length],
              position: sampled,
              direction,
              born: now,
              seed: id++,
            });
          }
          stamps = stamps.slice(-limit);
        }
      }

      velocity = mix(velocity, { x: 0, y: 0 }, Math.min(1, elapsed / 150));
      const brush = {
        context: ctx,
        size,
        now,
        pointer: pointer || previousPointer || { x: -1000, y: -1000 },
        velocity,
      };
      if (effect === 'motion-gooey' && !reduced) drawGooConnections(brush, stamps, activeLifetime);
      stamps.forEach((stamp) => drawStamp(brush, stamp, effect, activeLifetime, reduced));
      if (stamps.length) queueFrame();
    }

    const preload = [...new Set(images)].map((src) => {
      const image = new Image();
      const ready = () => {
        if (!image.naturalWidth) return;
        photos.set(src, cropPicture(image));
        if (pointer) queueFrame();
      };
      image.onload = ready;
      image.src = src;
      if (image.complete) ready();
      return image;
    });

    const leave = () => {
      pointer = null;
      sampled = null;
      previousPointer = null;
      movedAt = Math.min(movedAt, performance.now() - 300);
    };

    const input = (event: PointerEvent) => {
      if (!event.isPrimary || (event.pointerType === 'touch' && !event.buttons)) return;
      const rect = stage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const point = {
        x: ((event.clientX - rect.left) * width) / rect.width,
        y: ((event.clientY - rect.top) * height) / rect.height,
      };
      if (point.x < 0 || point.y < 0 || point.x > width || point.y > height) {
        leave();
        return;
      }
      const now = performance.now();
      if (previousPointer) {
        const dt = Math.max(10, now - movedAt);
        const clampSpeed = (value: number) => Math.max(-2.5, Math.min(2.5, value / dt));
        velocity = {
          x: clampSpeed(point.x - previousPointer.x),
          y: clampSpeed(point.y - previousPointer.y),
        };
      }
      if (effect === 'motion-tail' && now - movedAt > 985) {
        path = [];
        showTail = 0;
      }
      pointer = previousPointer = point;
      movedAt = now;
      queueFrame();
    };

    const release = (event: PointerEvent) => {
      if (event.isPrimary) leave();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(stage);
    resize();
    stage.addEventListener('pointermove', input, { passive: true });
    stage.addEventListener('pointerleave', release);
    stage.addEventListener('pointerup', release);
    stage.addEventListener('pointercancel', release);
    window.addEventListener('blur', reset);
    window.addEventListener('resize', resize);
    media.addEventListener('change', reset);
    return () => {
      reset();
      observer.disconnect();
      preload.forEach((image) => {
        image.onload = null;
      });
      stage.removeEventListener('pointermove', input);
      stage.removeEventListener('pointerleave', release);
      stage.removeEventListener('pointerup', release);
      stage.removeEventListener('pointercancel', release);
      window.removeEventListener('blur', reset);
      window.removeEventListener('resize', resize);
      media.removeEventListener('change', reset);
    };
  }, [effect, images]);

  if (unavailable) {
    return (
      <ImageMouseTrail
        items={images}
        fadeAnimation
        touchAction='none'
        className='pointer-events-auto absolute inset-0 h-full bg-transparent'
      />
    );
  }

  return (
    <canvas
      ref={ref}
      aria-hidden='true'
      className='pointer-events-none absolute inset-0 size-full'
    />
  );
}
