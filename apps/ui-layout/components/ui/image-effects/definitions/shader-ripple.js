import { full, single } from '../layouts.js';

export default {
  ...(single(full, `
    float dist=distance(uv,mouse)/length(max(mouse,1.-mouse));
    float wave=1.-smoothstep(phase-.08,phase+.02,dist);
    float brightness=dot(color.rgb,vec3(.299,.587,.114));
    color.rgb=mix(vec3(brightness),color.rgb,wave);
    color.rgb+=.025*sin(25.*dist-t*4.)*sin(phase*3.14159);
  `, "p.y+=.012*sin(-25.*distance(uv,mouse)+t*4.)*sin(phase*3.14159);")),
  hoverBlend: true,
  hoverPhase: true,
};
