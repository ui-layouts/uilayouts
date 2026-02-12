'use client'
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from '@/components/ui/accordion'
import { TimelineAnimation } from '@/components/ui/timeline-animation'
import { Plus } from 'lucide-react'
import { useRef } from 'react'

type ExperienceItem = {
  company: string
  year: string
  position: string
  answer: string
}

const experienceData: ExperienceItem[] = [
  {
    company: 'microsoft',
    year: '2020-2021',
    position: 'Design Director',
    answer:
      "Led the complete redesign of Microsoft's customer experience platform, overseeing a team of 25+ designers and researchers. Implemented a new design system that improved user engagement by 45% and reduced cart abandonment by 30%. Spearheaded the integration of AI-powered personalization features that served 50+ million customers globally.",
  },
  {
    company: 'adobe*',
    year: '2019-2020',
    position: 'Senior Designer',
    answer:
      "Directed the visual design overhaul of Adobe's ecosystem applications, ensuring seamless integration across Creative Cloud, Document Cloud, and Experience Cloud. Collaborated closely with engineering teams to implement cutting-edge interaction patterns that set new industry standards. Contributed to the development of design guidelines that are now used by thousands of developers worldwide.",
  },
  {
    company: 'tesla',
    year: '2018-2019',
    position: 'Product Designer',
    answer:
      'Pioneered the user interface for autonomous vehicle navigation systems, focusing on passenger safety and comfort. Designed intuitive control systems that bridge the gap between human drivers and AI technology. Conducted extensive user research with diverse demographics to create inclusive and accessible design solutions that earned multiple safety certifications.',
  },
  {
    company: 'airbnb',
    year: '2017-2018',
    position: 'Design Lead',
    answer:
      "Transformed Airbnb's host experience platform, redesigning the entire workflow to increase efficiency and reduce cognitive load. Implemented real-time feedback systems that improved host satisfaction scores by 60%. Led cross-functional initiatives that resulted in a 25% reduction in average response times across 190+ countries.",
  },
  {
    company: 'spotify',
    year: '2015-2017',
    position: 'Art Director',
    answer:
      "Established Spotify's visual identity and brand guidelines during a critical period of rapid growth. Created award-winning campaigns that increased brand recognition by 200% and user acquisition by 150%. Developed a comprehensive design system that scaled across multiple platforms and enabled the design team to ship features 3x faster while maintaining consistency.",
  },
]

export function CreativeExperience() {
  const heroRef = useRef<HTMLDivElement>(null)
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: 'blur(20px)',
      y: 40,
      opacity: 0,
    },
  }
  return (
    <div className="sm:p-10 p-5 mx-auto bg-zinc-100 min-h-screen w-full">
      <div className="mt-3 max-w-7xl mx-auto" ref={heroRef}>
        <h1 className="md:text-7xl text-5xl font-manrope font-semibold pb-10">
          My Experience
        </h1>
        <Accordion defaultValue="item-2">
          {experienceData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-0 overflow-visible bg-transparent rounded-none w-full"
            >
              <TimelineAnimation
                key={index}
                animationNum={index}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="border-t border-neutral-300"
              >
                <AccordionHeader
                  customIcon
                  className="hover:no-underline px-4 gap-4 py-2 relative data-active:bg-zinc-200 hover:bg-transparent text-black sm:text-base text-sm"
                >
                  <div className="flex items-center space-x-2 sm:gap-5 gap-2 sm:justify-between justify-end">
                    <span className="flex flex-col space-y-2">
                      <span className="text-xs lg:text-xl md:text-md italic font-normal">
                        ({item.year})
                      </span>
                    </span>
                    <span className="relative opacity-0 scale-95 group-data-active:opacity-100 group-data-active:scale-100 group-hover:scale-100 group-hover:opacity-100 transition-opacity group-data-active:rotate-90 text-neutral-600 p-2 -translate-x-1 rounded-xl">
                      <Plus className="group-data-active:rotate-45 transition-all duration-300" />
                    </span>
                  </div>
                  <p className="flex flex-col">
                    <span className="font-medium lg:text-8xl md:text-6xl text-4xl uppercase">
                      {item.company}
                    </span>
                    <span className="lg:text-xl text-zinc-800 text-end md:text-base text-sm uppercase font-medium">
                      {item.position}
                    </span>
                  </p>
                </AccordionHeader>
              </TimelineAnimation>
              <TimelineAnimation
                animationNum={index}
                timelineRef={heroRef}
                customVariants={revealVariants}
              >
                <AccordionPanel
                  className="space-y-4 w-full mx-auto bg-zinc-200 data-active:bg-neutral-200 px-4"
                  articleClassName="pt-2 px-0 w-full max-w-4xl"
                >
                  <p className="text-xs sm:text-base">{item.answer}</p>
                </AccordionPanel>
              </TimelineAnimation>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
