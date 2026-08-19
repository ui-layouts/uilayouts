# About Why Us — Design System

> Use this file as the complete visual and implementation brief for extending the `about-whyus` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/about-section/about-whyus.tsx` — the canonical block source and the exact effect composition

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.

## Design thesis

Lifted proof cards defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `font-manrope`, `text-7xl`, `font-bold`, `tracking-tighter`, `font-medium`, `text-xs`, `text-lg`, `leading-relaxed`, `text-sm`, `text-3xl`.

## Palette and contrast

The implementation anchors its palette with `bg-slate-50`, `bg-[repeating-linear-gradient(45deg,#efefef_0px_1px,transparent_1px_8px)]`, `text-slate-900`, `text-slate-500`, `text-orange-500`, `text-slate-600`, `text-slate-400`, `bg-white`, `border-slate-100`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.

## Background construction

Place white proof cards on a faint diagonal hatch that is radially masked away; use orange only for icon emphasis and lift cards 8px into a 2xl shadow on hover.

## Imagery and iconography

Use documentary portraits, work samples, or brand proof; preserve the source crop and color-to-grayscale behavior.

## Unique components and signature effects

1. **Lifted proof cards.** Place white proof cards on a faint diagonal hatch that is radially masked away; use orange only for icon emphasis and lift cards 8px into a 2xl shadow on hover.
   - **Use it for:** making differentiators feel like physical evidence
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Radial background field

**Location:** `packages/blocks/src/about-section/about-whyus.tsx:5-11`
**Why it is core:** The gradient’s focal point, stops, and layer position establish the block’s backdrop.

```tsx
export const AboutWhyUs = () => {
  return (
    <section className="py-32 px-6 bg-slate-50 relative font-manrope min-h-screen">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[repeating-linear-gradient(45deg,#efefef_0px_1px,transparent_1px_8px)] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
        <div className="lg:col-span-4 space-y-6">
```

### 2. Depth and glow treatment

**Location:** `packages/blocks/src/about-section/about-whyus.tsx:84-90`
**Why it is core:** These exact shadows and blur layers distinguish foreground from atmosphere.

```tsx
}

const StatColumn = ({ number, label, sub }: any) => (
  <div className="bg-white p-6 rounded-3xl group relative border border-slate-100 flex flex-col justify-end gap-16 min-h-72 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
    <span className="text-6xl font-bold text-slate-900  tracking-tighter">
      {number}
    </span>
```
<!-- source-audit:end -->

## Buttons

Use one decisive filled CTA and a lower-emphasis text/outline action; buttons should never compete with imagery.

## Motion and interaction states

Stagger story elements gently; image reveals and hover states should feel editorial rather than app-like.

## Rules for extending this design

1. Carry the **Lifted proof cards** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **About Why Us**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
