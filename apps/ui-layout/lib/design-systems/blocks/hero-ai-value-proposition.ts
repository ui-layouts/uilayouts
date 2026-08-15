import { defineDesignSystem } from '../types';

export const hero_ai_value_propositionDesign = defineDesignSystem({
  name: 'AI Value Proposition',
  personality:
    'Floating product constellation defines the identity. The section should feel immersive and launch-ready.',
  typography:
    'A bold display face or the project sans at very large responsive sizes; compact supporting copy and small UI labels create scale contrast. The source’s concrete type anchors are `text-xl`, `font-bold`, `tracking-tight`, `text-sm`, `text-5xl`, `text-7xl`, `font-semibold`, `text-lg`, `font-medium`, `leading-relaxed`.',
  palette:
    'The implementation anchors its palette with `bg-[#f9f9f9]`, `text-[#111]`, `border-zinc-200`, `text-slate-900`, `bg-white`, `border-neutral-100`, `text-neutral-500`, `text-black`, `border-neutral-300`, `text-neutral-400`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Use a wide hero stage with a centered or split headline and an overlapping product visualization; preserve generous vertical air.',
  background:
    'Build a soft #f9f9f9 stage with a 100px blurred blue aura; position compact product cards around a central device, using white/80 glass, 2xl shadow, and selectively desaturating logos until hover.',
  effects: [
    {
      name: 'Floating product constellation',
      recipe:
        'Build a soft #f9f9f9 stage with a 100px blurred blue aura; position compact product cards around a central device, using white/80 glass, 2xl shadow, and selectively desaturating logos until hover.',
      usage: 'showing an ecosystem orbiting one clear value proposition',
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
    'Carry the **Floating product constellation** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
