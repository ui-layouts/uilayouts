# Synth — Design System

> Use this file as the complete visual and implementation brief for extending the `team-synth` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/team-section/team-synth.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block

## Required libraries and primitives

- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Synthwave grid portraits defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `text-7xl`, `font-semibold`, `tracking-tighter`, `text-2xl`, `font-spaceGrotesk`, `font-black`, `tracking-widest`, `font-mono`, `text-xs`.

## Palette and contrast

The implementation anchors its palette with `bg-neutral-950`, `text-white`, `bg-[linear-gradient(to_right,#292929_1px,transparent_1px),linear-gradient(to_bottom,#292929_1px,transparent_1px)]`, `bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(102,51,238,1)_100%)]`, `from-cyan-400`, `to-blue-600`, `from-neutral-500`, `to-neutral-300`, `bg-violet-950`, `border-cyan-400/20`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.

## Background construction

Build a neutral-950 perspective from cyan grid lines and a violet radial floor glow; add cyan/pink borders, blurred aura, gradient type, and raise/de-rotate grayscale portraits on hover.

## Imagery and iconography

Portraits are the visual core. Preserve deliberate grayscale, crop, overlay, and color-reveal treatment across new people.

## Unique components and signature effects

1. **Synthwave grid portraits.** Build a neutral-950 perspective from cyan grid lines and a violet radial floor glow; add cyan/pink borders, blurred aura, gradient type, and raise/de-rotate grayscale portraits on hover.
   - **Use it for:** creating the block’s unmistakable neon performance-stage identity
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Radial background field

**Location:** `packages/blocks/src/team-section/team-synth.tsx:35-42`
**Why it is core:** The gradient’s focal point, stops, and layer position establish the block’s backdrop.

```tsx
      className="bg-neutral-950 min-h-screen py-24 px-6 text-white relative overflow-hidden"
      ref={timelineRef}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#292929_1px,transparent_1px),linear-gradient(to_bottom,#292929_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(102,51,238,1)_100%)]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <TimelineAnimation
```

### 2. Source-specific visual behavior

**Location:** `packages/blocks/src/team-section/team-synth.tsx:43-53`
**Why it is core:** This source fragment contains a high-signal visual or interaction decision unique to the block.

```tsx
            timelineRef={timelineRef}
            animationNum={1}
            as="h2"
            className="text-7xl font-semibold italic tracking-tighter uppercase text-transparent bg-clip-text bg-linear-to-b from-cyan-400 to-blue-600"
          >
            The Network
          </TimelineAnimation>
          <div className="w-48 h-1 bg-linear-to-r from-neutral-500 to-neutral-300 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
```

### 3. Low-opacity icon pattern

**Location:** `packages/blocks/src/team-section/team-synth.tsx:58-74`
**Why it is core:** Repeated icons at low opacity create a branded texture without competing with foreground content.

```tsx
              animationNum={2 + i}
              className="group relative"
            >
              <div className="bg-violet-950 p-1 rounded-lg transition-transform duration-300 group-hover:-translate-y-4 group-hover:rotate-1">
                <div className="aspect-square relative overflow-hidden rounded-md">
                  <img
                    src={member.image}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                    alt={member.name}
                  />

                  <div className="absolute inset-0 border-10 border-transparent group-hover:border-cyan-400/20 transition-all"></div>
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6">
```
<!-- source-audit:end -->

## Buttons

Actions are compact social/contact controls derived from the accent; give each at least a 44px hit area.

## Motion and interaction states

Use group hover to connect portrait, name and action; also expose equivalent keyboard focus behavior.

## Rules for extending this design

1. Carry the **Synthwave grid portraits** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Synth**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
