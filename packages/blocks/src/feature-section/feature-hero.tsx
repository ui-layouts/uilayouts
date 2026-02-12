'use client'
import { Settings, Users, BarChart3, Lightbulb, Target } from 'lucide-react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: Settings,
    title: 'AI Campaign Optimization',
    desc: 'Automatically analyzes ad performance and adjusts targeting for optimal results',
  },
  {
    icon: Users,
    title: 'AI Audience Segmentation',
    desc: 'Divides audiences into refined segments based on behavior, demographics, and interests',
    highlight: true,
  },
  {
    icon: BarChart3,
    title: 'AI Ad Budget Allocation',
    desc: 'Automatically manages and allocates ad budgets based on campaign performance',
  },
  {
    icon: Lightbulb,
    title: 'AI Creative Insights',
    desc: 'Analyzes creative elements like images, videos, and text to boost engagement',
  },
  {
    icon: Target,
    title: 'AI Performance Prediction',
    desc: 'Predicts campaign outcomes using historical data and market trends',
  },
]

export const FeatureHero = () => {
  return (
    <section className="py-24 bg-white px-6 font-dmSans relative min-h-screen">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[repeating-linear-gradient(45deg,#f3f3f3_0px_1px,transparent_1px_8px)] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(50,97,237,1)_100%)]"></div>

      <div className="py-24 px-6 max-w-7xl mx-auto text-center font-dmSans relative">
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 text-balance">
            Empower Your Business <br /> with AI-Driven Precision
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-20 text-pretty">
            Leverage cutting-edge AI tools to optimize campaigns, allocate
            budgets, and unlock actionable insights—all in one platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
          {features.slice(0, 3).map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}

          <div className="md:col-span-3 flex flex-col md:flex-row justify-center gap-y-16 gap-x-12">
            {features.slice(3).map((f, i) => (
              <div key={i} className="md:w-1/3">
                <FeatureCard {...f} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const FeatureCard = ({ icon: Icon, title, desc, highlight }: any) => (
  <div
    className={cn(
      'flex flex-col items-center group transition-all duration-200',
      highlight && 'md:scale-105'
    )}
  >
    <div
      className={cn(
        'size-12 rounded-full flex items-center justify-center mb-6 transition-colors duration-200',
        highlight
          ? 'bg-blue-600 text-white shadow-xl shadow-blue-200'
          : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'
      )}
    >
      <Icon className="size-6" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-tight">
      {title}
    </h3>
    <p className="text-slate-500 leading-relaxed text-sm max-w-xs mx-auto text-pretty">
      {desc}
    </p>
  </div>
)
