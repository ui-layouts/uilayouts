'use client';

import type { ComponentType } from 'react';
import { createImageEffect } from './image-effects/create-image-effect.js';
import definition from './image-effects/definitions/image-tube.js';
import type { ImageEffectProps } from './image-effects/props';

export const ImageTube: ComponentType<ImageEffectProps> = createImageEffect('ImageTube', definition);
