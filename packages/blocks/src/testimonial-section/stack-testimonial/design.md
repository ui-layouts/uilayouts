# Stack Testimonial — Design System

> Use this file as the complete visual and implementation brief for extending the `stack-testimonial` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/testimonial-section/stack-testimonial.tsx` — the canonical block source and the exact effect composition
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.

## Design thesis

Draggable card deck defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Quotes use generous readable type; names, roles and ratings use a compact supporting scale with obvious hierarchy. The source’s concrete type anchors are `font-manrope`, `text-5xl`, `font-bold`, `tracking-tight`, `text-lg`, `text-base`, `text-xs`, `font-medium`, `tracking-wider`, `text-sm`.

## Palette and contrast

The implementation anchors its palette with `from-zinc-50`, `to-white`, `text-zinc-900`, `text-zinc-600`, `bg-white`, `border-zinc-200`, `border-zinc-300`, `bg-zinc-50`, `bg-zinc-100`, `bg-zinc-900`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Keep a stable reading width even when cards move; on mobile show one primary quote and retain clear navigation.

## Background construction

Layer white testimonial cards at diminishing scale/offset with zinc shadows; the active card is draggable and reorders through spring motion, with yellow stars as the only accent.

## Imagery and iconography

Use consistent avatar crops and genuine product/chat context; stars or platform marks are supporting evidence.

## Unique components and signature effects

1. **Draggable card deck.** Layer white testimonial cards at diminishing scale/offset with zinc shadows; the active card is draggable and reorders through spring motion, with yellow stars as the only accent.
   - **Use it for:** making multiple voices feel like a tactile deck
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Source-specific visual behavior

**Location:** `packages/blocks/src/testimonial-section/stack-testimonial.tsx:53-59`
**Why it is core:** This source fragment contains a high-signal visual or interaction decision unique to the block.

```tsx
  }

  return (
    <section className="relative font-manrope w-full bg-linear-to-br from-zinc-50 to-white py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <article>
          <h2 className="text-5xl font-bold tracking-tight text-zinc-900 mb-4">
```

### 2. Motion-driven behavior

**Location:** `packages/blocks/src/testimonial-section/stack-testimonial.tsx:72-82`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
            const isVisible = position < 3

            return (
              <motion.div
                key={testimonial.id}
                className="absolute w-full"
                initial={false}
                animate={{
                  scale: isActive ? 1 : position === 1 ? 0.95 : 0.9,
                  y: isActive ? 0 : position === 1 ? 16 : 32,
                  x: isActive ? 0 : position === 1 ? 0 : 2,
```

### 3. Motion-driven behavior

**Location:** `packages/blocks/src/testimonial-section/stack-testimonial.tsx:131-137`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
```
<!-- source-audit:end -->

## Buttons

Navigation is compact, high-contrast and tactile; testimonial cards themselves are not buttons unless explicitly interactive.

## Motion and interaction states

Use spring or carousel motion to explain reordering; respect reduced motion and never animate while a user is reading unexpectedly.

## Rules for extending this design

1. Carry the **Draggable card deck** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Stack Testimonial**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
