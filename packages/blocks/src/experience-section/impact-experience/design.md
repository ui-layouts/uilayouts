# Impact Experience — Design System

> Use this file as the complete visual and implementation brief for extending the `impact-experience` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/experience-section/impact-experience.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/experience-section/impact-experience.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/lib/utils.ts`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/lib/utils.ts) — the class-merging utility

## Required libraries and primitives

- **@/lib/utils** (repository primitive) — the class-merging utility. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Numbered impact ledger defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use editorial role/project titles, muted dates, and small categorical labels; keep chronology immediately scannable. The source’s concrete type anchors are `text-4xl`, `font-bold`, `leading-tight`, `text-sm`, `font-medium`, `font-semibold`, `text-xs`, `leading-relaxed`, `text-6xl`, `tracking-tight`.

## Palette and contrast

Core palette: `border-neutral-200`, `text-neutral-900`, `text-neutral-800`, `text-neutral-500`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Use a timeline, ledger, or accordion with aligned dates and content; collapse to a single reading column on mobile.

## Background construction

Use pale zinc panels, strict borders and large index/impact statements; reveal supporting action text through opacity rather than changing geometry.

## Imagery and iconography

Use project/customer imagery only when tied to the active record; otherwise let typography and rules carry the layout.

## Unique components and signature effects

1. **Numbered impact ledger.** Use pale zinc panels, strict borders and large index/impact statements; reveal supporting action text through opacity rather than changing geometry.
   - **Use it for:** making achievements feel systematic and auditable
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Low-opacity icon pattern

[Open the exact implementation (lines 39–45)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/experience-section/impact-experience.tsx#L39-L45) — Repeated icons at low opacity create a branded texture without competing with foreground content.

### 2. Low-opacity icon pattern

[Open the exact implementation (lines 46–52)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/experience-section/impact-experience.tsx#L46-L52) — Repeated icons at low opacity create a branded texture without competing with foreground content.

### 3. Low-opacity icon pattern

[Open the exact implementation (lines 53–59)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/experience-section/impact-experience.tsx#L53-L59) — Repeated icons at low opacity create a branded texture without competing with foreground content.
<!-- source-audit:end -->

## Buttons

Use text arrows or compact icon controls, with the accent appearing only on the active or actionable item.

## Motion and interaction states

Entry reveals follow chronology; active-item transitions may crossfade, but layout position should remain predictable.

## Rules for extending this design

1. Carry the **Numbered impact ledger** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
