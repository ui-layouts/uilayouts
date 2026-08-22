# Creative Experience — Design System

> Use this file as the complete visual and implementation brief for extending the `creative-experience` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/experience-section/creative-experience.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/experience-section/creative-experience.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/components/ui/timeline-animation.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/timeline-animation.tsx) — the scroll-triggered stagger primitive used to sequence the block
- [`packages/shadcn/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/shadcn/src/index.tsx) — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **@/components/ui/timeline-animation** (repository primitive) — the scroll-triggered stagger primitive used to sequence the block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Expandable creative accordion defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use editorial role/project titles, muted dates, and small categorical labels; keep chronology immediately scannable. The source’s concrete type anchors are `text-7xl`, `text-5xl`, `font-manrope`, `font-semibold`, `text-base`, `text-sm`, `text-xs`, `text-xl`, `font-normal`, `font-medium`.

## Palette and contrast

Core palette: `bg-zinc-100`, `border-neutral-300`, `bg-zinc-200`, `text-black`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Use a timeline, ledger, or accordion with aligned dates and content; collapse to a single reading column on mobile.

## Background construction

Use neutral paper panels and data-active icon rotations; blur/scale content from 95% into clarity, reveal supporting imagery and controls only for the active row.

## Imagery and iconography

Use project/customer imagery only when tied to the active record; otherwise let typography and rules carry the layout.

## Unique components and signature effects

1. **Expandable creative accordion.** Use neutral paper panels and data-active icon rotations; blur/scale content from 95% into clarity, reveal supporting imagery and controls only for the active row.
   - **Use it for:** turning a timeline into an exploratory editorial interaction
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Structural border treatment

[Open the exact implementation (lines 90–100)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/experience-section/creative-experience.tsx#L90-L100) — The border placement creates the block’s visual grouping and alignment.

### 2. Low-opacity icon pattern

[Open the exact implementation (lines 102–109)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/experience-section/creative-experience.tsx#L102-L109) — Repeated icons at low opacity create a branded texture without competing with foreground content.
<!-- source-audit:end -->

## Buttons

Use text arrows or compact icon controls, with the accent appearing only on the active or actionable item.

## Motion and interaction states

Entry reveals follow chronology; active-item transitions may crossfade, but layout position should remain predictable.

## Rules for extending this design

1. Carry the **Expandable creative accordion** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
