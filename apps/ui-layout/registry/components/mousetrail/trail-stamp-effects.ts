import type { ImageTrailEffect } from '@/components/ui/mousetrail';

type Sample = Parameters<ImageTrailEffect['keyframes']>[0];

const fall = 'cubic-bezier(0.53, 0.02, 0.85, 0.68)';

function frame(
  offset: number,
  opacity = 1,
  x = 0,
  y = 0,
  scale = 1,
  rotation = 0,
  extra: Keyframe = {}
): Keyframe {
  return {
    offset,
    opacity,
    transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`,
    ...extra,
  };
}

function approach({ delta }: Pick<Sample, 'delta'>, scale = 1, extra?: Keyframe) {
  return frame(0, 1, -delta.x * 0.7, -delta.y * 0.7, scale, 0, extra);
}

export const stampEffects = {
  'cursor-trailer': {
    keyframes: () => {
      const tilt = Math.random() * 40 - 20;
      return [
        frame(0, 1, 0, 0, 0.56, tilt, { easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }),
        frame(0.1, 1, 0, 0, 1.04, tilt),
        frame(0.19, 1, 0, 0, 1, tilt),
        frame(0.53, 1, 0, 0, 1, tilt, { easing: 'cubic-bezier(0.42, 0, 0.78, 0.6)' }),
        frame(1, 0, 0, 0, 0, tilt),
      ];
    },
  },
  'image-shrink': {
    keyframes: (sample) => [approach(sample), frame(0.3), frame(1, 0, 0, 0, 0.2)],
  },
  'image-bloom': {
    keyframes: (sample) => [
      approach(sample),
      frame(0.48),
      frame(1, 0, 0, 0, 2, 0, { filter: 'blur(3px)' }),
    ],
  },
  'image-fall': {
    keyframes: ({ delta, height, position, index }) => [
      approach({ delta }, 0.88),
      frame(0.16),
      // Hold before falling. The demo's minimum stamp interval exceeds this final segment.
      frame(0.8, 1, 0, 0, 1, 0, { easing: fall }),
      frame(1, 1, 0, height - position.y + 120, 0.94, index % 2 ? 12 : -12),
    ],
  },
  'motion-classic': {
    keyframes: (sample) => [
      frame(0, 1, -sample.delta.x, -sample.delta.y),
      frame(0.55, 1, 0, 0, 1, 0, { easing: fall }),
      frame(1, 0, 0, 0, 0.2),
    ],
  },
  'motion-innerscape': {
    keyframes: (sample) => [
      approach(sample, 0.36, { clipPath: 'inset(38% 38%)', filter: 'brightness(2.5)' }),
      frame(0.4, 1, 0, 0, 1, 0, { clipPath: 'inset(0%)', filter: 'brightness(1)' }),
      frame(0.62, 1, 0, 0, 1, 0, { clipPath: 'inset(0%)', filter: 'brightness(1)' }),
      frame(1, 0, 0, 0, 0.2, 0, { clipPath: 'inset(0%)', filter: 'brightness(1)' }),
    ],
  },
} satisfies Record<string, ImageTrailEffect>;
