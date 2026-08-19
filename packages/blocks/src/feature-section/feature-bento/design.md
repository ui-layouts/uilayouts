# Feature Bento — Design System

> Use this file as the complete visual and implementation brief for extending the `feature-bento` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/feature-section/feature-bento.tsx` — the canonical block source and the exact effect composition

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.

## Design thesis

Electric bento atmosphere defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `font-manrope`, `text-sm`, `font-medium`, `text-5xl`, `font-bold`, `tracking-tight`, `text-lg`, `text-2xl`, `text-4xl`, `font-black`.

## Palette and contrast

The implementation anchors its palette with `bg-slate-50`, `from-blue-100`, `via-blue-600`, `to-blue-500`, `text-white`, `from-black/60`, `bg-white/20`, `bg-green-400`, `text-white/90`, `from-blue-300`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.

## Background construction

Vary card spans and surface colors; layer blue gradient blobs with 2xl/3xl blur, photographic overlays, glass chips, and an icon that rotates 45° while the card subtly scales.

## Imagery and iconography

Favor product crops, diagrams, or symbolic line icons; each should explain the capability rather than decorate it.

## Unique components and signature effects

1. **Electric bento atmosphere.** Vary card spans and surface colors; layer blue gradient blobs with 2xl/3xl blur, photographic overlays, glass chips, and an icon that rotates 45° while the card subtly scales.
   - **Use it for:** giving each capability a distinct miniature world inside one grid
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Translucent glass layer

**Location:** `packages/blocks/src/feature-section/feature-bento.tsx:58-69`
**Why it is core:** Blur, transparency, border, and stacking work together as one glass treatment.

```tsx
          </div>

          {/* CTA Card */}
          <div className="bg-linear-to-br from-neutral-950 to-neutral-800 rounded-3xl p-8 text-white flex flex-col justify-between transition-all cursor-pointer group">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                Join Now
              </span>
              <div className="size-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl group-hover:bg-white/30 group-hover:rotate-45 transition-all">
                ↗
              </div>
            </div>
```

### 2. Low-opacity icon pattern

**Location:** `packages/blocks/src/feature-section/feature-bento.tsx:76-88`
**Why it is core:** Repeated icons at low opacity create a branded texture without competing with foreground content.

```tsx

          {/* Stats Card 2 */}
          <div className="bg-gray-950 rounded-3xl p-8 text-white flex flex-col justify-center gap-3 relative overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute top-5 right-5 flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-blue-500"></span>
            </span>
            <div className="relative z-10">
              <span className="text-5xl font-black bg-linear-to-r from-blue-200 to-blue-600 bg-clip-text text-transparent">
                18.2k+
              </span>
              <p className="text-sm uppercase tracking-widest text-neutral-500 font-semibold mt-2">
```

### 3. Depth and glow treatment

**Location:** `packages/blocks/src/feature-section/feature-bento.tsx:92-98`
**Why it is core:** These exact shadows and blur layers distinguish foreground from atmosphere.

```tsx
          </div>

          {/* Stats Card 3 */}
          <div className="bg-linear-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white flex flex-col justify-center gap-3 relative overflow-hidden group hover:shadow-2xl transition-all">
            <div className="absolute -bottom-10 -right-10 size-40 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <span className="text-5xl font-black">94%</span>
```
<!-- source-audit:end -->

## Buttons

Primary actions use the accent fill; card-level actions are compact arrows or icon controls and must visibly respond on hover.

## Motion and interaction states

Reveal secondary layers on group hover and keep transforms small so the grid remains stable.

## Rules for extending this design

1. Carry the **Electric bento atmosphere** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Feature Bento**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
