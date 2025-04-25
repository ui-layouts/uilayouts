"use client"

import { useRef } from "react"
import { TimelineContent } from "@/components/ui/framer-timeline"
import type { Variants } from "motion/react"
import { ArrowRight, CheckCircle } from "lucide-react"

const timelineItems = [
  {
    year: "2020",
    title: "Project Inception",
    description: "The beginning of our journey.",
  },
  {
    year: "2021",
    title: "First Milestone",
    description: "Reached our first major goal.",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Extended our reach worldwide.",
  },
  {
    year: "2023",
    title: "Innovation Award",
    description: "Recognized for our contributions.",
  },
]

function MinimalHero() {
  const heroRef = useRef(null)

  // Subtle reveal animation
  const revealVariants: Variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hidden: {
      opacity: 0,
      y: 15,
    },
  }

  return (
    <>
      {/* First section - Hero */}
      <section ref={heroRef} className="h-screen px-4 max-w-5xl mx-auto flex flex-col justify-center items-center text-center">
        <TimelineContent
          as="h1"
          animationNum={0}
          timelineRef={heroRef}
          variants={revealVariants}
          className="text-4xl md:text-4xl font-medium mb-4 max-w-2xl"
        >
          Simple animations for a cleaner user experience
        </TimelineContent>

        <TimelineContent
          as="p"
          animationNum={1}
          timelineRef={heroRef}
          variants={revealVariants}

          className="text-gray-600 mb-8 max-w-xl"
        >
          Enhance your interface with subtle, thoughtful animations that guide your users without overwhelming them.
        </TimelineContent>

        <TimelineContent as="div" animationNum={2} timelineRef={heroRef}
          variants={revealVariants}
        >
          <button className="px-6 py-2 bg-gray-900 text-white rounded-md inline-flex items-center hover:bg-gray-800 transition-colors">
            Get started <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </TimelineContent>
      </section>

    </>
  )
}

export default MinimalHero

