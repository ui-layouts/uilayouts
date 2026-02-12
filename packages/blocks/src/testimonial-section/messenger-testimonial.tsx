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

export const MessengerTestimonials: React.FC = () => {
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
    <section className="bg-zinc-100 min-h-screen px-4 font-manrope py-10">
      {/* Header */}
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">
          Live Customer Conversations
        </h2>
        <p className="text-zinc-600 ">
          Watch real-time interactions between our support team and customers.
          Experience the responsive, helpful communication that sets us apart.
        </p>
      </div>

      {/* chat interface */}
      <div className="max-w-xl mx-auto flex flex-col border-x border-neutral-200">
        {/* Header */}
        <div className="text-center py-5 pb-10 border-b border-neutral-200">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-manrope bg-white border border-zinc-200 rounded-full px-4 py-2"
          >
            <div className="size-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-600">
              Live Customer Conversations
            </span>
          </motion.div>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-3 p-5 border-b border-neutral-200">
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
                          msg?.side === 'right' ? 'text-white' : 'text-zinc-900'
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
                          'px-4 py-2.5 rounded-2xl text-sm -sm cursor-pointer transition-all',
                          msg?.side === 'right'
                            ? 'bg-zinc-900 text-white rounded-tr-sm'
                            : 'bg-white border border-zinc-200 text-zinc-900 rounded-tl-sm hover:border-zinc-300'
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
                              'absolute -bottom-3 flex gap-0.5 bg-white border border-zinc-200 rounded-full px-2 py-0.5 -md',
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
                <div className="bg-white border border-zinc-200 rounded-2xl rounded-tl-sm -sm">
                  <TypingIndicator />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="border-b bg-neutral-200 border-neutral-200 p-5 flex items-center justify-between backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="size-2 bg-green-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 size-2 bg-green-500 rounded-full animate-ping opacity-75" />
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-bold font-manrope text-zinc-900">
                42 customers online
              </p>
              <p className="text-xs text-zinc-500">Average response: 2 min</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xs font-semibold uppercase tracking-widest text-zinc-900 bg-white border border-zinc-300 px-4 py-2 rounded-lg transition-all"
          >
            View Feed →
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="grid grid-cols-3 gap-2 p-5"
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
              transition={{ delay: 1 + idx * 0.1 }}
              className="bg-white border border-neutral-200 rounded-xl p-3 text-center"
            >
              <p className="text-lg font-bold text-zinc-900 font-manrope">
                {stat.value}
              </p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
