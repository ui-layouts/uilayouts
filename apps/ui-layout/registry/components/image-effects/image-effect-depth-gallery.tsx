'use client';
import {DepthGallery} from '@/components/ui/image-effect-depth-gallery';
const base='https://raw.githubusercontent.com/houmahani/codrops-depth-gallery/28190e0920df887f069524c3863db397af34c1c8/src/assets/flower-';
const images=Array.from({length:5},(_,i)=>base+'0'+(i+1)+'.webp');
const labels=['golden','violet','afterglow','cobalt','meadow'];
const swatches=['PMS 135 C','PMS 4985 C','PMS 170 C','PMS 660 C','PMS 7507 C'];
export default function Demo(){return <DepthGallery images={images} labels={labels} swatches={swatches}/>;}
