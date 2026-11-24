type Point = { x: number; y: number };

export type TrailPicture = {
  img: HTMLImageElement;
  x: number;
  y: number;
  cropWidth: number;
  cropHeight: number;
};

export type TrailStamp = {
  image: TrailPicture;
  position: Point;
  born: number;
};

type Brush = {
  context: CanvasRenderingContext2D;
  size: Point;
  now: number;
};

export function cropPicture(img: HTMLImageElement): TrailPicture {
  const width = Math.min(img.naturalWidth, img.naturalHeight * 0.8);
  const height = width / 0.8;
  return {
    img,
    x: (img.naturalWidth - width) / 2,
    y: (img.naturalHeight - height) / 2,
    cropWidth: width,
    cropHeight: height,
  };
}

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const ease = (value: number) => 1 - (1 - clamp(value)) ** 3;
const fade = (value: number, start: number) => 1 - clamp((value - start) / (1 - start));

function drawPhoto(
  ctx: CanvasRenderingContext2D,
  image: TrailPicture,
  x: number,
  y: number,
  width: number,
  height: number
) {
  ctx.drawImage(
    image.img,
    image.x,
    image.y,
    image.cropWidth,
    image.cropHeight,
    x,
    y,
    width,
    height
  );
}

function gooProfile(stamp: TrailStamp, now: number, lifetime: number) {
  const time = clamp((now - stamp.born) / lifetime);
  const swell = ease(time / 0.3);
  const wobble = Math.sin(time * 31) * (1 - swell) * 0.3;
  const scale = (0.08 + swell * (0.92 + wobble)) * (0.05 + 0.95 * fade(time, 0.58));
  return { scale, opacity: fade(time, 0.77) };
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
    const reach = (a.scale + b.scale) * size.x * 0.72;
    if (gap > reach || reach === 0) continue;
    ctx.save();
    ctx.globalAlpha = Math.min(a.opacity, b.opacity) * Math.sqrt(1 - gap / reach) * 0.7;
    ctx.strokeStyle = '#a5a895';
    ctx.lineCap = 'round';
    ctx.lineWidth = Math.min(a.scale, b.scale) * size.x * 0.63;
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
  const time = clamp((now - stamp.born) / lifetime);
  const { x, y } = stamp.position;
  ctx.save();
  ctx.translate(x, y);
  if (reduced) {
    ctx.globalAlpha = ease(time / 0.2) * fade(time, 0.4);
    drawPhoto(ctx, stamp.image, -size.x / 2, -size.y / 2, size.x, size.y);
  } else {
    const { scale, opacity } = gooProfile(stamp, now, lifetime);
    const width = size.x * scale;
    const height = size.y * scale;
    ctx.globalAlpha = opacity;
    ctx.beginPath();
    ctx.roundRect(-width / 2, -height / 2, width, height, width * (0.13 + 0.35 * (1 - scale)));
    ctx.clip();
    drawPhoto(ctx, stamp.image, -width / 2, -height / 2, width, height);
  }
  ctx.restore();
}
