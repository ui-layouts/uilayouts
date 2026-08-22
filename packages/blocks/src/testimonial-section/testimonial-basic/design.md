# Testimonial Basic — Design System

> Use this file as the complete visual and implementation brief for extending the `testimonial-basic` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/testimonial-section/testimonial-basic.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/testimonial-section/testimonial-basic.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/lib/utils.ts`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/lib/utils.ts) — the class-merging utility

## Required libraries and primitives

- **@/lib/utils** (repository primitive) — the class-merging utility. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Photo-backed glass quote defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Quotes use generous readable type; names, roles and ratings use a compact supporting scale with obvious hierarchy. The source’s concrete type anchors are `font-dmSans`, `text-sm`, `font-semibold`, `tracking-widest`, `text-5xl`, `text-7xl`, `font-black`, `tracking-tighter`, `font-mono`, `text-2xl`.

## Palette and contrast

Core palette: `bg-white`, `text-black`, `border-neutral-200`, `bg-neutral-100`, `bg-[repeating-linear-gradient(45deg,#eeeeee_0px_1px,transparent_1px_8px)]`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Keep a stable reading width even when cards move; on mobile show one primary quote and retain clear navigation.

## Background construction

Use a diagonal paper hatch outside the card; overlay imagery with black/50 and backdrop blur, then place white copy and a restrained violet edge inside.

## Imagery and iconography

Use consistent avatar crops and genuine product/chat context; stars or platform marks are supporting evidence.

## Unique components and signature effects

1. **Photo-backed glass quote.** Use a diagonal paper hatch outside the card; overlay imagery with black/50 and backdrop blur, then place white copy and a restrained violet edge inside.
   - **Use it for:** creating one cinematic, readable customer statement
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Patterned background layer

[Open the exact implementation (lines 53–59)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/testimonial-section/testimonial-basic.tsx#L53-L59) — The repeated line recipe gives the surface its recognizable texture.

### 2. Translucent glass layer

[Open the exact implementation (lines 60–66)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/testimonial-section/testimonial-basic.tsx#L60-L66) — Blur, transparency, border, and stacking work together as one glass treatment.

### 3. Patterned background layer

[Open the exact implementation (lines 67–76)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/testimonial-section/testimonial-basic.tsx#L67-L76) — The repeated line recipe gives the surface its recognizable texture.
<!-- source-audit:end -->

## Buttons

Navigation is compact, high-contrast and tactile; testimonial cards themselves are not buttons unless explicitly interactive.

## Motion and interaction states

Use spring or carousel motion to explain reordering; respect reduced motion and never animate while a user is reading unexpectedly.

## Rules for extending this design

1. Carry the **Photo-backed glass quote** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
