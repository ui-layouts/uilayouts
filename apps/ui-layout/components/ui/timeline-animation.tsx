import { type HTMLMotionProps, motion, useInView } from "motion/react"
import type React from "react"
import type { Variants } from "motion/react"

type TimelineContentProps<T extends keyof HTMLElementTagNameMap> = {
  children: React.ReactNode
  animationNum: number
  className?: string
  timelineRef: React.RefObject<HTMLElement | null>
  as?: T
  customVariants?: Variants
  once?: boolean
} & HTMLMotionProps<T>

export const TimelineAnimation = <T extends keyof HTMLElementTagNameMap = "div">({
  children,
  animationNum,
  timelineRef,
  className,
  as,
  customVariants,
  once=false,
  ...props
}: TimelineContentProps<T>) => {
  const defaultSequenceVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.5,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(20px)",
      y: 0,
      opacity: 0,
    },
  }

  const sequenceVariants = customVariants || defaultSequenceVariants

  const isInView = useInView(timelineRef, {
    once
  })

  const MotionComponent = motion[as || "div"] as React.ElementType

  return (
    <MotionComponent
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={sequenceVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
