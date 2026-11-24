'use client';

import { useEffect, useId, useRef, type CSSProperties } from 'react';

export interface OnScrollFilterProps {
  images: readonly string[];
  labels?: readonly string[];
  descriptions?: readonly string[];
  time?: number;
  secondsPerImage?: number;
  className?: string;
  style?: CSSProperties;
  label?: string;
}

/* Adapted from the MIT-licensed Codrops OnScrollFilter demo.
MIT License

Copyright (c) 2009 - 2022 [Codrops](https://tympanus.net/codrops)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Values in the original SVG coordinate systems: width, height, mask radius,
// noise frequency, octave count and displacement distance.
const treatments = [
  [896, 1344, 820, 0.03, 3, 50],
  [1000, 450, 950, 0.1, 1, 100],
  [1000, 560, 0, 0.02, 3, 80],
  [1400, 560, 770, 0.5, 1, 50],
  [680, 920, 580, 0.1, 3, 150],
  [1000, 1000, 720, 0.01, 3, 150],
  [1400, 560, 770, 0.03, 1, 120],
] as const;

const layoutCss = `
.osf-root {container-type:size;overflow-x:hidden;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:#45403b #060606}
.osf-root .osf-frame {height:100cqh;width:100%;display:grid;place-items:center;position:relative;margin:0 0 19cqh}
.osf-root .osf-layout {width:94%;height:84%;display:grid;align-items:center;justify-items:center;grid-template-columns:30% minmax(0,1fr) 30%;grid-template-rows:1fr 1fr;grid-template-areas:"up art ." "copy art down";gap:1cqw;}
.osf-root .osf-art {grid-area:art;display:block;width:100%;max-height:75cqh;overflow:visible}
.osf-root .osf-pair {position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:1.9cqw;visibility:hidden;pointer-events:none}
.osf-root .osf-word {font-family:"Arial Narrow",Arial,sans-serif;font-stretch:expanded;font-size:clamp(28px,10cqw,144px);font-weight:300;line-height:.84;letter-spacing:-.065em;white-space:nowrap;position:relative;z-index:1}
.osf-root .osf-a {grid-area:up;font-style:italic;justify-self:end;align-self:start}
.osf-root .osf-b {grid-area:down;justify-self:start;align-self:end}
.osf-root .osf-pair .osf-word {align-self:center}
.osf-root .osf-copy {grid-area:copy;justify-self:end;align-self:end;text-align:right;margin:0;font:500 clamp(9px,1.28cqw,16px)/1.23 Arial,sans-serif;letter-spacing:.01em;color:#aaa;text-transform:uppercase;max-width:28em}
.osf-root .osf-v1 {grid-template-areas:"up ." "art art" "copy down";grid-template-columns:1fr 1fr;grid-template-rows:auto 1fr auto;width:67%}
.osf-root .osf-v1 .osf-a,.osf-root .osf-v6 .osf-a {justify-self:start}
.osf-root .osf-v1 .osf-b {justify-self:end}
.osf-root .osf-v1 .osf-copy {text-align:left;justify-self:start}
.osf-root .osf-v2 {grid-template-areas:"up art down" "copy copy copy";grid-template-columns:1fr 38% 1fr;grid-template-rows:1fr auto;height:67%}
.osf-root .osf-v2 .osf-a,.osf-root .osf-v2 .osf-b {align-self:center}
.osf-root .osf-v2 .osf-copy {text-align:justify;column-count:2;max-width:65%;justify-self:center}
.osf-root .osf-v3 {grid-template-areas:"up" "art" "down" "copy";grid-template-columns:1fr;grid-template-rows:auto minmax(0,1fr) auto auto}
.osf-root .osf-v3 .osf-a,.osf-root .osf-v3 .osf-b,.osf-root .osf-v3 .osf-copy {justify-self:center;text-align:center}
.osf-root .osf-v3 .osf-art {height:100%}
.osf-root .osf-v5 {grid-template-areas:"up art" "down art" "copy art";grid-template-columns:1fr 50%;grid-template-rows:auto auto 1fr;gap:0 3cqw}
.osf-root .osf-v5 .osf-b {justify-self:end;align-self:start}
.osf-root .osf-v6 {grid-template-areas:"art art" "copy up" "copy down";grid-template-columns:1fr 1fr;grid-template-rows:1fr auto auto;width:88%}
.osf-root .osf-v6 .osf-art {height:100%}
@container (max-width:500px) {
 .osf-root .osf-frame .osf-layout {width:90%;height:85%;grid-template-areas:"up down" "art art" "copy copy";grid-template-columns:1fr 1fr;grid-template-rows:auto minmax(0,1fr) auto;gap:2cqh}
 .osf-root .osf-frame .osf-a {justify-self:end;align-self:center}
 .osf-root .osf-frame .osf-b {justify-self:start;align-self:center}
 .osf-root .osf-frame .osf-copy {justify-self:center;text-align:center;column-count:1;max-width:40em}
 .osf-root .osf-frame .osf-art {height:100%;max-height:65cqh}
}
`;

function words(label: string) {
  const parts = label.trim().split(/\s+/);
  if (parts.length < 2) return [label, ''];
  const split = Math.ceil(parts.length / 2);
  return [parts.slice(0, split).join(' '), parts.slice(split).join(' ')];
}

export function OnScrollFilter({
  images,
  labels = [],
  descriptions = [],
  time,
  secondsPerImage = 3,
  className,
  style,
  label = 'Scroll filter gallery',
}: OnScrollFilterProps) {
  const root = useRef<HTMLDivElement>(null),
    applyTime = useRef<(t: number | undefined, pace: number) => void>(() => {});
  const id = 'osf-' + useId().replace(/[^A-Za-z0-9_-]/g, '');
  const contentKey = JSON.stringify([images, labels, descriptions]);
  const controlled = typeof time === 'number' && Number.isFinite(time);

  useEffect(() => {
    const host = root.current;
    if (!host) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const items = Array.from(
      host.querySelectorAll<HTMLElement>('[data-osf-item]')
    ).map((section, index) => ({
      section,
      index,
      mask: section.querySelector<SVGElement>('[data-mask]')!,
      photo: section.querySelector<SVGImageElement>('image')!,
      origin: Array.from(
        section.querySelectorAll<HTMLElement>('.osf-pair span')
      ),
      target: Array.from(
        section.querySelectorAll<HTMLElement>('.osf-layout .osf-word')
      ),
      offsets: [
        { x: 0, y: 0 },
        { x: 0, y: 0 },
      ],
      top: 0,
      height: 0,
      last: -1,
    }));
    let raf = 0,
      clock: number | undefined,
      pace = 3;
    function draw() {
      raf = 0;
      if (!host) return;
      const h = host.clientHeight,
        y = host.scrollTop;
      for (const item of items) {
        if (item.top + item.height < y - h || item.top > y + 2 * h) continue;
        const center = item.top + item.height * 0.5 - y;
        // Scrub the original 40%-viewport reveal as its title crosses the viewport.
        const p = reduced.matches
          ? 1
          : Math.max(0, Math.min(1, (0.9 * h - center) / (0.4 * h)));
        if (p === item.last) continue;
        item.last = p;
        const variant = item.index % 7;
        if (variant === 2)
          item.mask.setAttribute(
            'd',
            `M0 280 Q500 ${280 + 520 * p} 1000 280 Q500 ${280 - 480 * p} 0 280Z`
          );
        else item.mask.setAttribute('r', String(treatments[variant][2] * p));
        item.photo.style.transform =
          'scale(' + (variant === 2 ? 1 : 1 + 0.2 * p) + ')';
        item.photo.style.filter = 'brightness(' + (1 + 0.5 * p) + ')';
        item.target.forEach((word, n) => {
          const delta = item.offsets[n];
          word.style.transform = `translate(${delta.x * (1 - p)}px,${delta.y * (1 - p)}px)`;
        });
      }
    }
    function schedule() {
      if (!raf) raf = requestAnimationFrame(draw);
    }
    function seek(t: number | undefined, d: number) {
      clock = t;
      pace = d;
      if (!host || !items.length) return;
      if (typeof t === 'number' && Number.isFinite(t)) {
        const span = Number.isFinite(d) && d > 0 ? d : 3;
        const position =
          (((t / span) % items.length) + items.length) % items.length;
        const index = Math.floor(position),
          item = items[index],
          frac = position - index;
        const lead = host.clientHeight * 0.27;
        const start = Math.max(0, item.top - lead);
        const next = items[index + 1]
          ? items[index + 1].top - lead
          : host.scrollHeight - host.clientHeight;
        host.scrollTop = start + (next - start) * frac;
      }
      draw();
    }
    function measure() {
      if (!host) return;
      const base = host.getBoundingClientRect().top + host.clientTop;
      for (const item of items) {
        item.target.forEach((w) => (w.style.transform = 'none'));
        const rect = item.section.getBoundingClientRect();
        item.top = rect.top - base + host.scrollTop;
        item.height = rect.height;
        item.offsets = item.target.map((w, n) => {
          const a = item.origin[n].getBoundingClientRect(),
            b = w.getBoundingClientRect();
          return { x: a.left - b.left, y: a.top - b.top };
        });
        item.last = -1;
      }
      seek(clock, pace);
    }
    applyTime.current = seek;
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(host);
    host.addEventListener('scroll', schedule, { passive: true });
    reduced.addEventListener('change', measure);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      host.removeEventListener('scroll', schedule);
      reduced.removeEventListener('change', measure);
      applyTime.current = () => {};
    };
  }, [contentKey]);
  useEffect(
    () => applyTime.current(time, secondsPerImage),
    [time, secondsPerImage, contentKey]
  );

  return (
    <div
      ref={root}
      tabIndex={controlled ? -1 : 0}
      role='region'
      aria-label={label}
      className={['osf-root', className].filter(Boolean).join(' ')}
      style={{
        position: 'relative',
        aspectRatio: '4/3',
        width: '100%',
        background: '#050504',
        color: '#fff',
        overflowY: controlled ? 'hidden' : 'auto',
        ...style,
      }}
    >
      <style>{layoutCss}</style>
      <div style={{ paddingTop: '27cqh', paddingBottom: '38cqh' }}>
        {images.map((url, i) => {
          const v = i % 7,
            [w, h, r, freq, oct, scale] = treatments[v],
            key = id + '-' + i,
            caption = labels[i] ?? 'Image ' + (i + 1),
            [a, b] = words(caption);
          return (
            <section
              key={i}
              className='osf-frame'
              data-osf-item=''
              aria-label={caption}
            >
              <div className='osf-pair' aria-hidden='true'>
                <span className='osf-word osf-a'>{a}</span>
                <span className='osf-word osf-b'>{b}</span>
              </div>
              <div className={'osf-layout osf-v' + v}>
                <span className='osf-word osf-a'>{a}</span>
                <span className='osf-word osf-b'>{b}</span>
                <svg
                  className='osf-art'
                  width={w}
                  height={h}
                  viewBox={`0 0 ${w} ${h}`}
                  role='img'
                  aria-label={caption}
                >
                  <defs>
                    <filter
                      id={key + '-noise'}
                      x='-25%'
                      y='-25%'
                      width='150%'
                      height='150%'
                    >
                      <feTurbulence
                        type='fractalNoise'
                        baseFrequency={freq}
                        numOctaves={oct}
                        result='noise'
                      />
                      <feDisplacementMap
                        in='SourceGraphic'
                        in2='noise'
                        scale={scale}
                        xChannelSelector='R'
                        yChannelSelector='G'
                        result='edge'
                      />
                      {v === 1 && (
                        <feMorphology in='edge' operator='dilate' radius='2' />
                      )}
                      {v === 5 && (
                        <feGaussianBlur in='edge' stdDeviation='10' />
                      )}
                    </filter>
                    <mask
                      id={key + '-mask'}
                      maskUnits='userSpaceOnUse'
                      x='0'
                      y='0'
                      width={w}
                      height={h}
                    >
                      {v === 2 ? (
                        <path
                          data-mask=''
                          d='M0 280 Q500 800 1000 280 Q500 -200 0 280Z'
                          fill='white'
                          filter={`url(#${key}-noise)`}
                        />
                      ) : (
                        <circle
                          data-mask=''
                          cx={w / 2}
                          cy={h / 2}
                          r={r}
                          fill='white'
                          filter={`url(#${key}-noise)`}
                        />
                      )}
                    </mask>
                  </defs>
                  <g mask={`url(#${key}-mask)`}>
                    <image
                      href={url}
                      width={w}
                      height={h}
                      preserveAspectRatio='xMidYMid slice'
                      style={{
                        transformOrigin: 'center',
                        transformBox: 'fill-box',
                      }}
                    />
                  </g>
                </svg>
                {descriptions[i] && (
                  <p className='osf-copy'>{descriptions[i]}</p>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
