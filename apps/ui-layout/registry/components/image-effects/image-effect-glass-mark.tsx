"use client";
import { useState } from "react";
import { GlassMark } from "@/components/ui/image-effect-glass-mark";

export default function Demo() {
  const [mark, setMark] = useState("✳");
  return (
    <section
      style={{
        width: "100%",
        padding: "48px 20px",
        display: "grid",
        justifyItems: "center",
        gap: 16,
        background: "#e8e9e7",
        color: "#212221",
      }}
    >
      <GlassMark mark={mark} size={214} label={`Workspace icon, ${mark}`} />
      <label style={{ font: "500 14px system-ui", display: "grid", gap: 8 }}>
        Workspace monogram
        <input
          value={mark}
          maxLength={3}
          onChange={(e) => setMark(e.target.value)}
          style={{
            border: "1px solid #aeb0aa",
            borderRadius: 8,
            padding: "8px 12px",
            background: "#f7f8f6",
            width: 180,
          }}
        />
      </label>
    </section>
  );
}
