# Footer Simple — Design System

> Use this file as the complete visual and implementation brief for extending the `footer-simple` block. Read the referenced source before coding; the effect recipes describe which part is unique and how it is assembled.

## Source of truth

- `packages/blocks/src/footer-section/footer-simple.tsx` — the canonical block source and the exact effect composition

## Required libraries and primitives

- No effect library is required. The effect is built directly in the canonical block with React and CSS/Tailwind.

## Design thesis

Plain text footer defines the identity. The section should feel purposeful and visually specific; new sections should inherit its visual mechanism, not merely its colors.

## Typography

Use clear link-group headings, compact links and a brand statement sized to the footer’s role; legal text is smallest but readable. The source’s concrete type anchors are `text-2xl`, `font-bold`, `text-sm`, `tracking-widest`, `text-xs`.

## Palette and contrast

The implementation anchors its palette with `bg-white`, `text-black`, `text-zinc-500`, `text-zinc-400`, `text-zinc-600`, `border-zinc-50`. Preserve their roles—canvas, surface, foreground, muted copy, accent and glow—rather than treating them as interchangeable swatches. Do not expand the palette with unrelated accents.

## Composition and rhythm

Preserve strong column alignment and generous terminal whitespace; collapse navigation groups predictably without hiding legal links.

## Background construction

Use white, black and muted zinc link text with one nearly invisible separator; no shadow, gradient, image or motion.

## Imagery and iconography

Use a wordmark, small brand symbol or restrained background art—never unrelated stock imagery.

## Unique components and signature effects

1. **Plain text footer.** Use white, black and muted zinc link text with one nearly invisible separator; no shadow, gradient, image or motion.
   - **Use it for:** ending utility-focused pages without stealing attention
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

2. **Layer discipline.** Separate atmosphere, content surface, and foreground controls into distinct layers. Decorative layers use pointer-events-none and sit below readable content; preserve clipping at the section boundary.
   - **Use it for:** all new sections that reuse the signature treatment without obscuring text or controls
   - **Exact implementation:** Open the canonical block file above and search for the effect name, gradient/color values, or library component described in this recipe. Preserve the same layer order and configuration.

<!-- source-audit:start -->
## Audited source implementation

These are the highest-signal implementation fragments found by reviewing the canonical block. They are part of this design’s identity—not optional examples. When extending the block, reuse the relevant construction and preserve its values, stacking order, and interaction state.

### 1. Source-specific visual behavior

**Location:** `packages/blocks/src/footer-section/footer-simple.tsx:17-29`
**Why it is core:** This source fragment contains a high-signal visual or interaction decision unique to the block.

```tsx
              Social
            </div>
            <div className="flex flex-col gap-2 text-sm text-zinc-600">
              <a href="#" className="hover:text-black">
                Twitter
              </a>
              <a href="#" className="hover:text-black">
                LinkedIn
              </a>
              <a href="#" className="hover:text-black">
                Instagram
              </a>
            </div>
```

### 2. Source-specific visual behavior

**Location:** `packages/blocks/src/footer-section/footer-simple.tsx:33-42`
**Why it is core:** This source fragment contains a high-signal visual or interaction decision unique to the block.

```tsx
              Legal
            </div>
            <div className="flex flex-col gap-2 text-sm text-zinc-600">
              <a href="#" className="hover:text-black">
                Privacy
              </a>
              <a href="#" className="hover:text-black">
                Terms
              </a>
            </div>
```

### 3. Border-led structure

**Location:** `packages/blocks/src/footer-section/footer-simple.tsx:43-49`
**Why it is core:** Hairline borders establish grouping and rhythm without relying on filled cards.

```tsx
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-50 text-xs text-zinc-400 flex justify-between">
        <span>&copy; 2026 UI-Layouts. All rights reserved.</span>
        <span>Made with Precision.</span>
      </div>
```
<!-- source-audit:end -->

## Buttons

Newsletter and final CTAs use the block’s primary contrast; utility/social controls are smaller but retain 44px targets.

## Motion and interaction states

Keep footer motion minimal: link color/underline and button press states are sufficient.

## Rules for extending this design

1. Carry the **Plain text footer** into at least one meaningful focal area; reproduce its layer recipe rather than substituting a generic gradient.
2. Reuse the same accent-to-neutral ratio, image treatment, corner language, and density so adjacent sections read as one system.
3. On small screens, preserve hierarchy and effect placement while removing overlap that could obscure content.
4. Provide reduced-motion behavior and keyboard focus parity for every hover-driven reveal.

## Do not

- Listing raw utility classes as a substitute for design intent.
- Applying the signature effect to every surface; protect a clear hierarchy and quiet reading areas.
- Introducing a second visual metaphor, unrelated accent palette, or different portrait/illustration treatment.

## AI implementation instruction

Build the requested interface as a sibling of **Footer Simple**. First inspect every file under **Source of truth**. Reproduce the applicable unique component using the exact dependency, configuration, layer order, palette, and interaction described above; do not replace it with a generic gradient or approximation. Then translate the same typography, spacing, surfaces, imagery, controls, and responsive hierarchy into the new content. Use semantic HTML, keyboard-visible focus, reduced-motion fallbacks, and existing project primitives.
