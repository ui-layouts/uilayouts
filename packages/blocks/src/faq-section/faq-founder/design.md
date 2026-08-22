# FAQs Founder — Design System

> Use this file as the complete visual and implementation brief for extending the `faq-founder` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/faq-section/faq-founder.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/faq-section/faq-founder.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/components/ui/timeline-animation.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/timeline-animation.tsx) — the scroll-triggered stagger primitive used to sequence the block

## Required libraries and primitives

- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@/components/ui/timeline-animation** (repository primitive) — the scroll-triggered stagger primitive used to sequence the block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.

## Design thesis

Founder Q&A split defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Questions are medium/semibold and answers are relaxed body text; category labels remain compact and muted. The source’s concrete type anchors are `text-lg`, `text-xl`, `font-spaceGrotesk`, `font-medium`, `text-sm`, `text-base`, `leading-relaxed`, `text-2xl`, `text-3xl`, `font-semibold`.

## Palette and contrast

Core palette: `bg-neutral-100`, `border-neutral-700`, `border-neutral-200`, `bg-neutral-900`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Keep question and answer alignment stable; split previews stack beneath questions on mobile and accordion controls span the row.

## Background construction

Use a grounded neutral two-column composition with a dark founder/profile panel and light accordion; blue is reserved for the primary action, while answers enter with understated motion.

## Imagery and iconography

Use preview/product imagery when it clarifies answers; decorative scenery must remain behind a contrast layer.

## Unique components and signature effects

1. **Founder Q&A split.** Use a grounded neutral two-column composition with a dark founder/profile panel and light accordion; blue is reserved for the primary action, while answers enter with understated motion.
   - **Use it for:** making FAQs feel like candid guidance from a person
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Structural border treatment

[Open the exact implementation (lines 29–35)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/faq-section/faq-founder.tsx#L29-L35) — The border placement creates the block’s visual grouping and alignment.

### 2. Motion-driven behavior

[Open the exact implementation (lines 48–58)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/faq-section/faq-founder.tsx#L48-L58) — The motion configuration controls the effect’s timing, position, and interaction response.

### 3. Motion-driven behavior

[Open the exact implementation (lines 61–67)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/faq-section/faq-founder.tsx#L61-L67) — The motion configuration controls the effect’s timing, position, and interaction response.
<!-- source-audit:end -->

## Buttons

Use CTA styling only outside accordion rows; the entire question header is the disclosure button with visible focus.

## Motion and interaction states

Rotate plus/chevron indicators and reveal answer height/opacity; preserve keyboard controls and reduced-motion behavior.

## Rules for extending this design

1. Carry the **Founder Q&A split** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
