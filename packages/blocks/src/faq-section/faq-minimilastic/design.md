# Minimilastic — Design System

> Use this file as the complete visual and implementation brief for extending the `faq-minimilastic` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/faq-section/faq-minimilastic.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/faq-section/faq-minimilastic.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/components/ui/timeline-animation.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/timeline-animation.tsx) — the scroll-triggered stagger primitive used to sequence the block
- `packages/blocks/assets` — a supporting module imported by the canonical block
- [`packages/shadcn/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/shadcn/src/index.tsx) — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@/components/ui/timeline-animation** (repository primitive) — the scroll-triggered stagger primitive used to sequence the block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Blue radial minimal FAQ defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Questions are medium/semibold and answers are relaxed body text; category labels remain compact and muted. The source’s concrete type anchors are `text-2xl`, `text-4xl`, `font-medium`, `text-xl`, `text-lg`.

## Palette and contrast

Core palette: `bg-blue-50`, `text-blue-800`, `border-slate-200`, `bg-blue-100`, `bg-blue-800`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Keep question and answer alignment stable; split previews stack beneath questions on mobile and accordion controls span the row.

## Background construction

Keep white accordion rows over a pale blue radial corner glow; active plus icons rotate 45/90 degrees, with blue-800 reserved for the decisive action.

## Imagery and iconography

Use preview/product imagery when it clarifies answers; decorative scenery must remain behind a contrast layer.

## Unique components and signature effects

1. **Blue radial minimal FAQ.** Keep white accordion rows over a pale blue radial corner glow; active plus icons rotate 45/90 degrees, with blue-800 reserved for the decisive action.
   - **Use it for:** adding just enough energy to a minimal help section
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Radial background field

[Open the exact implementation (lines 86–92)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/faq-section/faq-minimilastic.tsx#L86-L92) — The gradient’s focal point, stops, and layer position establish the block’s backdrop.

### 2. Translucent glass layer

[Open the exact implementation (lines 104–118)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/faq-section/faq-minimilastic.tsx#L104-L118) — Blur, transparency, border, and stacking work together as one glass treatment.
<!-- source-audit:end -->

## Buttons

Use CTA styling only outside accordion rows; the entire question header is the disclosure button with visible focus.

## Motion and interaction states

Rotate plus/chevron indicators and reveal answer height/opacity; preserve keyboard controls and reduced-motion behavior.

## Rules for extending this design

1. Carry the **Blue radial minimal FAQ** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
