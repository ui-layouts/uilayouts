import React from 'react'
import { motion } from 'motion/react'

const team = [
  {
    name: 'Darlene Robertson',
    role: 'Founder & CEO',
    image: 'https://i.pravatar.cc/600?u=darlene',
  },
  {
    name: 'Albert Flores',
    role: 'Design Lead',
    image: 'https://i.pravatar.cc/600?u=albert',
  },
  {
    name: 'Ronald Richards',
    role: 'Creative Strategy',
    image: 'https://i.pravatar.cc/600?u=ronald',
  },
  {
    name: 'Dianne Russell',
    role: 'Senior Designer',
    image: 'https://i.pravatar.cc/600?u=dianne',
  },
  {
    name: 'Courtney Henry',
    role: 'Product Manager',
    image: 'https://i.pravatar.cc/600?u=courtney',
  },
  {
    name: 'Kristin Watson',
    role: 'UX Engineer',
    image: 'https://i.pravatar.cc/600?u=kristin',
  },
]

export const TeamTalent = () => {
  return (
    <section id="team" className="py-32 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
              Our Talent
            </span>
            <h2 className="text-6xl font-bold tracking-tighter text-balance">
              The visionaries behind Kreativy.
            </h2>
          </div>
          <p className="text-zinc-500 text-lg max-w-sm text-pretty leading-relaxed">
            Our team is a tight-knit family of designers, artists, and
            visionaries, all bound by the same creative enthusiasm.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.3,
                delay: (i % 3) * 0.05,
                ease: 'easeOut',
              }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-white rounded-[2rem] overflow-hidden mb-6 p-2 border border-zinc-200/50 shadow-sm transition-shadow duration-300 group-hover:shadow-xl">
                <div className="size-full rounded-[1.6rem] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    src={member.image}
                    alt={member.name}
                    className="object-cover size-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                  />
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold mb-1 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
