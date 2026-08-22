# Footer Bento — Design System

> Use this file as the complete visual and implementation brief for extending the `footer-bento` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/footer-section/footer-bento.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/footer-bento.tsx) — the canonical block source and the exact effect composition
- [`packages/shadcn/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/shadcn/src/index.tsx) — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.

## Design thesis

Utility bento footer defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use clear link-group headings, compact links and a brand statement sized to the footer’s role; legal text is smallest but readable. The source’s concrete type anchors are `text-2xl`, `font-bold`, `tracking-tight`, `leading-relaxed`, `text-sm`, `font-semibold`, `text-xs`, `tracking-widest`, `font-medium`.

## Palette and contrast

Core palette: `bg-white`, `bg-neutral-900`, `border-neutral-200`, `border-neutral-800`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Preserve strong column alignment and generous terminal whitespace; collapse navigation groups predictably without hiding legal links.

## Background construction

Segment navigation, newsletter and identity into mixed neutral tiles; alternate light/dark surfaces instead of using one horizontal footer band.

## Imagery and iconography

Use a wordmark, small brand symbol or restrained background art—never unrelated stock imagery.

## Unique components and signature effects

1. **Utility bento footer.** Segment navigation, newsletter and identity into mixed neutral tiles; alternate light/dark surfaces instead of using one horizontal footer band.
   - **Use it for:** making dense footer utilities scan like a dashboard
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Structural border treatment

[Open the exact implementation (lines 7–13)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/footer-bento.tsx#L7-L13) — The border placement creates the block’s visual grouping and alignment.

### 2. Structural border treatment

[Open the exact implementation (lines 21–30)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/footer-bento.tsx#L21-L30) — The border placement creates the block’s visual grouping and alignment.

### 3. Structural border treatment

[Open the exact implementation (lines 31–37)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/footer-bento.tsx#L31-L37) — The border placement creates the block’s visual grouping and alignment.
<!-- source-audit:end -->

## Buttons

Newsletter and final CTAs use the block’s primary contrast; utility/social controls are smaller but retain 44px targets.

## Motion and interaction states

Keep footer motion minimal: link color/underline and button press states are sufficient.

## Rules for extending this design

1. Carry the **Utility bento footer** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
