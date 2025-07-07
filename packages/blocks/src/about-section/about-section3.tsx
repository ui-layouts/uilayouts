'use client'
import { MapPin } from 'lucide-react'

export const AboutSections3: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Enhanced Navigation */}
      <section className="border rounded-xl overflow-hidden">
        <div className="bg-gray-50 px-6 py-3 border-b">
          <h3 className="font-semibold text-gray-900">Company Intro</h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Building the Future Since 2020
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              What started as a simple idea in a garage has grown into a global
              platform serving millions of users worldwide. We've been on an
              incredible journey of growth, innovation, and impact.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to excellence and user-first approach has earned us
              recognition from industry leaders and the trust of companies
              ranging from startups to Fortune 500 enterprises.
            </p>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
            <div className="text-gray-600">Founded in 2020</div>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10M+</h3>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-600">Countries Served</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">$100M+</h3>
              <p className="text-gray-600">Revenue Generated for Customers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
