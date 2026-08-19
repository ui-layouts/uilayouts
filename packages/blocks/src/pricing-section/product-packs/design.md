# Packs — Design System

> Use this file as the complete visual and implementation brief for extending the `product-packs` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/pricing-section/product-packs.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Neo-brutalist packs defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Prices are large and tabular-looking; plan names are medium weight, descriptions muted, and feature lists compact. The source’s concrete type anchors are `text-4xl`, `text-5xl`, `font-semibold`, `tracking-tight`, `leading-relaxed`, `text-2xl`, `text-sm`, `text-xl`, `font-medium`.

## Palette and contrast

The implementation anchors its palette with `bg-yellow-50`, `text-black`, `text-neutral-500`, `bg-amber-300`, `border-neutral-100`, `text-neutral-800`, `text-neutral-700`, `border-yellow-50`, `bg-neutral-200`, `border-black`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Keep tier cards comparable with aligned prices, features and CTAs; featured-tier offset must disappear safely on mobile.

## Background construction

Use hard black borders, amber/yellow panels and 5px offset shadows; on press, remove the shadow and translate the control 3px on both axes to mimic a physical button.

## Imagery and iconography

Use tiny product icons or abstract glow only; never distract from price, billing period and included features.

## Unique components and signature effects

1. **Neo-brutalist packs.** Use hard black borders, amber/yellow panels and 5px offset shadows; on press, remove the shadow and translate the control 3px on both axes to mimic a physical button.
   - **Use it for:** making one-time packages feel bold, direct, and tactile
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Depth and glow treatment

**Location:** `packages/blocks/src/pricing-section/product-packs.tsx:44-50`
**Why it is core:** These exact shadows and blur layers distinguish foreground from atmosphere.

```tsx
          <TimelineAnimation
            animationNum={5}
            timelineRef={timelineRef}
            className="bg-amber-300 border border-neutral-100 rounded-4xl p-10 flex flex-col shadow-sm space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
```

### 2. Custom elevation recipe

**Location:** `packages/blocks/src/pricing-section/product-packs.tsx:110-116`
**Why it is core:** The nonstandard shadow values create the block’s characteristic depth.

```tsx
            </div>
            <Button
              variant="outline"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-200 border-2 border-black px-6 font-medium text-black transition-all duration-100 shadow-[5px_5px_rgb(0_0_0)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
```

### 3. Custom elevation recipe

**Location:** `packages/blocks/src/pricing-section/product-packs.tsx:193-199`
**Why it is core:** The nonstandard shadow values create the block’s characteristic depth.

```tsx

            <Button
              variant="outline"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-50 border-2 border-amber-300 px-6 font-medium text-black transition-all duration-100 shadow-[5px_5px_rgb(255_210_48)] active:translate-x-[3px] active:translate-y-[3px] hover:bg-neutral-100 active:shadow-none "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
```
<!-- source-audit:end -->

## Buttons

Use full-width, high-contrast CTAs with real press feedback; featured plans own the accent while secondary plans stay neutral.

## Motion and interaction states

Animate numeric billing changes and press states; avoid gratuitous card movement that harms comparison.

## Rules for extending this design

1. Carry the **Neo-brutalist packs** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Packs**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
