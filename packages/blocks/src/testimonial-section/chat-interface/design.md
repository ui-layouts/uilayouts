# Chat Interface — Design System

> Use this file as the complete visual and implementation brief for extending the `chat-interface-testimonial` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/testimonial-section/chat-interface.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/testimonial-section/chat-interface.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/lib/utils.ts`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/lib/utils.ts) — the class-merging utility

## Required libraries and primitives

- **@/lib/utils** (repository primitive) — the class-merging utility. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Conversation over sunrise grid defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Quotes use generous readable type; names, roles and ratings use a compact supporting scale with obvious hierarchy. The source’s concrete type anchors are `font-manrope`, `text-5xl`, `font-bold`, `tracking-tight`, `text-lg`, `text-2xl`, `leading-relaxed`, `font-semibold`, `text-sm`, `text-xl`.

## Palette and contrast

Core palette: `bg-zinc-400`, `bg-zinc-100`, `text-zinc-900`, `text-zinc-600`, `bg-green-100`, `text-green-600`, `bg-blue-100`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Keep a stable reading width even when cards move; on mobile show one primary quote and retain clear navigation.

## Background construction

Place chat bubbles on a fine light grid that dissolves into a yellow radial horizon; use pastel avatar bubbles, green presence, and staged scale/opacity message arrivals.

## Imagery and iconography

Use consistent avatar crops and genuine product/chat context; stars or platform marks are supporting evidence.

## Unique components and signature effects

1. **Conversation over sunrise grid.** Place chat bubbles on a fine light grid that dissolves into a yellow radial horizon; use pastel avatar bubbles, green presence, and staged scale/opacity message arrivals.
   - **Use it for:** turning testimonials into an unfolding support conversation
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Motion-driven behavior

[Open the exact implementation (lines 69–78)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/testimonial-section/chat-interface.tsx#L69-L78) — The motion configuration controls the effect’s timing, position, and interaction response.

### 2. Border-led structure

[Open the exact implementation (lines 138–148)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/testimonial-section/chat-interface.tsx#L138-L148) — Hairline borders establish grouping and rhythm without relying on filled cards.

### 3. Radial background field

[Open the exact implementation (lines 474–481)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/testimonial-section/chat-interface.tsx#L474-L481) — The gradient’s focal point, stops, and layer position establish the block’s backdrop.
<!-- source-audit:end -->

## Buttons

Navigation is compact, high-contrast and tactile; testimonial cards themselves are not buttons unless explicitly interactive.

## Motion and interaction states

Use spring or carousel motion to explain reordering; respect reduced motion and never animate while a user is reading unexpectedly.

## Rules for extending this design

1. Carry the **Conversation over sunrise grid** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
