'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import * as THREE from 'three';
/*
MIT License

Copyright (c) 2009 - 2024 [Codrops](https://tympanus.net/codrops)

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
const fragmentShader = `
varying vec2 v_texcoord;

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_pixelRatio;

/* common constants */
#ifndef PI
#define PI 3.1415926535897932384626433832795
#endif
#ifndef TWO_PI
#define TWO_PI 6.2831853071795864769252867665590
#endif

/* variation constant */
#ifndef VAR
#define VAR 0
#endif

/* Coordinate and unit utils */
#ifndef FNC_COORD
#define FNC_COORD
vec2 coord(in vec2 p) {
    p = p / u_resolution.xy;
    // correct aspect ratio
    if (u_resolution.x > u_resolution.y) {
        p.x *= u_resolution.x / u_resolution.y;
        p.x += (u_resolution.y - u_resolution.x) / u_resolution.y / 2.0;
    } else {
        p.y *= u_resolution.y / u_resolution.x;
        p.y += (u_resolution.x - u_resolution.y) / u_resolution.x / 2.0;
    }
    // centering
    p -= 0.5;
    p *= vec2(-1.0, 1.0);
    return p;
}
#endif

#define st0 coord(gl_FragCoord.xy)
#define mx coord(u_mouse * u_pixelRatio)

/* signed distance functions */
float sdRoundRect(vec2 p, vec2 b, float r) {
    vec2 d = abs(p - 0.5) * 4.2 - b + vec2(r);
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;
}
float sdCircle(in vec2 st, in vec2 center) {
    return length(st - center) * 2.0;
}
float sdPoly(in vec2 p, in float w, in int sides) {
    float a = atan(p.x, p.y) + PI;
    float r = TWO_PI / float(sides);
    float d = cos(floor(0.5 + a / r) * r - a) * length(max(abs(p) * 1.0, 0.0));
    return d * 2.0 - w;
}

/* antialiased step function */
float aastep(float threshold, float value) {
    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
    return smoothstep(threshold - afwidth, threshold + afwidth, value);
}
/* Signed distance drawing methods */
float fill(in float x) { return 1.0 - aastep(0.0, x); }
float fill(float x, float size, float edge) {
    return 1.0 - smoothstep(size - edge, size + edge, x);
}

float stroke(in float d, in float t) { return (1.0 - aastep(t, abs(d))); }
float stroke(float x, float size, float w, float edge) {
    float d = smoothstep(size - edge, size + edge, x + w * 0.5) - smoothstep(size - edge, size + edge, x - w * 0.5);
    return clamp(d, 0.0, 1.0);
}

void main() {
    vec2 pixel = 1.0 / u_resolution.xy;
    vec2 st = st0 + 0.5;
    vec2 posMouse = mx * vec2(1., -1.) + 0.5;

    /* sdf (Round Rect) params */
    float size = 1.2;
    float roundness = 0.4;
    float borderSize = 0.05;

    /* sdf Circle params */
    float circleSize = 0.3;
    float circleEdge = 0.5;

    /* sdf Circle */
    float sdfCircle = fill(
        sdCircle(st, posMouse),
        circleSize,
        circleEdge
    );

    float sdf;
    if (VAR == 0) {
        /* sdf round rectangle with stroke param adjusted by sdf circle */
        sdf = sdRoundRect(st, vec2(size), roundness);
        sdf = stroke(sdf, 0.0, borderSize, sdfCircle) * 4.0;
    } else if (VAR == 1) {
        /* sdf circle with fill param adjusted by sdf circle */
        sdf = sdCircle(st, vec2(0.5));
        sdf = fill(sdf, 0.6, sdfCircle) * 1.2;
    } else if (VAR == 2) {
        /* sdf circle with stroke param adjusted by sdf circle */
        sdf = sdCircle(st, vec2(0.5));
        sdf = stroke(sdf, 0.58, 0.02, sdfCircle) * 4.0;
    } else if (VAR == 3) {
        /* sdf circle with fill param adjusted by sdf circle */
        sdf = sdPoly(st - vec2(0.5, 0.45), 0.3, 3);
        sdf = fill(sdf, 0.05, sdfCircle) * 1.4;
    }

    vec3 color = vec3(sdf);
    gl_FragColor = vec4(color.rgb, 1.0);
}
`;

type Props = {
  variation?: 0 | 1 | 2 | 3;
  className?: string;
  style?: CSSProperties;
  label?: string;
  images?: readonly string[];
};

export function SdfLensBlur({
  variation = 0,
  className,
  style,
  label = 'SDF lens blur',
}: Props) {
  const host = useRef<HTMLDivElement>(null);
  const [error, setError] = useState('');
  useEffect(() => {
    const node = host.current!;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer();
    } catch {
      setError('WebGL is unavailable.');
      return;
    }
    setError('');
    node.appendChild(renderer.domElement);
    renderer.domElement.style.cssText = 'width:100%;height:100%;display:block';
    const target = new THREE.Vector2();
    const pointer = new THREE.Vector2();
    const dimensions = new THREE.Vector2();
    const material = new THREE.ShaderMaterial({
      defines: { VAR: variation },
      fragmentShader,
      vertexShader:
        'varying vec2 v_texcoord; void main(){v_texcoord=uv;gl_Position=vec4(position.xy,0.,1.);}',
      uniforms: {
        u_mouse: { value: pointer },
        u_resolution: { value: dimensions },
        u_pixelRatio: { value: 1 },
      },
    });
    const scene = new THREE.Scene(),
      camera = new THREE.Camera();
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.frustumCulled = false;
    scene.add(mesh);
    function size() {
      const dpr = Math.min(devicePixelRatio, 2);
      renderer.setPixelRatio(dpr);
      renderer.setSize(
        Math.max(node.clientWidth, 1),
        Math.max(node.clientHeight, 1),
        false
      );
      renderer.getDrawingBufferSize(dimensions);
      material.uniforms.u_pixelRatio.value = dpr;
    }
    function move(e: PointerEvent) {
      const r = node.getBoundingClientRect();
      target.set(e.clientX - r.left, e.clientY - r.top);
    }
    let frame = 0,
      previous = performance.now();
    function draw(now: number) {
      pointer.lerp(target, 1 - Math.exp((-8 * (now - previous)) / 1000));
      previous = now;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(draw);
    }
    const resize = new ResizeObserver(size);
    size();
    resize.observe(node);
    node.addEventListener('pointermove', move);
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      node.removeEventListener('pointermove', move);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
  }, [variation]);
  return (
    <div
      ref={host}
      role='img'
      aria-label={label}
      className={className}
      style={{ aspectRatio: '16/9', background: 'black', ...style }}
    >
      {error}
    </div>
  );
}
