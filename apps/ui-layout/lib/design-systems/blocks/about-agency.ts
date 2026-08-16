import { defineDesignSystem } from '../types';

export const about_agencyDesign = defineDesignSystem({
  name: 'Agency',
  sourceFiles: [
    {
      path: 'packages/blocks/src/about-section/about-agency.tsx',
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
    'Cinematic agency collage defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `text-7xl`, `text-8xl`, `font-bold`, `font-spaceGrotesk`, `tracking-tighter`, `text-xl`, `text-2xl`, `leading-relaxed`, `text-lg`, `text-sm`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `text-black`, `text-zinc-600`, `text-zinc-400`, `bg-black`, `bg-black/90`, `text-white`, `bg-zinc-100`, `bg-white/10`, `border-white/20`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.',
  background:
    'Use a black hero panel with white type, grayscale imagery that develops into color on hover, translucent white/10 overlays, backdrop blur, and rotating/scaling motion cards.',
  effects: [
    {
      name: 'Cinematic agency collage',
      recipe:
        'Use a black hero panel with white type, grayscale imagery that develops into color on hover, translucent white/10 overlays, backdrop blur, and rotating/scaling motion cards.',
      usage: 'making capabilities feel bold, visual, and portfolio-led',
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
    'Carry the **Cinematic agency collage** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
