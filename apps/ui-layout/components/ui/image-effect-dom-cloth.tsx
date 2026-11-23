'use client';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import type { CSSProperties } from 'react';
interface ImageEffectProps {
  images: readonly string[];
  className?: string;
  style?: CSSProperties;
  label?: string;
  imageIndex?: number;
  pointer?: readonly [number, number];
  background?: string;
}

const columns = 25,
  rows = 33,
  width = 0.46,
  height = (width * 4) / 3,
  pitch = width * 1.06;
const wrap = (n: number, count: number) => ((n % count) + count) % count;

// Each sheet owns its particle positions. Stretch, diagonal, and bending
// constraints preserve the print while the centre follows the carousel.
function sheet() {
  const geometry = new THREE.PlaneGeometry(
    width,
    height,
    columns - 1,
    rows - 1
  );
  const points = geometry.attributes.position.array as Float32Array;
  const flat = points.slice(),
    previous = points.slice(),
    mass = new Float32Array(points.length / 3);
  const links: { a: number; b: number; length: number; stiffness: number }[] =
    [];
  for (let y = 0; y < rows; y++)
    for (let x = 0; x < columns; x++) {
      const i = y * columns + x,
        dx = (x - 12) / 12,
        dy = (y - 16) / 16;
      mass[i] = Math.min(1, 8 * Math.hypot(dx, dy));
      for (const [ox, oy, stiffness] of [
        [1, 0, 1],
        [0, 1, 1],
        [1, 1, 0.65],
        [-1, 1, 0.65],
        [2, 0, 0.14],
        [0, 2, 0.14],
      ]) {
        const cx = x + ox,
          cy = y + oy;
        if (cx < 0 || cy < 0 || cx >= columns || cy >= rows) continue;
        const j = cy * columns + cx;
        links.push({
          a: i,
          b: j,
          length: Math.hypot(
            flat[i * 3] - flat[j * 3],
            flat[i * 3 + 1] - flat[j * 3 + 1]
          ),
          stiffness,
        });
      }
    }
  function reset() {
    points.set(flat);
    previous.set(flat);
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
  }
  function step(dt: number, travel: number, brush: THREE.Vector3 | null) {
    for (let i = 0; i < mass.length; i++) {
      const k = i * 3,
        weight = mass[i];
      if (!weight) continue;
      const dx = flat[k],
        dy = flat[k + 1];
      const influence = brush
        ? Math.max(0, 1 - Math.hypot(dx - brush.x, dy - brush.y) / 0.14)
        : 0;
      for (let axis = 0; axis < 3; axis++) {
        const at = k + axis,
          pos = points[at],
          v = (pos - previous[at]) * Math.exp(-7 * dt);
        const restoring = (flat[at] - pos) * 60;
        const acceleration =
          axis === 2
            ? Math.abs(travel) * 1300 * (0.3 + Math.abs(dy)) + influence * 6
            : axis === 0
              ? -travel * 930
              : 0;
        points[at] = pos + v + (restoring + acceleration * weight) * dt * dt;
        previous[at] = pos;
      }
    }
    for (let pass = 0; pass < 3; pass++)
      for (const { a, b, length, stiffness } of links) {
        const m = mass[a] + mass[b];
        if (!m) continue;
        const ai = a * 3,
          bi = b * 3,
          dx = points[bi] - points[ai],
          dy = points[bi + 1] - points[ai + 1],
          dz = points[bi + 2] - points[ai + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz) || length,
          correction = ((1 - length / d) * stiffness) / m;
        const wa = mass[a] * correction,
          wb = mass[b] * correction;
        points[ai] += dx * wa;
        points[ai + 1] += dy * wa;
        points[ai + 2] += dz * wa;
        points[bi] -= dx * wb;
        points[bi + 1] -= dy * wb;
        points[bi + 2] -= dz * wb;
      }
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
  }
  return { geometry, reset, step };
}

export function DomCloth({
  images,
  labels,
  imageIndex,
  background,
  className,
  style,
  label,
}: ImageEffectProps & { labels?: readonly string[] }) {
  const host = useRef<HTMLDivElement>(null),
    current = useRef(imageIndex);
  const [active, setActive] = useState(0);
  current.current = imageIndex;
  const sources = JSON.stringify(images);
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const urls: string[] = JSON.parse(sources);
    if (!urls.length) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);
    renderer.domElement.style.cssText = 'width:100%;height:100%;display:block';
    const camera = new THREE.PerspectiveCamera(
      THREE.MathUtils.radToDeg(2 * Math.atan(1 / 3)),
      1,
      0.02,
      20
    );
    camera.position.z = 1.5;
    const scene = new THREE.Scene(),
      rig = new THREE.Group();
    scene.add(rig);
    scene.add(new THREE.AmbientLight(0xffffff, 1.85));
    const key = new THREE.DirectionalLight(0xfff9ee, 1.65);
    key.position.set(-1, 2, 4);
    scene.add(key);
    const loader = new THREE.TextureLoader();
    const photos = urls.map((src) => {
      const tex = loader.load(src);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    });
    const count = 9;
    const slots = Array.from({ length: count }, () => {
      const sim = sheet(),
        material = new THREE.MeshStandardMaterial({
          side: THREE.DoubleSide,
          roughness: 0.78,
          map: photos[0],
        });
      const mesh = new THREE.Mesh(sim.geometry, material);
      rig.add(mesh);
      return { sim, mesh, index: NaN };
    });
    const observer = new ResizeObserver(() => {
      const w = Math.max(1, el.clientWidth),
        h = Math.max(1, el.clientHeight);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
      rig.rotation.z = h > w ? 0.34 : 0.56;
    });
    observer.observe(el);
    const mouse = new THREE.Vector2(10, 10),
      ray = new THREE.Raycaster();
    let target = 0,
      position = 0,
      activeId = -1,
      last = 0,
      held = false,
      prevX = 0,
      prevY = 0,
      touched = false,
      quiet = 0,
      selected: number | undefined;
    function scroll(dx: number, dy: number) {
      target +=
        (dx * Math.cos(rig.rotation.z) - dy * Math.sin(rig.rotation.z)) /
        Math.max(1, el!.clientHeight) /
        pitch;
    }
    function move(e: PointerEvent) {
      if (!e.isPrimary) return;
      const r = el!.getBoundingClientRect();
      mouse.set(
        ((e.clientX - r.left) / r.width) * 2 - 1,
        1 - ((e.clientY - r.top) / r.height) * 2
      );
      touched = true;
      if (held) scroll(prevX - e.clientX, prevY - e.clientY);
      prevX = e.clientX;
      prevY = e.clientY;
    }
    const down = (e: PointerEvent) => {
      move(e);
      held = true;
      el.setPointerCapture(e.pointerId);
    };
    const up = () => {
      held = false;
    };
    const leave = () => {
      touched = false;
      mouse.set(10, 10);
    };
    const wheel = (e: WheelEvent) => {
      e.preventDefault();
      target +=
        (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) /
        Math.max(1, el.clientHeight) /
        pitch;
    };
    const keys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        target = Math.round(target) + (e.key === 'ArrowRight' ? 1 : -1);
      }
    };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    el.addEventListener('pointerleave', leave);
    el.addEventListener('wheel', wheel, { passive: false });
    el.addEventListener('keydown', keys);
    renderer.setAnimationLoop((now: number) => {
      const dt = last ? Math.min(0.035, (now - last) / 1000) : 1 / 60;
      last = now;
      if (selected !== current.current) {
        selected = current.current;
        if (selected !== undefined) target = selected;
      }
      const delta = (target - position) * (1 - Math.exp(-10 * dt));
      position += delta;
      const center = Math.round(position),
        index = wrap(center, urls.length);
      if (index !== activeId) {
        activeId = index;
        setActive(index);
      }
      quiet = Math.abs(delta) > 0.00002 || touched ? 0 : quiet + dt;
      const hits = touched
        ? (ray.setFromCamera(mouse, camera),
          ray.intersectObjects(
            slots.map((s) => s.mesh),
            false
          ))
        : [];
      for (let i = 0; i < count; i++) {
        const slot = slots[i],
          id = center + wrap(i - center + 4, count) - 4;
        if (slot.index !== id) {
          slot.index = id;
          slot.sim.reset();
          slot.mesh.material.map = photos[wrap(id, urls.length)];
        }
        const offset = (id - position) * pitch;
        slot.mesh.position.set(
          offset * Math.cos(0.5),
          0,
          -offset * Math.sin(0.5)
        );
        slot.mesh.rotation.y = -0.65;
        slot.mesh.visible = slot.mesh.position.z < 0.92;
        if (slot.mesh.visible && quiet < 2) {
          const hit =
            hits[0]?.object === slot.mesh
              ? slot.mesh.worldToLocal(hits[0].point.clone())
              : null;
          // Substeps keep a fast drag from stretching the weave on slow frames.
          for (let k = 0; k < 2; k++)
            slot.sim.step(
              dt / 2,
              THREE.MathUtils.clamp(delta * pitch, -0.08, 0.08),
              hit
            );
        }
      }
      renderer.render(scene, camera);
    });
    return () => {
      renderer.setAnimationLoop(null);
      observer.disconnect();
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerdown', down);
      el.removeEventListener('pointerup', up);
      el.removeEventListener('pointercancel', up);
      el.removeEventListener('pointerleave', leave);
      el.removeEventListener('wheel', wheel);
      el.removeEventListener('keydown', keys);
      slots.forEach((s) => {
        s.sim.geometry.dispose();
        s.mesh.material.dispose();
      });
      photos.forEach((t) => t.dispose());
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
  }, [sources]);
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        aspectRatio: '16/10',
        background: background ?? '#d9d9d9',
        containerType: 'inline-size',
        color: '#161616',
        ...style,
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          alignContent: 'center',
          textAlign: 'center',
          fontSize: '18cqw',
          fontWeight: 650,
          lineHeight: 0.84,
          letterSpacing: '-.09em',
        }}
      >
        {images.length > 0 &&
          [-1, 0, 1].map((offset) => {
            const n = wrap(active + offset, images.length);
            return (
              <span key={offset} style={{ opacity: offset ? 0.1 : 1 }}>
                {labels?.[n] ?? `Sheet ${n + 1}`}
              </span>
            );
          })}
      </div>
      <div
        ref={host}
        role='region'
        tabIndex={0}
        aria-label={label ?? 'Cloth posters. Drag or scroll to browse.'}
        style={{
          position: 'absolute',
          inset: 0,
          touchAction: 'none',
          cursor: 'grab',
        }}
      />
    </div>
  );
}
