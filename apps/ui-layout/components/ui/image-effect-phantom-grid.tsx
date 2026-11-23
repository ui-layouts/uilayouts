'use client';

import type { ComponentType } from 'react';
import { createImageEffect } from './image-effects/create-image-effect.js';
import definition from './image-effects/definitions/phantom-grid.js';
import type { ImageEffectProps } from './image-effects/props';

export const PhantomGrid: ComponentType<ImageEffectProps & { variant?: 'grid' | 'portrait'; depthMaps?: readonly (string | null)[] }> = createImageEffect('PhantomGrid', definition);
