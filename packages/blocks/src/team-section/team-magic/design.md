# Magic — Design System

> Use this file as the complete visual and implementation brief for extending the `team-magic` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/team-section/team-magic.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-magic.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/components/ui/timeline-animation.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/timeline-animation.tsx) — the scroll-triggered stagger primitive used to sequence the block
- [`packages/shadcn/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/shadcn/src/index.tsx) — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@/components/ui/timeline-animation** (repository primitive) — the scroll-triggered stagger primitive used to sequence the block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Cyan holographic profiles defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `text-6xl`, `font-spaceGrotesk`, `font-semibold`, `text-lg`, `leading-relaxed`, `text-2xl`, `font-bold`, `text-sm`, `text-xs`, `text-3xl`.

## Palette and contrast

Core palette: `bg-neutral-950`, `text-white`, `text-neutral-400`, `border-white/10`, `border-blue-500/50`, `text-blue-600`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.

## Background construction

Stage profiles on neutral-950 with white/5 glass, cyan #00D1FF edge light and backdrop blur; raise hidden profile details from y=4 while portraits zoom.

## Imagery and iconography

Portraits are the visual core. Preserve deliberate grayscale, crop, overlay, and color-reveal treatment across new people.

## Unique components and signature effects

1. **Cyan holographic profiles.** Stage profiles on neutral-950 with white/5 glass, cyan #00D1FF edge light and backdrop blur; raise hidden profile details from y=4 while portraits zoom.
   - **Use it for:** creating a futuristic reveal around each person
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Translucent glass layer

[Open the exact implementation (lines 81–96)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-magic.tsx#L81-L96) — Blur, transparency, border, and stacking work together as one glass treatment.

### 2. Structural border treatment

[Open the exact implementation (lines 109–115)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-magic.tsx#L109-L115) — The border placement creates the block’s visual grouping and alignment.

### 3. Structural border treatment

[Open the exact implementation (lines 123–132)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-magic.tsx#L123-L132) — The border placement creates the block’s visual grouping and alignment.
<!-- source-audit:end -->

## Buttons

Actions are compact social/contact controls derived from the accent; give each at least a 44px hit area.

## Motion and interaction states

Use group hover to connect portrait, name and action; also expose equivalent keyboard focus behavior.

## Rules for extending this design

1. Carry the **Cyan holographic profiles** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
