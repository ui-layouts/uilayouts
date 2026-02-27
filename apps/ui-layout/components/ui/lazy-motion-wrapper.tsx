import React from 'react';
import { LazyMotion, domAnimation, MotionProps } from 'motion/react';
import * as m from 'motion/react-m';

interface LazyMotionWrapperProps extends MotionProps {
  children: React.ReactNode;
  features?: any; // Allow custom features
}

/**
 * LazyMotionWrapper - Optimizes bundle size by loading Framer Motion features lazily
 *
 * CORRECT USAGE:
 * ```tsx
 * import { LazyMotion, domAnimation } from 'motion/react'
import * as m from 'motion/react-m';
 * import * as m from 'motion/react-m';
 *
 * export const MyComponent = ({ isVisible }) => (
 *   <LazyMotion features={domAnimation}>
 *     <m.div animate={{ opacity: 1 }} />
 *   </LazyMotion>
 * )
 * ```
 */
export function LazyMotionWrapper({
  children,
  features = domAnimation,
  ...motionProps
}: LazyMotionWrapperProps) {
  return <LazyMotion features={features}>{children}</LazyMotion>;
}

/**
 * Higher-order component to wrap existing components with LazyMotion
 */
export function withLazyMotion<P extends object>(
  Component: React.ComponentType<P>
) {
  return function LazyMotionComponent(props: P) {
    return (
      <LazyMotion features={domAnimation}>
        <Component {...props} />
      </LazyMotion>
    );
  };
}

/**
 * Template for updating components to use correct syntax
 */
export const MOTION_IMPORT_TEMPLATE = `
// BEFORE (incorrect):
import { LazyMotion, domAnimation } from 'motion/react'
import * as m from 'motion/react-m';

// AFTER (correct):
import { LazyMotion, domAnimation } from 'motion/react'
import * as m from 'motion/react-m';
import * as m from 'motion/react-m';

export const MyComponent = ({ isVisible }) => (
  <LazyMotion features={domAnimation}>
    <m.div animate={{ opacity: 1 }} />
  </LazyMotion>
)
`;

/**
 * For dynamic component access (when needed)
 */
export function getMotionComponent(componentName: string) {
  return (m as any)[componentName];
}

/**
 * Predefined feature sets for different animation needs
 */
export const motionFeatures = {
  // Basic DOM animations (most common)
  dom: domAnimation,

  // For scroll-based animations
  scroll: domAnimation,

  // For layout animations
  layout: domAnimation,

  // For complex animations (if needed)
  // Note: Using this will increase bundle size
  max: undefined, // Use all features (not recommended for optimization)
};

export default LazyMotionWrapper;
