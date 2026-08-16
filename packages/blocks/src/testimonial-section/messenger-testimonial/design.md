# Messenger Testimonial — Design System

> Use this file as the complete visual and implementation brief for extending the `messenger-testimonial` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/testimonial-section/messenger-testimonial.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/lib/utils.ts` — the class-merging utility

## Required libraries and primitives

- **@/lib/utils** (local) — the class-merging utility.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Live messenger simulation defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Quotes use generous readable type; names, roles and ratings use a compact supporting scale with obvious hierarchy. The source’s concrete type anchors are `font-manrope`, `text-4xl`, `font-bold`, `tracking-tight`, `text-xs`, `font-black`, `font-medium`, `text-sm`, `font-semibold`, `tracking-widest`.

## Palette and contrast

The implementation anchors its palette with `bg-zinc-400`, `bg-zinc-100`, `text-zinc-900`, `text-zinc-600`, `border-neutral-200`, `bg-white`, `border-zinc-200`, `bg-green-500`, `bg-zinc-900`, `text-white`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Keep a stable reading width even when cards move; on mobile show one primary quote and retain clear navigation.

## Background construction

Render testimonials as compact chat bubbles with avatars, status dots and typing presence; use green for live/sent state, zinc for message chrome, and spring scale/opacity entrances.

## Imagery and iconography

Use consistent avatar crops and genuine product/chat context; stars or platform marks are supporting evidence.

## Unique components and signature effects

1. **Live messenger simulation.** Render testimonials as compact chat bubbles with avatars, status dots and typing presence; use green for live/sent state, zinc for message chrome, and spring scale/opacity entrances.
   - **Use it for:** making social proof feel like an authentic conversation
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

## Buttons

Navigation is compact, high-contrast and tactile; testimonial cards themselves are not buttons unless explicitly interactive.

## Motion and interaction states

Use spring or carousel motion to explain reordering; respect reduced motion and never animate while a user is reading unexpectedly.

## Rules for extending this design

1. Carry the **Live messenger simulation** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Messenger Testimonial**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
