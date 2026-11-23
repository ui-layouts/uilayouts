'use client';

import type { ComponentType } from 'react';
import { createImageEffect } from './image-effects/create-image-effect.js';
import definition from './image-effects/definitions/curve-gallery.js';
import type { ImageEffectProps } from './image-effects/props';

export const CurveGallery: ComponentType<ImageEffectProps & {path?:1|2|3|4|5}> = createImageEffect('CurveGallery', definition);
