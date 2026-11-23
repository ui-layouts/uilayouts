import { full, single } from '../layouts.js';

const squareFunctions = `
vec2 getCoverUv(vec2 uv, vec2 meshSize, vec2 textureSize) {
  vec2 meshRatio = vec2(meshSize.x / meshSize.y, meshSize.y / meshSize.x);
  vec2 textureRatio = vec2(textureSize.x / textureSize.y, textureSize.y / textureSize.x);
  vec2 resolutionRatio = vec2(
    min(meshRatio.x / textureRatio.x, 1.0),
    min(meshRatio.y / textureRatio.y, 1.0)
  );

  return (uv - 0.5) * resolutionRatio + 0.5;
}

// ---------------------------------------------------------------------------
// Applies a CC Lens-style radial distortion to UV coordinates.
// ---------------------------------------------------------------------------
float getCCLensScale(float distortion, float radius2) {
  if (distortion >= 0.0) {
    return 1.0 + distortion * radius2;
  }

  return 1.0 / (1.0 - distortion * radius2);
}

vec2 getCCLensUv(vec2 uv, vec2 resolution, float distortion) {
  vec2 centeredUv = uv - 0.5;
  vec2 aspectScale = vec2(resolution.x / resolution.y, 1.0);
  vec2 centeredPosition = centeredUv * aspectScale;

  float radius2 = dot(centeredPosition, centeredPosition);
  float lensScale = getCCLensScale(distortion, radius2);

  vec2 distortedPosition = centeredPosition * lensScale;
  vec2 distortedCenteredUv = distortedPosition / aspectScale;
  vec2 distortedUv = distortedCenteredUv + 0.5;
  vec2 distortionOffset = distortedUv - uv;

  return uv - distortionOffset;
}

// ---------------------------------------------------------------------------
// Generates a pseudo-random vec3 from a 3D input coordinate.
// ---------------------------------------------------------------------------
// <www.shadertoy.com/view/XsX3zB>
// by Nikita Miropolskiy
vec3 random3(vec3 c) {
  float j = 4096.0 * sin(dot(c, vec3(17.0, 59.4, 15.0)));
  vec3 r;

  r.z = fract(512.0 * j);
  j *= 0.125;
  r.x = fract(512.0 * j);
  j *= 0.125;
  r.y = fract(512.0 * j);

  return r - 0.5;
}
`;

const squareFragment = `
{
  vec2 texture2Uv = getCoverUv(uv, vec2(ratio,1.), vec2(ratioB,1.));

  // Convert the square UV coordinates from the 0.0-to-1.0 range to the -1.0-to-1.0 range.
  vec2 uvSquare = uv * 2.0 - 1.0;

  // Offset the coordinates so the mouse position becomes the origin for the square test.
  uvSquare -= (mouse*2.-1.);

  // Calculate an aspect-ratio correction factor for determining the square's bounds.
  vec2 squareAspectScale = vec2(min((vec2(ratio,1.).y / vec2(ratio,1.).x), 1.0), min((vec2(ratio,1.).x / vec2(ratio,1.).y), 1.0));

  // Correct the test coordinates so the mask remains square.
  uvSquare /= squareAspectScale;

  float wave = sin(
    texture2Uv.y * 64.
    + t * 2.
  ) * .0018;
  texture2Uv.y += wave;
  texture2Uv += random3(
    vec3(texture2Uv * 220., t * 7.)
  ).x * .001;

  // Store half the square's side length so .37 can control its size.
  float squareHalfSize = .37;

  // Calculate the square's left edge.
  float left = -squareHalfSize;

  // Calculate the square's right edge.
  float right = squareHalfSize;

  // Calculate the square's bottom edge.
  float bottom = -squareHalfSize;

  // Calculate the square's top edge.
  float top = squareHalfSize;

  // Return 1.0 when uvSquare is inside the square and 0.0 when it is outside.
  float squareMask = step(left, uvSquare.x) * (1.0 - step(right, uvSquare.x)) * step(bottom, uvSquare.y) * (1.0 - step(top, uvSquare.y));

  // Convert uvSquare to the 0.0-to-1.0 range for the CC Lens distortion.
  vec2 squareUv = uvSquare / (squareHalfSize * 2.0) + 0.5;

  // Apply the CC Lens distortion inside the square.
  vec2 distortedSquareUv = getCCLensUv(squareUv, vec2(1.0), .58);

  // Calculate the square-local offset from the difference before and after distortion.
  vec2 squareLensOffset = distortedSquareUv - squareUv;

  // squareLensOffset is relative to the square. Adding it directly to uv would treat it as
  // relative to the entire mesh and make the distortion too large, so scale it by the square's
  // half-size and aspect-ratio correction factor to convert it to a mesh-relative offset.
  vec2 viewportLensOffset = squareLensOffset * squareHalfSize * squareAspectScale;

  // Convert the coordinates inside the square to UV coordinates for mapA.
  vec2 lensTexture1Uv = getCoverUv(uv + viewportLensOffset, vec2(ratio,1.), vec2(ratioA,1.));

  // Use the square's center as the origin so the RGB shift grows stronger toward the outside.
  vec2 rgbShiftDirection = (squareUv - 0.5) * 2.0;

  // Sample each RGB channel with a different UV offset to create color separation.
  float r = texture2D(mapA, lensTexture1Uv + rgbShiftDirection * .012).r;
  float g = texture2D(mapA, lensTexture1Uv + rgbShiftDirection * .003).g;
  float b = texture2D(mapA, lensTexture1Uv + rgbShiftDirection * -.007).b;

  // Recombine the shifted mapA channels to create the color inside the square.
  vec4 insideColor = vec4(r, g, b, 1.0);

  // Sample mapB for the color outside the square.
  vec4 outsideColor = texture2D(mapB, texture2Uv);

  // Blend the inside and outside colors according to the square mask.
  vec4 finalColor = mix(outsideColor, insideColor, squareMask);

  color = finalColor;
}
`;

export default {
  ...({ ...single(full, squareFragment), functions: squareFunctions }),
  hoverLens: true,
};
