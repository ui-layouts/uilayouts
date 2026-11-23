'use client';
import { createElement as h, useEffect, useRef, useState } from "react";
import { effects } from "./effects.js";
import { mountScene } from "./scene.js";

function makeTemplate(name) {
  function Template(props) {
    const host = useRef(null),
      current = useRef(props);
    current.current = props;
    const [status, setStatus] = useState("");
    const inputs = JSON.stringify(props.images ?? []);
    const depthInputs = JSON.stringify(name === "PhantomGrid" ? props.depthMaps ?? [] : []);
    useEffect(() => {
      const sources = JSON.parse(inputs);
      if (!sources.length) {
        setStatus("Supply at least one image.");
        return;
      }
      setStatus("Loading images…");
      try {
        return mountScene(
          host.current,
          effects[name],
          sources,
          current,
          setStatus,
          JSON.parse(depthInputs),
        );
      } catch (error) {
        setStatus(error.message);
      }
    }, [inputs, depthInputs]);
    return h(
      "div",
      {
        className: props.className,
        style: {
          position: "relative",
          aspectRatio: "16/9",
          background: "#161819",
          ...props.style,
        },
      },
      h("div", {
        ref: host,
        role: "img",
        "aria-label": props.label ?? name,
        style: { position: "absolute", inset: 0, overflow: "hidden" },
      }),
      status &&
        h(
          "span",
          {
            role: "status",
            style: {
              position: "absolute",
              inset: 12,
              color: "white",
              pointerEvents: "none",
            },
          },
          status,
        ),
    );
  }
  Template.displayName = name;
  return Template;
}
export const templates = Object.fromEntries(
  Object.keys(effects).map((name) => [name, makeTemplate(name)]),
);
export const {
  MotionHover,
  GooeyHover,
  CircularGallery,
  InfiniteGallery,
  PhysicsCloth,
  WebGLCarousel,
  Bulge,
  EmergingImages,
  SdfLensBlur,
  ProgressiveBlur,
  ObjectFit,
  ScrollGrain,
  RotatingGallery,
  InteractiveGrid,
  ShaderRipple,
  DomCloth,
  PhantomGrid,
  DepthGallery,
  SquareLens,
  CurveGallery,
  LiquidGlassGrid,
  ImageTube,
  InfiniteCanvas,
  CinematicScroll,
  KineticImages,
  Unwoven,
  ExperimentalCarousel,
} = templates;
