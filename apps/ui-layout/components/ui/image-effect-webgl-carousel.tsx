'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { CSSProperties } from 'react';
interface ImageEffectProps {
  images: readonly string[];
  className?: string;
  style?: CSSProperties;
  label?: string;
  imageIndex?: number;
  pointer?: readonly [number, number];
  background?: string;
}

/** Adapted from supahfunk/webgl-carousel.
MIT License

Copyright (c) 2009 - 2022 [Codrops](https://tympanus.net/codrops)

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
export function WebGLCarousel({
  images,
  imageIndex,
  label,
  className,
  style,
  background,
}: ImageEffectProps) {
  const host = useRef<HTMLDivElement>(null);
  const initial = useRef(imageIndex);
  initial.current = imageIndex;
  const sources = JSON.stringify(images);
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const urls: string[] = JSON.parse(sources);
    if (!urls.length) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
    } catch {
      return;
    }
    el.appendChild(renderer.domElement);
    renderer.domElement.style.cssText = 'width:100%;height:100%;display:block';
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    renderer.setClearColor(background ?? '#fff');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100);
    camera.position.z = 5;
    const viewport = new THREE.Vector2(),
      geometry = new THREE.PlaneGeometry(1, 2.5, 30, 30);
    const textureLoader = new THREE.TextureLoader();
    let disposed = false;
    const cards = urls.map((src, i) => {
      const tex = textureLoader.load(src, () => {
        if (!disposed) mesh.visible = true;
      });
      tex.colorSpace = THREE.SRGBColorSpace;
      const material = new THREE.ShaderMaterial({
        uniforms: {
          photo: { value: tex },
          open: { value: 0 },
          zoom: { value: viewport },
          ratio: { value: 0.4 },
          imageRatio: { value: 1 },
          glide: { value: 0 },
        },
        vertexShader: `varying vec2 coord;uniform float open;uniform vec2 zoom;
          void main(){coord=uv;vec3 p=position;
          float wave=cos(open*1.5707963)*(.5+.5*sin(length(uv-.5)*15.+open*12.));
          p.xy*=mix(vec2(1.),zoom+wave,open);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
        fragmentShader: `varying vec2 coord;uniform sampler2D photo;uniform float ratio,imageRatio,glide;
          void main(){vec2 uv=.5+(coord-.5)*min(vec2(ratio/imageRatio,imageRatio/ratio),vec2(1.));
          vec3 rgb=texture2D(photo,uv).rgb;float shift=.003*glide;
          rgb.r=texture2D(photo,uv+vec2(shift,0.)).r;rgb.b=texture2D(photo,uv-vec2(shift,0.)).b;
          gl_FragColor=vec4(rgb,1.);
          #include <colorspace_fragment>
          }`,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(i * 1.1, -i * 0.1, 0);
      mesh.visible = false;
      mesh.frustumCulled = false;
      scene.add(mesh);
      return mesh;
    });
    const observer = new ResizeObserver(() => {
      const w = Math.max(1, el.clientWidth),
        h = Math.max(1, el.clientHeight);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const height = 10 * Math.tan(THREE.MathUtils.degToRad(37.5));
      viewport.set((height * w) / h, height / 2.5);
    });
    observer.observe(el);
    let progress = 0,
      open = -1,
      hover = -1,
      down = false,
      start = 0,
      oldX = 0,
      dragged = false,
      last = 0,
      previous = 0,
      controlled: number | undefined;
    const limit = urls.length - 1,
      ray = new THREE.Raycaster(),
      mouse = new THREE.Vector2();
    const jump = (i: number) => {
      progress = limit ? (100 * THREE.MathUtils.clamp(i, 0, limit)) / limit : 0;
    };
    const index = () =>
      Math.min(limit, Math.floor((progress * limit) / 100 + 0.000001));
    const hit = (e: PointerEvent) => {
      const box = el.getBoundingClientRect();
      mouse.set(
        ((e.clientX - box.left) / box.width) * 2 - 1,
        1 - ((e.clientY - box.top) / box.height) * 2
      );
      ray.setFromCamera(mouse, camera);
      const intersection = ray
        .intersectObjects(cards, false)
        .find((h) => h.object.visible);
      return intersection
        ? cards.indexOf(intersection.object as (typeof cards)[number])
        : -1;
    };
    const wheel = (e: WheelEvent) => {
      if (open < 0) {
        progress = THREE.MathUtils.clamp(
          progress +
            0.02 *
              (Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX),
          0,
          100
        );
        e.preventDefault();
      }
    };
    const press = (e: PointerEvent) => {
      if (!e.isPrimary) return;
      el.setPointerCapture(e.pointerId);
      down = true;
      oldX = start = e.clientX;
      dragged = false;
    };
    const move = (e: PointerEvent) => {
      if (!e.isPrimary) return;
      hover = hit(e);
      if (down && open < 0) {
        dragged ||= Math.abs(e.clientX - start) > 4;
        progress = THREE.MathUtils.clamp(
          progress - 0.3 * (e.clientX - oldX),
          0,
          100
        );
      }
      oldX = e.clientX;
    };
    const release = (e: PointerEvent) => {
      if (!down) return;
      down = false;
      if (!dragged) {
        open = open >= 0 ? -1 : hit(e);
        if (open >= 0) jump(open);
      }
    };
    const cancel = () => {
      down = false;
      hover = -1;
    };
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') open = -1;
      else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open = open < 0 ? index() : -1;
      } else if (open < 0 && ['ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
        jump(index() + (e.key === 'ArrowLeft' ? -1 : 1));
      }
    };
    const leave = () => {
      hover = -1;
    };
    el.addEventListener('wheel', wheel, { passive: false });
    el.addEventListener('pointerdown', press);
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', release);
    el.addEventListener('pointercancel', cancel);
    el.addEventListener('pointerleave', leave);
    el.addEventListener('keydown', key);
    renderer.setAnimationLoop((now: number) => {
      const dt = last ? Math.min(0.1, (now - last) / 1000) : 1 / 60;
      last = now;
      const k = 1 - Math.exp(-4 * dt),
        active = initial.current;
      if (active !== controlled) {
        controlled = active;
        if (active !== undefined) {
          jump(active);
          open = -1;
        }
      }
      const slide = index(),
        speed = Math.min(5, Math.abs(progress - previous));
      previous = THREE.MathUtils.lerp(
        previous,
        progress,
        1 - Math.exp(-6 * dt)
      );
      cards.forEach((card, i) => {
        const u = card.material.uniforms,
          p = (u.open.value = THREE.MathUtils.lerp(
            u.open.value,
            open === i ? 1 : 0,
            k
          ));
        const scale = THREE.MathUtils.lerp(
          card.scale.x,
          hover === i && open < 0 ? 1.1 : 1,
          k
        );
        card.scale.set(scale, scale, 1);
        card.position.x = THREE.MathUtils.lerp(
          card.position.x,
          (i - slide) * 1.1,
          k
        );
        card.position.y = THREE.MathUtils.lerp(
          card.position.y,
          -Math.abs(i - slide) * 0.1,
          k
        );
        card.position.z = p * 0.05;
        u.ratio.value =
          THREE.MathUtils.lerp(1, viewport.x, p) /
          THREE.MathUtils.lerp(2.5, viewport.y * 2.5, p);
        const img = u.photo.value.image;
        if (img) u.imageRatio.value = img.width / img.height;
        u.glide.value = speed;
      });
      renderer.render(scene, camera);
    });
    return () => {
      disposed = true;
      renderer.setAnimationLoop(null);
      observer.disconnect();
      el.removeEventListener('wheel', wheel);
      el.removeEventListener('pointerdown', press);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerup', release);
      el.removeEventListener('pointercancel', cancel);
      el.removeEventListener('pointerleave', leave);
      el.removeEventListener('keydown', key);
      cards.forEach((m) => {
        m.material.uniforms.photo.value.dispose();
        m.material.dispose();
      });
      geometry.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
  }, [sources, background]);
  return (
    <div
      ref={host}
      className={className}
      tabIndex={0}
      role='region'
      aria-label={
        label ??
        'Image carousel. Use arrow keys to navigate and Enter to expand.'
      }
      style={{
        width: '100%',
        aspectRatio: '16/10',
        position: 'relative',
        touchAction: 'pan-y',
        overflow: 'hidden',
        background: background ?? '#fff',
        ...style,
      }}
    />
  );
}
