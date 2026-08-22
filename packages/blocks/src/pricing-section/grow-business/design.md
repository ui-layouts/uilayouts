# Grow Business — Design System

> Use this file as the complete visual and implementation brief for extending the `pricing-grow-business` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/pricing-section/grow-business.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/pricing-section/grow-business.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/lib/utils.ts`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/lib/utils.ts) — the class-merging utility
- [`apps/ui-layout/components/ui/timeline-animation.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/timeline-animation.tsx) — the scroll-triggered stagger primitive used to sequence the block
- [`packages/shadcn/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/shadcn/src/index.tsx) — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@number-flow/react** (external) — animates changing numeric price and metric values. Install with `pnpm add @number-flow/react`.
- **@/lib/utils** (repository primitive) — the class-merging utility. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **@/components/ui/timeline-animation** (repository primitive) — the scroll-triggered stagger primitive used to sequence the block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Lime growth tiers defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Prices are large and tabular-looking; plan names are medium weight, descriptions muted, and feature lists compact. The source’s concrete type anchors are `font-dmSans`, `text-4xl`, `font-semibold`, `tracking-tight`, `text-sm`, `text-xs`, `font-bold`, `text-lg`, `text-2xl`, `font-medium`.

## Palette and contrast

Core palette: `bg-slate-100`, `text-black`, `text-neutral-500`, `bg-lime-100`, `border-lime-400`, `bg-lime-500`, `text-lime-600`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Keep tier cards comparable with aligned prices, features and CTAs; featured-tier offset must disappear safely on mobile.

## Background construction

Use lime-500/100 on the recommended plan, neutral-950 for premium contrast and green for positive proof; allow only a restrained neutral hover shadow.

## Imagery and iconography

Use tiny product icons or abstract glow only; never distract from price, billing period and included features.

## Unique components and signature effects

1. **Lime growth tiers.** Use lime-500/100 on the recommended plan, neutral-950 for premium contrast and green for positive proof; allow only a restrained neutral hover shadow.
   - **Use it for:** associating plan progression with visible growth
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Structural border treatment

[Open the exact implementation (lines 81–87)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/pricing-section/grow-business.tsx#L81-L87) — The border placement creates the block’s visual grouping and alignment.

### 2. Depth and glow treatment

[Open the exact implementation (lines 131–138)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/pricing-section/grow-business.tsx#L131-L138) — These exact shadows and blur layers distinguish foreground from atmosphere.

### 3. Depth and glow treatment

[Open the exact implementation (lines 178–185)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/pricing-section/grow-business.tsx#L178-L185) — These exact shadows and blur layers distinguish foreground from atmosphere.
<!-- source-audit:end -->

## Buttons

Use full-width, high-contrast CTAs with real press feedback; featured plans own the accent while secondary plans stay neutral.

## Motion and interaction states

Animate numeric billing changes and press states; avoid gratuitous card movement that harms comparison.

## Rules for extending this design

1. Carry the **Lime growth tiers** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
