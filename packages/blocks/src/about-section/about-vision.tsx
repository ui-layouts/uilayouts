'use client'
import { cn } from '@/lib/utils'
import { Button } from '@repo/shadcn'
import { motion } from 'motion/react'

export const AboutVision = () => {
  return (
    <section className="relative overflow-hidden bg-white text-black font-dmSans">
      <div className="relative h-72 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1170&auto=format&fit=crop"
            alt="Consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white tracking-tight"
          >
            About Us
          </motion.h1>
          <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-300">
            <span>Home</span>
            <span className="text-blue-500">→</span>
            <span className="text-blue-500 font-bold">About</span>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-12 bg-white z-20" />
      </div>

      <div className="pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-5 space-y-6 flex flex-col">
            {[
              {
                title: 'Our Vision',
                bg: 'bg-blue-50',
                color: 'text-blue-950',
              },
              {
                title: 'Our Mission',
                bg: 'bg-blue-50',
                color: 'text-blue-950',
              },
              {
                title: 'Our History',
                bg: 'bg-blue-800',
                color: 'text-black',
                textColor: 'text-white/70',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  card.bg,
                  'p-10 rounded-[2.5rem] flex-1 shadow-sm'
                )}
              >
                <div
                  className={cn(
                    'inline-block px-5 py-2 bg-white rounded-xl mb-6 shadow-sm',
                    card.color
                  )}
                >
                  <span className="text-sm font-bold">{card.title}</span>
                </div>
                <p
                  className={cn(
                    card.textColor || 'text-zinc-500',
                    'text-sm leading-relaxed text-pretty'
                  )}
                >
                  Fusce sed pellentesque dui. Nunc lacinia, nibh vitae gravida
                  condimentum, turpis neque commodo mauris, id rutrum lacus nisl
                  a risus.
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Large Dark Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative rounded-[3rem] overflow-hidden p-12 md:p-20 flex flex-col justify-end text-white"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1200"
                alt="Plan"
                className="w-full h-full object-cover grayscale opacity-40"
              />
              <div className="absolute inset-0 bg-blue-950/80" />
            </div>

            <div className="relative z-10 space-y-8 max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Our Plan Makes You Feel More Comfortable in Tax Management
              </h2>
              <p className="text-zinc-400 leading-relaxed text-pretty text-sm">
                Nulla semper condimentum tellus in ultricies. Nunc tempor ipsum
                nec fermentum consequat. Cras et felis ultricies.
              </p>
              <div className="pt-6">
                <Button className="bg-blue-900 text-white px-8 py-3.5 rounded-full text-xs font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20">
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
