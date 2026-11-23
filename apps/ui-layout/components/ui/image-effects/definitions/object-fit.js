

export default {
  count: 1,
  layout: ({ aspect }) => ({ w: aspect, h: 1 }),
  // Interpolate the remaining crop margin like CSS object-position.
  fragment: `
    vec2 scale = min(vec2(ratio / ratioA, ratioA / ratio), 1.);
    color = texture2D(mapA, uv * scale + (1. - scale) * mouse);
  `,
};
