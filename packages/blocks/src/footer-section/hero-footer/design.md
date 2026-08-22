# Footer Hero — Design System

> Use this file as the complete visual and implementation brief for extending the `footer-hero` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/footer-section/hero-footer.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/hero-footer.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/lib/utils.ts`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/lib/utils.ts) — the class-merging utility
- [`packages/shadcn/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/shadcn/src/index.tsx) — the open-source workspace component barrel used by this block
- [`packages/ui/src/index.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/ui/src/index.tsx) — the open-source workspace UI primitive barrel used by this block

## Required libraries and primitives

- **@/lib/utils** (repository primitive) — the class-merging utility. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@repo/ui** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Footer as final hero defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use clear link-group headings, compact links and a brand statement sized to the footer’s role; legal text is smallest but readable. The source’s concrete type anchors are `font-dmSans`, `text-5xl`, `text-6xl`, `font-bold`, `font-semibold`, `text-4xl`, `tracking-tighter`, `text-2xl`, `text-sm`, `font-medium`.

## Palette and contrast

Core palette: `bg-neutral-100`, `from-gray-200`, `to-gray-300`, `bg-black/20`, `bg-violet-600`, `bg-violet-700`, `text-violet-600`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Preserve strong column alignment and generous terminal whitespace; collapse navigation groups predictably without hiding legal links.

## Background construction

Treat the footer as a second conversion hero: oversized statement, violet CTA, grayscale metallic text gradient and a large black panel with 2xl depth.

## Imagery and iconography

Use a wordmark, small brand symbol or restrained background art—never unrelated stock imagery.

## Unique components and signature effects

1. **Footer as final hero.** Treat the footer as a second conversion hero: oversized statement, violet CTA, grayscale metallic text gradient and a large black panel with 2xl depth.
   - **Use it for:** ending the page with the same energy as its opening
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Depth and glow treatment

[Open the exact implementation (lines 10–19)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/hero-footer.tsx#L10-L19) — These exact shadows and blur layers distinguish foreground from atmosphere.

### 2. Structural border treatment

[Open the exact implementation (lines 94–100)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/hero-footer.tsx#L94-L100) — The border placement creates the block’s visual grouping and alignment.

### 3. Structural border treatment

[Open the exact implementation (lines 101–123)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/footer-section/hero-footer.tsx#L101-L123) — The border placement creates the block’s visual grouping and alignment.
<!-- source-audit:end -->

## Buttons

Newsletter and final CTAs use the block’s primary contrast; utility/social controls are smaller but retain 44px targets.

## Motion and interaction states

Keep footer motion minimal: link color/underline and button press states are sufficient.

## Rules for extending this design

1. Carry the **Footer as final hero** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
