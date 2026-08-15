import { defineDesignSystem } from '../types';

export const about_bentoDesign = defineDesignSystem({
  name: 'Bento',
  personality:
    'Violet achievement bento defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `font-dmSans`, `text-5xl`, `font-bold`, `text-xl`, `font-black`, `tracking-widest`, `tracking-tighter`, `leading-tight`, `leading-relaxed`, `text-xs`.',
  palette:
    'The implementation anchors its palette with `bg-slate-50`, `text-slate-900`, `text-slate-600`, `bg-white`, `border-slate-200`, `bg-violet-600`, `text-white`, `text-gray-900`, `text-gray-500`, `bg-emerald-500`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.',
  background:
    'Mix white cards with one dark gray and one violet field; use emerald/violet status marks and a white 12px glow around key proof, with a 180° rotating icon on hover.',
  effects: [
    {
      name: 'Violet achievement bento',
      recipe:
        'Mix white cards with one dark gray and one violet field; use emerald/violet status marks and a white 12px glow around key proof, with a 180° rotating icon on hover.',
      usage: 'compressing company story, traction, and values into scan-friendly proof',
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
    'Carry the **Violet achievement bento** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
