'use client';

import { MotionHover } from '@/components/ui/image-effect-motion-hover';

const images = ['montmartre', 'bir-hakeim', 'republique'].map(
  (name) => `/image-effects/motion-hover/${name}.jpg`
);

export default function Demo(){
  return <figure className="m-0 w-full text-neutral-950">
    <style>{`@font-face{font-family:MotionLeMurmure;src:url('/image-effects/motion-hover/le-murmure.otf') format('opentype');font-display:swap}.motion-paris{--motion-hover-font:MotionLeMurmure,Impact,sans-serif}`}</style>
    <MotionHover className="motion-paris" background="transparent" images={images} labels={['Montmartre','Bir-Hakem','République']}
      captions={['Cemetery, Paris','Bridge, Paris','People, Paris']} />
  </figure>;
}
