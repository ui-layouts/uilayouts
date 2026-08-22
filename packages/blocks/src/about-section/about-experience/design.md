# Experience — Design System

> Use this file as the complete visual and implementation brief for extending the `about-experience` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/about-section/about-experience.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-experience.tsx) — the canonical block source and the exact effect composition
- [`packages/shadcn/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/shadcn/src/index.tsx) — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Oxide-red heritage panel defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use editorial role/project titles, muted dates, and small categorical labels; keep chronology immediately scannable. The source’s concrete type anchors are `font-dmSans`, `text-5xl`, `font-bold`, `tracking-tight`, `text-xs`, `font-medium`, `tracking-widest`, `font-semibold`, `font-black`, `text-4xl`.

## Palette and contrast

Core palette: `bg-white`, `text-black`, `bg-black/60`, `text-white`, `text-red-500`, `bg-red-50`, `text-red-950`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Use a timeline, ledger, or accordion with aligned dates and content; collapse to a single reading column on mobile.

## Background construction

Center the story around #9c2e1f/red-900 imagery, place black/60 glass labels over photographs, and combine hover scale with deep red shadow.

## Imagery and iconography

Use project/customer imagery only when tied to the active record; otherwise let typography and rules carry the layout.

## Unique components and signature effects

1. **Oxide-red heritage panel.** Center the story around #9c2e1f/red-900 imagery, place black/60 glass labels over photographs, and combine hover scale with deep red shadow.
   - **Use it for:** making history and craft feel warm, weighty, and tactile
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Translucent glass layer

[Open the exact implementation (lines 12–27)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-experience.tsx#L12-L27) — Blur, transparency, border, and stacking work together as one glass treatment.

### 2. Motion-driven behavior

[Open the exact implementation (lines 36–42)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-experience.tsx#L36-L42) — The motion configuration controls the effect’s timing, position, and interaction response.

### 3. Motion-driven behavior

[Open the exact implementation (lines 47–55)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-experience.tsx#L47-L55) — The motion configuration controls the effect’s timing, position, and interaction response.
<!-- source-audit:end -->

## Buttons

Use text arrows or compact icon controls, with the accent appearing only on the active or actionable item.

## Motion and interaction states

Entry reveals follow chronology; active-item transitions may crossfade, but layout position should remain predictable.

## Rules for extending this design

1. Carry the **Oxide-red heritage panel** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
