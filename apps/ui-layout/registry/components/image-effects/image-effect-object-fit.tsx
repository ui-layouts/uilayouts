'use client';

import { ObjectFit } from '@/components/ui/image-effect-object-fit';
import { WebsiteDemo } from './website-demo';

export default function Demo() {
  return <WebsiteDemo effect={ObjectFit} kind='crop' label='Object Fit' />;
}
