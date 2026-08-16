# Stats Bento — Design System

> Use this file as the complete visual and implementation brief for extending the `stats-bento` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/stats-section/stats-bento.tsx` — the canonical block source and the exact effect composition

## Required libraries and primitives

- No effect library is required. The effect is built directly in the canonical block with React and CSS/Tailwind.

## Design thesis

Offset monochrome metrics defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Numbers are the display typography; labels remain compact and muted, with descriptions clearly subordinate. The source’s concrete type anchors are `font-semibold`, `tracking-widest`, `text-6xl`, `tracking-tighter`, `text-sm`, `text-xs`, `text-3xl`, `text-2xl`, `leading-none`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `bg-zinc-950`, `bg-[repeating-linear-gradient(45deg,#383838_0px_1px,transparent_1px_10px)]`, `border-white`, `bg-zinc-800`, `text-zinc-400`, `text-white`, `bg-zinc-50`, `border-zinc-200`, `text-zinc-900`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Align figures to a shared grid or bento baseline; prevent animated numbers from causing width shifts and stack cleanly on mobile.

## Background construction

Mix zinc-950 and white statistic tiles, then place a diagonal dark hatch behind the focal tile and fade it toward the upper right; offset decorative blocks by ±10.

## Imagery and iconography

Prefer charts, sparklines and abstract data marks over stock photography; icons remain secondary to figures.

## Unique components and signature effects

1. **Offset monochrome metrics.** Mix zinc-950 and white statistic tiles, then place a diagonal dark hatch behind the focal tile and fade it toward the upper right; offset decorative blocks by ±10.
   - **Use it for:** creating asymmetry and depth in an otherwise strict bento
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

## Buttons

Use buttons only for drill-down or a final CTA; style them as a continuation of the surrounding surface.

## Motion and interaction states

Animate values once on entry and make hover effects explanatory, not celebratory.

## Rules for extending this design

1. Carry the **Offset monochrome metrics** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Stats Bento**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
