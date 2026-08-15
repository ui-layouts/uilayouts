import { defineDesignSystem } from '../types';

export const about_missionDesign = defineDesignSystem({
  name: 'Mission',
  personality:
    'Mission grid aperture defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `text-6xl`, `font-medium`, `text-3xl`, `text-4xl`, `text-xl`, `leading-relaxed`, `font-semibold`.',
  palette:
    'The implementation anchors its palette with `from-neutral-800`, `from-slate-50`, `to-blue-50`, `to-neutral-950`, `border-black`, `bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]`, `text-neutral-400`, `text-neutral-600`, `bg-blue-950/50`, `bg-blue-100`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.',
  background:
    'Draw a low-contrast dark grid, reveal it only through an elliptical center mask, and place blue/green/purple translucent mission cards with matching icon accents over a blurred surface.',
  effects: [
    {
      name: 'Mission grid aperture',
      recipe:
        'Draw a low-contrast dark grid, reveal it only through an elliptical center mask, and place blue/green/purple translucent mission cards with matching icon accents over a blurred surface.',
      usage: 'turning abstract values into distinct but connected pillars',
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
    'Carry the **Mission grid aperture** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
