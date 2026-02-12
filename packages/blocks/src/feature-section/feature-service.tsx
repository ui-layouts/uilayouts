import {
  MapPin,
  Briefcase,
  PieChart,
  ArrowRight,
  Lightbulb,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@repo/shadcn'

export const FeatureServices = () => {
  return (
    <section className="py-32 px-6 bg-slate-50 min-h-screen font-dmSans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-4">
          <span className="px-4 py-1.5 rounded-md border border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-500 mb-5 inline-block">
            Services
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-5 text-balance tracking-tight leading-tight">
            Explore our comprehensive service offerings
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed text-pretty mb-10">
            Focused on your unique needs, our team delivers solutions that blend
            deep industry knowledge and cutting-edge strategies to ensure
            lasting growth.
          </p>
          <Button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-100">
            Get Started <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            icon={MapPin}
            title="Strategy Development"
            desc="Crafting strategic plans that align with your goals."
            active
          />
          <ServiceCard
            icon={Briefcase}
            title="Financial Consulting"
            desc="Expert guidance to optimize your financial performance."
          />
          <ServiceCard
            icon={Lightbulb}
            title="Technology Solutions"
            desc="Innovative tech strategies to enhance operational efficiency."
          />
          <ServiceCard
            icon={PieChart}
            title="Risk Management"
            desc="Identify, assess, and mitigate risks to protect your assets."
          />
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ icon: Icon, title, desc, active }: any) => (
  <div
    className={cn(
      'p-10 rounded-2xl transition-all duration-300 flex flex-col gap-6',
      active
        ? 'bg-blue-500 text-white shadow-2xl shadow-blue-200'
        : 'bg-slate-50 text-slate-900 border border-slate-100'
    )}
  >
    <div
      className={cn(
        'size-12 rounded-full flex items-center justify-center',
        active ? 'bg-white/20' : 'bg-blue-600 text-white'
      )}
    >
      <Icon className="size-5" />
    </div>
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      <p
        className={cn(
          'text-sm leading-relaxed text-pretty',
          active ? 'text-white/80' : 'text-slate-500'
        )}
      >
        {desc}
      </p>
    </div>
  </div>
)
