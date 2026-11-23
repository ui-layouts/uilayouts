'use client';

import type { ComponentType } from 'react';
import { createImageEffect } from './image-effects/create-image-effect.js';
import definition from './image-effects/definitions/object-fit.js';
import type { ImageEffectProps } from './image-effects/props';

export const ObjectFit: ComponentType<ImageEffectProps> = createImageEffect('ObjectFit', definition);
