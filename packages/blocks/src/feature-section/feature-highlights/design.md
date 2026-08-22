# Feature Highlights — Design System

> Use this file as the complete visual and implementation brief for extending the `feature-highlights` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/feature-section/feature-highlights.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-highlights.tsx) — the canonical block source and the exact effect composition

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.

## Design thesis

Black spotlight strip defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `font-dmSans`, `text-sm`, `font-bold`, `tracking-widest`, `text-5xl`, `tracking-tight`, `text-2xl`, `leading-relaxed`, `font-medium`.

## Palette and contrast

Core palette: `bg-black`, `text-pink-500`, `text-white`, `border-neutral-800`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.

## Background construction

Keep the surface nearly black, typography white/slate, and use pink as the only high-energy accent; crop product visuals aggressively and scale the active highlight rather than decorating every item.

## Imagery and iconography

Favor product crops, diagrams, or symbolic line icons; each should explain the capability rather than decorate it.

## Unique components and signature effects

1. **Black spotlight strip.** Keep the surface nearly black, typography white/slate, and use pink as the only high-energy accent; crop product visuals aggressively and scale the active highlight rather than decorating every item.
   - **Use it for:** directing attention through strong contrast and one accent
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Structural border treatment

[Open the exact implementation (lines 35–41)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-highlights.tsx#L35-L41) — The border placement creates the block’s visual grouping and alignment.

### 2. Source-specific visual behavior

[Open the exact implementation (lines 46–52)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/feature-section/feature-highlights.tsx#L46-L52) — This source fragment contains a high-signal visual or interaction decision unique to the block.
<!-- source-audit:end -->

## Buttons

Primary actions use the accent fill; card-level actions are compact arrows or icon controls and must visibly respond on hover.

## Motion and interaction states

Reveal secondary layers on group hover and keep transforms small so the grid remains stable.

## Rules for extending this design

1. Carry the **Black spotlight strip** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
