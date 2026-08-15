import { defineDesignSystem } from '../types';

export const about_ecommerseDesign = defineDesignSystem({
  name: 'About e-commerse',
  personality:
    'Warm editorial reveal defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `text-xs`, `font-bold`, `text-5xl`, `text-6xl`, `font-serif`, `text-lg`, `leading-relaxed`, `text-sm`.',
  palette:
    'The implementation anchors its palette with `bg-orange-50`, `text-orange-950`, `bg-orange-800/20`, `text-orange-800/60`, `text-zinc-900`, `text-zinc-600`, `text-zinc-500`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.',
  background:
    'Use orange-50 as a quiet wash, oversized orange typography at reduced opacity behind the story, and gently scaling content/image reveals.',
  effects: [
    {
      name: 'Warm editorial reveal',
      recipe:
        'Use orange-50 as a quiet wash, oversized orange typography at reduced opacity behind the story, and gently scaling content/image reveals.',
      usage: 'introducing a commerce brand with warmth instead of dashboard chrome',
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
    'Carry the **Warm editorial reveal** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
