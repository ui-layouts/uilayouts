# Growth Plans — Design System

> Use this file as the complete visual and implementation brief for extending the `growth-plans` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/pricing-section/growth-plans.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/lib/utils.ts` — the class-merging utility
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block
- `packages/ui/src/index.tsx` — the open-source workspace UI primitive barrel used by this block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **@number-flow/react** (external) — animates changing numeric price and metric values. Install with `pnpm add @number-flow/react`.
- **@repo/ui/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **@/lib/utils** (local) — the class-merging utility.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Dark featured pricing tier defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Prices are large and tabular-looking; plan names are medium weight, descriptions muted, and feature lists compact. The source’s concrete type anchors are `font-dmSans`, `text-4xl`, `font-semibold`, `tracking-tight`, `text-sm`, `font-medium`, `font-bold`, `text-lg`, `text-2xl`, `text-5xl`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `text-black`, `text-neutral-500`, `bg-neutral-100`, `border-neutral-200`, `text-neutral-900`, `text-neutral-400`, `bg-neutral-300`, `bg-neutral-950`, `text-white`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Keep tier cards comparable with aligned prices, features and CTAs; featured-tier offset must disappear safely on mobile.

## Background construction

Use neutral pricing cards with one neutral-950 tier enlarged to 105%; retain crisp borders and give lighter cards a neutral hover shadow while prices flow numerically.

## Imagery and iconography

Use tiny product icons or abstract glow only; never distract from price, billing period and included features.

## Unique components and signature effects

1. **Dark featured pricing tier.** Use neutral pricing cards with one neutral-950 tier enlarged to 105%; retain crisp borders and give lighter cards a neutral hover shadow while prices flow numerically.
   - **Use it for:** making the recommended plan obvious through mass and contrast
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Structural border treatment

**Location:** `packages/blocks/src/pricing-section/growth-plans.tsx:108-114`
**Why it is core:** The border placement creates the block’s visual grouping and alignment.

```tsx
          Unlock potential with plans designed to fuel growth.
        </p>

        <div className="flex items-center justify-center gap-4 mb-16 bg-neutral-100 border border-neutral-200 w-fit p-3 mx-auto">
          <span
            className={cn(
              'text-sm transition-colors',
```

### 2. Depth and glow treatment

**Location:** `packages/blocks/src/pricing-section/growth-plans.tsx:161-168`
**Why it is core:** These exact shadows and blur layers distinguish foreground from atmosphere.

```tsx
                'rounded-lg p-8 flex flex-col border transition-all',

                plan.featured
                  ? 'bg-neutral-950 text-white scale-105 shadow-2xl z-10 border-transparent'
                  : 'bg-neutral-100 border border-neutral-200'
              )}
            >
              <div className="text-left mb-8">
```

### 3. Depth and glow treatment

**Location:** `packages/blocks/src/pricing-section/growth-plans.tsx:211-218`
**Why it is core:** These exact shadows and blur layers distinguish foreground from atmosphere.

```tsx
                  'w-full mb-10 rounded-lg h-14',

                  plan.featured
                    ? 'py-4 bg-neutral-800 border border-neutral-700'
                    : 'bg-white border-neutral-200 hover:shadow-neutral-200 hover:shadow-lg hover:bg-white'
                )}
              >
                Select Plan
```
<!-- source-audit:end -->

## Buttons

Use full-width, high-contrast CTAs with real press feedback; featured plans own the accent while secondary plans stay neutral.

## Motion and interaction states

Animate numeric billing changes and press states; avoid gratuitous card movement that harms comparison.

## Rules for extending this design

1. Carry the **Dark featured pricing tier** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Growth Plans**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
