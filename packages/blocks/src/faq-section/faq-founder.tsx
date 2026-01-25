'use client'

import { useId, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Minus, Plus } from 'lucide-react'
import { TimelineAnimation } from '@/components/ui/timeline-animation'

type FAQ = {
  question: string
  answer: string
}
type FAQCardProps = {
  question: string
  answer: string
  animationNum: number
  timelineRef: React.RefObject<HTMLDivElement>
}

export const FaqCard = ({
  question,
  answer,
  animationNum,
  timelineRef,
}: FAQCardProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentId = useId()

  return (
    <TimelineAnimation
      animationNum={animationNum}
      timelineRef={timelineRef}
      className="rounded-2xl bg-neutral-100 border dark:border-neutral-700 border-neutral-200 dark:bg-neutral-900"
    >
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full text-left p-2 sm:p-4 flex justify-between items-center gap-4 cursor-pointer"
      >
        <span className="text-lg sm:text-xl text-primary font-spaceGrotesk font-medium">
          {question}
        </span>

        <span className="relative w-10 h-10 dark:bg-neutral-700 bg-white grid place-items-center rounded-lg shadow-sm">
          {!isOpen && <Plus size={20} />}
          {isOpen && <Minus size={20} />}
        </span>
      </button>

      <motion.div
        id={contentId}
        role="region"
        initial={false}
        animate={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="grid overflow-hidden px-2 sm:px-4"
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            {answer}
          </p>
        </div>
      </motion.div>
    </TimelineAnimation>
  )
}
export const FaqFounder = () => {
  const timelineRef = useRef<HTMLDivElement>(null)
  const faqs: FAQ[] = [
    {
      question: 'What problem does this product solve?',
      answer:
        'This product removes repetitive manual work from modern web projects. Instead of rebuilding common UI patterns or logic from scratch, you get production-ready components and systems that save hours on every build.',
    },
    {
      question: 'Who is this product best suited for?',
      answer:
        'It is designed for developers, founders, and small teams who care about speed, consistency, and maintainability. If you are shipping real products—not demos—this is built for you.',
    },
    {
      question: 'Can I customize the components for my own design system?',
      answer:
        'Yes. All components are fully customizable. You can change layout, spacing, colors, typography, and behavior without fighting the underlying structure.',
    },
    {
      question: 'Does this work well with modern frameworks like Next.js?',
      answer:
        'Absolutely. The components are built with modern Next.js patterns in mind, including the App Router, server components compatibility, and Tailwind CSS best practices.',
    },
    {
      question: 'Is this suitable for production use?',
      answer:
        'Yes. The focus is on performance, accessibility, and clean architecture. These components are meant to be shipped to real users, not just used as visual placeholders.',
    },
    {
      question: 'How do updates and improvements work?',
      answer:
        'New components, improvements, and fixes are added continuously. You can pull updates as needed and adopt only what makes sense for your product.',
    },
  ]

  return (
    <section
      className="py-16 px-4 md:px-8 lg:px-16 dark:bg-neutral-800 bg-neutral-50 min-h-screen"
      ref={timelineRef}
    >
      <div className="max-w-5xl mx-auto">
        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={0}
          as="h1"
          className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-white mb-10 text-center"
        >
          Frequently Asked Questions
        </TimelineAnimation>

        <div className="md:grid grid-cols-12  gap-8 md:gap-10">
          {/* Profile card */}
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={1}
            className="col-span-5 h-fit p-3 sm:p-4 lg:p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-900"
          >
            <div className="flex gap-3 items-center">
              <div className="size-10 sm:size-16 rounded-xl overflow-hidden bg-gray-300 dark:bg-gray-700">
                <img
                  src="/naymur.png"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h6 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                  Naymur Rahman
                </h6>
                <p className="text-gray-500 font-medium dark:text-gray-400">
                  Founder & CEO
                </p>
              </div>
            </div>

            <p className="my-4 sm:my-5 text-base sm:text-lg text-gray-700 dark:text-gray-300">
              “Something that represents visiting your profile to discuss about
              you.”
            </p>

            <button
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/naymur-rahman/',
                  '_blank'
                )
              }
              className="inline-flex cursor-pointer items-center gap-2 p-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
            >
              <svg
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 256"
                className="w-6"
              >
                <path
                  d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                  fill="#ffffff"
                />
              </svg>
              Connect on LinkedIn
            </button>
          </TimelineAnimation>

          {/* FAQs */}
          <div className="col-span-7 space-y-4">
            {faqs.map((faq, i) => (
              <FaqCard
                key={i}
                {...faq}
                animationNum={i + 2}
                //@ts-ignore
                timelineRef={timelineRef}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
