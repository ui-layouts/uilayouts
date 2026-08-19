# Testimonial Carousel — Design System

> Use this file as the complete visual and implementation brief for extending the `testimonial-carousel` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/testimonial-section/testimonial-carousel.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/lib/utils.ts` — the class-merging utility
- `apps/ui-layout/components/ui/carousel.tsx` — the carousel mechanics and navigation behavior

## Required libraries and primitives

- **@/lib/utils** (local) — the class-merging utility.
- **@/components/ui/carousel** (local) — the carousel mechanics and navigation behavior.
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

The implementation anchors its palette with `bg-white`, `text-black`, `border-neutral-200`, `bg-neutral-100`, `bg-[repeating-linear-gradient(45deg,#eeeeee_0px_1px,transparent_1px_8px)]`, `bg-neutral-200`, `text-white`, `border-neutral-300`, `bg-yellow-500`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Keep a stable reading width even when cards move; on mobile show one primary quote and retain clear navigation.

## Background construction

Frame a white carousel with a repeating 45° gray stripe field; use yellow rating controls and crisp bordered navigation without soft decorative gradients.

## Imagery and iconography

Use consistent avatar crops and genuine product/chat context; stars or platform marks are supporting evidence.

## Unique components and signature effects

1. **Striped review carousel.** Frame a white carousel with a repeating 45° gray stripe field; use yellow rating controls and crisp bordered navigation without soft decorative gradients.
   - **Use it for:** presenting reviews as a practical browsable module
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Carousel interaction primitive

**Location:** `packages/blocks/src/testimonial-section/testimonial-carousel.tsx:2-8`
**Why it is core:** This component supplies the block’s distinctive navigation and content motion.

```tsx
import React from 'react'
import { cn } from '@/lib/utils'
import {
  Carousel,
  SliderContainer,
  Slider,
  SliderPrevButton,
```

### 2. Structural border grid

**Location:** `packages/blocks/src/testimonial-section/testimonial-carousel.tsx:40-49`
**Why it is core:** Shared border rails divide the page into aligned editorial bands.

```tsx
  },
]

export const TestimonialCarousel = () => {
  return (
    <section className="bg-white py-24 px-6 font-dmSans text-black min-h-screen">
      <div className="max-w-6xl mx-auto border-x border-neutral-200">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-sm text-nuetral-500 font-medium uppercase tracking-wider">
            « Testimonials »
```

### 3. Carousel interaction primitive

**Location:** `packages/blocks/src/testimonial-section/testimonial-carousel.tsx:53-63`
**Why it is core:** This component supplies the block’s distinctive navigation and content motion.

```tsx
          </h2>
        </div>

        <Carousel options={{ loop: true }}>
          <SliderContainer>
            {TESTIMONIALS.map((t, i) => (
              <Slider key={i} className="w-full p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full border-y border-neutral-200">
                  <div className="rounded-2xl h-full w-full p-4 overflow-hidden aspect-video bg-nuetral-100 relative group cursor-pointer">
                    <img
                      src={t.videoThumbnail}
```
<!-- source-audit:end -->

## Buttons

Navigation is compact, high-contrast and tactile; testimonial cards themselves are not buttons unless explicitly interactive.

## Motion and interaction states

Use spring or carousel motion to explain reordering; respect reduced motion and never animate while a user is reading unexpectedly.

## Rules for extending this design

1. Carry the **Striped review carousel** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Testimonial Carousel**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
