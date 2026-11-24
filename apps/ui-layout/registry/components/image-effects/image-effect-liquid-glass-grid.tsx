'use client';

import { LiquidGlassGrid } from '@/components/ui/image-effect-liquid-glass-grid';
import { WebsiteDemo } from './website-demo';

export default function Demo() {
  return <WebsiteDemo effect={LiquidGlassGrid} kind='glass' label='Liquid Glass Grid' />;
}
