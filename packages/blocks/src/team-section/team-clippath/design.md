# Clip Path — Design System

> Use this file as the complete visual and implementation brief for extending the `team-clippath` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/team-section/team-clippath.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block

## Required libraries and primitives

- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.

## Design thesis

Morphing portrait crop defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `text-5xl`, `font-semibold`, `text-2xl`, `text-lg`, `text-sm`.

## Palette and contrast

The implementation anchors its palette with `bg-neutral-100`, `text-neutral-900`, `text-neutral-600`, `from-black/70`, `via-black/20`, `text-white`, `bg-white/20`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.

## Background construction

Crop portraits with animated CSS clipPath shapes, interpolate from softened/blurred silhouettes to clear images, and retain a black-to-transparent caption gradient.

## Imagery and iconography

Portraits are the visual core. Preserve deliberate grayscale, crop, overlay, and color-reveal treatment across new people.

## Unique components and signature effects

1. **Morphing portrait crop.** Crop portraits with animated CSS clipPath shapes, interpolate from softened/blurred silhouettes to clear images, and retain a black-to-transparent caption gradient.
   - **Use it for:** making team discovery feel art-directed and fluid
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

## Buttons

Actions are compact social/contact controls derived from the accent; give each at least a 44px hit area.

## Motion and interaction states

Use group hover to connect portrait, name and action; also expose equivalent keyboard focus behavior.

## Rules for extending this design

1. Carry the **Morphing portrait crop** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Clip Path**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
