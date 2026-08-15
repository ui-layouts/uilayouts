import { defineDesignSystem } from '../types';

export const pricing_overviewDesign = defineDesignSystem({
  name: 'Overview',
  personality:
    'Acid-lime pricing console defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Prices are large and tabular-looking; plan names are medium weight, descriptions muted, and feature lists compact. The source’s concrete type anchors are `font-dmSans`, `text-4xl`, `text-5xl`, `font-bold`, `tracking-tight`, `leading-relaxed`, `text-sm`, `tracking-tighter`, `text-3xl`, `font-medium`.',
  palette:
    'The implementation anchors its palette with `text-neutral-500`, `text-neutral-900`, `text-neutral-400`, `bg-neutral-300`, `bg-[#C7FF33]`, `bg-gray-100`, `border-neutral-200`, `bg-white`, `bg-neutral-100`, `border-zinc-100`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Keep tier cards comparable with aligned prices, features and CTAs; featured-tier offset must disappear safely on mobile.',
  background:
    'Use #C7FF33 for the featured action/plan, neutral panels elsewhere, and blurred red decorative orbs behind the grid; animate price values rather than replacing whole cards.',
  effects: [
    {
      name: 'Acid-lime pricing console',
      recipe:
        'Use #C7FF33 for the featured action/plan, neutral panels elsewhere, and blurred red decorative orbs behind the grid; animate price values rather than replacing whole cards.',
      usage: 'giving pricing a playful product-led edge',
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
    'Carry the **Acid-lime pricing console** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
