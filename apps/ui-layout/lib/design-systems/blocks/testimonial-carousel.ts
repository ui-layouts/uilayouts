import { defineDesignSystem } from '../types';

export const testimonial_carouselDesign = defineDesignSystem({
  name: 'Testimonial Carousel',
  sourceFiles: [
    {
      path: 'packages/blocks/src/testimonial-section/testimonial-carousel.tsx',
      role: 'the canonical block source and the exact effect composition',
    },
    {
      path: 'apps/ui-layout/lib/utils.ts',
      role: 'the class-merging utility',
    },
    {
      path: 'apps/ui-layout/components/ui/carousel.tsx',
      role: 'the carousel mechanics and navigation behavior',
    },
  ],
  dependencies: [
    {
      name: '@/lib/utils',
      kind: 'local',
      role: 'the class-merging utility',
    },
    {
      name: '@/components/ui/carousel',
      kind: 'local',
      role: 'the carousel mechanics and navigation behavior',
    },
    {
      name: 'lucide-react',
      kind: 'external',
      role: 'provides the line-icon vocabulary used by controls and labels',
      install: 'pnpm add lucide-react',
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
      name: 'embla-carousel',
      kind: 'external',
      role: 'provides an external primitive used by this effect',
      install: 'pnpm add embla-carousel',
    },
    {
      name: 'embla-carousel-react',
      kind: 'external',
      role: 'provides an external primitive used by this effect',
      install: 'pnpm add embla-carousel-react',
    },
    {
      name: 'motion',
      kind: 'external',
      role: 'provides the entrance, presence, drag, spring, and layout animation behavior',
      install: 'pnpm add motion',
    },
  ],
  personality:
    'Striped review carousel defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Quotes use generous readable type; names, roles and ratings use a compact supporting scale with obvious hierarchy. The source’s concrete type anchors are `font-dmSans`, `text-sm`, `font-medium`, `tracking-wider`, `text-5xl`, `text-6xl`, `font-semibold`, `text-xl`, `font-bold`, `text-lg`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `text-black`, `border-neutral-200`, `bg-neutral-100`, `bg-[repeating-linear-gradient(45deg,#eeeeee_0px_1px,transparent_1px_8px)]`, `bg-neutral-200`, `text-white`, `border-neutral-300`, `bg-yellow-500`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Keep a stable reading width even when cards move; on mobile show one primary quote and retain clear navigation.',
  background:
    'Frame a white carousel with a repeating 45° gray stripe field; use yellow rating controls and crisp bordered navigation without soft decorative gradients.',
  effects: [
    {
      name: 'Striped review carousel',
      recipe:
        'Frame a white carousel with a repeating 45° gray stripe field; use yellow rating controls and crisp bordered navigation without soft decorative gradients.',
      usage: 'presenting reviews as a practical browsable module',
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
    'Carry the **Striped review carousel** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
