# AI Value Proposition — Design System

> Use this file as the complete visual and implementation brief for extending the `hero-ai-value-proposition` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/hero-section/hero-ai-value-proposition.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/hero-section/hero-ai-value-proposition.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/components/ui/timeline-animation.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/timeline-animation.tsx) — the scroll-triggered stagger primitive used to sequence the block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@/components/ui/timeline-animation** (repository primitive) — the scroll-triggered stagger primitive used to sequence the block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

An editorial border grid divides the page into deliberate horizontal bands and a shared centered column. Inside that frame, a softly elevated product mockup uses stacked shells, restrained shadows, translucent borders, and blurred color pools to feel dimensional without leaving the near-white system.

## Typography

A bold display face or the project sans at very large responsive sizes; compact supporting copy and small UI labels create scale contrast. The source’s concrete type anchors are `text-xl`, `font-bold`, `tracking-tight`, `text-sm`, `text-5xl`, `text-7xl`, `font-semibold`, `text-lg`, `font-medium`, `leading-relaxed`.

## Palette and contrast

Core palette: `bg-[#f9f9f9]`, `text-[#111]`, `border-zinc-200`, `text-slate-900`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Use a wide hero stage with a centered or split headline and an overlapping product visualization; preserve generous vertical air.

## Background construction

Build the page on `#f9f9f9`. Repeat `border-x border-zinc-200` on the shared `max-w-7xl` column and `border-y`/`border-b` on section bands so every region aligns to the same rails. The product frame then adds a custom low-alpha shadow, two offset shells, pink/orange 100px blurs, and bordered white content cards.

## Imagery and iconography

Use high-quality product/UI composites or portraits with deliberate overlap; icons are simple line glyphs.

## Unique components and signature effects

1. **Continuous editorial border rails.** Every major band owns a horizontal divider while its `max-w-7xl` child repeats `border-x border-zinc-200`. The header, headline, CTA/social-proof band, and mockup all share those exact vertical rails.
   - **Use it for:** aligning any new page section to the same invisible column system.
   - **Do not:** wrap each section in unrelated rounded cards; the continuous rails are the page skeleton.

2. **Low, broad mockup elevation.** The preview frame uses `shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)]`, a `border-zinc-200` edge, and only `p-2`. This produces depth without a dark floating-card shadow.
   - **Use it for:** the single dominant product preview or another primary artifact.

3. **Stacked paper shells and color pools.** Two neutral shells sit behind the internal mockup at `-top-8`/`-top-4` with progressively wider widths. Pink and orange 300px circles blurred by 100px soften the otherwise monochrome frame.
   - **Use it for:** layered product surfaces; keep the pools at `opacity-40` so borders remain the primary structure.

4. **Selected-versus-dormant option cards.** The selected card uses `border-2 border-blue-500 shadow-2xl`; alternatives use `bg-white/80 border-neutral-100 opacity-80 grayscale` and restore color/opacity on hover.
   - **Use it for:** clearly separating the current AI choice from available options.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Custom elevation recipe

[Open the exact implementation (lines 134–145)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/hero-section/hero-ai-value-proposition.tsx#L134-L145) — The nonstandard shadow values create the block’s characteristic depth.

### 2. Translucent glass layer

[Open the exact implementation (lines 165–171)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/hero-section/hero-ai-value-proposition.tsx#L165-L171) — Blur, transparency, border, and stacking work together as one glass treatment.

### 3. Low-opacity icon pattern

[Open the exact implementation (lines 259–265)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/hero-section/hero-ai-value-proposition.tsx#L259-L265) — Repeated icons at low opacity create a branded texture without competing with foreground content.
<!-- source-audit:end -->

## Buttons

Primary actions carry the block accent; secondary actions are quieter bordered or glass controls with the same height.

## Motion and interaction states

Use slow entrance staging and restrained hover/press feedback; decorative atmosphere must not chase the pointer.

## Rules for extending this design

1. Carry the **continuous editorial border rails and restrained mockup elevation** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
