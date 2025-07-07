'use client'
import {
  ArrowLeft,
  Play,
  Star,
  Users,
  Zap,
  ArrowRight,
  Sparkles,
  Rocket,
  CheckCircle,
} from 'lucide-react'
import { motion } from 'motion/react'

export const AboutSections1: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="border rounded-xl overflow-hidden">
        <div className="bg-gray-50 px-6 py-3 border-b">
          <h3 className="font-semibold text-gray-900">Mission / Vision</h3>
        </div>
        <div className="p-8 lg:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We believe technology should empower everyone to create, innovate,
              and solve meaningful problems. Our mission is to democratize
              access to powerful tools that were once only available to large
              corporations.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  Pushing boundaries with cutting-edge technology
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Accessibility
                </h3>
                <p className="text-gray-600">
                  Making powerful tools available to everyone
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Impact
                </h3>
                <p className="text-gray-600">
                  Creating meaningful change in the world
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
