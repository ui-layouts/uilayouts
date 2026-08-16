import { defineDesignSystem } from '../types';

export const about_experienceDesign = defineDesignSystem({
  name: 'Experience',
  sourceFiles: [
    {
      path: 'packages/blocks/src/about-section/about-experience.tsx',
      role: 'the canonical block source and the exact effect composition',
    },
    {
      path: 'packages/shadcn/src/index.tsx',
      role: 'the open-source workspace component barrel used by this block',
    },
  ],
  dependencies: [
    {
      name: '@repo/shadcn',
      kind: 'workspace',
      role: 'an existing workspace design primitive; reuse it rather than replacing its behavior',
    },
    {
      name: 'motion',
      kind: 'external',
      role: 'provides the entrance, presence, drag, spring, and layout animation behavior',
      install: 'pnpm add motion',
    },
  ],
  personality:
    'Oxide-red heritage panel defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use editorial role/project titles, muted dates, and small categorical labels; keep chronology immediately scannable. The source’s concrete type anchors are `font-dmSans`, `text-5xl`, `font-bold`, `tracking-tight`, `text-xs`, `font-medium`, `tracking-widest`, `font-semibold`, `font-black`, `text-4xl`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `text-black`, `bg-black/60`, `text-white`, `text-zinc-300`, `text-red-500`, `bg-neutral-950`, `text-zinc-500`, `bg-red-50`, `text-red-950`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Use a timeline, ledger, or accordion with aligned dates and content; collapse to a single reading column on mobile.',
  background:
    'Center the story around #9c2e1f/red-900 imagery, place black/60 glass labels over photographs, and combine hover scale with deep red shadow.',
  effects: [
    {
      name: 'Oxide-red heritage panel',
      recipe:
        'Center the story around #9c2e1f/red-900 imagery, place black/60 glass labels over photographs, and combine hover scale with deep red shadow.',
      usage: 'making history and craft feel warm, weighty, and tactile',
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
    'Use text arrows or compact icon controls, with the accent appearing only on the active or actionable item.',
  interactions:
    'Entry reveals follow chronology; active-item transitions may crossfade, but layout position should remain predictable.',
  imagery:
    'Use project/customer imagery only when tied to the active record; otherwise let typography and rules carry the layout.',
  extensionRules: [
    'Carry the **Oxide-red heritage panel** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
