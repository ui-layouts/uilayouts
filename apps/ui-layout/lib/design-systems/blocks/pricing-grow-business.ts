import { defineDesignSystem } from '../types';

export const pricing_grow_businessDesign = defineDesignSystem({
  name: 'Grow Business',
  sourceFiles: [
    {
      path: 'packages/blocks/src/pricing-section/grow-business.tsx',
      role: 'the canonical block source and the exact effect composition',
    },
    {
      path: 'apps/ui-layout/lib/utils.ts',
      role: 'the class-merging utility',
    },
    {
      path: 'apps/ui-layout/components/ui/timeline-animation.tsx',
      role: 'the scroll-triggered stagger primitive used to sequence the block',
    },
    {
      path: 'packages/shadcn/src/index.tsx',
      role: 'the open-source workspace component barrel used by this block',
    },
  ],
  dependencies: [
    {
      name: '@number-flow/react',
      kind: 'external',
      role: 'animates changing numeric price and metric values',
      install: 'pnpm add @number-flow/react',
    },
    {
      name: '@/lib/utils',
      kind: 'local',
      role: 'the class-merging utility',
    },
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
      name: 'clsx',
      kind: 'external',
      role: 'provides an external primitive used by this effect',
      install: 'pnpm add clsx',
    },
    {
      name: 'tailwind-merge',
      kind: 'external',
      role: 'provides an external primitive used by this effect',
      install: 'pnpm add tailwind-merge',
    },
    {
      name: 'motion',
      kind: 'external',
      role: 'provides the entrance, presence, drag, spring, and layout animation behavior',
      install: 'pnpm add motion',
    },
  ],
  personality:
    'Lime growth tiers defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Prices are large and tabular-looking; plan names are medium weight, descriptions muted, and feature lists compact. The source’s concrete type anchors are `font-dmSans`, `text-4xl`, `font-semibold`, `tracking-tight`, `text-sm`, `text-xs`, `font-bold`, `text-lg`, `text-2xl`, `font-medium`.',
  palette:
    'The implementation anchors its palette with `bg-slate-100`, `text-black`, `text-neutral-500`, `bg-lime-100`, `border-lime-400`, `text-neutral-400`, `bg-neutral-300`, `bg-lime-500`, `text-white`, `text-lime-600`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Keep tier cards comparable with aligned prices, features and CTAs; featured-tier offset must disappear safely on mobile.',
  background:
    'Use lime-500/100 on the recommended plan, neutral-950 for premium contrast and green for positive proof; allow only a restrained neutral hover shadow.',
  effects: [
    {
      name: 'Lime growth tiers',
      recipe:
        'Use lime-500/100 on the recommended plan, neutral-950 for premium contrast and green for positive proof; allow only a restrained neutral hover shadow.',
      usage: 'associating plan progression with visible growth',
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
    'Use full-width, high-contrast CTAs with real press feedback; featured plans own the accent while secondary plans stay neutral.',
  interactions:
    'Animate numeric billing changes and press states; avoid gratuitous card movement that harms comparison.',
  imagery:
    'Use tiny product icons or abstract glow only; never distract from price, billing period and included features.',
  extensionRules: [
    'Carry the **Lime growth tiers** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
