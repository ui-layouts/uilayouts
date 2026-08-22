# Feature Nature — Design System

> Use this file as the complete visual and implementation brief for extending the `feature-nature` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/feature-section/feature-nature.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-nature.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/lib/utils.ts`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/lib/utils.ts) — the class-merging utility
- [`packages/shadcn/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/shadcn/src/index.tsx) — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@/lib/utils** (repository primitive) — the class-merging utility. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Editorial forest contrast defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `text-3xl`, `font-bold`, `leading-tight`, `text-lg`, `font-dmSans`, `text-5xl`, `text-6xl`, `text-xl`, `font-semibold`.

## Palette and contrast

Core palette: `bg-emerald-950`, `border-emerald-950`, `text-white`, `bg-white`, `border-emerald-100`, `text-emerald-400`, `text-emerald-900`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.

## Background construction

Pair bright paper cards with a deep emerald feature panel; use natural photography, emerald borders and muted moss text, with restrained 2xl depth rather than neon decoration.

## Imagery and iconography

Favor product crops, diagrams, or symbolic line icons; each should explain the capability rather than decorate it.

## Unique components and signature effects

1. **Editorial forest contrast.** Pair bright paper cards with a deep emerald feature panel; use natural photography, emerald borders and muted moss text, with restrained 2xl depth rather than neon decoration.
   - **Use it for:** communicating sustainability and calm premium quality
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Depth and glow treatment

[Open the exact implementation (lines 18–27)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-nature.tsx#L18-L27) — These exact shadows and blur layers distinguish foreground from atmosphere.

### 2. Source-specific visual behavior

[Open the exact implementation (lines 45–52)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-nature.tsx#L45-L52) — This source fragment contains a high-signal visual or interaction decision unique to the block.
<!-- source-audit:end -->

## Buttons

Primary actions use the accent fill; card-level actions are compact arrows or icon controls and must visibly respond on hover.

## Motion and interaction states

Reveal secondary layers on group hover and keep transforms small so the grid remains stable.

## Rules for extending this design

1. Carry the **Editorial forest contrast** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
