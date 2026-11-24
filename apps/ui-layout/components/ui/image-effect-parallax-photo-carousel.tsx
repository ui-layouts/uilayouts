"use client";
import { useEffect, useRef, type CSSProperties } from "react";

export interface ParallaxPhotoCarouselProps {
  images: readonly string[];
  labels?: readonly string[];
  time?: number;
  secondsPerImage?: number;
  label?: string;
  style?: CSSProperties;
  className?: string;
}

/** An inward-facing panoramic ring inspired by Creative Ocean's Parallax Photo Carousel. */
export function ParallaxPhotoCarousel({
  images,
  labels = [],
  time,
  secondsPerImage = 2.5,
  label = "Parallax photo carousel",
  className,
  style,
}: ParallaxPhotoCarouselProps) {
  const host = useRef<HTMLDivElement>(null),
    ring = useRef<HTMLDivElement>(null);
  const seek = useRef<(t: number, pace: number) => void>(() => {});
  const driven = typeof time === "number" && Number.isFinite(time);
  const count = images.length === 0 ? 0 : Math.max(10, images.length);
  useEffect(() => {
    const stage = host.current,
      wheel = ring.current;
    if (!stage || !wheel || !count) return;
    const panels = Array.from(wheel.children) as HTMLElement[];
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    let rotation = 180,
      target = 180,
      pointer: number | null = null,
      lastX = 0,
      raf = 0,
      lastFrame = 0,
      width = 300,
      radius = 500;
    let elapsed = 0,
      entranceStart = performance.now();
    const step = 360 / count;
    function render() {
      wheel!.style.transform = `rotateY(${rotation}deg)`;
      panels.forEach((panel, i) => {
        const yaw = (((rotation - 180 - i * step) % 360) + 360) % 360;
        const intro = still.matches
          ? 1
          : Math.min(1, Math.max(0, (elapsed - i * 0.1) / 1.5));
        const ease = intro === 1 ? 1 : 1 - Math.pow(2, -10 * intro);
        panel.style.transform = `translateY(${((1 - ease) * width * 2) / 3}px) rotateY(${-i * step}deg) translateZ(${-radius}px)`;
        panel.style.opacity = String(ease);
        // The texture extends beyond its panel and travels independently of the ring.
        const image = panel.firstElementChild as HTMLImageElement;
        image.style.transform = `translateX(${(0.5 - yaw / 360) * width * 0.98}px)`;
      });
    }
    function resize() {
      width = Math.max(
        1,
        Math.min(300, stage!.clientWidth * 0.42, stage!.clientHeight * 0.61),
      );
      radius = (width / (2 * Math.tan(Math.PI / count))) * 1.083;
      wheel!.style.width = width + "px";
      wheel!.style.height = (width * 4) / 3 + "px";
      stage!.style.perspective = (width * 20) / 3 + "px";
      render();
    }
    function tick(now: number) {
      raf = 0;
      const dt = lastFrame ? Math.min(90, now - lastFrame) : 16.67;
      lastFrame = now;
      rotation +=
        (target - rotation) * (still.matches ? 1 : 1 - Math.exp(-dt / 100));
      elapsed = (now - entranceStart) / 1000;
      if (Math.abs(target - rotation) < 0.01) rotation = target;
      render();
      if (
        rotation !== target ||
        (!still.matches && elapsed < 1.5 + (count - 1) * 0.1)
      )
        schedule();
    }
    function schedule() {
      if (!raf) raf = requestAnimationFrame(tick);
    }
    function start(e: PointerEvent) {
      if (driven || pointer !== null || e.button !== 0) return;
      pointer = e.pointerId;
      lastX = e.clientX;
      stage!.setPointerCapture(pointer);
      stage!.style.cursor = "grabbing";
    }
    function move(e: PointerEvent) {
      if (pointer !== e.pointerId) return;
      target -= e.clientX - lastX;
      lastX = e.clientX;
      schedule();
    }
    function end(e: PointerEvent) {
      if (e.pointerId === pointer) {
        pointer = null;
        stage!.style.cursor = "grab";
      }
    }
    function key(e: KeyboardEvent) {
      if (driven || !["ArrowLeft", "ArrowRight"].includes(e.key)) return;
      e.preventDefault();
      target += e.key === "ArrowLeft" ? -step : step;
      schedule();
    }
    function changeMotion() {
      if (driven) render();
      else schedule();
    }
    seek.current = (seconds, pace) => {
      if (!driven) return;
      elapsed = Math.max(0, seconds);
      rotation = target =
        180 +
        (seconds * step) / (Number.isFinite(pace) && pace > 0 ? pace : 2.5);
      render();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(stage);
    resize();
    if (!driven) schedule();
    stage.addEventListener("pointerdown", start);
    stage.addEventListener("pointermove", move);
    stage.addEventListener("lostpointercapture", end);
    stage.addEventListener("pointerup", end);
    stage.addEventListener("pointercancel", end);
    stage.addEventListener("keydown", key);
    still.addEventListener("change", changeMotion);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      seek.current = () => {};
      stage.removeEventListener("pointerdown", start);
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("lostpointercapture", end);
      stage.removeEventListener("pointerup", end);
      stage.removeEventListener("pointercancel", end);
      stage.removeEventListener("keydown", key);
      still.removeEventListener("change", changeMotion);
    };
  }, [count, driven]);
  useEffect(() => {
    if (driven) seek.current(time!, secondsPerImage);
  }, [time, secondsPerImage, count, driven]);
  if (!count) return null;
  return (
    <div
      ref={host}
      role="region"
      aria-label={label}
      aria-keyshortcuts={driven ? undefined : "ArrowLeft ArrowRight"}
      tabIndex={driven ? -1 : 0}
      className={className}
      style={{
        width: "100%",
        aspectRatio: "4 / 3",
        position: "relative",
        background: "#000",
        overflow: "hidden",
        display: "grid",
        placeItems: "center",
        cursor: driven ? "default" : "grab",
        touchAction: driven ? "auto" : "pan-y",
        userSelect: "none",
        ...style,
      }}
    >
      <div
        ref={ring}
        style={{
          position: "relative",
          transformStyle: "preserve-3d",
          width: "40%",
          height: "65%",
        }}
      >
        {Array.from({ length: count }, (_, i) => (
          <div
            key={i}
            onPointerEnter={(e) => {
              if (!driven && e.pointerType === "mouse" && e.buttons === 0)
                for (const panel of e.currentTarget.parentElement!.children)
                  (panel.firstElementChild as HTMLElement).style.opacity =
                    panel === e.currentTarget ? "1" : ".5";
            }}
            onPointerLeave={(e) => {
              if (!driven)
                for (const panel of e.currentTarget.parentElement!.children)
                  (panel.firstElementChild as HTMLElement).style.opacity = "1";
            }}
            style={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              overflow: "hidden",
              opacity: 0,
            }}
          >
            <img
              alt={i < images.length ? (labels[i] ?? "") : ""}
              src={images[i % images.length]}
              draggable={false}
              style={{
                position: "absolute",
                left: "-50%",
                top: 0,
                width: "200%",
                maxWidth: "none",
                height: "100%",
                objectFit: "cover",
                pointerEvents: "none",
                transition: driven ? "none" : "opacity 200ms ease-out",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
