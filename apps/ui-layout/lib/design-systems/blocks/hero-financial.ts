import { defineDesignSystem } from '../types';

export const hero_financialDesign = defineDesignSystem({
  name: 'Financial',
  personality:
    'Financial dashboard glow defines the identity. The section should feel immersive and launch-ready.',
  typography:
    'A bold display face or the project sans at very large responsive sizes; compact supporting copy and small UI labels create scale contrast. The source’s concrete type anchors are `font-bold`, `text-sm`, `text-xl`, `tracking-tight`, `font-semibold`, `text-xs`, `font-medium`, `tracking-widest`, `text-6xl`, `text-5xl`.',
  palette:
    'The implementation anchors its palette with `bg-[#f7f9fc]`, `text-[#1e293b]`, `from-blue-50`, `via-blue-100`, `bg-neutral-800`, `border-neutral-900`, `text-white`, `bg-white`, `border-neutral-200`, `text-black`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Use a wide hero stage with a centered or split headline and an overlapping product visualization; preserve generous vertical air.',
  background:
    'Layer a cool #f7f9fc field, blue corner gradients, translucent white dashboard slabs, and precise blue shadow halos; use a dark CTA with opposing inset shadows for a machined control.',
  effects: [
    {
      name: 'Financial dashboard glow',
      recipe:
        'Layer a cool #f7f9fc field, blue corner gradients, translucent white dashboard slabs, and precise blue shadow halos; use a dark CTA with opposing inset shadows for a machined control.',
      usage: 'giving financial data a trustworthy, polished instrument-panel feel',
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
    'Primary actions carry the block accent; secondary actions are quieter bordered or glass controls with the same height.',
  interactions:
    'Use slow entrance staging and restrained hover/press feedback; decorative atmosphere must not chase the pointer.',
  imagery:
    'Use high-quality product/UI composites or portraits with deliberate overlap; icons are simple line glyphs.',
  extensionRules: [
    'Carry the **Financial dashboard glow** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
