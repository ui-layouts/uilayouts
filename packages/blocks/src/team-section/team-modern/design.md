# Modern — Design System

> Use this file as the complete visual and implementation brief for extending the `team-modern` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/team-section/team-modern.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-modern.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/components/ui/timeline-animation.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/timeline-animation.tsx) — the scroll-triggered stagger primitive used to sequence the block
- [`packages/ui/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/ui/src/index.tsx) — the open-source workspace UI primitive barrel used by this block

## Required libraries and primitives

- **@repo/ui** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **@/components/ui/timeline-animation** (repository primitive) — the scroll-triggered stagger primitive used to sequence the block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Clean social team cards defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `text-xs`, `font-semibold`, `text-5xl`, `font-spaceGrotesk`, `font-bold`, `text-lg`, `leading-relaxed`, `text-xl`.

## Palette and contrast

Core palette: `bg-white`, `bg-green-50`, `text-green-700`, `text-neutral-900`, `bg-orange-500`, `shadow-orange-500`, `bg-orange-600`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.

## Background construction

Use white/neutral surfaces with orange avatar-action accents and green availability pills; scale images mildly and use a focused orange shadow only on the social action.

## Imagery and iconography

Portraits are the visual core. Preserve deliberate grayscale, crop, overlay, and color-reveal treatment across new people.

## Unique components and signature effects

1. **Clean social team cards.** Use white/neutral surfaces with orange avatar-action accents and green availability pills; scale images mildly and use a focused orange shadow only on the social action.
   - **Use it for:** balancing professional profiles with approachable contact cues
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Depth and glow treatment

[Open the exact implementation (lines 75–84)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-modern.tsx#L75-L84) — These exact shadows and blur layers distinguish foreground from atmosphere.

### 2. Structural border treatment

[Open the exact implementation (lines 88–94)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-modern.tsx#L88-L94) — The border placement creates the block’s visual grouping and alignment.

### 3. Source-specific visual behavior

[Open the exact implementation (lines 116–122)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-modern.tsx#L116-L122) — This source fragment contains a high-signal visual or interaction decision unique to the block.
<!-- source-audit:end -->

## Buttons

Actions are compact social/contact controls derived from the accent; give each at least a 44px hit area.

## Motion and interaction states

Use group hover to connect portrait, name and action; also expose equivalent keyboard focus behavior.

## Rules for extending this design

1. Carry the **Clean social team cards** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
