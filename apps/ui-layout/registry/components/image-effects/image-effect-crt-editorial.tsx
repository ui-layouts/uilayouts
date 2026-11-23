"use client";
import { CrtEditorial } from "@/components/ui/image-effect-crt-editorial";
export default function Demo() {
  return (
    <CrtEditorial
      images={[
        "/image-effects/coast.webp",
        "/image-effects/forest.webp",
        "/image-effects/ridge.webp",
      ]}
      captions={[
        "After the tide",
        "The forest holds the last of the afternoon light.",
        "Above the tree line",
      ]}
    />
  );
}
