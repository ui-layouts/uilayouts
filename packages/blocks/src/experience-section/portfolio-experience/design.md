# Portfolio Experience — Design System

> Use this file as the complete visual and implementation brief for extending the `portfolio-experience` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/experience-section/portfolio-experience.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/experience-section/portfolio-experience.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/lib/utils.ts`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/lib/utils.ts) — the class-merging utility

## Required libraries and primitives

- **@/lib/utils** (repository primitive) — the class-merging utility. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Violet career portfolio defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use editorial role/project titles, muted dates, and small categorical labels; keep chronology immediately scannable. The source’s concrete type anchors are `text-4xl`, `font-bold`, `leading-tight`, `tracking-tight`, `text-sm`, `tracking-widest`, `font-medium`, `text-xs`, `tracking-tighter`, `text-lg`.

## Palette and contrast

Core palette: `border-gray-200`, `text-gray-900`, `text-violet-600`, `text-gray-400`, `border-violet-100`, `border-violet-600`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Use a timeline, ledger, or accordion with aligned dates and content; collapse to a single reading column on mobile.

## Background construction

Use a bright white résumé grid with violet rules and tiny metadata; animate entries with high-scale/opacity staging while retaining editorial restraint.

## Imagery and iconography

Use project/customer imagery only when tied to the active record; otherwise let typography and rules carry the layout.

## Unique components and signature effects

1. **Violet career portfolio.** Use a bright white résumé grid with violet rules and tiny metadata; animate entries with high-scale/opacity staging while retaining editorial restraint.
   - **Use it for:** blending portfolio personality with professional chronology
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Motion-driven behavior

[Open the exact implementation (lines 29–35)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/experience-section/portfolio-experience.tsx#L29-L35) — The motion configuration controls the effect’s timing, position, and interaction response.

### 2. Structural border treatment

[Open the exact implementation (lines 107–113)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/experience-section/portfolio-experience.tsx#L107-L113) — The border placement creates the block’s visual grouping and alignment.

### 3. Motion-driven behavior

[Open the exact implementation (lines 145–151)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/experience-section/portfolio-experience.tsx#L145-L151) — The motion configuration controls the effect’s timing, position, and interaction response.
<!-- source-audit:end -->

## Buttons

Use text arrows or compact icon controls, with the accent appearing only on the active or actionable item.

## Motion and interaction states

Entry reveals follow chronology; active-item transitions may crossfade, but layout position should remain predictable.

## Rules for extending this design

1. Carry the **Violet career portfolio** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
