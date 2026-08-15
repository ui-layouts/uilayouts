import { defineDesignSystem } from '../types';

export const product_packsDesign = defineDesignSystem({
  name: 'Packs',
  personality:
    'Neo-brutalist packs defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Prices are large and tabular-looking; plan names are medium weight, descriptions muted, and feature lists compact. The source’s concrete type anchors are `text-4xl`, `text-5xl`, `font-semibold`, `tracking-tight`, `leading-relaxed`, `text-2xl`, `text-sm`, `text-xl`, `font-medium`.',
  palette:
    'The implementation anchors its palette with `bg-yellow-50`, `text-black`, `text-neutral-500`, `bg-amber-300`, `border-neutral-100`, `text-neutral-800`, `text-neutral-700`, `border-yellow-50`, `bg-neutral-200`, `border-black`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Keep tier cards comparable with aligned prices, features and CTAs; featured-tier offset must disappear safely on mobile.',
  background:
    'Use hard black borders, amber/yellow panels and 5px offset shadows; on press, remove the shadow and translate the control 3px on both axes to mimic a physical button.',
  effects: [
    {
      name: 'Neo-brutalist packs',
      recipe:
        'Use hard black borders, amber/yellow panels and 5px offset shadows; on press, remove the shadow and translate the control 3px on both axes to mimic a physical button.',
      usage: 'making one-time packages feel bold, direct, and tactile',
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
    'Carry the **Neo-brutalist packs** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
