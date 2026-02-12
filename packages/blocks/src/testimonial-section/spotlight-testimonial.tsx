'use client'
import { cn } from '@/lib/utils'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    quote: 'The level of craftsmanship is simply unparalleled. We saw a',
    highlight: '40% increase',
    quoteEnd: 'in developer productivity after integrating their UI kit.',
    name: 'James Clear',
    role: 'Head of Design at Atomic Systems',
    url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop',
  },
  {
    id: 2,
    quote:
      'Working with this system has been transformative. Our team shipped features',
    highlight: '3x faster',
    quoteEnd: 'while maintaining exceptional quality standards.',
    name: 'Sarah Chen',
    role: 'Engineering Lead at Vercel',
    url: 'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1025&auto=format&fit=crop',
  },
  {
    id: 3,
    quote:
      "I've never experienced such a seamless developer experience. We reduced our build time by",
    highlight: '60%',
    quoteEnd: 'and our users immediately noticed the difference.',
    name: 'Marcus Williams',
    role: 'CTO at Linear',
    url: 'https://images.unsplash.com/photo-1765438869321-d60141efd813?q=80&w=687&auto=format&fit=crop',
  },
]

export const SpotlightTestimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
  }

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="bg-zinc-100 min-h-screen flex flex-col justify-center font-manrope">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-5xl font-bold tracking-tight text-zinc-900 mb-4">
          Success Stories
        </h2>
        <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
          Real results from real teams. Discover how industry leaders are
          achieving remarkable outcomes with our design system.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="size-16 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200">
          <svg
            className="size-8 text-zinc-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C14.8079 14 13.017 12.2091 13.017 10V5H21.017V16L19.017 21H14.017ZM3.01709 21L3.01709 18C3.01709 16.8954 3.91252 16 5.01709 16H8.01709V14H6.01709C3.80795 14 2.01709 12.2091 2.01709 10V5H10.0171V16L8.01709 21H3.01709Z" />
          </svg>
        </div>

        <div className="relative min-h-[200px] flex items-center justify-center mb-5">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={activeTestimonial?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-900 text-balance leading-tight"
            >
              "{activeTestimonial?.quote}{' '}
              <span className="text-zinc-400 italic">
                {activeTestimonial?.highlight}
              </span>{' '}
              {activeTestimonial?.quoteEnd}"
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="relative min-h-24 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial?.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="flex flex-col items-center gap-2"
            >
              <img
                src={activeTestimonial?.url}
                alt={activeTestimonial?.name}
                className="size-12 rounded-full bg-zinc-900 shadow-lg mb-2 object-cover"
              />

              <p className="text-sm font-bold text-zinc-900 uppercase tracking-widest">
                {activeTestimonial?.name}
              </p>
              <p className="text-xs text-zinc-500 font-medium">
                {activeTestimonial?.role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex gap-1.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:bg-zinc-400',
                index === activeIndex ? 'bg-zinc-900 w-8' : 'bg-zinc-300 w-1.5'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
