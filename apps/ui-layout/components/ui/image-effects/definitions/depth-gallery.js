import { gallery } from '../layouts.js';

export default {
  ...({
    ...gallery(s=>({
      x:(.38*Math.sin(s.index*2.4)+(s.mx-.5)*.095)*Math.min(s.aspect,1.6),
      y:.16*Math.cos(s.index*1.8)+(s.my-.5)*.065,
      z:-s.offset*1.05,ry:(s.mx-.5)*.09,rx:(.5-s.my)*.07,
      w:.55*s.imageAspect,h:.55,visible:s.offset>-.95,
    }), "", "color.rgb=mix(color.rgb,atmosphere,1.-exp(-max(depth,0.)*.32));"),
    atmospheric:true,
  }),
  vertical: true,
};
