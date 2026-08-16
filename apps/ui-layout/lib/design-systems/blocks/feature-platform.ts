import { defineDesignSystem } from '../types';

export const feature_platformDesign = defineDesignSystem({
  name: 'Feature Platform',
  sourceFiles: [
    {
      path: 'packages/blocks/src/feature-section/feature-platform.tsx',
      role: 'the canonical block source and the exact effect composition',
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
      name: '@repo/shadcn',
      kind: 'workspace',
      role: 'an existing workspace design primitive; reuse it rather than replacing its behavior',
    },
  ],
  personality:
    'Connected platform map defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `font-dmSans`, `text-4xl`, `font-bold`, `leading-tight`, `text-sm`, `leading-relaxed`, `text-xl`, `tracking-tight`, `text-lg`.',
  palette:
    'The implementation anchors its palette with `bg-slate-50`, `text-slate-900`, `text-slate-500`, `bg-white`, `border-slate-200`, `text-slate-400`, `text-slate-700`, `bg-emerald-500`, `text-black`, `text-white`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.',
  background:
    'Arrange white/slate capability panels around a central black platform node; emerald marks successful connections while low-opacity connector geometry provides structure.',
  effects: [
    {
      name: 'Connected platform map',
      recipe:
        'Arrange white/slate capability panels around a central black platform node; emerald marks successful connections while low-opacity connector geometry provides structure.',
      usage: 'showing independent tools as parts of one system',
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
    'Carry the **Connected platform map** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
