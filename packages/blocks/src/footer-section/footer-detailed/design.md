# Footer Detailed — Design System

> Use this file as the complete visual and implementation brief for extending the `footer-detailed` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/footer-section/footer-detailed.tsx` — the canonical block source and the exact effect composition
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.

## Design thesis

Deep directory footer defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use clear link-group headings, compact links and a brand statement sized to the footer’s role; legal text is smallest but readable. The source’s concrete type anchors are `font-bold`, `text-xs`, `font-semibold`, `tracking-tight`, `text-sm`, `leading-relaxed`, `tracking-wider`.

## Palette and contrast

The implementation anchors its palette with `bg-zinc-950`, `text-zinc-400`, `border-zinc-800`, `bg-white`, `text-zinc-900`, `text-white`, `bg-zinc-900`, `bg-zinc-200`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Preserve strong column alignment and generous terminal whitespace; collapse navigation groups predictably without hiding legal links.

## Background construction

Use zinc-950/900 bands, white headings and muted zinc links; separate dense directories with strict zinc-800 borders and a centered floating utility mark.

## Imagery and iconography

Use a wordmark, small brand symbol or restrained background art—never unrelated stock imagery.

## Unique components and signature effects

1. **Deep directory footer.** Use zinc-950/900 bands, white headings and muted zinc links; separate dense directories with strict zinc-800 borders and a centered floating utility mark.
   - **Use it for:** organizing many destinations without competing decoration
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Border-led structure

**Location:** `packages/blocks/src/footer-section/footer-detailed.tsx:23-29`
**Why it is core:** Hairline borders establish grouping and rhythm without relying on filled cards.

```tsx

export const DetailedFooter = () => {
  return (
    <footer className="w-full bg-zinc-950 text-zinc-400 border-t border-zinc-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
```

### 2. Border-led structure

**Location:** `packages/blocks/src/footer-section/footer-detailed.tsx:62-74`
**Why it is core:** Hairline borders establish grouping and rhythm without relying on filled cards.

```tsx
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex gap-4">
            <span className="text-xs">© 2026 Platform Inc.</span>
            <a href="#" className="text-xs hover:text-white">
              Terms
            </a>
            <a href="#" className="text-xs hover:text-white">
              Privacy
            </a>
          </div>
```

### 3. Border-led structure

**Location:** `packages/blocks/src/footer-section/footer-detailed.tsx:80-88`
**Why it is core:** Hairline borders establish grouping and rhythm without relying on filled cards.

```tsx
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2.5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
            />
            <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-zinc-900 size-8 rounded-full flex items-center justify-center hover:bg-zinc-200 transition-colors">
              <svg
                className="size-4"
                fill="none"
```
<!-- source-audit:end -->

## Buttons

Newsletter and final CTAs use the block’s primary contrast; utility/social controls are smaller but retain 44px targets.

## Motion and interaction states

Keep footer motion minimal: link color/underline and button press states are sufficient.

## Rules for extending this design

1. Carry the **Deep directory footer** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Footer Detailed**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
