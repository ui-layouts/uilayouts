'use client';

import type { ComponentType } from 'react';
import { createImageEffect } from './image-effects/create-image-effect.js';
import definition from './image-effects/definitions/interactive-grid.js';
import type { ImageEffectProps } from './image-effects/props';

export const InteractiveGrid: ComponentType<ImageEffectProps> = createImageEffect('InteractiveGrid', definition);
