import { defineDesignSystem } from '../types';

export const feature_flowDesign = defineDesignSystem({
  name: 'Feature Flow',
  sourceFiles: [
    {
      path: 'packages/blocks/src/feature-section/feature-flow.tsx',
      role: 'the canonical block source and the exact effect composition',
    },
    {
      path: 'apps/ui-layout/components/ui/carousel.tsx',
      role: 'the carousel mechanics and navigation behavior',
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
      name: '@/components/ui/carousel',
      kind: 'local',
      role: 'the carousel mechanics and navigation behavior',
    },
    {
      name: 'embla-carousel',
      kind: 'external',
      role: 'provides an external primitive used by this effect',
      install: 'pnpm add embla-carousel',
    },
    {
      name: 'embla-carousel-react',
      kind: 'external',
      role: 'provides an external primitive used by this effect',
      install: 'pnpm add embla-carousel-react',
    },
    {
      name: 'motion',
      kind: 'external',
      role: 'provides the entrance, presence, drag, spring, and layout animation behavior',
      install: 'pnpm add motion',
    },
  ],
  personality:
    'Warm workflow carousel defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `font-manrope`, `font-bold`, `tracking-widest`, `text-5xl`, `tracking-tight`, `text-lg`, `text-sm`, `text-xl`, `leading-relaxed`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `bg-slate-50`, `text-slate-500`, `text-slate-900`, `border-slate-200`, `text-orange-600`, `bg-orange-50/20`, `border-orange-100/50`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.',
  background:
    'Set clean slate cards over a barely orange-tinted plane; use orange micro-labels and a horizontally advancing carousel with frosted navigation and a shadow increase on hover.',
  effects: [
    {
      name: 'Warm workflow carousel',
      recipe:
        'Set clean slate cards over a barely orange-tinted plane; use orange micro-labels and a horizontally advancing carousel with frosted navigation and a shadow increase on hover.',
      usage: 'explaining a sequence as approachable, inspectable steps',
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
    'Carry the **Warm workflow carousel** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
