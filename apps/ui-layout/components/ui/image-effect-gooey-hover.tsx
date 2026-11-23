'use client';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import * as THREE from 'three';

export interface GooeyHoverProps {
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

//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }


    float pool(vec2 delta,float radius) {
      float r=max(radius,.0001);
      return 1.-smoothstep(-r,3.*r,4.*dot(delta,delta));
    }

void main(){vec2 uv=vUv,q=uv;vec4 color=sampleA(q);

    float tm = t*.05;
    vec2 delta=(uv-mouse)*vec2(1.,1./ratio);
    float broad=pool(delta,.04*hovered+.8*opened)*50.;
    float core=pool(delta,.01*hovered+.5*opened);
    vec3 domain=vec3(uv.x+sin(uv.y+tm*2.),uv.y-tm*.2-cos(tm*2.)*.1,tm*.5);
    float n=snoise(domain*8.)*hovered;
    float shift=snoise(domain*2.)*.1;
    float inside=smoothstep(.1,.8,core*5.+n*3.-1.);
    vec4 base=sampleA(.5+(uv-.5)*(1.-hovered*.2)+(.5-mouse)*.1*hovered);
    vec4 reveal=sampleB(.5+(uv-.5)*(1.-hovered*.1)+shift*hovered*(1.-opened));
    reveal.rgb=mix(reveal.rgb,reveal.rgb*vec3(.0314,.0314,.2235),.8*(1.-opened));
    color=mix(base,reveal,clamp(inside+opened,0.,1.));
    float edge=max(.0001,.1*hovered);
    vec2 inset=smoothstep(vec2(0.),vec2(edge),uv)*(1.-smoothstep(vec2(1.-edge),vec2(1.),uv));
    color.a*=smoothstep(0.,.1,100.*inset.x*inset.y-10.-broad);

gl_FragColor=color;
#include <colorspace_fragment>
}`;

export function GooeyHover(props: GooeyHoverProps) {
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
    let expanded = false;
    node.addEventListener(
      'click',
      () => {
        expanded = !expanded;
      },
      eventOptions
    );
    node.addEventListener(
      'keydown',
      (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          expanded = !expanded;
          event.preventDefault();
        }
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

          uniforms.opened.value +=
            ((expanded ? 1 : 0) - uniforms.opened.value) *
            (1 - Math.exp(-5 * dt));
          renderer.setClearColor(p.background ?? '#f7f7f7');
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
        background: props.background ?? '#f7f7f7',
        ...props.style,
      }}
    >
      <div
        ref={host}
        role='button'
        tabIndex={0}
        aria-label={props.label ?? 'GooeyHover'}
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
