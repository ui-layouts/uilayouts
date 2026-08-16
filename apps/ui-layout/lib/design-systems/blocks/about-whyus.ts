import { defineDesignSystem } from '../types';

export const about_whyusDesign = defineDesignSystem({
  name: 'About Why Us',
  sourceFiles: [
    {
      path: 'packages/blocks/src/about-section/about-whyus.tsx',
      role: 'the canonical block source and the exact effect composition',
    },
  ],
  dependencies: [
    {
      name: 'lucide-react',
      kind: 'external',
      role: 'provides the line-icon vocabulary used by controls and labels',
      install: 'pnpm add lucide-react',
    },
  ],
  personality:
    'Lifted proof cards defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `font-manrope`, `text-7xl`, `font-bold`, `tracking-tighter`, `font-medium`, `text-xs`, `text-lg`, `leading-relaxed`, `text-sm`, `text-3xl`.',
  palette:
    'The implementation anchors its palette with `bg-slate-50`, `bg-[repeating-linear-gradient(45deg,#efefef_0px_1px,transparent_1px_8px)]`, `text-slate-900`, `text-slate-500`, `text-orange-500`, `text-slate-600`, `text-slate-400`, `bg-white`, `border-slate-100`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.',
  background:
    'Place white proof cards on a faint diagonal hatch that is radially masked away; use orange only for icon emphasis and lift cards 8px into a 2xl shadow on hover.',
  effects: [
    {
      name: 'Lifted proof cards',
      recipe:
        'Place white proof cards on a faint diagonal hatch that is radially masked away; use orange only for icon emphasis and lift cards 8px into a 2xl shadow on hover.',
      usage: 'making differentiators feel like physical evidence',
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
    'Carry the **Lifted proof cards** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
