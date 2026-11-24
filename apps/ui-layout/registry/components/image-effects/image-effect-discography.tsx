'use client';
import {Discography} from '@/components/ui/image-effect-discography';
const images=['ridge','forest','coast','dunes','lake','valley'].map(n=>'/image-effects/'+n+'.webp');
export default function Demo() {
  return <Discography images={images} labels={['North Ridge','Forest Floor','Pacific Coast','Dunes','Still Water','Valley']}/>;
}
