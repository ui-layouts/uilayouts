'use client';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import * as THREE from 'three';

export interface ProgressiveBlurProps {
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
float hash(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
vec4 blur(vec2 q,float radius){
 vec4 c=sampleA(q);
 for(int i=1;i<=24;i++){float f=float(i), a=f*2.39996;c+=sampleA(q+sqrt(f/24.)*radius*vec2(cos(a)/ratio,sin(a)));}
 return c/25.;
}

void main(){vec2 uv=vUv,q=uv;vec4 color=sampleA(q);

    float edge=smoothstep(.18,.51,abs(uv.y-.5));
    color=blur(q,.048*edge);
    color.rgb-=.023*edge*hash(gl_FragCoord.xy+floor(t*24.));

gl_FragColor=color;
#include <colorspace_fragment>
}`;

export function ProgressiveBlur(props: ProgressiveBlurProps) {
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
        aria-label={props.label ?? 'ProgressiveBlur'}
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
