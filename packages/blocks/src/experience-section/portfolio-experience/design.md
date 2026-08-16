# Portfolio Experience — Design System

> Use this file as the complete visual and implementation brief for extending the `portfolio-experience` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/experience-section/portfolio-experience.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/lib/utils.ts` — the class-merging utility

## Required libraries and primitives

- **@/lib/utils** (local) — the class-merging utility.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Violet career portfolio defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use editorial role/project titles, muted dates, and small categorical labels; keep chronology immediately scannable. The source’s concrete type anchors are `text-4xl`, `font-bold`, `leading-tight`, `tracking-tight`, `text-sm`, `tracking-widest`, `font-medium`, `text-xs`, `tracking-tighter`, `text-lg`.

## Palette and contrast

The implementation anchors its palette with `border-gray-200`, `text-gray-900`, `text-violet-600`, `text-gray-400`, `border-violet-100`, `border-violet-600`, `bg-gray-50`, `text-gray-600`, `border-gray-100`, `bg-white`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a timeline, ledger, or accordion with aligned dates and content; collapse to a single reading column on mobile.

## Background construction

Use a bright white résumé grid with violet rules and tiny metadata; animate entries with high-scale/opacity staging while retaining editorial restraint.

## Imagery and iconography

Use project/customer imagery only when tied to the active record; otherwise let typography and rules carry the layout.

## Unique components and signature effects

1. **Violet career portfolio.** Use a bright white résumé grid with violet rules and tiny metadata; animate entries with high-scale/opacity staging while retaining editorial restraint.
   - **Use it for:** blending portfolio personality with professional chronology
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

## Buttons

Use text arrows or compact icon controls, with the accent appearing only on the active or actionable item.

## Motion and interaction states

Entry reveals follow chronology; active-item transitions may crossfade, but layout position should remain predictable.

## Rules for extending this design

1. Carry the **Violet career portfolio** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Portfolio Experience**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
