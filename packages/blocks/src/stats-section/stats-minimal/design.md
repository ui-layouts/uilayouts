# Stats Minimal — Design System

> Use this file as the complete visual and implementation brief for extending the `stats-minimal` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/stats-section/stats-minimal.tsx` — the canonical block source and the exact effect composition

## Required libraries and primitives

- No effect library is required. The effect is built directly in the canonical block with React and CSS/Tailwind.

## Design thesis

Quiet ruled metrics defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Numbers are the display typography; labels remain compact and muted, with descriptions clearly subordinate. The source’s concrete type anchors are `font-manrope`, `text-3xl`, `font-bold`, `tracking-tight`, `text-xs`, `font-medium`, `tracking-widest`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `border-zinc-200`, `bg-zinc-200`, `text-zinc-900`, `text-zinc-500`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Align figures to a shared grid or bento baseline; prevent animated numbers from causing width shifts and stack cleanly on mobile.

## Background construction

Use white, zinc-200 dividers, dark numbers and muted labels in a simple linear grid; no shadows, gradients, or decorative motion.

## Imagery and iconography

Prefer charts, sparklines and abstract data marks over stock photography; icons remain secondary to figures.

## Unique components and signature effects

1. **Quiet ruled metrics.** Use white, zinc-200 dividers, dark numbers and muted labels in a simple linear grid; no shadows, gradients, or decorative motion.
   - **Use it for:** supporting content where statistics should inform rather than dominate
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

## Buttons

Use buttons only for drill-down or a final CTA; style them as a continuation of the surrounding surface.

## Motion and interaction states

Animate values once on entry and make hover effects explanatory, not celebratory.

## Rules for extending this design

1. Carry the **Quiet ruled metrics** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Stats Minimal**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
