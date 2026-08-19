# Social App — Design System

> Use this file as the complete visual and implementation brief for extending the `hero-social-app` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/hero-section/hero-social-app.tsx` — the canonical block source and the exact effect composition
- `packages/blocks/assets/index.ts` — a supporting module imported by the canonical block
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

Tilted social proof stack defines the identity. The section should feel immersive and launch-ready.

## Typography

A bold display face or the project sans at very large responsive sizes; compact supporting copy and small UI labels create scale contrast. The source’s concrete type anchors are `font-spaceGrotesk`, `font-semibold`, `text-sm`, `font-medium`, `text-5xl`, `text-4xl`, `text-7xl`, `leading-none`, `tracking-tight`, `text-xl`.

## Palette and contrast

The implementation anchors its palette with `bg-neutral-100`, `text-neutral-950`, `bg-neutral-800`, `border-neutral-900`, `text-white`, `bg-white`, `border-neutral-200`, `text-black`, `bg-neutral-200`, `border-neutral-100`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a wide hero stage with a centered or split headline and an overlapping product visualization; preserve generous vertical air.

## Background construction

Layer a dot grid, diagonal hatch, masked radial fade, and a dark radial highlight; overlap message/profile cards at small rotations with multi-stop physical shadows.

## Imagery and iconography

Use high-quality product/UI composites or portraits with deliberate overlap; icons are simple line glyphs.

## Unique components and signature effects

1. **Tilted social proof stack.** Layer a dot grid, diagonal hatch, masked radial fade, and a dark radial highlight; overlap message/profile cards at small rotations with multi-stop physical shadows.
   - **Use it for:** making social activity feel tangible and busy without losing headline clarity
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Patterned background layer

**Location:** `packages/blocks/src/hero-section/hero-social-app.tsx:85-95`
**Why it is core:** The repeated line recipe gives the surface its recognizable texture.

```tsx

      {/* Header */}
      {!isMobile && (
        <header className="w-full container sm:px-20 px-10 border-b border-x relative border-neutral-200">
          <TimelineAnimation
            animationNum={2}
            timelineRef={timelineRef}
            className="sm:w-20 w-10 h-full absolute left-0 top-0 bg-[repeating-linear-gradient(135deg,#e0e0e0_0px_1px,transparent_1px_10px)]"
          />
          <TimelineAnimation
            animationNum={2}
```

### 2. Patterned background layer

**Location:** `packages/blocks/src/hero-section/hero-social-app.tsx:152-162`
**Why it is core:** The repeated line recipe gives the surface its recognizable texture.

```tsx
      )}

      {/* Hero Layout */}
      <div className="w-full container sm:px-20 px-10 border-x border-b relative border-neutral-200">
        <TimelineAnimation
          animationNum={3}
          timelineRef={timelineRef}
          className="sm:w-20 w-10 h-full absolute left-0 top-0 bg-[repeating-linear-gradient(135deg,#e0e0e0_0px_1px,transparent_1px_10px)]"
        />
        <TimelineAnimation
          animationNum={4}
```

### 3. Radial background field

**Location:** `packages/blocks/src/hero-section/hero-social-app.tsx:440-446`
**Why it is core:** The gradient’s focal point, stops, and layer position establish the block’s backdrop.

```tsx
            <TimelineAnimation
              animationNum={6}
              timelineRef={timelineRef}
              className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[14px_14px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
            />
          </TimelineAnimation>
        </div>
```
<!-- source-audit:end -->

## Buttons

Primary actions carry the block accent; secondary actions are quieter bordered or glass controls with the same height.

## Motion and interaction states

Use slow entrance staging and restrained hover/press feedback; decorative atmosphere must not chase the pointer.

## Rules for extending this design

1. Carry the **Tilted social proof stack** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Social App**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
