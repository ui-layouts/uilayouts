# Modern — Design System

> Use this file as the complete visual and implementation brief for extending the `team-modern` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/team-section/team-modern.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block
- `packages/ui/src/index.tsx` — the open-source workspace UI primitive barrel used by this block

## Required libraries and primitives

- **@repo/ui** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Clean social team cards defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `text-xs`, `font-semibold`, `text-5xl`, `font-spaceGrotesk`, `font-bold`, `text-lg`, `leading-relaxed`, `text-xl`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `bg-green-50`, `text-green-700`, `text-neutral-900`, `text-neutral-500`, `bg-orange-500`, `shadow-orange-500`, `text-white`, `bg-orange-600`, `bg-neutral-100`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.

## Background construction

Use white/neutral surfaces with orange avatar-action accents and green availability pills; scale images mildly and use a focused orange shadow only on the social action.

## Imagery and iconography

Portraits are the visual core. Preserve deliberate grayscale, crop, overlay, and color-reveal treatment across new people.

## Unique components and signature effects

1. **Clean social team cards.** Use white/neutral surfaces with orange avatar-action accents and green availability pills; scale images mildly and use a focused orange shadow only on the social action.
   - **Use it for:** balancing professional profiles with approachable contact cues
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Depth and glow treatment

**Location:** `packages/blocks/src/team-section/team-modern.tsx:75-84`
**Why it is core:** These exact shadows and blur layers distinguish foreground from atmosphere.

```tsx
              animationNum={4}
              className="flex items-center gap-4"
            >
              <button className="font-spaceGrotesk px-3 py-2.5 bg-orange-500 shadow-lg shadow-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                Get started
              </button>
              <button className="font-spaceGrotesk bg-neutral-100 px-3 py-2.5 border border-neutral-300 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-colors">
                Explore features
              </button>
            </TimelineAnimation>
```

### 2. Structural border treatment

**Location:** `packages/blocks/src/team-section/team-modern.tsx:88-94`
**Why it is core:** The border placement creates the block’s visual grouping and alignment.

```tsx
        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={5}
          className="flex flex-wrap gap-8 py-12 mb-12 border-b border-neutral-100"
        >
          <div className="flex items-center gap-2 text-neutral-900 font-semibold text-xl">
            <Codesandbox color="#7C3AED" size={32} /> UI-Layouts
```

### 3. Source-specific visual behavior

**Location:** `packages/blocks/src/team-section/team-modern.tsx:116-122`
**Why it is core:** This source fragment contains a high-signal visual or interaction decision unique to the block.

```tsx
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-spaceGrotesk font-semibold text-neutral-900 mb-1">
```
<!-- source-audit:end -->

## Buttons

Actions are compact social/contact controls derived from the accent; give each at least a 44px hit area.

## Motion and interaction states

Use group hover to connect portrait, name and action; also expose equivalent keyboard focus behavior.

## Rules for extending this design

1. Carry the **Clean social team cards** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Modern**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
