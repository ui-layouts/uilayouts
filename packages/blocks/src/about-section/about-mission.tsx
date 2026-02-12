'use client'
import { Button } from '@repo/shadcn'
import { ChevronDown, Atom, Clapperboard, Columns3 } from 'lucide-react'

export const AboutMission = () => {
  return (
    <section className="min-h-screen overflow-hidden bg-linear-to-br dark:from-neutral-800 from-slate-50 to-blue-50 dark:to-neutral-950">
      <div className="py-20 relative flex flex-col justify-center items-center gap-y-8 z-10">
        <span>ABOUT US</span>
        <span className="text-6xl max-w-3xl mx-auto text-center font-medium">
          We are driven by the vision of sustainable future
        </span>
        <Button className="flex gap-2 items-center border-2 backdrop-blur-md border-black rounded-full p-2 px-3 cursor-pointer">
          Scroll Down <ChevronDown />
        </Button>
        <div className="absolute bottom-0 left-0 right-0 top-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[48px_50px] mask-[radial-gradient(ellipse_25%_30%_at_50%_50%,#000_65%,transparent_110%)]"></div>
      </div>

      <div className="p-8 lg:p-12">
        <div className="max-w-5xl mx-auto md:flex text-left gap-10">
          <h2 className="text-3xl lg:text-4xl lg:w-72 w-52 uppercase font-medium mb-8 shrink-0">
            Our Mission
          </h2>
          <div className="">
            <p className="text-xl dark:text-neutral-400 text-neutral-600 mb-12 leading-relaxed">
              We believe technology should empower everyone to create, innovate,
              and solve meaningful problems. Our mission is to democratize
              access to powerful tools that were once only available to large
              corporations.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 dark:bg-blue-950/50 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Atom className="text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold dark:text-neutral-200 text-neutral-900 mb-2">
                  Innovation
                </h3>
                <p className="text-neutral-600">
                  Pushing boundaries with cutting-edge technology
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 dark:bg-green-950/50 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Columns3 className="text-green-500" />
                </div>
                <h3 className="text-xl font-semibold dark:text-neutral-200 text-neutral-900 mb-2">
                  Accessibility
                </h3>
                <p className="text-neutral-600">
                  Making powerful tools available to everyone
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 dark:bg-purple-950/50 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clapperboard className="text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold dark:text-neutral-200 text-neutral-900 mb-2">
                  Impact
                </h3>
                <p className="text-neutral-600">
                  Creating meaningful change in the world
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
