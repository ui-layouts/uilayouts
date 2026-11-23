import { gallery } from '../layouts.js';

export default gallery((s) => {
    const a = s.offset * 0.39;
    return {
      x: 1.7 * Math.sin(a),
      y: 1.7 * (Math.cos(a) - 1),
      rz: -a,
      w: 0.58,
      h: 0.72,
    };
  }, "p.z=(sin(p.x*4.+t)*1.5+cos(p.y*2.+t)*1.5)*.055;");
