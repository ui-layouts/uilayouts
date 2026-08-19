# Footer Minimal — Design System

> Use this file as the complete visual and implementation brief for extending the `footer-minimal` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/footer-section/footer-minimal.tsx` — the canonical block source and the exact effect composition
- `packages/ui/src/index.tsx` — the open-source workspace UI primitive barrel used by this block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@repo/ui** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.

## Design thesis

Centered minimal footer defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use clear link-group headings, compact links and a brand statement sized to the footer’s role; legal text is smallest but readable. The source’s concrete type anchors are `text-sm`, `font-semibold`, `tracking-tight`, `leading-relaxed`, `text-xs`, `tracking-wider`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `border-zinc-200`, `bg-zinc-900`, `text-zinc-600`, `text-zinc-400`, `text-zinc-900`, `bg-zinc-50`, `text-white`, `bg-zinc-800`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Preserve strong column alignment and generous terminal whitespace; collapse navigation groups predictably without hiding legal links.

## Background construction

Use white/zinc-50 space, one dark capsule or icon and very few links; vertically center the floating mark with -50% translation and avoid decorative effects.

## Imagery and iconography

Use a wordmark, small brand symbol or restrained background art—never unrelated stock imagery.

## Unique components and signature effects

1. **Centered minimal footer.** Use white/zinc-50 space, one dark capsule or icon and very few links; vertically center the floating mark with -50% translation and avoid decorative effects.
   - **Use it for:** providing a quiet conclusion after visually rich content
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Border-led structure

**Location:** `packages/blocks/src/footer-section/footer-minimal.tsx:4-10`
**Why it is core:** Hairline borders establish grouping and rhythm without relying on filled cards.

```tsx

export const MinimalFooter = () => {
  return (
    <footer className="w-full bg-white border-t border-zinc-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
```

### 2. Border-led structure

**Location:** `packages/blocks/src/footer-section/footer-minimal.tsx:105-113`
**Why it is core:** Hairline borders establish grouping and rhythm without relying on filled cards.

```tsx
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-all"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-zinc-900 text-white size-6 rounded flex items-center justify-center hover:bg-zinc-800 transition-colors">
                <svg
                  className="size-3"
                  fill="none"
```

### 3. Border-led structure

**Location:** `packages/blocks/src/footer-section/footer-minimal.tsx:127-133`
**Why it is core:** Hairline borders establish grouping and rhythm without relying on filled cards.

```tsx
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="text-xs text-zinc-400">© 2026 Minimal Inc.</span>
            <div className="flex items-center gap-4">
```
<!-- source-audit:end -->

## Buttons

Newsletter and final CTAs use the block’s primary contrast; utility/social controls are smaller but retain 44px targets.

## Motion and interaction states

Keep footer motion minimal: link color/underline and button press states are sufficient.

## Rules for extending this design

1. Carry the **Centered minimal footer** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Footer Minimal**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
