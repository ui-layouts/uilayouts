# Classic — Design System

> Use this file as the complete visual and implementation brief for extending the `team-classic` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/team-section/team-classic.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/components/ui/timeline-animation.tsx` — the scroll-triggered stagger primitive used to sequence the block
- `apps/ui-layout/lib/utils.ts` — the class-merging utility

## Required libraries and primitives

- **@/components/ui/timeline-animation** (local) — the scroll-triggered stagger primitive used to sequence the block.
- **@/lib/utils** (local) — the class-merging utility.
- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Floating profile note defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use a strong team heading, readable names, muted roles, and 10–12px metadata only for tags/status. The source’s concrete type anchors are `text-5xl`, `font-cursive`, `text-sm`, `tracking-wide`, `text-xl`, `font-bold`, `tracking-wider`, `font-spaceGrotesk`, `font-medium`, `text-xs`.

## Palette and contrast

The implementation anchors its palette with `bg-[#FFF0F5]`, `text-neutral-800`, `text-neutral-500`, `bg-white`, `text-green-500`, `text-black`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a responsive portrait grid with consistent card aspect ratios; hover overlays must remain reachable without covering names.

## Background construction

Use a pale blush #FFF0F5 field and clean portrait grid; reveal a white elevated profile card above the image on hover with offset translation.

## Imagery and iconography

Portraits are the visual core. Preserve deliberate grayscale, crop, overlay, and color-reveal treatment across new people.

## Unique components and signature effects

1. **Floating profile note.** Use a pale blush #FFF0F5 field and clean portrait grid; reveal a white elevated profile card above the image on hover with offset translation.
   - **Use it for:** adding a friendly editorial surprise to a conventional team grid
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Structural border treatment

**Location:** `packages/blocks/src/team-section/team-classic.tsx:101-107`
**Why it is core:** The border placement creates the block’s visual grouping and alignment.

```tsx
            >
              <div
                className={cn(
                  `relative sm:w-56 w-48 sm:h-56 h-48 rounded-xl p-1 mb-5 group-hover:ring-4`,
                  member.borderClass
                )}
              >
```

### 2. Low-opacity icon pattern

**Location:** `packages/blocks/src/team-section/team-classic.tsx:112-118`
**Why it is core:** Repeated icons at low opacity create a branded texture without competing with foreground content.

```tsx
                    alt={member.name}
                  />
                </div>
                <div className="absolute top-0 group-hover:opacity-100 opacity-0 right-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-x-1/4 -translate-y-1/4 text-green-500 transition-opacity duration-300">
                  {member.emoji}
                </div>
              </div>
```

### 3. Source-specific visual behavior

**Location:** `packages/blocks/src/team-section/team-classic.tsx:123-135`
**Why it is core:** This source fragment contains a high-signal visual or interaction decision unique to the block.

```tsx
                {member.role}
              </p>
              <div className="flex gap-6 text-neutral-500">
                <a href="#" className="hover:text-black transition-colors">
                  <Icons.Facebook />
                </a>
                <a href="#" className="hover:text-black transition-colors">
                  <Icons.Twitter />
                </a>
                <a href="#" className="hover:text-black transition-colors">
                  <Icons.Instagram />
                </a>
              </div>
```
<!-- source-audit:end -->

## Buttons

Actions are compact social/contact controls derived from the accent; give each at least a 44px hit area.

## Motion and interaction states

Use group hover to connect portrait, name and action; also expose equivalent keyboard focus behavior.

## Rules for extending this design

1. Carry the **Floating profile note** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Classic**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
