# Footer Privilege — Design System

> Use this file as the complete visual and implementation brief for extending the `footer-privilege` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/footer-section/footer-privilege.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/footer-privilege.tsx) — the canonical block source and the exact effect composition

## Required libraries and primitives

- No effect library is required. The effect is built directly in the canonical block with React and CSS/Tailwind.

## Design thesis

Luxury access footer defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use clear link-group headings, compact links and a brand statement sized to the footer’s role; legal text is smallest but readable. The source’s concrete type anchors are `text-7xl`, `font-light`, `tracking-tighter`, `text-2xl`, `font-semibold`, `tracking-tight`, `leading-relaxed`, `text-xs`, `font-bold`, `font-medium`.

## Palette and contrast

Core palette: `bg-white`, `bg-zinc-950`, `text-black`, `text-white`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Preserve strong column alignment and generous terminal whitespace; collapse navigation groups predictably without hiding legal links.

## Background construction

Use black/zinc-950 surfaces, thin white borders, tiny uppercase labels and a 45° geometric diamond; treat spacing and contrast as the luxury signal.

## Imagery and iconography

Use a wordmark, small brand symbol or restrained background art—never unrelated stock imagery.

## Unique components and signature effects

1. **Luxury access footer.** Use black/zinc-950 surfaces, thin white borders, tiny uppercase labels and a 45° geometric diamond; treat spacing and contrast as the luxury signal.
   - **Use it for:** closing a premium or members-only experience
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Border-led structure

[Open the exact implementation (lines 2–8)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/footer-privilege.tsx#L2-L8) — Hairline borders establish grouping and rhythm without relying on filled cards.

### 2. Overlapping transformed composition

[Open the exact implementation (lines 10–16)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/footer-privilege.tsx#L10-L16) — Rotation and offset create the intentionally physical, layered arrangement.

### 3. Border-led structure

[Open the exact implementation (lines 43–49)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/footer-privilege.tsx#L43-L49) — Hairline borders establish grouping and rhythm without relying on filled cards.
<!-- source-audit:end -->

## Buttons

Newsletter and final CTAs use the block’s primary contrast; utility/social controls are smaller but retain 44px targets.

## Motion and interaction states

Keep footer motion minimal: link color/underline and button press states are sufficient.

## Rules for extending this design

1. Carry the **Luxury access footer** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
