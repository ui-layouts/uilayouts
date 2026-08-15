import { defineDesignSystem } from '../types';

export const stats_sectionDesign = defineDesignSystem({
  name: 'Stats Section',
  personality:
    'Violet radial metric field defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Numbers are the display typography; labels remain compact and muted, with descriptions clearly subordinate. The source’s concrete type anchors are `text-xs`, `font-semibold`, `text-6xl`, `text-7xl`, `font-bold`, `font-dmSans`, `tracking-tighter`, `leading-none`, `text-5xl`, `text-sm`.',
  palette:
    'The implementation anchors its palette with `bg-neutral-950`, `text-white`, `bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(102,51,238,1)_100%)]`, `border-zinc-800`, `text-zinc-500`, `bg-zinc-900/50`, `text-zinc-600`, `from-white/15`, `text-zinc-400`, `bg-zinc-800`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Align figures to a shared grid or bento baseline; prevent animated numbers from causing width shifts and stack cleanly on mobile.',
  background:
    'Use neutral-950 with a violet radial horizon and a broad 3xl blur; reveal a subtle white/15 card gradient only on hover while number counters animate.',
  effects: [
    {
      name: 'Violet radial metric field',
      recipe:
        'Use neutral-950 with a violet radial horizon and a broad 3xl blur; reveal a subtle white/15 card gradient only on hover while number counters animate.',
      usage: 'giving core metrics a quiet cosmic glow',
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
    'Carry the **Violet radial metric field** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
