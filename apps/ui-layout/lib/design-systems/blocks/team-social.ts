import { defineDesignSystem } from '../types';

export const team_socialDesign = defineDesignSystem({
  name: 'Social',
  personality:
    'Community action cards defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `text-xs`, `font-semibold`, `text-5xl`, `font-serif`, `font-bold`, `text-lg`, `leading-relaxed`, `font-spaceGrotesk`, `text-xl`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `bg-green-50`, `text-green-700`, `text-neutral-900`, `text-neutral-500`, `bg-orange-500`, `shadow-orange-500`, `text-white`, `border-neutral-200`, `text-neutral-400`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.',
  background:
    'Use clean white cards, green social/status chips, and a saturated orange floating action with matching shadow; keep most text neutral.',
  effects: [
    {
      name: 'Community action cards',
      recipe:
        'Use clean white cards, green social/status chips, and a saturated orange floating action with matching shadow; keep most text neutral.',
      usage: 'making connection and availability the primary behavior',
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
    'Actions are compact social/contact controls derived from the accent; give each at least a 44px hit area.',
  interactions:
    'Use group hover to connect portrait, name and action; also expose equivalent keyboard focus behavior.',
  imagery:
    'Portraits are the visual core. Preserve deliberate grayscale, crop, overlay, and color-reveal treatment across new people.',
  extensionRules: [
    'Carry the **Community action cards** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
