'use client'

import { cn } from '@/lib/utils'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: number
  sender: string
  avatar: string
  text: string
  side: 'left' | 'right'
  time: string
  reactions: string[]
}

const messages: Message[] = [
  {
    id: 1,
    sender: 'Emily Chen',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    text: 'Just integrated the new grid system. Incredible work!',
    side: 'left',
    time: '2:34 PM',
    reactions: ['👏', '🔥'],
  },
  {
    id: 2,
    sender: 'Team Lab',
    avatar: 'TL',
    text: 'So glad you like it Emily! Let us know if you need any help.',
    side: 'right',
    time: '2:35 PM',
    reactions: ['❤️'],
  },
  {
    id: 3,
    sender: 'Markus T.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    text: 'The documentation is actually readable for once. Thank you.',
    side: 'left',
    time: '2:37 PM',
    reactions: ['😄', '💯'],
  },
  {
    id: 4,
    sender: 'Emily Chen',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    text: 'Btw, the dark mode tokens are perfect.',
    side: 'left',
    time: '2:38 PM',
    reactions: ['✨'],
  },
  {
    id: 5,
    sender: 'Sarah K.',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    text: 'Migration took 10 minutes. Best decision we made this quarter!',
    side: 'left',
    time: '2:40 PM',
    reactions: ['🚀', '💪'],
  },
]

const TypingIndicator = () => (
  <div className="flex gap-1 px-4 py-3">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="size-2 bg-zinc-400 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: i * 0.2,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
)

export const ChatTestimonials: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [showTyping, setShowTyping] = useState(false)
  const [activeReactions, setActiveReactions] = useState<Set<number>>(new Set())

  useEffect(() => {
    const showMessages = async () => {
      for (let i = 0; i < messages.length; i++) {
        // Show typing indicator
        setShowTyping(true)
        await new Promise((resolve) => setTimeout(resolve, 800))

        // Hide typing and show message
        setShowTyping(false)
        setVisibleMessages((prev) => [...prev, i])

        // Wait before next message
        await new Promise((resolve) => setTimeout(resolve, 1200))
      }
    }

    showMessages()
  }, [])

  const toggleReaction = (messageId: number) => {
    setActiveReactions((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(messageId)) {
        newSet.delete(messageId)
      } else {
        newSet.add(messageId)
      }
      return newSet
    })
  }

  return (
    <section className="bg-zinc-100 min-h-screen px-4 font-manrope relative">
      <div className="max-w-7xl mx-auto py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            Live Support Conversations
          </h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            See real-time interactions between our support team and customers.
            Experience the responsive, helpful communication that sets us apart.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-zinc-200 "
            >
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                Real Customer Experiences
              </h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Our support team is dedicated to providing exceptional
                assistance. Watch as customers share their genuine experiences
                and receive immediate, helpful responses.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="size-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900">
                      Lightning Fast Response
                    </p>
                    <p className="text-sm text-zinc-600">
                      Average response time under 2 minutes
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="size-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900">
                      24/7 Availability
                    </p>
                    <p className="text-sm text-zinc-600">
                      Always here when you need us
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="size-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900">
                      Customer Satisfaction
                    </p>
                    <p className="text-sm text-zinc-600">
                      98% positive feedback rate
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { label: 'Response Rate', value: '98%' },
                { label: 'Avg. Rating', value: '4.9★' },
                { label: 'Active Users', value: '2.4k' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="bg-white border border-zinc-200 rounded-xl p-4 text-center"
                >
                  <p className="text-xl font-bold text-zinc-900">
                    {stat.value}
                  </p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Chat Interface */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl border border-zinc-200  overflow-hidden">
              {/* Chat Header */}
              <div className="bg-zinc-50 px-6 py-4 border-b border-zinc-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="size-3 bg-green-500 rounded-full animate-pulse" />
                      <div className="absolute inset-0 size-3 bg-green-500 rounded-full animate-ping opacity-75" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">
                        Support Chat
                      </p>
                      <p className="text-xs text-zinc-500">
                        42 customers online
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="size-1.5 bg-zinc-300 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-5 space-y-3">
                <AnimatePresence>
                  {visibleMessages.map((index) => {
                    const msg = messages[index]
                    const showReactions = activeReactions.has(msg?.id || 0)

                    return (
                      <motion.div
                        key={msg?.id}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                        className={cn(
                          'flex gap-2 max-w-[85%]',
                          msg?.side === 'right'
                            ? 'ml-auto flex-row-reverse'
                            : 'mr-auto'
                        )}
                      >
                        {/* Avatar */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.2,
                            type: 'spring',
                            stiffness: 500,
                            damping: 25,
                          }}
                          className={cn(
                            'size-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 overflow-hidden',
                            msg?.side === 'right'
                              ? 'bg-zinc-900 text-white'
                              : 'bg-zinc-200'
                          )}
                        >
                          {msg?.avatar.startsWith('http') ? (
                            <img
                              src={msg.avatar}
                              alt={msg.sender}
                              className="size-full object-cover"
                            />
                          ) : (
                            <span
                              className={
                                msg?.side === 'right'
                                  ? 'text-white'
                                  : 'text-zinc-900'
                              }
                            >
                              {msg?.avatar}
                            </span>
                          )}
                        </motion.div>

                        {/* Message Content */}
                        <div
                          className={cn(
                            'flex flex-col gap-1',
                            msg?.side === 'right' ? 'items-end' : 'items-start'
                          )}
                        >
                          {/* Sender Name */}
                          <span className="text-xs text-zinc-500 font-medium px-1">
                            {msg?.sender}
                          </span>

                          {/* Message Bubble */}
                          <div className="relative group">
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              className={cn(
                                'px-4 py-2.5 rounded-2xl text-sm cursor-pointer transition-all',
                                msg?.side === 'right'
                                  ? 'bg-zinc-900 text-white rounded-tr-sm'
                                  : 'bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-tl-sm hover:border-zinc-300'
                              )}
                              onClick={() => toggleReaction(msg?.id || 0)}
                            >
                              {msg?.text}
                            </motion.div>

                            {/* Reactions */}
                            <AnimatePresence>
                              {showReactions && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.8, y: 5 }}
                                  animate={{ opacity: 1, scale: 1, y: 0 }}
                                  exit={{ opacity: 0, scale: 0.8, y: 5 }}
                                  transition={{ duration: 0.2 }}
                                  className={cn(
                                    'absolute -bottom-3 flex gap-0.5 bg-white border border-zinc-200 rounded-full px-2 py-0.5 ',
                                    msg?.side === 'right' ? 'right-0' : 'left-0'
                                  )}
                                >
                                  {msg?.reactions.map((reaction, idx) => (
                                    <motion.span
                                      key={idx}
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{
                                        delay: idx * 0.05,
                                        type: 'spring',
                                        stiffness: 500,
                                      }}
                                      className="text-xs"
                                    >
                                      {reaction}
                                    </motion.span>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* Timestamp */}
                          <span className="text-[9px] text-zinc-400 font-medium px-1">
                            {msg?.time}
                          </span>
                        </div>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>

                {/* Typing Indicator */}
                <AnimatePresence>
                  {showTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex gap-2 max-w-[85%] mr-auto"
                    >
                      <div className="size-8 rounded-full overflow-hidden shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                          alt="User typing"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="bg-zinc-50 border border-zinc-200 rounded-2xl rounded-tl-sm ">
                        <TypingIndicator />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Chat Footer */}
              <div className="bg-zinc-50 px-4 py-2 border-t border-zinc-200">
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-3 bg-white border border-zinc-200 rounded-full text-sm focus:outline-none focus:border-zinc-300"
                  />
                  <button className="size-10 bg-zinc-900 text-white rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#efefef_1px,transparent_1px),linear-gradient(to_bottom,#efefef_1px,transparent_1px)] bg-size-[6rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(237,218,50,1)_100%)]"></div>
    </section>
  )
}
