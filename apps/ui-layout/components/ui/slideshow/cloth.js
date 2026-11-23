// Position-based cloth. The top edge is pinned and neighboring particles
// preserve their rest lengths. A fixed simulation step makes seeking repeatable.
export function clothGeometry(geometry) {
  const positions = geometry.attributes.position;
  const rest = new Float32Array(positions.array),
    previous = new Float32Array(rest);
  const columns = geometry.parameters.widthSegments + 1;
  const edges = [];
  for (let n = 0; n < positions.count; n++) {
    if (n % columns) edges.push([n - 1, n, 1 / (columns - 1)]);
    if (n >= columns)
      edges.push([n - columns, n, 1 / geometry.parameters.heightSegments]);
  }
  let tick = 0,
    cycle = -1;
  return (time) => {
    const period = 4,
      epoch = Math.floor(time / period);
    const target = Math.floor((time - epoch * period) * 60);
    const a = positions.array;
    if (epoch !== cycle || target < tick) {
      a.set(rest);
      previous.set(rest);
      tick = 0;
      cycle = epoch;
    }
    while (tick < target) {
      tick++;
      for (let n = columns; n < positions.count; n++) {
        const i = n * 3;
        const wind =
          0.0014 * Math.sin(rest[i] * 5 + tick / 18) +
          0.0007 * Math.cos(rest[i + 1] * 6 - tick / 17);
        for (let j = 0; j < 3; j++) {
          const x = a[i + j];
          a[i + j] +=
            (x - previous[i + j]) * 0.981 +
            (j === 2 ? wind : j === 1 ? -0.0011 : 0.00015);
          previous[i + j] = x;
        }
      }
      for (let pass = 0; pass < 4; pass++)
        for (const [m, n, length] of edges) {
          const i = m * 3,
            j = n * 3,
            dx = a[j] - a[i],
            dy = a[j + 1] - a[i + 1],
            dz = a[j + 2] - a[i + 2];
          const distance = Math.hypot(dx, dy, dz) || length;
          const factor = (1 - length / distance) / (m < columns ? 1 : 2);
          if (m >= columns) {
            a[i] += dx * factor;
            a[i + 1] += dy * factor;
            a[i + 2] += dz * factor;
          }
          if (n >= columns) {
            a[j] -= dx * factor;
            a[j + 1] -= dy * factor;
            a[j + 2] -= dz * factor;
          }
        }
    }
    positions.needsUpdate = true;
  };
}
