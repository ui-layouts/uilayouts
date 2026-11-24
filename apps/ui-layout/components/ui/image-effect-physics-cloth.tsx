'use client';
import {
  useRef,
  useEffect,
  useState,
  type RefObject,
  type CSSProperties,
} from 'react';
import * as THREE from 'three';
export interface PhysicsClothProps {
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
const single = (layout: ImageEffect['layout'], fragment = '', vertex = '') => ({
  layout,
  fragment,
  vertex,
  count: 1,
});

// Position-based cloth. The top edge is pinned and neighboring particles
// preserve their rest lengths. A fixed simulation step makes seeking repeatable.
function clothGeometry(geometry: THREE.PlaneGeometry) {
  const positions = geometry.attributes.position;
  const rest = new Float32Array(positions.array),
    previous = new Float32Array(rest);
  const columns = geometry.parameters.widthSegments + 1;
  const edges: [number, number, number][] = [];
  for (let n = 0; n < positions.count; n++) {
    if (n % columns) edges.push([n - 1, n, 1 / (columns - 1)]);
    if (n >= columns)
      edges.push([n - columns, n, 1 / geometry.parameters.heightSegments]);
  }
  let tick = 0,
    cycle = -1;
  return (time: number) => {
    const period = 4,
      epoch = Math.floor(time / period);
    const target = Math.floor((time - epoch * period) * 60);
    const a = positions.array;
    if (epoch !== cycle || target < tick) {
      a.set(rest);
      previous.set(rest);
      tick = 0;
      cycle = epoch;
    }
    while (tick < target) {
      tick++;
      for (let n = columns; n < positions.count; n++) {
        const i = n * 3;
        const wind =
          0.0014 * Math.sin(rest[i] * 5 + tick / 18) +
          0.0007 * Math.cos(rest[i + 1] * 6 - tick / 17);
        for (let j = 0; j < 3; j++) {
          const x = a[i + j];
          a[i + j] +=
            (x - previous[i + j]) * 0.981 +
            (j === 2 ? wind : j === 1 ? -0.0011 : 0.00015);
          previous[i + j] = x;
        }
      }
      for (let pass = 0; pass < 4; pass++)
        for (const [m, n, length] of edges) {
          const i = m * 3,
            j = n * 3,
            dx = a[j] - a[i],
            dy = a[j + 1] - a[i + 1],
            dz = a[j + 2] - a[i + 2];
          const distance = Math.hypot(dx, dy, dz) || length;
          const factor = (1 - length / distance) / (m < columns ? 1 : 2);
          if (m >= columns) {
            a[i] += dx * factor;
            a[i + 1] += dy * factor;
            a[i + 2] += dz * factor;
          }
          if (n >= columns) {
            a[j] -= dx * factor;
            a[j + 1] -= dy * factor;
            a[j + 2] -= dz * factor;
          }
        }
    }
    positions.needsUpdate = true;
  };
}

const definition: ImageEffect = {
  ...single(() => ({ w: 1.05, h: 0.82 })),
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
  return new THREE.ShaderMaterial({
    uniforms,
    side: THREE.DoubleSide,
    transparent: true,
    vertexShader:
      shared +
      `void main(){
      vUv=uv;vec3 p=position;

      ${effect.vertex || ''}
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
    }`,
    fragmentShader:
      shared +
      `
      uniform sampler2D mapA,mapB,labelMap; uniform float showLabel;
      uniform float ratioA,ratioB;
      vec2 cover(vec2 q,float r){return .5+(q-.5)*min(vec2(ratio/r,r/ratio),vec2(1.));}
      vec4 sampleA(vec2 q){return texture2D(mapA,cover(q,ratioA));}
      vec4 sampleB(vec2 q){return texture2D(mapB,cover(q,ratioB));}
      ${effect.functions || ''}
      void main(){vec2 uv=vUv,q=uv;vec4 color=sampleA(q);
        ${effect.fragment || ''}
        gl_FragColor=color;
        #include <colorspace_fragment>
      }`,
  });
}

function mountScene(
  host: HTMLDivElement,
  effect: ImageEffect,
  sources: readonly string[],
  props: RefObject<PhysicsClothProps>,
  onStatus: (status: string) => void
) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  host.appendChild(renderer.domElement);
  renderer.domElement.style.cssText = 'display:block;width:100%;height:100%';
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 40);
  camera.position.z = 0.5 / Math.tan(Math.PI / 8);
  const geometry = new THREE.PlaneGeometry(1, 1, 20, 14);
  const simulate = clothGeometry(geometry);
  const cards = Array.from({ length: effect.count }, () => {
    const card = new THREE.Mesh(geometry, material(effect));
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
  listen('click', () => {
    targetScroll = Math.round(targetScroll) + 1;
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
    simulate(t);
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
export function PhysicsCloth(props: PhysicsClothProps) {
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
        aria-label={props.label ?? 'PhysicsCloth'}
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
