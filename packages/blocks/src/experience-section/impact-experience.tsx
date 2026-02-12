'use client'
import React from 'react'
import { cn } from '@/lib/utils'

interface ExperienceItemProps {
  index: string
  className?: string
  company: string
  tagline: string
  period: string
  position: string
  location: string
  industry: string
  website?: string
  description: string[]
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  index,
  className,
  company,
  tagline,
  period,
  position,
  location,
  industry,
  website,
  description,
}) => {
  return (
    <div className={cn('relative')}>
      <div
        className={cn(
          'grid grid-cols-1 group px-4 md:grid-cols-12 gap-8 py-16 border-neutral-200 overflow-hidden z-10 relative w-full',
          className
        )}
      >
        {index === '1' && (
          <img
            src="https://images.unsplash.com/photo-1763010156322-2fb80d48ea8b?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
          />
        )}
        {index === '2' && (
          <img
            src="https://images.unsplash.com/photo-1762227144867-c66aee797440?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
          />
        )}
        {index === '3' && (
          <img
            src="https://images.unsplash.com/photo-1764138370667-d15f89ee1c45?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
          />
        )}

        <div className="md:col-span-3 space-y-4 relative z-10">
          <h3 className="text-4xl font-bold text-neutral-900 leading-tight">
            {company}
          </h3>
          <div className="space-y-1">
            <p className="text-sm group-hover:text-neutral-800 text-neutral-500 font-medium">
              {tagline}
            </p>
            <p className="text-sm group-hover:text-neutral-800 text-neutral-500 tabular-nums">
              {period}
            </p>
          </div>
        </div>

        <div className="md:col-span-4 space-y-4 relative z-10">
          <div className="grid grid-cols-2 gap-y-4">
            <span className="text-sm group-hover:text-neutral-800 text-neutral-500">
              Position
            </span>
            <span className="text-sm font-semibold text-neutral-900">
              {position}
            </span>

            <span className="text-sm group-hover:text-neutral-800 text-neutral-500">
              Location
            </span>
            <span className="text-sm font-semibold text-neutral-900">
              {location}
            </span>

            <span className="text-sm group-hover:text-neutral-800 text-neutral-500">
              Industry
            </span>
            <span className="text-sm font-semibold text-neutral-900">
              {industry}
            </span>

            {website && (
              <>
                <span className="text-sm group-hover:text-neutral-800 text-neutral-500">
                  Website
                </span>
                <a
                  href={`https://${website}`}
                  className="text-sm font-semibold text-neutral-900 border-b border-neutral-900 w-fit inline-flex items-center gap-1"
                >
                  {website} <span className="text-xs">↗</span>
                </a>
              </>
            )}
          </div>
        </div>

        <div className="md:col-span-5 space-y-6 relative z-10">
          {description.map((para, i) => (
            <p
              key={i}
              className="group-hover:text-neutral-800 text-neutral-600 leading-relaxed text-pretty"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export const ImpactExperience: React.FC = () => {
  return (
    <section className="bg-zinc-50 min-h-screen px-5">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-6xl px-5 font-bold bg-zinc-100 border-neutral-200 tracking-tight py-10 text-neutral-900 border-x rounded-b-xl">
          EXPERIENCE
        </h2>
        <ExperienceItem
          index="1"
          company="Northline"
          tagline="Building modern financial tools"
          period="2022 — Present"
          position="Frontend Engineer"
          location="Remote"
          industry="Fintech"
          website="www.northline.co"
          className="border rounded-xl bg-zinc-100"
          description={[
            'I focus on crafting clean, scalable interfaces for a consumer-facing web platform, translating product requirements into intuitive and accessible user experiences.',
            'My work involves building reusable UI components, improving design consistency, and collaborating with cross-functional teams to ship features efficiently while maintaining a high visual and technical standard.',
          ]}
        />

        <ExperienceItem
          index="2"
          company="Habitatly"
          tagline="Simplifying property exploration"
          period="2020 — 2021"
          position="Frontend Developer"
          location="Berlin, Germany"
          industry="Real Estate Technology"
          className="rounded-xl border-x h-full bg-zinc-100"
          description={[
            'I contributed to the development of a property discovery application, working across key user flows such as onboarding, search, and detailed listing views.',
            'Beyond feature development, I helped refine UI patterns and improve performance across devices, ensuring a smooth and responsive experience for everyday users.',
          ]}
        />
        <ExperienceItem
          index="3"
          company="Brightstack"
          tagline="Tools for growing digital products"
          className="border-t rounded-t-xl border-x h-full bg-zinc-100"
          period="2021 — 2023"
          position="UI Engineer"
          location="Remote"
          industry="SaaS"
          website="www.brightstack.app"
          description={[
            'I worked on building and refining user interfaces for a web-based product used by small teams to manage workflows and internal tools.',
            'My responsibilities included developing reusable components, improving layout responsiveness, and collaborating with product and design to ship features that balanced usability with visual clarity.',
          ]}
        />
      </div>
    </section>
  )
}
