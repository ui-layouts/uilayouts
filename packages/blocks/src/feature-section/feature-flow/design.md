# Feature Flow — Design System

> Use this file as the complete visual and implementation brief for extending the `feature-flow` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/feature-section/feature-flow.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/components/ui/carousel.tsx` — the carousel mechanics and navigation behavior

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@/components/ui/carousel** (local) — the carousel mechanics and navigation behavior.
- **embla-carousel** (external) — provides an external primitive used by this effect. Install with `pnpm add embla-carousel`.
- **embla-carousel-react** (external) — provides an external primitive used by this effect. Install with `pnpm add embla-carousel-react`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Warm workflow carousel defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a confident section heading, readable slate body copy, and compact uppercase or icon labels inside cards. The source’s concrete type anchors are `font-manrope`, `font-bold`, `tracking-widest`, `text-5xl`, `tracking-tight`, `text-lg`, `text-sm`, `text-xl`, `leading-relaxed`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `bg-slate-50`, `text-slate-500`, `text-slate-900`, `border-slate-200`, `text-orange-600`, `bg-orange-50/20`, `border-orange-100/50`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Build a responsive 1–3 column grid or carousel; vary span only when hierarchy requires it and keep card padding consistent.

## Background construction

Set clean slate cards over a barely orange-tinted plane; use orange micro-labels and a horizontally advancing carousel with frosted navigation and a shadow increase on hover.

## Imagery and iconography

Favor product crops, diagrams, or symbolic line icons; each should explain the capability rather than decorate it.

## Unique components and signature effects

1. **Warm workflow carousel.** Set clean slate cards over a barely orange-tinted plane; use orange micro-labels and a horizontally advancing carousel with frosted navigation and a shadow increase on hover.
   - **Use it for:** explaining a sequence as approachable, inspectable steps
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

## Buttons

Primary actions use the accent fill; card-level actions are compact arrows or icon controls and must visibly respond on hover.

## Motion and interaction states

Reveal secondary layers on group hover and keep transforms small so the grid remains stable.

## Rules for extending this design

1. Carry the **Warm workflow carousel** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Feature Flow**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
