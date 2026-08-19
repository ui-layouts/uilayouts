# Customer Experience — Design System

> Use this file as the complete visual and implementation brief for extending the `customer-experience` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/experience-section/customer-experience.tsx` — the canonical block source and the exact effect composition

## Required libraries and primitives

- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Orange image crossfade defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use editorial role/project titles, muted dates, and small categorical labels; keep chronology immediately scannable. The source’s concrete type anchors are `font-manrope`, `text-9xl`, `text-8xl`, `text-7xl`, `font-bold`, `font-spaceGrotesk`, `text-4xl`, `text-xl`.

## Palette and contrast

The implementation anchors its palette with `bg-orange-200`, `border-orange-500`, `text-orange-500`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a timeline, ledger, or accordion with aligned dates and content; collapse to a single reading column on mobile.

## Background construction

Use orange-500 rules and orange-200 support surfaces; crossfade/scale the customer image in sync with the selected story instead of sliding the entire layout.

## Imagery and iconography

Use project/customer imagery only when tied to the active record; otherwise let typography and rules carry the layout.

## Unique components and signature effects

1. **Orange image crossfade.** Use orange-500 rules and orange-200 support surfaces; crossfade/scale the customer image in sync with the selected story instead of sliding the entire layout.
   - **Use it for:** connecting each narrative to a distinct visual memory
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Structural border grid

**Location:** `packages/blocks/src/experience-section/customer-experience.tsx:113-121`
**Why it is core:** Shared border rails divide the page into aligned editorial bands.

```tsx
      <div
        ref={containerRef}
        onMouseMove={handleMove}
        className="relative max-w-6xl mx-auto border-x border-orange-500"
      >
        <h1 className="lg:text-9xl sm:text-8xl px-5 text-7xl border-b border-orange-500 font-bold py-10 text-orange-500 font-spaceGrotesk">
          EXPERIENCE
        </h1>
        {list.map((item) => (
```

### 2. Structural border treatment

**Location:** `packages/blocks/src/experience-section/customer-experience.tsx:124-130`
**Why it is core:** The border placement creates the block’s visual grouping and alignment.

```tsx
            onMouseEnter={() => handleImageInteraction(item, 1)}
            onMouseMove={() => handleImageInteraction(item, 1)}
            onMouseLeave={() => handleImageInteraction(item, 0)}
            className="w-full py-5 px-5 cursor-pointer relative text-center md:flex justify-between items-center text-primary border-b border-orange-500 last:border-none"
          >
            <div className="flex gap-2 items-center">
              <svg
```

### 3. Motion-driven behavior

**Location:** `packages/blocks/src/experience-section/customer-experience.tsx:148-154`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
          </div>
        ))}

        <motion.img
          ref={imageRef}
          src={img.src}
          alt={img.alt}
```
<!-- source-audit:end -->

## Buttons

Use text arrows or compact icon controls, with the accent appearing only on the active or actionable item.

## Motion and interaction states

Entry reveals follow chronology; active-item transitions may crossfade, but layout position should remain predictable.

## Rules for extending this design

1. Carry the **Orange image crossfade** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Customer Experience**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
