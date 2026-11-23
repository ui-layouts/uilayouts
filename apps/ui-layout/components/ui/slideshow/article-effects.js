// Article implementations use image textures so the same scenes work with user media.
export const objectFit = {
  count: 1,
  layout: ({ aspect }) => ({ w: aspect, h: 1 }),
  // Interpolate the remaining crop margin like CSS object-position.
  fragment: `
    vec2 scale = min(vec2(ratio / ratioA, ratioA / ratio), 1.);
    color = texture2D(mapA, uv * scale + (1. - scale) * mouse);
  `,
};

export const liquidGlassGrid = {
  count: 63,
  layout({ slot, phase, mx, my }) {
    const row = Math.floor(slot / 9);
    const longitude = ((slot % 9) - 4 - phase + (row % 2) / 2 + (mx - .5) * .7) * .238;
    const latitude = (row - 3 + (my - .5) * .8) * .18;
    const radius = 2.1;
    return {
      w: .46, h: .335,
      x: radius * Math.cos(latitude) * Math.sin(longitude),
      y: radius * Math.sin(latitude),
      z: radius * (Math.cos(latitude) * Math.cos(longitude) - 1),
      ry: longitude, rx: -latitude,
    };
  },
  functions: `
    float tileDistance(vec2 p, vec2 extent, float radius) {
      vec2 corner = abs(p) - extent + radius;
      return length(max(corner, 0.)) + min(max(corner.x, corner.y), 0.) - radius;
    }
  `,
  fragment: `
    vec2 extent = vec2(ratio, 1.) * .5;
    vec2 pos = (uv - .5) * 2. * extent;
    float d = tileDistance(pos, extent, .07);
    if (d > 0.) discard;
    vec2 normal = normalize(vec2(
      tileDistance(pos + vec2(.001, 0.), extent, .07) - d,
      tileDistance(pos + vec2(0., .001), extent, .07) - d
    ) + .00001);
    float bevel = exp(22. * d);
    vec2 bend = normal * bevel * .085 / vec2(ratio, 1.);
    color = sampleA(uv - bend);
    color.r = sampleA(uv - bend * 1.08).r;
    color.b = sampleA(uv - bend * .91).b;
    color.rgb += .32 * pow(bevel, 3.) * (.25 + .75 * abs(dot(normal, normalize(vec2(-.6, 1.)))));
    color.a *= 1. - smoothstep(-fwidth(d), 0., d);
  `,
};

export const phantomGrid = {
  count: 63, portrait: true,
  layout({ slot, phase, mx, my, aspect }) {
    const x = ((slot % 9) - 4 - phase) * .42 - (mx - .5) * .09;
    const y = (Math.floor(slot / 9) - 3) * .31 - (my - .5) * .08;
    const dx = x - (mx - .5) * aspect, dy = y - (my - .5);
    const influence = Math.exp(-9 * (dx * dx + dy * dy));
    return { x: x + dx * influence * .5, y: y + dy * influence * .5,
      z: -.2 + .12 * influence, w: .39, h: .285, ry: dx * influence, rx: -dy * influence };
  },
};

// Change the camera and look-at target independently, as in the scroll timeline.
export const cinematicScroll = {
  count: 9,
  layout({ offset, index }) {
    return { x: Math.sin(index * 1.9) * .42, y: Math.cos(index * 1.3) * .18,
      z: -offset * 1.6, w: 1.08, h: .76, ry: Math.sin(index) * .24, visible: offset > -.9 };
  },
  camera(camera, { travel, phase }) {
    const index = Math.floor(travel);
    const ease = phase * phase * (3 - 2 * phase);
    const interpolate = fn => fn(index) * (1 - ease) + fn(index + 1) * ease;
    const targetX = interpolate(i => Math.sin(i * 1.9) * .42);
    const targetY = interpolate(i => Math.cos(i * 1.3) * .18);
    camera.position.set(targetX + .32 * Math.sin(travel * 1.45), targetY + .14 * Math.cos(travel * 1.21), 1.34);
    camera.lookAt(targetX, targetY, -.1);
  },
};
