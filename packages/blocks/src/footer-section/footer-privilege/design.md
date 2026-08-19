# Footer Privilege — Design System

> Use this file as the complete visual and implementation brief for extending the `footer-privilege` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/footer-section/footer-privilege.tsx` — the canonical block source and the exact effect composition

## Required libraries and primitives

- No effect library is required. The effect is built directly in the canonical block with React and CSS/Tailwind.

## Design thesis

Luxury access footer defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use clear link-group headings, compact links and a brand statement sized to the footer’s role; legal text is smallest but readable. The source’s concrete type anchors are `text-7xl`, `font-light`, `tracking-tighter`, `text-2xl`, `font-semibold`, `tracking-tight`, `leading-relaxed`, `text-xs`, `font-bold`, `font-medium`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `bg-zinc-950`, `text-black`, `text-white`, `border-gray-100`, `border-zinc-900`, `bg-black`, `border-white`, `border-zinc-950`, `text-gray-400`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Preserve strong column alignment and generous terminal whitespace; collapse navigation groups predictably without hiding legal links.

## Background construction

Use black/zinc-950 surfaces, thin white borders, tiny uppercase labels and a 45° geometric diamond; treat spacing and contrast as the luxury signal.

## Imagery and iconography

Use a wordmark, small brand symbol or restrained background art—never unrelated stock imagery.

## Unique components and signature effects

1. **Luxury access footer.** Use black/zinc-950 surfaces, thin white borders, tiny uppercase labels and a 45° geometric diamond; treat spacing and contrast as the luxury signal.
   - **Use it for:** closing a premium or members-only experience
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Border-led structure

**Location:** `packages/blocks/src/footer-section/footer-privilege.tsx:2-8`
**Why it is core:** Hairline borders establish grouping and rhythm without relying on filled cards.

```tsx

export const FooterPrivilege = () => {
  return (
    <footer className="bg-white dark:bg-zinc-950 text-black dark:text-white py-20 px-8 border-t border-gray-100 dark:border-zinc-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
        <div>
          <h2 className="text-7xl font-light tracking-tighter mb-4">
```

### 2. Overlapping transformed composition

**Location:** `packages/blocks/src/footer-section/footer-privilege.tsx:10-16`
**Why it is core:** Rotation and offset create the intentionally physical, layered arrangement.

```tsx
          </h2>
          <div className="mt-16 flex items-center gap-4">
            <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center rounded-sm">
              {/* <div className="w-6 h-6 border-2 border-white dark:border-zinc-950 rotate-45"></div> */}
              <svg
                width="285"
                height="318"
```

### 3. Border-led structure

**Location:** `packages/blocks/src/footer-section/footer-privilege.tsx:43-49`
**Why it is core:** Hairline borders establish grouping and rhythm without relying on filled cards.

```tsx
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-gray-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400 dark:text-zinc-600">
        <p>© 2026 LAYOUTS EQUITY</p>
        <p>ALL RIGHTS RESERVED</p>
        <a href="https://x.com/naymur_dev" target="_blank">
```
<!-- source-audit:end -->

## Buttons

Newsletter and final CTAs use the block’s primary contrast; utility/social controls are smaller but retain 44px targets.

## Motion and interaction states

Keep footer motion minimal: link color/underline and button press states are sufficient.

## Rules for extending this design

1. Carry the **Luxury access footer** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Footer Privilege**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
