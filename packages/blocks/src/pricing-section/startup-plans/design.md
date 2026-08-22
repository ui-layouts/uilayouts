# Startup Plans — Design System

> Use this file as the complete visual and implementation brief for extending the `startup-plans` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/pricing-section/startup-plans.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/pricing-section/startup-plans.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/components/ui/timeline-animation.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/timeline-animation.tsx) — the scroll-triggered stagger primitive used to sequence the block
- [`packages/shadcn/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/shadcn/src/index.tsx) — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **@/components/ui/timeline-animation** (repository primitive) — the scroll-triggered stagger primitive used to sequence the block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Industrial startup pricing defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Prices are large and tabular-looking; plan names are medium weight, descriptions muted, and feature lists compact. The source’s concrete type anchors are `font-dmSans`, `text-4xl`, `text-5xl`, `font-semibold`, `tracking-tight`, `leading-relaxed`, `text-xs`, `tracking-widest`, `font-medium`, `font-bold`.

## Palette and contrast

Core palette: `bg-neutral-100/50`, `text-neutral-500`, `bg-white`, `border-neutral-200`, `bg-blue-500/40`, `bg-blue-500/50`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Keep tier cards comparable with aligned prices, features and CTAs; featured-tier offset must disappear safely on mobile.

## Background construction

Use neutral-950 cards with orange selection accents and blue blurred atmosphere; construct CTA wells with opposing inset dark/light shadows and compress to 98% on press.

## Imagery and iconography

Use tiny product icons or abstract glow only; never distract from price, billing period and included features.

## Unique components and signature effects

1. **Industrial startup pricing.** Use neutral-950 cards with orange selection accents and blue blurred atmosphere; construct CTA wells with opposing inset dark/light shadows and compress to 98% on press.
   - **Use it for:** making plans feel like controls on a high-end device
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Depth and glow treatment

[Open the exact implementation (lines 38–46)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/pricing-section/startup-plans.tsx#L38-L46) — These exact shadows and blur layers distinguish foreground from atmosphere.

### 2. Custom elevation recipe

[Open the exact implementation (lines 83–89)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/pricing-section/startup-plans.tsx#L83-L89) — The nonstandard shadow values create the block’s characteristic depth.

### 3. Custom elevation recipe

[Open the exact implementation (lines 147–153)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/pricing-section/startup-plans.tsx#L147-L153) — The nonstandard shadow values create the block’s characteristic depth.
<!-- source-audit:end -->

## Buttons

Use full-width, high-contrast CTAs with real press feedback; featured plans own the accent while secondary plans stay neutral.

## Motion and interaction states

Animate numeric billing changes and press states; avoid gratuitous card movement that harms comparison.

## Rules for extending this design

1. Carry the **Industrial startup pricing** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
