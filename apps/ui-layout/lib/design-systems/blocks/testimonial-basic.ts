import { defineDesignSystem } from '../types';

export const testimonial_basicDesign = defineDesignSystem({
  name: 'Testimonial Basic',
  personality:
    'Photo-backed glass quote defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Quotes use generous readable type; names, roles and ratings use a compact supporting scale with obvious hierarchy. The source’s concrete type anchors are `font-dmSans`, `text-sm`, `font-semibold`, `tracking-widest`, `text-5xl`, `text-7xl`, `font-black`, `tracking-tighter`, `font-mono`, `text-2xl`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `text-black`, `border-neutral-200`, `bg-neutral-100`, `bg-[repeating-linear-gradient(45deg,#eeeeee_0px_1px,transparent_1px_8px)]`, `bg-black/50`, `border-white/20`, `text-white`, `bg-neutral-50`, `bg-neutral-200`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Keep a stable reading width even when cards move; on mobile show one primary quote and retain clear navigation.',
  background:
    'Use a diagonal paper hatch outside the card; overlay imagery with black/50 and backdrop blur, then place white copy and a restrained violet edge inside.',
  effects: [
    {
      name: 'Photo-backed glass quote',
      recipe:
        'Use a diagonal paper hatch outside the card; overlay imagery with black/50 and backdrop blur, then place white copy and a restrained violet edge inside.',
      usage: 'creating one cinematic, readable customer statement',
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
    'Navigation is compact, high-contrast and tactile; testimonial cards themselves are not buttons unless explicitly interactive.',
  interactions:
    'Use spring or carousel motion to explain reordering; respect reduced motion and never animate while a user is reading unexpectedly.',
  imagery:
    'Use consistent avatar crops and genuine product/chat context; stars or platform marks are supporting evidence.',
  extensionRules: [
    'Carry the **Photo-backed glass quote** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
