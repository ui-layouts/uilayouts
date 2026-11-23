'use client';

import type { ComponentType } from 'react';
import { createImageEffect } from './image-effects/create-image-effect.js';
import definition from './image-effects/definitions/scroll-grain.js';
import type { ImageEffectProps } from './image-effects/props';

export const ScrollGrain: ComponentType<ImageEffectProps> = createImageEffect('ScrollGrain', definition);
