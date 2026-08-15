import { defineDesignSystem } from '../types';

export const customer_experienceDesign = defineDesignSystem({
  name: 'Customer Experience',
  personality:
    'Orange image crossfade defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use editorial role/project titles, muted dates, and small categorical labels; keep chronology immediately scannable. The source’s concrete type anchors are `font-manrope`, `text-9xl`, `text-8xl`, `text-7xl`, `font-bold`, `font-spaceGrotesk`, `text-4xl`, `text-xl`.',
  palette:
    'The implementation anchors its palette with `bg-orange-200`, `border-orange-500`, `text-orange-500`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Use a timeline, ledger, or accordion with aligned dates and content; collapse to a single reading column on mobile.',
  background:
    'Use orange-500 rules and orange-200 support surfaces; crossfade/scale the customer image in sync with the selected story instead of sliding the entire layout.',
  effects: [
    {
      name: 'Orange image crossfade',
      recipe:
        'Use orange-500 rules and orange-200 support surfaces; crossfade/scale the customer image in sync with the selected story instead of sliding the entire layout.',
      usage: 'connecting each narrative to a distinct visual memory',
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
    'Use text arrows or compact icon controls, with the accent appearing only on the active or actionable item.',
  interactions:
    'Entry reveals follow chronology; active-item transitions may crossfade, but layout position should remain predictable.',
  imagery:
    'Use project/customer imagery only when tied to the active record; otherwise let typography and rules carry the layout.',
  extensionRules: [
    'Carry the **Orange image crossfade** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
