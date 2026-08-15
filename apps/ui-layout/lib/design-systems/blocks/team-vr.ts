import { defineDesignSystem } from '../types';

export const team_vrDesign = defineDesignSystem({
  name: 'VR',
  personality:
    'Pink-orange VR horizon defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `tracking-widest`, `text-xs`, `font-bold`, `text-5xl`, `font-spaceGrotesk`, `text-7xl`, `tracking-tight`, `text-2xl`, `font-medium`.',
  palette:
    'The implementation anchors its palette with `bg-neutral-950`, `bg-[linear-gradient(to_right,#292929_1px,transparent_1px),linear-gradient(to_bottom,#292929_1px,transparent_1px)]`, `bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,#ee33a6_100%)]`, `text-neutral-500`, `text-white`, `shadow-[0_0_50px_rgba(255,0,128,0.3)]`, `from-[#FF0080]`, `to-[#FF8C00]`, `text-neutral-300`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.',
  background:
    'Draw a dark technical grid, fade it through a top ellipse mask, and terminate it in a hot-pink radial horizon; reveal color portraits and a 50px pink glow while gradient labels shift from #FF0080 to #FF8C00.',
  effects: [
    {
      name: 'Pink-orange VR horizon',
      recipe:
        'Draw a dark technical grid, fade it through a top ellipse mask, and terminate it in a hot-pink radial horizon; reveal color portraits and a 50px pink glow while gradient labels shift from #FF0080 to #FF8C00.',
      usage: 'creating a glowing virtual-world team showcase',
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
    'Carry the **Pink-orange VR horizon** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
