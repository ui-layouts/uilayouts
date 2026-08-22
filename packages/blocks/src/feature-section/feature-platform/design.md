# Feature Platform — Design System

> Use this file as the complete visual and implementation brief for extending the `feature-platform` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/feature-section/feature-platform.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-platform.tsx) — the canonical block source and the exact effect composition
- [`packages/shadcn/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/shadcn/src/index.tsx) — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.

## Design thesis

Connected platform map defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `font-dmSans`, `text-4xl`, `font-bold`, `leading-tight`, `text-sm`, `leading-relaxed`, `text-xl`, `tracking-tight`, `text-lg`.

## Palette and contrast

Core palette: `bg-slate-50`, `text-slate-900`, `text-slate-500`, `bg-white`, `bg-emerald-500`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.

## Background construction

Arrange white/slate capability panels around a central black platform node; emerald marks successful connections while low-opacity connector geometry provides structure.

## Imagery and iconography

Favor product crops, diagrams, or symbolic line icons; each should explain the capability rather than decorate it.

## Unique components and signature effects

1. **Connected platform map.** Arrange white/slate capability panels around a central black platform node; emerald marks successful connections while low-opacity connector geometry provides structure.
   - **Use it for:** showing independent tools as parts of one system
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Low-opacity icon pattern

[Open the exact implementation (lines 89–95)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-platform.tsx#L89-L95) — Repeated icons at low opacity create a branded texture without competing with foreground content.
<!-- source-audit:end -->

## Buttons

Primary actions use the accent fill; card-level actions are compact arrows or icon controls and must visibly respond on hover.

## Motion and interaction states

Reveal secondary layers on group hover and keep transforms small so the grid remains stable.

## Rules for extending this design

1. Carry the **Connected platform map** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
