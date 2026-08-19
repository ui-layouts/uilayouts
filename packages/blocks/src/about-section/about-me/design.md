# Creative — Design System

> Use this file as the complete visual and implementation brief for extending the `about-me` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/about-section/about-me.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/lib/utils.ts` — the class-merging utility
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@/lib/utils** (local) — the class-merging utility.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Playful portrait cards defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `font-manrope`, `font-serif`, `text-2xl`, `text-sm`, `font-medium`, `text-6xl`, `font-bold`, `text-xl`, `leading-relaxed`, `font-semibold`.

## Palette and contrast

The implementation anchors its palette with `bg-neutral-100`, `bg-gray-200`, `text-gray-800`, `bg-gray-400`, `text-gray-500`, `text-gray-900`, `text-gray-600`, `bg-violet-600`, `bg-violet-700`, `text-white`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.

## Background construction

Overlap two portrait cards at opposing ±6° rotations, use violet as the sole brand accent, and let arrow affordances travel slightly on hover.

## Imagery and iconography

Use documentary portraits, work samples, or brand proof; preserve the source crop and color-to-grayscale behavior.

## Unique components and signature effects

1. **Playful portrait cards.** Overlap two portrait cards at opposing ±6° rotations, use violet as the sole brand accent, and let arrow affordances travel slightly on hover.
   - **Use it for:** creating a personable, handmade introduction
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Overlapping transformed composition

**Location:** `packages/blocks/src/about-section/about-me.tsx:16-22`
**Why it is core:** Rotation and offset create the intentionally physical, layered arrangement.

```tsx
          </div>
          <div className="absolute -bottom-12 -left-4">
            {/* Simple representation of the handwritten signature */}
            <div className="font-serif italic text-2xl text-gray-800 -rotate-6">
              Naymur Rahman
              <div className="h-px w-48 bg-gray-400 -mt-1"></div>
            </div>
```

### 2. Source-specific visual behavior

**Location:** `packages/blocks/src/about-section/about-me.tsx:46-54`
**Why it is core:** This source fragment contains a high-signal visual or interaction decision unique to the block.

```tsx
            </p>
          </div>

          <Button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-colors group">
            Read My Full Story
            <div className="size-8 bg-white rounded-full flex items-center justify-center text-violet-600 group-hover:translate-x-1 transition-transform">
              <span className="text-lg">›</span>
            </div>
          </Button>
```

### 3. Overlapping transformed composition

**Location:** `packages/blocks/src/about-section/about-me.tsx:55-61`
**Why it is core:** Rotation and offset create the intentionally physical, layered arrangement.

```tsx
        </div>

        <div className="hidden lg:block w-48 shrink-0 self-end">
          <div className="aspect-square rounded-3xl overflow-hidden bg-gray-200 rotate-6 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1765779038142-054a9f8c2268?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover"
```
<!-- source-audit:end -->

## Buttons

Use one decisive filled CTA and a lower-emphasis text/outline action; buttons should never compete with imagery.

## Motion and interaction states

Stagger story elements gently; image reveals and hover states should feel editorial rather than app-like.

## Rules for extending this design

1. Carry the **Playful portrait cards** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Creative**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
