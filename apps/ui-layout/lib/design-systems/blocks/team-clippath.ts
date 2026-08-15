import { defineDesignSystem } from '../types';

export const team_clippathDesign = defineDesignSystem({
  name: 'Clip Path',
  personality:
    'Morphing portrait crop defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `text-5xl`, `font-semibold`, `text-2xl`, `text-lg`, `text-sm`.',
  palette:
    'The implementation anchors its palette with `bg-neutral-100`, `text-neutral-900`, `text-neutral-600`, `from-black/70`, `via-black/20`, `text-white`, `bg-white/20`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.',
  background:
    'Crop portraits with animated CSS clipPath shapes, interpolate from softened/blurred silhouettes to clear images, and retain a black-to-transparent caption gradient.',
  effects: [
    {
      name: 'Morphing portrait crop',
      recipe:
        'Crop portraits with animated CSS clipPath shapes, interpolate from softened/blurred silhouettes to clear images, and retain a black-to-transparent caption gradient.',
      usage: 'making team discovery feel art-directed and fluid',
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
    'Carry the **Morphing portrait crop** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
