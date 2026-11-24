"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";

export interface SpriteMorphProps {
  images: readonly string[];
  labels?: readonly string[];
  /** A six-column, four-row atlas for each image-to-next transition, including the wraparound. */
  atlases?: readonly string[];
  /** A supplied clock selects a reproducible frame in the looping slideshow. */
  time?: number;
  secondsPerImage?: number;
  className?: string;
  style?: CSSProperties;
  label?: string;
}

function wrap(value: number, count: number) {
  return ((value % count) + count) % count;
}

export function SpriteMorph({
  images,
  labels = [],
  atlases = [],
  time,
  secondsPerImage = 2.5,
  className,
  style,
  label = "Image morph",
}: SpriteMorphProps) {
  const surface = useRef<HTMLCanvasElement>(null);
  const framePosition = useRef(0),
    animation = useRef(0);
  const request = useRef(0);
  const prepare = useRef<(start: number, end: number) => Promise<unknown>>(async () => {});
  const repaint = useRef<() => void>(() => {});
  const [selection, setSelection] = useState(0);
  const [painted, setPainted] = useState(false);
  const count = images.length;
  const controlled = typeof time === "number" && Number.isFinite(time);
  const duration =
    Number.isFinite(secondsPerImage) && secondsPerImage > 0
      ? secondsPerImage
      : 2.5;
  const clock = controlled ? wrap(time! / duration, Math.max(1, count)) : 0;
  const step = Math.floor(clock),
    fraction = clock - step;
  const transition = Math.min(1, duration);
  const cursor = step + Math.max(0, 1 - ((1 - fraction) * duration) / transition);
  const selected = count
    ? wrap(controlled ? Math.round(cursor) : selection, count)
    : 0;
  const sourceKey = JSON.stringify([images, atlases]);
  useEffect(() => {
    const el = surface.current,
      ctx = el?.getContext("2d");
    if (!el || !ctx || !count) return;
    let alive = true;
    cancelAnimationFrame(animation.current);
    framePosition.current = 0;
    setSelection(0);
    setPainted(false);
    const [sources, sheets] = JSON.parse(sourceKey) as [string[], string[]];
    const bank = new Map<string, HTMLImageElement>();
    function load(src: string | undefined) {
      if (!src) return;
      const cached = bank.get(src);
      if (cached) return cached;
      const img = new Image();
      bank.set(src, img);
      img.onload = () => {
        if (alive) paint();
      };
      img.src = src;
      return img;
    }
    function ready(img?: HTMLImageElement): img is HTMLImageElement {
      return !!img?.complete && img.naturalWidth > 0;
    }
    function paint() {
      if (!alive) return;
      const pos = wrap(framePosition.current, count);
      const from = Math.floor(pos),
        next = (from + 1) % count;
      const progress = pos - from;
      const index = count === 1 ? 0 : Math.round(progress * 23);
      const first = load(sources[from]),
        second = load(sources[next]),
        sheet = index > 0 && index < 23 ? load(sheets[from]) : undefined;
      const w = el!.width,
        h = el!.height;
      const context = ctx!;
      context.clearRect(0, 0, w, h);
      function contain(
        img: HTMLImageElement,
        sx = 0,
        sy = 0,
        sw = img.naturalWidth,
        sh = img.naturalHeight,
      ) {
        const scale = Math.min(w / sw, h / sh);
        context.drawImage(
          img,
          sx,
          sy,
          sw,
          sh,
          (w - sw * scale) / 2,
          (h - sh * scale) / 2,
          sw * scale,
          sh * scale,
        );
      }
      if (index === 0 && ready(first)) {
        contain(first);
      } else if (index === 23 && ready(second)) {
        contain(second);
      } else if (ready(sheet) && sheet.naturalWidth >= 6 && sheet.naturalHeight >= 4) {
        const sw = sheet.naturalWidth / 6,
          sh = sheet.naturalHeight / 4;
        contain(sheet, (index % 6) * sw, Math.floor(index / 6) * sh, sw, sh);
      } else if (sheet && !sheet.complete && (ready(first) || ready(second))) {
        const nearest = progress < 0.5 ? first : second;
        contain(ready(nearest) ? nearest : ready(first) ? first : second!);
      } else if (ready(first) && ready(second)) {
        // When only endpoint photos are supplied, deform corresponding horizontal
        // bands toward a common waist, then release into the next silhouette.
        const t = index / 23,
          eased = t * t * (3 - 2 * t),
          strength = Math.sin(Math.PI * eased);
        for (const [img, alpha, direction] of [
          [first, 1 - eased, 1],
          [second, eased, -1],
        ] as const) {
          const fit = Math.min(w / img.naturalWidth, h / img.naturalHeight),
            width = img.naturalWidth * fit,
            height = img.naturalHeight * fit;
          const bands = Math.min(128, img.naturalHeight);
          context.globalAlpha = alpha;
          for (let i = 0; i < bands; i++) {
            const u = (i + 0.5) / bands,
              sh = img.naturalHeight / bands;
            const scale = 1 + strength * (0.11 - 0.37 * Math.sin(u * Math.PI));
            const shift =
              direction * strength * width * 0.085 * Math.sin(2 * Math.PI * u);
            context.drawImage(
              img,
              0,
              i * sh,
              img.naturalWidth,
              sh,
              (w - width * scale) / 2 + shift,
              (h - height) / 2 + (i * height) / bands,
              width * scale,
              height / bands + 0.45,
            );
          }
        }
        context.globalAlpha = 1;
      } else if (ready(first) || ready(second)) {
        contain(ready(first) ? first : second!);
      } else {
        setPainted(false);
        return;
      }
      setPainted(true);
    }
    // Warm only the atlas pairs on the chosen path. Settled portraits stay visible while decoding.
    prepare.current = (start, end) => {
      const pending: Promise<void>[] = [];
      for (let k = Math.floor(Math.min(start, end)); k < Math.ceil(Math.max(start, end)); k++) {
        const sheet = load(sheets[wrap(k, count)]);
        if (sheet) pending.push(sheet.decode());
      }
      return Promise.allSettled(pending);
    };
    repaint.current = paint;
    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2),
        box = el!.getBoundingClientRect();
      el!.width = Math.max(1, Math.round(box.width * ratio));
      el!.height = Math.max(1, Math.round(box.height * ratio));
      paint();
    }
    const observer = new ResizeObserver(resize);
    observer.observe(el);
    resize();
    // Fetch resting images first. Large sheets are loaded as transitions are requested.
    sources.forEach(load);
    return () => {
      alive = false;
      request.current++;
      prepare.current = async () => {};
      observer.disconnect();
      cancelAnimationFrame(animation.current);
      repaint.current = () => {};
      bank.forEach((img) => {
        img.onload = null;
      });
    };
  }, [sourceKey, count]);
  useEffect(() => {
    if (controlled) {
      request.current++;
      cancelAnimationFrame(animation.current);
      framePosition.current = cursor;
      repaint.current();
    }
  }, [controlled, cursor, sourceKey]);
  async function choose(i: number) {
    if (controlled || count < 2) return;
    cancelAnimationFrame(animation.current);
    const ticket = ++request.current;
    const start = framePosition.current;
    let delta = wrap(i - start, count);
    if (delta > count / 2) delta -= count;
    setSelection(i);
    if (
      matchMedia("(prefers-reduced-motion: reduce)").matches ||
      Math.abs(delta) < 0.001
    ) {
      framePosition.current = i;
      repaint.current();
      return;
    }
    await prepare.current(start, start + delta);
    if (ticket !== request.current) return;
    const epoch = performance.now();
    function tick(now: number) {
      const t = Math.min(1, (now - epoch) / 1000);
      framePosition.current = start + delta * t;
      repaint.current();
      if (t < 1) animation.current = requestAnimationFrame(tick);
    }
    animation.current = requestAnimationFrame(tick);
  }
  if (!count) return null;
  return (
    <figure
      className={className}
      aria-label={label}
      style={{
        margin: 0,
        width: "100%",
        aspectRatio: "4/3",
        maxWidth: "min(100%, 128svh)",
        marginInline: "auto",
        position: "relative",
        display: "grid",
        gridTemplateRows: "1fr auto",
        background: "transparent",
        color: "#292f26",
        ...style,
      }}
    >
      <div style={{ position: "relative", minHeight: 0 }}>
        {!painted && (
          <img
            src={images[selected]}
            alt=""
            style={{
              position: "absolute",
              inset: "5%",
              width: "90%",
              height: "90%",
              objectFit: "contain",
            }}
          />
        )}
        <canvas
          ref={surface}
          role="img"
          aria-label={labels[selected] ?? "Image " + (selected + 1)}
          style={{
            position: "absolute",
            inset: "5%",
            width: "90%",
            height: "90%",
          }}
        />
      </div>
      <figcaption
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          margin: "0 5%",
          borderTop: "1px solid #c3c5b8",
          padding: "12px 0 16px",
          font: "500 13px system-ui",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia,serif",
            fontStyle: "italic",
            fontSize: "1.2em",
          }}
        >
          {labels[selected] ?? "Image " + (selected + 1)}
        </span>
        {!controlled && count > 1 && (
          <div
            role="group"
            aria-label="Select image"
            style={{
              marginLeft: "auto",
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            {images.map((_, i) => (
              <button
                type="button"
                key={i}
                aria-pressed={selected === i}
                aria-label={labels[i] ?? "Image " + (i + 1)}
                onClick={() => choose(i)}
                style={{
                  background: selected === i ? "#323e31" : "transparent",
                  color: selected === i ? "#f4f3ea" : "inherit",
                  cursor: "pointer",
                  border: "1px solid #858d80",
                  borderRadius: 4,
                  minWidth: 34,
                  minHeight: 32,
                  font: "inherit",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        )}
      </figcaption>
    </figure>
  );
}
