'use client';
import { useEffect, useRef, useState } from 'react';

interface ShimmerColor {
  r: number;
  g: number;
  b: number;
}

function computeShimmerColors(
  totalWidth: number,
  shimmerPos: number,
  pulse: number
): ShimmerColor[] {
  const shimmerRadius = Math.floor(totalWidth / 2.5);
  const colors: ShimmerColor[] = [];

  for (let i = 0; i < totalWidth; i++) {
    const dist = Math.abs(i - shimmerPos);
    const shimmer = Math.max(0, 1 - dist / shimmerRadius);

    const baseR = 36 + (i / totalWidth) * 10;
    const baseG = 20 + (i / totalWidth) * 8;
    const baseB = 100 + (i / totalWidth) * 20;

    const r = baseR + (200 - baseR) * shimmer * 0.6;
    const g = baseG + (165 - baseG) * shimmer * 0.6;
    const b = baseB + (255 - baseB) * shimmer * 0.7;

    const p = 1 + pulse * 0.06;
    colors.push({
      r: Math.min(255, Math.round(r * p)),
      g: Math.min(255, Math.round(g * p)),
      b: Math.min(255, Math.round(b * p)),
    });
  }

  return colors;
}

interface ShimmerLoaderProps {
  labels: string[];
  icons: string[];
  duration: number;
  tokenTarget?: number;
  showPercent?: boolean;
  /** Font size in px. Default 14. Bar height scales automatically. */
  fontSize?: number;
  /** Vertical padding inside each cell, in px. Default 4. */
  paddingY?: number;
  /** Blank monospace cells on each side of the label. Default 2. */
  cellPadding?: number;
  /** Tailwind class for the character text color. */
  textClassName?: string;
  onComplete: () => void;
}

export function ShimmerLoader({
  labels,
  icons,
  duration,
  tokenTarget,
  showPercent = true,
  fontSize = 14,
  paddingY = 4,
  cellPadding = 2,
  textClassName = 'text-purple-200/90',
  onComplete,
}: ShimmerLoaderProps) {
  const cellsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const frameRef = useRef(0);
  const rafRef = useRef<number>(0);
  const doneRef = useRef(false);
  const lastFrameTimeRef = useRef(0);

  const [icon, setIcon] = useState(icons[0]);
  const [iconColor, setIconColor] = useState<[number, number, number]>([
    160, 110, 255,
  ]);
  const [tokens, setTokens] = useState('0.0');

  const showTokens = tokenTarget !== undefined;

  const percentBudget = showPercent ? ' 100%'.length : 0;
  const longestInner = Math.max(
    ...labels.map((l) => (' ' + l + ' ').length + percentBudget)
  );
  const barWidth = longestInner + cellPadding * 2;

  useEffect(() => {
    const fps = 40;
    const frameMs = 1000 / fps;
    const totalFrames = Math.round(duration / frameMs);
    const sliceFrames = Math.floor(totalFrames / labels.length);
    const shimmerRadius = Math.floor(barWidth / 2.5);
    const shimmerCycleLen = barWidth + shimmerRadius * 2;

    function buildContent(label: string, pct: number): string[] {
      const percentStr = showPercent ? ' ' + pct + '%' : '';
      const rawInner = ' ' + label + percentStr + ' ';
      const inner = rawInner.padEnd(longestInner);
      const padStr = ' '.repeat(cellPadding);
      return (padStr + inner + padStr).split('');
    }

    function draw(ts: number) {
      if (ts - lastFrameTimeRef.current < frameMs - 1) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }
      lastFrameTimeRef.current = ts;

      const f = frameRef.current;
      const progress = Math.min(f / totalFrames, 1);
      const pct = Math.round(progress * 100);
      const shimmerPos = ((f * 1.2) % shimmerCycleLen) - shimmerRadius;
      const pulse = Math.sin(f * 0.18);
      const done = f >= totalFrames;
      const labelIdx = Math.min(Math.floor(f / sliceFrames), labels.length - 1);
      const currentLabel = done ? labels[labels.length - 1] : labels[labelIdx];
      const currentIcon = done ? '⌘' : icons[Math.floor(f / 5) % icons.length];
      const ic = done ? 200 : Math.round(160 + pulse * 25);

      setIcon(currentIcon);
      setIconColor([ic, 110, 255]);
      if (showTokens) {
        setTokens((progress * (tokenTarget as number)).toFixed(1));
      }

      const content = buildContent(currentLabel, pct);
      const colors = computeShimmerColors(barWidth, shimmerPos, pulse);

      for (let i = 0; i < barWidth; i++) {
        const cell = cellsRef.current[i];
        if (!cell) continue;
        const { r, g, b } = colors[i];
        cell.style.backgroundColor = `rgb(${r},${g},${b})`;
        const ch = content[i] ?? ' ';
        if (cell.textContent !== ch) cell.textContent = ch;
      }

      frameRef.current = f + 1;
      if (!done) {
        rafRef.current = requestAnimationFrame(draw);
      } else if (!doneRef.current) {
        doneRef.current = true;
        onComplete();
      }
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const [ir, ig, ib] = iconColor;

  return (
    <div className='inline-flex items-center gap-2' style={{ fontSize }}>
      <span
        className='leading-none'
        style={{ color: `rgb(${ir},${ig},${ib})`, fontSize: fontSize * 1.15 }}
      >
        {icon}
      </span>

      <div
        className='inline-flex font-mono leading-none whitespace-pre'
        style={{ fontSize }}
      >
        {Array.from({ length: barWidth }).map((_, i) => (
          <span
            key={i}
            ref={(el) => {
              cellsRef.current[i] = el;
            }}
            className={`inline-block whitespace-pre ${textClassName}`}
            style={{ padding: `${paddingY}px 0` }}
          >
            {' '}
          </span>
        ))}
      </div>

      {showTokens && (
        <span
          className='text-purple-700/70 tabular-nums'
          style={{ fontSize: fontSize * 0.85 }}
        >
          {tokens}k
        </span>
      )}
    </div>
  );
}
