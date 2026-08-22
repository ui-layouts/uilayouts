# AI Infrastructure — Design System

> Use this file as the complete visual and implementation brief for extending the `hero-ai-infrastructure` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

**Repository:** [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts)

Use the links below; do not search for these paths in the consuming project.

- [`packages/blocks/src/hero-section/hero-ai-infrastructure.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/hero-section/hero-ai-infrastructure.tsx) — the canonical block source and the exact effect composition
- [`apps/ui-layout/components/ui/timeline-animation.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/timeline-animation.tsx) — the scroll-triggered stagger primitive used to sequence the block
- [`apps/ui-layout/hooks/use-media-query.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/hooks/use-media-query.tsx) — the breakpoint hook that switches the mobile composition
- [`apps/ui-layout/components/ui/motion-drawer.tsx`](https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/components/ui/motion-drawer.tsx) — the responsive navigation drawer used by this block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@shadergradient/react** (external) — renders the animated WebGL shader/gradient field; use its configured uniforms rather than a CSS approximation. Install with `pnpm add @shadergradient/react`.
- **@/components/ui/timeline-animation** (repository primitive) — the scroll-triggered stagger primitive used to sequence the block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **@/hooks/use-media-query** (repository primitive) — the breakpoint hook that switches the mobile composition. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **@/components/ui/motion-drawer** (repository primitive) — the responsive navigation drawer used by this block. Retrieve it from the linked repository source above; do not look for the alias in the consuming project.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Shader-lit infrastructure field defines the identity. The section should feel immersive and launch-ready.

## Typography

A bold display face or the project sans at very large responsive sizes; compact supporting copy and small UI labels create scale contrast. The source’s concrete type anchors are `text-sm`, `font-medium`, `text-2xl`, `font-semibold`, `tracking-tight`, `text-5xl`, `text-7xl`, `text-lg`, `text-xl`, `font-light`.

## Palette and contrast

Core palette: `bg-black`, `text-white`, `bg-neutral-800`, `border-neutral-900`. Keep the same canvas, text, border, and accent roles; do not add unrelated colors.

## Composition and rhythm

Use a wide hero stage with a centered or split headline and an overlapping product visualization; preserve generous vertical air.

## Background construction

Render a full-bleed `ShaderGradientCanvas` as an absolute 100vw × 120vh layer behind the content. The sphere shader itself creates the blue-to-black shadow gradient; there is no static gradient image. Foreground content stays at `z-10`, and translucent white/10 glass controls add local depth without covering the shader.

## Imagery and iconography

Use high-quality product/UI composites or portraits with deliberate overlap; icons are simple line glyphs.

## Unique components and signature effects

1. **Shader-lit infrastructure field.** Import `ShaderGradientCanvas` and `ShaderGradient` from `@shadergradient/react`. In the canvas, render a sphere with `animate="on"`, `uSpeed={0.3}`, `uStrength={0.4}`, `uDensity={0.8}`, `uFrequency={5.5}`, `uAmplitude={7}`, and `rotationZ={140}`. Set `color1="#1f469a"` and both `color2`/`color3` to `#000000` to form the blue light falling into black shadow. Reproduce the camera with azimuth 250, polar 140, distance 1.5, and zoom 12.5; use 3D light, brightness 1.5, city environment, reflection 0.5, and grain. Keep the canvas `pointerEvents="none"` and behind the `z-10` content.
   - **Use it for:** ambient technological depth behind the headline and infrastructure UI
   - **Implementation:** use the audited GitHub ranges below.

<!-- source-audit:start -->
## Audited source implementation

These linked source ranges contain the block’s highest-signal visual decisions. Treat them as part of its identity and preserve their values, stacking order, and interaction state.

### 1. Configured shader field

[Open the exact implementation (lines 1–7)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/hero-section/hero-ai-infrastructure.tsx#L1-L7) — This library component and its exact uniforms generate the block’s atmospheric field.

### 2. Configured shader field

[Open the exact implementation (lines 19–70)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/hero-section/hero-ai-infrastructure.tsx#L19-L70) — This library component and its exact uniforms generate the block’s atmospheric field.

### 3. Translucent glass layer

[Open the exact implementation (lines 190–196)](https://github.com/ui-layouts/uilayouts/blob/main/packages/blocks/src/hero-section/hero-ai-infrastructure.tsx#L190-L196) — Blur, transparency, border, and stacking work together as one glass treatment.
<!-- source-audit:end -->

## Buttons

Primary actions carry the block accent; secondary actions are quieter bordered or glass controls with the same height.

## Motion and interaction states

Use slow entrance staging and restrained hover/press feedback; decorative atmosphere must not chase the pointer.

## Rules for extending this design

1. Carry the **Shader-lit infrastructure field** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Preserve the same responsive hierarchy and provide keyboard-visible focus and reduced-motion behavior.

## Do not

- Do not replace the signature construction with a generic gradient, shadow, card, or animation.
- Do not introduce a competing palette, type system, or image treatment.

## AI implementation instruction

Open the linked source files first. Reuse the applicable unique effect with its exact values and layer order, then extend the same typography, spacing, surfaces, imagery, controls, and responsive behavior into the requested UI. Keep the result accessible and production-ready.
