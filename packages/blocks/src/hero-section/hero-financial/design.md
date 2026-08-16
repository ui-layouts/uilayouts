# Financial — Design System

> Use this file as the complete visual and implementation brief for extending the `hero-financial` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/hero-section/hero-financial.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block
- `packages/blocks/assets/index.ts` — a supporting module imported by the canonical block
- `apps/ui-layout/hooks/use-media-query.tsx` — the breakpoint hook that switches the mobile composition
- `apps/ui-layout/components/ui/motion-drawer.tsx` — the responsive navigation drawer used by this block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **@/hooks/use-media-query** (local) — the breakpoint hook that switches the mobile composition.
- **@/components/ui/motion-drawer** (local) — the responsive navigation drawer used by this block.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Financial dashboard glow defines the identity. The section should feel immersive and launch-ready.

## Typography

A bold display face or the project sans at very large responsive sizes; compact supporting copy and small UI labels create scale contrast. The source’s concrete type anchors are `font-bold`, `text-sm`, `text-xl`, `tracking-tight`, `font-semibold`, `text-xs`, `font-medium`, `tracking-widest`, `text-6xl`, `text-5xl`.

## Palette and contrast

The implementation anchors its palette with `bg-[#f7f9fc]`, `text-[#1e293b]`, `from-blue-50`, `via-blue-100`, `bg-neutral-800`, `border-neutral-900`, `text-white`, `bg-white`, `border-neutral-200`, `text-black`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a wide hero stage with a centered or split headline and an overlapping product visualization; preserve generous vertical air.

## Background construction

Layer a cool #f7f9fc field, blue corner gradients, translucent white dashboard slabs, and precise blue shadow halos; use a dark CTA with opposing inset shadows for a machined control.

## Imagery and iconography

Use high-quality product/UI composites or portraits with deliberate overlap; icons are simple line glyphs.

## Unique components and signature effects

1. **Financial dashboard glow.** Layer a cool #f7f9fc field, blue corner gradients, translucent white dashboard slabs, and precise blue shadow halos; use a dark CTA with opposing inset shadows for a machined control.
   - **Use it for:** giving financial data a trustworthy, polished instrument-panel feel
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

## Buttons

Primary actions carry the block accent; secondary actions are quieter bordered or glass controls with the same height.

## Motion and interaction states

Use slow entrance staging and restrained hover/press feedback; decorative atmosphere must not chase the pointer.

## Rules for extending this design

1. Carry the **Financial dashboard glow** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Financial**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
