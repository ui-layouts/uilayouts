"use client";
import { useEffect, useRef, useState } from "react";

export interface GlassPhotoControlsProps {
  photos: readonly { src: string; alt: string }[];
  aspectRatio?: string;
  className?: string;
}

const glassShader = `
struct Params {
  scene: vec2f, image: vec2f, offset: vec2f, pane: vec2f,
  pressPoint: vec2f, pressure: f32, dpr: f32
}
@group(0) @binding(0) var photo: texture_2d<f32>;
@group(0) @binding(1) var filtering: sampler;
@group(0) @binding(2) var<uniform> p: Params;

@vertex fn vertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
  let corners = array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3));
  return vec4f(corners[i],0,1);
}
fn cover(pixel: vec2f) -> vec2f {
  let scale = max(p.scene.x / p.image.x, p.scene.y / p.image.y);
  return (pixel - p.scene*0.5) / (p.image*scale) + 0.5;
}
fn sampleAt(point: vec2f) -> vec3f {
  return textureSampleLevel(photo, filtering, cover(point + p.offset), 0).rgb;
}
@fragment fn fragment(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let point = pos.xy / p.dpr;
  let halfSize = p.pane*0.5;
  let local = point-halfSize;
  let radius = halfSize.y - 1.0;
  let nearest = vec2f(clamp(local.x, -halfSize.x+halfSize.y, halfSize.x-halfSize.y),0);
  let delta = local-nearest;
  let normal = delta / max(0.001,length(delta));
  let depth = radius-length(delta);
  let coverage = smoothstep(-0.6,0.6,depth);
  let bevel = clamp(1.0-depth/9.0,0.0,1.0);
  let angle = asin(clamp(bevel,0.0,0.995));
  let ray = tan(angle - asin(sin(angle)/1.48));
  let indent = exp(-dot(point-p.pressPoint,point-p.pressPoint)/540.0)*p.pressure;
  let uv = halfSize + local*(0.96-0.025*indent) - normal*ray*10.0 - (point-p.pressPoint)*indent*0.14;
  let spread = normal*bevel*1.4;
  var rgb = vec3f(sampleAt(uv-spread).r,sampleAt(uv).g,sampleAt(uv+spread).b);
  let sheen = pow(abs(dot(normal,normalize(vec2f(-0.65,-0.8)))),4.0);
  let rim = exp(-pow((depth-1.2)/1.25,2.0));
  rgb = rgb*(0.89+0.06*bevel) + vec3f(0.025+rim*(0.13+0.62*sheen));
  return vec4f(rgb*coverage,coverage);
}`;

export function GlassPhotoControls({
  photos,
  aspectRatio = "4 / 3",
  className,
}: GlassPhotoControlsProps) {
  const [selected, setSelected] = useState(0);
  const index = Math.min(selected, photos.length - 1);
  const photo = photos[index];
  const host = useRef<HTMLElement>(null),
    canvas = useRef<HTMLCanvasElement>(null);
  const fallback = useRef<HTMLCanvasElement>(null);
  const photoEl = useRef<HTMLImageElement>(null);
  const [enhanced, setEnhanced] = useState(false);
  const requestDraw = useRef<(() => void) | null>(null);
  const touch = useRef({ x: 0, y: 0, down: 0 });
  useEffect(() => {
    setEnhanced(false);
    const surface = canvas.current,
      scene = host.current,
      img = photoEl.current;
    if (!photo || !surface || !scene || !img || !navigator.gpu) return;
    let alive = true,
      frame = 0,
      pressure = 0,
      velocity = 0,
      previous = 0;
    let device: GPUDevice | undefined, texture: GPUTexture | undefined;
    let context: GPUCanvasContext | null = null;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new ResizeObserver(() => requestDraw.current?.());
    async function setup() {
      const adapter = await navigator.gpu.requestAdapter();
      if (!alive || !adapter) return;
      const gpu = await adapter.requestDevice();
      if (!alive) {
        gpu.destroy();
        return;
      }
      device = gpu;
      await img!.decode();
      if (!alive) return;
      context = surface!.getContext("webgpu") as GPUCanvasContext | null;
      if (!context) return;
      const format = navigator.gpu.getPreferredCanvasFormat();
      context.configure({ device: gpu, format, alphaMode: "premultiplied" });
      const module = gpu.createShaderModule({ code: glassShader });
      const pipeline = await gpu.createRenderPipelineAsync({
        layout: "auto",
        vertex: { module, entryPoint: "vertex" },
        fragment: { module, entryPoint: "fragment", targets: [{ format }] },
      });
      if (!alive) return;
      texture = gpu.createTexture({
        size: [img!.naturalWidth, img!.naturalHeight],
        format: "rgba8unorm",
        usage:
          0x04 /* TEXTURE_BINDING */ |
          0x02 /* COPY_DST */ |
          0x10 /* RENDER_ATTACHMENT */,
      });
      gpu.queue.copyExternalImageToTexture({ source: img! }, { texture }, [
        img!.naturalWidth,
        img!.naturalHeight,
      ]);
      const uniforms = gpu.createBuffer({
        size: 48,
        usage: 0x40 /* UNIFORM */ | 0x08 /* COPY_DST */,
      });
      const group = gpu.createBindGroup({
        layout: pipeline.getBindGroupLayout(0),
        entries: [
          { binding: 0, resource: texture.createView() },
          {
            binding: 1,
            resource: gpu.createSampler({
              magFilter: "linear",
              minFilter: "linear",
            }),
          },
          { binding: 2, resource: { buffer: uniforms } },
        ],
      });
      function draw(now: number) {
        frame = 0;
        if (!alive || !context) return;
        const pane = surface!.getBoundingClientRect(),
          area = scene!.getBoundingClientRect();
        const dpr = Math.min(devicePixelRatio, 2);
        const w = Math.max(1, Math.round(pane.width * dpr)),
          h = Math.max(1, Math.round(pane.height * dpr));
        if (surface!.width !== w || surface!.height !== h) {
          surface!.width = w;
          surface!.height = h;
        }
        const dt = Math.min((now - previous) / 1000, 1 / 30);
        previous = now;
        const target = reduced.matches ? 0 : touch.current.down;
        velocity += ((target - pressure) * 190 - velocity * 22) * dt;
        pressure += velocity * dt;
        gpu.queue.writeBuffer(
          uniforms,
          0,
          new Float32Array([
            area.width,
            area.height,
            img!.naturalWidth,
            img!.naturalHeight,
            pane.left - area.left,
            pane.top - area.top,
            pane.width,
            pane.height,
            touch.current.x,
            touch.current.y,
            pressure,
            dpr,
          ]),
        );
        const encoder = gpu.createCommandEncoder();
        const pass = encoder.beginRenderPass({
          colorAttachments: [
            {
              view: context.getCurrentTexture().createView(),
              clearValue: { r: 0, g: 0, b: 0, a: 0 },
              loadOp: "clear",
              storeOp: "store",
            },
          ],
        });
        pass.setPipeline(pipeline);
        pass.setBindGroup(0, group);
        pass.draw(3);
        pass.end();
        gpu.queue.submit([encoder.finish()]);
        if (Math.abs(target - pressure) + Math.abs(velocity) > 0.002)
          schedule();
      }
      function schedule() {
        if (alive && !frame) frame = requestAnimationFrame(draw);
      }
      requestDraw.current = schedule;
      observer.observe(scene!);
      observer.observe(surface!);
      schedule();
      setEnhanced(true);
      void gpu.lost.then(() => {
        if (alive) {
          cancelAnimationFrame(frame);
          requestDraw.current = null;
          setEnhanced(false);
        }
      });
    }
    void setup().catch(() => {
      if (alive) setEnhanced(false);
    });
    return () => {
      alive = false;
      observer.disconnect();
      cancelAnimationFrame(frame);
      requestDraw.current = null;
      context?.unconfigure();
      texture?.destroy();
      device?.destroy();
    };
  }, [photo?.src]);
  // Rasterize just the small lens when a WebGPU adapter is unavailable.
  useEffect(() => {
    const lens = fallback.current,
      image = photoEl.current,
      scene = host.current;
    if (enhanced || !lens || !image || !scene) return;
    const context = lens.getContext("2d", {willReadFrequently:true});
    const staging = document.createElement("canvas");
    const source = staging.getContext("2d", { willReadFrequently: true });
    if (!context || !source) return;
    function draw() {
      if (!image!.naturalWidth) return;
      const pane = lens!.getBoundingClientRect(),
        area = scene!.getBoundingClientRect();
      const w = Math.round(pane.width),
        h = Math.round(pane.height),
        pad = 20;
      if (!w || !h) return;
      lens!.width = w;
      lens!.height = h;
      staging.width = w + 2 * pad;
      staging.height = h + 2 * pad;
      const scale = Math.max(
        area.width / image!.naturalWidth,
        area.height / image!.naturalHeight,
      );
      const iw = image!.naturalWidth * scale,
        ih = image!.naturalHeight * scale;
      source!.drawImage(
        image!,
        pad + area.left - pane.left + (area.width - iw) / 2,
        pad + area.top - pane.top + (area.height - ih) / 2,
        iw,
        ih,
      );
      let pixels: ImageData;
      try {
        pixels = source!.getImageData(0, 0, staging.width, staging.height);
      } catch {
        return;
      }
      const output = context!.createImageData(w, h);
      for (let y = 0; y < h; y++)
        for (let x = 0; x < w; x++) {
          const cx = Math.max(h / 2, Math.min(w - h / 2, x + 0.5)),
            dx = x + 0.5 - cx,
            dy = y + 0.5 - h / 2;
          const distance = Math.max(0.001, Math.hypot(dx, dy)),
            depth = h / 2 - 1 - distance;
          if (depth < -0.5) continue;
          const nx = dx / distance,
            ny = dy / distance;
          const bevel = Math.max(0, Math.min(0.995, 1 - depth / 9)),
            angle = Math.asin(bevel);
          const bend = 10 * Math.tan(angle - Math.asin(bevel / 1.48));
          const sx = pad + w / 2 + (x - w / 2) * 0.96 - nx * bend,
            sy = pad + h / 2 + (y - h / 2) * 0.96 - ny * bend;
          const rim =
            Math.exp(-((depth - 1.2) ** 2) / 1.5625) *
            (0.13 + 0.62 * Math.abs(nx * 0.63 + ny * 0.77) ** 4);
          const dest = (x + y * w) * 4;
          for (let channel = 0; channel < 3; channel++) {
            const shift = (channel - 1) * bevel * 1.4;
            const offset =
              (Math.round(sx + nx * shift) +
                Math.round(sy + ny * shift) * staging.width) *
              4;
            output.data[dest + channel] =
              pixels.data[offset + channel] * (0.89 + 0.06 * bevel) +
              255 * (rim + 0.025);
          }
          output.data[dest + 3] = 255 * Math.max(0, Math.min(1, depth + 0.5));
        }
      context!.putImageData(output, 0, 0);
    }
    const observer = new ResizeObserver(draw);
    observer.observe(scene);
    observer.observe(lens);
    image.addEventListener("load", draw);
    draw();
    return () => {
      observer.disconnect();
      image.removeEventListener("load", draw);
    };
  }, [enhanced, photo?.src]);
  if (!photo) return null;
  const button = {
    width: 44,
    height: 44,
    background: "transparent",
    border: 0,
    color: "inherit",
    fontSize: 23,
    cursor: "pointer",
  } as const;
  function release() {
    touch.current.down = 0;
    requestDraw.current?.();
  }
  return (
    <figure
      ref={host}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio,
        margin: 0,
        overflow: "hidden",
        background: "#151515",
      }}
    >
      <img
        ref={photoEl}
        src={photo.src}
        crossOrigin="anonymous"
        alt={photo.alt}
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      />
      <div
        role="group"
        aria-label="Photo controls"
        onPointerDown={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          touch.current = {
            x: e.clientX - r.left,
            y: e.clientY - r.top,
            down: 1,
          };
          requestDraw.current?.();
        }}
        onPointerUp={release}
        onPointerCancel={release}
        onPointerLeave={release}
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          padding: "3px 7px",
          borderRadius: 999,
          color: "white",
          textShadow: "0 1px 4px #111",
          boxShadow: "0 4px 14px #0004",
          isolation: "isolate",
          background: enhanced ? "transparent" : "#1c233736",
          backdropFilter: enhanced ? undefined : "blur(5px) saturate(1.2)",
        }}
      >
        {!enhanced && (
          <canvas
            ref={fallback}
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              borderRadius: "inherit",
              zIndex: -1,
            }}
          />
        )}
        <canvas
          ref={canvas}
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            borderRadius: "inherit",
            opacity: enhanced ? 1 : 0,
          }}
        />
        <button
          type="button"
          aria-label="Previous photo"
          disabled={photos.length < 2}
          style={button}
          onClick={() =>
            setSelected((index + photos.length - 1) % photos.length)
          }
        >
          ‹
        </button>
        <output
          aria-live="polite"
          style={{
            font: "500 13px system-ui",
            minWidth: 42,
            textAlign: "center",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {index + 1} / {photos.length}
        </output>
        <button
          type="button"
          aria-label="Next photo"
          disabled={photos.length < 2}
          style={button}
          onClick={() => setSelected((index + 1) % photos.length)}
        >
          ›
        </button>
      </div>
    </figure>
  );
}
