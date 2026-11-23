export const full = (s) => ({ w: s.aspect, h: 1 });

export const strip = (s) => ({ x: s.offset * 0.82, w: 0.75, h: 0.78 });

export const grid = (s) => {
  const col = s.slot % 7,
    row = Math.floor(s.slot / 7);
  return {
    x: (col - 3 - s.phase) * 0.49,
    y: (row - 2 - s.verticalPhase) * 0.36,
    textureIndex: Math.floor(s.travel) + col + 7 * (row + s.verticalBase),
    w: 0.46,
    h: 0.33,
  };
};

export const single = (layout, fragment = "", vertex = "") => ({
  layout,
  fragment,
  vertex,
  count: 1,
});

export const gallery = (layout, vertex = "", fragment = "", count = 11) => ({
  layout,
  vertex,
  fragment,
  count,
});
