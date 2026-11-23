import { gallery } from '../layouts.js';

export default {
  ...({
    ...gallery(({slot,travel})=>{
      const row=Math.floor(slot/14), lap=Math.floor(travel);
      const absoluteRow=row+lap, phase=travel-lap;
      const angle=((slot%14)+(absoluteRow%2)*.5)*Math.PI/7+travel*(.30+.09*Math.cos(absoluteRow));
      return {x:.69*Math.sin(angle),z:.69*(Math.cos(angle)-1),
        y:(row-2-phase)*.38,ry:angle,w:.11,h:.16,textureIndex:absoluteRow*14+slot%14};
    },"","",84),background:"#ecebe8",
  }),
  vertical: true,
};
