'use client';

import { useState } from 'react';
import { SpriteMorph } from '@/components/ui/image-effect-sprite-morph';

const stages = ['Baby', 'Teen', 'Adult', 'Old', 'Elder'];
const files = ['baby', 'teen', 'adult', 'old', 'elder'];
const asset = (name: string) => '/image-effects/ages/' + name + '.webp';
const framesPerTransition = 23;
const lastFrame = (stages.length - 1) * framesPerTransition;
const images = files.map(asset);
const atlases = files.slice(0, -1).map((name, i) => asset(name + '-' + files[i + 1]));

export default function PortraitStudy() {
  const [frame, setFrame] = useState(0);
  const position = frame / framesPerTransition;
  const stage = stages[Math.round(position)];

  return (
    <section aria-label="Portrait age study" style={{ width: 'min(100% - 32px, 900px)', marginInline: 'auto' }}>
      <header style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '4px 20px' }}>
        <h2 style={{ margin: 0, font: 'normal clamp(26px, 4vw, 54px)/1.1 Georgia, serif', letterSpacing: '-.045em' }}>Five ages</h2>
      </header>
      <SpriteMorph images={images} atlases={atlases} labels={stages} time={position}
        secondsPerImage={1} showCaption={false} label="Five ages of one face"
        style={{ aspectRatio: 'auto', height: 'clamp(110px, 60svh, 430px)' }} />
      <label style={{ display: 'grid', gap: 5, borderTop: '1px solid #9998', paddingTop: 10 }}>
        <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={{ font: 'italic 19px Georgia, serif' }}>{stage}</span>
          <span style={{ fontSize: 12 }}>Slide to explore</span>
        </span>
        <input type="range" aria-label="Portrait age timeline" aria-valuetext={stage + ', frame ' + (frame + 1) + ' of ' + (lastFrame + 1)}
          min={0} max={lastFrame} step={1} value={frame} onChange={(event) => setFrame(event.currentTarget.valueAsNumber)}
          style={{ width: '100%', height: 30, margin: 0, accentColor: '#9b4a1b', cursor: 'ew-resize' }} />
      </label>
      <div aria-hidden="true" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}>
        <span>Baby</span><span>Elder</span>
      </div>
    </section>
  );
}
