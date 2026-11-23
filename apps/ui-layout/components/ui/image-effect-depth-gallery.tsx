'use client';

import type { ComponentType } from 'react';
import { createImageEffect } from './image-effects/create-image-effect.js';
import definition from './image-effects/definitions/depth-gallery.js';
import type { ImageEffectProps } from './image-effects/props';

export const DepthGallery: ComponentType<ImageEffectProps> = createImageEffect('DepthGallery', definition);
