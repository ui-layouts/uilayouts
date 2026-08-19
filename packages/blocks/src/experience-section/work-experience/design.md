# Work Experience — Design System

> Use this file as the complete visual and implementation brief for extending the `work-experience` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/experience-section/work-experience.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/lib/utils.ts` — the class-merging utility

## Required libraries and primitives

- **motion** (external) — provides the entrance, presence, drag, spring, and layout animation behavior. Install with `pnpm add motion`.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@/lib/utils** (local) — the class-merging utility.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Soft résumé timeline defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use editorial role/project titles, muted dates, and small categorical labels; keep chronology immediately scannable. The source’s concrete type anchors are `text-3xl`, `font-semibold`, `text-sm`, `text-lg`, `font-bold`, `text-xs`, `font-dmSans`, `tracking-wider`, `leading-relaxed`, `font-medium`.

## Palette and contrast

The implementation anchors its palette with `text-zinc-900`, `text-zinc-500`, `text-zinc-800`, `text-zinc-950`, `text-zinc-200`, `bg-zinc-200`, `bg-white`, `border-zinc-200`, `text-zinc-400`, `text-zinc-600`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Use a timeline, ledger, or accordion with aligned dates and content; collapse to a single reading column on mobile.

## Background construction

Use zinc-50 rows, fine dividers, muted date/type labels and dark roles; animate each entry through modest opacity/scale and strengthen card shadow only on focus/hover.

## Imagery and iconography

Use project/customer imagery only when tied to the active record; otherwise let typography and rules carry the layout.

## Unique components and signature effects

1. **Soft résumé timeline.** Use zinc-50 rows, fine dividers, muted date/type labels and dark roles; animate each entry through modest opacity/scale and strengthen card shadow only on focus/hover.
   - **Use it for:** keeping professional history calm and highly scannable
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Motion-driven behavior

**Location:** `packages/blocks/src/experience-section/work-experience.tsx:57-65`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-2">
```

### 2. Motion-driven behavior

**Location:** `packages/blocks/src/experience-section/work-experience.tsx:71-84`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
        <p className="text-sm text-zinc-500 ml-9">
          Building products that millions of people use every day
        </p>
      </motion.div>

      <div className="">
        {history.map((item, idx) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: idx * 0.15,
              duration: 0.5,
```

### 3. Motion-driven behavior

**Location:** `packages/blocks/src/experience-section/work-experience.tsx:112-119`
**Why it is core:** The motion configuration controls the effect’s timing, position, and interaction response.

```tsx
              </div>

              {/* Content Card */}
              <motion.div
                animate={{
                  y: hoveredIndex === idx ? -4 : 0,
                }}
                transition={{ duration: 0.2 }}
```
<!-- source-audit:end -->

## Buttons

Use text arrows or compact icon controls, with the accent appearing only on the active or actionable item.

## Motion and interaction states

Entry reveals follow chronology; active-item transitions may crossfade, but layout position should remain predictable.

## Rules for extending this design

1. Carry the **Soft résumé timeline** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Work Experience**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
