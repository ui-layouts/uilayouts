import { defineDesignSystem } from '../types';

export const team_expertDesign = defineDesignSystem({
  name: 'Expert',
  personality:
    'Orange expertise cards defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `text-lg`, `font-spaceGrotesk`, `font-bold`, `text-sm`, `text-4xl`, `font-light`, `leading-relaxed`, `text-2xl`, `font-semibold`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `border-neutral-100`, `bg-orange-500`, `text-orange-50`, `text-neutral-800`, `text-neutral-400`, `bg-neutral-50`, `text-neutral-500`, `bg-orange-100`, `border-orange-200`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.',
  background:
    'Use orange #FF6B00 for badges, icon blocks and emphasis; allow portraits/icons to scale slightly while cards gain orange-tinted 2xl elevation and arrows travel right.',
  effects: [
    {
      name: 'Orange expertise cards',
      recipe:
        'Use orange #FF6B00 for badges, icon blocks and emphasis; allow portraits/icons to scale slightly while cards gain orange-tinted 2xl elevation and arrows travel right.',
      usage: 'making specialists feel energetic and directly accessible',
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
    'Carry the **Orange expertise cards** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
