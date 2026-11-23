import { gallery } from '../layouts.js';

export default {
    ...gallery(({slot,travel})=>{
      const row=Math.floor(slot/10)-2;
      const angle=(slot%10)*Math.PI/5 + travel*.6 + row*Math.PI/2;
      const x=.52*Math.sin(angle), y=row*.29;
      return {x:x*Math.cos(.15)+y*Math.sin(.15),y:y*Math.cos(.15)-x*Math.sin(.15),
        z:.52*(Math.cos(angle)-1),ry:angle,rz:-.15,w:.328,h:.235,textureIndex:slot};
    }, "float arc=p.x*.628; p.x=sin(arc)/.628; p.z+=.52*(cos(arc)-1.);",
      "",50), background:"#e9e5db",
  };
