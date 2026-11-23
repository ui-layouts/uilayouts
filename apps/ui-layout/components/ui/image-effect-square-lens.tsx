'use client';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import * as THREE from 'three';
/* mouse-following-square-lens-effect
MIT License

Copyright (c) 2026 Mouse Following Square Lens Effect contributors

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

export interface SquareLensProps {
  images: readonly string[];
  imageIndex?: number;
  pointer?: readonly [number, number];
  className?: string;
  style?: CSSProperties;
  label?: string;
  background?: string;
}

const vertexShader = `uniform float ratio,t,phase,hovered,opened;uniform vec2 mouse;varying vec2 vUv;
void main(){vUv=uv;vec3 p=position;
 gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.); }`;
const fragmentShader = `uniform float ratio,t,phase,hovered,opened;uniform vec2 mouse;varying vec2 vUv;
uniform sampler2D mapA,mapB;
uniform float ratioA,ratioB;
vec2 cover(vec2 uv,float imageRatio){return .5+(uv-.5)*min(vec2(ratio/imageRatio,imageRatio/ratio),vec2(1.));}
vec4 sampleA(vec2 uv){return texture2D(mapA,cover(uv,ratioA));}
vec4 sampleB(vec2 uv){return texture2D(mapB,cover(uv,ratioB));}

vec2 getCoverUv(vec2 uv, vec2 meshSize, vec2 textureSize) {
  vec2 meshRatio = vec2(meshSize.x / meshSize.y, meshSize.y / meshSize.x);
  vec2 textureRatio = vec2(textureSize.x / textureSize.y, textureSize.y / textureSize.x);
  vec2 resolutionRatio = vec2(
    min(meshRatio.x / textureRatio.x, 1.0),
    min(meshRatio.y / textureRatio.y, 1.0)
  );

  return (uv - 0.5) * resolutionRatio + 0.5;
}

// ---------------------------------------------------------------------------
// Applies a CC Lens-style radial distortion to UV coordinates.
// ---------------------------------------------------------------------------
float getCCLensScale(float distortion, float radius2) {
  if (distortion >= 0.0) {
    return 1.0 + distortion * radius2;
  }

  return 1.0 / (1.0 - distortion * radius2);
}

vec2 getCCLensUv(vec2 uv, vec2 resolution, float distortion) {
  vec2 centeredUv = uv - 0.5;
  vec2 aspectScale = vec2(resolution.x / resolution.y, 1.0);
  vec2 centeredPosition = centeredUv * aspectScale;

  float radius2 = dot(centeredPosition, centeredPosition);
  float lensScale = getCCLensScale(distortion, radius2);

  vec2 distortedPosition = centeredPosition * lensScale;
  vec2 distortedCenteredUv = distortedPosition / aspectScale;
  vec2 distortedUv = distortedCenteredUv + 0.5;
  vec2 distortionOffset = distortedUv - uv;

  return uv - distortionOffset;
}

// ---------------------------------------------------------------------------
// Generates a pseudo-random vec3 from a 3D input coordinate.
// ---------------------------------------------------------------------------
// <www.shadertoy.com/view/XsX3zB>
// by Nikita Miropolskiy
vec3 random3(vec3 c) {
  float j = 4096.0 * sin(dot(c, vec3(17.0, 59.4, 15.0)));
  vec3 r;

  r.z = fract(512.0 * j);
  j *= 0.125;
  r.x = fract(512.0 * j);
  j *= 0.125;
  r.y = fract(512.0 * j);

  return r - 0.5;
}

void main(){vec2 uv=vUv,q=uv;vec4 color=sampleA(q);

{
  vec2 texture2Uv = getCoverUv(uv, vec2(ratio,1.), vec2(ratioB,1.));

  // Convert the square UV coordinates from the 0.0-to-1.0 range to the -1.0-to-1.0 range.
  vec2 uvSquare = uv * 2.0 - 1.0;

  // Offset the coordinates so the mouse position becomes the origin for the square test.
  uvSquare -= (mouse*2.-1.);

  // Calculate an aspect-ratio correction factor for determining the square's bounds.
  vec2 squareAspectScale = vec2(min((vec2(ratio,1.).y / vec2(ratio,1.).x), 1.0), min((vec2(ratio,1.).x / vec2(ratio,1.).y), 1.0));

  // Correct the test coordinates so the mask remains square.
  uvSquare /= squareAspectScale;

  float wave = sin(
    texture2Uv.y * 64.
    + t * 2.
  ) * .0018;
  texture2Uv.y += wave;
  texture2Uv += random3(
    vec3(texture2Uv * 220., t * 7.)
  ).x * .001;

  // Store half the square's side length so .37 can control its size.
  float squareHalfSize = .37;

  // Calculate the square's left edge.
  float left = -squareHalfSize;

  // Calculate the square's right edge.
  float right = squareHalfSize;

  // Calculate the square's bottom edge.
  float bottom = -squareHalfSize;

  // Calculate the square's top edge.
  float top = squareHalfSize;

  // Return 1.0 when uvSquare is inside the square and 0.0 when it is outside.
  float squareMask = step(left, uvSquare.x) * (1.0 - step(right, uvSquare.x)) * step(bottom, uvSquare.y) * (1.0 - step(top, uvSquare.y));

  // Convert uvSquare to the 0.0-to-1.0 range for the CC Lens distortion.
  vec2 squareUv = uvSquare / (squareHalfSize * 2.0) + 0.5;

  // Apply the CC Lens distortion inside the square.
  vec2 distortedSquareUv = getCCLensUv(squareUv, vec2(1.0), .58);

  // Calculate the square-local offset from the difference before and after distortion.
  vec2 squareLensOffset = distortedSquareUv - squareUv;

  // squareLensOffset is relative to the square. Adding it directly to uv would treat it as
  // relative to the entire mesh and make the distortion too large, so scale it by the square's
  // half-size and aspect-ratio correction factor to convert it to a mesh-relative offset.
  vec2 viewportLensOffset = squareLensOffset * squareHalfSize * squareAspectScale;

  // Convert the coordinates inside the square to UV coordinates for mapA.
  vec2 lensTexture1Uv = getCoverUv(uv + viewportLensOffset, vec2(ratio,1.), vec2(ratioA,1.));

  // Use the square's center as the origin so the RGB shift grows stronger toward the outside.
  vec2 rgbShiftDirection = (squareUv - 0.5) * 2.0;

  // Sample each RGB channel with a different UV offset to create color separation.
  float r = texture2D(mapA, lensTexture1Uv + rgbShiftDirection * .012).r;
  float g = texture2D(mapA, lensTexture1Uv + rgbShiftDirection * .003).g;
  float b = texture2D(mapA, lensTexture1Uv + rgbShiftDirection * -.007).b;

  // Recombine the shifted mapA channels to create the color inside the square.
  vec4 insideColor = vec4(r, g, b, 1.0);

  // Sample mapB for the color outside the square.
  vec4 outsideColor = texture2D(mapB, texture2Uv);

  // Blend the inside and outside colors according to the square mask.
  vec4 finalColor = mix(outsideColor, insideColor, squareMask);

  color = finalColor;
}

gl_FragColor=color;
#include <colorspace_fragment>
}`;

export function SquareLens(props: SquareLensProps) {
  const host = useRef<HTMLDivElement>(null);
  const options = useRef(props);
  options.current = props;
  const [status, setStatus] = useState('');
  const sources = JSON.stringify(props.images);
  useEffect(() => {
    const node = host.current;
    if (!node) return;
    const urls: string[] = JSON.parse(sources);
    if (!urls.length) {
      setStatus('Supply at least one image.');
      return;
    }
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
    } catch {
      setStatus('WebGL is unavailable.');
      return;
    }
    setStatus('Loading images…');
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.domElement.style.cssText = 'display:block;width:100%;height:100%';
    node.prepend(renderer.domElement);
    const uniforms = {
      t: { value: 0 },
      ratio: { value: 1 },
      ratioA: { value: 1 },
      ratioB: { value: 1 },
      mapA: { value: null as THREE.Texture | null },
      mapB: { value: null as THREE.Texture | null },
      mouse: { value: new THREE.Vector2(0.5, 0.5) },
      phase: { value: 0 },
      hovered: { value: 0 },
      opened: { value: 0 },
    };
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });
    const geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    const mesh = new THREE.Mesh(geometry, material),
      scene = new THREE.Scene();
    scene.add(mesh);
    const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 40);
    camera.position.z = 0.5 / Math.tan(Math.PI / 8);
    function resize() {
      const w = Math.max(1, node!.clientWidth),
        h = Math.max(1, node!.clientHeight);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      mesh.scale.x = w / h;
      uniforms.ratio.value = w / h;
      renderer.setSize(w, h, false);
    }
    const observer = new ResizeObserver(resize);
    resize();
    observer.observe(node);
    const cursor = new THREE.Vector2(0.5, 0.5);
    let inside = false;
    const events = new AbortController(),
      eventOptions = { signal: events.signal };
    node.addEventListener(
      'pointermove',
      (event) => {
        const rect = node.getBoundingClientRect();
        inside = true;
        cursor.set(
          (event.clientX - rect.left) / rect.width,
          1 - (event.clientY - rect.top) / rect.height
        );
      },
      eventOptions
    );
    node.addEventListener(
      'pointerleave',
      () => {
        inside = false;
      },
      eventOptions
    );

    let disposed = false,
      frame = 0,
      last = 0;
    const owned = new Set<THREE.Texture>();
    const loader = new THREE.TextureLoader();
    Promise.all(
      urls.map(async (url) => {
        const texture = await loader.loadAsync(url);
        if (disposed) texture.dispose();
        else owned.add(texture);
        texture.colorSpace = THREE.SRGBColorSpace;
        return texture;
      })
    )
      .then((textures) => {
        if (disposed) return;
        setStatus('');
        const wrap = (n: number) =>
          ((n % textures.length) + textures.length) % textures.length;
        function draw(now: number) {
          if (disposed) return;
          const p = options.current,
            dt = last ? Math.min(0.1, (now - last) / 1000) : 0;
          last = now;
          uniforms.t.value += dt;
          const index =
            p.imageIndex !== undefined && Number.isFinite(p.imageIndex)
              ? Math.trunc(p.imageIndex)
              : 0;
          const a = textures[wrap(index)],
            b = textures[wrap(index + 1)];
          uniforms.mapA.value = a;
          uniforms.mapB.value = b;
          uniforms.ratioA.value = a.image.width / a.image.height;
          uniforms.ratioB.value = b.image.width / b.image.height;
          if (p.pointer) uniforms.mouse.value.set(...p.pointer);
          else uniforms.mouse.value.copy(cursor);
          if (!inside && !p.pointer) uniforms.mouse.value.x = -2;
          uniforms.hovered.value +=
            ((inside || p.pointer ? 1 : 0) - uniforms.hovered.value) *
            (1 - Math.exp(-12 * dt));

          renderer.setClearColor(p.background ?? '#161819');
          renderer.render(scene, camera);
          frame = requestAnimationFrame(draw);
        }
        frame = requestAnimationFrame(draw);
      })
      .catch(() => {
        if (!disposed)
          setStatus(
            'An image could not be loaded. Check its URL and cross-origin permissions.'
          );
      });
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      events.abort();
      observer.disconnect();
      owned.forEach((x) => x.dispose());
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
  }, [sources]);
  return (
    <div
      className={props.className}
      style={{
        aspectRatio: '16/9',
        position: 'relative',
        overflow: 'hidden',
        background: props.background ?? '#161819',
        ...props.style,
      }}
    >
      <div
        ref={host}
        role='img'
        aria-label={props.label ?? 'SquareLens'}
        style={{ position: 'absolute', inset: 0 }}
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
