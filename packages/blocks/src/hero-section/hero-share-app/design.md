# Share App — Design System

> Use this file as the complete visual and implementation brief for extending the `hero-share-app` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/hero-section/hero-share-app.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block
- `apps/ui-layout/hooks/use-media-query.tsx` — the breakpoint hook that switches the mobile composition
- `apps/ui-layout/components/ui/motion-drawer.tsx` — the responsive navigation drawer used by this block

## Required libraries and primitives

- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **@/hooks/use-media-query** (local) — the breakpoint hook that switches the mobile composition.
- **@/components/ui/motion-drawer** (local) — the responsive navigation drawer used by this block.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

A red sunrise background and tilted photo fan define the identity. The section should feel immersive and launch-ready.

## Typography

A bold display face or the project sans at very large responsive sizes; compact supporting copy and small UI labels create scale contrast. The source’s concrete type anchors are `font-bold`, `text-sm`, `font-semibold`, `text-7xl`, `text-9xl`, `font-black`, `tracking-tighter`, `text-xl`, `text-2xl`, `text-lg`.

## Palette and contrast

The implementation anchors its palette with `bg-red-50`, `text-neutral-900`, `bg-neutral-800`, `border-neutral-900`, `text-white`, `bg-white`, `border-neutral-200`, `text-black`, `bg-neutral-200`, `bg-red-500`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a wide hero stage with a centered or split headline and an overlapping product visualization; preserve generous vertical air.

## Background construction

The signature canvas is a pale red-to-white radial wash: `radial-gradient(125% 125% at 50% 90%, #fff 40%, #f16d63 100%)`. It sits as an absolute `inset-0 z-0` layer, while the headline, pill, store buttons, and tilted photo fan remain at `z-10` or higher.

## Imagery and iconography

Use high-quality product/UI composites or portraits with deliberate overlap; icons are simple line glyphs.

## Unique components and signature effects

1. **Red sunrise background and tilted photo fan.** The signature canvas is a pale red-to-white radial wash: `radial-gradient(125% 125% at 50% 90%, #fff 40%, #f16d63 100%)`. It sits as an absolute `inset-0 z-0` layer, while the headline, pill, store buttons, and tilted photo fan remain at `z-10` or higher.
   - **Use it for:** the full hero atmosphere and any sibling section that must continue the warm red canvas
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Radial background field

**Location:** `packages/blocks/src/hero-section/hero-share-app.tsx:126-132`
**Why it is core:** The gradient’s focal point, stops, and layer position establish the block’s backdrop.

```tsx
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(125% 125% at 50% 90%, #fff 40%, #f16d63 100%)',
        }}
      />
      <div className="relative z-10 grow flex flex-col items-center justify-center text-center px-4 pt-10">
```

### 2. Depth and glow treatment

**Location:** `packages/blocks/src/hero-section/hero-share-app.tsx:187-193`
**Why it is core:** These exact shadows and blur layers distinguish foreground from atmosphere.

```tsx
            as="button"
            timelineRef={timelineRef}
            animationNum={7}
            className="bg-linear-to-t from-red-400 to-red-500 cursor-pointer text-white px-4 py-4 rounded-xl font-semibold text-xl shadow-2xl flex items-center gap-3 transition"
          >
            <svg viewBox="0 0 814 1000" className="w-8 h-8">
              <path
```

### 3. Overlapping transformed composition

**Location:** `packages/blocks/src/hero-section/hero-share-app.tsx:241-247`
**Why it is core:** Rotation and offset create the intentionally physical, layered arrangement.

```tsx
            as="button"
            timelineRef={timelineRef}
            animationNum={9}
            className="absolute left-0 bottom-[-100px] w-105 h-96 bg-white rounded-4xl shadow-2xl overflow-hidden transform rotate-[-15deg] translate-x-12 translate-y-12 border-4 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
```
<!-- source-audit:end -->

## Buttons

Primary actions carry the block accent; secondary actions are quieter bordered or glass controls with the same height.

## Motion and interaction states

Use slow entrance staging and restrained hover/press feedback; decorative atmosphere must not chase the pointer.

## Rules for extending this design

1. Carry the **red sunrise background and tilted photo fan** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Share App**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
