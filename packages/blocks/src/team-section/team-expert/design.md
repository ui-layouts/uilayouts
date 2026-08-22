# Expert — Design System

> Use this file as the complete visual and implementation brief for extending the `team-expert` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/team-section/team-expert.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-expert.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/components/ui/timeline-animation.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/timeline-animation.tsx) — the scroll-triggered stagger primitive used to sequence the block

## Required libraries and primitives

- **@/components/ui/timeline-animation** (repository primitive) — the scroll-triggered stagger primitive used to sequence the block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Orange expertise cards defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `text-lg`, `font-spaceGrotesk`, `font-bold`, `text-sm`, `text-4xl`, `font-light`, `leading-relaxed`, `text-2xl`, `font-semibold`.

## Palette and contrast

Core palette: `bg-white`, `border-neutral-100`, `bg-orange-500`, `text-orange-50`, `bg-orange-100`, `border-orange-200`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.

## Background construction

Use orange #FF6B00 for badges, icon blocks and emphasis; allow portraits/icons to scale slightly while cards gain orange-tinted 2xl elevation and arrows travel right.

## Imagery and iconography

Portraits are the visual core. Preserve deliberate grayscale, crop, overlay, and color-reveal treatment across new people.

## Unique components and signature effects

1. **Orange expertise cards.** Use orange #FF6B00 for badges, icon blocks and emphasis; allow portraits/icons to scale slightly while cards gain orange-tinted 2xl elevation and arrows travel right.
   - **Use it for:** making specialists feel energetic and directly accessible
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Depth and glow treatment

[Open the exact implementation (lines 46–54)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-expert.tsx#L46-L54) — These exact shadows and blur layers distinguish foreground from atmosphere.

### 2. Depth and glow treatment

[Open the exact implementation (lines 92–115)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-expert.tsx#L92-L115) — These exact shadows and blur layers distinguish foreground from atmosphere.
<!-- source-audit:end -->

## Buttons

Actions are compact social/contact controls derived from the accent; give each at least a 44px hit area.

## Motion and interaction states

Use group hover to connect portrait, name and action; also expose equivalent keyboard focus behavior.

## Rules for extending this design

1. Carry the **Orange expertise cards** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
