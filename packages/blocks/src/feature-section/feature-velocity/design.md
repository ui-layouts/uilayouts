# Feature Velocity — Design System

> Use this file as the complete visual and implementation brief for extending the `feature-velocity` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/feature-section/feature-velocity.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-velocity.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/lib/utils.ts`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/lib/utils.ts) — the class-merging utility

## Required libraries and primitives

- **@/lib/utils** (repository primitive) — the class-merging utility. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Dark velocity beams defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `font-dmSans`, `text-5xl`, `text-7xl`, `font-black`, `tracking-tighter`, `leading-none`, `font-mono`, `text-sm`, `leading-relaxed`, `tracking-widest`.

## Palette and contrast

Core palette: `bg-black`, `bg-[repeating-linear-gradient(45deg,#252525_0px_1px,transparent_1px_8px)]`, `border-neutral-800`, `text-white`, `from-violet-500/20`, `from-emerald-500/20`, `from-blue-500/20`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.

## Background construction

Use a neutral-950 field with fine diagonal pinstripes; give each card a masked blue, emerald, or violet glow that fades from the top and only becomes visible on group hover.

## Imagery and iconography

Favor product crops, diagrams, or symbolic line icons; each should explain the capability rather than decorate it.

## Unique components and signature effects

1. **Dark velocity beams.** Use a neutral-950 field with fine diagonal pinstripes; give each card a masked blue, emerald, or violet glow that fades from the top and only becomes visible on group hover.
   - **Use it for:** suggesting speed and technical energy without persistent visual noise
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Radial background field

[Open the exact implementation (lines 5–13)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-velocity.tsx#L5-L13) — The gradient’s focal point, stops, and layer position establish the block’s backdrop.

### 2. Low-opacity icon pattern

[Open the exact implementation (lines 42–52)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-velocity.tsx#L42-L52) — Repeated icons at low opacity create a branded texture without competing with foreground content.
<!-- source-audit:end -->

## Buttons

Primary actions use the accent fill; card-level actions are compact arrows or icon controls and must visibly respond on hover.

## Motion and interaction states

Reveal secondary layers on group hover and keep transforms small so the grid remains stable.

## Rules for extending this design

1. Carry the **Dark velocity beams** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
