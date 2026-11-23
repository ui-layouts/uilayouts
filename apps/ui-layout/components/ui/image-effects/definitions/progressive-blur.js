import { full, single } from '../layouts.js';

export default single(full, `
    float edge=smoothstep(.18,.51,abs(uv.y-.5));
    color=blur(q,.048*edge);
    color.rgb-=.023*edge*hash(gl_FragCoord.xy+floor(t*24.));
  `);
