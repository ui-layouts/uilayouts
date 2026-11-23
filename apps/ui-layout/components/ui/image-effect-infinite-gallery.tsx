'use client';

import type { ComponentType } from 'react';
import { createImageEffect } from './image-effects/create-image-effect.js';
import definition from './image-effects/definitions/infinite-gallery.js';
import type { ImageEffectProps } from './image-effects/props';

export const InfiniteGallery: ComponentType<ImageEffectProps> = createImageEffect('InfiniteGallery', definition);
