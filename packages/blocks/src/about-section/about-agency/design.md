# Agency — Design System

> Use this file as the complete visual and implementation brief for extending the `about-agency` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/about-section/about-agency.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-agency.tsx) — the canonical block source and the exact effect composition
- [`packages/shadcn/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/shadcn/src/index.tsx) — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Cinematic agency collage defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `text-7xl`, `text-8xl`, `font-bold`, `font-spaceGrotesk`, `tracking-tighter`, `text-xl`, `text-2xl`, `leading-relaxed`, `text-lg`, `text-sm`.

## Palette and contrast

Core palette: `bg-white`, `text-black`, `text-zinc-600`, `text-zinc-400`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.

## Background construction

Use a black hero panel with white type, grayscale imagery that develops into color on hover, translucent white/10 overlays, backdrop blur, and rotating/scaling motion cards.

## Imagery and iconography

Use documentary portraits, work samples, or brand proof; preserve the source crop and color-to-grayscale behavior.

## Unique components and signature effects

1. **Cinematic agency collage.** Use a black hero panel with white type, grayscale imagery that develops into color on hover, translucent white/10 overlays, backdrop blur, and rotating/scaling motion cards.
   - **Use it for:** making capabilities feel bold, visual, and portfolio-led
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Motion-driven behavior

[Open the exact implementation (lines 8–16)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-agency.tsx#L8-L16) — The motion configuration controls the effect’s timing, position, and interaction response.

### 2. Motion-driven behavior

[Open the exact implementation (lines 35–50)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-agency.tsx#L35-L50) — The motion configuration controls the effect’s timing, position, and interaction response.

### 3. Translucent glass layer

[Open the exact implementation (lines 51–63)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-agency.tsx#L51-L63) — Blur, transparency, border, and stacking work together as one glass treatment.
<!-- source-audit:end -->

## Buttons

Use one decisive filled CTA and a lower-emphasis text/outline action; buttons should never compete with imagery.

## Motion and interaction states

Stagger story elements gently; image reveals and hover states should feel editorial rather than app-like.

## Rules for extending this design

1. Carry the **Cinematic agency collage** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
