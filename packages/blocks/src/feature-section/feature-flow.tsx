import React from 'react'
import {
  Target,
  Mail,
  GitPullRequest,
  Zap,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Shield,
  Users,
  Clock,
  Waypoints,
  Lightbulb,
} from 'lucide-react'
import {
  Carousel,
  SliderContainer,
  Slider,
  SliderPrevButton,
  SliderNextButton,
  SliderSnapDisplay,
  SliderProgress,
} from '@/components/ui/carousel'

const items = [
  {
    icon: Target,
    title: 'Prioritize high-values',
    desc: "Skyrocket's AI scores and ranks leads based on conversion potential, so you focus on prospects ready to buy, saving hours.",
  },
  {
    icon: Mail,
    title: 'Personalized emails',
    desc: "SkyLead's AI generates tailored cold emails in seconds, boosting response rates and cutting outreach time.",
  },
  {
    icon: Waypoints,
    title: 'CRM Integration',
    desc: 'SkyLead integrates effortlessly with your CRM, streamlining workflows and keeping your pipeline organized.',
  },
  {
    icon: Lightbulb,
    title: 'Instant engagement',
    desc: 'SkyLead automation ensures timely engagement with every deal, helping you close sales deals faster.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    desc: 'Track performance metrics, conversion rates, and ROI with comprehensive dashboards and real-time reporting.',
  },
  {
    icon: Shield,
    title: 'Data Security',
    desc: 'Enterprise-grade security with encryption, compliance, and data protection to keep your information safe.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    desc: 'Work seamlessly with your team through shared pipelines, comments, and collaborative lead management.',
  },
  {
    icon: Clock,
    title: '24/7 Automation',
    desc: 'Round-the-clock automated follow-ups and lead nurturing to ensure no opportunity is missed.',
  },
]

export const FeatureFlow: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden font-manrope relative">
      <div className="max-w-7xl mx-auto">
        <Carousel options={{ align: 'start', loop: false }}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded mb-6 inline-block">
                Faster Sales
              </span>
              <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight text-balance">
                Prospect to customer, faster than ever!
              </h2>
              <p className="text-slate-500 text-lg text-pretty">
                Stop losing time on slow, outdated lead processes. Our
                AI-powered system finds, nurtures, and converts your best
                prospects efficiently.
              </p>
            </div>

            <div className="flex flex-col items-end gap-4">
              {/* <SliderSnapDisplay className="text-sm" /> */}
              <div className="flex gap-4">
                <SliderPrevButton
                  className="size-12 rounded-full border disabled:opacity-40 cursor-pointer backdrop-blur-lg border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="size-5 text-orange-600" />
                </SliderPrevButton>
                <SliderNextButton
                  className="size-12 rounded-full disabled:opacity-40 cursor-pointer border backdrop-blur-lg border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="size-5 text-orange-600" />
                </SliderNextButton>
              </div>
            </div>
          </div>

          <SliderContainer className="gap-6">
            {items.map((item, i) => (
              <Slider key={i} className="basis-full md:basis-1/3 lg:basis-1/4">
                <FlowCard {...item} />
              </Slider>
            ))}
          </SliderContainer>
        </Carousel>
      </div>
    </section>
  )
}

const FlowCard = ({ icon: Icon, title, desc }: any) => (
  <div className="bg-orange-50/20 border border-orange-100/50 p-8 rounded-2xl flex flex-col gap-10 hover:shadow-lg transition-shadow duration-300 h-full">
    <div className="size-10 flex items-center justify-center text-orange-600">
      <Icon className="size-8" />
    </div>
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed text-pretty">
        {desc}
      </p>
    </div>
  </div>
)
