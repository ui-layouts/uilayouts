# SASS — Design System

> Use this file as the complete visual and implementation brief for extending the `about-sass` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/about-section/about-sass.tsx` — the canonical block source and the exact effect composition

## Required libraries and primitives

- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.

## Design thesis

SaaS metrics mosaic defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `font-black`, `text-6xl`, `text-7xl`, `font-bold`, `tracking-tighter`, `text-xl`, `leading-relaxed`, `text-xs`, `font-dmSans`, `font-semibold`.

## Palette and contrast

The implementation anchors its palette with `bg-zinc-50`, `text-black`, `bg-white`, `border-zinc-200/60`, `bg-black`, `shadow-[0_0_10px_rgba(0,0,0,0.1)]`, `text-zinc-900`, `text-zinc-500`, `border-zinc-100`, `text-zinc-400`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.

## Background construction

Compose white/zinc metric tiles with hairline borders and tiny 10px labels; include a nearly invisible decorative layer and 10px ambient card shadow, strengthening elevation on hover.

## Imagery and iconography

Use documentary portraits, work samples, or brand proof; preserve the source crop and color-to-grayscale behavior.

## Unique components and signature effects

1. **SaaS metrics mosaic.** Compose white/zinc metric tiles with hairline borders and tiny 10px labels; include a nearly invisible decorative layer and 10px ambient card shadow, strengthening elevation on hover.
   - **Use it for:** balancing credible metrics with clean software-product polish
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Motion-driven behavior

**Location:** `packages/blocks/src/about-section/about-sass.tsx:48-54`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
          />

          <div className="max-w-3xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
```

### 2. Custom elevation recipe

**Location:** `packages/blocks/src/about-section/about-sass.tsx:55-65`
**Why it is core:** The nonstandard shadow values create the block’s characteristic depth.

```tsx
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="size-2.5 bg-black rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-900">
                Company Introduction
              </span>
            </motion.div>

            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-balance leading-[0.9] mb-8">
              Built by developers, <br /> for the future of SaaS.
```

### 3. Motion-driven behavior

**Location:** `packages/blocks/src/about-section/about-sass.tsx:119-125`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
            />
            <div className="space-y-4 relative z-10">
              <div className="h-1 w-full bg-zinc-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '0%' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
```
<!-- source-audit:end -->

## Buttons

Use one decisive filled CTA and a lower-emphasis text/outline action; buttons should never compete with imagery.

## Motion and interaction states

Stagger story elements gently; image reveals and hover states should feel editorial rather than app-like.

## Rules for extending this design

1. Carry the **SaaS metrics mosaic** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **SASS**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
