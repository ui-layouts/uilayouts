'use client';
import { useEffect, useRef, useState } from 'react';

/* Shader and distance transform adapted from https://github.com/phileeppov/glass.
MIT License

Copyright (c) 2026 Nikita Filippov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

export interface GlassMarkProps {
  /** A short monogram, symbol, or a transparent logo image. */
  mark?: string;
  src?: string;
  label?: string;
  size?: number;
}

// Distance field from the image alpha: the Felzenszwalb-Huttenlocher Euclidean distance transform,
// run separately outside and inside the shape. Semi-transparent edge pixels give subpixel accuracy.

const INF = 1e20;

// One pass over a row or column: squared distances to the nearest "zero" point.
function pass(
  grid: Float64Array,
  offset: number,
  stride: number,
  n: number,
  f: Float64Array,
  v: Uint32Array,
  z: Float64Array
) {
  v[0] = 0;
  z[0] = -INF;
  z[1] = INF;
  f[0] = grid[offset];
  let k = 0;
  for (let q = 1; q < n; q++) {
    f[q] = grid[offset + q * stride];
    let s;
    do {
      const r = v[k];
      s = (f[q] - f[r] + q * q - r * r) / (q - r) / 2;
    } while (s <= z[k] && --k > -1);
    k++;
    v[k] = q;
    z[k] = s;
    z[k + 1] = INF;
  }
  k = 0;
  for (let q = 0; q < n; q++) {
    while (z[k + 1] < q) k++;
    const r = v[k];
    grid[offset + q * stride] = f[r] + (q - r) * (q - r);
  }
}

function transform(grid: Float64Array, size: number) {
  const f = new Float64Array(size);
  const v = new Uint32Array(size);
  const z = new Float64Array(size + 1);
  for (let x = 0; x < size; x++) pass(grid, x, size, size, f, v, z);
  for (let y = 0; y < size; y++) pass(grid, y * size, 1, size, f, v, z);
}

// rgba: RGBA of a square size × size canvas. Returns bytes: 128 is the edge, higher is inside,
// with `spread` texels of distance spanning half the byte range.
function buildSdf(rgba: Uint8ClampedArray, size: number, spread: number) {
  const n = size * size;
  const outer = new Float64Array(n);
  const inner = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    const a = rgba[i * 4 + 3] / 255;
    outer[i] = a === 1 ? 0 : a === 0 ? INF : Math.max(0, 0.5 - a) ** 2;
    inner[i] = a === 0 ? 0 : a === 1 ? INF : Math.max(0, a - 0.5) ** 2;
  }
  transform(outer, size);
  transform(inner, size);
  const out = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    const d = Math.sqrt(inner[i]) - Math.sqrt(outer[i]); // > 0 inside
    out[i] = Math.max(0, Math.min(255, Math.round(128 + (d / spread) * 127)));
  }
  return out;
}
const ICON_SCALE = 0.8;
// Share of the texture the logo takes along its long side; the margins leave room for the SDF falloff.
const LOGO_FILL = 0.86;
// How far from the edge the SDF still resolves distance, in texels.
const SDF_SPREAD = 32;

const VERT = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const frag = (derivatives: boolean) => `
${derivatives ? '#extension GL_OES_standard_derivatives : enable' : ''}
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

varying vec2 v_uv;
uniform sampler2D u_sdf;    // R: 0.5 is the logo edge, higher is inside
uniform sampler2D u_color;  // logo color, extended past the edge
uniform float u_texSize;
uniform float u_halfPx;     // icon half-size in pixels
uniform float u_n;          // superellipse exponent: 2 is a circle, 5 is a rounded square
uniform float u_edge;
uniform float u_refract;
uniform float u_disp;
uniform float u_phase;      // 0..1, one animation loop
uniform float u_motion;
uniform float u_size;
uniform vec4 u_tint;        // rgb is the fill, a is how much to fill: 0 own color, 1 fill
uniform float u_reverse;    // 1: the logo's lightness turned over, its hue kept (a dark two-tone logo on dark)
uniform float u_sideMix;    // 0: everywhere, 1: selected sides only
uniform float u_sideTwo;    // 0: one side, 1: two
uniform float u_angle;
uniform float u_spread;     // side zone width: 0 is a narrow spot, 1 is almost the whole side
uniform float u_liquid;     // 0: smear as a band at the rim, 1: the glyph flows into the edge, waves move through the glass
uniform float u_volume;     // slab thickness, 0..1
uniform float u_depth;      // 0: flat glass, 1: with volume; continuous so the volume fades out instead of popping off
uniform float u_facet;      // 0: a rounded rim, 1: cut glass; continuous so a preset eases from one to the other
uniform vec3 u_bg;
uniform float u_mode;       // 0 light, 1 dark, 2 transparent
uniform vec4 u_sound;       // y bass; all 0 when sound is off, and then nothing below changes
uniform float u_bands[8];   // sound by frequency, low to high, 0..1; laid along the fringe from red to violet
uniform vec4 u_press;       // a held finger: xy where, z how far the glass gives (0..1), w the radius it gives over
uniform vec4 u_fields[9];   // the handpan's fields: xy centre, z radius, w how hard it rings now (0 at rest)
uniform vec4 u_light;       // sound as light: x turns the light (rad), y brightens the rim, z widens the fringe; 0 in silence
uniform vec2 u_tilt;        // where the glass leans, toward the cursor or with the phone: -1..1 per axis (to 1.5 with a phone), 0 when still
uniform float u_zoom;       // 1: the icon takes ${Math.round(ICON_SCALE * 100)}% of the frame; less fills more (avatar and App Store fill all of it)
uniform float u_shadow;     // 1: soft shadow under the icon, 0: none (avatar, App Store)

const int TAPS = 32;
const float TAU = 6.2831853;

// Spectrum from red (0) to violet (1).
vec3 spectrum(float x) {
  float h = x * 0.8;
  return clamp(vec3(abs(h * 6.0 - 3.0) - 1.0, 2.0 - abs(h * 6.0 - 2.0), 2.0 - abs(h * 6.0 - 4.0)), 0.0, 1.0);
}

// Square by multiplication: pow(x, 2.0) is undefined for x < 0 in GLSL and gives black pixels on some GPUs.
float sq(float x) {
  return x * x;
}

// Distance to the superellipse edge (approximate, exact right at the edge) and the outward normal.
float shape(vec2 p, out vec2 nrm) {
  vec2 a = max(abs(p), vec2(1e-4));
  vec2 an = pow(a, vec2(u_n));
  float s = an.x + an.y;
  float f = pow(s, 1.0 / u_n);
  vec2 g = sign(p) * pow(a, vec2(u_n - 1.0)) * pow(s, 1.0 / u_n - 1.0);
  float gl = max(length(g), 1e-4);
  nrm = g / gl;
  return (f - 1.0) / gl;
}

// With no background the glass is the same as on light: only what is outside stays transparent.
// Nearly empty glass has nothing to refract, so the rainbow turned into gray smudges.
// Superellipse norm: 1 at the edge, less inside. Its level sets are scaled-down copies of the shape, and their corners
// are always rounded. A constant-distance inset breaks at a corner once it exceeds the corner radius,
// and the rim lens magnifies that kink, which is what caused the creases in the corners.
float snorm(vec2 p) {
  vec2 a = max(abs(p), vec2(1e-4));
  return pow(pow(a.x, u_n) + pow(a.y, u_n), 1.0 / u_n);
}

vec4 glassBase() {
  // The body is close to the background: the glass is clear, you see the backdrop through it, not a white tile.
  if (u_mode > 0.5 && u_mode < 1.5) return vec4(mix(u_bg, vec3(1.0), 0.04), 1.0);
  return vec4(mix(u_bg, vec3(1.0), 0.05), 1.0);
}

// The logo at point q in icon space. blur is the half-width of the edge transition, in texels.
vec4 content(vec2 q, float blur) {
  vec2 uv = 0.5 + q * (0.5 * ${LOGO_FILL.toFixed(2)}) / u_size;
  uv.y = 1.0 - uv.y;
  float dist = (texture2D(u_sdf, uv).r * 255.0 - 128.0) / 127.0 * ${SDF_SPREAD.toFixed(1)};
  float cov = smoothstep(-blur, blur, dist);
  vec3 col = texture2D(u_color, uv).rgb;
  if (u_reverse > 0.0) col = mix(col, clamp(col + 1.0 - 2.0 * dot(col, vec3(0.299, 0.587, 0.114)), 0.0, 1.0), u_reverse);
  col = mix(col, u_tint.rgb, u_tint.a);
  vec4 logo = vec4(col * cov, cov);
  return logo + glassBase() * (1.0 - logo.a);
}

// --- Volume: a slab of thickness h with a rounded top rim. A ray from the eye enters the rim,
// refracts and lands on the floor; whatever lies there is what you see. That gives the shimmer inside the rim. ---

// Where on the floor a ray lands after entering the glass with normal n3.
vec2 throughSlab(vec3 n3, float ior, float h) {
  // An index below 1 gives total internal reflection: refract() returns zero, leaving a break in the image.
  vec3 t = refract(vec3(0.0, 0.0, -1.0), n3, 1.0 / max(ior, 1.02));
  return t.xy / max(-t.z, 0.25) * h;
}

// Slab floor: the logo and the backdrop, with a contact shadow at the edge. A bright caustic ring used to be here,
// but at the corners the rim focuses rays and stretched it into straight bright streaks, so it was removed.
vec4 floorAt(vec2 q, float blur) {
  vec4 c = content(q, blur);
  float contact = exp(min(snorm(q) - 1.0, 0.0) / 0.04) * 0.12 * u_depth;
  c.rgb *= 1.0 - contact;
  return c;
}

// The room reflected in the rim: floor under the slab, walls, a window at top left and a light strip at bottom right.
vec3 studio(vec3 r) {
  float len = length(r.xy);
  vec2 dir = r.xy / max(len, 1e-4);
  float key = dot(dir, normalize(vec2(-0.55, 0.85)));
  float ang = len > 1e-4 ? atan(dir.y, dir.x) : 0.0; // atan(0, 0) is undefined in GLSL
  float up = smoothstep(-0.25, 0.35, r.z);
  float window = exp(-sq((ang - 2.15) / 0.22)) * up;
  float strip = exp(-sq((ang + 0.9) / 0.14)) * up;
  bool dark = u_mode > 0.5 && u_mode < 1.5;
  vec3 floorC = u_bg * (dark ? 0.6 : 0.78);
  vec3 wall = dark ? vec3(0.08 + 0.2 * max(key, 0.0)) : u_bg + 0.04 * key;
  return mix(floorC, wall, up) + vec3(window * (dark ? 0.9 : 0.35) + strip * (dark ? 0.4 : 0.18));
}

// Slow waves inside the glass: a sum of sines at different angles. Phase T is the animation loop,
// so the video loops without a seam.
vec2 waves(vec2 p, float T) {
  float a = sin(dot(p, vec2(3.1, 1.7)) + T) + sin(dot(p, vec2(-2.3, 2.9)) - T + 1.7);
  float b = sin(dot(p, vec2(1.3, -3.4)) + T + 0.6) + sin(dot(p, vec2(-3.7, -1.1)) - T + 2.4);
  return vec2(a, b) * 0.5;
}

mat2 turn(float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, s, -s, c);
}

// Noise with a uniform spectrum: sample jitter instead of banding.
float ign(vec2 c) {
  return fract(52.9829189 * fract(dot(c, vec2(0.06711056, 0.00583715))));
}

void main() {
  float T = u_phase * TAU;
  vec2 p = (v_uv - 0.5) * 2.0 / ${ICON_SCALE.toFixed(2)};
  p *= u_zoom;
  // Bass lifts the whole icon by a hair, a breath rather than a pump.
  p *= 1.0 - 0.012 * u_motion * sin(T) - 0.006 * u_sound.y;

  vec2 nrm;
  float d = shape(p, nrm);
  float th = atan(p.y, p.x + 1e-7); // offset so there is no atan(0, 0) at the exact center
  // A struck field reaches into the rim near it, the way a beat does all round; the ding in the middle reaches all round.
  float reachHit = 0.0;
  for (int i = 0; i < 9; i++) {
    vec4 f = u_fields[i];
    if (f.w < 0.002) continue;
    float near = 1.0;
    if (i > 0) {
      float fa = atan(f.y, f.x + 1e-7);
      float da = atan(sin(th - fa), cos(th - fa));
      near = exp(-da * da / 0.3);
    }
    reachHit += f.w * near;
  }
  float wob = u_motion * (0.016 * sin(3.0 * th + T) + 0.01 * sin(2.0 * th - 2.0 * T));
  d -= wob;
  // Inward depth along scaled-down copies of the shape: 0 at the edge, growing toward the center.
  float depth = 1.0 - snorm(p) + wob;

  float px = 1.0 / u_halfPx;
  float texelsPerUnit = u_texSize * 0.5 * ${LOGO_FILL.toFixed(2)} / u_size;

  // Outside: the background and a soft shadow slightly below the icon.
  vec2 sn;
  float sd = max(shape(p + vec2(0.0, 0.05) + u_tilt * 0.02, sn), 0.0); // the shadow slides away from the lean
  float shadow = exp(-sd / 0.12) * (u_mode > 0.5 && u_mode < 1.5 ? 0.45 : 0.035) * (1.0 + 0.4 * u_volume * u_depth) * u_shadow;
  vec4 outside;
  if (u_mode > 1.5) {
    outside = vec4(0.0, 0.0, 0.0, shadow);
  } else {
    // Flat background: it blends with the page, and in 16:9 video with the side margins, without a seam.
    vec3 bg = u_bg;
    outside = vec4(bg * (1.0 - shadow), 1.0);
  }

  // Inside: the bevel refracts; samples shift inward along the normal, each with its own color.
  // The depth the bevel gathers the image from doesn't depend on its width: a narrow rim
  // compresses a wide band from inside, so the glyph near the edge stretches along it, like in thick glass.
  float t = clamp(depth / u_edge, 0.0, 1.0);
  float e = 1.0 - t;

  // Sides: where the rim refracts. The mask uses the position angle, not the normal: on straight
  // sides the normal angle is constant, and the whole side would switch on at once. Spread is the zone half-width.
  float side = 1.0;
  if (u_sideMix > 0.001) {
    float c = cos(th - u_angle);
    float hw = mix(0.25, 1.6, u_spread);
    side = mix(1.0, smoothstep(cos(hw), cos(hw * 0.35), mix(c, abs(c), u_sideTwo)), u_sideMix);
  }
  float wave = 1.0 + 0.25 * u_motion * sin(T + 1.3);
  // Profile: the offset quickly reaches full strength and holds it across the whole band,
  // so the rim shows a solid band of glyph pulled from far away, with the fringe on its inner boundary.
  float rimPull = smoothstep(0.0, 0.65, e);
  // Cut glass: two flat facets instead of the rounded profile. Each shifts the logo by its own constant amount,
  // so the rim shows two clean copies of the edge, and the step between them is a sharp line.
  float facetAA = 1.2 * px / max(u_edge, 1e-3);
  // The first step only rises past the start of the rim, so the flat middle (e = 0) never shifts, at any canvas size.
  float facets = 0.5 * smoothstep(0.02, 0.02 + 2.0 * facetAA, e) + 0.5 * smoothstep(0.5 - facetAA, 0.5 + facetAA, e);
  rimPull = mix(rimPull, facets, u_facet);
  // Liquid: the falloff reaches deep inside and becomes gentle, so the image doesn't fold
  // into a separate arc but stretches continuously to the edge: the glyph flows into the rim as a bridge.
  float flowW = mix(u_edge, 0.62, u_liquid);
  float flow = pow(1.0 - smoothstep(0.0, flowW, depth), 1.4);
  // Waves in the glass: the smear thickness varies along the rim. None in the center, so the glyph stays even there.
  vec2 wv = waves(p, T);
  float nearEdge = 1.0 - smoothstep(0.0, 0.6, depth);
  float swell = 1.0 + 0.45 * u_liquid * wv.x * nearEdge;
  // A corner is farther from the center than a side's midpoint, so the ray reaches farther, or the corner runs short of glyph.
  float cornerReach = length(p) / max(snorm(p), 1e-3);
  // The band at the rim stays (long tails along the sides); the bridge to the glyph is added on top.
  float k = u_refract * 0.42 * wave * swell * cornerReach * max(rimPull, flow * u_liquid) * side;
  // A struck field pulls the rim near it whatever the sides are, so the glass answers wherever it's played.
  k += u_refract * 0.42 * cornerReach * rimPull * 0.8 * reachHit;
  // Color spread is capped: otherwise, at large offsets the fringe smears into wide blotches.
  float kDisp = min(k, 0.16 + 0.08 * u_light.z + 0.05 * reachHit);
  // Sample direction: along the normal; with Liquid it converges toward the center, and the tails pool into the corner.
  vec2 dir = normalize(mix(nrm, p / max(length(p), 1e-3), 0.45 * u_liquid));
  vec2 ripple = wv * 0.05 * u_liquid * nearEdge * side;
  // The light follows the lean; the logo under the glass shifts the other way, more under a thicker slab: parallax.
  // The light stops at a full lean: past it (a phone leans further) the sum could pass near zero and flip the light.
  vec2 L = normalize(vec2(-0.55, 0.85) + clamp(u_tilt, -1.0, 1.0) * 0.5);
  // Pitch turns the light around the glass; the guard keeps the silent glass exactly as it was.
  if (u_light.x != 0.0) L = turn(u_light.x) * L;
  vec2 par = -u_tilt * (0.015 + 0.06 * u_volume * u_depth);
  // Touch: a struck field focuses, drawing what's beneath toward its middle, and a held finger is a soft lens.
  vec2 wake = vec2(0.0);
  for (int i = 0; i < 9; i++) {
    vec4 f = u_fields[i];
    if (f.w < 0.002) continue;
    vec2 v = p - f.xy;
    float r = length(v) / f.z;
    wake -= v * exp(-r * r * 2.2) * 0.24 * f.w;
  }
  if (u_press.z > 0.001) {
    vec2 v = p - u_press.xy;
    float r = length(v) / u_press.w;
    float lens = 1.0 - smoothstep(0.0, 1.0, r);
    wake -= v * lens * lens * 0.3 * u_press.z;
  }

  // Volume: a slab with a rounded rim. Thickness sets its visible width and depth,
  // while Edge width still controls the bevel smear. The ray computes the offset; the index comes from Refraction.
  bool vol = u_depth > 0.001;
  float rimW = 0.05 + 0.2 * u_volume;
  float tr = clamp(depth / rimW, 0.0, 1.0);
  float r = 1.0 - tr;
  // Cut glass turns the slab's rounded rim into the same two facets.
  float rAA = 1.2 * px / rimW;
  r = mix(r, 0.5 * smoothstep(0.02, 0.02 + 2.0 * rAA, r) + 0.35 * smoothstep(0.5 - rAA, 0.5 + rAA, r), u_facet);
  float slope = r / max(sqrt(1.0 - r * r), 0.08);
  vec3 n3 = normalize(vec3(nrm * slope, 1.0));
  float h = 0.1 + 0.4 * u_volume;
  float ior = 1.0 + 0.5 * u_refract;
  // A physically accurate slab bends the ray only slightly, and the look we want smears more than physics does. So with volume the ray
  // through the rim is added to the existing bevel smear: lens plus rainbow.
  vec2 offC = (vol ? throughSlab(n3, ior, h) * side * wave * u_depth : vec2(0.0)) - dir * k + ripple + wake;

  // Edge transition width: the pixel size in texels where the sample lands,
  // plus blur that grows with refraction strength, since glass has a soft rim.
  vec2 q0 = p + offC;
#ifdef GL_OES_standard_derivatives
  float foot = length(fwidth(q0)) * texelsPerUnit * 0.4;
#else
  float foot = px * texelsPerUnit * 1.5;
#endif
  float reach = length(offC);
  float blur = max(foot, 0.35) + reach * 0.022 * texelsPerUnit;

  // Color order in the fringe. A black glyph on light and a light glyph on dark give complementary
  // colors; on dark the fringe came out yellow-orange. We flip the order so it is the same on every background.
  // In the band at the rim the image is folded, on the Liquid bridge it isn't, so their color orders are opposite.
  // Flip per zone with a smooth transition: cyan inside and red outside at the rim, a cyan halo around the bridge.
  float zone = mix(-1.0, 1.0, smoothstep(u_edge * 0.6, u_edge * 1.3, depth) * step(0.001, u_liquid));
  float order = (u_mode > 0.5 && u_mode < 1.5 ? -1.0 : 1.0) * zone;

  vec4 inside;
  if (reach < 1e-4) {
    // With volume, draw the floor the same way as in the loop; otherwise, where the side mask kills the smear,
    // the contact shadow would disappear and a straight step in tone would show up on the glass.
    inside = vol ? floorAt(p + par, blur) : content(p + par, blur);
  } else {
    vec3 acc = vec3(0.0);
    vec3 wsum = vec3(0.0);
    float aacc = 0.0;
    vec2 tng = vec2(-nrm.y, nrm.x);
    float jitter = ign(gl_FragCoord.xy);
    for (int i = 0; i < TAPS; i++) {
      float x = (float(i) + jitter) / float(TAPS);
      // Sound as light: each colour of the rim fringe listens to its own band, bass in red through highs in violet.
      // A loud band leans its colour a little further and a little stronger; the fringe stays a thin rim.
      float tone = u_bands[i / 4];
      vec3 w = spectrum(x) * (1.0 + 0.6 * tone);
      // Red goes deeper, blue stays closer to the edge: red fringe outside, cyan inside.
      // A small spread along the rim softens hard cuts in the glyph.
      float along = (fract(x * 7.31 + jitter) - 0.5) * 0.25;
      float spread = (0.5 - x) * order * (1.0 + 0.5 * tone + 0.8 * u_light.z + 0.5 * reachHit);
      vec2 off = -dir * (k + kDisp * u_disp * spread * 0.75) + ripple + wake;
      vec4 c;
      if (vol) {
        off += throughSlab(n3, ior + u_disp * 0.3 * spread, h) * side * wave * u_depth;
        // The along-rim spread blends into the flat version with u_depth; otherwise it jumped at the moment volume was turned off.
        c = floorAt(p + par + off + tng * mix(k, length(off), u_depth) * along, blur);
      } else {
        c = content(p + par + off + tng * k * along, blur);
      }
      acc += c.rgb * w;
      wsum += w;
      aacc += c.a;
    }
    float a = aacc / float(TAPS);
    inside = vec4(min(acc / wsum, vec3(a)), a);
    // Averaging the samples desaturates the fringe, so give back some saturation, only where there is smear.
    // Just some: past this colored logos and photos turn acid.
    float luma = dot(inside.rgb, vec3(0.299, 0.587, 0.114));
    inside.rgb = clamp(luma + (inside.rgb - luma) * 1.35, 0.0, a);
  }

  float lit = 0.55 + 0.45 * dot(nrm, L);
  // A thin glint right at the edge; photographed glass always has one.
  float glint = exp(-sq((-d - 0.012) / (2.0 * px)));
  // Flat rim: a light band with a thin glint inside and a gray outline outside.
  float band = smoothstep(0.035, 0.0, -d);
  vec4 flatRim = mix(inside, vec4(1.0), clamp(glint * (0.35 + 0.55 * lit + 0.6 * u_light.y) + band * (0.12 + 0.15 * u_light.y), 0.0, 1.0));
  if (vol) {
    vec4 v = inside;
    // Fresnel reflection of the room, kept weak: the glass should read as clear, not glossy plastic.
    vec3 refl = reflect(vec3(u_tilt * 0.25, -1.0), n3); // the room in the rim slides with the lean
    if (u_light.x != 0.0) refl.xy = turn(u_light.x) * refl.xy;
    float fres = (0.04 + 0.96 * pow(max(1.0 - n3.z, 0.0), 3.0)) * step(tr, 0.999);
    v = mix(v, vec4(studio(refl), 1.0), clamp(fres, 0.0, 1.0) * (0.55 + 0.3 * u_light.y));
    // The seam where the rim meets the flat top: a highlight on the lit side, a shadow on the opposite side.
    float seam = exp(-sq((depth - rimW) / (1.4 * px)));
    float toLight = dot(nrm, L);
    v = mix(v, vec4(1.0), seam * max(toLight, 0.0) * (0.6 + 0.5 * u_light.y));
    v.rgb *= 1.0 - seam * max(-toLight, 0.0) * 0.2;
    v = mix(v, vec4(1.0), glint * (0.25 + 0.5 * lit + 0.6 * u_light.y));
    // Facet edges catch the light as fine lines, brighter on the side facing it.
    if (u_facet > 0.001) {
      float edgeLine = exp(-sq((e - 0.5) * u_edge / (1.1 * px)));
      float rimLine = exp(-sq(((1.0 - tr) - 0.5) * rimW / (1.1 * px)));
      v = mix(v, vec4(1.0), u_facet * (0.35 * edgeLine + 0.45 * rimLine) * (0.4 + 0.6 * max(toLight, 0.0)));
    }
    // The volume dissolves into flat glass with u_depth, with no jump at the end.
    inside = mix(flatRim, v, u_depth);
  } else {
    inside = flatRim;
  }

  float line = smoothstep(2.0 * px, 0.0, -d);
  if (u_mode > 0.5 && u_mode < 1.5) inside = mix(inside, vec4(1.0), 0.3 * line);
  else inside.rgb *= 1.0 - (0.12 + 0.2 * u_light.y) * line;

  float cov = clamp(0.5 - d / px, 0.0, 1.0);
  gl_FragColor = inside * cov + outside * (1.0 - cov);
}`;

export function GlassMark({
  mark = '✳',
  src,
  label = 'Glass monogram',
  size = 160,
}: GlassMarkProps) {
  const surface = useRef<HTMLCanvasElement>(null);
  const [generation, setGeneration] = useState(0);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const canvas = surface.current;
    setReady(false);
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { alpha: true, antialias: false });
    if (!gl) return;
    const program = gl.createProgram();
    if (!program) return;
    function attach(type: number, source: string) {
      const shader = gl!.createShader(type);
      if (!shader) return;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      gl!.attachShader(program!, shader);
      gl!.deleteShader(shader);
    }
    attach(gl.VERTEX_SHADER, VERT);
    attach(
      gl.FRAGMENT_SHADER,
      frag(!!gl.getExtension('OES_standard_derivatives'))
    );
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return;
    }
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const pos = gl.getAttribLocation(program, 'a_pos');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    const loc = (name: string) => gl.getUniformLocation(program, name);
    const resolution = 256;
    const uniforms = {
      u_texSize: resolution,
      u_n: 4.6,
      u_edge: 0.22,
      u_refract: 1.25,
      u_disp: 0.88,
      u_motion: 0.42,
      u_size: 0.63,
      u_sideMix: 0,
      u_sideTwo: 1,
      u_angle: 0.78,
      u_spread: 0.6,
      u_liquid: 0.8,
      u_volume: 0.45,
      u_depth: 1,
      u_mode: 2,
      u_zoom: 1,
      u_shadow: 1,
    };
    for (const [name, val] of Object.entries(uniforms))
      gl.uniform1f(loc(name), val);
    gl.uniform3f(loc('u_bg'), 0.86, 0.87, 0.9);
    const textures = [gl.createTexture(), gl.createTexture()];
    const art = document.createElement('canvas');
    art.width = art.height = resolution;
    const ctx = art.getContext('2d')!;
    let frame = 0,
      alive = true,
      loaded = false,
      tiltX = 0,
      tiltY = 0,
      wantX = 0,
      wantY = 0,
      press = 0;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    function render(now: number) {
      frame = 0;
      if (!loaded) return;
      const px = Math.max(
        1,
        Math.round(canvas!.clientWidth * Math.min(devicePixelRatio, 2))
      );
      if (canvas!.width !== px || canvas!.height !== px)
        canvas!.width = canvas!.height = px;
      gl!.viewport(0, 0, px, px);
      tiltX += (wantX - tiltX) * 0.15;
      tiltY += (wantY - tiltY) * 0.15;
      press *= 0.91;
      gl!.uniform1f(loc('u_halfPx'), (px * ICON_SCALE) / 2);
      gl!.uniform1f(loc('u_phase'), reduced.matches ? 0 : (now % 8000) / 8000);
      gl!.uniform2f(loc('u_tilt'), tiltX, tiltY);
      gl!.uniform4f(loc('u_press'), tiltX, tiltY, press, 0.45);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      if (
        Math.max(Math.abs(wantX - tiltX), Math.abs(wantY - tiltY), press) >
        0.002
      )
        schedule();
    }
    function schedule() {
      if (!frame && alive) frame = requestAnimationFrame(render);
    }
    function upload() {
      const sdf = buildSdf(
        ctx.getImageData(0, 0, resolution, resolution).data,
        resolution,
        SDF_SPREAD
      );
      textures.forEach((texture, i) => {
        gl!.activeTexture(gl!.TEXTURE0 + i);
        gl!.bindTexture(gl!.TEXTURE_2D, texture);
        gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MIN_FILTER, gl!.LINEAR);
        gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MAG_FILTER, gl!.LINEAR);
        gl!.texParameteri(
          gl!.TEXTURE_2D,
          gl!.TEXTURE_WRAP_S,
          gl!.CLAMP_TO_EDGE
        );
        gl!.texParameteri(
          gl!.TEXTURE_2D,
          gl!.TEXTURE_WRAP_T,
          gl!.CLAMP_TO_EDGE
        );
        if (i === 0)
          gl!.texImage2D(
            gl!.TEXTURE_2D,
            0,
            gl!.LUMINANCE,
            resolution,
            resolution,
            0,
            gl!.LUMINANCE,
            gl!.UNSIGNED_BYTE,
            sdf
          );
        else
          gl!.texImage2D(
            gl!.TEXTURE_2D,
            0,
            gl!.RGB,
            gl!.RGB,
            gl!.UNSIGNED_BYTE,
            art
          );
        gl!.uniform1i(loc(i === 0 ? 'u_sdf' : 'u_color'), i);
      });
      loaded = true;
      setReady(true);
      schedule();
    }
    const image = new Image();
    if (src) {
      image.crossOrigin = 'anonymous';
      image.onload = () => {
        if (!alive) return;
        const scale =
          (resolution * LOGO_FILL) / Math.max(image.width, image.height);
        const w = image.width * scale,
          h = image.height * scale;
        ctx.drawImage(image, (resolution - w) / 2, (resolution - h) / 2, w, h);
        upload();
      };
      image.src = src;
    } else {
      ctx.fillStyle = '#202125';
      ctx.font = 'bold 208px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(mark, 128, 129, 220);
      upload();
    }
    function move(event: PointerEvent) {
      if (reduced.matches) return;
      const rect = canvas!.getBoundingClientRect();
      wantX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      wantY = 1 - ((event.clientY - rect.top) / rect.height) * 2;
      schedule();
    }
    function leave() {
      wantX = wantY = 0;
      schedule();
    }
    function tap() {
      if (!reduced.matches) {
        press = 1;
        schedule();
      }
    }
    const observer = new ResizeObserver(schedule);
    observer.observe(canvas);
    function lost(event: Event) {
      event.preventDefault();
      loaded = false;
      cancelAnimationFrame(frame);
      setReady(false);
    }
    function restored() { setGeneration(value => value + 1); }
    canvas.addEventListener('webglcontextlost', lost);
    canvas.addEventListener('webglcontextrestored', restored);
    canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerleave', leave);
    canvas.addEventListener('pointerdown', tap);
    return () => {
      alive = false;
      image.onload = null;
      cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener('webglcontextlost', lost);
      canvas.removeEventListener('webglcontextrestored', restored);
      canvas.removeEventListener('pointermove', move);
      canvas.removeEventListener('pointerleave', leave);
      canvas.removeEventListener('pointerdown', tap);
      textures.forEach((t) => gl.deleteTexture(t));
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    };
  }, [src, mark, generation]);
  return (
    <span
      role='img'
      aria-label={label}
      style={{
        display: 'inline-grid',
        placeItems: 'center',
        position: 'relative',
        width: size,
        maxWidth: '100%',
        aspectRatio: '1',
        fontSize: size / 2,
      }}
    >
      {!ready &&
        (src ? <img src={src} alt='' style={{ maxWidth: '70%' }} /> : mark)}
      <canvas
        ref={surface}
        aria-hidden='true'
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: ready ? 1 : 0,
        }}
      />
    </span>
  );
}
