'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import * as THREE from 'three';
import fragmentShader from './image-effects/definitions/sdf-lens-blur.js';

type Props = {
  variation?: 0 | 1 | 2 | 3;
  className?: string;
  style?: CSSProperties;
  label?: string;
  images?: readonly string[];
};

export function SdfLensBlur({ variation = 0, className, style, label = 'SDF lens blur' }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const [error, setError] = useState('');
  useEffect(() => {
    const node = host.current!;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer(); }
    catch { setError('WebGL is unavailable.'); return; }
    setError('');
    node.appendChild(renderer.domElement);
    renderer.domElement.style.cssText = 'width:100%;height:100%;display:block';
    const target = new THREE.Vector2();
    const pointer = new THREE.Vector2();
    const dimensions = new THREE.Vector2();
    const material = new THREE.ShaderMaterial({
      defines: { VAR: variation }, fragmentShader,
      vertexShader: 'varying vec2 v_texcoord; void main(){v_texcoord=uv;gl_Position=vec4(position.xy,0.,1.);}',
      uniforms: { u_mouse: {value:pointer}, u_resolution:{value:dimensions}, u_pixelRatio:{value:1} },
    });
    const scene = new THREE.Scene(), camera = new THREE.Camera();
    const geometry = new THREE.PlaneGeometry(2,2);
    const mesh = new THREE.Mesh(geometry,material);
    mesh.frustumCulled = false;
    scene.add(mesh);
    function size() {
      const dpr = Math.min(devicePixelRatio,2);
      renderer.setPixelRatio(dpr);
      renderer.setSize(Math.max(node.clientWidth,1),Math.max(node.clientHeight,1),false);
      renderer.getDrawingBufferSize(dimensions);
      material.uniforms.u_pixelRatio.value = dpr;
    }
    function move(e: PointerEvent) {
      const r = node.getBoundingClientRect();
      target.set(e.clientX-r.left,e.clientY-r.top);
    }
    let frame = 0, previous = performance.now();
    function draw(now: number) {
      pointer.lerp(target,1-Math.exp(-8*(now-previous)/1000));previous=now;
      renderer.render(scene,camera);frame=requestAnimationFrame(draw);
    }
    const resize = new ResizeObserver(size);
    size();resize.observe(node);node.addEventListener('pointermove',move);
    frame=requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);resize.disconnect();node.removeEventListener('pointermove',move);
      geometry.dispose();material.dispose();renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();
    };
  },[variation]);
  return <div ref={host} role="img" aria-label={label} className={className} style={{aspectRatio:'16/9',background:'black',...style}}>{error}</div>;
}
