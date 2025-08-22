'use client'
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { ProgressiveBlur } from "@repo/ui";

export function OrganizationHero() {
  return (
    <section className=" min-h-screen relative pb-10 bg-[url('http://localhost:3000/shadow13.png')] bg-cover bg-center bg-no-repeat">

      <header className="flex gap-2 z-50 text-neutral-900 backdrop-blur-lg border border-gray-200/80 bg-white top-2 rounded-lg max-w-4xl items-center justify-between mx-auto px-3 p-2 sticky">
        <h1 className="text-xl uppercase font-bold">Logo</h1>
        <nav className="flex gap-4 font-medium">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Solutions</a>
          <a href="#">Resources</a>
          <a href="#">Blog</a>
        </nav>
        <button className="text-lg h-10 px-4 rounded-lg text-white flex items-center gap-2 bg-neutral-800 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-gradient-to-t before:from-neutral-800 before:to-neutral-500 before:rounded-t-lg  transition-all group">
          Log In
        </button>
      </header>
      <article className="text-neutral-800 py-32 w-fit max-w-5xl mx-auto text-center space-y-4 relative z-10">
        <div className="flex gap-2 items-center mb-4 bg-black text-white w-fit mx-auto py-1 px-1.5 text-sm rounded-md cursor-pointer">
          <span className="bg-blue-500 px-1 rounded-sm">NEW </span> Make your
          event hand-picked with Guest Genius
        </div>
        <h1 className="2xl:text-6xl text-5xl font-semibold text-gray-900 mb-6 capitalize ">
          Designed for organisers
          <br />
          <span className="pt-3 inline-block 2xl:text-8xl text-7xl">
            <span className="bg-gradient-to-b from-black to-black/40 bg-clip-text text-transparent">
              built to sell{" "}
            </span>
            <span className="text-blue-500 text-shadow capitalize bg-blue-500/20 backdrop-blur-md rounded-xl border-2 border-blue-300 px-2  inline-block">
              tickets
            </span>
          </span>
        </h1>
        <p className="2xl:max-w-3xl max-w-2xl mx-auto 2xl:text-lg">
          From intimate gatherings to large-scale events, our platform provides
          everything you need to create, promote, and manage successful events
          with ease.
        </p>
        <motion.div
          className="flex gap-2 mt-5 mx-auto w-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-white bg-gradient-to-t from-blue-500 to-blue-400 shadow-md shadow-blue-500 border border-blue-500 px-4 py-2 rounded-lg flex items-center gap-2">
              <Sparkles size={20} />
              Get started
            </button>
            <button className="bg-neutral-100 border border-neutral-200 text-black p-2 rounded-lg flex items-center gap-2 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)]">
              <img
                src="http://localhost:3000/naymur.png"
                className="w-8 h-8 rounded-full mr-2"
                alt=""
              />
              Book a call
            </button>
          </div>
        </motion.div>
      </article>
      <div className="gap-2 max-w-6xl mx-auto grid grid-cols-3">
        <figure className="p-2 bg-white rounded-lg">
          <div className="bg-gradient-to-t to-neutral-100 from-neutral-50 rounded-lg p-4 h-80 flex flex-col overflow-hidden relative">
            {/* Top Left Rotated Card */}
            <div className="flex gap-2 shrink-0 items-center bg-white justify-between w-[25rem] p-2 top-6 rounded-xl relative -left-36 rotate-6">
              <p>Host your dream event today</p>
              <button className="bg-blue-500 p-2 px-4 shadow-blue-600 shadow-lg rounded-lg text-white">
                Get Started
              </button>
            </div>

            {/* Top Right Rotated Card */}
            <div className="flex gap-4 shrink-0 items-center bg-white w-[25rem] p-2 top-6 rounded-xl relative -right-20 -rotate-6">
              <button className="bg-blue-500 p-2 px-4 shadow-blue-600 shadow-lg rounded-lg text-white">
                Plan Now
              </button>
              <p>Tools that make planning easy</p>
            </div>
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[75%] w-full"
              blurIntensity={0.5}
            />
            {/* Bottom Sticky Article */}
            <article className="text-gray-600 mt-auto relative text-sm">
              <span className="text-gray-500 font-semibold">STEP 1</span>
              <p className="pt-2">
                Start by creating your{" "}
                <span className="text-black font-semibold">
                  personalized event
                </span>
                . Choose a name, set the details, and you’re{" "}
                <span className="text-black font-semibold">ready to go!</span>
              </p>
            </article>
          </div>
        </figure>

        <figure className="p-2 bg-white rounded-lg">
          <div className="bg-gradient-to-t to-neutral-100 from-neutral-50 rounded-lg p-2 h-80 flex flex-col relative">
            <div className="flex gap-4 items-center bg-white py-1 px-2 rounded-lg w-[80%] mx-auto relative translate-y-5 -rotate-6">
              {/* Image Section */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-orange-500 rounded-xl overflow-hidden"></div>
              </div>
              <div className="flex-1 space-y-1 text-xs text-gray-500">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisx elit. Odit,
                  dolo?
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center bg-white py-1 px-2 rounded-lg w-[80%] mx-auto relative z-10 shadow-md  -translate-x-5 rotate-6">
              {/* Image Section */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-blue-500 rounded-xl overflow-hidden"></div>
              </div>
              <div className="flex-1 space-y-1 text-xs text-gray-500">
                <span>SASS</span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisx elit. Odit,
                  dolo?
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center bg-white py-1 px-2 rounded-lg w-[80%] mx-auto  -translate-y-5 -rotate-6">
              {/* Image Section */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-green-500 rounded-xl overflow-hidden"></div>
              </div>
              <div className="flex-1 space-y-1 text-xs text-gray-500">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisx elit. Odit,
                  dolo?
                </p>
              </div>
            </div>
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[75%] w-full"
              blurIntensity={0.5}
            />
            <article className="text-gray-600 mt-auto text-sm relative">
              <span>STEP 2</span>
              <p>
                Set up your{" "}
                <span className="text-black font-bold">event in minutes</span>,
                name it, drive it,
                <span className="text-black font-bold">done</span>
              </p>
            </article>
          </div>
        </figure>
        <figure className="p-2 bg-white rounded-lg">
          <div className="bg-gradient-to-t to-neutral-100 from-neutral-50 rounded-lg p-2 h-80 flex flex-col relative">
            <div className="flex justify-between absolute top-0 left-0 w-full items-end px-4 h-[75%]">
              <div className="h-[50%] w-12 bg-gradient-to-b from-gray-300 to-gray-100 rounded-lg"></div>
              <div className="h-[60%] w-12 bg-gradient-to-b from-gray-300 to-gray-100 rounded-lg"></div>
              <div className="h-[90%] w-12 bg-gradient-to-b from-blue-500 to-gray-100 rounded-lg"></div>
              <div className="h-[80%] w-12 bg-gradient-to-b from-gray-300 to-gray-100 rounded-lg"></div>
              <div className="h-[65%] w-12 bg-gradient-to-b from-gray-300 to-gray-100 rounded-lg"></div>
            </div>
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[50%] w-full"
              blurIntensity={3}
            />
            <article className="text-gray-600 mt-auto relative text-sm">
              <span>STEP 3</span>
              <p>
                Set up your{" "}
                <span className="text-black font-bold">event in minutes</span>,
                name it, drive it,
                <span className="text-black font-bold">done</span>
              </p>
            </article>
          </div>
        </figure>
      </div>
    </section>
  );
}

