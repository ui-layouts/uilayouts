# Feature Flow — Design System

> Use this file as the complete visual and implementation brief for extending the `feature-flow` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/feature-section/feature-flow.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-flow.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/components/ui/carousel.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/carousel.tsx) — the carousel mechanics and navigation behavior

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@/components/ui/carousel** (repository primitive) — the carousel mechanics and navigation behavior. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **embla-carousel** (external) — provides an external primitive used by this effect. Install with `pnpm add embla-carousel`.
- **embla-carousel-react** (external) — provides an external primitive used by this effect. Install with `pnpm add embla-carousel-react`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Warm workflow carousel defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `font-manrope`, `font-bold`, `tracking-widest`, `text-5xl`, `tracking-tight`, `text-lg`, `text-sm`, `text-xl`, `leading-relaxed`.

## Palette and contrast

Core palette: `bg-white`, `bg-slate-50`, `text-slate-500`, `text-slate-900`, `text-orange-600`, `bg-orange-50/20`, `border-orange-100/50`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.

## Background construction

Set clean slate cards over a barely orange-tinted plane; use orange micro-labels and a horizontally advancing carousel with frosted navigation and a shadow increase on hover.

## Imagery and iconography

Favor product crops, diagrams, or symbolic line icons; each should explain the capability rather than decorate it.

## Unique components and signature effects

1. **Warm workflow carousel.** Set clean slate cards over a barely orange-tinted plane; use orange micro-labels and a horizontally advancing carousel with frosted navigation and a shadow increase on hover.
   - **Use it for:** explaining a sequence as approachable, inspectable steps
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Source-specific visual behavior

[Open the exact implementation (lines 6–12)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-flow.tsx#L6-L12) — This source fragment contains a high-signal visual or interaction decision unique to the block.

### 2. Carousel interaction primitive

[Open the exact implementation (lines 14–20)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-flow.tsx#L14-L20) — This component supplies the block’s distinctive navigation and content motion.

### 3. Translucent glass layer

[Open the exact implementation (lines 90–96)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-flow.tsx#L90-L96) — Blur, transparency, border, and stacking work together as one glass treatment.
<!-- source-audit:end -->

## Buttons

Primary actions use the accent fill; card-level actions are compact arrows or icon controls and must visibly respond on hover.

## Motion and interaction states

Reveal secondary layers on group hover and keep transforms small so the grid remains stable.

## Rules for extending this design

1. Carry the **Warm workflow carousel** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
