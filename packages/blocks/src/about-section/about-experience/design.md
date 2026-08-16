# Experience — Design System

> Use this file as the complete visual and implementation brief for extending the `about-experience` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/about-section/about-experience.tsx` — the canonical block source and the exact effect composition
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Oxide-red heritage panel defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use editorial role/project titles, muted dates, and small categorical labels; keep chronology immediately scannable. The source’s concrete type anchors are `font-dmSans`, `text-5xl`, `font-bold`, `tracking-tight`, `text-xs`, `font-medium`, `tracking-widest`, `font-semibold`, `font-black`, `text-4xl`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `text-black`, `bg-black/60`, `text-white`, `text-zinc-300`, `text-red-500`, `bg-neutral-950`, `text-zinc-500`, `bg-red-50`, `text-red-950`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a timeline, ledger, or accordion with aligned dates and content; collapse to a single reading column on mobile.

## Background construction

Center the story around #9c2e1f/red-900 imagery, place black/60 glass labels over photographs, and combine hover scale with deep red shadow.

## Imagery and iconography

Use project/customer imagery only when tied to the active record; otherwise let typography and rules carry the layout.

## Unique components and signature effects

1. **Oxide-red heritage panel.** Center the story around #9c2e1f/red-900 imagery, place black/60 glass labels over photographs, and combine hover scale with deep red shadow.
   - **Use it for:** making history and craft feel warm, weighty, and tactile
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

## Buttons

Use text arrows or compact icon controls, with the accent appearing only on the active or actionable item.

## Motion and interaction states

Entry reveals follow chronology; active-item transitions may crossfade, but layout position should remain predictable.

## Rules for extending this design

1. Carry the **Oxide-red heritage panel** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Experience**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
