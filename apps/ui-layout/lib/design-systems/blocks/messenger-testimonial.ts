import { defineDesignSystem } from '../types';

export const messenger_testimonialDesign = defineDesignSystem({
  name: 'Messenger Testimonial',
  personality:
    'Live messenger simulation defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Quotes use generous readable type; names, roles and ratings use a compact supporting scale with obvious hierarchy. The source’s concrete type anchors are `font-manrope`, `text-4xl`, `font-bold`, `tracking-tight`, `text-xs`, `font-black`, `font-medium`, `text-sm`, `font-semibold`, `tracking-widest`.',
  palette:
    'The implementation anchors its palette with `bg-zinc-400`, `bg-zinc-100`, `text-zinc-900`, `text-zinc-600`, `border-neutral-200`, `bg-white`, `border-zinc-200`, `bg-green-500`, `bg-zinc-900`, `text-white`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Keep a stable reading width even when cards move; on mobile show one primary quote and retain clear navigation.',
  background:
    'Render testimonials as compact chat bubbles with avatars, status dots and typing presence; use green for live/sent state, zinc for message chrome, and spring scale/opacity entrances.',
  effects: [
    {
      name: 'Live messenger simulation',
      recipe:
        'Render testimonials as compact chat bubbles with avatars, status dots and typing presence; use green for live/sent state, zinc for message chrome, and spring scale/opacity entrances.',
      usage: 'making social proof feel like an authentic conversation',
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
    'Carry the **Live messenger simulation** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
