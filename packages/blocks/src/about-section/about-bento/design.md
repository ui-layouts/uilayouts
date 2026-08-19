# Bento — Design System

> Use this file as the complete visual and implementation brief for extending the `about-bento` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/about-section/about-bento.tsx` — the canonical block source and the exact effect composition
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.

## Design thesis

Violet achievement bento defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `font-dmSans`, `text-5xl`, `font-bold`, `text-xl`, `font-black`, `tracking-widest`, `tracking-tighter`, `leading-tight`, `leading-relaxed`, `text-xs`.

## Palette and contrast

The implementation anchors its palette with `bg-slate-50`, `text-slate-900`, `text-slate-600`, `bg-white`, `border-slate-200`, `bg-violet-600`, `text-white`, `text-gray-900`, `text-gray-500`, `bg-emerald-500`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.

## Background construction

Mix white cards with one dark gray and one violet field; use emerald/violet status marks and a white 12px glow around key proof, with a 180° rotating icon on hover.

## Imagery and iconography

Use documentary portraits, work samples, or brand proof; preserve the source crop and color-to-grayscale behavior.

## Unique components and signature effects

1. **Violet achievement bento.** Mix white cards with one dark gray and one violet field; use emerald/violet status marks and a white 12px glow around key proof, with a 180° rotating icon on hover.
   - **Use it for:** compressing company story, traction, and values into scan-friendly proof
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Overlapping transformed composition

**Location:** `packages/blocks/src/about-section/about-bento.tsx:21-27`
**Why it is core:** Rotation and offset create the intentionally physical, layered arrangement.

```tsx
            <svg
              width="377"
              height="368"
              className="w-105 fill-neutral-100 absolute -bottom-16 group-hover:rotate-180 duration-2000 ease-in -right-16"
              viewBox="0 0 377 368"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
```

### 2. Custom elevation recipe

**Location:** `packages/blocks/src/about-section/about-bento.tsx:53-59`
**Why it is core:** The nonstandard shadow values create the block’s characteristic depth.

```tsx
            <div className="space-y-1">
              <span className="text-6xl font-black tracking-tighter">450%</span>
              <div className="h-1.5 w-full bg-white/20 rounded-full">
                <div className="h-full w-4/5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
              </div>
            </div>
          </Card>
```
<!-- source-audit:end -->

## Buttons

Use one decisive filled CTA and a lower-emphasis text/outline action; buttons should never compete with imagery.

## Motion and interaction states

Stagger story elements gently; image reveals and hover states should feel editorial rather than app-like.

## Rules for extending this design

1. Carry the **Violet achievement bento** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Bento**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
