# Customer Experience — Design System

> Use this file as the complete visual and implementation brief for extending the `customer-experience` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/experience-section/customer-experience.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/experience-section/customer-experience.tsx) — the canonical block source and the exact effect composition

## Required libraries and primitives

- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Orange image crossfade defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use editorial role/project titles, muted dates, and small categorical labels; keep chronology immediately scannable. The source’s concrete type anchors are `font-manrope`, `text-9xl`, `text-8xl`, `text-7xl`, `font-bold`, `font-spaceGrotesk`, `text-4xl`, `text-xl`.

## Palette and contrast

Core palette: `bg-orange-200`, `border-orange-500`, `text-orange-500`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Use a timeline, ledger, or accordion with aligned dates and content; collapse to a single reading column on mobile.

## Background construction

Use orange-500 rules and orange-200 support surfaces; crossfade/scale the customer image in sync with the selected story instead of sliding the entire layout.

## Imagery and iconography

Use project/customer imagery only when tied to the active record; otherwise let typography and rules carry the layout.

## Unique components and signature effects

1. **Orange image crossfade.** Use orange-500 rules and orange-200 support surfaces; crossfade/scale the customer image in sync with the selected story instead of sliding the entire layout.
   - **Use it for:** connecting each narrative to a distinct visual memory
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Structural border grid

[Open the exact implementation (lines 113–121)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/experience-section/customer-experience.tsx#L113-L121) — Shared border rails divide the page into aligned editorial bands.

### 2. Structural border treatment

[Open the exact implementation (lines 124–130)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/experience-section/customer-experience.tsx#L124-L130) — The border placement creates the block’s visual grouping and alignment.

### 3. Motion-driven behavior

[Open the exact implementation (lines 148–154)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/experience-section/customer-experience.tsx#L148-L154) — The motion configuration controls the effect’s timing, position, and interaction response.
<!-- source-audit:end -->

## Buttons

Use text arrows or compact icon controls, with the accent appearing only on the active or actionable item.

## Motion and interaction states

Entry reveals follow chronology; active-item transitions may crossfade, but layout position should remain predictable.

## Rules for extending this design

1. Carry the **Orange image crossfade** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
