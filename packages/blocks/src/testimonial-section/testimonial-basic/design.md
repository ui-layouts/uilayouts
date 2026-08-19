# Testimonial Basic — Design System

> Use this file as the complete visual and implementation brief for extending the `testimonial-basic` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/testimonial-section/testimonial-basic.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/lib/utils.ts` — the class-merging utility

## Required libraries and primitives

- **@/lib/utils** (local) — the class-merging utility.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Photo-backed glass quote defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Quotes use generous readable type; names, roles and ratings use a compact supporting scale with obvious hierarchy. The source’s concrete type anchors are `font-dmSans`, `text-sm`, `font-semibold`, `tracking-widest`, `text-5xl`, `text-7xl`, `font-black`, `tracking-tighter`, `font-mono`, `text-2xl`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `text-black`, `border-neutral-200`, `bg-neutral-100`, `bg-[repeating-linear-gradient(45deg,#eeeeee_0px_1px,transparent_1px_8px)]`, `bg-black/50`, `border-white/20`, `text-white`, `bg-neutral-50`, `bg-neutral-200`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Keep a stable reading width even when cards move; on mobile show one primary quote and retain clear navigation.

## Background construction

Use a diagonal paper hatch outside the card; overlay imagery with black/50 and backdrop blur, then place white copy and a restrained violet edge inside.

## Imagery and iconography

Use consistent avatar crops and genuine product/chat context; stars or platform marks are supporting evidence.

## Unique components and signature effects

1. **Photo-backed glass quote.** Use a diagonal paper hatch outside the card; overlay imagery with black/50 and backdrop blur, then place white copy and a restrained violet edge inside.
   - **Use it for:** creating one cinematic, readable customer statement
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Patterned background layer

**Location:** `packages/blocks/src/testimonial-section/testimonial-basic.tsx:53-59`
**Why it is core:** The repeated line recipe gives the surface its recognizable texture.

```tsx
            )}
          >
            <div className="lg:col-span-7 p-6 bg-neutral-100 overflow-hidden aspect-video relative group cursor-pointer">
              <div className="absolute pointer-events-none bottom-0 left-0 right-0 top-0 bg-[repeating-linear-gradient(45deg,#eeeeee_0px_1px,transparent_1px_8px)] "></div>

              <img
                src={t.videoThumbnail}
```

### 2. Translucent glass layer

**Location:** `packages/blocks/src/testimonial-section/testimonial-basic.tsx:60-66`
**Why it is core:** Blur, transparency, border, and stacking work together as one glass treatment.

```tsx
                className="w-full h-full relative z-10 object-cover transition-transform duration-300 rounded-2xl"
                alt={`Testimonial Video ${i}`}
              />
              <div className="absolute bottom-8 left-8 z-10 bg-black/50 backdrop-blur px-6 py-3 rounded-2xl border border-white/20">
                <span className="text-white font-mono text-sm tracking-tighter">
                  04:32 // HD_PLAYBACK
                </span>
```

### 3. Patterned background layer

**Location:** `packages/blocks/src/testimonial-section/testimonial-basic.tsx:67-76`
**Why it is core:** The repeated line recipe gives the surface its recognizable texture.

```tsx
              </div>
            </div>

            <div className="lg:col-span-5 border-l border-neutral-200">
              <div className="flex gap-2 items-center border-b p-2 bg-neutral-50 border-neutral-200 relative">
                <div className="absolute pointer-events-none  bottom-0 left-0 right-0 top-0 bg-[repeating-linear-gradient(45deg,#eeeeee_0px_1px,transparent_1px_8px)] "></div>
                <div className="relative z-10 size-16 rounded-3xl overflow-hidden bg-neutral-200 border-4 border-violet-50">
                  <img
                    src={t.image}
                    alt={t.name}
```
<!-- source-audit:end -->

## Buttons

Navigation is compact, high-contrast and tactile; testimonial cards themselves are not buttons unless explicitly interactive.

## Motion and interaction states

Use spring or carousel motion to explain reordering; respect reduced motion and never animate while a user is reading unexpectedly.

## Rules for extending this design

1. Carry the **Photo-backed glass quote** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Testimonial Basic**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
