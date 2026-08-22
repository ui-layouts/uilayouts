# AI Ecommerce — Design System

> Use this file as the complete visual and implementation brief for extending the `hero-ai-ecommerce` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/hero-section/hero-ai-ecommerce.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/hero-section/hero-ai-ecommerce.tsx) — the canonical block source and the exact effect composition
- [`packages/blocks/assets/index.ts`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/assets/index.ts) — a supporting module imported by the canonical block
- [`apps/ui-layout/components/ui/timeline-animation.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/timeline-animation.tsx) — the scroll-triggered stagger primitive used to sequence the block
- [`apps/ui-layout/hooks/use-media-query.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/hooks/use-media-query.tsx) — the breakpoint hook that switches the mobile composition
- [`apps/ui-layout/components/ui/motion-drawer.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/motion-drawer.tsx) — the responsive navigation drawer used by this block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@/components/ui/timeline-animation** (repository primitive) — the scroll-triggered stagger primitive used to sequence the block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **@/hooks/use-media-query** (repository primitive) — the breakpoint hook that switches the mobile composition. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **@/components/ui/motion-drawer** (repository primitive) — the responsive navigation drawer used by this block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Indigo commerce glass defines the identity. The section should feel immersive and launch-ready.

## Typography

A bold display face or the project sans at very large responsive sizes; compact supporting copy and small UI labels create scale contrast. The source’s concrete type anchors are `text-sm`, `font-medium`, `text-2xl`, `font-extrabold`, `font-semibold`, `text-6xl`, `text-5xl`, `text-7xl`, `tracking-tight`, `text-lg`.

## Palette and contrast

Core palette: `text-black`, `bg-white`, `bg-neutral-800`, `border-neutral-900`, `text-[#5d5dff]`, `text-indigo-500`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Use a wide hero stage with a centered or split headline and an overlapping product visualization; preserve generous vertical air.

## Background construction

Use a pale commerce canvas with an indigo illustration wash; construct the primary CTA with three inset highlights/shadows so it reads as molded glass, and float compact commerce widgets in white/50 panels.

## Imagery and iconography

Use high-quality product/UI composites or portraits with deliberate overlap; icons are simple line glyphs.

## Unique components and signature effects

1. **Indigo commerce glass.** Use a pale commerce canvas with an indigo illustration wash; construct the primary CTA with three inset highlights/shadows so it reads as molded glass, and float compact commerce widgets in white/50 panels.
   - **Use it for:** premium AI-commerce actions and generated product evidence
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Source-specific visual behavior

[Open the exact implementation (lines 15–21)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/hero-section/hero-ai-ecommerce.tsx#L15-L21) — This source fragment contains a high-signal visual or interaction decision unique to the block.

### 2. Custom elevation recipe

[Open the exact implementation (lines 161–169)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/hero-section/hero-ai-ecommerce.tsx#L161-L169) — The nonstandard shadow values create the block’s characteristic depth.

### 3. Translucent glass layer

[Open the exact implementation (lines 183–189)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/hero-section/hero-ai-ecommerce.tsx#L183-L189) — Blur, transparency, border, and stacking work together as one glass treatment.
<!-- source-audit:end -->

## Buttons

Primary actions carry the block accent; secondary actions are quieter bordered or glass controls with the same height.

## Motion and interaction states

Use slow entrance staging and restrained hover/press feedback; decorative atmosphere must not chase the pointer.

## Rules for extending this design

1. Carry the **Indigo commerce glass** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
