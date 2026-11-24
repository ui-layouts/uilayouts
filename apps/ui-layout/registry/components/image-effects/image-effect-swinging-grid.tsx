"use client";
import { SwingingGrid } from "@/components/ui/image-effect-swinging-grid";
export default function Demo() {
  return (
    <SwingingGrid style={{ background: 'transparent' }}
      images={[]}
      sheet="/image-effects/swinging-grid.webp"
      label="Scroll the Codrops portrait gallery"
    />
  );
}
