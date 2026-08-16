# Minimilastic — Design System

> Use this file as the complete visual and implementation brief for extending the `faq-minimilastic` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/faq-section/faq-minimilastic.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block
- `packages/blocks/assets` — a supporting module imported by the canonical block
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Blue radial minimal FAQ defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Questions are medium/semibold and answers are relaxed body text; category labels remain compact and muted. The source’s concrete type anchors are `text-2xl`, `text-4xl`, `font-medium`, `text-xl`, `text-lg`.

## Palette and contrast

The implementation anchors its palette with `bg-blue-50`, `text-blue-800`, `border-slate-200`, `bg-blue-100`, `border-neutral-200`, `bg-white`, `text-neutral-950`, `text-slate-600`, `bg-blue-800`, `text-white`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Keep question and answer alignment stable; split previews stack beneath questions on mobile and accordion controls span the row.

## Background construction

Keep white accordion rows over a pale blue radial corner glow; active plus icons rotate 45/90 degrees, with blue-800 reserved for the decisive action.

## Imagery and iconography

Use preview/product imagery when it clarifies answers; decorative scenery must remain behind a contrast layer.

## Unique components and signature effects

1. **Blue radial minimal FAQ.** Keep white accordion rows over a pale blue radial corner glow; active plus icons rotate 45/90 degrees, with blue-800 reserved for the decisive action.
   - **Use it for:** adding just enough energy to a minimal help section
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

## Buttons

Use CTA styling only outside accordion rows; the entire question header is the disclosure button with visible focus.

## Motion and interaction states

Rotate plus/chevron indicators and reveal answer height/opacity; preserve keyboard controls and reduced-motion behavior.

## Rules for extending this design

1. Carry the **Blue radial minimal FAQ** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Minimilastic**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
