import { defineDesignSystem } from '../types';

export const faq_founderDesign = defineDesignSystem({
  name: 'FAQs Founder',
  personality:
    'Founder Q&A split defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Questions are medium/semibold and answers are relaxed body text; category labels remain compact and muted. The source’s concrete type anchors are `text-lg`, `text-xl`, `font-spaceGrotesk`, `font-medium`, `text-sm`, `text-base`, `leading-relaxed`, `text-2xl`, `text-3xl`, `font-semibold`.',
  palette:
    'The implementation anchors its palette with `bg-neutral-100`, `border-neutral-700`, `border-neutral-200`, `bg-neutral-900`, `bg-neutral-700`, `bg-white`, `text-neutral-600`, `text-neutral-300`, `bg-neutral-800`, `bg-neutral-50`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Keep question and answer alignment stable; split previews stack beneath questions on mobile and accordion controls span the row.',
  background:
    'Use a grounded neutral two-column composition with a dark founder/profile panel and light accordion; blue is reserved for the primary action, while answers enter with understated motion.',
  effects: [
    {
      name: 'Founder Q&A split',
      recipe:
        'Use a grounded neutral two-column composition with a dark founder/profile panel and light accordion; blue is reserved for the primary action, while answers enter with understated motion.',
      usage: 'making FAQs feel like candid guidance from a person',
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
    'Carry the **Founder Q&A split** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
