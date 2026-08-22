# Vision — Design System

> Use this file as the complete visual and implementation brief for extending the `about-vision` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/about-section/about-vision.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-vision.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/lib/utils.ts`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/lib/utils.ts) — the class-merging utility
- [`packages/shadcn/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/shadcn/src/index.tsx) — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@/lib/utils** (repository primitive) — the class-merging utility. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Deep-blue vision window defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `font-dmSans`, `text-5xl`, `font-bold`, `tracking-tight`, `text-xs`, `font-medium`, `tracking-widest`, `text-sm`, `leading-relaxed`, `text-4xl`.

## Palette and contrast

Core palette: `bg-white`, `text-black`, `bg-black/60`, `text-white`, `text-blue-500`, `bg-blue-50`, `text-blue-950`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.

## Background construction

Use a blue-950 photographic stage with a black/60 readable overlay, blue-50 supporting cards, grayscale-to-color imagery, and a restrained blue shadow bloom.

## Imagery and iconography

Use documentary portraits, work samples, or brand proof; preserve the source crop and color-to-grayscale behavior.

## Unique components and signature effects

1. **Deep-blue vision window.** Use a blue-950 photographic stage with a black/60 readable overlay, blue-50 supporting cards, grayscale-to-color imagery, and a restrained blue shadow bloom.
   - **Use it for:** framing a future-facing statement as cinematic but credible
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Translucent glass layer

[Open the exact implementation (lines 13–28)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-vision.tsx#L13-L28) — Blur, transparency, border, and stacking work together as one glass treatment.

### 2. Motion-driven behavior

[Open the exact implementation (lines 53–59)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-vision.tsx#L53-L59) — The motion configuration controls the effect’s timing, position, and interaction response.

### 3. Motion-driven behavior

[Open the exact implementation (lines 82–88)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-vision.tsx#L82-L88) — The motion configuration controls the effect’s timing, position, and interaction response.
<!-- source-audit:end -->

## Buttons

Use one decisive filled CTA and a lower-emphasis text/outline action; buttons should never compete with imagery.

## Motion and interaction states

Stagger story elements gently; image reveals and hover states should feel editorial rather than app-like.

## Rules for extending this design

1. Carry the **Deep-blue vision window** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
