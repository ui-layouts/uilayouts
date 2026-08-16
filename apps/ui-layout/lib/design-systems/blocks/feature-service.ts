import { defineDesignSystem } from '../types';

export const feature_serviceDesign = defineDesignSystem({
  name: 'Feature Service',
  sourceFiles: [
    {
      path: 'packages/blocks/src/feature-section/feature-service.tsx',
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
      name: 'lucide-react',
      kind: 'external',
      role: 'provides the line-icon vocabulary used by controls and labels',
      install: 'pnpm add lucide-react',
    },
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
    'Blue service pedestal defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `font-dmSans`, `text-xs`, `font-bold`, `tracking-widest`, `text-4xl`, `tracking-tight`, `leading-tight`, `text-lg`, `leading-relaxed`, `text-2xl`.',
  palette:
    'The implementation anchors its palette with `bg-slate-50`, `border-slate-200`, `text-slate-500`, `text-slate-900`, `bg-blue-600`, `text-white`, `bg-blue-700`, `shadow-blue-100`, `bg-blue-500`, `shadow-blue-200`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.',
  background:
    'Use a bright blue card or CTA as the anchor on a slate-50 field, with stacked blue-100/200 shadows that read like a raised pedestal; use white/20 icon wells.',
  effects: [
    {
      name: 'Blue service pedestal',
      recipe:
        'Use a bright blue card or CTA as the anchor on a slate-50 field, with stacked blue-100/200 shadows that read like a raised pedestal; use white/20 icon wells.',
      usage: 'making a service offering feel dependable and actionable',
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
    'Carry the **Blue service pedestal** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
