'use client';

import type { ComponentType } from 'react';
import { createImageEffect } from './image-effects/create-image-effect.js';
import definition from './image-effects/definitions/emerging-images.js';
import type { ImageEffectProps } from './image-effects/props';

export const EmergingImages: ComponentType<ImageEffectProps> = createImageEffect('EmergingImages', definition);
