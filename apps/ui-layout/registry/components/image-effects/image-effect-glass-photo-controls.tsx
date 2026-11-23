"use client";
import { GlassPhotoControls } from "@/components/ui/image-effect-glass-photo-controls";

export default function Demo() {
  return (
    <GlassPhotoControls
      aspectRatio="3 / 2"
      photos={[
        { src: "/image-effects/coast.webp", alt: "Coastal landscape" },
        { src: "/image-effects/ridge.webp", alt: "Mountain ridge" },
        { src: "/image-effects/forest.webp", alt: "Forest landscape" },
      ]}
    />
  );
}
