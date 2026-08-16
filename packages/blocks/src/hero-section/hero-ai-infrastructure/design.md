# AI Infrastructure — Design System

> Use this file as the complete visual and implementation brief for extending the `hero-ai-infrastructure` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/hero-section/hero-ai-infrastructure.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block
- `apps/ui-layout/hooks/use-media-query.tsx` — the breakpoint hook that switches the mobile composition
- `apps/ui-layout/components/ui/motion-drawer.tsx` — the responsive navigation drawer used by this block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@shadergradient/react** (external) — renders the animated WebGL shader/gradient field; use its configured uniforms rather than a CSS approximation. Install with `pnpm add @shadergradient/react`.
- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **@/hooks/use-media-query** (local) — the breakpoint hook that switches the mobile composition.
- **@/components/ui/motion-drawer** (local) — the responsive navigation drawer used by this block.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Shader-lit infrastructure field defines the identity. The section should feel immersive and launch-ready.

## Typography

A bold display face or the project sans at very large responsive sizes; compact supporting copy and small UI labels create scale contrast. The source’s concrete type anchors are `text-sm`, `font-medium`, `text-2xl`, `font-semibold`, `tracking-tight`, `text-5xl`, `text-7xl`, `text-lg`, `text-xl`, `font-light`.

## Palette and contrast

The implementation anchors its palette with `bg-black`, `text-white`, `bg-neutral-800`, `border-neutral-900`, `bg-white`, `text-black`, `bg-neutral-100`, `bg-white/10`, `bg-white/20`, `border-white/10`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a wide hero stage with a centered or split headline and an overlapping product visualization; preserve generous vertical air.

## Background construction

Render a full-bleed `ShaderGradientCanvas` as an absolute 100vw × 120vh layer behind the content. The sphere shader itself creates the blue-to-black shadow gradient; there is no static gradient image. Foreground content stays at `z-10`, and translucent white/10 glass controls add local depth without covering the shader.

## Imagery and iconography

Use high-quality product/UI composites or portraits with deliberate overlap; icons are simple line glyphs.

## Unique components and signature effects

1. **Shader-lit infrastructure field.** Import `ShaderGradientCanvas` and `ShaderGradient` from `@shadergradient/react`. In the canvas, render a sphere with `animate="on"`, `uSpeed={0.3}`, `uStrength={0.4}`, `uDensity={0.8}`, `uFrequency={5.5}`, `uAmplitude={7}`, and `rotationZ={140}`. Set `color1="#1f469a"` and both `color2`/`color3` to `#000000` to form the blue light falling into black shadow. Reproduce the camera with azimuth 250, polar 140, distance 1.5, and zoom 12.5; use 3D light, brightness 1.5, city environment, reflection 0.5, and grain. Keep the canvas `pointerEvents="none"` and behind the `z-10` content.
   - **Use it for:** ambient technological depth behind the headline and infrastructure UI
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

## Shadow-gradient implementation blueprint

The glow is not a CSS box shadow. It is the visible edge of a full-bleed WebGL sphere rendered behind the content. Copy this configuration from `hero-ai-infrastructure.tsx` rather than substituting a `linear-gradient`:

```tsx
<ShaderGradientCanvas
  style={{ position: 'absolute', inset: 0, width: '100vw', height: '120vh' }}
  pixelDensity={1}
  pointerEvents="none"
>
  <ShaderGradient
    animate="on"
    type="sphere"
    uSpeed={0.3}
    uStrength={0.4}
    uDensity={0.8}
    uFrequency={5.5}
    uAmplitude={7}
    rotationZ={140}
    color1="#1f469a"
    color2="#000000"
    color3="#000000"
    reflection={0.5}
    cAzimuthAngle={250}
    cPolarAngle={140}
    cDistance={1.5}
    cameraZoom={12.5}
    lightType="3d"
    brightness={1.5}
    envPreset="city"
    grain="on"
  />
</ShaderGradientCanvas>
```

Keep this canvas before the content in DOM order. Give content `relative z-10`; use `overflow-hidden` on the hero and white/10–white/20 backdrop-blurred controls so the moving blue light remains visible without reducing text contrast.

## Buttons

Primary actions carry the block accent; secondary actions are quieter bordered or glass controls with the same height.

## Motion and interaction states

Use slow entrance staging and restrained hover/press feedback; decorative atmosphere must not chase the pointer.

## Rules for extending this design

1. Carry the **Shader-lit infrastructure field** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **AI Infrastructure**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
