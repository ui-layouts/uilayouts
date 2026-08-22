# About e-commerse — Design System

> Use this file as the complete visual and implementation brief for extending the `about-ecommerse` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/about-section/about-ecommerse.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-ecommerse.tsx) — the canonical block source and the exact effect composition

## Required libraries and primitives

- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Warm editorial reveal defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `text-xs`, `font-bold`, `text-5xl`, `text-6xl`, `font-serif`, `text-lg`, `leading-relaxed`, `text-sm`.

## Palette and contrast

Core palette: `bg-orange-50`, `text-orange-950`, `bg-orange-800/20`, `text-orange-800/60`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.

## Background construction

Use orange-50 as a quiet wash, oversized orange typography at reduced opacity behind the story, and gently scaling content/image reveals.

## Imagery and iconography

Use documentary portraits, work samples, or brand proof; preserve the source crop and color-to-grayscale behavior.

## Unique components and signature effects

1. **Warm editorial reveal.** Use orange-50 as a quiet wash, oversized orange typography at reduced opacity behind the story, and gently scaling content/image reveals.
   - **Use it for:** introducing a commerce brand with warmth instead of dashboard chrome
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Motion-driven behavior

[Open the exact implementation (lines 6–12)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-ecommerse.tsx#L6-L12) — The motion configuration controls the effect’s timing, position, and interaction response.

### 2. Motion-driven behavior

[Open the exact implementation (lines 26–32)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-ecommerse.tsx#L26-L32) — The motion configuration controls the effect’s timing, position, and interaction response.
<!-- source-audit:end -->

## Buttons

Use one decisive filled CTA and a lower-emphasis text/outline action; buttons should never compete with imagery.

## Motion and interaction states

Stagger story elements gently; image reveals and hover states should feel editorial rather than app-like.

## Rules for extending this design

1. Carry the **Warm editorial reveal** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
