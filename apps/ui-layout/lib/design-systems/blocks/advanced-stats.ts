import { defineDesignSystem } from '../types';

export const advanced_statsDesign = defineDesignSystem({
  name: 'Advanced Stats',
  personality:
    'Analytical chart cockpit defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Numbers are the display typography; labels remain compact and muted, with descriptions clearly subordinate. The source’s concrete type anchors are `font-dmSans`, `font-bold`, `text-xl`, `tracking-tight`, `text-3xl`, `font-semibold`, `tracking-tighter`, `text-xs`, `font-medium`, `text-sm`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `bg-zinc-50`, `border-zinc-200`, `bg-zinc-900`, `text-white`, `text-zinc-500`, `text-zinc-400`, `bg-zinc-800`, `border-zinc-100`, `text-zinc-900`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Align figures to a shared grid or bento baseline; prevent animated numbers from causing width shifts and stack cleanly on mobile.',
  background:
    'Use restrained white data cards, zinc labels and red exception states; animate Recharts lines/areas with SVG masks so charts draw into view and keep axes secondary.',
  effects: [
    {
      name: 'Analytical chart cockpit',
      recipe:
        'Use restrained white data cards, zinc labels and red exception states; animate Recharts lines/areas with SVG masks so charts draw into view and keep axes secondary.',
      usage: 'turning dense operational data into a legible instrument panel',
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
    'Use buttons only for drill-down or a final CTA; style them as a continuation of the surrounding surface.',
  interactions: 'Animate values once on entry and make hover effects explanatory, not celebratory.',
  imagery:
    'Prefer charts, sparklines and abstract data marks over stock photography; icons remain secondary to figures.',
  extensionRules: [
    'Carry the **Analytical chart cockpit** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
