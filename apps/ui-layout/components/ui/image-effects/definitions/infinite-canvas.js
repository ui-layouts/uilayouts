import { grid, gallery } from '../layouts.js';

export default {
  ...(gallery(
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
  )),
  pan: true,
};
