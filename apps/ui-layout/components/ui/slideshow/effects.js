import {objectFit, phantomGrid, liquidGlassGrid, cinematicScroll} from "./article-effects.js";
import { squareFunctions, squareFragment, bulgeFunctions } from "./ported.js";
// Card-space coordinates are measured in viewport heights. One unit of travel
// moves a gallery by one card. Each effect owns its layout and shader changes.
const full = (s) => ({ w: s.aspect, h: 1 });
const strip = (s) => ({ x: s.offset * 0.82, w: 0.75, h: 0.78 });
const grid = (s) => {
  const col = s.slot % 7,
    row = Math.floor(s.slot / 7);
  return {
    x: (col - 3 - s.phase) * 0.49,
    y: (row - 2) * 0.36,
    w: 0.46,
    h: 0.33,
  };
};
const single = (layout, fragment = "", vertex = "") => ({
  layout,
  fragment,
  vertex,
  count: 1,
});
const gallery = (layout, vertex = "", fragment = "", count = 11) => ({
  layout,
  vertex,
  fragment,
  count,
});
export const effects = {
  MotionHover: single(
    (s) => ({
      x: (s.mx - 0.5) * s.aspect * 0.6,
      y: (s.my - 0.5) * 0.6,
      w: 0.72,
      h: 0.64,
    }),
    "color.r = sampleA(q+vec2(.016*(mouse.x-.5),0.)).r;",
    "p.x += (uv.y-.5)*(mouse.x-.5)*.24;",
  ),
  GooeyHover: single(
    full,
    "float edge=length((uv-mouse)*vec2(ratio,1.))+.045*sin(uv.x*32.+t)*sin(uv.y*29.-t); color=mix(color,sampleB(q),1.-smoothstep(.23,.29,edge));",
  ),
  CircularGallery: gallery((s) => {
    const a = s.offset * 0.39;
    return {
      x: 1.7 * Math.sin(a),
      y: 1.7 * (Math.cos(a) - 1),
      rz: -a,
      w: 0.58,
      h: 0.72,
    };
  }, "p.z=(sin(p.x*4.+t)*1.5+cos(p.y*2.+t)*1.5)*.055;"),
  InfiniteGallery: gallery(
    (s) => ({
      x: Math.sin(s.offset) * 0.24,
      y: s.offset * 0.73,
      w: 0.95,
      h: 0.66,
    }),
    "p.z-=.14*sin((offset+p.y)*3.14159+1.5708);",
  ),
  PhysicsCloth: { ...single((s) => ({ w: 1.05, h: 0.82 })), cloth: true },
  WebGLCarousel: gallery(
    (s) => {
      const open=Math.exp(-32*s.offset*s.offset);
      return {x:s.offset*.35,w:.29+(Math.min(s.aspect,1.6)-.29)*open,h:.72+.28*open,
        z:.02*open,focus:open};
    },
    "float ripple=sin(length(uv-.5)*15.+focus*12.); p.xy*=1.+ripple*.13*sin(focus*3.14159);",
  ),
  Bulge: {
    ...single(full, "color=sampleA(bulge(q,mouse));"),
    functions: bulgeFunctions,
  },
  EmergingImages: single(full, `
    vec2 cell=floor(uv*vec2(120.,120./ratio));
    float pattern=hash(cell);
    float front=phase*1.7-(1.-uv.y);
    float ink=smoothstep(0.,.42,front+pattern*.24-.24);
    float photo=smoothstep(.16,.58,front+pattern*.24-.24);
    color=mix(color,mix(vec4(1.,.22,.025,1.),sampleB(q),photo),ink);
  `),
  SdfLensBlur: single(full, `
    vec2 point=(uv-.5)*vec2(ratio,1.);
    vec2 corner=abs(point)-vec2(.27)+.035;
    float distanceToEdge=length(max(corner,0.))+min(max(corner.x,corner.y),0.)-.035;
    float lens=1.-smoothstep(.025,.33,length((uv-mouse)*vec2(ratio,1.)));
    float width=.005+.05*lens;
    float outline=1.-smoothstep(width,width+.002,abs(distanceToEdge));
    color=mix(color,vec4(1.),outline*(1.-.68*lens));
    color=mix(color,blur(q,.022),lens*.6);
  `),
  ProgressiveBlur: single(full, `
    float edge=smoothstep(.18,.51,abs(uv.y-.5));
    color=blur(q,.048*edge);
    color.rgb-=.023*edge*hash(gl_FragCoord.xy+floor(t*24.));
  `),
  ObjectFit: objectFit,
  ScrollGrain: gallery(
    (s) => ({ y: s.offset*.88, w:1.12, h:.82 }),
    "p.y+=sin(uv.x*3.14159)*clamp(speed,-5.,5.)*.018;",
    `float circle=1.-length((uv-mouse)*vec2(1.,1./ratio))*15.;
     float grain=hash(gl_FragCoord.xy+floor(t*20.))-.5;
     q+=vec2(circle*grain*.005)*min(1.,.14+abs(speed)*.32);
     color=sampleA(q);`,
  ),
  RotatingGallery: gallery(strip, `
    float local=clamp((phase-.22*uv.y)/.78,0.,1.);
    float eased=local<.5?16.*pow(local,5.):1.-.5*pow(2.-2.*local,5.);
    float angle=(floor(travel)+eased)*3.14159265;
    p.xz=mat2(cos(angle),-sin(angle),sin(angle),cos(angle))*p.xz;
  `),
  InteractiveGrid: gallery(
    (s) => {
      const g = grid(s);
      const dx = g.x - (s.mx - 0.5) * s.aspect,
        dy = g.y - (s.my - 0.5);
      return { ...g, z: 0.16 * Math.exp(-5 * (dx * dx + dy * dy)), focus: Math.min(1,2*Math.hypot(dx,dy)) };
    },
    "",
    "color.rgb=mix(color.rgb,vec3(dot(color.rgb,vec3(.2126,.7152,.0722))),focus);",
    35,
  ),
  ShaderRipple: single(full, `
    float dist=distance(uv,mouse)/length(max(mouse,1.-mouse));
    float wave=1.-smoothstep(phase-.08,phase+.02,dist);
    float brightness=dot(color.rgb,vec3(.299,.587,.114));
    color.rgb=mix(vec3(brightness),color.rgb,wave);
    color.rgb+=.025*sin(25.*dist-t*4.)*sin(phase*3.14159);
  `, "p.y+=.012*sin(-25.*distance(uv,mouse)+t*4.)*sin(phase*3.14159);"),
  DomCloth: gallery(
    strip,
    "p.z+=.12*sin(uv.x*6.+travel*3.)*sin(uv.y*3.14159);p.y+=.07*cos(uv.x*7.+t)*(1.-uv.y);",
  ),
  PhantomGrid: phantomGrid,
  DepthGallery: {
    ...gallery(s=>({
      x:(.38*Math.sin(s.index*2.4)+(s.mx-.5)*.095)*Math.min(s.aspect,1.6),
      y:.16*Math.cos(s.index*1.8)+(s.my-.5)*.065,
      z:-s.offset*1.05,ry:(s.mx-.5)*.09,rx:(.5-s.my)*.07,
      w:.55*s.imageAspect,h:.55,visible:s.offset>-.95,
    }), "", "color.rgb=mix(color.rgb,atmosphere,1.-exp(-max(depth,0.)*.32));"),
    atmospheric:true,
  },
  SquareLens: { ...single(full, squareFragment), functions: squareFunctions },
  CurveGallery: {
    ...gallery(s=>{
      const i=s.index*.66;
      return {x:Math.sin(i)*.76+.26*Math.cos(s.index*2.4),
        y:Math.sin(i*1.4)*.31+.17*Math.sin(s.index*1.7),z:-s.offset*.69,
        ry:.18*Math.cos(i),w:.48*s.imageAspect,h:.48,visible:s.offset>-.9};
    }, "", "float soft=smoothstep(.45,2.1,abs(depth-.68)); color=blur(q,.024*soft);",21),
    camera(camera,{travel}) {
      const a=travel*.66, ahead=(travel+1)*.66;
      camera.position.set(.76*Math.sin(a),.31*Math.sin(a*1.4),1.12);
      camera.lookAt(.76*Math.sin(ahead),.31*Math.sin(ahead*1.4),-.69);
    },
  },
  LiquidGlassGrid: liquidGlassGrid,
  ImageTube: {
    ...gallery(({slot,travel})=>{
      const row=Math.floor(slot/14), lap=Math.floor(travel);
      const absoluteRow=row+lap, phase=travel-lap;
      const angle=((slot%14)+(absoluteRow%2)*.5)*Math.PI/7+travel*(.30+.09*Math.cos(absoluteRow));
      return {x:.69*Math.sin(angle),z:.69*(Math.cos(angle)-1),
        y:(row-2-phase)*.38,ry:angle,w:.11,h:.16,textureIndex:absoluteRow*14+slot%14};
    },"","",84),background:"#ecebe8",
  },
  InfiniteCanvas: gallery(
    (s) => {
      const g = grid(s);
      return {
        ...g,
        x: g.x + (s.mx - 0.5) * 0.4,
        y: g.y + (s.my - 0.5) * 0.55,
        z: 0.1 * Math.sin(s.index * 13),
      };
    },
    "",
    "",
    35,
  ),
  CinematicScroll: cinematicScroll,
  KineticImages: {
    ...gallery(({slot,travel})=>{
      const row=Math.floor(slot/10)-2;
      const angle=(slot%10)*Math.PI/5 + travel*.6 + row*Math.PI/2;
      const x=.52*Math.sin(angle), y=row*.29;
      return {x:x*Math.cos(.15)+y*Math.sin(.15),y:y*Math.cos(.15)-x*Math.sin(.15),
        z:.52*(Math.cos(angle)-1),ry:angle,rz:-.15,w:.328,h:.235,textureIndex:slot};
    }, "float arc=p.x*.628; p.x=sin(arc)/.628; p.z+=.52*(cos(arc)-1.);",
      "",50), background:"#e9e5db",
  },
  Unwoven: {
    ...gallery(s=>({x:s.offset*.524,w:.465,h:.62})),
    ribbons:true, background:"#f7f6f3",
  },
  ExperimentalCarousel: gallery(strip, `
    float worldX=(modelMatrix*vec4(position,1.)).x;
    p.y+=.14*(cos(worldX*3.1)-1.);
    p.x-=sin(uv.y*3.14159)*clamp(speed,-4.,4.)*.075;
  `),
};


