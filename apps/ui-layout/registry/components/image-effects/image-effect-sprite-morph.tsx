'use client';

import { useState } from 'react';
import { SpriteMorph } from '@/components/ui/image-effect-sprite-morph';

const stages = ['Egg', 'Caterpillar', 'Chrysalis', 'Emergence', 'Adult'];
const files = ['egg', 'larva', 'chrysalis', 'emergence', 'adult'];
const asset = (name: string) => '/image-effects/monarch/' + name + '.webp';
const images = files.map(asset);
const atlases = files.slice(0, -1).map((name, i) => asset(name + '-' + files[i + 1]));

export default function MonarchStudy() {
  const [frame, setFrame] = useState(0);
  const position = frame / 23;
  const stage = stages[Math.round(position)];

  return (
    <section aria-label="Monarch butterfly lifecycle" style={{ width: 'min(100% - 32px, 900px)', marginInline: 'auto' }}>
      <header style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '4px 20px' }}>
        <h2 style={{ margin: 0, font: 'normal clamp(26px, 4vw, 54px)/1.1 Georgia, serif', letterSpacing: '-.045em' }}>The monarch</h2>
        <i lang="la" style={{ font: 'italic 16px Georgia, serif' }}>Danaus plexippus</i>
      </header>
      <SpriteMorph images={images} atlases={atlases} labels={stages} time={position}
        secondsPerImage={1} showCaption={false} label="Monarch metamorphosis"
        style={{ aspectRatio: 'auto', height: 'clamp(110px, 60svh, 430px)' }} />
      <label style={{ display: 'grid', gap: 5, borderTop: '1px solid #9998', paddingTop: 10 }}>
        <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={{ font: 'italic 19px Georgia, serif' }}>{stage}</span>
          <span style={{ fontSize: 12 }}>Slide to explore</span>
        </span>
        <input type="range" aria-label="Butterfly lifecycle" aria-valuetext={stage + ', frame ' + (frame + 1) + ' of 93'}
          min={0} max={92} step={1} value={frame} onChange={(event) => setFrame(event.currentTarget.valueAsNumber)}
          style={{ width: '100%', height: 30, margin: 0, accentColor: '#b34e20', cursor: 'ew-resize' }} />
      </label>
      <div aria-hidden="true" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}>
        <span>Egg</span><span>Adult butterfly</span>
      </div>
    </section>
  );
}
