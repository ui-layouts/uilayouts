"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";

export interface CrtEditorialProps {
  images: readonly string[];
  captions?: readonly string[];
  /** Supplying seconds turns native scrolling into a seekable, looping slideshow. */
  time?: number;
  secondsPerImage?: number;
  className?: string;
  style?: CSSProperties;
  label?: string;
}

const vertex = `attribute vec2 position;
varying vec2 uv;
void main(){uv=vec2(position.x,-position.y)*0.5+0.5;gl_Position=vec4(position,0.,1.);}`;

// Each editorial element receives a different signal ID. The first stage tears
// its color channels separately. The second models the curved display itself.
const fragment = `precision highp float;
varying vec2 uv;
uniform sampler2D page;
uniform sampler2D ids;
uniform vec2 viewport;
uniform float clock;
float noise(vec2 p) {return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
vec3 readPage(vec2 point) {
  if(min(point.x,point.y)<0.0 || max(point.x,point.y)>1.0) return vec3(0.);
  float id=floor(texture2D(ids,point).r*255.+0.5);
  float tear=0.;
  if(id>0. && noise(vec2(id,floor(clock*43.)))>.8){
    float band=floor(point.y*14.)+sin(floor(point.y*330.+clock));
    tear=(noise(vec2(band,id+floor(clock*5.)))-.5)*.19;
  }
  vec3 wave=vec3(0.);
  if(id>0. && noise(vec2(id+10.,floor(clock*37.)))>.90)
    wave=.028*sin(point.y*vec3(7.,5.,3.)+clock+id+vec3(1.,2.,3.));
  vec3 offset=tear*vec3(.5,1.,1.5)+wave;
  return vec3(texture2D(page,point+vec2(offset.r,0.)).r,
    texture2D(page,point+vec2(offset.g,0.)).g,texture2D(page,point+vec2(offset.b,0.)).b);
}
void main(){
  vec2 centered=uv-.5;
  vec2 screen=centered*2.*vec2(viewport.x/viewport.y,1.);
  float radius=length(screen);
  float curve=.5+smoothstep(0.,1.,.3*radius*radius);
  float streak=noise(vec2(atan(screen.y,screen.x+.00001),floor(clock*60.)))*.1*radius*radius*radius;
  vec2 lens=centered*curve*(1.+streak);
  float shift=.05*radius*radius*(1.+.1*sin(lens.y*20.+clock*3.));
  vec3 rgb=vec3(readPage(.5+lens*(1.+shift)+vec2(.0015,0.)).r,
                readPage(.5+lens).g,
                readPage(.5+lens*(1.-shift)-vec2(.0015,0.)).b);
  float scan=sin(lens.y*viewport.y*.7+clock*100.)*sin(lens.y*viewport.y*.3-clock*130.);
  vec2 grid=fract((lens+.5)*20.);
  float lines=1.-smoothstep(0.,.012,min(grid.x,grid.y));
  rgb+=(.05*scan+.1*lines)*(1.-smoothstep(0.,2.,radius));
  rgb*=max(0.,1.8-radius*radius);
  rgb+=noise(gl_FragCoord.xy+floor(clock*60.))*.082;
  gl_FragColor=vec4(rgb,1.);
}`;

export function CrtEditorial({
  images,
  captions = [],
  time,
  secondsPerImage = 3,
  className,
  style,
  label = "CRT photo essay",
}: CrtEditorialProps) {
  const scroll = useRef<HTMLDivElement>(null);
  const screen = useRef<HTMLCanvasElement>(null);
  const settings = useRef({ time, secondsPerImage });
  const redraw = useRef<(() => void) | null>(null);
  const [active, setActive] = useState(false);
  const [restored, setRestored] = useState(0);
  const content = JSON.stringify(
    images.map((src, i) => [src, captions[i] ?? ""]),
  );
  const controlled = time !== undefined;
  useEffect(() => {
    settings.current = { time, secondsPerImage };
    redraw.current?.();
  }, [time, secondsPerImage]);
  useEffect(() => {
    const container = scroll.current,
      surface = screen.current;
    setActive(false);
    if (!container || !surface || !images.length) return;
    const still = matchMedia("(prefers-reduced-motion: reduce)");
    const gl = surface.getContext("webgl", { alpha: false, antialias: false });
    let frame = 0,
      alive = true,
      visible = true,
      previousOffset = NaN,
      layoutDirty = true,
      usable = !!gl;
    const program = gl?.createProgram();
    const buffer = gl?.createBuffer();
    const textures: (WebGLTexture | null)[] = [];
    if (gl && program) {
      for (const [type, source] of [
        [gl.VERTEX_SHADER, vertex],
        [gl.FRAGMENT_SHADER, fragment],
      ] as const) {
        const shader = gl.createShader(type);
        if (!shader) continue;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        gl.attachShader(program, shader);
        gl.deleteShader(shader);
      }
      gl.linkProgram(program);
      usable = gl.getProgramParameter(program, gl.LINK_STATUS);
      if (usable) {
        gl.useProgram(program);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer!);
        gl.bufferData(
          gl.ARRAY_BUFFER,
          new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
          gl.STATIC_DRAW,
        );
        const location = gl.getAttribLocation(program, "position");
        gl.enableVertexAttribArray(location);
        gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0);
        for (const [unit, name] of ["page", "ids"].entries()) {
          const texture = gl.createTexture();
          textures.push(texture);
          gl.activeTexture(gl.TEXTURE0 + unit);
          gl.bindTexture(gl.TEXTURE_2D, texture);
          for (const filter of [gl.TEXTURE_MIN_FILTER, gl.TEXTURE_MAG_FILTER])
            gl.texParameteri(
              gl.TEXTURE_2D,
              filter,
              unit === 1 ? gl.NEAREST : gl.LINEAR,
            );
          for (const wrap of [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T])
            gl.texParameteri(gl.TEXTURE_2D, wrap, gl.CLAMP_TO_EDGE);
          gl.uniform1i(gl.getUniformLocation(program, name), unit);
        }
      }
    }
    const layers = Array.from({ length: 2 }, () =>
      document.createElement("canvas"),
    );
    const [art, mask] = layers.map((layer) => layer.getContext("2d")!);
    const locTime =
      usable && gl && program ? gl.getUniformLocation(program, "clock") : null;
    const locSize =
      usable && gl && program
        ? gl.getUniformLocation(program, "viewport")
        : null;
    const elements = [
      ...container.querySelectorAll<HTMLElement>("[data-signal]"),
    ];
    type Box = {
      node: HTMLElement;
      x: number;
      y: number;
      w: number;
      h: number;
      font: string;
      size: number;
      color: string;
    };
    let boxes: Box[] = [];
    const clockStart = performance.now();
    function draw(now: number) {
      frame = 0;
      if (!alive || !visible) return;
      const state = settings.current;
      const elapsed = Number.isFinite(state.time)
        ? state.time!
        : (now - clockStart) / 1000;
      const duration =
        Math.max(0.1, state.secondsPerImage || 3) * images.length;
      const max = Math.max(
        0,
        container!.scrollHeight - container!.clientHeight,
      );
      const progress =
        (((elapsed % duration) + duration) % duration) / duration;
      if (controlled) container!.scrollTop = progress * max;
      const offset = container!.scrollTop;
      if (!usable || !gl || !program) return;
      const width = container!.clientWidth,
        height = container!.clientHeight;
      if (!width || !height) return;
      const ratio = Math.min(
        devicePixelRatio || 1,
        1.5,
        1536 / Math.max(width, height),
      );
      const w = Math.max(1, Math.round(width * ratio)),
        h = Math.max(1, Math.round(height * ratio));
      if (layoutDirty || offset !== previousOffset) {
        if (layoutDirty) {
          for (const node of [surface!, ...layers]) {
            node.width = w;
            node.height = h;
          }
          const parent = container!.getBoundingClientRect();
          boxes = elements.map((node) => {
            const rect = node.getBoundingClientRect(),
              css = getComputedStyle(node);
            return {
              node,
              x: rect.left - parent.left,
              y: rect.top - parent.top + offset,
              w: rect.width,
              h: rect.height,
              font:
                css.font ||
                css.fontWeight + " " + css.fontSize + " " + css.fontFamily,
              size: parseFloat(css.fontSize),
              color: css.color,
            };
          });
        }
        for (const ctx of [art, mask]) {
          ctx.setTransform(w / width, 0, 0, h / height, 0, 0);
          ctx.fillStyle = "#000";
          ctx.fillRect(0, 0, width, height);
        }
        boxes.forEach(
          ({ node, x, y, w: width, h: height, font, size, color }, i) => {
            const top = y - offset;
            if (top + height < 0 || top > container!.clientHeight) return;
            if (node instanceof HTMLImageElement) {
              if (!node.complete || !node.naturalWidth) return;
              const scale = Math.max(
                width / node.naturalWidth,
                height / node.naturalHeight,
              );
              const sw = width / scale,
                sh = height / scale;
              art.drawImage(
                node,
                (node.naturalWidth - sw) / 2,
                (node.naturalHeight - sh) / 2,
                sw,
                sh,
                x,
                top,
                width,
                height,
              );
            } else {
              art.save();
              art.beginPath();
              art.rect(x, top, width, height);
              art.clip();
              art.font = font;
              art.fillStyle = color;
              art.textBaseline = "middle";
              const text = node.textContent ?? "";
              const lineHeight =
                parseFloat(getComputedStyle(node).lineHeight) || size * 1.2;
              let line = "",
                lineY = top + lineHeight / 2;
              for (const word of text.split(/\s+/)) {
                const next = line ? line + " " + word : word;
                if (line && art.measureText(next).width > width) {
                  art.fillText(line, x, lineY);
                  lineY += lineHeight;
                  line = word;
                } else line = next;
              }
              art.fillText(line, x, lineY);
              art.restore();
            }
            mask.fillStyle = "rgb(" + ((i % 254) + 1) + ",0,0)";
            mask.fillRect(x, top, width, height);
          },
        );
        try {
          layers.forEach((layer, i) => {
            gl.activeTexture(gl.TEXTURE0 + i);
            gl.bindTexture(gl.TEXTURE_2D, textures[i]);
            gl.texImage2D(
              gl.TEXTURE_2D,
              0,
              gl.RGBA,
              gl.RGBA,
              gl.UNSIGNED_BYTE,
              layer,
            );
          });
        } catch {
          usable = false;
          setActive(false);
          return;
        }
        previousOffset = offset;
        layoutDirty = false;
      }
      gl.viewport(0, 0, w, h);
      gl.uniform2f(locSize, w, h);
      gl.uniform1f(locTime, still.matches ? 0 : elapsed);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      setActive(true);
      if (!controlled && !still.matches) schedule();
    }
    function schedule() {
      if (!frame && alive && visible) frame = requestAnimationFrame(draw);
    }
    function invalidate() {
      layoutDirty = true;
      schedule();
    }
    function lost(event: Event) {
      event.preventDefault();
      usable = false;
      setActive(false);
    }
    function restore() {
      setRestored((n) => n + 1);
    }
    surface.addEventListener("webglcontextlost", lost);
    surface.addEventListener("webglcontextrestored", restore);
    const resize = new ResizeObserver(invalidate);
    resize.observe(container);
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) invalidate();
    });
    visibility.observe(container);
    container.addEventListener("scroll", schedule, { passive: true });
    container.addEventListener("load", invalidate, true);
    still.addEventListener("change", invalidate);
    redraw.current = schedule;
    schedule();
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      resize.disconnect();
      visibility.disconnect();
      redraw.current = null;
      container.removeEventListener("scroll", schedule);
      container.removeEventListener("load", invalidate, true);
      still.removeEventListener("change", invalidate);
      surface.removeEventListener("webglcontextlost", lost);
      surface.removeEventListener("webglcontextrestored", restore);
      if (gl) {
        textures.forEach((t) => gl.deleteTexture(t));
        gl.deleteBuffer(buffer ?? null);
        gl.deleteProgram(program ?? null);
      }
    };
  }, [content, controlled, restored]);
  if (!images.length) return null;
  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "black",
        color: "white",
        width: "100%",
        minWidth: 0,
        aspectRatio: "4 / 3",
        ...style,
      }}
    >
      <div
        ref={scroll}
        tabIndex={controlled ? -1 : 0}
        role="region"
        aria-label={label}
        style={{
          height: "100%",
          overflowY: controlled ? "hidden" : "auto",
          overscrollBehavior: "contain",
          scrollbarWidth: "none",
          opacity: active ? 0 : 1,
          fontFamily: "Georgia,serif",
          containerType: "inline-size",
        }}
      >
        {images.map((src, i) => (
          <section
            key={i}
            style={{
              display: "flow-root",
              width: "62%",
              margin: "0 auto",
              paddingTop: i === 0 ? "12%" : "18%",
              paddingBottom: i === images.length - 1 ? "16%" : "3%",
            }}
          >
            {i % 2 === 0 && captions[i] && (
              <h2
                data-signal=""
                style={{
                  fontFamily: "inherit",
                  fontSize: "clamp(18px,5cqw,54px)",
                  fontWeight: 700,
                  lineHeight: 1.08,
                  margin: "0 0 .5em",
                }}
              >
                {captions[i]}
              </h2>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: "5%" }}>
              <img
                data-signal=""
                crossOrigin="anonymous"
                onError={(event) => {
                  const image = event.currentTarget;
                  if (image.hasAttribute("crossorigin")) {
                    image.removeAttribute("crossorigin");
                    image.src = src;
                  }
                }}
                src={src}
                alt={captions[i] || "Photograph " + (i + 1)}
                style={{
                  display: "block",
                  width: i % 2 && captions[i] ? "52%" : "100%",
                  aspectRatio: "4 / 3",
                  objectFit: "cover",
                }}
              />
              {i % 2 === 1 && captions[i] && (
                <p
                  data-signal=""
                  style={{
                    flex: 1,
                    margin: 0,
                    fontSize: "clamp(13px,2.9cqw,34px)",
                    lineHeight: 1.25,
                  }}
                >
                  {captions[i]}
                </p>
              )}
            </div>
          </section>
        ))}
      </div>
      <canvas
        ref={screen}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          opacity: active ? 1 : 0,
        }}
      />
    </div>
  );
}
