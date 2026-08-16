import { defineDesignSystem } from '../types';

export const startup_plansDesign = defineDesignSystem({
  name: 'Startup Plans',
  sourceFiles: [
    {
      path: 'packages/blocks/src/pricing-section/startup-plans.tsx',
      role: 'the canonical block source and the exact effect composition',
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
      name: 'lucide-react',
      kind: 'external',
      role: 'provides the line-icon vocabulary used by controls and labels',
      install: 'pnpm add lucide-react',
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
      name: 'motion',
      kind: 'external',
      role: 'provides the entrance, presence, drag, spring, and layout animation behavior',
      install: 'pnpm add motion',
    },
  ],
  personality:
    'Industrial startup pricing defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Prices are large and tabular-looking; plan names are medium weight, descriptions muted, and feature lists compact. The source’s concrete type anchors are `font-dmSans`, `text-4xl`, `text-5xl`, `font-semibold`, `tracking-tight`, `leading-relaxed`, `text-xs`, `tracking-widest`, `font-medium`, `font-bold`.',
  palette:
    'The implementation anchors its palette with `bg-neutral-100/50`, `text-neutral-500`, `bg-white`, `border-neutral-200`, `bg-blue-500/40`, `bg-blue-500/50`, `text-neutral-400`, `bg-neutral-200`, `text-neutral-600`, `border-neutral-100`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Keep tier cards comparable with aligned prices, features and CTAs; featured-tier offset must disappear safely on mobile.',
  background:
    'Use neutral-950 cards with orange selection accents and blue blurred atmosphere; construct CTA wells with opposing inset dark/light shadows and compress to 98% on press.',
  effects: [
    {
      name: 'Industrial startup pricing',
      recipe:
        'Use neutral-950 cards with orange selection accents and blue blurred atmosphere; construct CTA wells with opposing inset dark/light shadows and compress to 98% on press.',
      usage: 'making plans feel like controls on a high-end device',
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
    'Carry the **Industrial startup pricing** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
