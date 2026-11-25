type Point = { x: number; y: number };

export type TrailStamp = {
  image: HTMLImageElement;
  position: Point;
  born: number;
};

type Brush = {
  context: CanvasRenderingContext2D;
  size: number;
  now: number;
};

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const ease = (value: number) => 1 - (1 - clamp(value)) ** 3;
const fade = (value: number, start: number) => 1 - clamp((value - start) / (1 - start));

function gooProfile(stamp: TrailStamp, now: number, lifetime: number) {
  const time = clamp((now - stamp.born) / lifetime);
  const enter = clamp(time / 0.16);
  const exit = clamp((time - 0.66) / 0.34);
  const swell = 0.22 + 0.78 * ease(enter) + 0.09 * Math.sin(enter * Math.PI);
  return { scale: swell * (1 - exit ** 2), opacity: 1 - exit ** 3 };
}

// The nearby stamps share soft, widening necks that disappear as the drops recede.
export function drawGooConnections(
  { context: ctx, size, now }: Brush,
  stamps: TrailStamp[],
  lifetime: number
) {
  for (let i = 1; i < stamps.length; i++) {
    const left = stamps[i - 1];
    const right = stamps[i];
    const a = gooProfile(left, now, lifetime);
    const b = gooProfile(right, now, lifetime);
    const gap = Math.hypot(right.position.x - left.position.x, right.position.y - left.position.y);
    const reach = (a.scale + b.scale) * size * 0.55;
    if (gap > reach || reach === 0) continue;
    ctx.save();
    ctx.globalAlpha = Math.min(a.opacity, b.opacity) * Math.sqrt(1 - gap / reach) * 0.52;
    ctx.strokeStyle = '#91aaf0';
    ctx.lineCap = 'round';
    ctx.lineWidth = Math.min(a.scale, b.scale) * size * 0.29;
    ctx.beginPath();
    ctx.moveTo(left.position.x, left.position.y);
    ctx.lineTo(right.position.x, right.position.y);
    ctx.stroke();
    ctx.restore();
  }
}

export function drawStamp(
  brush: Brush,
  stamp: TrailStamp,
  lifetime: number,
  reduced: boolean
) {
  const { context: ctx, size, now } = brush;
  const { x, y } = stamp.position;
  const time = clamp((now - stamp.born) / lifetime);
  const profile = reduced
    ? { scale: 1, opacity: ease(time / 0.2) * fade(time, 0.4) }
    : gooProfile(stamp, now, lifetime);
  const width = size * profile.scale;
  ctx.save();
  ctx.globalAlpha = profile.opacity;
  ctx.drawImage(stamp.image, x - width / 2, y - width / 2, width, width);
  ctx.restore();
}
