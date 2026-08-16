import { defineDesignSystem } from '../types';

export const spotlight_testimonialDesign = defineDesignSystem({
  name: 'Spotlight Testimonial',
  sourceFiles: [
    {
      path: 'packages/blocks/src/testimonial-section/spotlight-testimonial.tsx',
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
  ],
  dependencies: [
    {
      name: '@/lib/utils',
      kind: 'local',
      role: 'the class-merging utility',
    },
    {
      name: 'motion',
      kind: 'external',
      role: 'provides the entrance, presence, drag, spring, and layout animation behavior',
      install: 'pnpm add motion',
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
  ],
  personality:
    'Focused quote carousel defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Quotes use generous readable type; names, roles and ratings use a compact supporting scale with obvious hierarchy. The source’s concrete type anchors are `font-manrope`, `text-5xl`, `font-bold`, `tracking-tight`, `text-lg`, `text-2xl`, `text-4xl`, `font-semibold`, `leading-tight`, `text-sm`.',
  palette:
    'The implementation anchors its palette with `bg-zinc-100`, `text-zinc-900`, `text-zinc-600`, `bg-zinc-200`, `border-zinc-300`, `text-zinc-400`, `bg-zinc-900`, `text-zinc-500`, `bg-zinc-400`, `bg-zinc-300`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Keep a stable reading width even when cards move; on mobile show one primary quote and retain clear navigation.',
  background:
    'Keep secondary cards subdued in zinc while the active quote receives scale and large shadow; transition opacity and position together to simulate a moving spotlight.',
  effects: [
    {
      name: 'Focused quote carousel',
      recipe:
        'Keep secondary cards subdued in zinc while the active quote receives scale and large shadow; transition opacity and position together to simulate a moving spotlight.',
      usage: 'holding attention on one customer voice at a time',
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
    'Navigation is compact, high-contrast and tactile; testimonial cards themselves are not buttons unless explicitly interactive.',
  interactions:
    'Use spring or carousel motion to explain reordering; respect reduced motion and never animate while a user is reading unexpectedly.',
  imagery:
    'Use consistent avatar crops and genuine product/chat context; stars or platform marks are supporting evidence.',
  extensionRules: [
    'Carry the **Focused quote carousel** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
