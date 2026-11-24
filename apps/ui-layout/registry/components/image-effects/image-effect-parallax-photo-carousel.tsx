"use client";
import { ParallaxPhotoCarousel } from "@/components/ui/image-effect-parallax-photo-carousel";
export default function Demo() {
  return (
    <ParallaxPhotoCarousel
      images={[
        "coast",
        "ridge",
        "lake",
        "forest",
        "portrait",
        "dunes",
        "valley",
        "flowers",
      ].map((name) => `/image-effects/${name}.webp`)}
    />
  );
}
