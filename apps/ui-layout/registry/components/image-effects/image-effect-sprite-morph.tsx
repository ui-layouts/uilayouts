"use client";
import { SpriteMorph } from "@/components/ui/image-effect-sprite-morph";

const root = "/image-effects/specimens/";
export default function Demo() {
  return (
    <SpriteMorph
      label="Insect specimen study"
      labels={["Silk moth", "Jewel beetle", "Dragonfly"]}
      images={["moth", "beetle", "dragonfly"].map(
        (name) => root + name + ".svg",
      )}
      atlases={["moth-beetle", "beetle-dragonfly", "dragonfly-moth"].map(
        (pair) => root + pair + ".webp",
      )}
    />
  );
}
