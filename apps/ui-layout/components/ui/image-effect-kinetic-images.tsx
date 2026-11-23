'use client';

import type { ComponentType } from 'react';
import { createImageEffect } from './image-effects/create-image-effect.js';
import definition from './image-effects/definitions/kinetic-images.js';
import type { ImageEffectProps } from './image-effects/props';

export const KineticImages: ComponentType<ImageEffectProps> = createImageEffect('KineticImages', definition);
