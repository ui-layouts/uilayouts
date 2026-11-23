// Position-based spring surface for the visible 9-by-7 patch. Restoring anchors
// hold the material on the sphere. Shared edge nodes carry disturbances between tiles.
export function createGlassSurface(columns, rows) {
  const stride = columns + 1;
  const size = stride * (rows + 1);
  const rest = new Float32Array(size * 3);
  for (let i = 0; i < size; i++) {
    rest[3*i] = (i % stride - columns/2) * .5;
    rest[3*i+1] = (Math.floor(i/stride) - rows/2) * .37;
  }
  const current = rest.slice(), previous = rest.slice();
  const links = [];
  function connect(i,j,compliance) {
    const length = Math.hypot(rest[3*i]-rest[3*j],rest[3*i+1]-rest[3*j+1]);
    links.push({a:i*3,b:j*3,length,compliance,lambda:0});
  }
  for(let y=0;y<=rows;y++) for(let x=0;x<=columns;x++){
    const i=y*stride+x;
    if(x)connect(i,i-1,.00005);
    if(y)connect(i,i-stride,.00005);
    if(x&&y)connect(i,i-stride-1,.00012);
    if(x<columns&&y)connect(i,i-stride+1,.00012);
    if(x>1)connect(i,i-2,.001);
    if(y>1)connect(i,i-2*stride,.001);
  }
  let remainder=0;
  return {
    advance(dt, vx, vy, pointerX, pointerY, aspect) {
      const h=1/90;
      remainder+=Math.min(dt,.06);
      while(remainder>=h){
        remainder-=h;
        for(let i=0;i<size;i++){
          const k=i*3;
          const dx=rest[k]-(pointerX-.5)*aspect;
          const dy=rest[k+1]-(pointerY-.5);
          const influence=Math.exp(-1.8*(dx*dx+dy*dy));
          const forceX=-vx*(.15+influence)*2;
          const forceY=-vy*(.15+influence)*2;
          const forceZ=(vx*dx+vy*dy)*influence*8;
          for(let j=0;j<3;j++){
            const value=current[k+j],speed=(value-previous[k+j])*.962;
            previous[k+j]=value;
            const pull=(rest[k+j]-value)*69;
            current[k+j]=value+speed+(pull+(j===0?forceX:j===1?forceY:forceZ))*h*h;
          }
        }
        for(const edge of links)edge.lambda=0;
        for(let pass=0;pass<3;pass++) for(const edge of links){
          const {a,b,length,compliance}=edge;
          const dx=current[a]-current[b],dy=current[a+1]-current[b+1],dz=current[a+2]-current[b+2];
          const dist=Math.max(.0001,Math.hypot(dx,dy,dz));
          const alpha=compliance/(h*h);
          const delta=(-(dist-length)-alpha*edge.lambda)/(2+alpha);
          edge.lambda+=delta;
          const f=delta/dist;
          current[a]+=dx*f;current[a+1]+=dy*f;current[a+2]+=dz*f;
          current[b]-=dx*f;current[b+1]-=dy*f;current[b+2]-=dz*f;
        }
      }
    },
    corners(slot, vectors) {
      const bottom=slot%columns+Math.floor(slot/columns)*stride;
      for(let j=0;j<4;j++){
        const k=(bottom+(j%2)+(j>=2?stride:0))*3;
        vectors[j].set(current[k]-rest[k],current[k+1]-rest[k+1],current[k+2]-rest[k+2]);
      }
    },
  };
}
