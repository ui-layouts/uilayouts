# Footer Hero — Design System

> Use this file as the complete visual and implementation brief for extending the `footer-hero` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/footer-section/hero-footer.tsx` — the canonical block source and the exact effect composition
- `apps/ui-layout/lib/utils.ts` — the class-merging utility
- `packages/shadcn/src/index.tsx` — the open-source workspace component barrel used by this block
- `packages/ui/src/index.tsx` — the open-source workspace UI primitive barrel used by this block

## Required libraries and primitives

- **@/lib/utils** (local) — the class-merging utility.
- **lucide-react** (external) — provides the line-icon vocabulary used by controls and labels. Install with `pnpm add lucide-react`.
- **@repo/ui** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **@repo/shadcn** (workspace) — an existing workspace design primitive; reuse it rather than replacing its behavior.
- **clsx** (external) — provides an external primitive used by this effect. Install with `pnpm add clsx`.
- **tailwind-merge** (external) — provides an external primitive used by this effect. Install with `pnpm add tailwind-merge`.

## Design thesis

Footer as final hero defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use clear link-group headings, compact links and a brand statement sized to the footer’s role; legal text is smallest but readable. The source’s concrete type anchors are `font-dmSans`, `text-5xl`, `text-6xl`, `font-bold`, `font-semibold`, `text-4xl`, `tracking-tighter`, `text-2xl`, `text-sm`, `font-medium`.

## Palette and contrast

The implementation anchors its palette with `bg-neutral-100`, `from-gray-200`, `to-gray-300`, `bg-black/20`, `text-white`, `bg-violet-600`, `bg-violet-700`, `bg-white`, `text-violet-600`, `bg-black`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Preserve strong column alignment and generous terminal whitespace; collapse navigation groups predictably without hiding legal links.

## Background construction

Treat the footer as a second conversion hero: oversized statement, violet CTA, grayscale metallic text gradient and a large black panel with 2xl depth.

## Imagery and iconography

Use a wordmark, small brand symbol or restrained background art—never unrelated stock imagery.

## Unique components and signature effects

1. **Footer as final hero.** Treat the footer as a second conversion hero: oversized statement, violet CTA, grayscale metallic text gradient and a large black panel with 2xl depth.
   - **Use it for:** ending the page with the same energy as its opening
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Depth and glow treatment

**Location:** `packages/blocks/src/footer-section/hero-footer.tsx:10-19`
**Why it is core:** These exact shadows and blur layers distinguish foreground from atmosphere.

```tsx
      <div className="w-[80%] mx-auto px-6">
        {/* Floating Call to Action */}
        <div className="relative z-10 -mb-24">
          <div className="bg-linear-to-r from-gray-200 to-gray-300 rounded-2xl overflow-hidden h-96 relative group shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1549979047-f06bb9619b61?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-center p-12 md:p-24">
              <h2 className="text-white text-5xl md:text-6xl font-bold max-w-2xl mb-8">
```

### 2. Structural border treatment

**Location:** `packages/blocks/src/footer-section/hero-footer.tsx:94-100`
**Why it is core:** The border placement creates the block’s visual grouping and alignment.

```tsx
                    placeholder="Enter your email"
                    className="w-full bg-transparent border border-gray-700 rounded-full px-6 py-3 pr-12 text-white focus:outline-none focus:border-violet-500 transition-colors"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 size-8 bg-violet-600 rounded-full flex items-center justify-center hover:bg-violet-700 transition-colors">
                    <span className="text-xl">›</span>
                  </button>
                </div>
```

### 3. Structural border treatment

**Location:** `packages/blocks/src/footer-section/hero-footer.tsx:101-123`
**Why it is core:** The border placement creates the block’s visual grouping and alignment.

```tsx
              </div>
            </div>

            <nav className="border-t border-gray-800 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm font-medium text-gray-300">
              <a href="#" className="hover:text-white transition-colors">
                Portfolio
              </a>
              <a href="#" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Services
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Resume
              </a>
            </nav>
```
<!-- source-audit:end -->

## Buttons

Newsletter and final CTAs use the block’s primary contrast; utility/social controls are smaller but retain 44px targets.

## Motion and interaction states

Keep footer motion minimal: link color/underline and button press states are sufficient.

## Rules for extending this design

1. Carry the **Footer as final hero** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Footer Hero**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
