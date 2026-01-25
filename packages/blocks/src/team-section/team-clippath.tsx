'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TimelineAnimation } from '@/components/ui/timeline-animation'

const items = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop',

    title: 'Adrian Paul',
    description: 'COO & Co-Founder',
    tags: ['Floral', 'Highlands', 'Wildflowers', 'Colorful', 'Resilience'],
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1025&auto=format&fit=crop',

    title: 'Flualy Cual',
    description: 'Founder & CEO',
    tags: ['Twilight', 'Peaks', 'Silhouette', 'Evening Sky', 'Peaceful'],
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1569292316763-0b667e9e960c?q=80&w=687&auto=format&fit=crop',

    title: 'Naymur Rahman',
    description: 'CTO & Co-Founder',
    tags: ['Rocky', 'Ridges', 'Contrast', 'Adventure', 'Clouds'],
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?q=80&w=746&auto=format&fit=crop',

    title: 'John Doe',
    description: 'Lead Designer',
    tags: ['Creative', 'Vision', 'Design', 'Innovation', 'Artistic'],
  },
]

export function TeamClipPath() {
  const timelineRef = React.useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section
      className="py-20 bg-neutral-100 min-h-screen relative"
      ref={timelineRef}
    >
      <div className="max-w-7xl mx-auto px-4">
        <TimelineAnimation
          as="h1"
          animationNum={0}
          timelineRef={timelineRef}
          className="text-5xl font-semibold text-gray-900 mb-4 text-center"
        >
          Meet Our Team
        </TimelineAnimation>
        <TimelineAnimation
          as="p"
          animationNum={1}
          timelineRef={timelineRef}
          className="text-gray-600 mb-2 text-center"
        >
          We lead with care — our core value — and a shared passion for
          connecting the world.
        </TimelineAnimation>
        <div className="flex gap-6 justify-center items-center h-[420px]">
          {items.map((item) => {
            const isHovered = hoveredId === item.id
            const isOtherHovered = hoveredId !== null && hoveredId !== item.id

            return (
              <motion.div
                key={item.id}
                className="relative cursor-pointer h-full"
                style={{ overflow: 'hidden' }}
                // @ts-ignore
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{
                  width: '300px',
                  clipPath: 'circle(72.3% at 50% 50%)',
                }}
                animate={{
                  width: isHovered
                    ? '600px'
                    : isOtherHovered
                      ? '150px'
                      : '200px',
                  clipPath: isHovered
                    ? 'circle(72.3% at 50% 50%)'
                    : 'circle(50% at 50% 50%)',
                  filter: isOtherHovered ? 'blur(4px)' : 'blur(0px)',
                  opacity: isOtherHovered ? 0.6 : 1,
                }}
                transition={{
                  width: {
                    duration: 0.5,
                    ease: [0.5, 0.85, 0.25, 1.15],
                  },
                  filter: {
                    duration: 0.4,
                    ease: 'easeInOut',
                  },
                  opacity: {
                    duration: 0.4,
                    ease: 'easeInOut',
                  },
                }}
              >
                {/* Image Background */}
                <div className="absolute inset-0">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                  <motion.h2
                    className="text-2xl font-semibold mb-2 whitespace-nowrap overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : 20,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: isHovered ? 0.2 : 0,
                      ease: [0.5, 0.85, 0.25, 1.8],
                    }}
                  >
                    {item.title}
                  </motion.h2>

                  <motion.p
                    className="text-lg opacity-90 mb-4 whitespace-nowrap overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : 20,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: isHovered ? 0.3 : 0,
                      ease: [0.5, 0.85, 0.25, 1.8],
                    }}
                  >
                    {item.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : 20,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: isHovered ? 0.4 : 0,
                      ease: [0.5, 0.85, 0.25, 1.8],
                    }}
                  >
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
