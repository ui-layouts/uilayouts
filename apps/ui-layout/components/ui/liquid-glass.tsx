'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react';
import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react';

type Intensity = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface LiquidGlassProps extends Omit<
  HTMLMotionProps<'div'>,
  'children' | 'draggable'
> {
  children?: ReactNode;
  width?: string;
  height?: string;
  borderRadius?: string;
  /** Thickness of the rounded bevel, as a fraction of the shorter side. */
  bevel?: number;
  /** Strength of the optical displacement. Zero leaves the backdrop undistorted. */
  refraction?: number;
  /** Frost radius in CSS pixels. Use zero for clear glass. */
  frost?: number;
  /** Optional object-fit: cover photograph under the glass. Supplies exact image refraction across browsers. */
  backdropImage?: RefObject<HTMLImageElement | null>;
  draggable?: boolean;
  expandable?: boolean;
  expandedWidth?: string;
  expandedHeight?: string;
  blurIntensity?: 'sm' | 'md' | 'lg' | 'xl';
  glowIntensity?: Intensity;
  shadowIntensity?: Intensity;
}

const strength = {
  none: 0,
  xs: 0.25,
  sm: 0.45,
  md: 0.65,
  lg: 0.8,
  xl: 1,
  '2xl': 1.25,
};
const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n));

/** The normal of a rounded-rectangle signed distance field feeds Snell's law.
 * The same displacement field drives live DOM backdrops and the image sampler.
 * The bevel and dispersion follow the optical approach in jeantimex/glass-effect-webgpu
 * and the rounded profile in phileeppov/glass.
 */
function displacement(
  width: number,
  height: number,
  radius: number,
  bevel: number,
  refraction: number
) {
  const factor = Math.min(1, 420 / Math.max(width, height));
  const w = Math.max(2, Math.round(width * factor)),
    h = Math.max(2, Math.round(height * factor));
  const map = document.createElement('canvas');
  map.width = w;
  map.height = h;
  const ctx = map.getContext('2d')!;
  const pixels = ctx.createImageData(w, h),
    offsets = new Float32Array(w * h * 2);
  const r = clamp(radius, 1, Math.min(width, height) / 2);
  const rim = Math.max(1.5, Math.min(width, height) * bevel);
  const extent = Math.max(1, rim * 2.4 * refraction);
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const px = ((x + 0.5) / w) * width - width / 2,
        py = ((y + 0.5) / h) * height - height / 2;
      const qx = Math.abs(px) - width / 2 + r,
        qy = Math.abs(py) - height / 2 + r;
      const ax = Math.max(qx, 0),
        ay = Math.max(qy, 0),
        length = Math.hypot(ax, ay);
      const inside = -(length + Math.min(Math.max(qx, qy), 0) - r);
      const nx = Math.sign(px) * (length ? ax / length : Number(qx > qy));
      const ny = Math.sign(py) * (length ? ay / length : Number(qy >= qx));
      const curve = clamp(1 - inside / rim, 0, 1);
      const incident = Math.asin(clamp(curve, 0, 0.997));
      const bend =
        Math.tan(incident - Math.asin(Math.sin(incident) / 1.49)) *
        rim *
        refraction;
      const i = y * w + x;
      const dx = -nx * bend,
        dy = -ny * bend;
      offsets[2 * i] = dx;
      offsets[2 * i + 1] = dy;
      pixels.data[4 * i] = clamp(128 + (127 * dx) / extent, 0, 255);
      pixels.data[4 * i + 1] = clamp(128 + (127 * dy) / extent, 0, 255);
      pixels.data[4 * i + 2] = 128;
      pixels.data[4 * i + 3] = 255;
    }
  ctx.putImageData(pixels, 0, 0);
  return { map: map.toDataURL(), offsets, w, h, scale: 2 * extent };
}

export function LiquidGlass({
  children,
  width,
  height,
  borderRadius = '32px',
  bevel = 0.16,
  refraction = 1.15,
  frost,
  backdropImage,
  draggable = false,
  expandable = false,
  expandedWidth,
  expandedHeight,
  blurIntensity,
  shadowIntensity = 'md',
  glowIntensity = 'sm',
  className,
  style,
  onClick,
  ...props
}: LiquidGlassProps) {
  const host = useRef<HTMLDivElement>(null),
    lens = useRef<HTMLCanvasElement>(null);
  const [expanded, setExpanded] = useState(false),
    [sampled, setSampled] = useState(false);
  const uid = 'liquid-' + useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const [field, setField] = useState<{ url: string; scale: number } | null>(
    null
  );
  const reduced = useReducedMotion();
  const frostPx = clamp(
    frost ??
      (blurIntensity ? { sm: 1, md: 3, lg: 6, xl: 10 }[blurIntensity] : 0.45),
    0,
    24
  );
  const refresh = useRef<() => void>(() => {});

  useEffect(() => {
    const node = host.current,
      canvas = lens.current;
    if (!node || !canvas) return;
    let task = 0;
    let optics: ReturnType<typeof displacement> | undefined;
    let original: ImageData | undefined;
    const img = backdropImage?.current;
    function readImage() {
      original = undefined;
      if (img?.complete && img.naturalWidth > 0) {
        const scratch = document.createElement('canvas');
        const k = Math.min(
          1,
          1400 / Math.max(img.naturalWidth, img.naturalHeight)
        );
        scratch.width = Math.max(1, Math.round(img.naturalWidth * k));
        scratch.height = Math.max(1, Math.round(img.naturalHeight * k));
        const ctx = scratch.getContext('2d', { willReadFrequently: true });
        if (ctx) {
          try {
            ctx.drawImage(img, 0, 0, scratch.width, scratch.height);
            original = ctx.getImageData(0, 0, scratch.width, scratch.height);
          } catch {
            /* Cross-origin images use the live backdrop. */
          }
        }
      }
      queue();
    }
    function paint() {
      task = 0;
      if (!optics || !img || !original) {
        setSampled(false);
        return;
      }
      const { w, h, offsets } = optics,
        l = canvas!,
        ctx = l.getContext('2d');
      if (!ctx) return;
      l.width = w;
      l.height = h;
      const box = node!.getBoundingClientRect(),
        bg = img.getBoundingClientRect();
      if (!bg.width || !bg.height || !box.width || !box.height) {
        setSampled(false);
        return;
      }
      const iw = original.width,
        ih = original.height,
        scale = Math.max(bg.width / iw, bg.height / ih);
      const ox = bg.left + (bg.width - iw * scale) / 2,
        oy = bg.top + (bg.height - ih * scale) / 2;
      const src = original.data,
        out = ctx.createImageData(w, h);
      for (let y = 0; y < h; y++)
        for (let x = 0; x < w; x++) {
          const i = y * w + x,
            px = box.left + ((x + 0.5) * box.width) / w,
            py = box.top + ((y + 0.5) * box.height) / h;
          for (let c = 0; c < 3; c++) {
            const spread = 1 + (1 - c) * 0.025;
            const sx = clamp(
              Math.round((px + offsets[2 * i] * spread - ox) / scale),
              0,
              iw - 1
            );
            const sy = clamp(
              Math.round((py + offsets[2 * i + 1] * spread - oy) / scale),
              0,
              ih - 1
            );
            out.data[4 * i + c] = src[4 * (sy * iw + sx) + c];
          }
          out.data[4 * i + 3] = 255;
        }
      ctx.putImageData(out, 0, 0);
      setSampled(true);
    }
    function queue() {
      if (!task) task = requestAnimationFrame(paint);
    }
    function measure() {
      const box = node!.getBoundingClientRect();
      if (box.width <= 0 || box.height <= 0) return;
      const value = getComputedStyle(node!).borderTopLeftRadius;
      const r = value.includes('%')
        ? (Math.min(box.width, box.height) * parseFloat(value)) / 100
        : parseFloat(value) || 0;
      optics = displacement(
        box.width,
        box.height,
        r,
        clamp(bevel, 0.01, 0.49),
        clamp(refraction, 0, 3)
      );
      setField({ url: optics.map, scale: optics.scale });
      queue();
    }
    refresh.current = queue;
    const resize = new ResizeObserver(measure);
    resize.observe(node);
    if (img) resize.observe(img);
    img?.addEventListener('load', readImage);
    window.addEventListener('scroll', queue, { passive: true, capture: true });
    readImage();
    measure();
    return () => {
      resize.disconnect();
      img?.removeEventListener('load', readImage);
      window.removeEventListener('scroll', queue, true);
      cancelAnimationFrame(task);
      refresh.current = () => {};
    };
  }, [backdropImage, borderRadius, bevel, refraction]);

  const rim = strength[shadowIntensity],
    shadow = strength[glowIntensity];
  const effect = field
    ? `url("#${uid}") saturate(1.15) blur(${frostPx}px)`
    : `saturate(1.15) blur(${frostPx}px)`;
  const layer = {
    position: 'absolute' as const,
    inset: 0,
    borderRadius: 'inherit',
    pointerEvents: 'none' as const,
  };
  return (
    <motion.div
      {...props}
      ref={host}
      className={className}
      style={{
        position: 'relative',
        zIndex: 0,
        borderRadius,
        width,
        height,
        boxShadow: shadow
          ? `0 ${shadow * 8}px ${shadow * 23}px rgba(13,22,25,${shadow * 0.26})`
          : undefined,
        ...style,
      }}
      animate={
        expandable
          ? {
              width: expanded
                ? (expandedWidth ?? width ?? 'auto')
                : (width ?? 'auto'),
              height: expanded
                ? (expandedHeight ?? height ?? 'auto')
                : (height ?? 'auto'),
            }
          : props.animate
      }
      transition={
        props.transition ?? { type: 'spring', stiffness: 330, damping: 30 }
      }
      drag={draggable && !reduced}
      dragConstraints={
        draggable ? { left: 0, top: 0, right: 0, bottom: 0 } : undefined
      }
      dragElastic={0.3}
      onUpdate={(latest) => {
        refresh.current();
        props.onUpdate?.(latest);
      }}
      onClick={(e) => {
        onClick?.(e);
        if (
          expandable &&
          !e.defaultPrevented &&
          !(e.target as HTMLElement).closest('a,button,input,select,textarea')
        )
          setExpanded((v) => !v);
      }}
    >
      {field && (
        <svg
          aria-hidden='true'
          width='0'
          height='0'
          style={{ position: 'absolute', pointerEvents: 'none' }}
        >
          <defs>
            <filter
              id={uid}
              x='0%'
              y='0%'
              width='100%'
              height='100%'
              colorInterpolationFilters='sRGB'
            >
              <feImage
                href={field.url}
                x='0%'
                y='0%'
                width='100%'
                height='100%'
                preserveAspectRatio='none'
                result='surface'
              />
              <feDisplacementMap
                in='SourceGraphic'
                in2='surface'
                scale={field.scale}
                xChannelSelector='R'
                yChannelSelector='G'
              />
            </filter>
          </defs>
        </svg>
      )}
      <span
        aria-hidden='true'
        style={{
          ...layer,
          overflow: 'hidden',
          zIndex: -2,
          WebkitBackdropFilter: `saturate(1.15) blur(${frostPx}px)`,
          backdropFilter: sampled ? undefined : effect,
          background: 'rgba(255,255,255,.035)',
        }}
      >
        <canvas
          ref={lens}
          style={{
            width: '100%',
            height: '100%',
            display: sampled ? 'block' : 'none',
            filter: frostPx > 0 ? `blur(${frostPx}px)` : undefined,
            transform: frostPx > 1 ? 'scale(1.08)' : undefined,
          }}
        />
      </span>
      <span
        aria-hidden='true'
        style={{
          ...layer,
          zIndex: -1,
          background:
            'linear-gradient(135deg,rgba(255,255,255,.11),transparent 37%,transparent 73%,rgba(255,255,255,.06))',
          boxShadow: rim
            ? `inset 0 0 0 1px rgba(27,38,39,${rim * 0.19}), inset 1px 1.8px 1.4px rgba(255,255,255,${0.45 + rim * 0.4}),inset -1px -1.6px 1.5px rgba(255,255,255,${0.25 + rim * 0.54}),inset 0 4px 5px rgba(255,255,255,${rim * 0.27}),inset 0 -4px 5px rgba(23,31,28,${rim * 0.22})`
            : undefined,
        }}
      />
      {children}
    </motion.div>
  );
}

/** Retains the draggable default of the original card API. */
export function LiquidGlassCard(props: LiquidGlassProps) {
  return <LiquidGlass draggable {...props} />;
}
