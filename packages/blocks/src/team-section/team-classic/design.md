# Classic — Design System

> Use this file as the complete visual and implementation brief for extending the `team-classic` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/team-section/team-classic.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-classic.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/components/ui/timeline-animation.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/timeline-animation.tsx) — the scroll-triggered stagger primitive used to sequence the block
- [`apps/ui-layout/lib/utils.ts`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/lib/utils.ts) — the class-merging utility

## Required libraries and primitives

- **@/components/ui/timeline-animation** (repository primitive) — the scroll-triggered stagger primitive used to sequence the block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **@/lib/utils** (repository primitive) — the class-merging utility. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Floating profile note defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `text-5xl`, `font-cursive`, `text-sm`, `tracking-wide`, `text-xl`, `font-bold`, `tracking-wider`, `font-spaceGrotesk`, `font-medium`, `text-xs`.

## Palette and contrast

Core palette: `bg-[#FFF0F5]`, `text-neutral-800`, `text-neutral-500`, `bg-white`, `text-green-500`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.

## Background construction

Use a pale blush #FFF0F5 field and clean portrait grid; reveal a white elevated profile card above the image on hover with offset translation.

## Imagery and iconography

Portraits are the visual core. Preserve deliberate grayscale, crop, overlay, and color-reveal treatment across new people.

## Unique components and signature effects

1. **Floating profile note.** Use a pale blush #FFF0F5 field and clean portrait grid; reveal a white elevated profile card above the image on hover with offset translation.
   - **Use it for:** adding a friendly editorial surprise to a conventional team grid
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Structural border treatment

[Open the exact implementation (lines 101–107)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-classic.tsx#L101-L107) — The border placement creates the block’s visual grouping and alignment.

### 2. Low-opacity icon pattern

[Open the exact implementation (lines 112–118)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-classic.tsx#L112-L118) — Repeated icons at low opacity create a branded texture without competing with foreground content.

### 3. Source-specific visual behavior

[Open the exact implementation (lines 123–135)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/team-section/team-classic.tsx#L123-L135) — This source fragment contains a high-signal visual or interaction decision unique to the block.
<!-- source-audit:end -->

## Buttons

Actions are compact social/contact controls derived from the accent; give each at least a 44px hit area.

## Motion and interaction states

Use group hover to connect portrait, name and action; also expose equivalent keyboard focus behavior.

## Rules for extending this design

1. Carry the **Floating profile note** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
