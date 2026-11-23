import { gallery } from '../layouts.js';

export default {
  ...(gallery(
    (s) => ({
      x: Math.sin(s.offset) * 0.24,
      y: s.offset * 0.73,
      w: 0.95,
      h: 0.66,
    }),
    "p.z-=.14*sin((offset+p.y)*3.14159+1.5708);",
  )),
  vertical: true,
};
