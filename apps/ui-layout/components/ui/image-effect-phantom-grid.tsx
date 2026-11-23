'use client';
import {
  useRef,
  useEffect,
  useState,
  type RefObject,
  type CSSProperties,
} from 'react';
import * as THREE from 'three';
export interface PhantomGridProps {
  images: readonly string[];
  className?: string;
  style?: CSSProperties;
  label?: string;
  imageIndex?: number;
  pointer?: readonly [number, number];
  background?: string;
  variant?: 'grid' | 'portrait';
  depthMaps?: readonly (string | null)[];
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

// Sculpt a relief surface over an elliptical head, then sample it as points.
function particlePortrait() {
  const positions = [],
    uv = [];
  const bump = (
    x: number,
    y: number,
    cx: number,
    cy: number,
    rx: number,
    ry: number
  ) => Math.exp(-(((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2));
  for (let row = 0; row < 88; row++) {
    const y = (row / 87) * 2 - 1;
    for (let col = 0; col < 64; col++) {
      const x = ((col + (row % 2) * 0.5) / 64) * 2 - 1;
      const shell = 1 - x * x - y * y;
      if (shell <= 0) continue;
      const eyes =
        bump(x, y, -0.35, 0.2, 0.2, 0.12) + bump(x, y, 0.35, 0.2, 0.2, 0.12);
      const nose = bump(x, y, 0, 0, 0.14, 0.36);
      const lips = bump(x, y, 0, -0.4, 0.34, 0.095);
      const z =
        Math.sqrt(shell) * 0.21 + nose * 0.1 - eyes * 0.052 + lips * 0.035;
      uv.push((x + 1) / 2, (y + 1) / 2);
      positions.push(x * (0.23 + 0.025 * y), y * 0.34, z);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(positions, 3)
  );
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      image: { value: null },
      depthMap: { value: null },
      hasDepth: { value: false },
      opacity: { value: 1 },
      pointSize: { value: 2 },
      cursor: { value: new THREE.Vector2(0.5, 0.5) },
    },
    vertexShader: `
      uniform sampler2D image, depthMap;
      uniform bool hasDepth;
      uniform vec2 cursor;
      uniform float pointSize;
      varying vec3 tint;
      varying float mask;
      void main(){
        vec3 p=position;
        float relief=hasDepth ? texture2D(depthMap,uv).r : p.z;
        mask=hasDepth ? smoothstep(.01,.05,relief) : 1.;
        if(hasDepth) p.z=relief*.28;
        vec2 delta=uv-cursor;
        p.xy+=delta*.09*exp(-dot(delta,delta)*32.);
        tint=texture2D(image,uv).rgb;
        vec4 view=modelViewMatrix*vec4(p,1.);
        gl_Position=projectionMatrix*view;
        gl_PointSize=clamp(pointSize/-view.z,1.,8.);
      }`,
    fragmentShader: `
      uniform float opacity;
      varying vec3 tint;
      varying float mask;
      void main(){
        float radius=length(gl_PointCoord-.5);
        if(radius>.5 || mask<.01) discard;
        gl_FragColor=vec4(tint,opacity*mask*(1.-smoothstep(.32,.5,radius)));
        #include <colorspace_fragment>
      }`,
  });
  const face = new THREE.Points(geometry, material);
  face.position.z = 0.22;
  return face;
}

const definition: ImageEffect = {
  count: 63,
  pan: true,
  layout({ slot, phase, travel, verticalPhase, verticalBase, mx, my, aspect }) {
    const x = ((slot % 9) - 4 - phase) * 0.42 - (mx - 0.5) * 0.09;
    const y =
      (Math.floor(slot / 9) - 3 - verticalPhase) * 0.31 - (my - 0.5) * 0.08;
    const dx = x - (mx - 0.5) * aspect,
      dy = y - (my - 0.5);
    const influence = Math.exp(-9 * (dx * dx + dy * dy));
    return {
      textureIndex: Math.floor(travel) + slot + verticalBase * 9,
      x: x + dx * influence * 0.5,
      y: y + dy * influence * 0.5,
      z: -0.2 + 0.12 * influence,
      w: 0.39,
      h: 0.285,
      ry: dx * influence,
      rx: -dy * influence,
    };
  },
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
  props: RefObject<PhantomGridProps>,
  onStatus: (status: string) => void,
  depthSources: readonly (string | null)[] = []
) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  host.appendChild(renderer.domElement);
  renderer.domElement.style.cssText = 'display:block;width:100%;height:100%';
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const face = particlePortrait();
  scene.add(face);
  const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 40);
  camera.position.z = 0.5 / Math.tan(Math.PI / 8);
  const geometry = new THREE.PlaneGeometry(
    1,
    1,
    effect.vertex ? 64 : 1,
    effect.vertex ? 48 : 1
  );
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
  const depthTextures: (THREE.Texture | null)[] = [],
    ownedTextures: THREE.Texture[] = [];
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
    if (face) {
      face.visible =
        p.variant === 'portrait' ||
        (p.variant == null && depthSources.length > 0);
      const cameraDistance =
        0.5 / Math.tan(Math.PI / 8) + (drag && !face.visible ? 0.24 : 0);
      camera.position.z +=
        (cameraDistance - camera.position.z) * (1 - Math.exp(-8 * dt));
    }
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
      card.visible = layout.visible !== false && !face?.visible;
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
    if (face) {
      face.rotation.y = (mx - 0.5) * 1.1;
      face.rotation.x = (0.5 - my) * 0.32;
      const uniforms = face.material.uniforms;
      const layer = wrap(base);
      uniforms.image.value = textures[layer];
      uniforms.depthMap.value = depthTextures[layer] ?? textures[layer];
      uniforms.hasDepth.value = Boolean(depthTextures[layer]);
      uniforms.cursor.value.set(mx, my);
      uniforms.pointSize.value = renderer.domElement.height * 0.003;
      uniforms.opacity.value = 0.5 + 0.45 * Math.sin(t * 0.6) ** 2;
    }
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
  Promise.all([
    Promise.all(sources.map((src) => loadTexture(src, true))),
    Promise.all(
      depthSources
        .slice(0, sources.length)
        .map((src) => loadTexture(src, false))
    ),
  ])
    .then(([ordered, depths]) => {
      if (disposed) return;
      if (
        !ordered.every(
          (texture): texture is THREE.Texture<HTMLImageElement> =>
            texture !== null
        )
      )
        throw new Error('Empty image URL');
      textures.push(...ordered);
      depthTextures.push(...depths);
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
    if (face) {
      face.geometry.dispose();
      face.material.dispose();
    }
    renderer.dispose();
    renderer.forceContextLoss();
    renderer.domElement.remove();
  };
}
export function PhantomGrid(props: PhantomGridProps) {
  const host = useRef<HTMLDivElement>(null),
    options = useRef(props);
  options.current = props;
  const [status, setStatus] = useState('');
  const sources = JSON.stringify(props.images);
  const depths = JSON.stringify(props.depthMaps ?? []);
  useEffect(() => {
    if (!host.current) return;
    const urls: string[] = JSON.parse(sources);
    if (!urls.length) {
      setStatus('Supply at least one image.');
      return;
    }
    setStatus('Loading images…');
    try {
      return mountScene(
        host.current,
        definition,
        urls,
        options,
        setStatus,
        JSON.parse(depths)
      );
    } catch (error) {
      setStatus(
        error instanceof Error ? error.message : 'Unable to initialize WebGL.'
      );
    }
  }, [sources, depths]);
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
        aria-label={props.label ?? 'PhantomGrid'}
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
