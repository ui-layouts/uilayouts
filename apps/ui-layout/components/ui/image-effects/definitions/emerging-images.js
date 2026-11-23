import { full, single } from '../layouts.js';

export default {
  ...(single(full, `
    vec2 cell=floor(uv*vec2(120.,120./ratio));
    float pattern=hash(cell);
    float front=phase*1.7-(1.-uv.y);
    float ink=smoothstep(0.,.42,front+pattern*.24-.24);
    float photo=smoothstep(.16,.58,front+pattern*.24-.24);
    color=mix(color,mix(vec4(1.,.22,.025,1.),sampleB(q),photo),ink);
  `)),
  hoverPhase: true,
};
