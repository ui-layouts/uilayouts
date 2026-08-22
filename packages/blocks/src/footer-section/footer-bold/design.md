# Footer Bold — Design System

> Use this file as the complete visual and implementation brief for extending the `footer-bold` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/footer-section/footer-bold.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/footer-bold.tsx) — the canonical block source and the exact effect composition

## Required libraries and primitives

- No effect library is required. The effect is built directly in the canonical block with React and CSS/Tailwind.

## Design thesis

Monumental wordmark footer defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use clear link-group headings, compact links and a brand statement sized to the footer’s role; legal text is smallest but readable. The source’s concrete type anchors are `font-dmSans`, `text-3xl`, `font-bold`, `tracking-tight`, `text-lg`, `font-medium`, `text-xs`, `tracking-widest`, `text-sm`, `font-black`.

## Palette and contrast

Core palette: `bg-white`, `text-zinc-900`, `border-zinc-200`, `border-zinc-900`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Preserve strong column alignment and generous terminal whitespace; collapse navigation groups predictably without hiding legal links.

## Background construction

Use a white field, zinc rules, backdrop-blurred utility row and a 12vw low-opacity brand word as the dominant graphic.

## Imagery and iconography

Use a wordmark, small brand symbol or restrained background art—never unrelated stock imagery.

## Unique components and signature effects

1. **Monumental wordmark footer.** Use a white field, zinc rules, backdrop-blurred utility row and a 12vw low-opacity brand word as the dominant graphic.
   - **Use it for:** ending an editorial page with typographic scale
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Border-led structure

[Open the exact implementation (lines 1–6)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/footer-bold.tsx#L1-L6) — Hairline borders establish grouping and rhythm without relying on filled cards.

### 2. Border-led structure

[Open the exact implementation (lines 9–15)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/footer-bold.tsx#L9-L15) — Hairline borders establish grouping and rhythm without relying on filled cards.

### 3. Translucent glass layer

[Open the exact implementation (lines 45–54)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/footer-bold.tsx#L45-L54) — Blur, transparency, border, and stacking work together as one glass treatment.
<!-- source-audit:end -->

## Buttons

Newsletter and final CTAs use the block’s primary contrast; utility/social controls are smaller but retain 44px targets.

## Motion and interaction states

Keep footer motion minimal: link color/underline and button press states are sufficient.

## Rules for extending this design

1. Carry the **Monumental wordmark footer** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
