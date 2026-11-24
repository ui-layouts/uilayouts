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
 * Glass Photo Controls supplies the 1.48 IOR and interior magnification.
 * Liquid Glass Grid supplies the directional reflection and Fresnel profile.
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
  const reflection = document.createElement('canvas');
  reflection.width = w;
  reflection.height = h;
  const reflectionCtx = reflection.getContext('2d')!;
  const highlights = reflectionCtx.createImageData(w, h);
  const pixels = ctx.createImageData(w, h),
    offsets = new Float32Array(w * h * 2);
  const r = clamp(radius, 1, Math.min(width, height) / 2);
  const rim = Math.max(1.5, Math.min(width, height) * bevel);
  const extent = Math.max(
    1,
    (rim * 2.4 + Math.max(width, height) * 0.025) * refraction
  );
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
        Math.tan(incident - Math.asin(Math.sin(incident) / 1.48)) *
        rim *
        refraction;
      const i = y * w + x;
      const dx = -nx * bend - px * 0.04 * refraction,
        dy = -ny * bend - py * 0.04 * refraction;
      // Reflect an overhead softbox about the bevel normal, as in the grid shader.
      const nz = Math.sqrt(Math.max(0, 1 - curve * curve));
      const alignment =
        -0.65 * (2 * nz * nx * curve) -
        0.5 * (2 * nz * ny * curve) +
        0.57 * (2 * nz * nz - 1);
      const panel = clamp((alignment - 0.82) / 0.15, 0, 1);
      const fresnel = 0.045 + 0.955 * (1 - nz) ** 5;
      highlights.data.set(
        [
          244,
          249,
          255,
          255 *
            curve *
            (0.52 * fresnel + 0.42 * panel * panel * (3 - 2 * panel)),
        ],
        4 * i
      );
      offsets[2 * i] = dx;
      offsets[2 * i + 1] = dy;
      pixels.data[4 * i] = clamp(128 + (127 * dx) / extent, 0, 255);
      pixels.data[4 * i + 1] = clamp(128 + (127 * dy) / extent, 0, 255);
      pixels.data[4 * i + 2] = 128;
      pixels.data[4 * i + 3] = 255;
    }
  ctx.putImageData(pixels, 0, 0);
  reflectionCtx.putImageData(highlights, 0, 0);
  return {
    reflection: reflection.toDataURL(),
    map: map.toDataURL(),
    offsets,
    w,
    h,
    scale: 2 * extent,
  };
}

/** One shared drawing surface serves all mounted lenses, including a page of controls. */
function createOpticsRenderer() {
  const surface = document.createElement('canvas');
  const gl = surface.getContext('webgl', {
    alpha: true,
    antialias: false,
    premultipliedAlpha: false,
  });
  if (!gl) return null;

  const vertex = `attribute vec2 corner;
    void main() { gl_Position = vec4(corner, 0., 1.); }`;
  const fragment = `
    precision highp float;
    uniform sampler2D photo;
    uniform vec2 pane, resolution, scene, offset, imageSize, finger;
    uniform float radius, bevelWidth, strength, pressure, frost;

    vec3 samplePhoto(vec2 p) {
      vec2 fitted = imageSize * max(scene.x/imageSize.x, scene.y/imageSize.y);
      return texture2D(photo, (offset + p - .5*scene)/fitted + .5).rgb;
    }
    void main() {
      vec2 point = vec2(gl_FragCoord.x, resolution.y-gl_FragCoord.y)*pane/resolution;
      vec2 local = point - .5*pane;
      vec2 q = abs(local) - .5*pane + radius;
      vec2 outside = max(q,0.);
      float lengthOutside = length(outside);
      float depth = radius - lengthOutside - min(max(q.x,q.y),0.);
      vec2 outward = sign(local) * (lengthOutside > .001 ? outside/lengthOutside :
        (q.x > q.y ? vec2(1.,0.) : vec2(0.,1.)));
      float bevel = clamp(1.-depth/bevelWidth,0.,.995);
      float angle = asin(bevel);
      float ray = tan(angle - asin(bevel/1.48));

      // Glass Photo Controls: magnification, Snell refraction, pressure well and RGB spread.
      vec2 delta = point - finger;
      float well = exp(-dot(delta,delta)/max(540.,.11*pane.y*pane.y)) * pressure;
      vec2 transmit = .5*pane + local*(1.-(.04+.025*well)*strength)
        - strength*(outward*ray*bevelWidth*1.11 + delta*well*.14);
      vec2 spread = outward*bevel*1.4*strength;
      vec3 rgb = vec3(samplePhoto(transmit-spread).r,samplePhoto(transmit).g,samplePhoto(transmit+spread).b);
      if (frost > .01) {
        vec2 f = vec2(frost,0.);
        rgb = rgb*.28 + .18*(samplePhoto(transmit+f)+samplePhoto(transmit-f)
          +samplePhoto(transmit+f.yx)+samplePhoto(transmit-f.yx));
      }

      // Liquid Glass Grid: reflect the overhead panel around the continuously curved normal.
      vec3 normal = normalize(vec3(outward*bevel - .22*well*delta/max(1.,bevelWidth),
                                   sqrt(max(.001,1.-bevel*bevel))));
      vec3 view = normalize(vec3(local/pane*.16,1.));
      vec3 reflected = reflect(-view,normal);
      float fresnel = .045+.955*pow(1.-max(0.,dot(normal,view)),5.);
      float panel = smoothstep(.82,.97,dot(reflected,normalize(vec3(-.65,-.5,.57))));
      float sheen = pow(abs(dot(outward,normalize(vec2(-.65,-.8)))),4.);
      float rimDistance = (depth-1.2)/1.25;
      float edge = exp(-rimDistance*rimDistance);
      // Environment reflections carry color from the same photograph around the meniscus.
      vec3 environment = samplePhoto(point+reflected.xy*min(pane.x,pane.y)*.55);
      rgb = mix(rgb*(.89+.06*bevel)+.025, environment, fresnel*.72);
      rgb += edge*(.13+.62*sheen) + panel*bevel*.45;
      gl_FragColor = vec4(rgb,smoothstep(-.6,.6,depth));
    }`;

  const program = gl.createProgram();
  if (!program) return null;
  for (const [kind, code] of [
    [gl.VERTEX_SHADER, vertex],
    [gl.FRAGMENT_SHADER, fragment],
  ] as const) {
    const shader = gl.createShader(kind);
    if (!shader) {
      gl.deleteProgram(program);
      return null;
    }
    gl.shaderSource(shader, code);
    gl.compileShader(shader);
    gl.attachShader(program, shader);
    gl.deleteShader(shader);
  }
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }
  gl.useProgram(program);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 3, -1, -1, 3]),
    gl.STATIC_DRAW
  );
  const corner = gl.getAttribLocation(program, 'corner');
  gl.enableVertexAttribArray(corner);
  gl.vertexAttribPointer(corner, 2, gl.FLOAT, false, 0, 0);
  const uniform = Object.fromEntries(
    [
      'pane',
      'resolution',
      'scene',
      'offset',
      'imageSize',
      'finger',
      'radius',
      'bevelWidth',
      'strength',
      'pressure',
      'frost',
    ].map((name) => [name, gl.getUniformLocation(program, name)])
  );
  return { gl, surface, uniform };
}

let sharedRenderer: ReturnType<typeof createOpticsRenderer> = null;

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
    [sampled, setSampled] = useState(false),
    [shaded, setShaded] = useState(false);
  const uid = 'liquid-' + useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const [field, setField] = useState<{
    url: string;
    reflection: string;
    scale: number;
  } | null>(null);
  const reduced = useReducedMotion();
  const frostPx = clamp(
    frost ??
      (blurIntensity ? { sm: 1, md: 3, lg: 6, xl: 10 }[blurIntensity] : 0),
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
    // All photos on the page share a GL context. Each lens owns its source texture.
    const renderer = img ? (sharedRenderer ??= createOpticsRenderer()) : null;
    const texture = renderer?.gl.createTexture();
    let uploaded = false,
      radius = 0,
      pressure = 0,
      velocity = 0,
      target = 0,
      last = 0;
    let fingerX = 0,
      fingerY = 0;
    const interaction: HTMLElement = node.closest('button') ?? node;
    function touch(event: PointerEvent) {
      if (!event.isPrimary) return;
      const rect = node!.getBoundingClientRect();
      fingerX = event.clientX - rect.left;
      fingerY = event.clientY - rect.top;
      if (event.type === 'pointerdown' && event.button === 0 && !reduced)
        target = 1;
      queue();
    }
    function release() {
      if (target) {
        target = 0;
        queue();
      }
    }
    function resetSource() {
      uploaded = false;
      original = undefined;
      queue();
    }
    function readImage() {
      resetSource();
      if (img?.complete && img.naturalWidth > 0) {
        if (renderer && texture && !renderer.gl.isContextLost()) {
          const gl = renderer.gl;
          try {
            gl.bindTexture(gl.TEXTURE_2D, texture);
            for (const axis of [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T])
              gl.texParameteri(gl.TEXTURE_2D, axis, gl.CLAMP_TO_EDGE);
            for (const filter of [gl.TEXTURE_MIN_FILTER, gl.TEXTURE_MAG_FILTER])
              gl.texParameteri(gl.TEXTURE_2D, filter, gl.LINEAR);
            gl.texImage2D(
              gl.TEXTURE_2D,
              0,
              gl.RGB,
              gl.RGB,
              gl.UNSIGNED_BYTE,
              img
            );
            uploaded = gl.getError() === gl.NO_ERROR;
          } catch {
            /* A tainted source can still use the live DOM backdrop. */
          }
        }
        if (uploaded) return;
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
    function paint(now: number) {
      task = 0;
      const dt = Math.min((now - last) / 1000, 1 / 30);
      last = now;
      velocity += ((target - pressure) * 190 - velocity * 22) * dt;
      pressure += velocity * dt;
      if (Math.abs(target - pressure) + Math.abs(velocity) > 0.002) queue();
      if (renderer && texture && uploaded && img && optics) {
        const { gl, surface, uniform } = renderer;
        const box = node!.getBoundingClientRect(),
          bg = img.getBoundingClientRect();
        const ctx = canvas!.getContext('2d');
        if (!gl.isContextLost() && ctx && bg.width && box.width && box.height) {
          const scale = Math.min(
            devicePixelRatio || 1,
            2,
            1200 / Math.max(box.width, box.height)
          );
          const w = Math.max(1, Math.round(box.width * scale)),
            h = Math.max(1, Math.round(box.height * scale));
          if (surface.width !== w) surface.width = w;
          if (surface.height !== h) surface.height = h;
          gl.viewport(0, 0, w, h);
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.uniform2f(uniform.pane, box.width, box.height);
          gl.uniform2f(uniform.resolution, w, h);
          gl.uniform2f(uniform.scene, bg.width, bg.height);
          gl.uniform2f(uniform.offset, box.left - bg.left, box.top - bg.top);
          gl.uniform2f(uniform.imageSize, img.naturalWidth, img.naturalHeight);
          gl.uniform2f(uniform.finger, fingerX, fingerY);
          gl.uniform1f(
            uniform.radius,
            Math.min(radius, box.width / 2, box.height / 2)
          );
          gl.uniform1f(
            uniform.bevelWidth,
            Math.max(
              1.5,
              Math.min(box.width, box.height) * clamp(bevel, 0.01, 0.49)
            )
          );
          gl.uniform1f(uniform.strength, clamp(refraction, 0, 3));
          gl.uniform1f(uniform.pressure, pressure);
          gl.uniform1f(uniform.frost, frostPx);
          gl.drawArrays(gl.TRIANGLES, 0, 3);
          if (canvas!.width !== w) canvas!.width = w;
          if (canvas!.height !== h) canvas!.height = h;
          ctx.clearRect(0, 0, w, h);
          ctx.drawImage(surface, 0, 0);
          setShaded(true);
          setSampled(true);
          return;
        }
      }
      setShaded(false);
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
          const fingerDx = px - box.left - fingerX,
            fingerDy = py - box.top - fingerY;
          const well =
            pressure *
            Math.exp(
              -(fingerDx * fingerDx + fingerDy * fingerDy) /
                Math.max(540, 0.11 * box.height * box.height)
            );
          for (let c = 0; c < 3; c++) {
            const spread = 1 + (1 - c) * 0.06;
            const sx = clamp(
              Math.round(
                (px + offsets[2 * i] * spread - fingerDx * well * 0.14 - ox) /
                  scale
              ),
              0,
              iw - 1
            );
            const sy = clamp(
              Math.round(
                (py +
                  offsets[2 * i + 1] * spread -
                  fingerDy * well * 0.14 -
                  oy) /
                  scale
              ),
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
      radius = r;
      optics = displacement(
        box.width,
        box.height,
        r,
        clamp(bevel, 0.01, 0.49),
        clamp(refraction, 0, 3)
      );
      setField({
        url: optics.map,
        reflection: optics.reflection,
        scale: optics.scale,
      });
      queue();
    }
    refresh.current = queue;
    const resize = new ResizeObserver(measure);
    resize.observe(node);
    if (img) resize.observe(img);
    img?.addEventListener('load', readImage);
    window.addEventListener('scroll', queue, { passive: true, capture: true });
    function contextLost() {
      if (sharedRenderer === renderer) sharedRenderer = null;
      readImage();
    }
    renderer?.surface.addEventListener('webglcontextlost', contextLost);
    interaction.addEventListener('pointerdown', touch);
    interaction.addEventListener('pointermove', touch);
    window.addEventListener('pointerup', release);
    window.addEventListener('pointercancel', release);
    window.addEventListener('blur', release);
    img?.addEventListener('error', resetSource);
    readImage();
    measure();
    return () => {
      resize.disconnect();
      renderer?.surface.removeEventListener('webglcontextlost', contextLost);
      renderer?.gl.deleteTexture(texture ?? null);
      interaction.removeEventListener('pointerdown', touch);
      interaction.removeEventListener('pointermove', touch);
      window.removeEventListener('pointerup', release);
      window.removeEventListener('pointercancel', release);
      window.removeEventListener('blur', release);
      img?.removeEventListener('error', resetSource);
      img?.removeEventListener('load', readImage);
      window.removeEventListener('scroll', queue, true);
      cancelAnimationFrame(task);
      refresh.current = () => {};
    };
  }, [backdropImage, borderRadius, bevel, refraction, frostPx, reduced]);

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
          data-optics={shaded ? 'shader' : sampled ? 'raster' : 'backdrop'}
          style={{
            width: '100%',
            height: '100%',
            display: sampled ? 'block' : 'none',
            filter: !shaded && frostPx > 0 ? `blur(${frostPx}px)` : undefined,
            transform: !shaded && frostPx > 1 ? 'scale(1.08)' : undefined,
          }}
        />
      </span>
      <span
        aria-hidden='true'
        style={{
          ...layer,
          zIndex: -1,
          display: shaded ? 'none' : undefined,
          backgroundImage: field ? `url("${field.reflection}")` : undefined,
          backgroundSize: '100% 100%',
          boxShadow: rim
            ? `inset 0 0 0 1px rgba(27,38,39,${rim * 0.19}), inset 1px 1.8px 1.4px rgba(255,255,255,${0.45 + rim * 0.4}),inset -1px -1.6px 1.5px rgba(255,255,255,${0.25 + rim * 0.54}),inset 0 -1px 2px rgba(23,31,28,${rim * 0.16})`
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
