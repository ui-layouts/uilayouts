# Testimonial Carousel — Design System

> Use this file as the complete visual and implementation brief for extending the `testimonial-carousel` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/testimonial-section/testimonial-carousel.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/testimonial-section/testimonial-carousel.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/lib/utils.ts`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/lib/utils.ts) — the class-merging utility
- [`apps/ui-layout/components/ui/carousel.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/carousel.tsx) — the carousel mechanics and navigation behavior

## Required libraries and primitives

- **@/lib/utils** (repository primitive) — the class-merging utility. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **@/components/ui/carousel** (repository primitive) — the carousel mechanics and navigation behavior. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.
- **embla-carousel** (external) — provides an external primitive used by this effect. Install with `pnpm add embla-carousel`.
- **embla-carousel-react** (external) — provides an external primitive used by this effect. Install with `pnpm add embla-carousel-react`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Striped review carousel defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Quotes use generous readable type; names, roles and ratings use a compact supporting scale with obvious hierarchy. The source’s concrete type anchors are `font-dmSans`, `text-sm`, `font-medium`, `tracking-wider`, `text-5xl`, `text-6xl`, `font-semibold`, `text-xl`, `font-bold`, `text-lg`.

## Palette and contrast

Core palette: `bg-white`, `text-black`, `border-neutral-200`, `bg-neutral-100`, `bg-[repeating-linear-gradient(45deg,#eeeeee_0px_1px,transparent_1px_8px)]`, `bg-yellow-500`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Keep a stable reading width even when cards move; on mobile show one primary quote and retain clear navigation.

## Background construction

Frame a white carousel with a repeating 45° gray stripe field; use yellow rating controls and crisp bordered navigation without soft decorative gradients.

## Imagery and iconography

Use consistent avatar crops and genuine product/chat context; stars or platform marks are supporting evidence.

## Unique components and signature effects

1. **Striped review carousel.** Frame a white carousel with a repeating 45° gray stripe field; use yellow rating controls and crisp bordered navigation without soft decorative gradients.
   - **Use it for:** presenting reviews as a practical browsable module
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Carousel interaction primitive

[Open the exact implementation (lines 2–8)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/testimonial-section/testimonial-carousel.tsx#L2-L8) — This component supplies the block’s distinctive navigation and content motion.

### 2. Structural border grid

[Open the exact implementation (lines 40–49)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/testimonial-section/testimonial-carousel.tsx#L40-L49) — Shared border rails divide the page into aligned editorial bands.

### 3. Carousel interaction primitive

[Open the exact implementation (lines 53–63)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/testimonial-section/testimonial-carousel.tsx#L53-L63) — This component supplies the block’s distinctive navigation and content motion.
<!-- source-audit:end -->

## Buttons

Navigation is compact, high-contrast and tactile; testimonial cards themselves are not buttons unless explicitly interactive.

## Motion and interaction states

Use spring or carousel motion to explain reordering; respect reduced motion and never animate while a user is reading unexpectedly.

## Rules for extending this design

1. Carry the **Striped review carousel** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
