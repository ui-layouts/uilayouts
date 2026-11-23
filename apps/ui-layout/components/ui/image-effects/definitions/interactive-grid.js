import { grid, gallery } from '../layouts.js';

export default {
  ...(gallery(
    (s) => {
      const g = grid(s);
      const dx = g.x - (s.mx - 0.5) * s.aspect,
        dy = g.y - (s.my - 0.5);
      return { ...g, z: 0.16 * Math.exp(-5 * (dx * dx + dy * dy)), focus: Math.min(1,2*Math.hypot(dx,dy)) };
    },
    "",
    "color.rgb=mix(color.rgb,vec3(dot(color.rgb,vec3(.2126,.7152,.0722))),focus);",
    35,
  )),
  pan: true,
};
