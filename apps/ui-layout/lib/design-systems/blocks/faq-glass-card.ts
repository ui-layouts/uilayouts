import { defineDesignSystem } from '../types';

export const faq_glass_cardDesign = defineDesignSystem({
  name: 'Glass Card',
  sourceFiles: [
    {
      path: 'packages/blocks/src/faq-section/faq-glass-card.tsx',
      role: 'the canonical block source and the exact effect composition',
    },
    {
      path: 'apps/ui-layout/components/ui/timeline-animation.tsx',
      role: 'the scroll-triggered stagger primitive used to sequence the block',
    },
    {
      path: 'apps/ui-layout/hooks/use-media-query.tsx',
      role: 'the breakpoint hook that switches the mobile composition',
    },
    {
      path: 'packages/shadcn/src/index.tsx',
      role: 'the open-source workspace component barrel used by this block',
    },
  ],
  dependencies: [
    {
      name: '@repo/shadcn',
      kind: 'workspace',
      role: 'an existing workspace design primitive; reuse it rather than replacing its behavior',
    },
    {
      name: '@/components/ui/timeline-animation',
      kind: 'local',
      role: 'the scroll-triggered stagger primitive used to sequence the block',
    },
    {
      name: '@/hooks/use-media-query',
      kind: 'local',
      role: 'the breakpoint hook that switches the mobile composition',
    },
    {
      name: 'motion',
      kind: 'external',
      role: 'provides the entrance, presence, drag, spring, and layout animation behavior',
      install: 'pnpm add motion',
    },
  ],
  personality:
    'Landscape glass accordion defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Questions are medium/semibold and answers are relaxed body text; category labels remain compact and muted. The source’s concrete type anchors are `text-2xl`, `text-4xl`, `font-medium`, `text-xl`, `font-semibold`, `text-lg`, `leading-relaxed`.',
  palette:
    'The implementation anchors its palette with `text-neutral-900`, `text-white`, `border-white/10`, `border-white/20`, `bg-black/40`, `bg-white/40`, `from-slate-900`, `to-slate-500`, `from-slate-50`, `to-slate-200`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Keep question and answer alignment stable; split previews stack beneath questions on mobile and accordion controls span the row.',
  background:
    'Set a photographic/gradient scene behind black/40 or white/40 translucent cards; apply backdrop-blur-xl, white/10 borders and a 1.01 hover scale.',
  effects: [
    {
      name: 'Landscape glass accordion',
      recipe:
        'Set a photographic/gradient scene behind black/40 or white/40 translucent cards; apply backdrop-blur-xl, white/10 borders and a 1.01 hover scale.',
      usage: 'keeping questions readable while preserving an atmospheric backdrop',
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
    'Use CTA styling only outside accordion rows; the entire question header is the disclosure button with visible focus.',
  interactions:
    'Rotate plus/chevron indicators and reveal answer height/opacity; preserve keyboard controls and reduced-motion behavior.',
  imagery:
    'Use preview/product imagery when it clarifies answers; decorative scenery must remain behind a contrast layer.',
  extensionRules: [
    'Carry the **Landscape glass accordion** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
