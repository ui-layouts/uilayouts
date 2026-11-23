import { gallery } from '../layouts.js';

export default {
  ...(gallery(
    (s) => ({ y: s.offset*.88, w:1.12, h:.82 }),
    "p.y+=sin(uv.x*3.14159)*clamp(speed,-5.,5.)*.018;",
    `float circle=1.-length((uv-mouse)*vec2(1.,1./ratio))*15.;
     float grain=hash(gl_FragCoord.xy+floor(t*20.))-.5;
     q+=vec2(circle*grain*.005)*min(1.,.14+abs(speed)*.32);
     color=sampleA(q);`,
  )),
  vertical: true,
};
