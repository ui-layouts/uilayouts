# Stats Bento — Design System

> Use this file as the complete visual and implementation brief for extending the `stats-bento` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/stats-section/stats-bento.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/stats-bento.tsx) — the canonical block source and the exact effect composition

## Required libraries and primitives

- No effect library is required. The effect is built directly in the canonical block with React and CSS/Tailwind.

## Design thesis

Offset monochrome metrics defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Numbers are the display typography; labels remain compact and muted, with descriptions clearly subordinate. The source’s concrete type anchors are `font-semibold`, `tracking-widest`, `text-6xl`, `tracking-tighter`, `text-sm`, `text-xs`, `text-3xl`, `text-2xl`, `leading-none`.

## Palette and contrast

Core palette: `bg-white`, `bg-zinc-950`, `bg-[repeating-linear-gradient(45deg,#383838_0px_1px,transparent_1px_10px)]`, `border-white`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Align figures to a shared grid or bento baseline; prevent animated numbers from causing width shifts and stack cleanly on mobile.

## Background construction

Mix zinc-950 and white statistic tiles, then place a diagonal dark hatch behind the focal tile and fade it toward the upper right; offset decorative blocks by ±10.

## Imagery and iconography

Prefer charts, sparklines and abstract data marks over stock photography; icons remain secondary to figures.

## Unique components and signature effects

1. **Offset monochrome metrics.** Mix zinc-950 and white statistic tiles, then place a diagonal dark hatch behind the focal tile and fade it toward the upper right; offset decorative blocks by ±10.
   - **Use it for:** creating asymmetry and depth in an otherwise strict bento
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Radial background field

[Open the exact implementation (lines 7–15)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/stats-bento.tsx#L7-L15) — The gradient’s focal point, stops, and layer position establish the block’s backdrop.

### 2. Border-led structure

[Open the exact implementation (lines 24–30)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/stats-bento.tsx#L24-L30) — Hairline borders establish grouping and rhythm without relying on filled cards.

### 3. Border-led structure

[Open the exact implementation (lines 43–49)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/stats-bento.tsx#L43-L49) — Hairline borders establish grouping and rhythm without relying on filled cards.
<!-- source-audit:end -->

## Buttons

Use buttons only for drill-down or a final CTA; style them as a continuation of the surrounding surface.

## Motion and interaction states

Animate values once on entry and make hover effects explanatory, not celebratory.

## Rules for extending this design

1. Carry the **Offset monochrome metrics** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
