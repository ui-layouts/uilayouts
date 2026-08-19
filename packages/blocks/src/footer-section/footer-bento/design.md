# Footer Bento — Design System

> Use this file as the complete visual and implementation brief for extending the `footer-bento` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/footer-section/footer-bento.tsx` — the canonical block source and the exact effect composition
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.

## Design thesis

Utility bento footer defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use clear link-group headings, compact links and a brand statement sized to the footer’s role; legal text is smallest but readable. The source’s concrete type anchors are `text-2xl`, `font-bold`, `tracking-tight`, `leading-relaxed`, `text-sm`, `font-semibold`, `text-xs`, `tracking-widest`, `font-medium`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `bg-neutral-900`, `border-neutral-200`, `border-neutral-800`, `bg-neutral-100`, `text-neutral-950`, `text-neutral-50`, `text-neutral-500`, `text-neutral-400`, `text-white`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Preserve strong column alignment and generous terminal whitespace; collapse navigation groups predictably without hiding legal links.

## Background construction

Segment navigation, newsletter and identity into mixed neutral tiles; alternate light/dark surfaces instead of using one horizontal footer band.

## Imagery and iconography

Use a wordmark, small brand symbol or restrained background art—never unrelated stock imagery.

## Unique components and signature effects

1. **Utility bento footer.** Segment navigation, newsletter and identity into mixed neutral tiles; alternate light/dark surfaces instead of using one horizontal footer band.
   - **Use it for:** making dense footer utilities scan like a dashboard
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Structural border treatment

**Location:** `packages/blocks/src/footer-section/footer-bento.tsx:7-13`
**Why it is core:** The border placement creates the block’s visual grouping and alignment.

```tsx
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Main Info Card */}
          <div className="md:col-span-2 row-span-2 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 flex flex-col justify-between">
            <div>
              <div className="size-10 rounded-xl bg-neutral-900 dark:bg-neutral-100 mb-6 flex items-center justify-center">
                <Rainbow />
```

### 2. Structural border treatment

**Location:** `packages/blocks/src/footer-section/footer-bento.tsx:21-30`
**Why it is core:** The border placement creates the block’s visual grouping and alignment.

```tsx
              </p>
            </div>
            <div className="mt-12 flex gap-4">
              <Button className="px-6 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                Get Started
              </Button>
              <Button className="px-6 py-2.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-50 rounded-lg text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                Book Demo
              </Button>
            </div>
```

### 3. Structural border treatment

**Location:** `packages/blocks/src/footer-section/footer-bento.tsx:31-37`
**Why it is core:** The border placement creates the block’s visual grouping and alignment.

```tsx
          </div>

          {/* Social Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 flex flex-col justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
              Connect
            </span>
```
<!-- source-audit:end -->

## Buttons

Newsletter and final CTAs use the block’s primary contrast; utility/social controls are smaller but retain 44px targets.

## Motion and interaction states

Keep footer motion minimal: link color/underline and button press states are sufficient.

## Rules for extending this design

1. Carry the **Utility bento footer** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Footer Bento**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
