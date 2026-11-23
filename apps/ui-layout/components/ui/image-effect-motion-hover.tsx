'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { ImageEffectProps } from './image-effects/props';

type MotionHoverProps = ImageEffectProps & {
  labels?: readonly string[];
  captions?: readonly string[];
};

// React implementation of the first motion-hover study by Niccolò Miranda and Clément Roche.
export function MotionHover({images, labels, captions, imageIndex, pointer, className, style, background, label}: MotionHoverProps) {
  const stage = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const cursor = useRef({x: 0.5, y: 0.5, item: -1});
  const control = useRef({imageIndex,pointer});
  control.current={imageIndex,pointer};
  const sources = JSON.stringify(images);
  useEffect(()=>{
    const el = stage.current, host = overlay.current;
    if (!el || !host) return;
    const urls: string[] = JSON.parse(sources);
    let renderer: THREE.WebGLRenderer;
    try {renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});}
    catch {return;}
    host.appendChild(renderer.domElement);
    renderer.domElement.style.cssText='display:block;width:100%;height:100%;pointer-events:none';
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
    const camera=new THREE.PerspectiveCamera(40,1,.1,100);
    camera.position.z=3;
    const scene=new THREE.Scene();
    const uniforms={
      photo:{value:null as THREE.Texture|null},
      lag:{value:new THREE.Vector2()},
      opacity:{value:0},
    };
    const material=new THREE.ShaderMaterial({uniforms,transparent:true,depthWrite:false,
      vertexShader:`varying vec2 coord; uniform vec2 lag;
        void main(){coord=uv; vec3 p=position; p.xy+=sin(3.14159265*uv.yx)*lag;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
      fragmentShader:`varying vec2 coord;uniform sampler2D photo;uniform vec2 lag;uniform float opacity;
        void main(){vec3 rgb=texture2D(photo,coord).rgb;rgb.r=texture2D(photo,coord+lag).r;
        gl_FragColor=vec4(rgb,opacity);
        #include <colorspace_fragment>
        }`
    });
    const geometry=new THREE.PlaneGeometry(1,1,32,32);
    const plane=new THREE.Mesh(geometry,material);
    scene.add(plane);
    const observer=new ResizeObserver(()=>{
      const w=Math.max(el.clientWidth,1),h=Math.max(el.clientHeight,1);
      camera.aspect=w/h; camera.updateProjectionMatrix(); renderer.setSize(w,h,false);
    });
    observer.observe(el);
    let disposed=false;
    const textures: (THREE.Texture|undefined)[]=[];
    const loader=new THREE.TextureLoader();
    urls.forEach((url,i)=>loader.load(url,tex=>{
      if(disposed){tex.dispose();return;}
      tex.colorSpace=THREE.SRGBColorSpace; textures[i]=tex;
    },undefined,()=>{}));
    const target=new THREE.Vector2();
    let last=0;
    renderer.setAnimationLoop((now:number)=>{
      const dt=last?Math.min(.1,(now-last)/1000):1/60;last=now;
      const {item,x,y}=cursor.current;
      const idx=control.current.imageIndex??item;
      const coords=control.current.pointer;
      const height=6*Math.tan(THREE.MathUtils.degToRad(20));
      target.set(((coords?.[0]??x)-.5)*height*camera.aspect,((coords?.[1]??y)-.5)*height);
      const gain=1-Math.exp(-6*dt);
      plane.position.x+=(target.x-plane.position.x)*gain;
      plane.position.y+=(target.y-plane.position.y)*gain;
      uniforms.lag.value.set(target.x-plane.position.x,target.y-plane.position.y).multiplyScalar(.25);
      const tex=textures[idx];
      if(tex){uniforms.photo.value=tex;const img=tex.image as HTMLImageElement;plane.scale.x=img.width/img.height;}
      uniforms.opacity.value+=((tex?1:0)-uniforms.opacity.value)*(1-Math.exp(-13*dt));
      plane.visible=!!uniforms.photo.value && uniforms.opacity.value>.001;
      renderer.render(scene,camera);
    });
    return ()=>{disposed=true;observer.disconnect();renderer.setAnimationLoop(null);textures.forEach(tex=>tex?.dispose());geometry.dispose();material.dispose();renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();};
  },[sources]);

  function point(clientX:number,clientY:number){
    const box=stage.current?.getBoundingClientRect();
    if(box){cursor.current.x=(clientX-box.left)/box.width;cursor.current.y=1-(clientY-box.top)/box.height;}
  }
  const choice=(index:number)=><button key={index} type="button" aria-label={labels?.[index]??`Image ${index+1}`}
    onPointerEnter={e=>{point(e.clientX,e.clientY);cursor.current.item=index;}}
    onClick={e=>{if(e.detail>0)point(e.clientX,e.clientY);cursor.current.item=index;}}
    onFocus={e=>{if(e.currentTarget.matches(':focus-visible')){const r=e.currentTarget.getBoundingClientRect();point(r.x+r.width/2,r.y+r.height/2);cursor.current.item=index;}}}
    onBlur={()=>{cursor.current.item=-1;}}
    style={{border:0,background:'transparent',color:'inherit',padding:'0 1.4cqw',textTransform:'uppercase',font:'inherit',cursor:'pointer'}}>
    <span style={{display:'block',fontFamily:'var(--motion-hover-font, Impact, sans-serif)',fontWeight:400,fontSize:'9cqw',lineHeight:1,letterSpacing:'-.04em'}}>{labels?.[index]??`Image ${index+1}`}</span>
    {captions?.[index] && <span style={{fontSize:'1.3cqw',letterSpacing:'-.02em'}}>{captions[index]}</span>}
  </button>;
  const rule=(width:string)=><span aria-hidden style={{height:2,width,flexShrink:1,background:'currentColor'}}/>;
  const row={display:'flex',alignItems:'center',justifyContent:'center',gap:'.8cqw'} as const;
  return <div ref={stage} className={className} aria-label={label??'Motion hover image index'} onPointerMove={e=>point(e.clientX,e.clientY)}
    style={{position:'relative',containerType:'inline-size',display:'grid',alignItems:'center',aspectRatio:'16/10',width:'100%',overflow:'hidden',background:background??'#b1a59f',color:'#333',...style}}>
    <div aria-hidden ref={overlay} style={{position:'absolute',inset:0,pointerEvents:'none'}}/>
    <div onPointerLeave={()=>{cursor.current.item=-1;}} style={{position:'relative',display:'grid',gap:'5cqw',justifySelf:'center',maxWidth:'96%',textAlign:'center'}}>
      {Array.from({length:Math.ceil(images.length/3)},(_,group)=>{
        const i=group*3;
        return <div key={i} style={{display:'grid',gap:'4cqw'}}>
          <div style={row}>{choice(i)}{i+1<images.length&&<>{rule('8cqw')}{choice(i+1)}</>}</div>
          {i+2<images.length&&<div style={row}>{rule('12cqw')}{choice(i+2)}{rule('22cqw')}</div>}
        </div>;
      })}
    </div>
  </div>;
}
