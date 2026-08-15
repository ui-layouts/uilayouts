import { defineDesignSystem } from '../types';

export const creative_experienceDesign = defineDesignSystem({
  name: 'Creative Experience',
  personality:
    'Expandable creative accordion defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Use editorial role/project titles, muted dates, and small categorical labels; keep chronology immediately scannable. The source’s concrete type anchors are `text-7xl`, `text-5xl`, `font-manrope`, `font-semibold`, `text-base`, `text-sm`, `text-xs`, `text-xl`, `font-normal`, `font-medium`.',
  palette:
    'The implementation anchors its palette with `bg-zinc-100`, `border-neutral-300`, `bg-zinc-200`, `text-black`, `text-neutral-600`, `text-zinc-800`, `bg-neutral-200`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Use a timeline, ledger, or accordion with aligned dates and content; collapse to a single reading column on mobile.',
  background:
    'Use neutral paper panels and data-active icon rotations; blur/scale content from 95% into clarity, reveal supporting imagery and controls only for the active row.',
  effects: [
    {
      name: 'Expandable creative accordion',
      recipe:
        'Use neutral paper panels and data-active icon rotations; blur/scale content from 95% into clarity, reveal supporting imagery and controls only for the active row.',
      usage: 'turning a timeline into an exploratory editorial interaction',
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
    'Carry the **Expandable creative accordion** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
