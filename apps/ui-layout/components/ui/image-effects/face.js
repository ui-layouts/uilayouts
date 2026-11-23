import * as THREE from "three";

// Sculpt a relief surface over an elliptical head, then sample it as points.
export function particlePortrait() {
  const positions = [], uv = [];
  const bump = (x, y, cx, cy, rx, ry) =>
    Math.exp(-(((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2));
  for (let row = 0; row < 88; row++) {
    const y = (row / 87) * 2 - 1;
    for (let col = 0; col < 64; col++) {
      const x = ((col + (row % 2) * 0.5) / 64) * 2 - 1;
      const shell = 1 - x * x - y * y;
      if (shell <= 0) continue;
      const eyes =
        bump(x, y, -0.35, 0.2, 0.2, 0.12) + bump(x, y, 0.35, 0.2, 0.2, 0.12);
      const nose = bump(x, y, 0, 0, 0.14, 0.36);
      const lips = bump(x, y, 0, -0.4, 0.34, 0.095);
      const z =
        Math.sqrt(shell) * 0.21 + nose * 0.1 - eyes * 0.052 + lips * 0.035;
      uv.push((x + 1) / 2, (y + 1) / 2);
      positions.push(x * (0.23 + 0.025 * y), y * 0.34, z);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  const material = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: {
      image: {value: null}, depthMap: {value: null}, hasDepth: {value: false},
      opacity: {value: 1}, pointSize: {value: 2}, cursor: {value: new THREE.Vector2(.5,.5)}
    },
    vertexShader: `
      uniform sampler2D image, depthMap;
      uniform bool hasDepth;
      uniform vec2 cursor;
      uniform float pointSize;
      varying vec3 tint;
      varying float mask;
      void main(){
        vec3 p=position;
        float relief=hasDepth ? texture2D(depthMap,uv).r : p.z;
        mask=hasDepth ? smoothstep(.01,.05,relief) : 1.;
        if(hasDepth) p.z=relief*.28;
        vec2 delta=uv-cursor;
        p.xy+=delta*.09*exp(-dot(delta,delta)*32.);
        tint=texture2D(image,uv).rgb;
        vec4 view=modelViewMatrix*vec4(p,1.);
        gl_Position=projectionMatrix*view;
        gl_PointSize=clamp(pointSize/-view.z,1.,8.);
      }`,
    fragmentShader: `
      uniform float opacity;
      varying vec3 tint;
      varying float mask;
      void main(){
        float radius=length(gl_PointCoord-.5);
        if(radius>.5 || mask<.01) discard;
        gl_FragColor=vec4(tint,opacity*mask*(1.-smoothstep(.32,.5,radius)));
        #include <colorspace_fragment>
      }`
  });
  const face = new THREE.Points(geometry, material);
  face.position.z = 0.22;
  return face;
}
