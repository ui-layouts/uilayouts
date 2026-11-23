type Point = { x: number; y: number };

export type CanvasEffect =
  | 'motion-tile'
  | 'motion-strata'
  | 'motion-tail'
  | 'motion-silk'
  | 'motion-liquid'
  | 'motion-dust'
  | 'motion-gooey'
  | 'motion-swirl';

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
  direction: Point;
  born: number;
  seed: number;
};

export type Brush = {
  context: CanvasRenderingContext2D;
  size: Point;
  pointer: Point;
  velocity: Point;
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
const noise = (seed: number) => {
  const n = Math.sin(seed * 127.1 + 17.17) * 43758.5453;
  return n - Math.floor(n);
};

export function drawPhoto(
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

/** Draw a source tile into its own destination rectangle. */
function patch(
  ctx: CanvasRenderingContext2D,
  image: TrailPicture,
  u: number,
  v: number,
  uw: number,
  vh: number,
  x: number,
  y: number,
  width: number,
  height: number
) {
  ctx.drawImage(
    image.img,
    image.x + u * image.cropWidth,
    image.y + v * image.cropHeight,
    uw * image.cropWidth,
    vh * image.cropHeight,
    x,
    y,
    width,
    height
  );
}

function tiles({ context: ctx, size }: Brush, stamp: TrailStamp, time: number, dust: boolean) {
  const { x: width, y: height } = size;
  const cols = dust ? 14 : 5;
  const rows = dust ? 17 : 5;
  const cellWidth = width / cols;
  const cellHeight = height / rows;
  const { x: dx, y: dy } = stamp.direction;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const seed = stamp.seed * 1000 + row * cols + col;
      const random = noise(seed);
      const edge = (dx * (col / cols - 0.5) + dy * (row / rows - 0.5) + 1) / 2;
      const gather = dust ? 1 - ease((time - edge * 0.14) / 0.34) : 0;
      const split = ease(
        (time - (dust ? 0.38 + edge * 0.16 : 0.12) - random * 0.12) / (dust ? 0.38 : 0.68)
      );
      const spread = dust ? split * 118 - gather * 69 : split * 26;
      const scale = 1 - (dust ? 0.75 : 0.24) * Math.max(split, gather);
      const side = (random - 0.5) * Math.max(split, gather) * (dust ? 68 : 38);
      const x = col * cellWidth - width / 2 + dx * spread - dy * side;
      const y = row * cellHeight - height / 2 + dy * spread + dx * side;
      ctx.globalAlpha = (1 - split) * (1 - gather);
      patch(
        ctx,
        stamp.image,
        col / cols,
        row / rows,
        1 / cols,
        1 / rows,
        x,
        y,
        cellWidth * scale + 0.4,
        cellHeight * scale + 0.4
      );
    }
  }
}

function strata({ context: ctx, size }: Brush, stamp: TrailStamp, time: number) {
  const count = 13;
  const band = size.y / count;
  const { x: dx, y: dy } = stamp.direction;
  const angle = Math.atan2(dy, dx);
  ctx.rotate(angle);
  // Render the strips on the motion axis while keeping the picture upright.
  for (let i = 0; i < count; i++) {
    const middle = Math.abs((i + 0.5) / count - 0.5) * 2;
    const lag = 1 - ease((time - middle * 0.1) / 0.42);
    const drift = ease((time - 0.56 - middle * 0.14) / 0.28);
    const bend = Math.sin(time * 24 + i * 0.65) * lag * 12;
    ctx.globalAlpha = fade(time, 0.58 + middle * 0.12);
    ctx.save();
    ctx.translate(-lag * 54 + drift * 55 + bend, 0);
    ctx.beginPath();
    ctx.rect(-size.y, -size.y / 2 + i * band, size.y * 2, band + 0.7);
    ctx.clip();
    ctx.rotate(-angle);
    drawPhoto(ctx, stamp.image, -size.x / 2, -size.y / 2, size.x, size.y);
    ctx.restore();
  }
}

function triangle(
  ctx: CanvasRenderingContext2D,
  image: TrailPicture,
  size: Point,
  source: [Point, Point, Point],
  target: [Point, Point, Point]
) {
  const [a, b, c] = source;
  const [p, q, r] = target;
  const bx = b.x - a.x;
  const by = b.y - a.y;
  const cx = c.x - a.x;
  const cy = c.y - a.y;
  const det = bx * cy - cx * by;
  const xx = ((q.x - p.x) * cy - (r.x - p.x) * by) / det;
  const xy = ((r.x - p.x) * bx - (q.x - p.x) * cx) / det;
  const yx = ((q.y - p.y) * cy - (r.y - p.y) * by) / det;
  const yy = ((r.y - p.y) * bx - (q.y - p.y) * cx) / det;

  ctx.save();
  ctx.beginPath();
  const center = { x: (p.x + q.x + r.x) / 3, y: (p.y + q.y + r.y) / 3 };
  target.forEach((point, index) => {
    // Slight overlap fills hairline seams at antialiased triangle edges.
    const x = point.x + (point.x - center.x) * 0.045;
    const y = point.y + (point.y - center.y) * 0.045;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.clip();
  ctx.transform(xx, yx, xy, yy, p.x - xx * a.x - xy * a.y, p.y - yx * a.x - yy * a.y);
  drawPhoto(ctx, image, 0, 0, size.x, size.y);
  ctx.restore();
}

type WarpEffect = 'motion-silk' | 'motion-liquid' | 'motion-swirl';

function warped(brush: Brush, stamp: TrailStamp, time: number, effect: WarpEffect) {
  const { context: ctx, size, velocity, pointer } = brush;
  const strength = Math.sin(Math.PI * Math.min(0.95, time + 0.15));
  const { x: dx, y: dy } = stamp.direction;
  const cols = 6;
  const rows = 7;
  const source: Point[] = [];
  const target: Point[] = [];
  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= cols; col++) {
      const u = col / cols;
      const v = row / rows;
      const x = (u - 0.5) * size.x;
      const y = (v - 0.5) * size.y;
      source.push({ x: u * size.x, y: v * size.y });
      if (effect === 'motion-silk') {
        const along = dx * (u - 0.5) + dy * (v - 0.5);
        const wave = Math.sin(along * 15 - time * 14) * strength * 19;
        target.push({ x: x - dy * wave - dx * wave * 0.4, y: y + dx * wave - dy * wave * 0.4 });
      } else if (effect === 'motion-liquid') {
        const proximity = Math.exp(
          -Math.hypot(stamp.position.x + x - pointer.x, stamp.position.y + y - pointer.y) / 110
        );
        const wave = Math.sin(v * 14 - time * 13 + u * 4) * strength;
        target.push({
          x: x + wave * 18 + velocity.x * proximity * 17,
          y: y + Math.cos(u * 14 - time * 12) * strength * 11 + velocity.y * proximity * 17,
        });
      } else {
        const offsetX = x - dx * 18;
        const offsetY = y - dy * 18;
        const radius = Math.hypot(offsetX / size.x, offsetY / size.y);
        const turn = Math.max(0, 1 - radius * 1.45) * strength * (time * 4.9 + 0.6);
        target.push({
          x: offsetX * Math.cos(turn) - offsetY * Math.sin(turn) + dx * 18,
          y: offsetX * Math.sin(turn) + offsetY * Math.cos(turn) + dy * 18,
        });
      }
    }
  }
  ctx.globalAlpha = ease(time / 0.15) * fade(time, 0.55);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const a = row * (cols + 1) + col;
      const b = a + 1;
      const c = a + cols + 1;
      const d = c + 1;
      triangle(
        ctx,
        stamp.image,
        size,
        [source[a], source[b], source[c]],
        [target[a], target[b], target[c]]
      );
      triangle(
        ctx,
        stamp.image,
        size,
        [source[b], source[d], source[c]],
        [target[b], target[d], target[c]]
      );
    }
  }
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
  effect: CanvasEffect,
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
  } else if (effect === 'motion-tile' || effect === 'motion-dust') {
    tiles(brush, stamp, time, effect === 'motion-dust');
  } else if (effect === 'motion-strata') {
    strata(brush, stamp, time);
  } else if (effect === 'motion-gooey') {
    const { scale, opacity } = gooProfile(stamp, now, lifetime);
    const width = size.x * scale;
    const height = size.y * scale;
    ctx.globalAlpha = opacity;
    ctx.beginPath();
    ctx.roundRect(-width / 2, -height / 2, width, height, width * (0.13 + 0.35 * (1 - scale)));
    ctx.clip();
    drawPhoto(ctx, stamp.image, -width / 2, -height / 2, width, height);
  } else if (effect !== 'motion-tail') {
    const glide = effect === 'motion-silk' ? ease(time) * 140 - 34 : -32 * (1 - ease(time));
    const scale = 0.82 + ease(time / 0.58) * 0.18;
    ctx.translate(stamp.direction.x * glide, stamp.direction.y * glide);
    ctx.scale(scale, scale);
    warped(brush, stamp, time, effect);
  }
  ctx.restore();
}
