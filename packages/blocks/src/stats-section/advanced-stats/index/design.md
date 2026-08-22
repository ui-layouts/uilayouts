# Advanced Stats — Design System

> Use this file as the complete visual and implementation brief for extending the `advanced-stats` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/stats-section/advanced-stats/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/advanced-stats/index.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/lib/utils.ts`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/lib/utils.ts) — the class-merging utility
- [`packages/blocks/src/stats-section/advanced-stats/charts.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/advanced-stats/charts.tsx) — a supporting module imported by the canonical block
- [`apps/ui-layout/components/ui/timeline-animation.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/timeline-animation.tsx) — the scroll-triggered stagger primitive used to sequence the block

## Required libraries and primitives

- **@/lib/utils** (repository primitive) — the class-merging utility. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **@/components/ui/timeline-animation** (repository primitive) — the scroll-triggered stagger primitive used to sequence the block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.
- **recharts** (external) — renders the chart geometry and data visualization. Install with `pnpm add recharts`.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Analytical chart cockpit defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Numbers are the display typography; labels remain compact and muted, with descriptions clearly subordinate. The source’s concrete type anchors are `font-dmSans`, `font-bold`, `text-xl`, `tracking-tight`, `text-3xl`, `font-semibold`, `tracking-tighter`, `text-xs`, `font-medium`, `text-sm`.

## Palette and contrast

Core palette: `bg-white`, `bg-zinc-50`, `border-zinc-200`, `bg-zinc-900`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Align figures to a shared grid or bento baseline; prevent animated numbers from causing width shifts and stack cleanly on mobile.

## Background construction

Use restrained white data cards, zinc labels and red exception states; animate Recharts lines/areas with SVG masks so charts draw into view and keep axes secondary.

## Imagery and iconography

Prefer charts, sparklines and abstract data marks over stock photography; icons remain secondary to figures.

## Unique components and signature effects

1. **Analytical chart cockpit.** Use restrained white data cards, zinc labels and red exception states; animate Recharts lines/areas with SVG masks so charts draw into view and keep axes secondary.
   - **Use it for:** turning dense operational data into a legible instrument panel
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Source-specific visual behavior

[Open the exact implementation (lines 1–7)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/advanced-stats/index.tsx#L1-L7) — This source fragment contains a high-signal visual or interaction decision unique to the block.

### 2. Border-led structure

[Open the exact implementation (lines 35–43)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/advanced-stats/index.tsx#L35-L43) — Hairline borders establish grouping and rhythm without relying on filled cards.

### 3. Border-led structure

[Open the exact implementation (lines 117–126)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/stats-section/advanced-stats/index.tsx#L117-L126) — Hairline borders establish grouping and rhythm without relying on filled cards.
<!-- source-audit:end -->

## Buttons

Use buttons only for drill-down or a final CTA; style them as a continuation of the surrounding surface.

## Motion and interaction states

Animate values once on entry and make hover effects explanatory, not celebratory.

## Rules for extending this design

1. Carry the **Analytical chart cockpit** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
