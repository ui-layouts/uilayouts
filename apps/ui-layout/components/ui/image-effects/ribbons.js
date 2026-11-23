import * as THREE from "three";
// Adapted from Clément Grellier’s Unwoven. See notices/unwoven.txt.
export function buildRibbonGeometry(width=1,height=1,threads=26,segments=20) {
    const columns = segments + 1;
    const perThread = columns * 2;
    const total = threads * perThread;

    const positions = new Float32Array(total * 3);
    const uvs = new Float32Array(total * 2);
    const rims = new Float32Array(total);
    const threadIds = new Float32Array(total);
    const indices = [];

    let v = 0;
    for (let t = 0; t < threads; t++) {
      for (let row = 0; row < 2; row++) {
        const vy = (t + row) / threads; // 0 at the bottom of the card, 1 at the top
        for (let c = 0; c < columns; c++) {
          const ux = c / segments;
          positions[v * 3 + 0] = (ux - 0.5) * width;
          positions[v * 3 + 1] = (vy - 0.5) * height;
          positions[v * 3 + 2] = 0;
          uvs[v * 2 + 0] = ux;
          uvs[v * 2 + 1] = vy;
          rims[v] = row === 0 ? -1 : 1;
          threadIds[v] = t;
          v++;
        }
      }

      const base = t * perThread;
      for (let c = 0; c < segments; c++) {
        const bl = base + c;
        const br = base + c + 1;
        const tl = base + columns + c;
        const tr = base + columns + c + 1;
        indices.push(bl, br, tl, br, tr, tl);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
    geometry.setAttribute("aRim", new THREE.BufferAttribute(rims, 1));
    geometry.setAttribute("aThread", new THREE.BufferAttribute(threadIds, 1));
    geometry.setIndex(indices);
    return geometry;
  }


export const ribbonVertex = `
    attribute float aThread;   // ribbon index, 0 .. threads-1
    attribute float aRim;      // -1 at the ribbon's top edge, +1 at the bottom

    uniform float uPixels; uniform float uTime;
    uniform float uHalfWidth;  // half the viewport width, in pixels
    uniform float uZone;       // depth of the tear zone at each edge, in pixels
    uniform float uStrength;   // global 0..1 master switch, tweened on load
    uniform float uWobble;     // 0 when the user prefers reduced motion
    uniform float uSeed;       // per-card, so two cards never unravel alike

    varying vec2  vUv;
    varying float vTear;       // 0 = woven, 1 = fully unravelled
    varying float vRim;
    varying float vRandom;     // this ribbon's random value, for the fragment stage

    float hash(float n) {
      return fract(sin(n * 127.1 + 311.7) * 43758.5453);
    }

    void main() {
      vUv = uv;
      vRim = aRim;

      vec4 world = modelMatrix * vec4(position, 1.0);
      float x = world.x * uPixels;

      // How far into a tear zone is this vertex? Note both smoothsteps are
      // written low-edge-first; GLSL leaves edge0 >= edge1 undefined.
      float left  = 1.0 - smoothstep(-uHalfWidth, -uHalfWidth + uZone, x);
      float right = smoothstep(uHalfWidth - uZone, uHalfWidth, x);
      float tear  = max(left, right) * uStrength;

      // Zones never overlap the centre, so the sign of x is the escape direction.
      float direction = x < 0.0 ? -1.0 : 1.0;

      float randomA = hash(aThread + uSeed * 57.0);
      float randomB = hash(aThread * 3.7 + uSeed * 91.0);
      vRandom = randomA;

      // Bias the ramp so the card stays readable for longer, then lets go fast.
      float t = pow(tear, 1.4);

      // Each ribbon escapes at its own speed, which is what makes the edge
      // read as a comb of threads rather than one sliding sheet.
      float run = t * (60.0 + randomA * 420.0);
      run *= 0.85 + 0.15 * sin(uTime * (1.0 + randomB * 2.0) + randomA * 6.2831);
      world.x += direction * run / uPixels;

      // The weave loosens vertically too, so ribbons drift out of their rows.
      world.y += (randomA - 0.5) * 170.0 * t * t / uPixels;

      // Loose-thread flutter, sampled along the ribbon's displaced length.
      world.y += sin(world.x * uPixels * 0.02 + uTime * (1.6 + randomA * 2.2) + randomA * 6.2831)
                 * (5.0 + 13.0 * randomA) * t * uWobble / uPixels;

      vTear = tear;
      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `;
export const ribbonFragment = `
    precision highp float;

    uniform sampler2D uMap;
    uniform vec2  uCardSize;    // px
    uniform float uRadius;      // px
    uniform float uImageAspect; // width / height of the texture

    varying vec2  vUv;
    varying float vTear;
    varying float vRim;
    varying float vRandom;

    float sdRoundBox(vec2 p, vec2 b, float r) {
      vec2 q = abs(p) - b + r;
      return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
    }

    void main() {
      float tear = vTear;
      float rim  = abs(vRim); // 0 at the ribbon's core, 1 at its edge

      // --- Open the weave -------------------------------------------------
      // The ribbon geometry stays a fixed height; we shrink the *visible*
      // band inside it. Doing this in the fragment stage keeps the edges
      // antialiased and lets the card be perfectly gapless when woven.
      float coreWidth = mix(0.8, 0.16 + vRandom * 0.12, smoothstep(0.0, 0.85, tear));
      float threadAlpha = 1.0 - smoothstep(coreWidth - 0.10, coreWidth + 0.06, rim);
      threadAlpha = mix(1.0, threadAlpha, smoothstep(0.03, 0.30, tear));

      // --- Card silhouette ------------------------------------------------
      vec2 p = (vUv - 0.5) * uCardSize;
      float cardAlpha = 1.0 - smoothstep(-1.5, 0.5, sdRoundBox(p, uCardSize * 0.5, uRadius));

      float fade  = 1.0 - smoothstep(0.75, 1.0, tear) * 0.65;
      float alpha = cardAlpha * threadAlpha * fade;
      if (alpha < 0.003) discard;

      // --- Sample the image, cover-fitted to the card ----------------------
      float cardAspect = uCardSize.x / uCardSize.y;
      vec2 scale = cardAspect > uImageAspect
        ? vec2(1.0, uImageAspect / cardAspect)
        : vec2(cardAspect / uImageAspect, 1.0);
      vec3 color = texture2D(uMap, (vUv - 0.5) * scale + 0.5).rgb;

      // --- Give each ribbon a round, physical read --------------------------
      color *= 1.0 - tear * 0.4 * rim * rim;                          // shade the sides
      color += tear * 0.18 * (1.0 - smoothstep(0.0, 0.45, rim));      // glint on the core
      color = mix(color, vec3(1.0), smoothstep(0.55, 1.0, tear) * 0.8); // bleach into the page

      gl_FragColor = vec4(color, alpha);
      #include <colorspace_fragment>
    }
  `;
