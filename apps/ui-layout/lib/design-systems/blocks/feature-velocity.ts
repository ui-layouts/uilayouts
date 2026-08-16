import { defineDesignSystem } from '../types';

export const feature_velocityDesign = defineDesignSystem({
  name: 'Feature Velocity',
  sourceFiles: [
    {
      path: 'packages/blocks/src/feature-section/feature-velocity.tsx',
      role: 'the canonical block source and the exact effect composition',
    },
    {
      path: 'apps/ui-layout/lib/utils.ts',
      role: 'the class-merging utility',
    },
  ],
  dependencies: [
    {
      name: '@/lib/utils',
      kind: 'local',
      role: 'the class-merging utility',
    },
    {
      name: 'lucide-react',
      kind: 'external',
      role: 'provides the line-icon vocabulary used by controls and labels',
      install: 'pnpm add lucide-react',
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
    'Dark velocity beams defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `font-dmSans`, `text-5xl`, `text-7xl`, `font-black`, `tracking-tighter`, `leading-none`, `font-mono`, `text-sm`, `leading-relaxed`, `tracking-widest`.',
  palette:
    'The implementation anchors its palette with `bg-black`, `bg-[repeating-linear-gradient(45deg,#252525_0px_1px,transparent_1px_8px)]`, `border-neutral-800`, `text-white`, `text-gray-500`, `from-violet-500/20`, `from-emerald-500/20`, `from-blue-500/20`, `bg-neutral-950`, `border-neutral-950`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.',
  background:
    'Use a neutral-950 field with fine diagonal pinstripes; give each card a masked blue, emerald, or violet glow that fades from the top and only becomes visible on group hover.',
  effects: [
    {
      name: 'Dark velocity beams',
      recipe:
        'Use a neutral-950 field with fine diagonal pinstripes; give each card a masked blue, emerald, or violet glow that fades from the top and only becomes visible on group hover.',
      usage: 'suggesting speed and technical energy without persistent visual noise',
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
    'Carry the **Dark velocity beams** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
