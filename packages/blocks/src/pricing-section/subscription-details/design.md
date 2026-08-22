# Subscription Details — Design System

> Use this file as the complete visual and implementation brief for extending the `subscription-details` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/pricing-section/subscription-details.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/pricing-section/subscription-details.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/lib/utils.ts`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/lib/utils.ts) — the class-merging utility
- [`apps/ui-layout/components/ui/timeline-animation.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/timeline-animation.tsx) — the scroll-triggered stagger primitive used to sequence the block
- [`packages/shadcn/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/shadcn/src/index.tsx) — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@number-flow/react** (external) — animates changing numeric price and metric values. Install with `pnpm add @number-flow/react`.
- **@/lib/utils** (repository primitive) — the class-merging utility. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **@/components/ui/timeline-animation** (repository primitive) — the scroll-triggered stagger primitive used to sequence the block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Layered subscription glass defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Prices are large and tabular-looking; plan names are medium weight, descriptions muted, and feature lists compact. The source’s concrete type anchors are `font-dmSans`, `text-4xl`, `text-2xl`, `font-bold`, `text-sm`, `font-medium`, `tracking-wider`, `text-xl`, `font-semibold`, `leading-relaxed`.

## Palette and contrast

Core palette: `bg-white`, `text-black`, `bg-neutral-100`, `text-neutral-500`, `from-orange-500/20`, `via-pink-500/10`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Keep tier cards comparable with aligned prices, features and CTAs; featured-tier offset must disappear safely on mobile.

## Background construction

Place black and white plan slabs over an orange/20 blurred glow; use white/40 glass, backdrop blur, slight rotated decoration and layered sm-to-2xl shadows.

## Imagery and iconography

Use tiny product icons or abstract glow only; never distract from price, billing period and included features.

## Unique components and signature effects

1. **Layered subscription glass.** Place black and white plan slabs over an orange/20 blurred glow; use white/40 glass, backdrop blur, slight rotated decoration and layered sm-to-2xl shadows.
   - **Use it for:** creating premium depth while keeping plan details readable
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Depth and glow treatment

[Open the exact implementation (lines 122–128)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/pricing-section/subscription-details.tsx#L122-L128) — These exact shadows and blur layers distinguish foreground from atmosphere.

### 2. Translucent glass layer

[Open the exact implementation (lines 129–139)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/pricing-section/subscription-details.tsx#L129-L139) — Blur, transparency, border, and stacking work together as one glass treatment.

### 3. Depth and glow treatment

[Open the exact implementation (lines 178–187)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/pricing-section/subscription-details.tsx#L178-L187) — These exact shadows and blur layers distinguish foreground from atmosphere.
<!-- source-audit:end -->

## Buttons

Use full-width, high-contrast CTAs with real press feedback; featured plans own the accent while secondary plans stay neutral.

## Motion and interaction states

Animate numeric billing changes and press states; avoid gratuitous card movement that harms comparison.

## Rules for extending this design

1. Carry the **Layered subscription glass** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
