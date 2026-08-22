# SASS — Design System

> Use this file as the complete visual and implementation brief for extending the `about-sass` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/about-section/about-sass.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-sass.tsx) — the canonical block source and the exact effect composition

## Required libraries and primitives

- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.

## Design thesis

SaaS metrics mosaic defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Favor editorial headings with short line lengths, neutral body copy, and tiny metadata where the story needs evidence. The source’s concrete type anchors are `font-black`, `text-6xl`, `text-7xl`, `font-bold`, `tracking-tighter`, `text-xl`, `leading-relaxed`, `text-xs`, `font-dmSans`, `font-semibold`.

## Palette and contrast

Core palette: `bg-zinc-50`, `text-black`, `bg-white`, `border-zinc-200/60`, `shadow-[0_0_10px_rgba(0,0,0,0.1)]`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Alternate narrative copy and art-directed imagery; use asymmetry or bento spans intentionally, then stack in reading order on mobile.

## Background construction

Compose white/zinc metric tiles with hairline borders and tiny 10px labels; include a nearly invisible decorative layer and 10px ambient card shadow, strengthening elevation on hover.

## Imagery and iconography

Use documentary portraits, work samples, or brand proof; preserve the source crop and color-to-grayscale behavior.

## Unique components and signature effects

1. **SaaS metrics mosaic.** Compose white/zinc metric tiles with hairline borders and tiny 10px labels; include a nearly invisible decorative layer and 10px ambient card shadow, strengthening elevation on hover.
   - **Use it for:** balancing credible metrics with clean software-product polish
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Motion-driven behavior

[Open the exact implementation (lines 48–54)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-sass.tsx#L48-L54) — The motion configuration controls the effect’s timing, position, and interaction response.

### 2. Custom elevation recipe

[Open the exact implementation (lines 55–65)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-sass.tsx#L55-L65) — The nonstandard shadow values create the block’s characteristic depth.

### 3. Motion-driven behavior

[Open the exact implementation (lines 119–125)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/about-section/about-sass.tsx#L119-L125) — The motion configuration controls the effect’s timing, position, and interaction response.
<!-- source-audit:end -->

## Buttons

Use one decisive filled CTA and a lower-emphasis text/outline action; buttons should never compete with imagery.

## Motion and interaction states

Stagger story elements gently; image reveals and hover states should feel editorial rather than app-like.

## Rules for extending this design

1. Carry the **SaaS metrics mosaic** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
