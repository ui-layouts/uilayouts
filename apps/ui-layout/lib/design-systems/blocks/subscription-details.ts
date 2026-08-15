import { defineDesignSystem } from '../types';

export const subscription_detailsDesign = defineDesignSystem({
  name: 'Subscription Details',
  personality:
    'Layered subscription glass defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Prices are large and tabular-looking; plan names are medium weight, descriptions muted, and feature lists compact. The source’s concrete type anchors are `font-dmSans`, `text-4xl`, `text-2xl`, `font-bold`, `text-sm`, `font-medium`, `tracking-wider`, `text-xl`, `font-semibold`, `leading-relaxed`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `text-black`, `bg-neutral-100`, `text-neutral-500`, `text-neutral-900`, `bg-black`, `text-white`, `border-neutral-300`, `from-orange-500/20`, `via-pink-500/10`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Keep tier cards comparable with aligned prices, features and CTAs; featured-tier offset must disappear safely on mobile.',
  background:
    'Place black and white plan slabs over an orange/20 blurred glow; use white/40 glass, backdrop blur, slight rotated decoration and layered sm-to-2xl shadows.',
  effects: [
    {
      name: 'Layered subscription glass',
      recipe:
        'Place black and white plan slabs over an orange/20 blurred glow; use white/40 glass, backdrop blur, slight rotated decoration and layered sm-to-2xl shadows.',
      usage: 'creating premium depth while keeping plan details readable',
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
    'Carry the **Layered subscription glass** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
