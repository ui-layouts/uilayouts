# Digital Success — Design System

> Use this file as the complete visual and implementation brief for extending the `hero-digital-success` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/hero-section/hero-digital-success.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block
- `apps/ui-layout/hooks/use-media-query.tsx` — the breakpoint hook that switches the mobile composition
- `apps/ui-layout/components/ui/motion-drawer.tsx` — the responsive navigation drawer used by this block

## Required libraries and primitives

- **@shadergradient/react** (external) — renders the animated WebGL shader/gradient field; use its configured uniforms rather than a CSS approximation. Install with `pnpm add @shadergradient/react`.
- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **@/hooks/use-media-query** (local) — the breakpoint hook that switches the mobile composition.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@/components/ui/motion-drawer** (local) — the responsive navigation drawer used by this block.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

A cool volumetric WebGL sphere fills the black canvas while the oversized “Digital Success” word introduces a separate white-to-red typographic flare. The contrast between the moving blue field and the sharp red type/button glow is the identity.

## Typography

A bold display face or the project sans at very large responsive sizes; compact supporting copy and small UI labels create scale contrast. The source’s concrete type anchors are `font-bold`, `text-lg`, `text-sm`, `font-medium`, `text-xl`, `font-light`, `leading-relaxed`, `text-xs`.

## Palette and contrast

The implementation anchors its palette with `bg-black`, `text-white`, `bg-neutral-800`, `border-neutral-900`, `bg-white`, `text-black`, `bg-neutral-100`, `bg-red-500`, `from-white`, `via-red-500`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

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

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Configured shader field

**Location:** `packages/blocks/src/hero-section/hero-digital-success.tsx:1-6`
**Why it is core:** This library component and its exact uniforms generate the block’s atmospheric field.

```tsx
'use client'
import React, { Suspense, useRef } from 'react'
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'
import { TimelineAnimation } from '@/components/ui/timeline-animation'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Component, Layout, Wallet } from 'lucide-react'
```

### 2. Configured shader field

**Location:** `packages/blocks/src/hero-section/hero-digital-success.tsx:19-69`
**Why it is core:** This library component and its exact uniforms generate the block’s atmospheric field.

```tsx
        <ShaderGradientCanvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
          }}
          lazyLoad={false}
          pixelDensity={1}
          pointerEvents="none"
        >
          <ShaderGradient
            animate="on"
            type="sphere"
            wireframe={false}
            shader="defaults"
            uTime={0}
            uSpeed={0.3}
            uStrength={0.3}
            uDensity={0.8}
            uFrequency={5.5}
            uAmplitude={3.2}
            positionX={-0.1}
            positionY={0}
            positionZ={0}
            rotationX={0}
            rotationY={130}
            rotationZ={70}
            color1="#92dbe0"
            color2="#0b7bff"
            color3="#3865cf"
            reflection={0.4}
            // View (camera) props
            cAzimuthAngle={270}
            cPolarAngle={180}
            cDistance={0.5}
            cameraZoom={15.1}
            // Effect props
            lightType="env"
            brightness={0.8}
            envPreset="city"
            grain="on"
            // Tool props
            toggleAxis={false}
            zoomOut={false}
            hoverState=""
            // Optional - if using transition features
            enableTransition={false}
          />
        </ShaderGradientCanvas>
```

### 3. Source-specific visual behavior

**Location:** `packages/blocks/src/hero-section/hero-digital-success.tsx:185-191`
**Why it is core:** This source fragment contains a high-signal visual or interaction decision unique to the block.

```tsx
          className="flex flex-col xl:flex-row text-[10vw] xl:text-[6.5vw] font-medium leading-[100%] items-baseline gap-x-8 gap-y-2 pb-10 "
        >
          Unlocking
          <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-red-500 to-red-500 pb-8 xl:inline-block block">
            Digital Success
          </span>
        </TimelineAnimation>
```
<!-- source-audit:end -->

## Buttons

Primary actions carry the block accent; secondary actions are quieter bordered or glass controls with the same height.

## Motion and interaction states

Use slow entrance staging and restrained hover/press feedback; decorative atmosphere must not chase the pointer.

## Rules for extending this design

1. Carry both the **cool volumetric shadow gradient** and the restrained **red typographic flare** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Digital Success**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
