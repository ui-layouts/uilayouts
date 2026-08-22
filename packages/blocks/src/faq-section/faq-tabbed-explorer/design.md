# Tabbed Explorer FAQ — Design System

> Use this file as the complete visual and implementation brief for extending the `faq-tabbed-explorer` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/faq-section/faq-tabbed-explorer.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/faq-section/faq-tabbed-explorer.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/lib/utils.ts`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/lib/utils.ts) — the class-merging utility
- [`packages/shadcn/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/shadcn/src/index.tsx) — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@/lib/utils** (repository primitive) — the class-merging utility. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Neumorphic topic explorer defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Questions are medium/semibold and answers are relaxed body text; category labels remain compact and muted. The source’s concrete type anchors are `text-sm`, `font-semibold`, `font-spaceGrotesk`, `tracking-widest`, `font-medium`, `text-2xl`.

## Palette and contrast

Core palette: `bg-white`, `bg-slate-50`, `border-slate-200`, `text-slate-400`, `shadow-[30px_54px_67px_0px_rgba(209,217,230,0.67),25px_27px_27px_-7px_rgba(209,217,230,0.34),-34px_-30px_65px_0px_rgba(255,255,255,0.75),-9px_-20px_29px_0px_rgba(255,255,255,0.54),-13px_-11px_22px_7px_rgba(255,255,255,0.25),-16px_-7px_21px_4px_rgba(255,255,255,0.25)]`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Keep question and answer alignment stable; split previews stack beneath questions on mobile and accordion controls span the row.

## Background construction

Use slate-50 panels and a six-layer light/dark shadow recipe to create a deeply extruded navigation card; tabs change topic while the reading surface remains quiet.

## Imagery and iconography

Use preview/product imagery when it clarifies answers; decorative scenery must remain behind a contrast layer.

## Unique components and signature effects

1. **Neumorphic topic explorer.** Use slate-50 panels and a six-layer light/dark shadow recipe to create a deeply extruded navigation card; tabs change topic while the reading surface remains quiet.
   - **Use it for:** turning a large FAQ set into a soft tactile explorer
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Structural border treatment

[Open the exact implementation (lines 182–188)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/faq-section/faq-tabbed-explorer.tsx#L182-L188) — The border placement creates the block’s visual grouping and alignment.

### 2. Custom elevation recipe

[Open the exact implementation (lines 194–201)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/faq-section/faq-tabbed-explorer.tsx#L194-L201) — The nonstandard shadow values create the block’s characteristic depth.

### 3. Structural border treatment

[Open the exact implementation (lines 222–230)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/faq-section/faq-tabbed-explorer.tsx#L222-L230) — The border placement creates the block’s visual grouping and alignment.
<!-- source-audit:end -->

## Buttons

Use CTA styling only outside accordion rows; the entire question header is the disclosure button with visible focus.

## Motion and interaction states

Rotate plus/chevron indicators and reveal answer height/opacity; preserve keyboard controls and reduced-motion behavior.

## Rules for extending this design

1. Carry the **Neumorphic topic explorer** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
