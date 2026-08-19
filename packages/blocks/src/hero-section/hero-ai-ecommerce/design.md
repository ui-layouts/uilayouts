# AI Ecommerce — Design System

> Use this file as the complete visual and implementation brief for extending the `hero-ai-ecommerce` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/hero-section/hero-ai-ecommerce.tsx` — the canonical block source and the exact effect composition
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

Indigo commerce glass defines the identity. The section should feel immersive and launch-ready.

## Typography

A bold display face or the project sans at very large responsive sizes; compact supporting copy and small UI labels create scale contrast. The source’s concrete type anchors are `text-sm`, `font-medium`, `text-2xl`, `font-extrabold`, `font-semibold`, `text-6xl`, `text-5xl`, `text-7xl`, `tracking-tight`, `text-lg`.

## Palette and contrast

The implementation anchors its palette with `text-black`, `bg-white`, `bg-neutral-800`, `border-neutral-900`, `text-white`, `border-neutral-200`, `bg-neutral-200`, `text-[#5d5dff]`, `text-neutral-800`, `text-indigo-500`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a wide hero stage with a centered or split headline and an overlapping product visualization; preserve generous vertical air.

## Background construction

Use a pale commerce canvas with an indigo illustration wash; construct the primary CTA with three inset highlights/shadows so it reads as molded glass, and float compact commerce widgets in white/50 panels.

## Imagery and iconography

Use high-quality product/UI composites or portraits with deliberate overlap; icons are simple line glyphs.

## Unique components and signature effects

1. **Indigo commerce glass.** Use a pale commerce canvas with an indigo illustration wash; construct the primary CTA with three inset highlights/shadows so it reads as molded glass, and float compact commerce widgets in white/50 panels.
   - **Use it for:** premium AI-commerce actions and generated product evidence
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Source-specific visual behavior

**Location:** `packages/blocks/src/hero-section/hero-ai-ecommerce.tsx:15-21`
**Why it is core:** This source fragment contains a high-signal visual or interaction decision unique to the block.

```tsx
      ref={timelineRef}
      className="min-h-screen text-black bg-white relative overflow-hidden flex flex-col items-center"
    >
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1764138370667-d15f89ee1c45?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-50" />
      {/* Mobile Navigation */}
      {isMobile && (
        <div className="flex gap-4 justify-between items-center px-10 pt-4">
```

### 2. Custom elevation recipe

**Location:** `packages/blocks/src/hero-section/hero-ai-ecommerce.tsx:161-169`
**Why it is core:** The nonstandard shadow values create the block’s characteristic depth.

```tsx
            as="button"
            animationNum={6}
            timelineRef={timelineRef}
            className="p-1.5 bg-linear-to-t from-indigo-800 to-indigo-100 h-20 rounded-full"
          >
            <span className="bg-linear-to-l from-indigo-500 to-indigo-600 shadow-[inset_4px_4px_5px_0px_rgba(168,170,241,0.5),inset_-1px_-2px_5px_0px_rgba(74,78,197,0.5),inset_-1px_4px_8px_0px_rgba(44,58,98,0.25)] text-white px-10 py-5 rounded-full text-lg font-semibold cursor-pointer">
              Start Your 14 Day Free Trial
            </span>
          </TimelineAnimation>
```

### 3. Translucent glass layer

**Location:** `packages/blocks/src/hero-section/hero-ai-ecommerce.tsx:183-189`
**Why it is core:** Blur, transparency, border, and stacking work together as one glass treatment.

```tsx
        <TimelineAnimation
          animationNum={7}
          timelineRef={timelineRef}
          className="rounded-2xl bg-white/50 backdrop-blur-lg p-4"
        >
          <TimelineAnimation
            animationNum={8}
```
<!-- source-audit:end -->

## Buttons

Primary actions carry the block accent; secondary actions are quieter bordered or glass controls with the same height.

## Motion and interaction states

Use slow entrance staging and restrained hover/press feedback; decorative atmosphere must not chase the pointer.

## Rules for extending this design

1. Carry the **Indigo commerce glass** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **AI Ecommerce**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
