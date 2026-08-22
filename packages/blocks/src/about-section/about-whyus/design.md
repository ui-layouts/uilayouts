# About Why Us — Design System

> Use this file as the complete visual and implementation brief for extending the `about-whyus` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/about-section/about-whyus.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-whyus.tsx) — the canonical block source and the exact effect composition

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.

## Design thesis

Lifted proof cards defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `font-manrope`, `text-7xl`, `font-bold`, `tracking-tighter`, `font-medium`, `text-xs`, `text-lg`, `leading-relaxed`, `text-sm`, `text-3xl`.

## Palette and contrast

Core palette: `bg-slate-50`, `bg-[repeating-linear-gradient(45deg,#efefef_0px_1px,transparent_1px_8px)]`, `text-slate-900`, `text-slate-500`, `text-orange-500`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.

## Background construction

Place white proof cards on a faint diagonal hatch that is radially masked away; use orange only for icon emphasis and lift cards 8px into a 2xl shadow on hover.

## Imagery and iconography

Use documentary portraits, work samples, or brand proof; preserve the source crop and color-to-grayscale behavior.

## Unique components and signature effects

1. **Lifted proof cards.** Place white proof cards on a faint diagonal hatch that is radially masked away; use orange only for icon emphasis and lift cards 8px into a 2xl shadow on hover.
   - **Use it for:** making differentiators feel like physical evidence
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Radial background field

[Open the exact implementation (lines 5–11)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-whyus.tsx#L5-L11) — The gradient’s focal point, stops, and layer position establish the block’s backdrop.

### 2. Depth and glow treatment

[Open the exact implementation (lines 84–90)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-whyus.tsx#L84-L90) — These exact shadows and blur layers distinguish foreground from atmosphere.
<!-- source-audit:end -->

## Buttons

Use one decisive filled CTA and a lower-emphasis text/outline action; buttons should never compete with imagery.

## Motion and interaction states

Stagger story elements gently; image reveals and hover states should feel editorial rather than app-like.

## Rules for extending this design

1. Carry the **Lifted proof cards** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
