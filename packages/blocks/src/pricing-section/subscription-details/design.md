# Subscription Details — Design System

> Use this file as the complete visual and implementation brief for extending the `subscription-details` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/pricing-section/subscription-details.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/lib/utils.ts` — the class-merging utility
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@number-flow/react** (external) — animates changing numeric price and metric values. Install with `pnpm add @number-flow/react`.
- **@/lib/utils** (local) — the class-merging utility.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Layered subscription glass defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Prices are large and tabular-looking; plan names are medium weight, descriptions muted, and feature lists compact. The source’s concrete type anchors are `font-dmSans`, `text-4xl`, `text-2xl`, `font-bold`, `text-sm`, `font-medium`, `tracking-wider`, `text-xl`, `font-semibold`, `leading-relaxed`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `text-black`, `bg-neutral-100`, `text-neutral-500`, `text-neutral-900`, `bg-black`, `text-white`, `border-neutral-300`, `from-orange-500/20`, `via-pink-500/10`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Keep tier cards comparable with aligned prices, features and CTAs; featured-tier offset must disappear safely on mobile.

## Background construction

Place black and white plan slabs over an orange/20 blurred glow; use white/40 glass, backdrop blur, slight rotated decoration and layered sm-to-2xl shadows.

## Imagery and iconography

Use tiny product icons or abstract glow only; never distract from price, billing period and included features.

## Unique components and signature effects

1. **Layered subscription glass.** Place black and white plan slabs over an orange/20 blurred glow; use white/40 glass, backdrop blur, slight rotated decoration and layered sm-to-2xl shadows.
   - **Use it for:** creating premium depth while keeping plan details readable
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Depth and glow treatment

**Location:** `packages/blocks/src/pricing-section/subscription-details.tsx:122-128`
**Why it is core:** These exact shadows and blur layers distinguish foreground from atmosphere.

```tsx
                  'xl:p-8 md:p-4 p-6 rounded-2xl relative border transition-all flex flex-col',
                  plan.featured
                    ? 'bg-black text-white shadow-2xl relative overflow-hidden border-none'
                    : 'bg-neutral-100 border-neutral-300 border-2 border-dashed'
                )}
              >
                {plan.featured && (
```

### 2. Translucent glass layer

**Location:** `packages/blocks/src/pricing-section/subscription-details.tsx:129-139`
**Why it is core:** Blur, transparency, border, and stacking work together as one glass treatment.

```tsx
                  <>
                    <img
                      src="https://images.unsplash.com/photo-1600619030925-569b3b964418?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full h-full object-fill absolute -bottom-40 rotate-180 left-0"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 via-pink-500/10 to-transparent blur-3xl opacity-60 pointer-events-none" />
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider z-20">
                      Most popular
                    </div>
                  </>
```

### 3. Depth and glow treatment

**Location:** `packages/blocks/src/pricing-section/subscription-details.tsx:178-187`
**Why it is core:** These exact shadows and blur layers distinguish foreground from atmosphere.

```tsx
                <Button
                  variant="outline"
                  className={cn(
                    'relative z-10 gap-2 h-12 border-neutral-200 mt-auto transition-transform',
                    plan.featured
                      ? 'bg-white text-black hover:bg-neutral-100 border-none shadow-lg active:scale-95'
                      : 'text-neutral-600 active:scale-95 hover:bg-white '
                  )}
                >
                  <svg
```
<!-- source-audit:end -->

## Buttons

Use full-width, high-contrast CTAs with real press feedback; featured plans own the accent while secondary plans stay neutral.

## Motion and interaction states

Animate numeric billing changes and press states; avoid gratuitous card movement that harms comparison.

## Rules for extending this design

1. Carry the **Layered subscription glass** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Subscription Details**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
