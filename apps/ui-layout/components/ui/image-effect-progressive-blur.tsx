'use client';

import type { ComponentType } from 'react';
import { createImageEffect } from './image-effects/create-image-effect.js';
import definition from './image-effects/definitions/progressive-blur.js';
import type { ImageEffectProps } from './image-effects/props';

export const ProgressiveBlur: ComponentType<ImageEffectProps> = createImageEffect('ProgressiveBlur', definition);
