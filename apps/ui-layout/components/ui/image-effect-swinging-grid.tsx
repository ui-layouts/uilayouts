"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/** Adapted from Codrops' On-Scroll Column & Row Animations, variation 03. */
export interface SwingingGridProps {
  images: readonly string[];
  /** Optional contact sheet, four columns by eight rows, read left to right. */
  sheet?: string;
  labels?: readonly string[];
  time?: number;
  secondsPerImage?: number;
  className?: string;
  style?: CSSProperties;
  label?: string;
}

export function SwingingGrid({
  images,
  sheet,
  labels = [],
  time,
  secondsPerImage = 2.5,
  className,
  style,
  label = "Swinging photo grid",
}: SwingingGridProps) {
  const viewport = useRef<HTMLDivElement>(null),
    board = useRef<HTMLDivElement>(null);
  const update = useRef<(seconds: number | undefined, pace: number) => void>(
    () => {},
  );
  const controlled = Number.isFinite(time);
  const total = sheet ? 32 : images.length ? Math.max(32, images.length) : 0;
  const rows = Math.ceil(total / 4);
  useEffect(() => {
    const host = viewport.current,
      grid = board.current;
    if (!host || !grid || !total) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const tiles = Array.from(
      grid.querySelectorAll<HTMLDivElement>("[data-tile]"),
    );
    let metrics: {
      tile: HTMLElement;
      col: number;
      start: number;
      end: number;
    }[] = [];
    let frame = 0,
      offset = host.scrollTop,
      target = offset,
      last = 0,
      limit = 0;
    let clock: number | undefined,
      pace = 2.5;
    function draw() {
      grid!.style.transform =
        "translate3d(0," + (host!.scrollTop - offset) + "px,0)";
      metrics.forEach(({ tile, col, start, end }) => {
        const p = motion.matches
          ? 0
          : Math.min(
              1,
              Math.max(0, (offset - start) / Math.max(1, end - start)),
            );
        tile.style.transform = `translate(${14 * (col + 1) * p}%,${-5 * col * p}%) rotate(${2 * (col + 1) * p}deg)`;
      });
    }
    function tick(now: number) {
      frame = 0;
      const dt = last ? Math.min(60, now - last) : 16.67;
      last = now;
      offset += (target - offset) * (1 - Math.pow(0.85, dt / 16.67));
      if (Math.abs(target - offset) < 0.1) offset = target;
      draw();
      if (offset !== target) frame = requestAnimationFrame(tick);
      else last = 0;
    }
    function nativeScroll() {
      if (controlled) return;
      target = host!.scrollTop;
      if (motion.matches) {
        offset = target;
        draw();
        return;
      }
      if (!frame) frame = requestAnimationFrame(tick);
    }
    function sync() {
      if (controlled && clock !== undefined) {
        const duration = rows * pace,
          phase = (((clock % duration) + duration) % duration) / duration;
        // A down-and-back camera move closes the slideshow loop without a cut.
        offset = limit * (0.5 - 0.5 * Math.cos(phase * 2 * Math.PI));
        target = offset;
      } else offset = target = host!.scrollTop;
      draw();
    }
    function measure() {
      grid!.style.transform = "none";
      const view = host!.getBoundingClientRect(),
        scrollTop = host!.scrollTop;
      limit = Math.max(0, grid!.offsetHeight - host!.clientHeight);
      metrics = tiles.map((tile, i) => {
        const r = tile.parentElement!.getBoundingClientRect(),
          top = r.top - view.top + scrollTop;
        tile.style.transformOrigin = 1.5 * (view.right - r.left) + "px 0";
        return {
          tile,
          col: i % 4,
          start: Math.max(0, top - host!.clientHeight),
          end: Math.min(limit, top + r.height),
        };
      });
      sync();
    }
    update.current = (seconds, speed) => {
      clock = seconds;
      pace = Number.isFinite(speed) && speed > 0 ? speed : 2.5;
      sync();
    };
    const observer = new ResizeObserver(measure);
    observer.observe(host);
    observer.observe(grid);
    host.addEventListener("scroll", nativeScroll, { passive: true });
    motion.addEventListener("change", sync);
    measure();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      host.removeEventListener("scroll", nativeScroll);
      motion.removeEventListener("change", sync);
      update.current = () => {};
    };
  }, [controlled, total, rows]);
  useEffect(() => {
    update.current(time, secondsPerImage);
  }, [time, secondsPerImage, controlled, total]);
  if (!total) return null;
  return (
    <div
      ref={viewport}
      role="region"
      aria-label={label}
      tabIndex={controlled ? -1 : 0}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4 / 3",
        background: "#000",
        overflowX: "hidden",
        overflowY: controlled ? "hidden" : "auto",
        scrollbarWidth: "none",
        overscrollBehavior: "contain",
        ...style,
      }}
    >
      <div style={{ overflow: "clip" }}>
        <div
          ref={board}
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(4,minmax(0,1fr))",
            gap: 10,
            width: "calc(100% - 2rem)",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "8% 0 14%",
          }}
        >
          {Array.from({ length: total }, (_, i) => {
            const row = Math.floor(i / 4),
              col = i % 4,
              index = i % Math.max(1, images.length);
            return (
              <div key={i} style={{ minWidth: 0, aspectRatio: "3/4" }}>
                <div
                  data-tile=""
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 10,
                    overflow: "hidden",
                    backfaceVisibility: "hidden",
                    ...(sheet
                      ? {
                          backgroundImage: `url(${JSON.stringify(sheet)})`,
                          backgroundSize: "400% 800%",
                          backgroundPosition: `${(col / 3) * 100}% ${(row / 7) * 100}%`,
                        }
                      : {}),
                  }}
                  role={sheet ? "img" : undefined}
                  aria-label={
                    sheet ? (labels[i] ?? `Portrait ${i + 1}`) : undefined
                  }
                >
                  {!sheet && (
                    <img
                      alt={labels[index] ?? ""}
                      src={images[index]}
                      draggable={false}
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "50% 20%",
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
