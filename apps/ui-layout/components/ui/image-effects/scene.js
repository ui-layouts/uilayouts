import { buildRibbonGeometry, ribbonVertex, ribbonFragment } from "./ribbons.js";
import { particlePortrait } from "./face.js";
import { clothGeometry } from "./cloth.js";
import * as THREE from "three";

function material(effect) {
  const shared =
    "uniform float t,travel,phase,offset,depth,ratio,speed,focus; uniform vec3 atmosphere; uniform vec2 mouse, flex; uniform float hovered,opened; varying vec2 vUv;";
  const uniforms = {};
  for (const key of [
    "t",
    "travel",
    "phase",
    "offset",
    "depth",
    "ratio",
    "speed",
    "focus",
    "ratioA",
    "ratioB",
  ])
    uniforms[key] = { value: 1 };
  for (const key of ["mapA", "mapB"]) uniforms[key] = { value: null };
  uniforms.atmosphere={value:new THREE.Color()};
  if(effect.surface) uniforms.corners={value:Array.from({length:4},()=>new THREE.Vector3())};
  uniforms.flex={value:new THREE.Vector2()};
  uniforms.opened={value:0};
  uniforms.hovered={value:0};
  uniforms.showLabel={value:0};
  uniforms.labelMap={value:null};
  uniforms.mouse = { value: new THREE.Vector2(0.5, 0.5) };
  if(effect.ribbons) {
    for(const key of ["uHalfWidth","uZone","uSeed","uPixels","uRadius","uStrength","uWobble"]) uniforms[key]={value:1};
    uniforms.uCardSize={value:new THREE.Vector2()};
    uniforms.uTime=uniforms.t;
    uniforms.uMap=uniforms.mapA;
    uniforms.uImageAspect=uniforms.ratioA;
    return new THREE.ShaderMaterial({uniforms,vertexShader:ribbonVertex,fragmentShader:ribbonFragment,transparent:true,depthWrite:false,depthTest:false});
  }
  return new THREE.ShaderMaterial({
    uniforms,
    side: THREE.DoubleSide,
    transparent: true,
    vertexShader:
      shared +
      (effect.surface ? "uniform vec3 corners[4];" : "") +
      `void main(){
      vUv=uv;vec3 p=position;
      ${effect.surface ? "p+=mix(mix(corners[0],corners[1],uv.x),mix(corners[2],corners[3],uv.x),uv.y);" : ""}
      ${effect.vertex || ""}
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
    }`,
    fragmentShader:
      shared +
      `
      uniform sampler2D mapA,mapB,labelMap; uniform float showLabel;
      uniform float ratioA,ratioB;
      vec2 cover(vec2 q,float r){return .5+(q-.5)*min(vec2(ratio/r,r/ratio),vec2(1.));}
      vec4 sampleA(vec2 q){return texture2D(mapA,cover(q,ratioA));}
      vec4 sampleB(vec2 q){return texture2D(mapB,cover(q,ratioB));}
      float hash(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
      vec4 blur(vec2 q,float radius){
        vec4 c=sampleA(q);
        for(int i=1;i<=24;i++){
          float f=float(i);float a=f*2.39996;
          c+=sampleA(q+sqrt(f/24.)*radius*vec2(cos(a)/ratio,sin(a)));
        }
        return c/25.;
      }
      ${effect.functions || ""}
      void main(){vec2 uv=vUv,q=uv;vec4 color=sampleA(q);
        ${effect.fragment || ""}
        ${effect.hoverBlend ? "color=mix(sampleA(q),color,hovered);" : ""}
        gl_FragColor=color;
        #include <colorspace_fragment>
      }`,
  });
}

export function mountScene(host, effect, sources, props, onStatus, depthSources = []) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  host.appendChild(renderer.domElement);
  renderer.domElement.style.cssText = "display:block;width:100%;height:100%";
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const face = effect.portrait ? particlePortrait() : null;
  if (face) scene.add(face);
  const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 40);
  camera.position.z = 0.5 / Math.tan(Math.PI / 8);
  const geometry = effect.ribbons ? buildRibbonGeometry() : new THREE.PlaneGeometry(
    1,
    1,
    effect.cloth ? 20 : effect.vertex ? 64 : 1,
    effect.cloth ? 14 : effect.vertex ? 48 : 1,
  );
  const surface=effect.surface?.();
  const simulate = effect.cloth ? clothGeometry(geometry) : null;
  const palette=[], sky=new THREE.Color();
  const cards = Array.from({ length: effect.count }, () => {
    const card = new THREE.Mesh(geometry, material(effect));
    if(effect.ribbons) card.frustumCulled=false;
    scene.add(card);
    return card;
  });
  const resize = new ResizeObserver(() => {
    const { clientWidth: w, clientHeight: h } = host;
    renderer.setSize(Math.max(w, 1), Math.max(h, 1), false);
    camera.aspect = w / Math.max(h, 1);
    camera.updateProjectionMatrix();
  });
  resize.observe(host);
  let disposed = false,
    frame,
    elapsed = 0,
    scroll = 0,
    targetScroll = 0,
    pointer = null,
    last;
  const depthTextures = [], ownedTextures = [];
  const textures = [],
    loader = new THREE.TextureLoader();
  // Posters also provide the initial image while a video decodes or if playback is unavailable.
  let mediaKey, glassMedia = [];
  function releaseMedia() {
    for(const item of glassMedia) {
      if(item.video) {
        item.video.pause();
        item.video.removeAttribute("src");
        item.video.load();
        item.texture.dispose();
      }
      item.label?.dispose();
    }
    glassMedia=[];
  }
  function updateGlassMedia(options) {
    const key=JSON.stringify([options.videos,options.labels]);
    if(key===mediaKey)return;
    mediaKey=key;
    releaseMedia();
    glassMedia=sources.map((_,i)=>{
      const item={};
      if(options.videos?.[i]) {
        const video=document.createElement("video");
        video.crossOrigin="anonymous";video.muted=true;video.loop=true;video.playsInline=true;
        video.src=options.videos[i];
        item.video=video;
        item.texture=new THREE.VideoTexture(video);
        item.texture.colorSpace=THREE.SRGBColorSpace;
        video.play().catch(()=>{});
      }
      if(options.labels?.[i]){
        const canvas=document.createElement("canvas");
        canvas.width=640;canvas.height=340;
        const context=canvas.getContext("2d");
        context.font="600 46px system-ui";context.fillStyle="white";
        context.shadowColor="rgba(0,0,0,.7)";context.shadowBlur=5;
        context.fillText(options.labels[i],48,canvas.height-53,canvas.width-92);
        item.label=new THREE.CanvasTexture(canvas);
        item.label.colorSpace=THREE.SRGBColorSpace;
      }
      return item;
    });
  }
  const navigable = effect.count > 1 || effect.activate;
  const previousTouchAction = host.style.touchAction;
  host.style.touchAction = effect.pan || effect.vertical ? "none" : navigable ? "pan-y" : "auto";
  let expanded=false, opened=0;
  let drag = null, over = false, hover = 0, targetY = 0, scrollY = 0;
  const flex = new THREE.Vector2(), flexVelocity = new THREE.Vector2();
  const events = new AbortController();
  function listen(event, handler, options = {}) {
    host.addEventListener(event, handler, {...options, signal: events.signal});
  }
  function pan(dx, dy) {
    if (effect.pan) {targetScroll -= dx; targetY += dy;}
    else targetScroll += effect.vertical ? dy : -dx;
  }
  listen("wheel", e => {
    if (!navigable || e.ctrlKey) return;
    const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? host.clientHeight : 1;
    const scale = unit / Math.max(100,host.clientHeight * .6);
    if (effect.pan) pan(-e.deltaX * scale,-e.deltaY * scale);
    else targetScroll += (Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY)*scale;
    e.preventDefault();
  },{passive:false});
  listen("pointermove", e => {
    const r = host.getBoundingClientRect();
    pointer = [(e.clientX-r.left)/r.width,1-(e.clientY-r.top)/r.height];
    over = true;
    if (!drag || drag.id !== e.pointerId) return;
    const unit = Math.max(100,r.height*.5);
    pan((e.clientX-drag.x)/unit,(e.clientY-drag.y)/unit);
    drag.x=e.clientX; drag.y=e.clientY;
  });
  listen("pointerdown", e => {
    if(e.button !== 0) return;
    over=true;
    if (!navigable) return;
    host.focus({preventScroll:true});
    host.setPointerCapture(e.pointerId);
    drag={x:e.clientX,y:e.clientY,id:e.pointerId};
  });
  listen("pointerleave",()=>{if(!drag)over=false;});
  listen("lostpointercapture",()=>{drag=null;});
  listen("pointerup",e=>{if(e.pointerType!=="mouse")over=false;drag=null;});
  listen("click",()=>{if(effect.toggleReveal)expanded=!expanded;if(effect.activate)targetScroll=Math.round(targetScroll)+1;});
  listen("keydown",e=>{
    if(!navigable)return;
    const step={ArrowRight:1,ArrowLeft:-1,ArrowUp:1,ArrowDown:-1}[e.key];
    if(step==null)return;
    if(effect.pan && (e.key==="ArrowUp"||e.key==="ArrowDown"))targetY+=step;
    else targetScroll+=step;
    e.preventDefault();
  });
  if(navigable || effect.toggleReveal)host.tabIndex=0;
  const wrap = (i) =>
    ((i % textures.length) + textures.length) % textures.length;
  function draw(now) {
    const p = props.current;
    if(effect.glass)updateGlassMedia(p);
    const dt=last==null?0:Math.min(.1,(now-last)/1000);
    const step=(targetScroll-scroll)*(1-Math.exp(-10*dt));
    const stepY=(targetY-scrollY)*(1-Math.exp(-10*dt));
    scroll+=step;scrollY+=stepY;
    opened+=((expanded?1:0)-opened)*(1-Math.exp(-5*dt));
    hover+=((over || p.pointer ? 1 : 0)-hover)*(1-Math.exp(-12*dt));
    // Damped displacement lags the drag and settles when the gesture stops.
    for(let i=0;i<4;i++){
      const h=dt/4;
      flexVelocity.x+=(-80*flex.x-11*flexVelocity.x)*h;
      flexVelocity.y+=(-80*flex.y-11*flexVelocity.y)*h;
      flex.addScaledVector(flexVelocity,h);
    }
    flexVelocity.x+=step*5; flexVelocity.y+=stepY*5;
    const speed=dt>0?step/dt:0;
    if (last != null)
      elapsed += Math.min(0.1, (now - last) / 1000);
    if (face) {
      face.visible = p.variant === "portrait" || (p.variant == null && depthSources.length > 0);
      const cameraDistance = .5 / Math.tan(Math.PI/8) + (drag && !face.visible ? .24 : 0);
      camera.position.z += (cameraDistance - camera.position.z) * (1 - Math.exp(-8 * dt));
    }
    last = now;
    const t = elapsed,
      travel = Number.isFinite(p.imageIndex) ? Math.trunc(p.imageIndex) : scroll;
    const base = Math.floor(travel),
      phase = effect.hoverPhase ? hover : travel - base;
    const [mx, my] =
      p.pointer ??
      (pointer ?? [.5,.5]);
    if(dt>0)surface?.advance(dt,THREE.MathUtils.clamp(step/dt,-8,8),THREE.MathUtils.clamp(stepY/dt,-8,8),mx,my,camera.aspect);
    effect.camera?.(camera, { travel, phase, path:p.path });
    simulate?.(t);
    if(effect.atmospheric) {
      sky.copy(palette[wrap(base)]).lerp(palette[wrap(base+1)],phase*phase*(3-2*phase));
      sky.multiplyScalar(.48);
    }
    renderer.setClearColor(p.background ?? (effect.atmospheric ? sky : effect.background ?? "#161819"));
    cards.forEach((card, slot) => {
      const index = base + slot - Math.floor(effect.count / 2),
        offset = index - travel;
      const layout = effect.layout({
        aspect: camera.aspect,
        verticalBase:Math.floor(scrollY),verticalPhase:scrollY-Math.floor(scrollY),
        path:p.path, cameraPosition:camera.position,
        imageAspect: textures[wrap(index)].image.width/textures[wrap(index)].image.height,
        slot,
        index,
        offset,
        phase,
        travel,
        mx,
        my,
      });
      card.visible = layout.visible !== false && !face?.visible;
      card.position.set(layout.x ?? 0, layout.y ?? 0, layout.z ?? 0);
      card.rotation.set(layout.rx ?? 0, layout.ry ?? 0, layout.rz ?? 0);
      card.scale.set(layout.w, layout.h, 1);
      const a = textures[wrap(layout.textureIndex ?? index)],
        b = textures[wrap(index + 1)];
      const u = card.material.uniforms;
      if(effect.ribbons){
        const pixels=Math.max(1,host.clientHeight);
        u.uPixels.value=pixels;
        u.uHalfWidth.value=host.clientWidth*.5;
        u.uZone.value=Math.min(380,host.clientWidth*.26);
        u.uRadius.value=20;
        u.uSeed.value=(wrap(index)+1)*.731;
        u.uCardSize.value.set(layout.w*pixels,layout.h*pixels);
      }
      u.atmosphere.value.copy(sky);
      const media=glassMedia[wrap(layout.textureIndex ?? index)];
      const useVideo=media?.video?.readyState>=2 && media.video.videoWidth>0;
      u.mapA.value = useVideo ? media.texture : a;
      u.labelMap.value=media?.label ?? a;
      u.showLabel.value=media?.label ? 1 : 0;
      u.mapB.value = b;
      u.ratioA.value = useVideo ? media.video.videoWidth/media.video.videoHeight : a.image.width / a.image.height;
      u.ratioB.value = b.image.width / b.image.height;
      u.ratio.value = layout.w / layout.h;
      if(surface)surface.corners(slot,u.corners.value);
      u.opened.value=opened;
      u.flex.value.copy(flex);
      u.hovered.value=hover;
      u.mouse.value.set(effect.hoverLens && !over && !p.pointer ? -2 : mx,my);
      for (const [key, value] of Object.entries({
        t,
        travel,
        phase,
        offset,
        speed,
        focus: layout.focus ?? 0,
        depth: -card.position.z,
      }))
        u[key].value = value;
    });
    if (face) {
      face.rotation.y = (mx - 0.5) * 1.1;
      face.rotation.x = (0.5 - my) * 0.32;
      const uniforms = face.material.uniforms;
      const layer = wrap(base);
      uniforms.image.value = textures[layer];
      uniforms.depthMap.value = depthTextures[layer] ?? textures[layer];
      uniforms.hasDepth.value = Boolean(depthTextures[layer]);
      uniforms.cursor.value.set(mx, my);
      uniforms.pointSize.value = renderer.domElement.height * .003;
      uniforms.opacity.value = 0.5 + 0.45 * Math.sin(t * 0.6) ** 2;
    }
    renderer.render(scene, camera);
    frame = requestAnimationFrame(draw);
  }
  async function loadTexture(src, isColor) {
    if (!src) return null;
    const texture = await loader.loadAsync(src);
    if (disposed) { texture.dispose(); return null; }
    if (isColor) texture.colorSpace = THREE.SRGBColorSpace;
    ownedTextures.push(texture);
    return texture;
  }
  Promise.all([
    Promise.all(sources.map(src => loadTexture(src,true))),
    Promise.all(depthSources.slice(0,sources.length).map(src => loadTexture(src,false)))
  ]).then(([ordered, depths]) => {
      if (disposed) return;
      if (ordered.some(texture => !texture)) throw new Error("Empty image URL");
      textures.push(...ordered);
      if(effect.atmospheric) {
        const sampler=document.createElement("canvas");
        sampler.width=sampler.height=1;
        const ctx=sampler.getContext("2d",{willReadFrequently:true});
        for(const texture of ordered){
          ctx.drawImage(texture.image,0,0,1,1);
          const [r,g,b]=ctx.getImageData(0,0,1,1).data;
          palette.push(new THREE.Color(r/255,g/255,b/255).convertSRGBToLinear());
        }
      }
      depthTextures.push(...depths);
      frame = requestAnimationFrame(draw);
      onStatus("");
    })
    .catch(() => {
      if (!disposed)
        onStatus(
          "An image could not be loaded. Check its URL and cross-origin permissions.",
        );
    });
  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    resize.disconnect();
    events.abort();host.style.touchAction=previousTouchAction;
    if(navigable || effect.toggleReveal)host.removeAttribute("tabindex");
    cards.forEach((c) => c.material.dispose());
    geometry.dispose();
    releaseMedia();
    ownedTextures.forEach((t) => t.dispose());
    if (face) {
      face.geometry.dispose();
      face.material.dispose();
    }
    renderer.dispose();
    renderer.forceContextLoss();
    renderer.domElement.remove();
  };
}
