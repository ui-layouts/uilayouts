import React from 'react'
import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Beverley',
    role: 'Co-Founder NYZ',
    image: 'https://picsum.photos/seed/beverley/100/100',
    quote:
      "Joining the program dramatically improved my writing skills and thought leadership, resulting in a notable increase in inbound leads. It's a life-changing experience.",
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

export const TestimonialBasic = () => {
  return (
    <section className="bg-white text-black font-dmSans py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto border-x border-neutral-200">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 text-sm text-nuetral-400 font-semibold uppercase tracking-widest">
            « Testimonials »
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-nuetral-900 tracking-tighter uppercase">
            Social Proof.
          </h2>
        </div>
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className={cn(
              'grid grid-cols-1 lg:grid-cols-12  border-y border-neutral-200',
              i % 2 === 1 && 'lg:direction-rtl'
            )}
          >
            <div className="lg:col-span-7 p-6 bg-neutral-100 overflow-hidden aspect-video relative group cursor-pointer">
              <div className="absolute pointer-events-none bottom-0 left-0 right-0 top-0 bg-[repeating-linear-gradient(45deg,#eeeeee_0px_1px,transparent_1px_8px)] "></div>

              <img
                src={t.videoThumbnail}
                className="w-full h-full relative z-10 object-cover transition-transform duration-300 rounded-2xl"
                alt={`Testimonial Video ${i}`}
              />
              <div className="absolute bottom-8 left-8 z-10 bg-black/50 backdrop-blur px-6 py-3 rounded-2xl border border-white/20">
                <span className="text-white font-mono text-sm tracking-tighter">
                  04:32 // HD_PLAYBACK
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 border-l border-neutral-200">
              <div className="flex gap-2 items-center border-b p-2 bg-neutral-50 border-neutral-200 relative">
                <div className="absolute pointer-events-none  bottom-0 left-0 right-0 top-0 bg-[repeating-linear-gradient(45deg,#eeeeee_0px_1px,transparent_1px_8px)] "></div>
                <div className="relative z-10 size-16 rounded-3xl overflow-hidden bg-neutral-200 border-4 border-violet-50">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black uppercase tracking-tight text-nuetral-900">
                    {t.name}
                  </h4>
                  <p className="text-sm font-mono text-nuetral-500 uppercase tracking-widest">
                    {t.role}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-3xl font-medium text-nuetral-800 font-manrope">
                  "{t.quote}"
                </p>

                <div className="flex gap-2 mt-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-lg">
                      <Star className="fill-yellow-400 stroke-yellow-400 size-6" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
