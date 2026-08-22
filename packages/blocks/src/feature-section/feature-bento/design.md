# Feature Bento — Design System

> Use this file as the complete visual and implementation brief for extending the `feature-bento` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/feature-section/feature-bento.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-bento.tsx) — the canonical block source and the exact effect composition

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.

## Design thesis

Electric bento atmosphere defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `font-manrope`, `text-sm`, `font-medium`, `text-5xl`, `font-bold`, `tracking-tight`, `text-lg`, `text-2xl`, `text-4xl`, `font-black`.

## Palette and contrast

Core palette: `bg-slate-50`, `from-blue-100`, `via-blue-600`, `to-blue-500`, `bg-green-400`, `from-blue-300`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.

## Background construction

Vary card spans and surface colors; layer blue gradient blobs with 2xl/3xl blur, photographic overlays, glass chips, and an icon that rotates 45° while the card subtly scales.

## Imagery and iconography

Favor product crops, diagrams, or symbolic line icons; each should explain the capability rather than decorate it.

## Unique components and signature effects

1. **Electric bento atmosphere.** Vary card spans and surface colors; layer blue gradient blobs with 2xl/3xl blur, photographic overlays, glass chips, and an icon that rotates 45° while the card subtly scales.
   - **Use it for:** giving each capability a distinct miniature world inside one grid
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Translucent glass layer

[Open the exact implementation (lines 58–69)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-bento.tsx#L58-L69) — Blur, transparency, border, and stacking work together as one glass treatment.

### 2. Low-opacity icon pattern

[Open the exact implementation (lines 76–88)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-bento.tsx#L76-L88) — Repeated icons at low opacity create a branded texture without competing with foreground content.

### 3. Depth and glow treatment

[Open the exact implementation (lines 92–98)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-bento.tsx#L92-L98) — These exact shadows and blur layers distinguish foreground from atmosphere.
<!-- source-audit:end -->

## Buttons

Primary actions use the accent fill; card-level actions are compact arrows or icon controls and must visibly respond on hover.

## Motion and interaction states

Reveal secondary layers on group hover and keep transforms small so the grid remains stable.

## Rules for extending this design

1. Carry the **Electric bento atmosphere** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
