'use client';

import { MotionHover } from '@/components/ui/image-effect-motion-hover';

const base='https://raw.githubusercontent.com/clementroche/motion-hover-effects/b9aaa953b3dd7a64186240f06e41a155d8bb419e';
const images=[1,2,3].map(id=>base+'/img/demo1/img'+id+'.jpg');

export default function Demo(){
  return <figure className="m-0 w-full">
    <style>{`@font-face{font-family:MotionLeMurmure;src:url('${base}/fonts/Le-Murmure.otf') format('opentype');font-display:swap}.motion-paris{--motion-hover-font:MotionLeMurmure,Impact,sans-serif}`}</style>
    <MotionHover className="motion-paris" images={images} labels={['Montmartre','Bir-Hakem','République']}
      captions={['Cemetery, Paris','Bridge, Paris','People, Paris']} />
    <figcaption className="px-3 py-2 text-xs"><a className="underline" href="https://github.com/clementroche/motion-hover-effects">Motion Hover Effects · Niccolò Miranda &amp; Clément Roche</a></figcaption>
  </figure>;
}
