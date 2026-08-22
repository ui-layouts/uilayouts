# Footer Minimal — Design System

> Use this file as the complete visual and implementation brief for extending the `footer-minimal` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/footer-section/footer-minimal.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/footer-minimal.tsx) — the canonical block source and the exact effect composition
- [`packages/ui/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/ui/src/index.tsx) — the open-source workspace UI primitive barrel used by this block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@repo/ui** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.

## Design thesis

Centered minimal footer defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use clear link-group headings, compact links and a brand statement sized to the footer’s role; legal text is smallest but readable. The source’s concrete type anchors are `text-sm`, `font-semibold`, `tracking-tight`, `leading-relaxed`, `text-xs`, `tracking-wider`.

## Palette and contrast

Core palette: `bg-white`, `border-zinc-200`, `bg-zinc-900`, `text-zinc-600`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Preserve strong column alignment and generous terminal whitespace; collapse navigation groups predictably without hiding legal links.

## Background construction

Use white/zinc-50 space, one dark capsule or icon and very few links; vertically center the floating mark with -50% translation and avoid decorative effects.

## Imagery and iconography

Use a wordmark, small brand symbol or restrained background art—never unrelated stock imagery.

## Unique components and signature effects

1. **Centered minimal footer.** Use white/zinc-50 space, one dark capsule or icon and very few links; vertically center the floating mark with -50% translation and avoid decorative effects.
   - **Use it for:** providing a quiet conclusion after visually rich content
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Border-led structure

[Open the exact implementation (lines 4–10)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/footer-minimal.tsx#L4-L10) — Hairline borders establish grouping and rhythm without relying on filled cards.

### 2. Border-led structure

[Open the exact implementation (lines 105–113)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/footer-minimal.tsx#L105-L113) — Hairline borders establish grouping and rhythm without relying on filled cards.

### 3. Border-led structure

[Open the exact implementation (lines 127–133)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/footer-minimal.tsx#L127-L133) — Hairline borders establish grouping and rhythm without relying on filled cards.
<!-- source-audit:end -->

## Buttons

Newsletter and final CTAs use the block’s primary contrast; utility/social controls are smaller but retain 44px targets.

## Motion and interaction states

Keep footer motion minimal: link color/underline and button press states are sufficient.

## Rules for extending this design

1. Carry the **Centered minimal footer** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
