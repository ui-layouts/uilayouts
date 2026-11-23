import { full, single } from '../layouts.js';

const bulgeFunctions = `
vec2 bulge(vec2 uv, vec2 center) {

  uv -= center; // center to mouse

  float dist = length(uv) / .34; // amount of distortion based on mouse pos
  float distPow = pow(dist, 4.); // exponential as you ar far from the mouse
  float strengthAmount = .72 / (1.0 + distPow); // strenght

  uv *= (1. - .68) + .68 * strengthAmount; // use .68 to smoothly reset/add effect

  uv += center; // reset pos

  return uv;
}
`;

export default {
  ...({
    ...single(full, "color=sampleA(bulge(q,mouse));"),
    functions: bulgeFunctions,
  }),
  hoverBlend: true,
};
