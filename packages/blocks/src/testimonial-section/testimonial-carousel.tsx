'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import {
  Carousel,
  SliderContainer,
  Slider,
  SliderPrevButton,
  SliderNextButton,
} from '@/components/ui/carousel'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Beverley',
    role: 'Co-Founder NYZ',
    image: 'https://picsum.photos/seed/beverley/100/100',
    quote:
      "Joining the program dramatically improved my writing skills and thought leadership, resulting in a notable increase in inbound leads. It's a life-changing experience with promising future prospects.",
    rating: 5,
    videoThumbnail: 'https://picsum.photos/seed/testimonial-video/1200/675',
  },
  {
    name: 'Marcus Aurelius',
    role: 'Founder Stoic Mind',
    image: 'https://picsum.photos/seed/marcus/100/100',
    quote:
      "Lara's frameworks for personal branding are unparalleled. In six months, we've seen engagement rates triple across our primary social channels.",
    rating: 5,
    videoThumbnail: 'https://picsum.photos/seed/testimonial2/1200/675',
  },
  {
    name: 'Sarah Jenkins',
    role: 'CEO GrowthLab',
    image: 'https://picsum.photos/seed/sarah/100/100',
    quote:
      "The clarity and depth of the mentorship provided exceeded all expectations. It's not just about numbers; it's about building a sustainable legacy.",
    rating: 5,
    videoThumbnail: 'https://picsum.photos/seed/testimonial3/1200/675',
  },
]

export const TestimonialCarousel = () => {
  return (
    <section className="bg-white py-24 px-6 font-dmSans text-black min-h-screen">
      <div className="max-w-6xl mx-auto border-x border-neutral-200">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-sm text-nuetral-500 font-medium uppercase tracking-wider">
            « Testimonials »
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold text-nuetral-900 text-balance">
            Testimonials & Social Proof
          </h2>
        </div>

        <Carousel options={{ loop: true }}>
          <SliderContainer>
            {TESTIMONIALS.map((t, i) => (
              <Slider key={i} className="w-full p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full border-y border-neutral-200">
                  <div className="rounded-2xl h-full w-full p-4 overflow-hidden aspect-video bg-nuetral-100 relative group cursor-pointer">
                    <img
                      src={t.videoThumbnail}
                      className="w-full h-full object-cover transition-transform duration-700"
                      alt={`Testimonial Video ${i}`}
                    />
                  </div>
                  <div className="border-l border-neutral-200">
                    <div className="flex items-center gap-4 p-4 bg-neutral-100 relative">
                      <div className="absolute pointer-events-none bottom-0 left-0 z-10 right-0 top-0 bg-[repeating-linear-gradient(45deg,#eeeeee_0px_1px,transparent_1px_8px)] "></div>

                      <div className="size-16 relative z-10 rounded-2xl overflow-hidden bg-nuetral-200">
                        <img src={t.image} alt={t.name} />
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-xl font-bold">{t.name}</h4>
                        <p className="text-sm text-nuetral-500">{t.role}</p>
                      </div>
                      <div className="ml-auto flex gap-1 ">
                        {[...Array(t.rating)].map((_, i) => (
                          <span key={i} className="text-lg">
                            <Star className="fill-yellow-400 stroke-yellow-400 size-4" />
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-2xl p-4 text-nuetral-800 leading-relaxed font-medium text-pretty border-t border-neutral-200 pt-4">
                      "{t.quote}"
                    </p>
                    <div className="flex gap-4 p-4">
                      <SliderPrevButton
                        className="size-12 rounded-full cursor-pointer bg-neutral-200 border hover:text-white border-neutral-300 flex items-center justify-center hover:bg-yellow-500 transition-colors"
                        aria-label="Previous testimonial"
                      >
                        <span className="text-xl">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                          >
                            <path d="M5.5 12.002H19" />
                            <path d="M10.9999 18.002C10.9999 18.002 4.99998 13.583 4.99997 12.0019C4.99996 10.4208 11 6.00195 11 6.00195" />
                          </svg>
                        </span>
                      </SliderPrevButton>
                      <SliderNextButton
                        className="size-12 rounded-full cursor-pointer hover:bg-yellow-500 hover:text-white bg-neutral-200 border border-neutral-300 text-black flex items-center justify-center transition-colors"
                        aria-label="Next testimonial"
                      >
                        <span className="text-xl">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                          >
                            <path d="M18.5 12L4.99997 12" />
                            <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6" />
                          </svg>
                        </span>
                      </SliderNextButton>
                    </div>
                  </div>
                </div>
              </Slider>
            ))}
          </SliderContainer>
        </Carousel>
      </div>
    </section>
  )
}
