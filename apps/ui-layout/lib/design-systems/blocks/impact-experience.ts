import { defineDesignSystem } from '../types';

export const impact_experienceDesign = defineDesignSystem({
  name: 'Impact Experience',
  personality:
    'Numbered impact ledger defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use editorial role/project titles, muted dates, and small categorical labels; keep chronology immediately scannable. The source’s concrete type anchors are `text-4xl`, `font-bold`, `leading-tight`, `text-sm`, `font-medium`, `font-semibold`, `text-xs`, `leading-relaxed`, `text-6xl`, `tracking-tight`.',
  palette:
    'The implementation anchors its palette with `border-neutral-200`, `text-neutral-900`, `text-neutral-800`, `text-neutral-500`, `border-neutral-900`, `text-neutral-600`, `bg-zinc-50`, `bg-zinc-100`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Use a timeline, ledger, or accordion with aligned dates and content; collapse to a single reading column on mobile.',
  background:
    'Use pale zinc panels, strict borders and large index/impact statements; reveal supporting action text through opacity rather than changing geometry.',
  effects: [
    {
      name: 'Numbered impact ledger',
      recipe:
        'Use pale zinc panels, strict borders and large index/impact statements; reveal supporting action text through opacity rather than changing geometry.',
      usage: 'making achievements feel systematic and auditable',
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
    'Carry the **Numbered impact ledger** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
