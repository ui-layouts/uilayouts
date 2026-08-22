# Stack Testimonial — Design System

> Use this file as the complete visual and implementation brief for extending the `stack-testimonial` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/testimonial-section/stack-testimonial.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/testimonial-section/stack-testimonial.tsx) — the canonical block source and the exact effect composition
- [`packages/shadcn/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/shadcn/src/index.tsx) — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.

## Design thesis

Draggable card deck defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Quotes use generous readable type; names, roles and ratings use a compact supporting scale with obvious hierarchy. The source’s concrete type anchors are `font-manrope`, `text-5xl`, `font-bold`, `tracking-tight`, `text-lg`, `text-base`, `text-xs`, `font-medium`, `tracking-wider`, `text-sm`.

## Palette and contrast

Core palette: `from-zinc-50`, `to-white`, `text-zinc-900`, `text-zinc-600`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Keep a stable reading width even when cards move; on mobile show one primary quote and retain clear navigation.

## Background construction

Layer white testimonial cards at diminishing scale/offset with zinc shadows; the active card is draggable and reorders through spring motion, with yellow stars as the only accent.

## Imagery and iconography

Use consistent avatar crops and genuine product/chat context; stars or platform marks are supporting evidence.

## Unique components and signature effects

1. **Draggable card deck.** Layer white testimonial cards at diminishing scale/offset with zinc shadows; the active card is draggable and reorders through spring motion, with yellow stars as the only accent.
   - **Use it for:** making multiple voices feel like a tactile deck
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Source-specific visual behavior

[Open the exact implementation (lines 53–59)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/testimonial-section/stack-testimonial.tsx#L53-L59) — This source fragment contains a high-signal visual or interaction decision unique to the block.

### 2. Motion-driven behavior

[Open the exact implementation (lines 72–82)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/testimonial-section/stack-testimonial.tsx#L72-L82) — The motion configuration controls the effect’s timing, position, and interaction response.

### 3. Motion-driven behavior

[Open the exact implementation (lines 131–137)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/testimonial-section/stack-testimonial.tsx#L131-L137) — The motion configuration controls the effect’s timing, position, and interaction response.
<!-- source-audit:end -->

## Buttons

Navigation is compact, high-contrast and tactile; testimonial cards themselves are not buttons unless explicitly interactive.

## Motion and interaction states

Use spring or carousel motion to explain reordering; respect reduced motion and never animate while a user is reading unexpectedly.

## Rules for extending this design

1. Carry the **Draggable card deck** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
