'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

interface ExperienceItemProps {
  company: string
  tagline: string
  period: string
  position: string
  location: string
  industry: string
  website?: string
  metrics?: string[]
  techStack?: string[]
  description: string[]
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  tagline,
  period,
  position,
  location,
  industry,
  website,
  metrics,
  techStack,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="grid grid-cols-1 md:grid-cols-12 gap-8 py-20 border-t border-gray-200"
    >
      {/* 1. Company Identity & Timeline */}
      <div className="md:col-span-3 space-y-4">
        <h3 className="text-4xl font-bold text-gray-900 leading-tight tracking-tight">
          {company}
        </h3>
        <div className="space-y-1">
          <p className="text-sm text-violet-600 font-bold uppercase tracking-widest">
            {tagline}
          </p>
          <p className="text-sm text-gray-400 font-medium tabular-nums">
            {period}
          </p>
        </div>
        {metrics && metrics.length > 0 && (
          <div className="pt-4 space-y-3">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="flex flex-col border-l-2 border-violet-100 pl-4"
              >
                <span className="text-xs text-gray-400 uppercase font-bold tracking-tighter">
                  Impact
                </span>
                <span className="text-lg font-bold text-gray-900 tabular-nums leading-none">
                  {metric}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 2. Professional Metadata & Tech Stack */}
      <div className="md:col-span-4 space-y-8">
        <div className="grid grid-cols-2 gap-y-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
              Position
            </span>
            <span className="text-sm font-semibold text-gray-900">
              {position}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
              Location
            </span>
            <span className="text-sm font-semibold text-gray-900">
              {location}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
              Industry
            </span>
            <span className="text-sm font-semibold text-gray-900">
              {industry}
            </span>
          </div>

          {website && (
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                Platform
              </span>
              <a
                href={`https://${website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-900 border-b border-gray-200 w-fit inline-flex items-center gap-1 hover:text-violet-600 hover:border-violet-600 transition-colors"
              >
                {website} <span className="text-[10px]">↗</span>
              </a>
            </div>
          )}
        </div>

        {techStack && (
          <div className="space-y-3">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">
              Key Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-[11px] font-bold border border-gray-100 uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3. Detailed Contributions */}
      <div className="md:col-span-5 space-y-6">
        {description.map((para, i) => (
          <p
            key={i}
            className="text-lg text-gray-600 leading-relaxed text-pretty"
          >
            {para}
          </p>
        ))}
      </div>
    </motion.div>
  )
}

export const PortfolioExperience = () => {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-24 font-dmSans">
      <div className="max-w-7xl mx-auto py-32">
        <header className="mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs text-violet-600 font-black uppercase tracking-[0.3em]">
            « Professional Journey »
          </div>
          <h2 className="text-7xl md:text-8xl font-black tracking-tighter text-gray-900 text-balance uppercase leading-[0.9]">
            SaaS <br />
            Expertise.
          </h2>
        </header>

        <ExperienceItem
          company="Vertex AI"
          tagline="Enterprise Model Ops & Governance"
          period="2023 — Present"
          position="Senior Product Engineer"
          location="Palo Alto, CA"
          industry="B2B SaaS / Artificial Intelligence"
          website="vertex.ai"
          metrics={[
            '$12M ARR Growth',
            '99.99% Uptime',
            '300+ Enterprise Clients',
          ]}
          techStack={['Next.js', 'TypeScript', 'Go', 'PostgreSQL', 'Kafka']}
          description={[
            'Driving the engineering efforts for a multi-tenant AI governance platform. I architected a low-latency inference monitoring dashboard that serves real-time analytics to Fortune 500 customers, enabling them to audit model compliance at scale.',
            'Spearheaded the integration of a declarative UI system that reduced frontend feature-to-production time from 5 days to 6 hours. I currently mentor 4 junior engineers on distributed systems and high-scale React patterns.',
          ]}
        />

        <ExperienceItem
          company="ClarityFlow"
          tagline="Product-Led Growth (PLG) Engine"
          period="2021 — 2023"
          position="Founding Frontend Engineer"
          location="Remote (Global)"
          industry="SaaS / Marketing Tech"
          website="clarityflow.com"
          metrics={['0 to 15k Users', '2.1s Avg. TTI', '84% UX CSAT']}
          techStack={['React', 'GraphQL', 'Tailwind', 'Node.js', 'Vercel']}
          description={[
            'As the first frontend hire, I built the entire SaaS dashboard from scratch using a custom design system. I optimized the client-side data fetching layer using React Query, resulting in a 40% reduction in server load during peak traffic.',
            'Led the design and implementation of an automated user onboarding flow that increased trial-to-paid conversion by 18% in the first quarter of deployment. Collaborated directly with the CEO on product strategy and PLG experiments.',
          ]}
        />

        <ExperienceItem
          company="SecureStack"
          tagline="Cloud-Native Security Platform"
          period="2019 — 2021"
          position="Software Engineer"
          location="London, UK"
          industry="SaaS / Cybersecurity"
          metrics={[
            '-35% Mean Time to Resolve',
            'SOC2 Compliance',
            '5k Managed Nodes',
          ]}
          techStack={[
            'TypeScript',
            'React',
            'Rust',
            'AWS Lambda',
            'Kubernetes',
          ]}
          description={[
            'Developed complex data visualization tools for cloud security threat detection. I implemented a graph-based network explorer that allowed security analysts to trace attack vectors through thousands of nodes in real-time.',
            'Refactored the core authentication flow to support SAML and OIDC for enterprise clients, which was critical for securing our first three Tier-1 banking partnerships. Established rigorous CI/CD pipelines with automated accessibility testing.',
          ]}
        />
      </div>
    </section>
  )
}
