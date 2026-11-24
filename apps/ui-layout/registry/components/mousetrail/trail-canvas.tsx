'use client';

import { useEffect, useRef, useState } from 'react';
import ImageMouseTrail from '@/components/ui/mousetrail';
import {
  cropPicture,
  drawGooConnections,
  drawStamp,
  type TrailPicture,
  type TrailStamp,
} from './trail-canvas-draw';

type Point = { x: number; y: number };
const distance = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y);
const mix = (a: Point, b: Point, amount: number) => ({
  x: a.x + (b.x - a.x) * amount,
  y: a.y + (b.y - a.y) * amount,
});

const lifetime = 1450;
const spacing = 34;
const limit = 10;

export default function TrailCanvas({ images }: { images: string[] }) {
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
    let stamps: TrailStamp[] = [];
    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let size = { x: 144, y: 180 };
    let pointer: Point | null = null;
    let sampled: Point | null = null;
    let id = 0;

    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      pointer = sampled = null;
      stamps = [];
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
      const reduced = media.matches;
      const available = [...photos.values()];
      if (!available.length || !width || !height) return;
      ctx.clearRect(0, 0, width, height);

      const activeLifetime = reduced ? 540 : lifetime;
      stamps = stamps.filter((stamp) => now - stamp.born < activeLifetime);
      if (pointer) {
        const length = sampled ? distance(pointer, sampled) : 0;
        const step = reduced ? Math.max(75, spacing) : spacing;
        if (!sampled || length >= step) {
          const start = sampled || pointer;
          const count = sampled ? Math.min(3, Math.floor(length / step)) : 1;
          for (let i = 1; i <= count; i++) {
            sampled = mix(start, pointer, length && count < 3 ? (step * i) / length : i / count);
            stamps.push({
              image: available[id++ % available.length],
              position: sampled,
              born: now,
            });
          }
          stamps = stamps.slice(-limit);
        }
      }

      const brush = { context: ctx, size, now };
      if (!reduced) drawGooConnections(brush, stamps, activeLifetime);
      stamps.forEach((stamp) => drawStamp(brush, stamp, activeLifetime, reduced));
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
      pointer = point;
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
  }, [images]);

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
