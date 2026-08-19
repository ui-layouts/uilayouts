# Feature Velocity — Design System

> Use this file as the complete visual and implementation brief for extending the `feature-velocity` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/feature-section/feature-velocity.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/lib/utils.ts` — the class-merging utility

## Required libraries and primitives

- **@/lib/utils** (local) — the class-merging utility.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Dark velocity beams defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `font-dmSans`, `text-5xl`, `text-7xl`, `font-black`, `tracking-tighter`, `leading-none`, `font-mono`, `text-sm`, `leading-relaxed`, `tracking-widest`.

## Palette and contrast

The implementation anchors its palette with `bg-black`, `bg-[repeating-linear-gradient(45deg,#252525_0px_1px,transparent_1px_8px)]`, `border-neutral-800`, `text-white`, `text-gray-500`, `from-violet-500/20`, `from-emerald-500/20`, `from-blue-500/20`, `bg-neutral-950`, `border-neutral-950`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.

## Background construction

Use a neutral-950 field with fine diagonal pinstripes; give each card a masked blue, emerald, or violet glow that fades from the top and only becomes visible on group hover.

## Imagery and iconography

Favor product crops, diagrams, or symbolic line icons; each should explain the capability rather than decorate it.

## Unique components and signature effects

1. **Dark velocity beams.** Use a neutral-950 field with fine diagonal pinstripes; give each card a masked blue, emerald, or violet glow that fades from the top and only becomes visible on group hover.
   - **Use it for:** suggesting speed and technical energy without persistent visual noise
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Radial background field

**Location:** `packages/blocks/src/feature-section/feature-velocity.tsx:5-13`
**Why it is core:** The gradient’s focal point, stops, and layer position establish the block’s backdrop.

```tsx
export const FeatureVelocity = () => {
  return (
    <section className="bg-black py-32 px-6 min-h-screen font-dmSans relative">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#252525_0px_1px,transparent_1px_8px)] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="max-w-7xl mx-auto space-y-24 relative z-2">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-neutral-800 pb-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              High Velocity
```

### 2. Low-opacity icon pattern

**Location:** `packages/blocks/src/feature-section/feature-velocity.tsx:42-52`
**Why it is core:** Repeated icons at low opacity create a branded texture without competing with foreground content.

```tsx
          ].map((card, i) => (
            <div
              key={i}
              className="group relative bg-neutral-950 border border-neutral-800 rounded-2xl p-12 overflow-hidden hover:border-neutral-950 transition-all duration-500"
            >
              <div
                className={cn(
                  'absolute inset-0 bg-linear-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700',
                  card.color
                )}
              />
```
<!-- source-audit:end -->

## Buttons

Primary actions use the accent fill; card-level actions are compact arrows or icon controls and must visibly respond on hover.

## Motion and interaction states

Reveal secondary layers on group hover and keep transforms small so the grid remains stable.

## Rules for extending this design

1. Carry the **Dark velocity beams** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Feature Velocity**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
