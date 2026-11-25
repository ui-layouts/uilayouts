'use client';

import { CinematicScroll } from '@/components/ui/image-effect-cinematic-scroll';

export default function Demo() {
  return <figure className='m-0 w-full'>
    <CinematicScroll />
    <figcaption className='p-3 text-xs text-muted-foreground'>
      <span className="sr-only">Scroll inside the scene to explore the tower.</span>
      {' '}<a data-original-credit className='underline' href='https://github.com/JosephASG/codrops-cinematic-scroll-animations'>Original study by JosephASG</a>.
      {' '}<a className='underline' href='https://sketchfab.com/3d-models/cyberpunk-skyscraper-e7c9ef989822425e9a0e09c37b79170f'>Cyberpunk Skyscraper by Artemis</a>
      {' '}(<a className='underline' href='https://creativecommons.org/licenses/by/4.0/'>CC BY 4.0</a>).
    </figcaption>
  </figure>;
}
