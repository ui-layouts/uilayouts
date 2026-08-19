# Spotlight Testimonial — Design System

> Use this file as the complete visual and implementation brief for extending the `spotlight-testimonial` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/testimonial-section/spotlight-testimonial.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/lib/utils.ts` — the class-merging utility
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block

## Required libraries and primitives

- **@/lib/utils** (local) — the class-merging utility.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Focused quote carousel defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Quotes use generous readable type; names, roles and ratings use a compact supporting scale with obvious hierarchy. The source’s concrete type anchors are `font-manrope`, `text-5xl`, `font-bold`, `tracking-tight`, `text-lg`, `text-2xl`, `text-4xl`, `font-semibold`, `leading-tight`, `text-sm`.

## Palette and contrast

The implementation anchors its palette with `bg-zinc-100`, `text-zinc-900`, `text-zinc-600`, `bg-zinc-200`, `border-zinc-300`, `text-zinc-400`, `bg-zinc-900`, `text-zinc-500`, `bg-zinc-400`, `bg-zinc-300`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Keep a stable reading width even when cards move; on mobile show one primary quote and retain clear navigation.

## Background construction

Keep secondary cards subdued in zinc while the active quote receives scale and large shadow; transition opacity and position together to simulate a moving spotlight.

## Imagery and iconography

Use consistent avatar crops and genuine product/chat context; stars or platform marks are supporting evidence.

## Unique components and signature effects

1. **Focused quote carousel.** Keep secondary cards subdued in zinc while the active quote receives scale and large shadow; transition opacity and position together to simulate a moving spotlight.
   - **Use it for:** holding attention on one customer voice at a time
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Motion-driven behavior

**Location:** `packages/blocks/src/testimonial-section/spotlight-testimonial.tsx:99-108`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
          className="relative min-h-[200px] flex items-center justify-center mb-5"
        >
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={activeTestimonial?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-900 text-balance leading-tight"
```

### 2. Motion-driven behavior

**Location:** `packages/blocks/src/testimonial-section/spotlight-testimonial.tsx:112-118`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
                {activeTestimonial?.highlight}
              </span>{' '}
              {activeTestimonial?.quoteEnd}"
            </motion.blockquote>
          </AnimatePresence>
        </TimelineAnimation>
```

### 3. Motion-driven behavior

**Location:** `packages/blocks/src/testimonial-section/spotlight-testimonial.tsx:122-131`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
          className="relative min-h-24 flex items-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial?.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="flex flex-col items-center gap-2"
```
<!-- source-audit:end -->

## Buttons

Navigation is compact, high-contrast and tactile; testimonial cards themselves are not buttons unless explicitly interactive.

## Motion and interaction states

Use spring or carousel motion to explain reordering; respect reduced motion and never animate while a user is reading unexpectedly.

## Rules for extending this design

1. Carry the **Focused quote carousel** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Spotlight Testimonial**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
