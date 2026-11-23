'use client';

import type { ComponentType } from 'react';
import { createImageEffect } from './image-effects/create-image-effect.js';
import definition from './image-effects/definitions/infinite-canvas.js';
import type { ImageEffectProps } from './image-effects/props';

export const InfiniteCanvas: ComponentType<ImageEffectProps> = createImageEffect('InfiniteCanvas', definition);
