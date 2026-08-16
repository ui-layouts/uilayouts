import { defineDesignSystem } from '../types';

export const about_sassDesign = defineDesignSystem({
  name: 'SASS',
  sourceFiles: [
    {
      path: 'packages/blocks/src/about-section/about-sass.tsx',
      role: 'the canonical block source and the exact effect composition',
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
      name: 'lucide-react',
      kind: 'external',
      role: 'provides the line-icon vocabulary used by controls and labels',
      install: 'pnpm add lucide-react',
    },
  ],
  personality:
    'SaaS metrics mosaic defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `font-black`, `text-6xl`, `text-7xl`, `font-bold`, `tracking-tighter`, `text-xl`, `leading-relaxed`, `text-xs`, `font-dmSans`, `font-semibold`.',
  palette:
    'The implementation anchors its palette with `bg-zinc-50`, `text-black`, `bg-white`, `border-zinc-200/60`, `bg-black`, `shadow-[0_0_10px_rgba(0,0,0,0.1)]`, `text-zinc-900`, `text-zinc-500`, `border-zinc-100`, `text-zinc-400`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.',
  background:
    'Compose white/zinc metric tiles with hairline borders and tiny 10px labels; include a nearly invisible decorative layer and 10px ambient card shadow, strengthening elevation on hover.',
  effects: [
    {
      name: 'SaaS metrics mosaic',
      recipe:
        'Compose white/zinc metric tiles with hairline borders and tiny 10px labels; include a nearly invisible decorative layer and 10px ambient card shadow, strengthening elevation on hover.',
      usage: 'balancing credible metrics with clean software-product polish',
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
    'Carry the **SaaS metrics mosaic** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
