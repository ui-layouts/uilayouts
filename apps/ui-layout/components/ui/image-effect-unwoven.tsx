'use client';
import {
  useRef,
  useEffect,
  useState,
  type RefObject,
  type CSSProperties,
} from 'react';
import * as THREE from 'three';
/* MIT License

Copyright (c) 2009 - 2026 [Clément Grellier](https://clementgrellier.fr/)

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
export interface UnwovenProps {
  images: readonly string[];
  className?: string;
  style?: CSSProperties;
  label?: string;
  imageIndex?: number;
  pointer?: readonly [number, number];
  background?: string;
}
interface LayoutState {
  aspect: number;
  verticalBase: number;
  verticalPhase: number;
  path?: number;
  cameraPosition: THREE.Vector3;
  imageAspect: number;
  slot: number;
  index: number;
  offset: number;
  phase: number;
  travel: number;
  mx: number;
  my: number;
}

interface CardLayout {
  w: number;
  h: number;
  x?: number;
  y?: number;
  z?: number;
  rx?: number;
  ry?: number;
  rz?: number;
  focus?: number;
  visible?: boolean;
  textureIndex?: number;
}

interface ImageEffect {
  count: number;
  layout(state: LayoutState): CardLayout;
  vertex?: string;
  fragment?: string;
  functions?: string;
  pan?: boolean;
  vertical?: boolean;
  background?: string;
}
const gallery = (
  layout: ImageEffect['layout'],
  vertex = '',
  fragment = '',
  count = 11
) => ({
  layout,
  vertex,
  fragment,
  count,
});
// Adapted from Clément Grellier’s Unwoven. See notices/unwoven.txt.
function buildRibbonGeometry(
  width = 1,
  height = 1,
  threads = 26,
  segments = 20
) {
  const columns = segments + 1;
  const perThread = columns * 2;
  const total = threads * perThread;

  const positions = new Float32Array(total * 3);
  const uvs = new Float32Array(total * 2);
  const rims = new Float32Array(total);
  const threadIds = new Float32Array(total);
  const indices = [];

  let v = 0;
  for (let t = 0; t < threads; t++) {
    for (let row = 0; row < 2; row++) {
      const vy = (t + row) / threads; // 0 at the bottom of the card, 1 at the top
      for (let c = 0; c < columns; c++) {
        const ux = c / segments;
        positions[v * 3 + 0] = (ux - 0.5) * width;
        positions[v * 3 + 1] = (vy - 0.5) * height;
        positions[v * 3 + 2] = 0;
        uvs[v * 2 + 0] = ux;
        uvs[v * 2 + 1] = vy;
        rims[v] = row === 0 ? -1 : 1;
        threadIds[v] = t;
        v++;
      }
    }

    const base = t * perThread;
    for (let c = 0; c < segments; c++) {
      const bl = base + c;
      const br = base + c + 1;
      const tl = base + columns + c;
      const tr = base + columns + c + 1;
      indices.push(bl, br, tl, br, tr, tl);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geometry.setAttribute('aRim', new THREE.BufferAttribute(rims, 1));
  geometry.setAttribute('aThread', new THREE.BufferAttribute(threadIds, 1));
  geometry.setIndex(indices);
  return geometry;
}

const ribbonVertex = `
    attribute float aThread;   // ribbon index, 0 .. threads-1
    attribute float aRim;      // -1 at the ribbon's top edge, +1 at the bottom

    uniform float uPixels; uniform float uTime;
    uniform float uHalfWidth;  // half the viewport width, in pixels
    uniform float uZone;       // depth of the tear zone at each edge, in pixels
    uniform float uStrength;   // global 0..1 master switch, tweened on load
    uniform float uWobble;     // 0 when the user prefers reduced motion
    uniform float uSeed;       // per-card, so two cards never unravel alike

    varying vec2  vUv;
    varying float vTear;       // 0 = woven, 1 = fully unravelled
    varying float vRim;
    varying float vRandom;     // this ribbon's random value, for the fragment stage

    float hash(float n) {
      return fract(sin(n * 127.1 + 311.7) * 43758.5453);
    }

    void main() {
      vUv = uv;
      vRim = aRim;

      vec4 world = modelMatrix * vec4(position, 1.0);
      float x = world.x * uPixels;

      // How far into a tear zone is this vertex? Note both smoothsteps are
      // written low-edge-first; GLSL leaves edge0 >= edge1 undefined.
      float left  = 1.0 - smoothstep(-uHalfWidth, -uHalfWidth + uZone, x);
      float right = smoothstep(uHalfWidth - uZone, uHalfWidth, x);
      float tear  = max(left, right) * uStrength;

      // Zones never overlap the centre, so the sign of x is the escape direction.
      float direction = x < 0.0 ? -1.0 : 1.0;

      float randomA = hash(aThread + uSeed * 57.0);
      float randomB = hash(aThread * 3.7 + uSeed * 91.0);
      vRandom = randomA;

      // Bias the ramp so the card stays readable for longer, then lets go fast.
      float t = pow(tear, 1.4);

      // Each ribbon escapes at its own speed, which is what makes the edge
      // read as a comb of threads rather than one sliding sheet.
      float run = t * (60.0 + randomA * 420.0);
      run *= 0.85 + 0.15 * sin(uTime * (1.0 + randomB * 2.0) + randomA * 6.2831);
      world.x += direction * run / uPixels;

      // The weave loosens vertically too, so ribbons drift out of their rows.
      world.y += (randomA - 0.5) * 170.0 * t * t / uPixels;

      // Loose-thread flutter, sampled along the ribbon's displaced length.
      world.y += sin(world.x * uPixels * 0.02 + uTime * (1.6 + randomA * 2.2) + randomA * 6.2831)
                 * (5.0 + 13.0 * randomA) * t * uWobble / uPixels;

      vTear = tear;
      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `;
const ribbonFragment = `
    precision highp float;

    uniform sampler2D uMap;
    uniform vec2  uCardSize;    // px
    uniform float uRadius;      // px
    uniform float uImageAspect; // width / height of the texture

    varying vec2  vUv;
    varying float vTear;
    varying float vRim;
    varying float vRandom;

    float sdRoundBox(vec2 p, vec2 b, float r) {
      vec2 q = abs(p) - b + r;
      return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
    }

    void main() {
      float tear = vTear;
      float rim  = abs(vRim); // 0 at the ribbon's core, 1 at its edge

      // --- Open the weave -------------------------------------------------
      // The ribbon geometry stays a fixed height; we shrink the *visible*
      // band inside it. Doing this in the fragment stage keeps the edges
      // antialiased and lets the card be perfectly gapless when woven.
      float coreWidth = mix(0.8, 0.16 + vRandom * 0.12, smoothstep(0.0, 0.85, tear));
      float threadAlpha = 1.0 - smoothstep(coreWidth - 0.10, coreWidth + 0.06, rim);
      threadAlpha = mix(1.0, threadAlpha, smoothstep(0.03, 0.30, tear));

      // --- Card silhouette ------------------------------------------------
      vec2 p = (vUv - 0.5) * uCardSize;
      float cardAlpha = 1.0 - smoothstep(-1.5, 0.5, sdRoundBox(p, uCardSize * 0.5, uRadius));

      float fade  = 1.0 - smoothstep(0.75, 1.0, tear) * 0.65;
      float alpha = cardAlpha * threadAlpha * fade;
      if (alpha < 0.003) discard;

      // --- Sample the image, cover-fitted to the card ----------------------
      float cardAspect = uCardSize.x / uCardSize.y;
      vec2 scale = cardAspect > uImageAspect
        ? vec2(1.0, uImageAspect / cardAspect)
        : vec2(cardAspect / uImageAspect, 1.0);
      vec3 color = texture2D(uMap, (vUv - 0.5) * scale + 0.5).rgb;

      // --- Give each ribbon a round, physical read --------------------------
      color *= 1.0 - tear * 0.4 * rim * rim;                          // shade the sides
      color += tear * 0.18 * (1.0 - smoothstep(0.0, 0.45, rim));      // glint on the core
      color = mix(color, vec3(1.0), smoothstep(0.55, 1.0, tear) * 0.8); // bleach into the page

      gl_FragColor = vec4(color, alpha);
      #include <colorspace_fragment>
    }
  `;

const definition: ImageEffect = {
  ...gallery((s) => ({ x: s.offset * 0.524, w: 0.465, h: 0.62 })),
  background: '#f7f6f3',
};

function material(effect: ImageEffect) {
  const shared =
    'uniform float t,travel,phase,offset,depth,ratio,speed,focus; uniform vec3 atmosphere; uniform vec2 mouse, flex; uniform float hovered,opened; varying vec2 vUv;';
  const uniforms: Record<string, THREE.IUniform> = {};
  for (const key of [
    't',
    'travel',
    'phase',
    'offset',
    'depth',
    'ratio',
    'speed',
    'focus',
    'ratioA',
    'ratioB',
  ])
    uniforms[key] = { value: 1 };
  for (const key of ['mapA', 'mapB']) uniforms[key] = { value: null };
  uniforms.mouse = { value: new THREE.Vector2(0.5, 0.5) };
  {
    for (const key of [
      'uHalfWidth',
      'uZone',
      'uSeed',
      'uPixels',
      'uRadius',
      'uStrength',
      'uWobble',
    ])
      uniforms[key] = { value: 1 };
    uniforms.uCardSize = { value: new THREE.Vector2() };
    uniforms.uTime = uniforms.t;
    uniforms.uMap = uniforms.mapA;
    uniforms.uImageAspect = uniforms.ratioA;
    return new THREE.ShaderMaterial({
      uniforms,
      vertexShader: ribbonVertex,
      fragmentShader: ribbonFragment,
      transparent: true,
      depthWrite: false,
      depthTest: false,
    });
  }
}

function mountScene(
  host: HTMLDivElement,
  effect: ImageEffect,
  sources: readonly string[],
  props: RefObject<UnwovenProps>,
  onStatus: (status: string) => void
) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  host.appendChild(renderer.domElement);
  renderer.domElement.style.cssText = 'display:block;width:100%;height:100%';
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 40);
  camera.position.z = 0.5 / Math.tan(Math.PI / 8);
  const geometry = buildRibbonGeometry();
  const cards = Array.from({ length: effect.count }, () => {
    const card = new THREE.Mesh(geometry, material(effect));
    card.frustumCulled = false;
    scene.add(card);
    return card;
  });
  const resize = new ResizeObserver(() => {
    const { clientWidth: w, clientHeight: h } = host;
    renderer.setSize(Math.max(w, 1), Math.max(h, 1), false);
    camera.aspect = w / Math.max(h, 1);
    camera.updateProjectionMatrix();
  });
  resize.observe(host);
  let disposed = false,
    frame = 0,
    elapsed = 0,
    scroll = 0,
    targetScroll = 0,
    pointer: [number, number] | null = null,
    last: number | undefined;
  const ownedTextures: THREE.Texture[] = [];
  const textures: THREE.Texture<HTMLImageElement>[] = [],
    loader = new THREE.TextureLoader();

  const previousTouchAction = host.style.touchAction;
  host.style.touchAction = effect.pan || effect.vertical ? 'none' : 'pan-y';
  let drag: { x: number; y: number; id: number } | null = null,
    targetY = 0,
    scrollY = 0;
  const events = new AbortController();
  function listen<K extends keyof HTMLElementEventMap>(
    event: K,
    handler: (event: HTMLElementEventMap[K]) => void,
    options: AddEventListenerOptions = {}
  ) {
    host.addEventListener(event, handler, {
      ...options,
      signal: events.signal,
    });
  }
  function pan(dx: number, dy: number) {
    if (effect.pan) {
      targetScroll -= dx;
      targetY += dy;
    } else targetScroll += effect.vertical ? dy : -dx;
  }
  listen(
    'wheel',
    (e) => {
      if (e.ctrlKey) return;
      const unit =
        e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? host.clientHeight : 1;
      const scale = unit / Math.max(100, host.clientHeight * 0.6);
      if (effect.pan) pan(-e.deltaX * scale, -e.deltaY * scale);
      else
        targetScroll +=
          (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) *
          scale;
      e.preventDefault();
    },
    { passive: false }
  );
  listen('pointermove', (e) => {
    const r = host.getBoundingClientRect();
    pointer = [
      (e.clientX - r.left) / r.width,
      1 - (e.clientY - r.top) / r.height,
    ];
    if (!drag || drag.id !== e.pointerId) return;
    const unit = Math.max(100, r.height * 0.5);
    pan((e.clientX - drag.x) / unit, (e.clientY - drag.y) / unit);
    drag.x = e.clientX;
    drag.y = e.clientY;
  });
  listen('pointerdown', (e) => {
    if (e.button !== 0) return;
    host.focus({ preventScroll: true });
    host.setPointerCapture(e.pointerId);
    drag = { x: e.clientX, y: e.clientY, id: e.pointerId };
  });
  listen('lostpointercapture', () => {
    drag = null;
  });
  listen('pointerup', () => {
    drag = null;
  });
  listen('keydown', (e) => {
    const steps: Record<string, number> = {
      ArrowRight: 1,
      ArrowLeft: -1,
      ArrowUp: 1,
      ArrowDown: -1,
    };
    const step = steps[e.key];
    if (step == null) return;
    if (effect.pan && (e.key === 'ArrowUp' || e.key === 'ArrowDown'))
      targetY += step;
    else targetScroll += step;
    e.preventDefault();
  });
  host.tabIndex = 0;
  const wrap = (i: number) =>
    ((i % textures.length) + textures.length) % textures.length;
  function draw(now: number) {
    const p = props.current;
    const dt = last == null ? 0 : Math.min(0.1, (now - last) / 1000);
    const step = (targetScroll - scroll) * (1 - Math.exp(-10 * dt));
    const stepY = (targetY - scrollY) * (1 - Math.exp(-10 * dt));
    scroll += step;
    scrollY += stepY;
    const speed = dt > 0 ? step / dt : 0;
    if (last != null) elapsed += Math.min(0.1, (now - last) / 1000);
    last = now;
    const t = elapsed,
      travel =
        typeof p.imageIndex === 'number' && Number.isFinite(p.imageIndex)
          ? Math.trunc(p.imageIndex)
          : scroll;
    const base = Math.floor(travel),
      phase = travel - base;
    const [mx, my] = p.pointer ?? pointer ?? [0.5, 0.5];
    renderer.setClearColor(p.background ?? effect.background ?? '#161819');
    cards.forEach((card, slot) => {
      const index = base + slot - Math.floor(effect.count / 2),
        offset = index - travel;
      const layout = effect.layout({
        aspect: camera.aspect,
        verticalBase: Math.floor(scrollY),
        verticalPhase: scrollY - Math.floor(scrollY),
        cameraPosition: camera.position,
        imageAspect:
          textures[wrap(index)].image.width /
          textures[wrap(index)].image.height,
        slot,
        index,
        offset,
        phase,
        travel,
        mx,
        my,
      });
      card.visible = layout.visible !== false;
      card.position.set(layout.x ?? 0, layout.y ?? 0, layout.z ?? 0);
      card.rotation.set(layout.rx ?? 0, layout.ry ?? 0, layout.rz ?? 0);
      card.scale.set(layout.w, layout.h, 1);
      const a = textures[wrap(layout.textureIndex ?? index)],
        b = textures[wrap(index + 1)];
      const u = card.material.uniforms;
      {
        const pixels = Math.max(1, host.clientHeight);
        u.uPixels.value = pixels;
        u.uHalfWidth.value = host.clientWidth * 0.5;
        u.uZone.value = Math.min(380, host.clientWidth * 0.26);
        u.uRadius.value = 20;
        u.uSeed.value = (wrap(index) + 1) * 0.731;
        u.uCardSize.value.set(layout.w * pixels, layout.h * pixels);
      }
      u.mapA.value = a;
      u.mapB.value = b;
      u.ratioA.value = a.image.width / a.image.height;
      u.ratioB.value = b.image.width / b.image.height;
      u.ratio.value = layout.w / layout.h;
      u.mouse.value.set(mx, my);
      for (const [key, value] of Object.entries({
        t,
        travel,
        phase,
        offset,
        speed,
        focus: layout.focus ?? 0,
        depth: -card.position.z,
      }))
        u[key].value = value;
    });
    renderer.render(scene, camera);
    frame = requestAnimationFrame(draw);
  }
  async function loadTexture(src: string | null, isColor: boolean) {
    if (!src) return null;
    const texture = await loader.loadAsync(src);
    if (disposed) {
      texture.dispose();
      return null;
    }
    if (isColor) texture.colorSpace = THREE.SRGBColorSpace;
    ownedTextures.push(texture);
    return texture;
  }
  Promise.all(sources.map((src) => loadTexture(src, true)))
    .then((ordered) => {
      if (disposed) return;
      if (
        !ordered.every(
          (texture): texture is THREE.Texture<HTMLImageElement> =>
            texture !== null
        )
      )
        throw new Error('Empty image URL');
      textures.push(...ordered);
      frame = requestAnimationFrame(draw);
      onStatus('');
    })
    .catch(() => {
      if (!disposed)
        onStatus(
          'An image could not be loaded. Check its URL and cross-origin permissions.'
        );
    });
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    resize.disconnect();
    events.abort();
    host.style.touchAction = previousTouchAction;
    host.removeAttribute('tabindex');
    cards.forEach((c) => c.material.dispose());
    geometry.dispose();
    ownedTextures.forEach((t) => t.dispose());
    renderer.dispose();
    renderer.forceContextLoss();
    renderer.domElement.remove();
  };
}
export function Unwoven(props: UnwovenProps) {
  const host = useRef<HTMLDivElement>(null),
    options = useRef(props);
  options.current = props;
  const [status, setStatus] = useState('');
  const sources = JSON.stringify(props.images);

  useEffect(() => {
    if (!host.current) return;
    const urls: string[] = JSON.parse(sources);
    if (!urls.length) {
      setStatus('Supply at least one image.');
      return;
    }
    setStatus('Loading images…');
    try {
      return mountScene(host.current, definition, urls, options, setStatus);
    } catch (error) {
      setStatus(
        error instanceof Error ? error.message : 'Unable to initialize WebGL.'
      );
    }
  }, [sources]);
  return (
    <div
      className={props.className}
      style={{
        position: 'relative',
        aspectRatio: '16/9',
        background: props.background ?? '#161819',
        ...props.style,
      }}
    >
      <div
        ref={host}
        role='group'
        aria-label={props.label ?? 'Unwoven'}
        style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
      />
      {status && (
        <span
          role='status'
          style={{
            position: 'absolute',
            inset: 12,
            color: 'white',
            pointerEvents: 'none',
          }}
        >
          {status}
        </span>
      )}
    </div>
  );
}
