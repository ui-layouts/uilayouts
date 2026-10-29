'use client';

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
import { type ChangeEvent, useEffect, useId, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { USDLoader } from 'three/addons/loaders/USDLoader.js';

type ScreenMode = 'wallpaper' | 'launcher' | 'custom';

export interface IPhoneDuoProps {
  className?: string;
  /** Folder containing the prepared model, textures, and ui subfolder. */
  assetPath?: string;
  defaultAngle?: number;
  autoPlay?: boolean;
  showControls?: boolean;
  onAngleChange?: (angle: number) => void;
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
  setPlaying: (playing: boolean) => void;
  setMode: (mode: Exclude<ScreenMode, 'custom'>) => void;
  upload: (file: File) => Promise<void>;
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
  defaultAngle = 180,
  autoPlay = false,
  showControls = true,
  onAngleChange,
}: IPhoneDuoProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<Controller | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sliderRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLOutputElement>(null);
  const callbackRef = useRef(onAngleChange);
  const initialRef = useRef({ angle: clampAngle(defaultAngle), autoPlay });
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [error, setError] = useState('');
  const [playing, setPlaying] = useState(false);
  const [mode, setMode] = useState<ScreenMode>('wallpaper');
  const [attempt, setAttempt] = useState(0);
  const id = useId();

  useEffect(() => {
    callbackRef.current = onAngleChange;
  }, [onAngleChange]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: attempt deliberately recreates the scene for Retry.
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    let disposed = false;
    let renderer: THREE.WebGLRenderer | undefined;
    let controls: OrbitControls | undefined;
    let observer: ResizeObserver | undefined;
    let environmentTarget: THREE.WebGLRenderTarget | undefined;
    const geometries = new Set<THREE.BufferGeometry>();
    const materials = new Set<THREE.Material>();
    const textures = new Set<THREE.Texture>();
    const rememberMaterial = (material: THREE.Material) => {
      materials.add(material);
      for (const value of Object.values(material)) {
        if (value instanceof THREE.Texture) textures.add(value);
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
    setMode('wallpaper');
    setPlaying(false);

    async function initialize(viewport: HTMLDivElement) {
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.18;
        renderer.domElement.style.cssText =
          'display:block;width:100%;height:100%;touch-action:none;outline:none';
        renderer.domElement.setAttribute(
          'aria-label',
          '3D folding iPhone Duo. Drag to orbit and scroll to zoom.'
        );
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
        const base = assetPath.replace(/\/$/, '');
        const defaultUIs = await loadDefaultUIs(base);
        if (disposed) return;
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
        const model = await new USDLoader().loadAsync(`${base}/iPhone_Duo_Render.usdc`);
        // Remember source resources too: USDLoader creates textures and geometry of its own.
        model.traverse((object) => {
          if (!(object instanceof THREE.Mesh)) return;
          geometries.add(object.geometry);
          for (const material of Array.isArray(object.material)
            ? object.material
            : [object.material])
            rememberMaterial(material);
        });
        if (disposed) {
          release();
          return;
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
        let angle = initialRef.current.angle;
        let isPlaying =
          initialRef.current.autoPlay &&
          !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let phase = 0;
        let transition: { from: number; elapsed: number } | null = null;
        let customTexture: THREE.CanvasTexture | undefined;
        let uploadVersion = 0;
        const setAngle = (value: number) => {
          angle = clampAngle(value);
          bend.value = ((180 - angle) / 180) * Math.PI;
          screens.outer.material.color.setScalar(angle >= 180 ? 0 : 1);
          if (sliderRef.current) sliderRef.current.value = String(angle);
          if (outputRef.current) outputRef.current.value = `${Math.round(angle)}°`;
          callbackRef.current?.(angle);
        };
        const setPlayingValue = (value: boolean) => {
          if (value && !isPlaying) phase = 1.2 + (Math.acos((2 * angle) / 180 - 1) / Math.PI) * 3.1;
          isPlaying = value;
          setPlaying(value);
        };
        controllerRef.current = {
          setAngle(value) {
            transition = null;
            setPlayingValue(false);
            setAngle(value);
          },
          setPlaying(value) {
            transition = null;
            setPlayingValue(value);
          },
          setMode(theme) {
            uploadVersion++;
            for (const kind of ['inner', 'outer'] as const) {
              const screen = screens[kind];
              const texture = screen.defaultTextures[theme];
              screen.material.map = texture;
              screen.pixel.value.set(1 / texture.image.width, 1 / texture.image.height);
              screen.frame.value.copy(kind === 'inner' ? innerUIFrame : outerUIFrame);
              screen.gradient.value.set(kind === 'inner' ? 0.5 : 0, kind === 'inner' ? 0 : 1);
            }
            setMode(theme);
            setError('');
          },
          async upload(file) {
            const version = ++uploadVersion;
            const url = URL.createObjectURL(file);
            try {
              const image = new Image();
              image.src = url;
              await image.decode();
              if (disposed || version !== uploadVersion) return;
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
              setMode('custom');
              setError('');
              setPlayingValue(false);
              transition = { from: angle, elapsed: 0 };
            } catch {
              if (!disposed && version === uploadVersion)
                setError('Unable to read this image. Choose a PNG, JPG, or WebP file.');
            } finally {
              URL.revokeObjectURL(url);
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
        setAngle(angle);
        if (isPlaying) phase = 1.2 + (Math.acos((2 * angle) / 180 - 1) / Math.PI) * 3.1;
        setPlaying(isPlaying);
        setStatus('ready');
        let lastTime = performance.now();
        renderer.setAnimationLoop((now) => {
          const delta = Math.min((now - lastTime) / 1000, 0.05);
          lastTime = now;
          if (document.hidden) return;
          if (isPlaying) {
            phase = (phase + delta) % 8.6;
            const value =
              phase < 1.2
                ? 180
                : phase < 4.3
                  ? 90 * (1 + Math.cos(((phase - 1.2) / 3.1) * Math.PI))
                  : phase < 5.5
                    ? 0
                    : 90 * (1 - Math.cos(((phase - 5.5) / 3.1) * Math.PI));
            setAngle(value);
          } else if (transition) {
            transition.elapsed += delta;
            const progress = Math.min(transition.elapsed / 1.4, 1);
            setAngle(
              THREE.MathUtils.lerp(transition.from, 180, progress * progress * (3 - 2 * progress))
            );
            if (progress === 1) transition = null;
          }
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
    };
  }, [assetPath, attempt]);

  const upload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) void controllerRef.current?.upload(file);
    event.target.value = '';
  };
  const buttonClass =
    'rounded-lg px-3 py-2 text-xs transition-colors hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 disabled:cursor-wait disabled:opacity-40';
  return (
    <div
      className={`relative isolate flex min-h-[520px] w-full flex-col overflow-hidden rounded-2xl bg-[#f6f6f3] text-[#242622] ${className}`}
      data-iphone-duo=''
      data-status={status}
    >
      <div ref={viewportRef} className='relative min-h-[330px] flex-1' />
      {status === 'loading' && (
        <p
          role='status'
          className='pointer-events-none absolute inset-x-0 top-1/3 text-center text-sm text-neutral-500'
        >
          Loading iPhone Duo…
        </p>
      )}
      {error && (
        <div
          role='alert'
          className='absolute inset-x-4 top-4 z-10 rounded-xl border border-red-200 bg-white/95 p-4 text-center text-sm'
        >
          <p>{error}</p>
          {status === 'error' && (
            <button
              type='button'
              className={`${buttonClass} mt-2 border`}
              onClick={() => setAttempt((value) => value + 1)}
            >
              Try again
            </button>
          )}
        </div>
      )}
      {showControls && (
        <div className='mx-auto mb-6 mt-2 flex w-[calc(100%-32px)] max-w-[700px] flex-wrap items-center gap-5 rounded-3xl border border-[#d8dcd2] bg-white/90 p-5 shadow-[0_16px_50px_-26px_#7c83773d] backdrop-blur-md'>
          <div className='min-w-[180px] flex-1'>
            <p className='mb-2 text-xs font-medium'>Screen content</p>
            <fieldset aria-label='Screen content' className='flex rounded-xl bg-[#ecefe6] p-1'>
              {(['wallpaper', 'launcher', 'custom'] as const).map((theme) => (
                <button
                  key={theme}
                  type='button'
                  disabled={status !== 'ready'}
                  aria-pressed={mode === theme}
                  className={`${buttonClass} flex-1 capitalize ${mode === theme ? 'bg-white text-[#45533b] shadow-sm' : 'text-[#66705e]'}`}
                  onClick={() =>
                    theme === 'custom'
                      ? inputRef.current?.click()
                      : controllerRef.current?.setMode(theme)
                  }
                >
                  {theme}
                </button>
              ))}
            </fieldset>
            <input
              ref={inputRef}
              type='file'
              accept='image/png,image/jpeg,image/webp,image/avif'
              aria-label='Upload screen image'
              className='hidden'
              onChange={upload}
            />
          </div>
          <div className='flex min-w-[210px] flex-[1.4] items-center gap-4'>
            <button
              type='button'
              disabled={status !== 'ready'}
              aria-label={playing ? 'Pause animation' : 'Play animation'}
              aria-pressed={playing}
              onClick={() => controllerRef.current?.setPlaying(!playing)}
              className='grid size-11 shrink-0 place-items-center rounded-full bg-[#262c24] text-white hover:bg-[#4e5e44] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 disabled:opacity-40'
            >
              {playing ? (
                <svg
                  aria-hidden='true'
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M6 4h4v16H6zm8 0h4v16h-4z' />
                </svg>
              ) : (
                <svg
                  aria-hidden='true'
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='m7 3 15 9-15 9z' />
                </svg>
              )}
            </button>
            <label className='sr-only' htmlFor={`${id}-angle`}>
              Fold angle
            </label>
            <input
              ref={sliderRef}
              id={`${id}-angle`}
              type='range'
              min='0'
              max='180'
              step='0.1'
              defaultValue={initialRef.current.angle}
              disabled={status !== 'ready'}
              onChange={(event) => controllerRef.current?.setAngle(Number(event.target.value))}
              className='h-9 min-w-0 flex-1 cursor-ew-resize accent-[#6a795c]'
            />
            <output
              ref={outputRef}
              htmlFor={`${id}-angle`}
              aria-live='off'
              className='w-10 text-right text-xs tabular-nums'
            >
              {initialRef.current.angle}°
            </output>
          </div>
        </div>
      )}
      <p className='mb-4 text-center text-[11px] text-[#818974]'>Drag to orbit · Scroll to zoom</p>
    </div>
  );
}

export default IPhoneDuo;
