import { defineDesignSystem } from '../types';

export const footer_boldDesign = defineDesignSystem({
  name: 'Footer Bold',
  sourceFiles: [
    {
      path: 'packages/blocks/src/footer-section/footer-bold.tsx',
      role: 'the canonical block source and the exact effect composition',
    },
  ],
  dependencies: [],
  personality:
    'Monumental wordmark footer defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use clear link-group headings, compact links and a brand statement sized to the footer’s role; legal text is smallest but readable. The source’s concrete type anchors are `font-dmSans`, `text-3xl`, `font-bold`, `tracking-tight`, `text-lg`, `font-medium`, `text-xs`, `tracking-widest`, `text-sm`, `font-black`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `text-zinc-900`, `border-zinc-200`, `border-zinc-900`, `text-zinc-500`, `border-zinc-500`, `text-zinc-400`, `text-zinc-950`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Preserve strong column alignment and generous terminal whitespace; collapse navigation groups predictably without hiding legal links.',
  background:
    'Use a white field, zinc rules, backdrop-blurred utility row and a 12vw low-opacity brand word as the dominant graphic.',
  effects: [
    {
      name: 'Monumental wordmark footer',
      recipe:
        'Use a white field, zinc rules, backdrop-blurred utility row and a 12vw low-opacity brand word as the dominant graphic.',
      usage: 'ending an editorial page with typographic scale',
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
    'Newsletter and final CTAs use the block’s primary contrast; utility/social controls are smaller but retain 44px targets.',
  interactions:
    'Keep footer motion minimal: link color/underline and button press states are sufficient.',
  imagery:
    'Use a wordmark, small brand symbol or restrained background art—never unrelated stock imagery.',
  extensionRules: [
    'Carry the **Monumental wordmark footer** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
