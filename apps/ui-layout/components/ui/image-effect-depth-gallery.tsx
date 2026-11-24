'use client';
import React, { useEffect, useRef } from 'react';

type Props = {
  images: readonly string[];
  labels?: readonly string[];
  swatches?: readonly string[];
  palettes?: readonly (readonly [string, string])[];
  progress?: number;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
};
const colors = [
  ['#ffdf94', '#fce7c4'],
  ['#d29a41', '#bb96af'],
  ['#f88b8d', '#cfbbdd'],
  ['#ffaa00', '#00e1ff'],
  ['#fdd895', '#a5b599'],
];
const mod = (n: number, l: number) => ((n % l) + l) % l;
export function DepthGallery({
  images,
  labels,
  swatches,
  palettes,
  progress,
  className,
  style,
  label,
}: Props) {
  const host = useRef<HTMLDivElement>(null),
    layers = useRef<HTMLDivElement>(null),
    back = useRef<HTMLDivElement>(null),
    ink = useRef<HTMLCanvasElement>(null),
    title = useRef<HTMLDivElement>(null);
  const controlled = useRef(progress);
  controlled.current = progress;
  useEffect(() => {
    const el = host.current,
      stack = layers.current,
      sky = back.current,
      canvas = ink.current,
      caption = title.current;
    if (!el || !stack || !sky || !canvas || !caption || !images.length) return;
    const ctx = canvas.getContext('2d');
    let target = 0,
      current = 0,
      x = 0.5,
      y = 0.5,
      px = x,
      py = y,
      down = false,
      lastY = 0,
      raf = 0,
      last = 0,
      index = -1;
    const trail: { x: number; y: number; life: number }[] = [];
    function wheel(e: WheelEvent) {
      e.preventDefault();
      target +=
        (Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX) *
        0.002;
    }
    function move(e: PointerEvent) {
      const b = el!.getBoundingClientRect();
      x = (e.clientX - b.left) / b.width;
      y = (e.clientY - b.top) / b.height;
      if (down) target += (lastY - e.clientY) * 0.009;
      lastY = e.clientY;
      trail.push({ x, y, life: 1 });
      if (trail.length > 80) trail.shift();
    }
    function press(e: PointerEvent) {
      lastY = e.clientY;
      down = true;
      el!.setPointerCapture(e.pointerId);
    }
    const release = () => {
      down = false;
    };
    function key(e: KeyboardEvent) {
      if (['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(e.key)) {
        e.preventDefault();
        target =
          Math.round(target) +
          (['ArrowDown', 'ArrowRight'].includes(e.key) ? 1 : -1);
      }
    }
    const resize = new ResizeObserver(() => {
      const ratio = Math.min(2, devicePixelRatio);
      canvas.width = el.clientWidth * ratio;
      canvas.height = el.clientHeight * ratio;
    });
    resize.observe(el);
    el.addEventListener('wheel', wheel, { passive: false });
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerdown', press);
    el.addEventListener('pointerup', release);
    el.addEventListener('pointercancel', release);
    el.addEventListener('keydown', key);
    function frame(now: number) {
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
      last = now;
      const previous = current;
      current =
        controlled.current === undefined
          ? current + (target - current) * (1 - Math.exp(-7 * dt))
          : controlled.current * images.length;
      const speed = Math.min(
        1,
        (Math.abs(current - previous) / Math.max(0.001, dt)) * 0.18
      );
      const base = Math.floor(current),
        fraction = current - base,
        nearest = mod(Math.round(current), images.length);
      px += (x - px) * (1 - Math.exp(-5 * dt));
      py += (y - py) * (1 - Math.exp(-5 * dt));
      if (index !== nearest) {
        index = nearest;
        caption!.textContent = [labels?.[index], swatches?.[index]]
          .filter(Boolean)
          .join(' · ');
      }
      const palette = (i: number) =>
        palettes?.[mod(i, images.length)] ??
        colors[mod(mod(i, images.length), colors.length)];
      const a = palette(base),
        b = palette(base + 1),
        mix = (k: number) =>
          `color-mix(in srgb,${a[k]} ${(1 - fraction) * 100}%,${b[k]})`;
      sky!.style.background = `radial-gradient(ellipse at ${48 + 8 * Math.sin(now * 0.0002)}% ${46 + 7 * Math.cos(now * 0.00016)}%, ${mix(0)},transparent ${45 + speed * 25}%), radial-gradient(ellipse at ${30 + px * 20}% 64%,${mix(1)},transparent 64%),#fffaf0`;
      Array.from(stack!.children).forEach((child, slot) => {
        const figure = child as HTMLElement;
        const absolute = base + slot - 1,
          n = mod(absolute, images.length),
          relative = absolute - current;
        const img = figure.firstElementChild as HTMLImageElement;
        if (img.getAttribute('src') !== images[n]) img.src = images[n];
        const scale = 1 / (1 + relative * 0.61);
        const side = [-0.34, 0.31, -0.27, 0.39, -0.27][n % 5];
        const dx =
          (side + (px - 0.5) * 0.1) *
          Math.min(el!.clientWidth, el!.clientHeight * 1.5) *
          scale;
        const dy = (py - 0.5) * el!.clientHeight * 0.1 * scale;
        figure.style.transform = `translate(-50%,-50%) translate(${dx}px,${dy}px) scale(${scale}) rotateY(${(px - 0.5) * speed * 12}deg)`;
        figure.style.zIndex = String(10 - slot);
        figure.style.opacity = String(
          Math.max(0, Math.min(1, (relative + 0.84) * 3.5)) *
            Math.exp(-Math.max(0, relative) * 0.19)
        );
      });
      if (ctx) {
        ctx.clearRect(0, 0, canvas!.width, canvas!.height);
        for (const dot of trail) {
          dot.life -= dt * 1.9;
          if (dot.life <= 0) continue;
          ctx.fillStyle = `rgba(255,255,255,${dot.life * 0.7})`;
          ctx.beginPath();
          ctx.arc(
            dot.x * canvas!.width,
            dot.y * canvas!.height,
            Math.max(0.15, 2 * dot.life),
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
        while (trail.length && trail[0].life <= 0) trail.shift();
      }
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      resize.disconnect();
      el.removeEventListener('wheel', wheel);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerdown', press);
      el.removeEventListener('pointerup', release);
      el.removeEventListener('pointercancel', release);
      el.removeEventListener('keydown', key);
    };
  }, [images, labels, swatches, palettes]);
  return (
    <div
      ref={host}
      tabIndex={0}
      role='region'
      aria-label={label ?? 'Depth gallery'}
      className={className}
      style={{
        width: '100%',
        aspectRatio: '16/10',
        position: 'relative',
        overflow: 'hidden',
        touchAction: 'none',
        containerType: 'size',
        color: '#292624',
        ...style,
      }}
    >
      <div style={{ position: 'absolute', inset: 0 }} ref={back} />
      <div
        ref={layers}
        style={{ position: 'absolute', inset: 0, perspective: '120cqw' }}
      >
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              height: '50%',
              opacity: 0,
            }}
          >
            <img
              alt=''
              draggable={false}
              style={{
                height: '100%',
                width: 'auto',
                maxWidth: 'none',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>
      <canvas
        ref={ink}
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />
      <div
        ref={title}
        style={{
          position: 'absolute',
          bottom: '7%',
          left: '6%',
          font: '500 max(12px,1.5cqw) Georgia,serif',
        }}
      />
    </div>
  );
}
