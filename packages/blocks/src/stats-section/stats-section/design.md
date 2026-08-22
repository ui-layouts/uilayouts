# Stats Section — Design System

> Use this file as the complete visual and implementation brief for extending the `stats-section` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/stats-section/stats-section.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/stats-section.tsx) — the canonical block source and the exact effect composition

## Required libraries and primitives

- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Violet radial metric field defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Numbers are the display typography; labels remain compact and muted, with descriptions clearly subordinate. The source’s concrete type anchors are `text-xs`, `font-semibold`, `text-6xl`, `text-7xl`, `font-bold`, `font-dmSans`, `tracking-tighter`, `leading-none`, `text-5xl`, `text-sm`.

## Palette and contrast

Core palette: `bg-neutral-950`, `text-white`, `bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(102,51,238,1)_100%)]`, `border-zinc-800`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Align figures to a shared grid or bento baseline; prevent animated numbers from causing width shifts and stack cleanly on mobile.

## Background construction

Use neutral-950 with a violet radial horizon and a broad 3xl blur; reveal a subtle white/15 card gradient only on hover while number counters animate.

## Imagery and iconography

Prefer charts, sparklines and abstract data marks over stock photography; icons remain secondary to figures.

## Unique components and signature effects

1. **Violet radial metric field.** Use neutral-950 with a violet radial horizon and a broad 3xl blur; reveal a subtle white/15 card gradient only on hover while number counters animate.
   - **Use it for:** giving core metrics a quiet cosmic glow
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Radial background field

[Open the exact implementation (lines 12–22)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/stats-section.tsx#L12-L22) — The gradient’s focal point, stops, and layer position establish the block’s backdrop.

### 2. Motion-driven behavior

[Open the exact implementation (lines 25–31)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/stats-section.tsx#L25-L31) — The motion configuration controls the effect’s timing, position, and interaction response.

### 3. Low-opacity icon pattern

[Open the exact implementation (lines 48–54)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/stats-section.tsx#L48-L54) — Repeated icons at low opacity create a branded texture without competing with foreground content.
<!-- source-audit:end -->

## Buttons

Use buttons only for drill-down or a final CTA; style them as a continuation of the surrounding surface.

## Motion and interaction states

Animate values once on entry and make hover effects explanatory, not celebratory.

## Rules for extending this design

1. Carry the **Violet radial metric field** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
