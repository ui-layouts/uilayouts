'use client';

import {DomCloth} from '@/components/ui/image-effect-dom-cloth';
const names=['Sun','Fold','Grid','Arc','Rings','Stripe','Moon','Plus','Check','Wave'];
const photos=names.map((_,i)=>'https://raw.githubusercontent.com/twotwentytwo-studio/domgl-cloth/bd8ea5f7e0d66d96ef48e6687fed223e0846eba7/public/img/'+String(i+1).padStart(2,'0')+'-1200.webp');
export default function Demo(){
  return <figure className="m-0 w-full"><DomCloth background='transparent' images={photos} labels={names}/>
    <figcaption className="px-3 py-2 text-xs">Drag across a sheet or scroll to move the strip. <a href="https://github.com/twotwentytwo-studio/domgl-cloth" className="underline">Original cloth study</a></figcaption></figure>;
}
