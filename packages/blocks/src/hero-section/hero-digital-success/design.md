# Digital Success — Design System

> Use this file as the complete visual and implementation brief for extending the `hero-digital-success` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/hero-section/hero-digital-success.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/hero-section/hero-digital-success.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/components/ui/timeline-animation.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/timeline-animation.tsx) — the scroll-triggered stagger primitive used to sequence the block
- [`apps/ui-layout/hooks/use-media-query.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/hooks/use-media-query.tsx) — the breakpoint hook that switches the mobile composition
- [`apps/ui-layout/components/ui/motion-drawer.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/motion-drawer.tsx) — the responsive navigation drawer used by this block

## Required libraries and primitives

- **@shadergradient/react** (external) — renders the animated WebGL shader/gradient field; use its configured uniforms rather than a CSS approximation. Install with `pnpm add @shadergradient/react`.
- **@/components/ui/timeline-animation** (repository primitive) — the scroll-triggered stagger primitive used to sequence the block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **@/hooks/use-media-query** (repository primitive) — the breakpoint hook that switches the mobile composition. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@/components/ui/motion-drawer** (repository primitive) — the responsive navigation drawer used by this block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

A cool volumetric WebGL sphere fills the black canvas while the oversized “Digital Success” word introduces a separate white-to-red typographic flare. The contrast between the moving blue field and the sharp red type/button glow is the identity.

## Typography

A bold display face or the project sans at very large responsive sizes; compact supporting copy and small UI labels create scale contrast. The source’s concrete type anchors are `font-bold`, `text-lg`, `text-sm`, `font-medium`, `text-xl`, `font-light`, `leading-relaxed`, `text-xs`.

## Palette and contrast

Core palette: `bg-black`, `text-white`, `bg-neutral-800`, `border-neutral-900`, `bg-red-500`, `via-red-500`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Use a wide hero stage with a centered or split headline and an overlapping product visualization; preserve generous vertical air.

## Background construction

Render the configured blue `ShaderGradient` edge-to-edge behind a black content layer. Keep the shader cool (`#92dbe0`, `#0b7bff`, `#3865cf`); red is a separate foreground accent used by the display-word gradient and the primary button’s 20px glow.

## Imagery and iconography

Use high-quality product/UI composites or portraits with deliberate overlap; icons are simple line glyphs.

## Unique components and signature effects

1. **Cool volumetric shadow gradient.** The full-viewport `ShaderGradientCanvas` renders a sphere using the exact uniforms shown in the audited source below: speed `0.3`, strength `0.3`, density `0.8`, frequency `5.5`, amplitude `3.2`, Y rotation `130`, Z rotation `70`, and the three-color blue palette. Camera zoom `15.1` and distance `0.5` push the sphere close enough that only its luminous edge is visible against black.
   - **Use it for:** the atmospheric background behind every sibling section that needs to feel part of this page.
   - **Do not:** replace it with the AI Infrastructure shader settings—the color palette, amplitude, rotations, camera, and lighting are different.

2. **White-to-red display-word flare.** Apply transparent clipped text with a left-to-right `from-white via-red-500 to-red-500` gradient only to the “Digital Success” phrase. The primary CTA repeats the red accent as `shadow-[0_0_20px_rgba(255,60,60,0.4)]` while the rest of the interface remains black, white, and glassy.
   - **Use it for:** one headline fragment and the primary conversion action, not the background shader itself.

3. **Black glass information layer.** Place statistics in `bg-black/20 backdrop-blur-lg` and secondary controls in `bg-white/5 backdrop-blur-md border-white/20`, above the shader at `relative z-10`.
   - **Use it for:** preserving readability without hiding the animated field.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Configured shader field

[Open the exact implementation (lines 1–6)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/hero-section/hero-digital-success.tsx#L1-L6) — This library component and its exact uniforms generate the block’s atmospheric field.

### 2. Configured shader field

[Open the exact implementation (lines 19–69)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/hero-section/hero-digital-success.tsx#L19-L69) — This library component and its exact uniforms generate the block’s atmospheric field.

### 3. Source-specific visual behavior

[Open the exact implementation (lines 185–191)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/hero-section/hero-digital-success.tsx#L185-L191) — This source fragment contains a high-signal visual or interaction decision unique to the block.
<!-- source-audit:end -->

## Buttons

Primary actions carry the block accent; secondary actions are quieter bordered or glass controls with the same height.

## Motion and interaction states

Use slow entrance staging and restrained hover/press feedback; decorative atmosphere must not chase the pointer.

## Rules for extending this design

1. Carry both the **cool volumetric shadow gradient** and the restrained **red typographic flare** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
