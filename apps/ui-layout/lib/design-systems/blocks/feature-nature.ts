import { defineDesignSystem } from '../types';

export const feature_natureDesign = defineDesignSystem({
  name: 'Feature Nature',
  sourceFiles: [
    {
      path: 'packages/blocks/src/feature-section/feature-nature.tsx',
      role: 'the canonical block source and the exact effect composition',
    },
    {
      path: 'apps/ui-layout/lib/utils.ts',
      role: 'the class-merging utility',
    },
    {
      path: 'packages/shadcn/src/index.tsx',
      role: 'the open-source workspace component barrel used by this block',
    },
  ],
  dependencies: [
    {
      name: '@/lib/utils',
      kind: 'local',
      role: 'the class-merging utility',
    },
    {
      name: '@repo/shadcn',
      kind: 'workspace',
      role: 'an existing workspace design primitive; reuse it rather than replacing its behavior',
    },
    {
      name: 'clsx',
      kind: 'external',
      role: 'provides an external primitive used by this effect',
      install: 'pnpm add clsx',
    },
    {
      name: 'tailwind-merge',
      kind: 'external',
      role: 'provides an external primitive used by this effect',
      install: 'pnpm add tailwind-merge',
    },
  ],
  personality:
    'Editorial forest contrast defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `text-3xl`, `font-bold`, `leading-tight`, `text-lg`, `font-dmSans`, `text-5xl`, `text-6xl`, `text-xl`, `font-semibold`.',
  palette:
    'The implementation anchors its palette with `bg-emerald-950`, `border-emerald-950`, `text-white`, `bg-white`, `text-gray-900`, `border-emerald-100`, `text-emerald-400`, `text-emerald-900`, `text-emerald-100/70`, `text-gray-500`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.',
  background:
    'Pair bright paper cards with a deep emerald feature panel; use natural photography, emerald borders and muted moss text, with restrained 2xl depth rather than neon decoration.',
  effects: [
    {
      name: 'Editorial forest contrast',
      recipe:
        'Pair bright paper cards with a deep emerald feature panel; use natural photography, emerald borders and muted moss text, with restrained 2xl depth rather than neon decoration.',
      usage: 'communicating sustainability and calm premium quality',
    },
    {
      name: 'Layer discipline',
      recipe:
        'Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.',
      usage:
        'all new sections that reuse the signature treatment without obscuring text or controls',
    },
  ],
  buttons:
    'Primary actions use the accent fill; card-level actions are compact arrows or icon controls and must visibly respond on hover.',
  interactions:
    'Reveal secondary layers on group hover and keep transforms small so the grid remains stable.',
  imagery:
    'Favor product crops, diagrams, or symbolic line icons; each should explain the capability rather than decorate it.',
  extensionRules: [
    'Carry the **Editorial forest contrast** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
    'Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.',
    'On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.',
    'Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.',
  ],
  avoid: [
    'Listing raw utility classes as a substitute for design intent.',
    'Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.',
    'Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.',
  ],
});
