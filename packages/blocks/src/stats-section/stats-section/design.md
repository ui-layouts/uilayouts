# Stats Section — Design System

> Use this file as the complete visual and implementation brief for extending the `stats-section` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/stats-section/stats-section.tsx` — the canonical block source and the exact effect composition

## Required libraries and primitives

- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Violet radial metric field defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Numbers are the display typography; labels remain compact and muted, with descriptions clearly subordinate. The source’s concrete type anchors are `text-xs`, `font-semibold`, `text-6xl`, `text-7xl`, `font-bold`, `font-dmSans`, `tracking-tighter`, `leading-none`, `text-5xl`, `text-sm`.

## Palette and contrast

The implementation anchors its palette with `bg-neutral-950`, `text-white`, `bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(102,51,238,1)_100%)]`, `border-zinc-800`, `text-zinc-500`, `bg-zinc-900/50`, `text-zinc-600`, `from-white/15`, `text-zinc-400`, `bg-zinc-800`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Align figures to a shared grid or bento baseline; prevent animated numbers from causing width shifts and stack cleanly on mobile.

## Background construction

Use neutral-950 with a violet radial horizon and a broad 3xl blur; reveal a subtle white/15 card gradient only on hover while number counters animate.

## Imagery and iconography

Prefer charts, sparklines and abstract data marks over stock photography; icons remain secondary to figures.

## Unique components and signature effects

1. **Violet radial metric field.** Use neutral-950 with a violet radial horizon and a broad 3xl blur; reveal a subtle white/15 card gradient only on hover while number counters animate.
   - **Use it for:** giving core metrics a quiet cosmic glow
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Radial background field

**Location:** `packages/blocks/src/stats-section/stats-section.tsx:12-22`
**Why it is core:** The gradient’s focal point, stops, and layer position establish the block’s backdrop.

```tsx
export const StatsSection = () => {
  return (
    <section className="py-32 px-6 bg-neutral-950 text-white min-h-screen relative">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(102,51,238,1)_100%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center ">
          <div className="space-y-10">
            <span className="inline-flex px-4 py-1.5 text-xs font-semibold border border-zinc-800 rounded-full text-zinc-500 uppercase tracking-[0.2em] bg-zinc-900/50">
              Agency Metrics
            </span>
            <h2 className="text-6xl md:text-7xl font-bold font-dmSans tracking-tighter text-balance leading-none">
```

### 2. Motion-driven behavior

**Location:** `packages/blocks/src/stats-section/stats-section.tsx:25-31`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
            </h2>
            <div className="grid grid-cols-2 gap-x-12 gap-y-16 pt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
```

### 3. Low-opacity icon pattern

**Location:** `packages/blocks/src/stats-section/stats-section.tsx:48-54`
**Why it is core:** Repeated icons at low opacity create a branded texture without competing with foreground content.

```tsx
          </div>

          <div className="relative group">
            <div className="absolute -inset-20 bg-linear-to-tr from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl pointer-events-none" />
            <div className="space-y-8 relative z-10">
              <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed text-pretty font-medium">
                We recognized a demand for solutions that empower enterprises to
```
<!-- source-audit:end -->

## Buttons

Use buttons only for drill-down or a final CTA; style them as a continuation of the surrounding surface.

## Motion and interaction states

Animate values once on entry and make hover effects explanatory, not celebratory.

## Rules for extending this design

1. Carry the **Violet radial metric field** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Stats Section**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
