# Vision — Design System

> Use this file as the complete visual and implementation brief for extending the `about-vision` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/about-section/about-vision.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/lib/utils.ts` — the class-merging utility
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@/lib/utils** (local) — the class-merging utility.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Deep-blue vision window defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `font-dmSans`, `text-5xl`, `font-bold`, `tracking-tight`, `text-xs`, `font-medium`, `tracking-widest`, `text-sm`, `leading-relaxed`, `text-4xl`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `text-black`, `bg-black/60`, `text-white`, `text-zinc-300`, `text-blue-500`, `bg-blue-50`, `text-blue-950`, `bg-blue-800`, `text-white/70`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.

## Background construction

Use a blue-950 photographic stage with a black/60 readable overlay, blue-50 supporting cards, grayscale-to-color imagery, and a restrained blue shadow bloom.

## Imagery and iconography

Use documentary portraits, work samples, or brand proof; preserve the source crop and color-to-grayscale behavior.

## Unique components and signature effects

1. **Deep-blue vision window.** Use a blue-950 photographic stage with a black/60 readable overlay, blue-50 supporting cards, grayscale-to-color imagery, and a restrained blue shadow bloom.
   - **Use it for:** framing a future-facing statement as cinematic but credible
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Translucent glass layer

**Location:** `packages/blocks/src/about-section/about-vision.tsx:13-28`
**Why it is core:** Blur, transparency, border, and stacking work together as one glass treatment.

```tsx
            alt="Consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white tracking-tight"
          >
            About Us
          </motion.h1>
          <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-300">
            <span>Home</span>
            <span className="text-blue-500">→</span>
```

### 2. Motion-driven behavior

**Location:** `packages/blocks/src/about-section/about-vision.tsx:53-59`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
                textColor: 'text-white/70',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
```

### 3. Motion-driven behavior

**Location:** `packages/blocks/src/about-section/about-vision.tsx:82-88`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
                  condimentum, turpis neque commodo mauris, id rutrum lacus nisl
                  a risus.
                </p>
              </motion.div>
            ))}
          </div>
```
<!-- source-audit:end -->

## Buttons

Use one decisive filled CTA and a lower-emphasis text/outline action; buttons should never compete with imagery.

## Motion and interaction states

Stagger story elements gently; image reveals and hover states should feel editorial rather than app-like.

## Rules for extending this design

1. Carry the **Deep-blue vision window** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Vision**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
