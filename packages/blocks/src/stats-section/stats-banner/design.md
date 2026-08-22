# Stats Banner — Design System

> Use this file as the complete visual and implementation brief for extending the `stats-banner` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/stats-section/stats-banner.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/stats-banner.tsx) — the canonical block source and the exact effect composition

## Required libraries and primitives

- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Blue glass metric banner defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Numbers are the display typography; labels remain compact and muted, with descriptions clearly subordinate. The source’s concrete type anchors are `text-5xl`, `font-semibold`, `text-lg`, `text-7xl`, `text-8xl`, `text-xl`, `text-2xl`, `font-medium`, `text-4xl`, `text-base`.

## Palette and contrast

Core palette: `from-slate-50`, `to-white`, `text-slate-900`, `text-slate-600`, `shadow-blue-500/20`, `bg-blue-300`, `bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Align figures to a shared grid or bento baseline; prevent animated numbers from causing width shifts and stack cleanly on mobile.

## Background construction

Layer a white line grid, oversized blurred blue orb and white-to-blue surface gradient; float metric cards with blue shadow halos and a gentle scale entrance.

## Imagery and iconography

Prefer charts, sparklines and abstract data marks over stock photography; icons remain secondary to figures.

## Unique components and signature effects

1. **Blue glass metric banner.** Layer a white line grid, oversized blurred blue orb and white-to-blue surface gradient; float metric cards with blue shadow halos and a gentle scale entrance.
   - **Use it for:** making summary numbers feel luminous and optimistic
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Motion-driven behavior

[Open the exact implementation (lines 4–13)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/stats-banner.tsx#L4-L13) — The motion configuration controls the effect’s timing, position, and interaction response.

### 2. Motion-driven behavior

[Open the exact implementation (lines 14–21)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/stats-banner.tsx#L14-L21) — The motion configuration controls the effect’s timing, position, and interaction response.

### 3. Motion-driven behavior

[Open the exact implementation (lines 48–57)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/stats-banner.tsx#L48-L57) — The motion configuration controls the effect’s timing, position, and interaction response.
<!-- source-audit:end -->

## Buttons

Use buttons only for drill-down or a final CTA; style them as a continuation of the surrounding surface.

## Motion and interaction states

Animate values once on entry and make hover effects explanatory, not celebratory.

## Rules for extending this design

1. Carry the **Blue glass metric banner** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
