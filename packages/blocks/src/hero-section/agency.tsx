'use client'
import { Send, Sparkles } from "lucide-react";
import { ProgressiveBlur } from "@repo/ui";
import { LiquidGlassCard,AnimatedTooltip } from "@repo/ui";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=350&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=350&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=350&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=350&q=60",
  },

];

export function AgencyHero() {
  return (
    <section className=" min-h-screen relative pb-10 bg-cover bg-center bg-no-repeat">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          width: "100%",
          maxHeight: "100vh",
          objectFit: "cover",
        }}
      >
        <source
          src="https://videos.pexels.com/video-files/9318313/9318313-uhd_2560_1440_24fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Header */}
      <header className="relative z-10 px-0 py-4 max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">
          <div className="flex gap-10 items-center">
            <div className="text-2xl font-semibold text-white">UI-Layouts</div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-50 hover:text-white hover:bg-white/10 backdrop-blur-lg p-1 px-2 inline-block rounded-lg transition-colors duration-200"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-gray-50 hover:text-white hover:bg-white/10 backdrop-blur-lg p-1 px-2 inline-block rounded-lg transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-50 hover:text-white hover:bg-white/10 backdrop-blur-lg p-1 px-2 inline-block rounded-lg transition-colors duration-200"
              >
                Process
              </a>
              <a
                href="#"
                className="text-gray-50 hover:text-white hover:bg-white/10 backdrop-blur-lg p-1 px-2 inline-block rounded-lg transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-50 hover:text-white hover:bg-white/10 backdrop-blur-lg p-1 px-2 inline-block rounded-lg transition-colors duration-200"
              >
                Testimonials
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-sky-500 p-2 text-white rounded-full">
              <Send className="w-5 h-5" />
            </div>
            <button className="bg-white/10 text-white backdrop-blur-sm border border-white/20 px-6 py-2 rounded-full hover:bg-white/20 transition-all duration-200">
              Book a call
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto xl:px-0 px-5">
        <article className="max-w-2xl text-white space-y-4 pt-14">
          {/* Metric Badge */}
          <div className="flex items-center space-x-3">
            <span className="relative flex size-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex size-4 rounded-full bg-blue-600"></span>
            </span>
            <span className="text-lg">
              $3.8M+ Generated in direct sales for clients
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-6xl font-semibold  leading-tight">
            Design built to drive revenue, earn trust and raise rounds.
          </h1>
        </article>
        <div className="grid lg:grid-cols-2 gap-12 items-end ">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Subheading */}
            <p className="text-xl text-white leading-relaxed max-w-lg">
              We turn your vision into a product, site or brand that actually
              converts,{" "}
              <span className="text-gray-200">
                so you grow faster and scale with confidence.
              </span>
            </p>

            {/* CTA Button */}
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Book your free strategy call
            </button>
          </div>

          {/* Right Content - Testimonial Card */}
          <div className="lg:mt-24">
            <LiquidGlassCard
              glowIntensity="md"
              shadowIntensity="sm"
              borderRadius="12px"
              blurIntensity="sm"
              className="p-4 ml-auto w-[28rem]"
            >
              {/* Avatar Stack */}
              <div className="flex items-center gap-10 mb-6">
                <div className="flex flex-row items-center justify-start ">
                  <AnimatedTooltip items={people} />
                </div>
                <span className="text-white font-medium text-sm">
                  Trusted by 80+ high growth start-ups
                </span>
              </div>

              <div className="p-4 rounded-lg bg-white/10">
                {/* Testimonial */}
                <blockquote className="text-white text-sm leading-relaxed">
                  "In just 6 weeks Nuova transformed our MVP into a modern,
                  intuitive platform with a clear identity helping us attract
                  the right customers and investors."
                </blockquote>

                {/* Attribution */}
                <cite className="text-white pt-2 inline-block font-semibold">
                  Naymur Rahman, CEO @ui-layouts
                </cite>
              </div>
            </LiquidGlassCard>
          </div>
        </div>
      </div>

      {/* Company Logos Section */}
      <div className="mt-28 mb-12 text-white max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-8 ">
          <div className="flex items-center space-x-2">
            <span className="text-lg">5.0</span>
            <span className="">rating on Clutch</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
              ))}
            </div>
          </div>

          <div className="text-lg font-semibold">Nation</div>
          <div className="text-lg font-semibold">Jumexo</div>
          <div className="text-lg font-semibold">Revocalize</div>
          <div className="text-lg font-semibold">NARADA</div>
          <div className="text-lg font-semibold">AgentBoost</div>
        </div>
      </div>
      <ProgressiveBlur
        className="pointer-events-none absolute bottom-0 left-0 h-[25%] w-full"
        blurIntensity={0.5}
      />
    </section>
  );
}
