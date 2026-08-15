import { defineDesignSystem } from '../types';

export const team_synthDesign = defineDesignSystem({
  name: 'Synth',
  personality:
    'Synthwave grid portraits defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `text-7xl`, `font-semibold`, `tracking-tighter`, `text-2xl`, `font-spaceGrotesk`, `font-black`, `tracking-widest`, `font-mono`, `text-xs`.',
  palette:
    'The implementation anchors its palette with `bg-neutral-950`, `text-white`, `bg-[linear-gradient(to_right,#292929_1px,transparent_1px),linear-gradient(to_bottom,#292929_1px,transparent_1px)]`, `bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(102,51,238,1)_100%)]`, `from-cyan-400`, `to-blue-600`, `from-neutral-500`, `to-neutral-300`, `bg-violet-950`, `border-cyan-400/20`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.',
  background:
    'Build a neutral-950 perspective from cyan grid lines and a violet radial floor glow; add cyan/pink borders, blurred aura, gradient type, and raise/de-rotate grayscale portraits on hover.',
  effects: [
    {
      name: 'Synthwave grid portraits',
      recipe:
        'Build a neutral-950 perspective from cyan grid lines and a violet radial floor glow; add cyan/pink borders, blurred aura, gradient type, and raise/de-rotate grayscale portraits on hover.',
      usage: 'creating the block’s unmistakable neon performance-stage identity',
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
    'Carry the **Synthwave grid portraits** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
