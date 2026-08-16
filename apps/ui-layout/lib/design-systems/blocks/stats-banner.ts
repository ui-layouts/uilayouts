import { defineDesignSystem } from '../types';

export const stats_bannerDesign = defineDesignSystem({
  name: 'Stats Banner',
  sourceFiles: [
    {
      path: 'packages/blocks/src/stats-section/stats-banner.tsx',
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
  ],
  personality:
    'Blue glass metric banner defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Numbers are the display typography; labels remain compact and muted, with descriptions clearly subordinate. The source’s concrete type anchors are `text-5xl`, `font-semibold`, `text-lg`, `text-7xl`, `text-8xl`, `text-xl`, `text-2xl`, `font-medium`, `text-4xl`, `text-base`.',
  palette:
    'The implementation anchors its palette with `from-slate-50`, `to-white`, `text-slate-900`, `text-slate-600`, `text-white`, `shadow-blue-500/20`, `bg-white`, `bg-blue-300`, `bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]`, `from-white`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Align figures to a shared grid or bento baseline; prevent animated numbers from causing width shifts and stack cleanly on mobile.',
  background:
    'Layer a white line grid, oversized blurred blue orb and white-to-blue surface gradient; float metric cards with blue shadow halos and a gentle scale entrance.',
  effects: [
    {
      name: 'Blue glass metric banner',
      recipe:
        'Layer a white line grid, oversized blurred blue orb and white-to-blue surface gradient; float metric cards with blue shadow halos and a gentle scale entrance.',
      usage: 'making summary numbers feel luminous and optimistic',
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
    'Carry the **Blue glass metric banner** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
