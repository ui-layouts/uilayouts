'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { USDLoader } from 'three/addons/loaders/USDLoader.js';
/**
 * Adapted from https://github.com/chuspeeism/iphone-duo (MIT, copyright 2026 jadon7).
 * See public/iphone-duo/NOTICE.txt for asset attribution.
 *
 * MIT License
 *
 * Copyright (c) 2026 jadon7
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { cn } from '@/lib/utils';

export interface IPhoneDuoProps {
  className?: string;
  /** Controlled opening angle: 0 is closed, 180 is fully open. */
  angle?: number;
  defaultAngle?: number;
  screen?: 'wallpaper' | 'launcher';
  /** A URL or object URL; the outer screen uses the image's right half. */
  imageSrc?: string;
  /** Enable drag-to-orbit and wheel-to-zoom. Disable when scroll or slider input controls the fold. */
  interactive?: boolean;
  assetPath?: string;
  /** Optional image matching the initial pose, displayed until the first 3D frame. */
  posterSrc?: string;
}

type Screen = {
  material: THREE.MeshBasicMaterial;
  defaultTextures: Record<'wallpaper' | 'launcher', THREE.CanvasTexture>;
  frame: { value: THREE.Vector4 };
  gradient: { value: THREE.Vector2 };
  pixel: { value: THREE.Vector2 };
};

type Controller = {
  setAngle: (angle: number) => void;
  setContent: (screen: 'wallpaper' | 'launcher', imageSrc?: string) => Promise<void>;
  setInteractive: (interactive: boolean) => void;
};

const clampAngle = (angle: number) =>
  Number.isFinite(angle) ? Math.max(0, Math.min(180, angle)) : 180;

async function loadDefaultUIs(assetPath: string) {
  const names = [
    'wallpaper-inner.avif',
    'clock-inner.avif',
    'clock-outer.avif',
    'launcher-inner.png',
    'launcher-outer.png',
  ];
  const images = Object.fromEntries(
    await Promise.all(
      names.map(async (name) => {
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.src = `${assetPath}/ui/${name}`;
        await image.decode();
        return [name, image];
      })
    )
  );
  const themes = { wallpaper: {}, launcher: {} } as Record<
    'wallpaper' | 'launcher',
    Record<'inner' | 'outer', HTMLCanvasElement>
  >;
  for (const theme of ['wallpaper', 'launcher'] as const) {
    for (const kind of ['inner', 'outer'] as const) {
      const canvas = document.createElement('canvas');
      canvas.width = kind === 'inner' ? 1600 : 774;
      canvas.height = 1125;
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Canvas 2D is unavailable.');
      if (theme === 'wallpaper') {
        context.drawImage(images['wallpaper-inner.avif'], canvas.width - 1600, 0, 1600, 1125);
        context.drawImage(images[`clock-${kind}.avif`], 0, 0, canvas.width, canvas.height);
      } else {
        const crop = kind === 'inner' ? [22, 22, 1072, 754] : [28, 16, 510, 742];
        context.drawImage(
          images[`launcher-${kind}.png`],
          crop[0],
          crop[1],
          crop[2],
          crop[3],
          0,
          0,
          canvas.width,
          canvas.height
        );
      }
      themes[theme][kind] = canvas;
    }
  }
  return themes;
}

type DuoAssets = {
  model: THREE.Group;
  uis: Awaited<ReturnType<typeof loadDefaultUIs>>;
  textures: Set<THREE.Texture>;
};

type AssetEntry = { promise: Promise<DuoAssets>; users: number };
const assetCache = new Map<string, AssetEntry>();

function disposeAssets(assets: Pick<DuoAssets, 'model' | 'textures'>) {
  const geometries = new Set<THREE.BufferGeometry>();
  const materials = new Set<THREE.Material>();
  assets.model.traverse((object) => {
    if (!(object instanceof THREE.Mesh)) return;
    geometries.add(object.geometry);
    for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
      materials.add(material);
    }
  });
  for (const geometry of geometries) geometry.dispose();
  for (const material of materials) material.dispose();
  for (const texture of assets.textures) texture.dispose();
}

function pruneAssets() {
  // Retain at most two idle sources for route revisits; mounted instances own their GPU resources.
  const idle = [...assetCache].filter(([, entry]) => entry.users === 0);
  for (const [key, entry] of idle.slice(0, Math.max(0, idle.length - 2))) {
    assetCache.delete(key);
    void entry.promise.then(disposeAssets, () => {});
  }
}

function acquireAssets(base: string) {
  let entry = assetCache.get(base);
  if (!entry) {
    // Start both requests together. A failed source is removed so Retry can fetch it again.
    const promise = Promise.allSettled([
      new USDLoader().loadAsync(`${base}/iPhone_Duo_Render.usdc`),
      loadDefaultUIs(base),
    ]).then(([modelResult, uiResult]) => {
      if (modelResult.status === 'rejected') throw modelResult.reason;
      const model = modelResult.value;
      const textures = new Set<THREE.Texture>();
      model.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return;
        for (const material of Array.isArray(object.material)
          ? object.material
          : [object.material]) {
          for (const value of Object.values(material)) {
            if (value instanceof THREE.Texture) textures.add(value);
          }
        }
      });
      if (uiResult.status === 'rejected') {
        disposeAssets({ model, textures });
        throw uiResult.reason;
      }
      return { model, textures, uis: uiResult.value };
    });
    entry = { promise, users: 0 };
    assetCache.set(base, entry);
    const created = entry;
    void promise.catch(() => {
      if (assetCache.get(base) === created) assetCache.delete(base);
    });
  }
  // Map order is the eviction order. Active sources are never evicted.
  assetCache.delete(base);
  assetCache.set(base, entry);
  entry.users++;
  let released = false;
  return {
    promise: entry.promise,
    release() {
      if (released) return;
      released = true;
      entry.users--;
      pruneAssets();
    },
  };
}

/** Warm the source cache before navigating to a device preview. */
export async function preloadIPhoneDuo(assetPath = '/iphone-duo') {
  if (typeof window === 'undefined') return;
  const lease = acquireAssets(assetPath.replace(/\/$/, ''));
  try {
    await lease.promise;
  } finally {
    lease.release();
  }
}

const screenShader = `
uniform float foldAngle;
uniform vec2 uiPixel;
uniform vec4 uiFrame;
uniform vec2 uiGradient;
uniform vec3 uiReferenceEye;
varying vec3 vUIPosition;
vec3 screenColor() {
  // Intersect the fixed front-view ray with the unfolded inner-screen plane.
  float depth = (0.24948 - uiReferenceEye.z) / (vUIPosition.z - uiReferenceEye.z);
  vec2 projected = uiReferenceEye.xy + (vUIPosition.xy - uiReferenceEye.xy) * depth;
  vec2 sourceUV = (projected - uiFrame.xy) / uiFrame.zw;
  #ifdef INNER_UI
    float progress = clamp(foldAngle / 1.570796327, 0.0, 1.0);
  #else
    // Anchor the image to the projected hinge-side edge of the outer screen.
    float c = cos(foldAngle), s = sin(foldAngle);
    vec2 hingeEdge = vec2(-0.23396, -0.27463 - 0.275454);
    vec2 foldedEdge = vec2(c * hingeEdge.x + s * hingeEdge.y,
      -s * hingeEdge.x + c * hingeEdge.y + 0.275454);
    float edgeDepth = (0.24948 - uiReferenceEye.z) / (foldedEdge.y - uiReferenceEye.z);
    float anchorX = uiReferenceEye.x + (foldedEdge.x - uiReferenceEye.x) * edgeDepth;
    sourceUV.x = uiGradient.x + (projected.x - anchorX) / uiFrame.z;
    float progress = clamp((3.141592654 - foldAngle) / 1.570796327, 0.0, 1.0);
  #endif
  float edge = (sourceUV.x - uiGradient.x) / (uiGradient.y - uiGradient.x);
  float motion = smoothstep(0.0, 1.0, progress);
  float blurGradient = clamp(edge, 0.0, 1.0);
  float darkenGradient = clamp((edge - 0.2) / 0.8, 0.0, 1.0);
  float effect = motion * pow(darkenGradient, 1.35);
  float radius = 72.0 * motion * pow(blurGradient, 1.35);
  vec2 aa = max(fwidth(sourceUV), uiPixel * 0.5);
  vec2 dx = dFdx(sourceUV) / uiPixel;
  vec2 dy = dFdy(sourceUV) / uiPixel;
  float baseLod = log2(max(1.0, max(length(dx), length(dy))));
  vec2 coverage = smoothstep(-aa, aa, sourceUV)
    * (1.0 - smoothstep(vec2(1.0) - aa, vec2(1.0) + aa, sourceUV));
  vec3 color = textureLod(map, clamp(sourceUV, vec2(0.0), vec2(1.0)), baseLod).rgb * coverage.x * coverage.y;
  if (radius > 0.0) {
    // Use the same mip level at zero blur, then increase it continuously.
    float lod = max(baseLod, log2(max(1.0, radius)));
    vec2 footprint = max(aa, uiPixel * radius * 0.75);
    color = vec3(0.0);
    for (int y = -2; y <= 2; y++) {
      for (int x = -2; x <= 2; x++) {
        float wx = x == 0 ? 6.0 : (abs(x) == 1 ? 4.0 : 1.0);
        float wy = y == 0 ? 6.0 : (abs(y) == 1 ? 4.0 : 1.0);
        vec2 sampleUV = sourceUV + vec2(float(x), float(y)) * uiPixel * radius;
        // Blur the image and its coverage together so color spreads into the black margin.
        vec2 coverage = smoothstep(-footprint, footprint, sampleUV)
          * (1.0 - smoothstep(vec2(1.0) - footprint, vec2(1.0) + footprint, sampleUV));
        color += textureLod(map, clamp(sampleUV, vec2(0.0), vec2(1.0)), lod).rgb
          * coverage.x * coverage.y * wx * wy / 256.0;
      }
    }
  }
  return color * (1.0 - min(1.0, effect * 2.0));
}
`;

// The camera half stays in its original transform. Only the cover half rotates.
const foldShader = `
uniform float foldAngle;
vec2 rotateHinge(vec2 p) {
  float c = cos(foldAngle), s = sin(foldAngle);
  p.y -= 0.275454;
  return vec2(c * p.x + s * p.y, -s * p.x + c * p.y + 0.275454);
}
#ifdef FLEXIBLE_SCREEN
vec4 bendStrip(vec3 p) {
  float halfWidth = 0.35;
  if (p.x >= halfWidth) return vec4(p.x, p.z, 1.0, 0.0);
  if (p.x <= -halfWidth) return vec4(rotateHinge(p.xz), cos(foldAngle), -sin(foldAngle));
  float t = (p.x + halfWidth) / (2.0 * halfWidth);
  float t2 = t*t, t3 = t2*t;
  vec2 a = rotateHinge(vec2(-halfWidth, p.z));
  vec2 b = vec2(halfWidth, p.z);
  vec2 ta = 2.0 * halfWidth * vec2(cos(foldAngle), -sin(foldAngle));
  vec2 tb = vec2(2.0 * halfWidth, 0.0);
  vec2 point = (2.0*t3-3.0*t2+1.0)*a + (t3-2.0*t2+t)*ta + (-2.0*t3+3.0*t2)*b + (t3-t2)*tb;
  vec2 tangent = normalize((6.0*t2-6.0*t)*a + (3.0*t2-4.0*t+1.0)*ta + (-6.0*t2+6.0*t)*b + (3.0*t2-2.0*t)*tb);
  return vec4(point, tangent);
}
#endif
`;

export function IPhoneDuo({
  className = '',
  assetPath = '/iphone-duo',
  angle,
  defaultAngle = 180,
  screen = 'wallpaper',
  imageSrc,
  interactive = true,
  posterSrc,
}: IPhoneDuoProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<Controller | null>(null);
  const angleRef = useRef(clampAngle(angle ?? defaultAngle));
  const initialAngleRef = useRef(angleRef.current);
  const contentRef = useRef({ screen, imageSrc, interactive });
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (angle === undefined) return;
    angleRef.current = clampAngle(angle);
    controllerRef.current?.setAngle(angleRef.current);
  }, [angle]);

  useEffect(() => {
    contentRef.current.screen = screen;
    contentRef.current.imageSrc = imageSrc;
    if (status === 'ready') void controllerRef.current?.setContent(screen, imageSrc);
  }, [screen, imageSrc, status]);

  useEffect(() => {
    contentRef.current.interactive = interactive;
    if (status === 'ready') controllerRef.current?.setInteractive(interactive);
  }, [interactive, status]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: attempt deliberately recreates the scene for Retry.
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    let disposed = false;
    const lease = acquireAssets(assetPath.replace(/\/$/, ''));
    let sharedTextures = new Set<THREE.Texture>();
    const textureCopies = new Map<THREE.Texture, THREE.Texture>();
    let renderer: THREE.WebGLRenderer | undefined;
    let controls: OrbitControls | undefined;
    let observer: ResizeObserver | undefined;
    let environmentTarget: THREE.WebGLRenderTarget | undefined;
    const geometries = new Set<THREE.BufferGeometry>();
    const materials = new Set<THREE.Material>();
    const textures = new Set<THREE.Texture>();
    const rememberMaterial = (material: THREE.Material) => {
      materials.add(material);
      const properties = material as unknown as Record<string, unknown>;
      for (const [key, value] of Object.entries(material)) {
        if (!(value instanceof THREE.Texture)) continue;
        if (sharedTextures.has(value)) {
          // Reuse decoded pixels, but give every renderer its own disposable texture objects.
          let copy = textureCopies.get(value);
          if (!copy) {
            copy = value.clone();
            textureCopies.set(value, copy);
          }
          properties[key] = copy;
          textures.add(copy);
        } else {
          textures.add(value);
        }
      }
    };
    const release = () => {
      renderer?.setAnimationLoop(null);
      observer?.disconnect();
      controls?.dispose();
      for (const geometry of geometries) geometry.dispose();
      for (const material of materials) material.dispose();
      for (const texture of textures) texture.dispose();
      environmentTarget?.dispose();
      renderer?.dispose();
      renderer?.domElement.remove();
    };
    setStatus('loading');
    setError('');

    async function initialize(viewport: HTMLDivElement) {
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.18;
        renderer.domElement.style.cssText =
          'display:block;width:100%;height:100%;touch-action:none;outline:none';
        renderer.domElement.setAttribute('aria-label', '3D folding iPhone Duo');
        viewport.appendChild(renderer.domElement);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 250);
        camera.position.set(0, 0, 40);
        const environment = new RoomEnvironment();
        const pmrem = new THREE.PMREMGenerator(renderer);
        environmentTarget = pmrem.fromScene(environment, 0.04);
        scene.environment = environmentTarget.texture;
        environment.dispose();
        pmrem.dispose();
        scene.environmentIntensity = 1.35;
        scene.add(new THREE.HemisphereLight(0xffffff, 0xb5baa8, 1.8));
        const key = new THREE.DirectionalLight(0xfffcf5, 2.6);
        key.position.set(-15, 25, 30);
        const rim = new THREE.DirectionalLight(0xe8edf5, 2);
        rim.position.set(15, 5, -15);
        scene.add(key, rim);
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.minDistance = 21;
        controls.maxDistance = 65;
        controls.target.set(0, 0, 0.275454);
        controls.update();
        const phone = new THREE.Group();
        scene.add(phone);
        const bend = { value: 0 };
        const uiReferenceEye = new THREE.Vector3(0, 0, 40);
        const innerUIFrame = new THREE.Vector4(-7.89935, 0.34562 - 5.8974, 15.7987, 11.1035);
        const outerUIFrame = new THREE.Vector4(
          0.23396,
          0.27173 - 5.8974,
          7.73936,
          11.2513
        ).multiplyScalar((40 - 0.24948) / (40 - 0.825538));
        const assets = await lease.promise;
        if (disposed) return;
        sharedTextures = assets.textures;
        const defaultUIs = assets.uis;
        const model = assets.model.clone(true);
        const screens = {} as Record<'inner' | 'outer', Screen>;
        for (const kind of ['inner', 'outer'] as const) {
          const defaultTextures = {} as Screen['defaultTextures'];
          for (const theme of ['wallpaper', 'launcher'] as const) {
            const texture = new THREE.CanvasTexture(defaultUIs[theme][kind]);
            texture.colorSpace = THREE.SRGBColorSpace;
            texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
            textures.add(texture);
            defaultTextures[theme] = texture;
          }
          const material = new THREE.MeshBasicMaterial({
            map: defaultTextures.wallpaper,
            toneMapped: false,
          });
          materials.add(material);
          screens[kind] = {
            material,
            defaultTextures,
            frame: { value: (kind === 'inner' ? innerUIFrame : outerUIFrame).clone() },
            gradient: {
              value: new THREE.Vector2(kind === 'inner' ? 0.5 : 0, kind === 'inner' ? 0 : 1),
            },
            pixel: { value: new THREE.Vector2(1 / defaultUIs.wallpaper[kind].width, 1 / 1125) },
          };
        }
        model.scale.multiplyScalar(100);
        model.updateMatrixWorld(true);
        model.traverse((object) => {
          if (!(object instanceof THREE.Mesh)) return;
          const geometry = object.geometry.clone().applyMatrix4(object.matrixWorld);
          geometry.translate(0, -5.8974, 0);
          geometries.add(geometry);
          let ancestor: THREE.Object3D | null = object;
          while (ancestor && !['upTUAKvMVkPOMKq', 'SiftyleUEEZwLhF'].includes(ancestor.name))
            ancestor = ancestor.parent;
          const moving = ancestor?.name === 'upTUAKvMVkPOMKq';
          const flexible = [
            'JnJdTkxbQgUtLwU',
            'xdyyaajWsatVNxN',
            'UXtsBZYlaUvHoEh',
            'MvKPXGSdYDVvSpk',
          ].includes(object.name);
          const kind =
            object.name === 'UXtsBZYlaUvHoEh'
              ? 'inner'
              : object.name === 'hhgAIoCGsHXeDPY'
                ? 'outer'
                : null;
          const material = kind ? screens[kind].material : object.material.clone();
          rememberMaterial(material);
          if (kind) {
            const p = geometry.attributes.position;
            const uv = new Float32Array(p.count * 2);
            for (let i = 0; i < p.count; i++) {
              uv[i * 2] =
                kind === 'inner'
                  ? (p.getX(i) + 7.89935) / 15.7987
                  : (-0.23396 - p.getX(i)) / 7.73936;
              uv[i * 2 + 1] =
                kind === 'inner'
                  ? (p.getY(i) + 5.8974 - 0.34562) / 11.1035
                  : (p.getY(i) + 5.8974 - 0.27173) / 11.2513;
            }
            geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
          }
          if (moving || flexible) {
            material.onBeforeCompile = (shader: THREE.WebGLProgramParametersWithUniforms) => {
              shader.uniforms.foldAngle = bend;
              if (kind) {
                shader.uniforms.uiFrame = screens[kind].frame;
                shader.uniforms.uiGradient = screens[kind].gradient;
                shader.uniforms.uiReferenceEye = { value: uiReferenceEye };
                shader.uniforms.uiPixel = screens[kind].pixel;
                shader.fragmentShader = shader.fragmentShader
                  .replace(
                    '#include <map_pars_fragment>',
                    `#include <map_pars_fragment>\n${kind === 'inner' ? '#define INNER_UI' : ''}\n${screenShader}`
                  )
                  .replace('#include <map_fragment>', 'diffuseColor.rgb *= screenColor();');
                shader.vertexShader = `varying vec3 vUIPosition;\n${shader.vertexShader}`;
                shader.vertexShader = shader.vertexShader.replace(
                  '#include <project_vertex>',
                  'vUIPosition = transformed;\n#include <project_vertex>'
                );
              }
              shader.vertexShader = `${flexible ? '#define FLEXIBLE_SCREEN\n' : ''}${foldShader}\n${shader.vertexShader}`;
              shader.vertexShader = shader.vertexShader.replace(
                '#include <begin_vertex>',
                flexible
                  ? 'vec4 folded = bendStrip(position);\nvec3 transformed = vec3(folded.x, position.y, folded.y);'
                  : 'vec2 folded = rotateHinge(position.xz);\nvec3 transformed = vec3(folded.x, position.y, folded.y);'
              );
              shader.vertexShader = shader.vertexShader.replace(
                '#include <beginnormal_vertex>',
                `
                vec3 objectNormal = vec3(normal);
                ${flexible ? 'vec4 strip = bendStrip(position); float a = atan(-strip.w, strip.z);' : 'float a = foldAngle;'}
                objectNormal.x = cos(a) * normal.x + sin(a) * normal.z;
                objectNormal.z = -sin(a) * normal.x + cos(a) * normal.z;
              `
              );
            };
            material.customProgramCacheKey = () =>
              `${flexible ? 'fold-flexible' : 'fold-cover'}-${kind || 'body'}`;
          }
          const mesh = new THREE.Mesh(geometry, material);
          mesh.name = object.name;
          mesh.frustumCulled = false;
          phone.add(mesh);
        });
        let customTexture: THREE.CanvasTexture | undefined;
        let contentVersion = 0;
        let appliedContent: { theme: 'wallpaper' | 'launcher'; source?: string } | undefined;
        const setAngle = (value: number) => {
          const opening = clampAngle(value);
          bend.value = ((180 - opening) / 180) * Math.PI;
          screens.outer.material.color.setScalar(opening >= 180 ? 0 : 1);
        };
        controllerRef.current = {
          setAngle,
          setInteractive(value) {
            if (controls) controls.enabled = value;
            if (renderer) renderer.domElement.style.touchAction = value ? 'none' : 'pan-y';
          },
          async setContent(theme, source) {
            if (appliedContent?.theme === theme && appliedContent.source === source) return;
            const version = ++contentVersion;
            for (const kind of ['inner', 'outer'] as const) {
              const screen = screens[kind];
              const texture = screen.defaultTextures[theme];
              screen.material.map = texture;
              screen.pixel.value.set(1 / texture.image.width, 1 / texture.image.height);
              screen.frame.value.copy(kind === 'inner' ? innerUIFrame : outerUIFrame);
              screen.gradient.value.set(kind === 'inner' ? 0.5 : 0, kind === 'inner' ? 0 : 1);
            }
            setError('');
            if (!source) {
              appliedContent = { theme, source };
              if (customTexture) {
                customTexture.dispose();
                textures.delete(customTexture);
                customTexture = undefined;
              }
              return;
            }
            try {
              const image = new Image();
              image.crossOrigin = 'anonymous';
              image.src = source;
              await image.decode();
              if (disposed || version !== contentVersion) return;
              const canvas = document.createElement('canvas');
              canvas.width = 1600;
              canvas.height = 1125;
              const context = canvas.getContext('2d');
              if (!context) throw new Error('Canvas 2D is unavailable.');
              context.fillStyle = '#101418';
              context.fillRect(0, 0, 1600, 1125);
              const scale = Math.min(1600 / image.width, 1125 / image.height);
              const width = image.width * scale,
                height = image.height * scale;
              context.drawImage(image, (1600 - width) / 2, (1125 - height) / 2, width, height);
              if (customTexture) {
                customTexture.dispose();
                textures.delete(customTexture);
              }
              customTexture = new THREE.CanvasTexture(canvas);
              customTexture.colorSpace = THREE.SRGBColorSpace;
              customTexture.anisotropy = renderer?.capabilities.getMaxAnisotropy() ?? 1;
              textures.add(customTexture);
              for (const kind of ['inner', 'outer'] as const) {
                const screen = screens[kind];
                screen.material.map = customTexture;
                screen.pixel.value.set(1 / 1600, 1 / 1125);
                screen.frame.value.copy(innerUIFrame);
                screen.gradient.value.set(0.5, kind === 'inner' ? 0 : 1);
              }
              appliedContent = { theme, source };
              setError('');
            } catch {
              if (!disposed && version === contentVersion)
                setError('Unable to load the screen image. Check its URL and CORS permissions.');
            }
          },
        };
        const resize = () => {
          if (!renderer) return;
          const { width, height } = viewport.getBoundingClientRect();
          if (!width || !height) return;
          renderer.setSize(width, height);
          camera.aspect = width / height;
          const pixelsPerUnit = Math.min(width / 25, height / 17, 37);
          camera.fov = THREE.MathUtils.radToDeg(2 * Math.atan(height / pixelsPerUnit / 2 / 40));
          camera.updateProjectionMatrix();
        };
        observer = new ResizeObserver(resize);
        observer.observe(viewport);
        resize();
        controllerRef.current.setInteractive(contentRef.current.interactive);
        await controllerRef.current.setContent(
          contentRef.current.screen,
          contentRef.current.imageSrc
        );
        if (disposed) return;
        setAngle(angleRef.current);
        await renderer.compileAsync(scene, camera);
        if (disposed) return;
        // Draw a complete frame behind the poster before fading the poster away.
        renderer.render(scene, camera);
        setStatus('ready');
        renderer.setAnimationLoop(() => {
          if (document.hidden) return;
          controls?.update();
          renderer?.render(scene, camera);
        });
      } catch (cause) {
        release();
        if (disposed) return;
        controllerRef.current = null;
        setStatus('error');
        setError(
          'Unable to load the 3D preview. Check WebGL support and the prepared iPhone Duo assets.'
        );
        console.error('IPhoneDuo:', cause);
      }
    }
    void initialize(viewport);
    return () => {
      disposed = true;
      controllerRef.current = null;
      release();
      lease.release();
    };
  }, [assetPath, attempt]);

  return (
    <div
      className={cn('relative min-h-[280px] w-full', className)}
      data-iphone-duo=''
      data-status={status}
    >
      <div
        ref={viewportRef}
        className='absolute inset-0'
        style={{ opacity: status === 'ready' ? 1 : 0 }}
      />
      <div
        className='pointer-events-none absolute inset-0 z-10 grid place-items-center overflow-hidden transition-opacity duration-200 motion-reduce:transition-none'
        style={{ containerType: 'size', opacity: status === 'ready' ? 0 : 1 }}
        aria-hidden={status === 'ready'}
      >
        {/* biome-ignore lint/performance/noImgElement: this portable poster must render before JavaScript, without a Next.js image optimizer. */}
        <img
          src={
            posterSrc ??
            `${assetPath.replace(/\/$/, '')}/posters/${screen}-${initialAngleRef.current < 90 ? 'closed' : 'open'}.svg`
          }
          alt='iPhone Duo'
          width={925}
          height={629}
          loading='eager'
          fetchPriority='high'
          decoding='async'
          style={{ width: 'min(100cqw, calc(100cqh * 25 / 17), 925px)', height: 'auto' }}
        />
      </div>
      {error && (
        <div
          role='alert'
          className='absolute inset-x-4 top-4 z-20 rounded-xl border bg-background/95 p-4 text-center text-sm text-foreground'
        >
          <p>{error}</p>
          {status === 'error' && (
            <button
              type='button'
              className='mt-2 rounded-md border px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2'
              onClick={() => setAttempt((value) => value + 1)}
            >
              Try again
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default IPhoneDuo;
