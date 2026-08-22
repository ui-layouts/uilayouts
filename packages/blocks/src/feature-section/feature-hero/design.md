# Feature Hero — Design System

> Use this file as the complete visual and implementation brief for extending the `feature-hero` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/feature-section/feature-hero.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-hero.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/lib/utils.ts`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/lib/utils.ts) — the class-merging utility

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **@/lib/utils** (repository primitive) — the class-merging utility. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Masked blue horizon defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `font-dmSans`, `text-4xl`, `text-5xl`, `font-bold`, `tracking-tight`, `text-lg`, `text-xl`, `leading-relaxed`, `text-sm`.

## Palette and contrast

Core palette: `bg-white`, `bg-[repeating-linear-gradient(45deg,#f3f3f3_0px_1px,transparent_1px_8px)]`, `bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(50,97,237,1)_100%)]`, `text-slate-900`, `bg-blue-600`, `shadow-blue-200`, `bg-blue-50`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.

## Background construction

Combine a fine diagonal hatch with a bottom blue radial gradient, then mask it to fade before the content; raise the central product frame with a blue-tinted-xl shadow and a slight desktop scale.

## Imagery and iconography

Favor product crops, diagrams, or symbolic line icons; each should explain the capability rather than decorate it.

## Unique components and signature effects

1. **Masked blue horizon.** Combine a fine diagonal hatch with a bottom blue radial gradient, then mask it to fade before the content; raise the central product frame with a blue-tinted-xl shadow and a slight desktop scale.
   - **Use it for:** making one feature feel like a product launch moment
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Source-specific visual behavior

[Open the exact implementation (lines 1–5)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-hero.tsx#L1-L5) — This source fragment contains a high-signal visual or interaction decision unique to the block.

### 2. Source-specific visual behavior

[Open the exact implementation (lines 16–22)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-hero.tsx#L16-L22) — This source fragment contains a high-signal visual or interaction decision unique to the block.

### 3. Radial background field

[Open the exact implementation (lines 35–45)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-hero.tsx#L35-L45) — The gradient’s focal point, stops, and layer position establish the block’s backdrop.
<!-- source-audit:end -->

## Buttons

Primary actions use the accent fill; card-level actions are compact arrows or icon controls and must visibly respond on hover.

## Motion and interaction states

Reveal secondary layers on group hover and keep transforms small so the grid remains stable.

## Rules for extending this design

1. Carry the **Masked blue horizon** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
