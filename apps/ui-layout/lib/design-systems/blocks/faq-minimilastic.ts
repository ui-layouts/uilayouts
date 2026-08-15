import { defineDesignSystem } from '../types';

export const faq_minimilasticDesign = defineDesignSystem({
  name: 'Minimilastic',
  personality:
    'Blue radial minimal FAQ defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Questions are medium/semibold and answers are relaxed body text; category labels remain compact and muted. The source’s concrete type anchors are `text-2xl`, `text-4xl`, `font-medium`, `text-xl`, `text-lg`.',
  palette:
    'The implementation anchors its palette with `bg-blue-50`, `text-blue-800`, `border-slate-200`, `bg-blue-100`, `border-neutral-200`, `bg-white`, `text-neutral-950`, `text-slate-600`, `bg-blue-800`, `text-white`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Keep question and answer alignment stable; split previews stack beneath questions on mobile and accordion controls span the row.',
  background:
    'Keep white accordion rows over a pale blue radial corner glow; active plus icons rotate 45/90 degrees, with blue-800 reserved for the decisive action.',
  effects: [
    {
      name: 'Blue radial minimal FAQ',
      recipe:
        'Keep white accordion rows over a pale blue radial corner glow; active plus icons rotate 45/90 degrees, with blue-800 reserved for the decisive action.',
      usage: 'adding just enough energy to a minimal help section',
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
    'Use CTA styling only outside accordion rows; the entire question header is the disclosure button with visible focus.',
  interactions:
    'Rotate plus/chevron indicators and reveal answer height/opacity; preserve keyboard controls and reduced-motion behavior.',
  imagery:
    'Use preview/product imagery when it clarifies answers; decorative scenery must remain behind a contrast layer.',
  extensionRules: [
    'Carry the **Blue radial minimal FAQ** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
