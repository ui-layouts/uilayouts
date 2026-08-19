# Feature Nature — Design System

> Use this file as the complete visual and implementation brief for extending the `feature-nature` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/feature-section/feature-nature.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/lib/utils.ts` — the class-merging utility
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@/lib/utils** (local) — the class-merging utility.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Editorial forest contrast defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `text-3xl`, `font-bold`, `leading-tight`, `text-lg`, `font-dmSans`, `text-5xl`, `text-6xl`, `text-xl`, `font-semibold`.

## Palette and contrast

The implementation anchors its palette with `bg-emerald-950`, `border-emerald-950`, `text-white`, `bg-white`, `text-gray-900`, `border-emerald-100`, `text-emerald-400`, `text-emerald-900`, `text-emerald-100/70`, `text-gray-500`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.

## Background construction

Pair bright paper cards with a deep emerald feature panel; use natural photography, emerald borders and muted moss text, with restrained 2xl depth rather than neon decoration.

## Imagery and iconography

Favor product crops, diagrams, or symbolic line icons; each should explain the capability rather than decorate it.

## Unique components and signature effects

1. **Editorial forest contrast.** Pair bright paper cards with a deep emerald feature panel; use natural photography, emerald borders and muted moss text, with restrained 2xl depth rather than neon decoration.
   - **Use it for:** communicating sustainability and calm premium quality
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Depth and glow treatment

**Location:** `packages/blocks/src/feature-section/feature-nature.tsx:18-27`
**Why it is core:** These exact shadows and blur layers distinguish foreground from atmosphere.

```tsx
  return (
    <div
      className={cn(
        'rounded-2xl p-4 flex flex-col h-full transition-all duration-300 border-2',
        active
          ? 'bg-emerald-950 border-emerald-950 text-white shadow-2xl'
          : 'bg-white border-transparent text-gray-900 shadow-sm hover:border-emerald-100'
      )}
    >
      <div
```

### 2. Source-specific visual behavior

**Location:** `packages/blocks/src/feature-section/feature-nature.tsx:45-52`
**Why it is core:** This source fragment contains a high-signal visual or interaction decision unique to the block.

```tsx
        className={cn(
          'mt-auto px-6 py-3 rounded-full font-bold w-fit transition-colors',
          active
            ? 'bg-white text-emerald-950 hover:bg-emerald-50'
            : 'bg-emerald-950 text-white hover:bg-emerald-900'
        )}
      >
        Learn More
```
<!-- source-audit:end -->

## Buttons

Primary actions use the accent fill; card-level actions are compact arrows or icon controls and must visibly respond on hover.

## Motion and interaction states

Reveal secondary layers on group hover and keep transforms small so the grid remains stable.

## Rules for extending this design

1. Carry the **Editorial forest contrast** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Feature Nature**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
