import { defineDesignSystem } from '../types';

export const stats_detailsDesign = defineDesignSystem({
  name: 'Stats Details',
  sourceFiles: [
    {
      path: 'packages/blocks/src/stats-section/stats-details.tsx',
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
    'Orange detail rail defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Numbers are the display typography; labels remain compact and muted, with descriptions clearly subordinate. The source’s concrete type anchors are `text-lg`, `font-bold`, `text-xs`, `tracking-widest`, `text-4xl`, `font-semibold`, `tracking-tight`, `text-sm`, `leading-relaxed`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `bg-zinc-50`, `border-zinc-100`, `border-zinc-200`, `bg-orange-600`, `text-zinc-900`, `text-white`, `text-zinc-100`, `text-zinc-400`, `text-zinc-500`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Align figures to a shared grid or bento baseline; prevent animated numbers from causing width shifts and stack cleanly on mobile.',
  background:
    'Keep the main grid white with orange-600 as the section marker; reveal contextual actions by opacity on card hover rather than moving the entire surface.',
  effects: [
    {
      name: 'Orange detail rail',
      recipe:
        'Keep the main grid white with orange-600 as the section marker; reveal contextual actions by opacity on card hover rather than moving the entire surface.',
      usage: 'pairing bold totals with readable supporting explanations',
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
    'Carry the **Orange detail rail** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
