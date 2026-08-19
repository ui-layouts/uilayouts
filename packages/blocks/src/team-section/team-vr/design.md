# VR — Design System

> Use this file as the complete visual and implementation brief for extending the `team-vr` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/team-section/team-vr.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block

## Required libraries and primitives

- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Pink-orange VR horizon defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `tracking-widest`, `text-xs`, `font-bold`, `text-5xl`, `font-spaceGrotesk`, `text-7xl`, `tracking-tight`, `text-2xl`, `font-medium`.

## Palette and contrast

The implementation anchors its palette with `bg-neutral-950`, `bg-[linear-gradient(to_right,#292929_1px,transparent_1px),linear-gradient(to_bottom,#292929_1px,transparent_1px)]`, `bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,#ee33a6_100%)]`, `text-neutral-500`, `text-white`, `shadow-[0_0_50px_rgba(255,0,128,0.3)]`, `from-[#FF0080]`, `to-[#FF8C00]`, `text-neutral-300`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.

## Background construction

Draw a dark technical grid, fade it through a top ellipse mask, and terminate it in a hot-pink radial horizon; reveal color portraits and a 50px pink glow while gradient labels shift from #FF0080 to #FF8C00.

## Imagery and iconography

Portraits are the visual core. Preserve deliberate grayscale, crop, overlay, and color-reveal treatment across new people.

## Unique components and signature effects

1. **Pink-orange VR horizon.** Draw a dark technical grid, fade it through a top ellipse mask, and terminate it in a hot-pink radial horizon; reveal color portraits and a 50px pink glow while gradient labels shift from #FF0080 to #FF8C00.
   - **Use it for:** creating a glowing virtual-world team showcase
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Radial background field

**Location:** `packages/blocks/src/team-section/team-vr.tsx:42-49`
**Why it is core:** The gradient’s focal point, stops, and layer position establish the block’s backdrop.

```tsx
      className="bg-neutral-950 min-h-screen py-24 px-6 overflow-hidden"
      ref={timelineRef}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#292929_1px,transparent_1px),linear-gradient(to_bottom,#292929_1px,transparent_1px)] bg-size-[6rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,#ee33a6_100%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <TimelineAnimation
          timelineRef={timelineRef}
```

### 2. Custom elevation recipe

**Location:** `packages/blocks/src/team-section/team-vr.tsx:70-78`
**Why it is core:** The nonstandard shadow values create the block’s characteristic depth.

```tsx
              animationNum={3 + i}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative w-full aspect-square mb-8 rounded-2xl overflow-hidden transition-all duration-700 ease-out group-hover:shadow-[0_0_50px_rgba(255,0,128,0.3)]">
                <div className="absolute inset-0 h-full rounded-2xl px-10  flex justify-center flex-col items-center bg-linear-to-tr from-[#FF0080] to-[#FF8C00] opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10">
                  <Quote className="fill-white rotate-180 mb-5" />{' '}
                  <span>{member.quote}</span>
                </div>
                <img
```

### 3. Source-specific visual behavior

**Location:** `packages/blocks/src/team-section/team-vr.tsx:82-91`
**Why it is core:** This source fragment contains a high-signal visual or interaction decision unique to the block.

```tsx
                />
              </div>

              <h3 className="font-spaceGrotesk text-white text-2xl font-bold mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-[#FF0080] group-hover:to-[#FF8C00] transition-all duration-300">
                {member.name}
              </h3>
              <p className="text-neutral-500 font-medium uppercase tracking-widest text-[10px] group-hover:text-neutral-300 transition-colors">
                {member.role}
              </p>
            </TimelineAnimation>
```
<!-- source-audit:end -->

## Buttons

Actions are compact social/contact controls derived from the accent; give each at least a 44px hit area.

## Motion and interaction states

Use group hover to connect portrait, name and action; also expose equivalent keyboard focus behavior.

## Rules for extending this design

1. Carry the **Pink-orange VR horizon** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **VR**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
