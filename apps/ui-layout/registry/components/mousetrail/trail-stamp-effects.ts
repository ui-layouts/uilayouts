import type { ImageTrailEffect } from '@/components/ui/mousetrail';

type Sample = Parameters<ImageTrailEffect['keyframes']>[0];

const settle = 'cubic-bezier(0.18, 1, 0.35, 1)';
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
    keyframes: (sample) => [
      approach(sample),
      frame(0.34, 1, 0, 0, 1, 0, { easing: fall }),
      frame(1, 0, 0, sample.height * 0.52),
    ],
  },
  'image-stretch': {
    keyframes: ({ height }) => [
      frame(0),
      frame(0.32, 1, 0, 0, 1, 0, { easing: fall }),
      {
        offset: 0.55,
        opacity: 0.82,
        transform: 'translate(-50%, -50%) translateY(20px) scale(0.55, 1.95)',
        transformOrigin: 'center top',
        easing: fall,
      },
      {
        offset: 1,
        opacity: 0,
        transform: `translate(-50%, -50%) translateY(${height * 0.55}px) scale(0.75, 1.55)`,
        transformOrigin: 'center top',
      },
    ],
  },
  'image-slide': {
    anchor: 'center',
    persist: true,
    keyframes: ({ delta }) => [
      frame(0, 1, Math.sign(delta.x || 1) * 108, 0, 1.12, 0, { easing: settle }),
      frame(1, 1, 0, 0, 1.12),
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
  'motion-exiting': {
    keyframes: (sample) => [
      approach(sample, 0.12),
      frame(0.38),
      frame(0.58, 1, 0, 0, 1, 0, { easing: fall }),
      frame(1, 0, sample.index % 2 ? 34 : -34, -sample.height * 0.48, 0.2),
    ],
  },
  'motion-flow': {
    keyframes: (sample) => {
      const { x, y } = sample.delta;
      const light = 1 + sample.speed * 0.4;
      return [
        approach(sample, 0.12, { filter: `brightness(${light}) contrast(${light})` }),
        frame(0.28, 1, x * 0.28, y * 0.28, 1, 0, { filter: 'brightness(1) contrast(1)' }),
        frame(1, 0, x * 2, y * 2, 1, 0, { filter: 'brightness(1) contrast(1)' }),
      ];
    },
  },
  'motion-spin': {
    keyframes: ({ delta: { x, y } }) => {
      const angle = (Math.atan2(y, x || 0.01) * 180) / Math.PI;
      return [
        frame(0, 0.9, -x, -y, 0.15, angle - 135),
        frame(0.54, 1, x * 0.6, y * 0.6, 1, angle - 20),
        frame(1, 0, x * 1.8, y * 1.8, 1, angle + 28),
      ];
    },
  },
  'motion-velocity': {
    keyframes: (sample) => {
      const strength = Math.min(1, sample.speed / 2);
      const filter = `grayscale(${1 - strength}) brightness(${0.65 + strength * 0.65}) blur(${(1 - strength) * 8}px)`;
      return [
        approach(sample, 0.12, { filter }),
        frame(0.5, 1, 0, 0, 0.48 + strength * 1.05, 0, { filter }),
        frame(1, 0, 0, 0, 0.2, 0, { filter }),
      ];
    },
  },
  'motion-persistence': {
    persist: true,
    keyframes: (sample) => {
      const scale = 0.62 + ((sample.index * 13) % 17) / 34;
      return [approach(sample, scale * 0.55), frame(1, 1, 0, 0, scale)];
    },
  },
  'motion-perspective': {
    keyframes: ({ position, width, height, delta }) => {
      const x = position.x / width - 0.5;
      const y = position.y / height - 0.5;
      const depth = Math.hypot(x, y) * 200;
      const tilt = `perspective(520px) rotateY(${x * 70}deg) rotateX(${-y * 65}deg) translateZ(${depth}px)`;
      return [
        approach({ delta }, 0.8),
        frame(0.54, 1, 0, 0, 1, 0, { transform: `translate(-50%, -50%) ${tilt}` }),
        frame(1, 0, 0, 0, 1, 0, { transform: `translate(-50%, -50%) ${tilt} scale(1.12)` }),
      ];
    },
  },
} satisfies Record<string, ImageTrailEffect>;
