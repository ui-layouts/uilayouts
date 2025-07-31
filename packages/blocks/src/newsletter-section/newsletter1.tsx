'use client'
import type React from 'react'
import { useState } from 'react'
import { motion } from 'motion/react'
import { CheckCircleIcon, XCircleIcon, Loader2Icon } from 'lucide-react'

interface NewsletterSectionProps {
  title?: string
  subtitle?: string
  placeholder?: string
  buttonText?: string
}

export default function NewsletterSection({
  title = 'Stay in the loop with our latest updates',
  subtitle = 'Join our newsletter to receive exclusive insights, product launches, and special offers — straight to  your inbox.',
  placeholder = 'Enter your email address',
  buttonText = 'Subscribe',
}: NewsletterSectionProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{
    text: string
    type: 'success' | 'error'
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setMessage({ text: 'Email address is required', type: 'error' })
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setMessage({ text: 'Please enter a valid email address', type: 'error' })
      return
    }
    setIsLoading(true)
    setMessage(null)
    //  api call
    setTimeout(() => {
      setMessage({
        text: "You're all set! Expect our updates in your inbox.",
        type: 'success',
      })
      setEmail('')
      setIsLoading(false)
    }, 1500)
  }

  return (
    <section
      className="
        min-h-[75vh] flex items-center justify-center px-4 py-20
        bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50
        dark:from-gray-950 dark:via-gray-900 dark:to-black
        transition-colors duration-500
        relative overflow-hidden
      "
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute -top-60 -right-60 w-[400px] h-[400px] bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl dark:opacity-0"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
          className="absolute -bottom-60 -left-60 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-200/40 to-pink-200/40 rounded-full blur-3xl dark:opacity-0"
        />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 dark:opacity-0" />
      </div>

      <div className="w-full max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            p-8 sm:p-10 rounded-3xl 
            bg-white/20 dark:bg-transparent 
            backdrop-blur-xl 
            border border-gray-200/50 dark:border-gray-800
            shadow-2xl shadow-blue-500/15 dark:shadow-none
            ring-1 ring-gray-900/5 dark:ring-0
            relative overflow-hidden
          "
        >
          {/* Heading */}
          <h1
            className="
            text-4xl sm:text-5xl lg:text-6xl font-extrabold 
            bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900
            dark:from-white dark:via-gray-100 dark:to-gray-300
            bg-clip-text text-transparent
            mb-6 leading-tight tracking-tight font-Monaco
          "
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            className="
            text-lg sm:text-xl 
            text-gray-700 dark:text-gray-400 
            mb-12 max-w-xl mx-auto leading-relaxed font-mono
          "
          >
            {subtitle}
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto group"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="
                flex-1 px-6 py-4
                bg-white dark:bg-gray-800/60
                border-2 border-gray-200 dark:border-gray-700
                rounded-xl 
                text-gray-900 dark:text-white
                placeholder-gray-500 dark:placeholder-gray-400
                focus:outline-none 
                focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-indigo-500/20
                focus:border-blue-500 dark:focus:border-indigo-500
                transition-all duration-200 
                shadow-lg shadow-gray-200/50 dark:shadow-none
                group-focus-within:shadow-xl group-focus-within:shadow-blue-300/30 dark:group-focus-within:shadow-none
              "
              disabled={isLoading}
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="
    w-[150px] /* <-- Fixed width */
    px-8 py-4
    bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
    hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700
    dark:from-indigo-500 dark:to-purple-600
    dark:hover:from-indigo-600 dark:hover:to-purple-700
    text-white font-semibold rounded-xl
    shadow-lg shadow-blue-500/25 dark:shadow-md
    hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-lg
    transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
    ring-2 ring-blue-500/20 dark:ring-0
    flex items-center justify-center gap-2
  "
            >
              {isLoading ? (
                <>
                  <Loader2Icon className="w-5 h-5 animate-spin" />
                  <span>Subscribing...</span>
                </>
              ) : (
                buttonText
              )}
            </motion.button>
          </form>

          {/* Message */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }} // Added exit animation
              transition={{ duration: 0.3 }}
              className={`
                mt-6 text-sm font-medium px-4 py-3 rounded-xl flex items-center justify-center gap-2
                ${
                  message.type === 'success'
                    ? 'text-green-700 bg-green-50 border border-green-200 dark:text-green-400 dark:bg-green-900/20 dark:border-green-800'
                    : 'text-red-700 bg-red-50 border border-red-200 dark:text-red-400 dark:bg-red-900/20 dark:border-red-800'
                }
              `}
            >
              {message.type === 'success' ? (
                <CheckCircleIcon className="w-5 h-5" />
              ) : (
                <XCircleIcon className="w-5 h-5" />
              )}
              {message.text}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
