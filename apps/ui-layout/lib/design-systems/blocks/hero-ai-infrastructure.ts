import { defineDesignSystem } from '../types';

export const hero_ai_infrastructureDesign = defineDesignSystem({
  name: 'AI Infrastructure',
  personality:
    'Shader-lit infrastructure field defines the identity. The section should feel immersive and launch-ready.',
  typography:
    'A bold display face or the project sans at very large responsive sizes; compact supporting copy and small UI labels create scale contrast. The source’s concrete type anchors are `text-sm`, `font-medium`, `text-2xl`, `font-semibold`, `tracking-tight`, `text-5xl`, `text-7xl`, `text-lg`, `text-xl`, `font-light`.',
  palette:
    'The implementation anchors its palette with `bg-black`, `text-white`, `bg-neutral-800`, `border-neutral-900`, `bg-white`, `text-black`, `bg-neutral-100`, `bg-white/10`, `bg-white/20`, `border-white/10`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Use a wide hero stage with a centered or split headline and an overlapping product visualization; preserve generous vertical air.',
  background:
    'Place a full-bleed ShaderGradient scene behind a near-black scrim; keep blue light concentrated around the product diagram and use translucent white/10 glass panels with blur.',
  effects: [
    {
      name: 'Shader-lit infrastructure field',
      recipe:
        'Place a full-bleed ShaderGradient scene behind a near-black scrim; keep blue light concentrated around the product diagram and use translucent white/10 glass panels with blur.',
      usage: 'ambient technological depth behind the headline and infrastructure UI',
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
    'Carry the **Shader-lit infrastructure field** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
