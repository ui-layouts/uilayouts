import { defineDesignSystem } from '../types';

export const faq_tabbed_explorerDesign = defineDesignSystem({
  name: 'Tabbed Explorer FAQ',
  personality:
    'Neumorphic topic explorer defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.',
  typography:
    'Questions are medium/semibold and answers are relaxed body text; category labels remain compact and muted. The source’s concrete type anchors are `text-sm`, `font-semibold`, `font-spaceGrotesk`, `tracking-widest`, `font-medium`, `text-2xl`.',
  palette:
    'The implementation anchors its palette with `bg-white`, `bg-slate-50`, `border-slate-200`, `text-slate-400`, `bg-neutral-100`, `text-black`, `border-neutral-200`, `shadow-[30px_54px_67px_0px_rgba(209,217,230,0.67),25px_27px_27px_-7px_rgba(209,217,230,0.34),-34px_-30px_65px_0px_rgba(255,255,255,0.75),-9px_-20px_29px_0px_rgba(255,255,255,0.54),-13px_-11px_22px_7px_rgba(255,255,255,0.25),-16px_-7px_21px_4px_rgba(255,255,255,0.25)]`, `text-slate-600`, `bg-slate-200/50`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.',
  composition:
    'Keep question and answer alignment stable; split previews stack beneath questions on mobile and accordion controls span the row.',
  background:
    'Use slate-50 panels and a six-layer light/dark shadow recipe to create a deeply extruded navigation card; tabs change topic while the reading surface remains quiet.',
  effects: [
    {
      name: 'Neumorphic topic explorer',
      recipe:
        'Use slate-50 panels and a six-layer light/dark shadow recipe to create a deeply extruded navigation card; tabs change topic while the reading surface remains quiet.',
      usage: 'turning a large FAQ set into a soft tactile explorer',
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
    'Carry the **Neumorphic topic explorer** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.',
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
