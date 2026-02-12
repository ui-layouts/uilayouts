'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface WorkHistory {
  company: string
  role: string
  period: string
  description: string
  location: string
  skills: string[]
  logo: string
  link?: string
}

const history: WorkHistory[] = [
  {
    company: 'OpenAI',
    role: 'Principal Product Engineer',
    period: '2021 — Present',
    location: 'San Francisco, CA',
    description:
      'Leading the development of high-performance desktop and mobile surfaces for project management tools.',
    skills: ['React', 'TypeScript', 'Electron', 'GraphQL'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/OpenAI_logo_2025_%28symbol%29.svg',
    link: 'https://linear.app',
  },
  {
    company: 'Stripe',
    role: 'Senior Software Engineer',
    period: '2018 — 2021',
    location: 'Remote',
    description:
      'Architected critical payment processing infrastructure used by millions of global businesses.',
    skills: ['Ruby', 'Go', 'Kubernetes', 'PostgreSQL'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
    link: 'https://stripe.com',
  },
  {
    company: 'Airbnb',
    role: 'Software Engineer',
    period: '2015 — 2018',
    location: 'San Francisco, CA',
    description:
      'Developed core search and discovery experiences within the guest-facing application.',
    skills: ['React', 'Node.js', 'Redux', 'AWS'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg',
    link: 'https://airbnb.com',
  },
]

export const WorkExperience = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-2">
          <Briefcase className="size-6 text-zinc-900" />
          <h2 className="text-3xl font-semibold text-zinc-900">
            Work Experience
          </h2>
        </div>
        <p className="text-sm text-zinc-500 ml-9">
          Building products that millions of people use every day
        </p>
      </motion.div>

      <div className="">
        {history.map((item, idx) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: idx * 0.15,
              duration: 0.5,
              ease: [0.32, 0.72, 0, 1],
            }}
            onHoverStart={() => setHoveredIndex(idx)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative group"
          >
            {/* Timeline Container */}
            <div className="flex gap-6">
              {/* Timeline Line & Node */}
              <div className="flex flex-col items-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={cn(
                    'w-6 h-6 text-zinc-800'
                    // idx === 0 ? ' text-zinc-950' : ' text-zinc-200'
                  )}
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M18.9905 19H19M18.9905 19C18.3678 19.6175 17.2393 19.4637 16.4479 19.4637C15.4765 19.4637 15.0087 19.6537 14.3154 20.347C13.7251 20.9374 12.9337 22 12 22C11.0663 22 10.2749 20.9374 9.68457 20.347C8.99128 19.6537 8.52349 19.4637 7.55206 19.4637C6.76068 19.4637 5.63218 19.6175 5.00949 19C4.38181 18.3776 4.53628 17.2444 4.53628 16.4479C4.53628 15.4414 4.31616 14.9786 3.59938 14.2618C2.53314 13.1956 2.00002 12.6624 2 12C2.00001 11.3375 2.53312 10.8044 3.59935 9.73817C4.2392 9.09832 4.53628 8.46428 4.53628 7.55206C4.53628 6.76065 4.38249 5.63214 5 5.00944C5.62243 4.38178 6.7556 4.53626 7.55208 4.53626C8.46427 4.53626 9.09832 4.2392 9.73815 3.59937C10.8044 2.53312 11.3375 2 12 2C12.6625 2 13.1956 2.53312 14.2618 3.59937C14.9015 4.23907 15.5355 4.53626 16.4479 4.53626C17.2393 4.53626 18.3679 4.38247 18.9906 5C19.6182 5.62243 19.4637 6.75559 19.4637 7.55206C19.4637 8.55858 19.6839 9.02137 20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19Z" />
                  <path d="M9 12.8929C9 12.8929 10.2 13.5447 10.8 14.5C10.8 14.5 12.6 10.75 15 9.5" />
                </svg>
                {idx !== history.length - 1 && (
                  <div className="w-px flex-1 bg-zinc-200" />
                )}
              </div>

              {/* Content Card */}
              <motion.div
                animate={{
                  y: hoveredIndex === idx ? -4 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="flex-1 pb-8"
              >
                <div className="bg-white border border-zinc-200 rounded-2xl p-6 transition-shadow">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    {/* Company Logo */}
                    <div className="shrink-0 ">
                      <img
                        src={item.logo}
                        alt={item.company}
                        className="size-16 object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-zinc-900">
                            {item.company}
                          </h3>
                          {item.link && (
                            <motion.a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="text-zinc-400 hover:text-zinc-900 transition-colors"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                color="#000000"
                                className="w-5 h-5"
                                fill="none"
                                stroke="#141B34"
                                stroke-width="1.5"
                              >
                                <path d="M11.0991 3.00012C7.45013 3.00669 5.53932 3.09629 4.31817 4.31764C3.00034 5.63568 3.00034 7.75704 3.00034 11.9997C3.00034 16.2424 3.00034 18.3638 4.31817 19.6818C5.63599 20.9999 7.75701 20.9999 11.9991 20.9999C16.241 20.9999 18.3621 20.9999 19.6799 19.6818C20.901 18.4605 20.9906 16.5493 20.9972 12.8998" />
                                <path d="M20.556 3.49612L11.0487 13.0586M20.556 3.49612C20.062 3.00151 16.7343 3.04761 16.0308 3.05762M20.556 3.49612C21.05 3.99074 21.0039 7.32273 20.9939 8.02714" />
                              </svg>
                            </motion.a>
                          )}
                        </div>
                        <span className="text-xs font-semibold font-dmSans text-zinc-400 uppercase tracking-wider whitespace-nowrap">
                          {item.period}
                        </span>
                      </div>

                      <p className="text-sm font-semibold text-zinc-600 mb-2">
                        {item.role}
                      </p>

                      <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                        <MapPin className="size-3" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: idx * 0.15 + skillIdx * 0.05,
                          duration: 0.3,
                        }}
                        className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-medium rounded-full border border-zinc-200 hover:bg-zinc-200 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-6 grid grid-cols-3 gap-4"
      >
        {[
          { label: 'Years Experience', value: '8+' },
          { label: 'Companies', value: '3' },
          { label: 'Projects Shipped', value: '50+' },
        ].map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + idx * 0.1 }}
            className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 text-center"
          >
            <p className="text-2xl font-bold text-zinc-900 mb-1 font-dmSans">
              {stat.value}
            </p>
            <p className="text-xs text-zinc-500 uppercase tracking-wider">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
