# Magic — Design System

> Use this file as the complete visual and implementation brief for extending the `team-magic` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/team-section/team-magic.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block

## Required libraries and primitives

- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.

## Design thesis

Cyan holographic profiles defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `text-6xl`, `font-spaceGrotesk`, `font-semibold`, `text-lg`, `leading-relaxed`, `text-2xl`, `font-bold`, `text-sm`, `text-xs`, `text-3xl`.

## Palette and contrast

The implementation anchors its palette with `bg-neutral-950`, `text-white`, `text-neutral-400`, `border-white/10`, `border-blue-500/50`, `border-white/20`, `bg-white/5`, `text-blue-600`, `border-white/30`, `bg-white/10`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.

## Background construction

Stage profiles on neutral-950 with white/5 glass, cyan #00D1FF edge light and backdrop blur; raise hidden profile details from y=4 while portraits zoom.

## Imagery and iconography

Portraits are the visual core. Preserve deliberate grayscale, crop, overlay, and color-reveal treatment across new people.

## Unique components and signature effects

1. **Cyan holographic profiles.** Stage profiles on neutral-950 with white/5 glass, cyan #00D1FF edge light and backdrop blur; raise hidden profile details from y=4 while portraits zoom.
   - **Use it for:** creating a futuristic reveal around each person
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Translucent glass layer

**Location:** `packages/blocks/src/team-section/team-magic.tsx:81-96`
**Why it is core:** Blur, transparency, border, and stacking work together as one glass treatment.

```tsx
              key={member.id}
              timelineRef={timelineRef}
              animationNum={3 + i}
              className="relative group perspective-1000"
            >
              <div className="aspect-4/5 rounded-[2.5rem] overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-all duration-700 relative">
                <img
                  src={member.img}
                  className="w-full h-full object-cover filter brightness-75 group-hover:brightness-50 group-hover:scale-110 transition-all duration-700"
                  alt={member.name}
                />

                <div className="absolute inset-4 rounded-3xl border border-white/20 backdrop-blur-md bg-white/5 flex flex-col items-center justify-center p-6 border-b-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="mt-auto text-center">
                    <h4 className="text-2xl font-bold font-spaceGrotesk mb-1 text-blue-600">
                      {member.name}
```

### 2. Structural border treatment

**Location:** `packages/blocks/src/team-section/team-magic.tsx:109-115`
**Why it is core:** The border placement creates the block’s visual grouping and alignment.

```tsx
        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={6}
          className="flex flex-col md:flex-row items-center justify-between text-left gap-8 py-12 border-t border-white/5"
        >
          <div>
            <h3 className="text-3xl font-spaceGrotesk font-bold mb-4">
```

### 3. Structural border treatment

**Location:** `packages/blocks/src/team-section/team-magic.tsx:123-132`
**Why it is core:** The border placement creates the block’s visual grouping and alignment.

```tsx
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-4 text-white cursor-pointer hover:text-white bg-white/5 p-3 h-14 rounded-full border border-white/10 hover:bg-white/10 transition-all group"
          >
            <span className="font-bold">Contact Us</span>
            <div className="w-8 h-8 bg-[#00D1FF]/20 text-[#00D1FF] rounded-full flex items-center justify-center group-hover:bg-[#00D1FF] group-hover:text-black transition-all">
              <svg
                className="w-5 h-5"
                fill="none"
```
<!-- source-audit:end -->

## Buttons

Actions are compact social/contact controls derived from the accent; give each at least a 44px hit area.

## Motion and interaction states

Use group hover to connect portrait, name and action; also expose equivalent keyboard focus behavior.

## Rules for extending this design

1. Carry the **Cyan holographic profiles** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Magic**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
