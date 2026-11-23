import { strip, gallery } from '../layouts.js';

export default gallery(strip, `
    float local=clamp((phase-.22*uv.y)/.78,0.,1.);
    float eased=local<.5?16.*pow(local,5.):1.-.5*pow(2.-2.*local,5.);
    float angle=(floor(travel)+eased)*3.14159265;
    p.xz=mat2(cos(angle),-sin(angle),sin(angle),cos(angle))*p.xz;
  `);
