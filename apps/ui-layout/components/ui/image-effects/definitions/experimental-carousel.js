import { strip, gallery } from '../layouts.js';

export default gallery(strip, `
    float worldX=(modelMatrix*vec4(position,1.)).x;
    p.y+=.14*(cos(worldX*3.1)-1.);
    p.x-=sin(uv.y*3.14159)*clamp(speed,-4.,4.)*.075;
  `);
