# Stats Details — Design System

> Use this file as the complete visual and implementation brief for extending the `stats-details` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/stats-section/stats-details.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/stats-details.tsx) — the canonical block source and the exact effect composition

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.

## Design thesis

Orange detail rail defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Numbers are the display typography; labels remain compact and muted, with descriptions clearly subordinate. The source’s concrete type anchors are `text-lg`, `font-bold`, `text-xs`, `tracking-widest`, `text-4xl`, `font-semibold`, `tracking-tight`, `text-sm`, `leading-relaxed`.

## Palette and contrast

Core palette: `bg-white`, `bg-zinc-50`, `border-zinc-100`, `border-zinc-200`, `bg-orange-600`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Align figures to a shared grid or bento baseline; prevent animated numbers from causing width shifts and stack cleanly on mobile.

## Background construction

Keep the main grid white with orange-600 as the section marker; reveal contextual actions by opacity on card hover rather than moving the entire surface.

## Imagery and iconography

Prefer charts, sparklines and abstract data marks over stock photography; icons remain secondary to figures.

## Unique components and signature effects

1. **Orange detail rail.** Keep the main grid white with orange-600 as the section marker; reveal contextual actions by opacity on card hover rather than moving the entire surface.
   - **Use it for:** pairing bold totals with readable supporting explanations
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Border-led structure

[Open the exact implementation (lines 30–48)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/stats-details.tsx#L30-L48) — Hairline borders establish grouping and rhythm without relying on filled cards.

### 2. Low-opacity icon pattern

[Open the exact implementation (lines 49–55)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/stats-details.tsx#L49-L55) — Repeated icons at low opacity create a branded texture without competing with foreground content.
<!-- source-audit:end -->

## Buttons

Use buttons only for drill-down or a final CTA; style them as a continuation of the surrounding surface.

## Motion and interaction states

Animate values once on entry and make hover effects explanatory, not celebratory.

## Rules for extending this design

1. Carry the **Orange detail rail** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
