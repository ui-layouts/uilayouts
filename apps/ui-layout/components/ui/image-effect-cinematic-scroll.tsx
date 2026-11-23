'use client';
import {useEffect,useRef,useState,type CSSProperties} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import shots from './image-effects/definitions/cinematic-scroll.js';

const defaultModel = 'https://cdn.jsdelivr.net/gh/JosephASG/codrops-cinematic-scroll-animations@7a56d1fdc12058e3a955348a7a9f3387a2bf57da/public/cyberpunk_skyscraper.glb';
type Props={modelUrl?:string;className?:string;style?:CSSProperties;label?:string;images?:readonly string[]};

export function CinematicScroll({modelUrl=defaultModel,className,style,label='Cinematic architecture tour'}:Props){
  const viewport=useRef<HTMLDivElement>(null),stage=useRef<HTMLDivElement>(null),caption=useRef<HTMLDivElement>(null),indicator=useRef<HTMLSpanElement>(null);
  const [error,setError]=useState('');
  useEffect(()=>{
    const node=viewport.current!, host=stage.current!, text=caption.current!;
    let renderer:THREE.WebGLRenderer;
    try{renderer=new THREE.WebGLRenderer({antialias:true});}catch{setError('WebGL is unavailable.');return;}
    setError('');let disposed=false, frame=0;
    const camera=new THREE.PerspectiveCamera(45,1,1,1000);
    const scene=new THREE.Scene();scene.background=new THREE.Color('#0a0a0a');scene.fog=new THREE.Fog('#0a0a0a',12,28);
    const key=new THREE.DirectionalLight(0xffffff,1.2),fill=new THREE.DirectionalLight(0xffffff,.6),accent=new THREE.PointLight(0x00ffff,.8);
    key.position.set(10,20,10);fill.position.set(-10,10,-10);accent.position.set(0,50,20);
    scene.add(key,fill,accent,new THREE.AmbientLight(0xffffff,.4));
    host.prepend(renderer.domElement);renderer.domElement.style.cssText='position:absolute;inset:0;width:100%;height:100%';
    renderer.setPixelRatio(Math.min(devicePixelRatio,2));
    function size(){const w=host.clientWidth,h=host.clientHeight;renderer.setSize(Math.max(1,w),Math.max(1,h),false);camera.aspect=w/Math.max(1,h);camera.updateProjectionMatrix();}
    const resize=new ResizeObserver(size);size();resize.observe(host);
    function release(model:THREE.Object3D){
      const resources=new Set<THREE.BufferGeometry|THREE.Material|THREE.Texture>();
      model.traverse(o=>{if(o instanceof THREE.Mesh){resources.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material]){resources.add(m);for(const value of Object.values(m))if(value instanceof THREE.Texture)resources.add(value);}}});
      for(const resource of resources)resource.dispose();
    }
    let model:THREE.Object3D|undefined;
    new GLTFLoader().load(modelUrl,g=>{if(disposed){release(g.scene);return;}model=g.scene;model.scale.setScalar(3);scene.add(model);},undefined,()=>{if(!disposed)setError('The architecture model could not be loaded.');});
    let prev=-1, progress=0, last=performance.now();
    function draw(now:number){
      const target=100*node.scrollTop/Math.max(1,node.scrollHeight-node.clientHeight);
      progress+=(target-progress)*(1-Math.exp(-(now-last)*.01));last=now;
      const index=shots.findIndex(s=>s.scrollProgress.end>=progress);
      const i=index<0?shots.length-1:index,shot=shots[i],prior=shots[i-1];
      const phase=THREE.MathUtils.clamp((progress-shot.scrollProgress.start)/(shot.scrollProgress.end-shot.scrollProgress.start),0,1);
      const position=prior?.camera??{x:-20,y:0,z:0}, aim=prior?.target??{x:0,y:15,z:0};
      const lerp=(a:number,b:number)=>THREE.MathUtils.lerp(a,b,phase);
      camera.position.set(lerp(position.x,shot.camera.x),lerp(position.y,shot.camera.y),lerp(position.z,shot.camera.z));
      camera.lookAt(lerp(aim.x,shot.target.x),lerp(aim.y,shot.target.y),lerp(aim.z,shot.target.z));
      if(i!==prev){prev=i;text.children[0].textContent=shot.title;text.children[1].textContent=shot.subtitle;
        const pos=shot.position,center=pos==='top'||pos==='center';
        Object.assign(text.style,{top:pos.includes('bottom')?'72%':pos.includes('top')?'22%':'50%',left:center?'50%':pos.includes('right')?'auto':'7%',right:pos.includes('right')?'7%':'auto',transform:center?'translate(-50%,-50%)':'translateY(-50%)',textAlign:center?'center':'left'});}
      text.style.opacity=String(shot.hideText?0:Math.min(1,(1-phase)*8,i===0?1:phase*8));
      if(indicator.current)indicator.current.textContent=Math.round(progress).toString().padStart(3,'0')+'%';
      renderer.render(scene,camera);frame=requestAnimationFrame(draw);
    }
    frame=requestAnimationFrame(draw);
    return()=>{disposed=true;cancelAnimationFrame(frame);resize.disconnect();if(model)release(model);renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();};
  },[modelUrl]);
  return <div ref={viewport} tabIndex={0} role="region" aria-label={label} className={className} style={{aspectRatio:'16/9',overflowY:'auto',background:'#0a0a0a',color:'white',...style}}>
    <div ref={stage} style={{position:'sticky',top:0,height:'100%',minHeight:'100%',overflow:'hidden',pointerEvents:'none',containerType:'inline-size'}}>
      <div ref={caption} style={{position:'absolute',zIndex:1,whiteSpace:'nowrap'}}><strong style={{font:'700 7cqw/1 system-ui',letterSpacing:'-.06em'}}/><div style={{font:'300 2cqw/1.4 system-ui'}}/></div>
      <span ref={indicator} style={{position:'absolute',right:'4%',bottom:'5%',font:'12px monospace'}}/>
      {error&&<span role="status" style={{position:'absolute',inset:12}}>{error}</span>}
    </div><div aria-hidden style={{height:'700%'}}/>
  </div>;
}
