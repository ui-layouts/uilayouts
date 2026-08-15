import { defineDesignSystem } from '../types';

export const stats_bentoDesign = defineDesignSystem({
  name: 'Stats Bento',
  personality:
    'Offset monochrome metrics defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Numbers are the display typography; labels remain compact and muted, with descriptions clearly subordinate. The source’s concrete type anchors are `font-semibold`, `tracking-widest`, `text-6xl`, `tracking-tighter`, `text-sm`, `text-xs`, `text-3xl`, `text-2xl`, `leading-none`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `bg-zinc-950`, `bg-[repeating-linear-gradient(45deg,#383838_0px_1px,transparent_1px_10px)]`, `border-white`, `bg-zinc-800`, `text-zinc-400`, `text-white`, `bg-zinc-50`, `border-zinc-200`, `text-zinc-900`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Align figures to a shared grid or bento baseline; prevent animated numbers from causing width shifts and stack cleanly on mobile.',
  background:
    'Mix zinc-950 and white statistic tiles, then place a diagonal dark hatch behind the focal tile and fade it toward the upper right; offset decorative blocks by ±10.',
  effects: [
    {
      name: 'Offset monochrome metrics',
      recipe:
        'Mix zinc-950 and white statistic tiles, then place a diagonal dark hatch behind the focal tile and fade it toward the upper right; offset decorative blocks by ±10.',
      usage: 'creating asymmetry and depth in an otherwise strict bento',
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
    'Carry the **Offset monochrome metrics** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
