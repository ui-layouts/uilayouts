import { defineDesignSystem } from '../types';

export const about_businessDesign = defineDesignSystem({
  name: 'Business',
  sourceFiles: [
    {
      path: 'packages/blocks/src/about-section/about-business.tsx',
      role: 'the canonical block source and the exact effect composition',
    },
    {
      path: 'packages/shadcn/src/index.tsx',
      role: 'the open-source workspace component barrel used by this block',
    },
  ],
  dependencies: [
    {
      name: 'motion',
      kind: 'external',
      role: 'provides the entrance, presence, drag, spring, and layout animation behavior',
      install: 'pnpm add motion',
    },
    {
      name: '@repo/shadcn',
      kind: 'workspace',
      role: 'an existing workspace design primitive; reuse it rather than replacing its behavior',
    },
  ],
  personality:
    'Monochrome business dossier defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `text-5xl`, `font-black`, `font-manrope`, `font-bold`, `tracking-widest`, `font-semibold`, `tracking-tight`, `leading-tight`, `font-dmSans`, `text-lg`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `text-black`, `bg-zinc-50`, `bg-zinc-900`, `text-white`, `text-zinc-500`, `bg-zinc-100`, `text-zinc-900`, `text-zinc-400`, `bg-black`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.',
  background:
    'Use black/white/zinc blocks, tiny uppercase metadata, and editorial columns; lift only actionable elements by two pixels and reveal content with measured scaling.',
  effects: [
    {
      name: 'Monochrome business dossier',
      recipe:
        'Use black/white/zinc blocks, tiny uppercase metadata, and editorial columns; lift only actionable elements by two pixels and reveal content with measured scaling.',
      usage: 'conveying mature business credibility without decorative color',
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
    'Use one decisive filled CTA and a lower-emphasis text/outline action; buttons should never compete with imagery.',
  interactions:
    'Stagger story elements gently; image reveals and hover states should feel editorial rather than app-like.',
  imagery:
    'Use documentary portraits, work samples, or brand proof; preserve the source crop and color-to-grayscale behavior.',
  extensionRules: [
    'Carry the **Monochrome business dossier** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
