'use client';
import {
  useRef,
  useEffect,
  useState,
  type RefObject,
  type CSSProperties,
} from 'react';
import * as THREE from 'three';
export interface LiquidGlassGridProps {
  images: readonly string[];
  className?: string;
  style?: CSSProperties;
  label?: string;
  imageIndex?: number;
  pointer?: readonly [number, number];
  background?: string;
  videos?: readonly (string | null)[];
  labels?: readonly string[];
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
  surface?(): {
    advance(
      dt: number,
      vx: number,
      vy: number,
      x: number,
      y: number,
      aspect: number
    ): void;
    corners(slot: number, vectors: THREE.Vector3[]): void;
  };
  vertex?: string;
  fragment?: string;
  functions?: string;
  pan?: boolean;
  vertical?: boolean;
  background?: string;
}
// Position-based spring surface for the visible 9-by-7 patch. Restoring anchors
// hold the material on the sphere. Shared edge nodes carry disturbances between tiles.
function createGlassSurface(columns: number, rows: number) {
  const stride = columns + 1;
  const size = stride * (rows + 1);
  const rest = new Float32Array(size * 3);
  for (let i = 0; i < size; i++) {
    rest[3 * i] = ((i % stride) - columns / 2) * 0.5;
    rest[3 * i + 1] = (Math.floor(i / stride) - rows / 2) * 0.37;
  }
  const current = rest.slice(),
    previous = rest.slice();
  const links: {
    a: number;
    b: number;
    length: number;
    compliance: number;
    lambda: number;
  }[] = [];
  function connect(i: number, j: number, compliance: number) {
    const length = Math.hypot(
      rest[3 * i] - rest[3 * j],
      rest[3 * i + 1] - rest[3 * j + 1]
    );
    links.push({ a: i * 3, b: j * 3, length, compliance, lambda: 0 });
  }
  for (let y = 0; y <= rows; y++)
    for (let x = 0; x <= columns; x++) {
      const i = y * stride + x;
      if (x) connect(i, i - 1, 0.00005);
      if (y) connect(i, i - stride, 0.00005);
      if (x && y) connect(i, i - stride - 1, 0.00012);
      if (x < columns && y) connect(i, i - stride + 1, 0.00012);
      if (x > 1) connect(i, i - 2, 0.001);
      if (y > 1) connect(i, i - 2 * stride, 0.001);
    }
  let remainder = 0;
  return {
    advance(
      dt: number,
      vx: number,
      vy: number,
      pointerX: number,
      pointerY: number,
      aspect: number
    ) {
      const h = 1 / 90;
      remainder += Math.min(dt, 0.06);
      while (remainder >= h) {
        remainder -= h;
        for (let i = 0; i < size; i++) {
          const k = i * 3;
          const dx = rest[k] - (pointerX - 0.5) * aspect;
          const dy = rest[k + 1] - (pointerY - 0.5);
          const influence = Math.exp(-1.8 * (dx * dx + dy * dy));
          const forceX = -vx * (0.15 + influence) * 2;
          const forceY = -vy * (0.15 + influence) * 2;
          const forceZ = (vx * dx + vy * dy) * influence * 8;
          for (let j = 0; j < 3; j++) {
            const value = current[k + j],
              speed = (value - previous[k + j]) * 0.962;
            previous[k + j] = value;
            const pull = (rest[k + j] - value) * 69;
            current[k + j] =
              value +
              speed +
              (pull + (j === 0 ? forceX : j === 1 ? forceY : forceZ)) * h * h;
          }
        }
        for (const edge of links) edge.lambda = 0;
        for (let pass = 0; pass < 3; pass++)
          for (const edge of links) {
            const { a, b, length, compliance } = edge;
            const dx = current[a] - current[b],
              dy = current[a + 1] - current[b + 1],
              dz = current[a + 2] - current[b + 2];
            const dist = Math.max(0.0001, Math.hypot(dx, dy, dz));
            const alpha = compliance / (h * h);
            const delta =
              (-(dist - length) - alpha * edge.lambda) / (2 + alpha);
            edge.lambda += delta;
            const f = delta / dist;
            current[a] += dx * f;
            current[a + 1] += dy * f;
            current[a + 2] += dz * f;
            current[b] -= dx * f;
            current[b + 1] -= dy * f;
            current[b + 2] -= dz * f;
          }
      }
    },
    corners(slot: number, vectors: THREE.Vector3[]) {
      const bottom = (slot % columns) + Math.floor(slot / columns) * stride;
      for (let j = 0; j < 4; j++) {
        const k = (bottom + (j % 2) + (j >= 2 ? stride : 0)) * 3;
        vectors[j].set(
          current[k] - rest[k],
          current[k + 1] - rest[k + 1],
          current[k + 2] - rest[k + 2]
        );
      }
    },
  };
}

const definition: ImageEffect = {
  background: '#030313',
  count: 63,
  pan: true,
  surface: () => createGlassSurface(9, 7),
  layout({ slot, phase, travel, verticalPhase, verticalBase }) {
    const row = Math.floor(slot / 9);
    const worldRow = row + verticalBase;
    const longitude =
      ((slot % 9) - 4 - phase + (((worldRow % 2) + 2) % 2) / 2) * 0.127;
    const latitude = (row - 3 - verticalPhase) * 0.069;
    const radius = 3.15;
    return {
      w: 0.385,
      h: 0.205,
      textureIndex: worldRow * 9 + (slot % 9) + Math.floor(travel),
      x: radius * Math.cos(latitude) * Math.sin(longitude),
      y: radius * Math.sin(latitude),
      z: radius * (Math.cos(latitude) * Math.cos(longitude) - 1),
      ry: longitude,
      rx: -latitude,
    };
  },
  vertex: `
    float weight = sin(uv.x * 3.14159) * sin(uv.y * 3.14159);
    float bend = dot(uv - .5, flex);
    p.z += weight * bend * .25;
    p.xy -= flex * weight * .035;
  `,
  functions: `
    float tileDistance(vec2 p, vec2 extent, float radius) {
      vec2 corner = abs(p) - extent + radius;
      return length(max(corner, 0.)) + min(max(corner.x, corner.y), 0.) - radius;
    }
  `,
  fragment: `
    vec2 extent = vec2(ratio, 1.) * .5;
    vec2 pos = (uv - .5) * 2. * extent;
    float d = tileDistance(pos, extent, .17);
    if (d > 0.) discard;
    vec2 normal = normalize(vec2(
      tileDistance(pos + vec2(.001, 0.), extent, .17) - d,
      tileDistance(pos + vec2(0., .001), extent, .17) - d
    ) + .00001);
    // The cross-section is a rounded bevel: a flat central window and
    // a rapidly changing normal within the last 9% of the short edge.
    float rim = clamp(1. + d / .09, 0., 1.);
    float nz = sqrt(max(.001,1. - rim*rim));
    vec3 N = normalize(vec3(normal*rim,nz));
    vec3 viewDir = normalize(vec3((uv-.5)*.16,1.));
    vec3 ray = refract(-viewDir,N,1./1.48);
    vec2 bend = ray.xy * (.13 / max(.12,abs(ray.z))) / vec2(ratio,1.);
    vec2 base = (uv-.5)*.92+.5;
    color = sampleA(base+bend);
    color.r = sampleA(base + bend*1.06).r;
    color.b = sampleA(base + bend*.94).b;
    vec3 refl = reflect(-viewDir,N);
    float fresnel = .045+.955*pow(1.-max(0.,dot(N,viewDir)),5.);
    float panel = smoothstep(.82,.97,dot(refl,normalize(vec3(-.65,.5,.57))));
    color.rgb = mix(color.rgb,vec3(.59,.65,.79)+panel*.55,fresnel*.72);
    color.rgb += panel*rim*.65 + .075*rim;
    vec4 lettering = texture2D(labelMap,uv + bend*.22);
    color.rgb = mix(color.rgb,lettering.rgb,lettering.a * showLabel);
    color.a *= 1. - smoothstep(-fwidth(d), 0., d);
  `,
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
  uniforms.corners = {
    value: Array.from({ length: 4 }, () => new THREE.Vector3()),
  };
  uniforms.flex = { value: new THREE.Vector2() };
  uniforms.showLabel = { value: 0 };
  uniforms.labelMap = { value: null };
  uniforms.mouse = { value: new THREE.Vector2(0.5, 0.5) };
  return new THREE.ShaderMaterial({
    uniforms,
    side: THREE.DoubleSide,
    transparent: true,
    vertexShader:
      shared +
      (effect.surface ? 'uniform vec3 corners[4];' : '') +
      `void main(){
      vUv=uv;vec3 p=position;
      ${effect.surface ? 'p+=mix(mix(corners[0],corners[1],uv.x),mix(corners[2],corners[3],uv.x),uv.y);' : ''}
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
  props: RefObject<LiquidGlassGridProps>,
  onStatus: (status: string) => void
) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  host.appendChild(renderer.domElement);
  renderer.domElement.style.cssText = 'display:block;width:100%;height:100%';
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 40);
  camera.position.z = 0.5 / Math.tan(Math.PI / 8);
  const geometry = new THREE.PlaneGeometry(
    1,
    1,
    effect.vertex ? 64 : 1,
    effect.vertex ? 48 : 1
  );
  const surface = effect.surface?.();
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
  // Posters also provide the initial image while a video decodes or if playback is unavailable.
  type MediaItem = {
    video?: HTMLVideoElement;
    texture?: THREE.VideoTexture;
    label?: THREE.CanvasTexture;
  };
  let mediaKey: string | undefined,
    glassMedia: MediaItem[] = [];
  function releaseMedia() {
    for (const item of glassMedia) {
      if (item.video) {
        item.video.pause();
        item.video.removeAttribute('src');
        item.video.load();
        item.texture?.dispose();
      }
      item.label?.dispose();
    }
    glassMedia = [];
  }
  function updateGlassMedia(options: LiquidGlassGridProps) {
    const key = JSON.stringify([options.videos, options.labels]);
    if (key === mediaKey) return;
    mediaKey = key;
    releaseMedia();
    glassMedia = sources.map((_, i) => {
      const item: MediaItem = {};
      if (options.videos?.[i]) {
        const video = document.createElement('video');
        video.crossOrigin = 'anonymous';
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.src = options.videos[i]!;
        item.video = video;
        item.texture = new THREE.VideoTexture(video);
        item.texture.colorSpace = THREE.SRGBColorSpace;
        video.play().catch(() => {});
      }
      if (options.labels?.[i]) {
        const canvas = document.createElement('canvas');
        canvas.width = 640;
        canvas.height = 340;
        const context = canvas.getContext('2d');
        if (!context) return item;
        context.font = '600 46px system-ui';
        context.fillStyle = 'white';
        context.shadowColor = 'rgba(0,0,0,.7)';
        context.shadowBlur = 5;
        context.fillText(
          options.labels[i],
          48,
          canvas.height - 53,
          canvas.width - 92
        );
        item.label = new THREE.CanvasTexture(canvas);
        item.label.colorSpace = THREE.SRGBColorSpace;
      }
      return item;
    });
  }

  const previousTouchAction = host.style.touchAction;
  host.style.touchAction = effect.pan || effect.vertical ? 'none' : 'pan-y';
  let drag: { x: number; y: number; id: number } | null = null,
    targetY = 0,
    scrollY = 0;
  const flex = new THREE.Vector2(),
    flexVelocity = new THREE.Vector2();
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
    updateGlassMedia(p);
    const dt = last == null ? 0 : Math.min(0.1, (now - last) / 1000);
    const step = (targetScroll - scroll) * (1 - Math.exp(-10 * dt));
    const stepY = (targetY - scrollY) * (1 - Math.exp(-10 * dt));
    scroll += step;
    scrollY += stepY;
    // Damped displacement lags the drag and settles when the gesture stops.
    for (let i = 0; i < 4; i++) {
      const h = dt / 4;
      flexVelocity.x += (-80 * flex.x - 11 * flexVelocity.x) * h;
      flexVelocity.y += (-80 * flex.y - 11 * flexVelocity.y) * h;
      flex.addScaledVector(flexVelocity, h);
    }
    flexVelocity.x += step * 5;
    flexVelocity.y += stepY * 5;
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
    if (dt > 0)
      surface?.advance(
        dt,
        THREE.MathUtils.clamp(step / dt, -8, 8),
        THREE.MathUtils.clamp(stepY / dt, -8, 8),
        mx,
        my,
        camera.aspect
      );
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
      const media = glassMedia[wrap(layout.textureIndex ?? index)];
      const useVideo =
        media?.video &&
        media.video.readyState >= 2 &&
        media.video.videoWidth > 0;
      u.mapA.value = useVideo ? media.texture : a;
      u.labelMap.value = media?.label ?? a;
      u.showLabel.value = media?.label ? 1 : 0;
      u.mapB.value = b;
      u.ratioA.value = useVideo
        ? media.video!.videoWidth / media.video!.videoHeight
        : a.image.width / a.image.height;
      u.ratioB.value = b.image.width / b.image.height;
      u.ratio.value = layout.w / layout.h;
      if (surface) surface.corners(slot, u.corners.value);
      u.flex.value.copy(flex);
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
    releaseMedia();
    ownedTextures.forEach((t) => t.dispose());
    renderer.dispose();
    renderer.forceContextLoss();
    renderer.domElement.remove();
  };
}
export function LiquidGlassGrid(props: LiquidGlassGridProps) {
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
        aria-label={props.label ?? 'LiquidGlassGrid'}
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
