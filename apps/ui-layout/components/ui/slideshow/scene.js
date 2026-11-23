import { buildRibbonGeometry, ribbonVertex, ribbonFragment } from "./ribbons.js";
import { particlePortrait } from "./face.js";
import { clothGeometry } from "./cloth.js";
import * as THREE from "three";

function material(effect) {
  const shared =
    "uniform float t,travel,phase,offset,depth,ratio,speed,focus; uniform vec3 atmosphere; uniform vec2 mouse; varying vec2 vUv;";
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
      `void main(){
      vUv=uv;vec3 p=position;
      ${effect.vertex || ""}
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
    }`,
    fragmentShader:
      shared +
      `
      uniform sampler2D mapA,mapB;
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
  const wheel = (e) => {
    if (props.current.time == null) {
      targetScroll += e.deltaY * .003;
      e.preventDefault();
    }
  };
  const move = (e) => {
    const rect = host.getBoundingClientRect();
    pointer = [
      (e.clientX - rect.left) / rect.width,
      1 - (e.clientY - rect.top) / rect.height,
    ];
  };
  const leave = () => {
    pointer = null;
  };
  host.addEventListener("wheel", wheel, { passive: false });
  host.addEventListener("pointermove", move);
  host.addEventListener("pointerleave", leave);
  const wrap = (i) =>
    ((i % textures.length) + textures.length) % textures.length;
  function draw(now) {
    const p = props.current;
    const dt=last==null?0:Math.min(.1,(now-last)/1000);
    const step=p.time==null?(targetScroll-scroll)*(1-Math.exp(-10*dt)):0;
    scroll+=step;
    const speed=(p.playing===false?0:1)/(p.secondsPerImage||3)+(dt>0?step/dt:0);
    if (last != null && p.playing !== false)
      elapsed += Math.min(0.1, (now - last) / 1000);
    last = now;
    const t = p.time ?? elapsed,
      travel = t / (p.secondsPerImage || 3) + (p.time == null ? scroll : 0);
    const base = Math.floor(travel),
      phase = travel - base;
    const [mx, my] =
      p.pointer ??
      (p.time == null && pointer
        ? pointer
        : [0.5 + 0.29 * Math.sin(t * 0.85), 0.5 + 0.23 * Math.cos(t * 0.64)]);
    effect.camera?.(camera, { travel, phase });
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
        imageAspect: textures[wrap(index)].image.width/textures[wrap(index)].image.height,
        slot,
        index,
        offset,
        phase,
        travel,
        mx,
        my,
      });
      card.visible = layout.visible !== false;
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
      u.mapA.value = a;
      u.mapB.value = b;
      u.ratioA.value = a.image.width / a.image.height;
      u.ratioB.value = b.image.width / b.image.height;
      u.ratio.value = layout.w / layout.h;
      u.mouse.value.set(mx, my);
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
    host.removeEventListener("wheel", wheel);
    host.removeEventListener("pointermove", move);
    host.removeEventListener("pointerleave", leave);
    cards.forEach((c) => c.material.dispose());
    geometry.dispose();
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
