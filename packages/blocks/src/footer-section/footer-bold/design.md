# Footer Bold — Design System

> Use this file as the complete visual and implementation brief for extending the `footer-bold` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/footer-section/footer-bold.tsx` — the canonical block source and the exact effect composition

## Required libraries and primitives

- No effect library is required. The effect is built directly in the canonical block with React and CSS/Tailwind.

## Design thesis

Monumental wordmark footer defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use clear link-group headings, compact links and a brand statement sized to the footer’s role; legal text is smallest but readable. The source’s concrete type anchors are `font-dmSans`, `text-3xl`, `font-bold`, `tracking-tight`, `text-lg`, `font-medium`, `text-xs`, `tracking-widest`, `text-sm`, `font-black`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `text-zinc-900`, `border-zinc-200`, `border-zinc-900`, `text-zinc-500`, `border-zinc-500`, `text-zinc-400`, `text-zinc-950`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Preserve strong column alignment and generous terminal whitespace; collapse navigation groups predictably without hiding legal links.

## Background construction

Use a white field, zinc rules, backdrop-blurred utility row and a 12vw low-opacity brand word as the dominant graphic.

## Imagery and iconography

Use a wordmark, small brand symbol or restrained background art—never unrelated stock imagery.

## Unique components and signature effects

1. **Monumental wordmark footer.** Use a white field, zinc rules, backdrop-blurred utility row and a 12vw low-opacity brand word as the dominant graphic.
   - **Use it for:** ending an editorial page with typographic scale
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Border-led structure

**Location:** `packages/blocks/src/footer-section/footer-bold.tsx:1-6`
**Why it is core:** Hairline borders establish grouping and rhythm without relying on filled cards.

```tsx
export const BoldFooter = () => {
  return (
    <footer className="w-full min-h-screen bg-white text-zinc-900 overflow-hidden border-t border-zinc-200 font-dmSans">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-md">
```

### 2. Border-led structure

**Location:** `packages/blocks/src/footer-section/footer-bold.tsx:9-15`
**Why it is core:** Hairline borders establish grouping and rhythm without relying on filled cards.

```tsx
            </h2>
            <a
              href="mailto:hello@example.com"
              className="text-lg font-medium border-b-2 border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-all"
            >
              hello@example.com
            </a>
```

### 3. Translucent glass layer

**Location:** `packages/blocks/src/footer-section/footer-bold.tsx:45-54`
**Why it is core:** Blur, transparency, border, and stacking work together as one glass treatment.

```tsx
        </div>

        <div className="relative w-full">
          <h1 className="text-[12vw] font-black tracking-tighter text-zinc-950 select-none pointer-events-none leading-none -mb-[2vw] opacity-5">
            UI-Layouts
          </h1>
          <div className="flex justify-between items-end border-t backdrop-blur border-zinc-200 pt-8 pb-6 relative z-10">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
              © 2026 UI-Layouts{' '}
            </span>
```
<!-- source-audit:end -->

## Buttons

Newsletter and final CTAs use the block’s primary contrast; utility/social controls are smaller but retain 44px targets.

## Motion and interaction states

Keep footer motion minimal: link color/underline and button press states are sufficient.

## Rules for extending this design

1. Carry the **Monumental wordmark footer** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Footer Bold**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
