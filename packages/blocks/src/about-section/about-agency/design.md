# Agency — Design System

> Use this file as the complete visual and implementation brief for extending the `about-agency` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/about-section/about-agency.tsx` — the canonical block source and the exact effect composition
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Cinematic agency collage defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `text-7xl`, `text-8xl`, `font-bold`, `font-spaceGrotesk`, `tracking-tighter`, `text-xl`, `text-2xl`, `leading-relaxed`, `text-lg`, `text-sm`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `text-black`, `text-zinc-600`, `text-zinc-400`, `bg-black`, `bg-black/90`, `text-white`, `bg-zinc-100`, `bg-white/10`, `border-white/20`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.

## Background construction

Use a black hero panel with white type, grayscale imagery that develops into color on hover, translucent white/10 overlays, backdrop blur, and rotating/scaling motion cards.

## Imagery and iconography

Use documentary portraits, work samples, or brand proof; preserve the source crop and color-to-grayscale behavior.

## Unique components and signature effects

1. **Cinematic agency collage.** Use a black hero panel with white type, grayscale imagery that develops into color on hover, translucent white/10 overlays, backdrop blur, and rotating/scaling motion cards.
   - **Use it for:** making capabilities feel bold, visual, and portfolio-led
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Motion-driven behavior

**Location:** `packages/blocks/src/about-section/about-agency.tsx:8-16`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <h1 className="text-7xl md:text-8xl font-bold font-spaceGrotesk tracking-tighter ">
```

### 2. Motion-driven behavior

**Location:** `packages/blocks/src/about-section/about-agency.tsx:35-50`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
              </p>

              <div className="pt-4">
                <Button className="h-12 px-8 bg-black dark:hover:bg-black/90 hover:bg-black/90 text-white rounded-full font-bold text-sm transition-transform active:scale-95 duration-200">
                  Our Portfolio
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            className="relative aspect-4/5 lg:aspect-square overflow-hidden rounded-3xl bg-zinc-100 shadow-2xl"
          >
```

### 3. Translucent glass layer

**Location:** `packages/blocks/src/about-section/about-agency.tsx:51-63`
**Why it is core:** Blur, transparency, border, and stacking work together as one glass treatment.

```tsx
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
              alt="Our creative team in action"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
            <div className="absolute top-8 right-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="size-28 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center p-4 text-center"
              >
                <span className="text-xs font-black uppercase text-white tracking-[0.2em] leading-tight">
                  Design • Strategy • Future
```
<!-- source-audit:end -->

## Buttons

Use one decisive filled CTA and a lower-emphasis text/outline action; buttons should never compete with imagery.

## Motion and interaction states

Stagger story elements gently; image reveals and hover states should feel editorial rather than app-like.

## Rules for extending this design

1. Carry the **Cinematic agency collage** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Agency**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
