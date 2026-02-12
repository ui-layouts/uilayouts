'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Drasner',
    role: 'Staff Engineer',
    company: 'Microsoft',
    text: 'This changed the way our team builds components. The quality and attention to detail is exceptional.',
    avatar: 'SD',
    rating: 5,
  },
  {
    name: 'Lee Robinson',
    role: 'VP of Developer Experience',
    company: 'Vercel',
    text: 'The attention to detail in these designs is world-class. Every component feels polished and production-ready.',
    avatar: 'LR',
    rating: 5,
  },
  {
    name: 'Guillermo Rauch',
    role: 'CEO',
    company: 'Vercel',
    text: 'Stunning aesthetics combined with high performance. Exactly what modern web development needs.',
    avatar: 'GR',
    rating: 5,
  },
  {
    name: 'Addy Osmani',
    role: 'Engineering Manager',
    company: 'Google',
    text: 'Beautiful, accessible, and ready to go. The perfect foundation for any modern web application.',
    avatar: 'AO',
    rating: 5,
  },
  {
    name: 'Cassidy Williams',
    role: 'CTO',
    company: 'Contenda',
    text: "I am using this in all my future side projects. It's become my go-to component library.",
    avatar: 'CW',
    rating: 5,
  },
]

export const MarqueeTestimonials = () => {
  return (
    <section className="relative font-manrope w-full overflow-hidden bg-linear-to-br from-zinc-50 to-white py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-5xl font-bold tracking-tight text-zinc-900 mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
          See what top engineers and designers from leading companies are saying
          about our work
        </p>
      </div>

      {/* Gradient fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-zinc-50 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-zinc-50 to-transparent z-10" />

      <motion.div
        className="flex gap-6 px-6 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, i) => (
          <div
            key={i}
            className="w-96 shrink-0 p-8 rounded-3xl bg-white border border-zinc-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col gap-6 relative overflow-hidden group"
          >
            {/* Quote icon */}
            <div className="absolute top-4 right-4">
              <Quote className="w-12 h-12 fill-zinc-200 stroke-zinc-200" />
            </div>

            {/* Rating */}
            <div className="flex ">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-zinc-700 leading-relaxed text-pretty font-medium">
              {testimonial.text}
            </p>

            {/* Author info */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="size-12 rounded-full bg-linear-to-br from-zinc-900 to-zinc-700 flex items-center justify-center text-white font-bold text-sm shadow-md">
                {testimonial.avatar}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-zinc-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-zinc-600">{testimonial.role}</p>
                <p className="text-xs text-zinc-500">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Second row with opposite direction */}
      <motion.div
        className="flex gap-6 px-6 w-max mt-6"
        animate={{ x: ['-50%', '0%'] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, i) => (
          <div
            key={`second-${i}`}
            className="w-96 shrink-0 p-8 rounded-3xl bg-white border border-zinc-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col gap-6 relative overflow-hidden group"
          >
            {/* Quote icon */}
            <div className="absolute top-4 left-4 rotate-180">
              <Quote className="w-12 h-12 fill-zinc-200 stroke-zinc-200" />
            </div>

            {/* Rating */}
            <div className="flex justify-end">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-zinc-700 leading-relaxed text-pretty font-medium">
              {testimonial.text}
            </p>

            {/* Author info */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="size-12 rounded-full bg-linear-to-br from-zinc-900 to-zinc-700 flex items-center justify-center text-white font-bold text-sm shadow-md">
                {testimonial.avatar}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-zinc-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-zinc-600">{testimonial.role}</p>
                <p className="text-xs text-zinc-500">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
