'use client';

import type { ComponentType } from 'react';
import { createImageEffect } from './image-effects/create-image-effect.js';
import definition from './image-effects/definitions/unwoven.js';
import type { ImageEffectProps } from './image-effects/props';

export const Unwoven: ComponentType<ImageEffectProps> = createImageEffect('Unwoven', definition);
