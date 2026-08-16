import { defineDesignSystem } from '../types';

export const stack_testimonialDesign = defineDesignSystem({
  name: 'Stack Testimonial',
  sourceFiles: [
    {
      path: 'packages/blocks/src/testimonial-section/stack-testimonial.tsx',
      role: 'the canonical block source and the exact effect composition',
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
      name: 'motion',
      kind: 'external',
      role: 'provides the entrance, presence, drag, spring, and layout animation behavior',
      install: 'pnpm add motion',
    },
    {
      name: '@repo/shadcn',
      kind: 'workspace',
      role: 'an existing workspace design primitive; reuse it rather than replacing its behavior',
    },
  ],
  personality:
    'Draggable card deck defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Quotes use generous readable type; names, roles and ratings use a compact supporting scale with obvious hierarchy. The source’s concrete type anchors are `font-manrope`, `text-5xl`, `font-bold`, `tracking-tight`, `text-lg`, `text-base`, `text-xs`, `font-medium`, `tracking-wider`, `text-sm`.',
  palette:
    'The implementation anchors its palette with `from-zinc-50`, `to-white`, `text-zinc-900`, `text-zinc-600`, `bg-white`, `border-zinc-200`, `border-zinc-300`, `bg-zinc-50`, `bg-zinc-100`, `bg-zinc-900`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Keep a stable reading width even when cards move; on mobile show one primary quote and retain clear navigation.',
  background:
    'Layer white testimonial cards at diminishing scale/offset with zinc shadows; the active card is draggable and reorders through spring motion, with yellow stars as the only accent.',
  effects: [
    {
      name: 'Draggable card deck',
      recipe:
        'Layer white testimonial cards at diminishing scale/offset with zinc shadows; the active card is draggable and reorders through spring motion, with yellow stars as the only accent.',
      usage: 'making multiple voices feel like a tactile deck',
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
    'Carry the **Draggable card deck** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
