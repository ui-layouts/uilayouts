'use client'
import { Button } from '@repo/shadcn'
import { motion } from 'motion/react'

export const AboutAgency = () => {
  return (
    <section className="relative pt-24 pb-32 px-6 overflow-hidden bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <h1 className="text-7xl md:text-8xl font-bold font-spaceGrotesk tracking-tighter ">
                About our <br /> agency.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-zinc-600 max-w-xl text-pretty leading-relaxed">
                Based in the vibrant heart of Sydney, Australia, KreativyLab is
                not just a digital agency; we're your partners in creativity.
              </p>
              <p className="text-lg text-zinc-400 max-w-lg text-pretty">
                Our mission is to turn your dreams into reality, one pixel at a
                time. With a diverse team of designers, developers, and
                innovators.
              </p>

              <div className="pt-4">
                <Button className="h-12 px-8 bg-black dark:hover:bg-black/90 hover:bg-black/90 text-white rounded-full font-bold text-sm transition-transform active:scale-95 duration-200">
                  Our Portfolio
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            className="relative aspect-4/5 lg:aspect-square overflow-hidden rounded-3xl bg-zinc-100 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
              alt="Our creative team in action"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
            <div className="absolute top-8 right-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="size-28 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center p-4 text-center"
              >
                <span className="text-xs font-black uppercase text-white tracking-[0.2em] leading-tight">
                  Design • Strategy • Future
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 pt-16 border-t border-zinc-100 flex flex-col md:flex-row justify-between gap-12"
        >
          <p className="text-3xl md:text-4xl font-medium text-zinc-900 leading-[1.15] text-pretty max-w-3xl">
            Founded with a vision to redefine design through a modern and
            friendly lens, we've become more than just a design agency; we're a
            community of kindred spirits who share a passion for artistry and
            innovation.
          </p>
          <div className="text-sm font-bold font-spaceGrotesk text-zinc-400 uppercase tracking-widest pt-2">
            Since 2023
          </div>
        </motion.div>
      </div>
    </section>
  )
}
