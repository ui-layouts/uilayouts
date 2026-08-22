# Bento — Design System

> Use this file as the complete visual and implementation brief for extending the `about-bento` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/about-section/about-bento.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-bento.tsx) — the canonical block source and the exact effect composition
- [`packages/shadcn/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/shadcn/src/index.tsx) — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.

## Design thesis

Violet achievement bento defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `font-dmSans`, `text-5xl`, `font-bold`, `text-xl`, `font-black`, `tracking-widest`, `tracking-tighter`, `leading-tight`, `leading-relaxed`, `text-xs`.

## Palette and contrast

Core palette: `bg-slate-50`, `text-slate-900`, `text-slate-600`, `bg-white`, `bg-violet-600`, `bg-emerald-500`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.

## Background construction

Mix white cards with one dark gray and one violet field; use emerald/violet status marks and a white 12px glow around key proof, with a 180° rotating icon on hover.

## Imagery and iconography

Use documentary portraits, work samples, or brand proof; preserve the source crop and color-to-grayscale behavior.

## Unique components and signature effects

1. **Violet achievement bento.** Mix white cards with one dark gray and one violet field; use emerald/violet status marks and a white 12px glow around key proof, with a 180° rotating icon on hover.
   - **Use it for:** compressing company story, traction, and values into scan-friendly proof
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Overlapping transformed composition

[Open the exact implementation (lines 21–27)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-bento.tsx#L21-L27) — Rotation and offset create the intentionally physical, layered arrangement.

### 2. Custom elevation recipe

[Open the exact implementation (lines 53–59)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-bento.tsx#L53-L59) — The nonstandard shadow values create the block’s characteristic depth.
<!-- source-audit:end -->

## Buttons

Use one decisive filled CTA and a lower-emphasis text/outline action; buttons should never compete with imagery.

## Motion and interaction states

Stagger story elements gently; image reveals and hover states should feel editorial rather than app-like.

## Rules for extending this design

1. Carry the **Violet achievement bento** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
