'use client';

import type { ComponentType } from 'react';
import { createImageEffect } from './image-effects/create-image-effect.js';
import definition from './image-effects/definitions/liquid-glass-grid.js';
import type { ImageEffectProps } from './image-effects/props';

export const LiquidGlassGrid: ComponentType<ImageEffectProps & { videos?: readonly (string | null)[]; labels?: readonly string[] }> = createImageEffect('LiquidGlassGrid', definition);
