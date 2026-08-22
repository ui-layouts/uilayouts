# Clip Path — Design System

> Use this file as the complete visual and implementation brief for extending the `team-clippath` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/team-section/team-clippath.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-clippath.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/components/ui/timeline-animation.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/timeline-animation.tsx) — the scroll-triggered stagger primitive used to sequence the block

## Required libraries and primitives

- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **@/components/ui/timeline-animation** (repository primitive) — the scroll-triggered stagger primitive used to sequence the block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.

## Design thesis

Morphing portrait crop defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `text-5xl`, `font-semibold`, `text-2xl`, `text-lg`, `text-sm`.

## Palette and contrast

Core palette: `bg-neutral-100`, `text-neutral-900`, `text-neutral-600`, `from-black/70`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.

## Background construction

Crop portraits with animated CSS clipPath shapes, interpolate from softened/blurred silhouettes to clear images, and retain a black-to-transparent caption gradient.

## Imagery and iconography

Portraits are the visual core. Preserve deliberate grayscale, crop, overlay, and color-reveal treatment across new people.

## Unique components and signature effects

1. **Morphing portrait crop.** Crop portraits with animated CSS clipPath shapes, interpolate from softened/blurred silhouettes to clear images, and retain a black-to-transparent caption gradient.
   - **Use it for:** making team discovery feel art-directed and fluid
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Motion-driven behavior

[Open the exact implementation (lines 71–77)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-clippath.tsx#L71-L77) — The motion configuration controls the effect’s timing, position, and interaction response.

### 2. Motion-driven behavior

[Open the exact implementation (lines 121–130)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-clippath.tsx#L121-L130) — The motion configuration controls the effect’s timing, position, and interaction response.

### 3. Motion-driven behavior

[Open the exact implementation (lines 135–146)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-clippath.tsx#L135-L146) — The motion configuration controls the effect’s timing, position, and interaction response.
<!-- source-audit:end -->

## Buttons

Actions are compact social/contact controls derived from the accent; give each at least a 44px hit area.

## Motion and interaction states

Use group hover to connect portrait, name and action; also expose equivalent keyboard focus behavior.

## Rules for extending this design

1. Carry the **Morphing portrait crop** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
