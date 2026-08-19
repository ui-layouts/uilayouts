# Expert — Design System

> Use this file as the complete visual and implementation brief for extending the `team-expert` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/team-section/team-expert.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block

## Required libraries and primitives

- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Orange expertise cards defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `text-lg`, `font-spaceGrotesk`, `font-bold`, `text-sm`, `text-4xl`, `font-light`, `leading-relaxed`, `text-2xl`, `font-semibold`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `border-neutral-100`, `bg-orange-500`, `text-orange-50`, `text-neutral-800`, `text-neutral-400`, `bg-neutral-50`, `text-neutral-500`, `bg-orange-100`, `border-orange-200`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.

## Background construction

Use orange #FF6B00 for badges, icon blocks and emphasis; allow portraits/icons to scale slightly while cards gain orange-tinted 2xl elevation and arrows travel right.

## Imagery and iconography

Portraits are the visual core. Preserve deliberate grayscale, crop, overlay, and color-reveal treatment across new people.

## Unique components and signature effects

1. **Orange expertise cards.** Use orange #FF6B00 for badges, icon blocks and emphasis; allow portraits/icons to scale slightly while cards gain orange-tinted 2xl elevation and arrows travel right.
   - **Use it for:** making specialists feel energetic and directly accessible
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Depth and glow treatment

**Location:** `packages/blocks/src/team-section/team-expert.tsx:46-54`
**Why it is core:** These exact shadows and blur layers distinguish foreground from atmosphere.

```tsx
  <TimelineAnimation
    timelineRef={timelineRef}
    animationNum={animationNum}
    className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center hover:shadow-md transition-shadow group cursor-default"
  >
    <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-orange-50 group-hover:scale-110 transition-transform">
      <Boxes />
    </div>
    <h4 className="text-lg font-spaceGrotesk font-bold text-neutral-800 my-1">
```

### 2. Depth and glow treatment

**Location:** `packages/blocks/src/team-section/team-expert.tsx:92-115`
**Why it is core:** These exact shadows and blur layers distinguish foreground from atmosphere.

```tsx
              key={member.id}
              timelineRef={timelineRef}
              animationNum={2 + i}
              className="group p-6 rounded-3xl transition-all duration-300 bg-orange-100 border border-orange-200 hover:bg-[#FF6B00] hover:shadow-2xl hover:shadow-orange-200"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 border-4 border-transparent group-hover:border-white/20 transition-all">
                <img
                  src={member.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={member.name}
                />
              </div>
              <h3 className="font-spaceGrotesk text-2xl font-semibold mb-2 text-neutral-900 group-hover:text-white transition-colors">
                {member.name}
              </h3>
              <p className="text-sm mb-6 text-neutral-500 group-hover:text-white/80 transition-colors">
                {member.role}
              </p>
              <button className="font-spaceGrotesk text-sm font-semibold flex items-center gap-2 text-[#FF6B00] group-hover:text-white transition-colors">
                READ MORE
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
```
<!-- source-audit:end -->

## Buttons

Actions are compact social/contact controls derived from the accent; give each at least a 44px hit area.

## Motion and interaction states

Use group hover to connect portrait, name and action; also expose equivalent keyboard focus behavior.

## Rules for extending this design

1. Carry the **Orange expertise cards** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Expert**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
