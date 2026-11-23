'use client';

import { PhantomGrid } from '@/components/ui/image-effect-phantom-grid';
import { WebsiteDemo } from './website-demo';

export default function Demo() {
  return <WebsiteDemo effect={PhantomGrid} kind='portrait' label='Phantom Grid' />;
}
