import { defineDesignSystem } from '../types';

export const feature_heroDesign = defineDesignSystem({
  name: 'Feature Hero',
  sourceFiles: [
    {
      path: 'packages/blocks/src/feature-section/feature-hero.tsx',
      role: 'the canonical block source and the exact effect composition',
    },
    {
      path: 'apps/ui-layout/lib/utils.ts',
      role: 'the class-merging utility',
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
      name: 'motion',
      kind: 'external',
      role: 'provides the entrance, presence, drag, spring, and layout animation behavior',
      install: 'pnpm add motion',
    },
    {
      name: '@/lib/utils',
      kind: 'local',
      role: 'the class-merging utility',
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
    'Masked blue horizon defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `font-dmSans`, `text-4xl`, `text-5xl`, `font-bold`, `tracking-tight`, `text-lg`, `text-xl`, `leading-relaxed`, `text-sm`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `bg-[repeating-linear-gradient(45deg,#f3f3f3_0px_1px,transparent_1px_8px)]`, `bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(50,97,237,1)_100%)]`, `text-slate-900`, `text-slate-600`, `bg-blue-600`, `text-white`, `shadow-blue-200`, `bg-blue-50`, `text-blue-600`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.',
  background:
    'Combine a fine diagonal hatch with a bottom blue radial gradient, then mask it to fade before the content; raise the central product frame with a blue-tinted-xl shadow and a slight desktop scale.',
  effects: [
    {
      name: 'Masked blue horizon',
      recipe:
        'Combine a fine diagonal hatch with a bottom blue radial gradient, then mask it to fade before the content; raise the central product frame with a blue-tinted-xl shadow and a slight desktop scale.',
      usage: 'making one feature feel like a product launch moment',
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
    'Carry the **Masked blue horizon** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
