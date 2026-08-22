# Creative — Design System

> Use this file as the complete visual and implementation brief for extending the `about-me` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/about-section/about-me.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-me.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/lib/utils.ts`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/lib/utils.ts) — the class-merging utility
- [`packages/shadcn/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/shadcn/src/index.tsx) — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@/lib/utils** (repository primitive) — the class-merging utility. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Playful portrait cards defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `font-manrope`, `font-serif`, `text-2xl`, `text-sm`, `font-medium`, `text-6xl`, `font-bold`, `text-xl`, `leading-relaxed`, `font-semibold`.

## Palette and contrast

Core palette: `bg-neutral-100`, `bg-gray-200`, `text-gray-800`, `bg-gray-400`, `bg-violet-600`, `bg-violet-700`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.

## Background construction

Overlap two portrait cards at opposing ±6° rotations, use violet as the sole brand accent, and let arrow affordances travel slightly on hover.

## Imagery and iconography

Use documentary portraits, work samples, or brand proof; preserve the source crop and color-to-grayscale behavior.

## Unique components and signature effects

1. **Playful portrait cards.** Overlap two portrait cards at opposing ±6° rotations, use violet as the sole brand accent, and let arrow affordances travel slightly on hover.
   - **Use it for:** creating a personable, handmade introduction
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Overlapping transformed composition

[Open the exact implementation (lines 16–22)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-me.tsx#L16-L22) — Rotation and offset create the intentionally physical, layered arrangement.

### 2. Source-specific visual behavior

[Open the exact implementation (lines 46–54)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-me.tsx#L46-L54) — This source fragment contains a high-signal visual or interaction decision unique to the block.

### 3. Overlapping transformed composition

[Open the exact implementation (lines 55–61)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-me.tsx#L55-L61) — Rotation and offset create the intentionally physical, layered arrangement.
<!-- source-audit:end -->

## Buttons

Use one decisive filled CTA and a lower-emphasis text/outline action; buttons should never compete with imagery.

## Motion and interaction states

Stagger story elements gently; image reveals and hover states should feel editorial rather than app-like.

## Rules for extending this design

1. Carry the **Playful portrait cards** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
