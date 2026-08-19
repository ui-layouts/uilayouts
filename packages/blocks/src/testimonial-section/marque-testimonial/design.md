# Marque Testimonial — Design System

> Use this file as the complete visual and implementation brief for extending the `marque-testimonial` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/testimonial-section/marque-testimonial.tsx` — the canonical block source and the exact effect composition

## Required libraries and primitives

- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.

## Design thesis

Endless review ribbons defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Quotes use generous readable type; names, roles and ratings use a compact supporting scale with obvious hierarchy. The source’s concrete type anchors are `font-manrope`, `text-5xl`, `font-bold`, `tracking-tight`, `text-lg`, `leading-relaxed`, `font-medium`, `text-sm`, `font-semibold`, `text-xs`.

## Palette and contrast

The implementation anchors its palette with `from-zinc-50`, `to-white`, `text-zinc-900`, `text-zinc-600`, `bg-white`, `border-zinc-200`, `text-yellow-400`, `text-zinc-700`, `from-zinc-900`, `to-zinc-700`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Keep a stable reading width even when cards move; on mobile show one primary quote and retain clear navigation.

## Background construction

Run opposing horizontal marquees of white review cards, feather both edges with white/zinc gradients, and pause or elevate a card with xl shadow on hover.

## Imagery and iconography

Use consistent avatar crops and genuine product/chat context; stars or platform marks are supporting evidence.

## Unique components and signature effects

1. **Endless review ribbons.** Run opposing horizontal marquees of white review cards, feather both edges with white/zinc gradients, and pause or elevate a card with xl shadow on hover.
   - **Use it for:** creating abundant social proof without a hard carousel stop
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Motion-driven behavior

**Location:** `packages/blocks/src/testimonial-section/marque-testimonial.tsx:61-72`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
      </div>

      {/* Gradient fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-zinc-50 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-zinc-50 to-transparent z-10" />

      <motion.div
        className="flex gap-6 px-6 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 25,
          repeat: Infinity,
```

### 2. Motion-driven behavior

**Location:** `packages/blocks/src/testimonial-section/marque-testimonial.tsx:113-124`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
            </div>
          </div>
        ))}
      </motion.div>

      {/* Second row with opposite direction */}
      <motion.div
        className="flex gap-6 px-6 w-max mt-6"
        animate={{ x: ['-50%', '0%'] }}
        transition={{
          duration: 30,
          repeat: Infinity,
```

### 3. Motion-driven behavior

**Location:** `packages/blocks/src/testimonial-section/marque-testimonial.tsx:165-171`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
```
<!-- source-audit:end -->

## Buttons

Navigation is compact, high-contrast and tactile; testimonial cards themselves are not buttons unless explicitly interactive.

## Motion and interaction states

Use spring or carousel motion to explain reordering; respect reduced motion and never animate while a user is reading unexpectedly.

## Rules for extending this design

1. Carry the **Endless review ribbons** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Marque Testimonial**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
