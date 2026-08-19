# Social — Design System

> Use this file as the complete visual and implementation brief for extending the `team-social` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/team-section/team-social.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block
- `packages/ui/src/index.tsx` — the open-source workspace UI primitive barrel used by this block

## Required libraries and primitives

- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **@repo/ui** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Community action cards defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `text-xs`, `font-semibold`, `text-5xl`, `font-serif`, `font-bold`, `text-lg`, `leading-relaxed`, `font-spaceGrotesk`, `text-xl`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `bg-green-50`, `text-green-700`, `text-neutral-900`, `text-neutral-500`, `bg-orange-500`, `shadow-orange-500`, `text-white`, `border-neutral-200`, `text-neutral-400`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.

## Background construction

Use clean white cards, green social/status chips, and a saturated orange floating action with matching shadow; keep most text neutral.

## Imagery and iconography

Portraits are the visual core. Preserve deliberate grayscale, crop, overlay, and color-reveal treatment across new people.

## Unique components and signature effects

1. **Community action cards.** Use clean white cards, green social/status chips, and a saturated orange floating action with matching shadow; keep most text neutral.
   - **Use it for:** making connection and availability the primary behavior
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Depth and glow treatment

**Location:** `packages/blocks/src/team-section/team-social.tsx:72-81`
**Why it is core:** These exact shadows and blur layers distinguish foreground from atmosphere.

```tsx
            animationNum={4}
            className="flex items-center justify-center gap-4"
          >
            <Button className="px-6 py-3 font-spaceGrotesk bg-orange-500 shadow-lg shadow-orange-500 text-white font-bold rounded-xl hover:bg-ornage-600 transition-all ">
              Get started
            </Button>
            <Button className="px-4 py-3 font-spaceGrotesk border border-neutral-200 font-bold rounded-xl text-white transition-all">
              Explore features
            </Button>
          </TimelineAnimation>
```

### 2. Source-specific visual behavior

**Location:** `packages/blocks/src/team-section/team-social.tsx:89-95`
**Why it is core:** This source fragment contains a high-signal visual or interaction decision unique to the block.

```tsx
              animationNum={5 + i}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-full rounded-full overflow-hidden mb-6 ring-4 ring-transparent group-hover:ring-orange-100 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
```

### 3. Source-specific visual behavior

**Location:** `packages/blocks/src/team-section/team-social.tsx:103-109`
**Why it is core:** This source fragment contains a high-signal visual or interaction decision unique to the block.

```tsx
              <div className="flex gap-4 text-neutral-400">
                <a
                  href="#"
                  className="hover:text-neutral-600 transition-colors"
                >
                  <TwitterIcon />
                </a>
```
<!-- source-audit:end -->

## Buttons

Actions are compact social/contact controls derived from the accent; give each at least a 44px hit area.

## Motion and interaction states

Use group hover to connect portrait, name and action; also expose equivalent keyboard focus behavior.

## Rules for extending this design

1. Carry the **Community action cards** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Social**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
