

export default {
  count: 63, portrait: true, pan: true,
  layout({ slot, phase, travel, verticalPhase, verticalBase, mx, my, aspect }) {
    const x = ((slot % 9) - 4 - phase) * .42 - (mx - .5) * .09;
    const y = (Math.floor(slot / 9) - 3 - verticalPhase) * .31 - (my - .5) * .08;
    const dx = x - (mx - .5) * aspect, dy = y - (my - .5);
    const influence = Math.exp(-9 * (dx * dx + dy * dy));
    return { textureIndex: Math.floor(travel) + slot + verticalBase * 9, x: x + dx * influence * .5, y: y + dy * influence * .5,
      z: -.2 + .12 * influence, w: .39, h: .285, ry: dx * influence, rx: -dy * influence };
  },
};
