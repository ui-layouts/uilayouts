# Architecture — Design System

> Use this file as the complete visual and implementation brief for extending the `about-architecture` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/about-section/about-architecture.tsx` — the canonical block source and the exact effect composition

## Required libraries and primitives

- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Architectural image rhythm defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `font-black`, `text-7xl`, `text-9xl`, `font-spaceGrotesk`, `font-bold`, `tracking-tighter`, `leading-none`, `text-lg`, `leading-relaxed`, `text-xs`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `text-black`, `text-zinc-400`, `bg-zinc-200`, `text-zinc-500`, `text-white`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.

## Background construction

Use a white gallery, disciplined black type, zinc captions, and grayscale project panels that reveal color; fade and stagger images rather than adding ornamental UI.

## Imagery and iconography

Use documentary portraits, work samples, or brand proof; preserve the source crop and color-to-grayscale behavior.

## Unique components and signature effects

1. **Architectural image rhythm.** Use a white gallery, disciplined black type, zinc captions, and grayscale project panels that reveal color; fade and stagger images rather than adding ornamental UI.
   - **Use it for:** letting proportion and photography carry the identity
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Motion-driven behavior

**Location:** `packages/blocks/src/about-section/about-architecture.tsx:9-15`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-24">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
```

### 2. Motion-driven behavior

**Location:** `packages/blocks/src/about-section/about-architecture.tsx:21-27`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">
                About the Studio
              </span>
            </motion.div>
            <h2 className="text-7xl md:text-9xl font-spaceGrotesk font-bold tracking-tighter leading-none text-balance">
              Building <br /> <span className="italic">Modernity</span>.
            </h2>
```

### 3. Source-specific visual behavior

**Location:** `packages/blocks/src/about-section/about-architecture.tsx:40-49`
**Why it is core:** This source fragment contains a high-signal visual or interaction decision unique to the block.

```tsx
            <div className="aspect-3/4 overflow-hidden rounded-sm group relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000"
                className="object-cover size-full grayscale group-hover:grayscale-0 transition-all duration-1000"
                alt="Architecture detail"
              />
              <div className="absolute bottom-8 left-8 text-white mix-blend-difference">
                <span className="text-xs font-mono">
                  01 / STRUCTURAL INTEGRITY
                </span>
```
<!-- source-audit:end -->

## Buttons

Use one decisive filled CTA and a lower-emphasis text/outline action; buttons should never compete with imagery.

## Motion and interaction states

Stagger story elements gently; image reveals and hover states should feel editorial rather than app-like.

## Rules for extending this design

1. Carry the **Architectural image rhythm** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Architecture**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
