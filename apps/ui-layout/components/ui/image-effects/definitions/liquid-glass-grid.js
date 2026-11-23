import { createGlassSurface } from '../glass-surface.js';

export default {
  background:"#030313", count: 63, pan: true, glass: true, surface: () => createGlassSurface(9, 7),
  layout({ slot, phase, travel, verticalPhase, verticalBase }) {
    const row = Math.floor(slot / 9);
    const worldRow = row + verticalBase;
    const longitude = ((slot % 9) - 4 - phase + ((worldRow % 2 + 2) % 2) / 2) * .127;
    const latitude = (row - 3 - verticalPhase) * .069;
    const radius = 3.15;
    return {
      w: .385, h: .205, textureIndex: worldRow * 9 + slot % 9 + Math.floor(travel),
      x: radius * Math.cos(latitude) * Math.sin(longitude),
      y: radius * Math.sin(latitude),
      z: radius * (Math.cos(latitude) * Math.cos(longitude) - 1),
      ry: longitude, rx: -latitude,
    };
  },
  vertex: `
    float weight = sin(uv.x * 3.14159) * sin(uv.y * 3.14159);
    float bend = dot(uv - .5, flex);
    p.z += weight * bend * .25;
    p.xy -= flex * weight * .035;
  `,
  functions: `
    float tileDistance(vec2 p, vec2 extent, float radius) {
      vec2 corner = abs(p) - extent + radius;
      return length(max(corner, 0.)) + min(max(corner.x, corner.y), 0.) - radius;
    }
  `,
  fragment: `
    vec2 extent = vec2(ratio, 1.) * .5;
    vec2 pos = (uv - .5) * 2. * extent;
    float d = tileDistance(pos, extent, .17);
    if (d > 0.) discard;
    vec2 normal = normalize(vec2(
      tileDistance(pos + vec2(.001, 0.), extent, .17) - d,
      tileDistance(pos + vec2(0., .001), extent, .17) - d
    ) + .00001);
    // The cross-section is a rounded bevel: a flat central window and
    // a rapidly changing normal within the last 9% of the short edge.
    float rim = clamp(1. + d / .09, 0., 1.);
    float nz = sqrt(max(.001,1. - rim*rim));
    vec3 N = normalize(vec3(normal*rim,nz));
    vec3 viewDir = normalize(vec3((uv-.5)*.16,1.));
    vec3 ray = refract(-viewDir,N,1./1.48);
    vec2 bend = ray.xy * (.13 / max(.12,abs(ray.z))) / vec2(ratio,1.);
    vec2 base = (uv-.5)*.92+.5;
    color = sampleA(base+bend);
    color.r = sampleA(base + bend*1.06).r;
    color.b = sampleA(base + bend*.94).b;
    vec3 refl = reflect(-viewDir,N);
    float fresnel = .045+.955*pow(1.-max(0.,dot(N,viewDir)),5.);
    float panel = smoothstep(.82,.97,dot(refl,normalize(vec3(-.65,.5,.57))));
    color.rgb = mix(color.rgb,vec3(.59,.65,.79)+panel*.55,fresnel*.72);
    color.rgb += panel*rim*.65 + .075*rim;
    vec4 lettering = texture2D(labelMap,uv + bend*.22);
    color.rgb = mix(color.rgb,lettering.rgb,lettering.a * showLabel);
    color.a *= 1. - smoothstep(-fwidth(d), 0., d);
  `,
};
