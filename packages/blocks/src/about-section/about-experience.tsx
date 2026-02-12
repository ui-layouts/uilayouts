'use client'
import { Button } from '@repo/shadcn'
import { motion } from 'motion/react'

export const AboutExperience = () => {
  return (
    <section className="relative overflow-hidden bg-white text-black font-dmSans">
      <div className="relative h-72 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1689229799782-b96891a0aa0d?q=80&w=1170&auto=format&fit=crop"
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
            <span className="text-red-500">→</span>
            <span className="text-red-500 font-bold">About</span>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-12 bg-white rounded-t-[3rem] z-20" />
      </div>

      {/* Main Content Section */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image Grid */}
          <div className="flex gap-6 lg:h-110">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 rounded-4xl h-full overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1766925063723-3cceb8415828?q=80&w=735&auto=format&fit=crop"
                alt="Business Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-4xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop"
                  alt="Financial Meeting"
                  className="w-full aspect-square object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-neutral-950 text-white p-8 rounded-4xl text-center shadow-2xl"
              >
                <div className="text-5xl font-semibold mb-1">25+</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Years of Experience
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Text Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-50 p-12 md:p-16 rounded-[2.5rem] space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-red-950">
                About Ritaxes
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                Innovative Strategies for Tax Prosperity
              </h2>
            </div>
            <p className="text-zinc-500 leading-relaxed text-pretty text-sm">
              Duis et dolor vel neque faucibus tincidunt. Nulla semper
              condimentum tellus in ultricies. Nunc tempor ipsum nec fermentum
              consequat. Cras et felis ultricies, molestie dolor sit amet,
              condimentum ante.
            </p>
            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              {[
                'Curabitur gravida sem',
                'Mauris tempor ac erat',
                'Fusce eleifend lectus',
                'Fusce non sodales dui',
                'Class aptent taciti',
                'Nam elementum semper',
              ].map((item, i) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="size-4 rounded-full bg-[#9c2e1f] flex items-center justify-center">
                    <svg
                      className="size-2 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[11px] font-semibold text-zinc-600 tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Button className="bg-red-900 text-white px-8 py-3.5 rounded-full text-xs font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-red-900/20">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
