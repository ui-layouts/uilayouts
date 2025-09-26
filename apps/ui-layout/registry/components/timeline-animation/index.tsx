"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Component } from "lucide-react";
import { useRef } from "react";
import { TimelineAnimation } from "@/components/ui/timeline-animation";

export const sectionData = [
  {
    id: "hero-section",
    name: "Hero Section",
    url: "/blocks/hero",
    blocks: 18,
    des: "Beautiful hero layouts to start your landing page.",
    imgSrc:
      "https://images.unsplash.com/photo-1755565776530-57cc00a760c9?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: "experience-section",
    name: "Experience Section",
    url: "/experience",
    blocks: 8,
    des: "Beautiful experience layouts to start your landing page.",
    imgSrc:
      "https://images.unsplash.com/photo-1755024324097-64832c4d2334?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: "faqs-section",
    name: "FAQ Section",
    url: "/blocks/faqs",
    blocks: 12,
    des: "Beautiful FAQ layouts to start your landing page.",
    imgSrc:
      "https://images.unsplash.com/photo-1754851541354-081c37f1316c?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: "about-section",
    name: "About Section",
    url: "/blocks/about",
    blocks: 7,
    des: "Beautiful about layouts to start your landing page.",
    imgSrc:
      "https://images.unsplash.com/photo-1743361657693-7b60363b6d16?q=80&w=627&auto=format&fit=crop",
  },
  {
    id: "feature-section",
    name: "Feature Section",
    url: "/blocks/feature",
    blocks: 14,
    des: "Beautiful feature layouts to start your landing page.",
    imgSrc:
      "https://images.unsplash.com/photo-1751097006268-ae4601fcb117?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: "pricing-section",
    name: "Pricing Section",
    url: "/blocks/pricing",
    blocks: 8,
    des: "Beautiful pricing layouts to start your landing page.",
    imgSrc:
      "https://images.unsplash.com/photo-1752440093057-1c188e7137e9?q=80&w=764&auto=format&fit=crop",
  },
  {
    id: "newsletter-section",
    name: "Newsletter Section",
    url: "/blocks/newsletter",
    blocks: 16,
    des: "Beautiful newsletter layouts to start your landing page.",
    imgSrc:
      "https://images.unsplash.com/photo-1751093383900-dbf2a79169f8?q=80&w=880&auto=format&fit=crop",
  },
  {
    id: "carousel-section",
    name: "Carousel Section",
    url: "/blocks/carousel",
    blocks: 6,
    des: "Beautiful carousel layouts to start your landing page.",
    imgSrc:
      "https://images.unsplash.com/photo-1751480433116-dc745e575a29?q=80&w=880&auto=format&fit=crop",
  },
  {
    id: "testimonial-section",
    name: "Testimonial Section",
    url: "/blocks/testimonial",
    blocks: 13,
    des: "Beautiful testimonials layouts to start your landing page.",
    imgSrc:
      "https://images.unsplash.com/photo-1654649451086-dd75d8170a27?q=80&w=687&auto=format&fit=crop",
  },
];

function Others1() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  return (
    <main ref={timelineRef}>
      <TimelineAnimation
        as="header"
        animationNum={1}
        timelineRef={timelineRef}
        className={cn(
          "w-full top-1.5 left-0 z-50 transition-all duration-300 relative md:px-0 px-2"
        )}
      >
        <div
          className={cn(
            "2xl:max-w-6xl max-w-5xl p-1 2xl:px-1 px-2 h-full relative mx-auto flex justify-between dark:bg-zinc-900/10 backdrop-blur-2xl bg-zinc-100/10 rounded-lg items-center"
          )}
        >
          <Link
            href="/"
            className="relative flex items-center gap-2 dark:bg-black/10 bg-gray-100/10 p-2 rounded-md"
          >
            <svg
              width="288"
              className="xl:w-32 w-28 h-full dark:fill-white fill-black"
              height="63"
              viewBox="0 0 288 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path d="M29.8927 13.0934L42.3657 17.3582C43.5794 17.7732 44.395 18.9141 44.395 20.1968V45.5696C44.395 46.5029 43.9759 47.3196 43.1376 48.0196C42.3552 48.6729 41.4052 48.9996 40.2875 48.9996H20.0848C18.7435 48.9996 17.5979 48.6029 16.6478 47.8096C15.6978 47.0163 15.2227 46.0829 15.2227 45.0096V41.5096C15.2227 40.5296 14.9433 39.6196 14.3844 38.7796C13.8256 37.9396 13.0432 37.2862 12.0372 36.8196C11.0872 36.3062 10.0254 36.0262 8.85176 35.9796H5.33096C4.04559 35.9796 2.92788 35.6062 1.97782 34.8595C1.02776 34.0662 0.552734 33.1095 0.552734 31.9895V14.5914C0.552734 8.74425 4.76702 3.74833 10.5305 2.76298L15.3818 1.93359L15.3066 34.7195C15.3066 35.0462 15.4183 35.3262 15.6419 35.5595C15.9213 35.7929 16.2566 35.9095 16.6478 35.9095H28.4676C28.8588 35.9095 29.1941 35.7929 29.4736 35.5595C29.753 35.3262 29.8927 35.0462 29.8927 34.7195V13.0934Z" />{" "}
              <path d="M15.0565 29.8506L0.554168 29.631L0.554168 3.33993C0.554168 2.43115 0.973309 1.63597 1.81159 0.95439C2.59399 0.318247 3.54405 0.000172377 4.66176 0.000172377L24.8644 0.000172377C26.2057 0.000172377 27.3514 0.386405 28.3014 1.15886C29.2515 1.93132 29.7265 2.8401 29.7265 3.88519V7.2931C29.7265 8.24732 30.0059 9.13338 30.5648 9.95128C31.1236 10.7692 31.906 11.4053 32.912 11.8597C33.862 12.3595 34.9239 12.6322 36.0975 12.6776H39.6183C40.9036 12.6776 42.0213 13.0411 42.9714 13.7681C43.9215 14.5406 44.3965 15.4721 44.3965 16.5626V32.9571C44.3965 41.1054 37.791 47.7109 29.6427 47.7109V47.7109L29.6427 13.9045C29.6427 13.5864 29.5309 13.3138 29.3073 13.0866C29.0279 12.8594 28.6926 12.7458 28.3014 12.7458H16.4816C16.0904 12.7458 15.7551 12.8594 15.4756 13.0866C15.1962 13.3138 15.0565 13.5864 15.0565 13.9045L15.0565 29.8506Z" />{" "}
              <path d="M66.7485 34.7H83.5165V46.6196H67.9645C67.5378 46.6196 67.1752 46.4708 66.8765 46.1734C66.5778 45.8759 66.4285 45.5147 66.4285 45.0898V38.4607C66.4285 37.4409 66.0658 36.5698 65.3405 35.8474C64.6152 35.125 63.7618 34.7638 62.7805 34.7638H58.0445C57.0632 34.7638 56.2098 34.4238 55.4845 33.7439C54.7592 33.0215 54.3965 32.1504 54.3965 31.1305V2.00098H65.6605V33.6164C65.6605 33.7864 65.7032 33.9564 65.7885 34.1264C65.8738 34.2963 66.0018 34.4451 66.1725 34.5726C66.3432 34.6575 66.5352 34.7 66.7485 34.7Z" />{" "}
              <path d="M113.814 18.4461C114.497 18.4461 115.115 18.6161 115.67 18.956C116.225 19.2535 116.673 19.6997 117.014 20.2946C117.355 20.847 117.526 21.4419 117.526 22.0793V46.6196H87.702C86.7207 46.6196 85.8673 46.2584 85.142 45.536C84.4167 44.8136 84.054 43.9637 84.054 42.9864V33.9351C84.054 32.9153 84.4167 32.0654 85.142 31.3855C85.8673 30.6631 86.7207 30.3019 87.702 30.3019H91.606C92.63 30.3019 93.5047 29.9407 94.23 29.2183C94.9553 28.4959 95.318 27.6248 95.318 26.6049V22.0793C95.318 21.102 95.6593 20.2521 96.342 19.5297C97.0673 18.8073 97.942 18.4461 98.966 18.4461H113.814ZM106.454 34.7638V30.3019H95.574C95.2753 30.3019 95.0193 30.4082 94.806 30.6206C94.5927 30.8331 94.486 31.0881 94.486 31.3855V33.6802C94.486 33.9776 94.5927 34.2326 94.806 34.4451C95.0193 34.6575 95.2753 34.7638 95.574 34.7638H106.454Z" />{" "}
              <path d="M142.564 18.3824H153.636V47.512C153.636 48.5318 153.273 49.4029 152.548 50.1253C151.823 50.8477 150.948 51.2089 149.924 51.2089H146.148C145.124 51.2089 144.228 51.5701 143.46 52.2925C142.735 53.0149 142.372 53.886 142.372 54.9059V59.3677C142.372 60.3876 142.009 61.2375 141.284 61.9174C140.601 62.6398 139.748 63.001 138.724 63.001H120.164V51.0814H141.476C141.775 51.0814 142.031 50.9752 142.244 50.7627C142.457 50.5503 142.564 50.2953 142.564 49.9978V46.6196H135.076C134.052 46.6196 133.177 46.2584 132.452 45.536C131.727 44.8136 131.364 43.9637 131.364 42.9864V39.7993C131.364 38.9069 131.151 38.0783 130.724 37.3134C130.297 36.5485 129.7 35.9536 128.932 35.5287C128.207 35.0612 127.396 34.8063 126.5 34.7638H123.812C122.831 34.7638 121.977 34.4238 121.252 33.7439C120.527 33.0215 120.164 32.1504 120.164 31.1305V18.3824H131.428V33.6164C131.428 33.9139 131.513 34.1689 131.684 34.3813C131.897 34.5938 132.153 34.7 132.452 34.7H141.476C141.775 34.7 142.031 34.5938 142.244 34.3813C142.457 34.1689 142.564 33.9139 142.564 33.6164V18.3824Z" />{" "}
              <path d="M187.12 18.4461C188.144 18.4461 189.019 18.8073 189.744 19.5297C190.47 20.2521 190.832 21.102 190.832 22.0793V42.9864C190.832 43.9637 190.47 44.8136 189.744 45.536C189.019 46.2584 188.144 46.6196 187.12 46.6196H161.008C160.027 46.6196 159.174 46.2584 158.448 45.536C157.723 44.8136 157.36 43.9637 157.36 42.9864V22.0793C157.36 21.102 157.723 20.2521 158.448 19.5297C159.174 18.8073 160.027 18.4461 161.008 18.4461H187.12ZM179.76 33.6802V31.3855C179.76 31.0881 179.654 30.8331 179.44 30.6206C179.227 30.4082 178.971 30.3019 178.672 30.3019H168.88C168.582 30.3019 168.326 30.4082 168.112 30.6206C167.899 30.8331 167.792 31.0881 167.792 31.3855V33.6802C167.792 33.9776 167.899 34.2326 168.112 34.4451C168.326 34.6575 168.582 34.7638 168.88 34.7638H178.672C178.971 34.7638 179.227 34.6575 179.44 34.4451C179.654 34.2326 179.76 33.9776 179.76 33.6802Z" />{" "}
              <path d="M215.784 18.3824H226.856V43.4963C226.856 44.3462 226.536 45.0898 225.896 45.7272C225.299 46.3221 224.573 46.6196 223.72 46.6196H208.296C207.272 46.6196 206.397 46.2584 205.672 45.536C204.947 44.8136 204.584 43.9637 204.584 42.9864V39.7993C204.584 38.9069 204.371 38.0783 203.944 37.3134C203.517 36.5485 202.92 35.9536 202.152 35.5287C201.427 35.0612 200.616 34.8063 199.72 34.7638H197.032C196.051 34.7638 195.197 34.4238 194.472 33.7439C193.747 33.0215 193.384 32.1504 193.384 31.1305V18.3824H204.648V33.6164C204.648 33.9139 204.733 34.1689 204.904 34.3813C205.117 34.5938 205.373 34.7 205.672 34.7H214.696C214.995 34.7 215.251 34.5938 215.464 34.3813C215.677 34.1689 215.784 33.9139 215.784 33.6164V18.3824Z" />{" "}
              <path d="M251.958 32.5328H263.03V42.9864C263.03 43.9637 262.667 44.8136 261.942 45.536C261.217 46.2584 260.342 46.6196 259.318 46.6196H244.47C243.446 46.6196 242.571 46.2584 241.846 45.536C241.121 44.8136 240.758 43.9637 240.758 42.9864V38.5245C240.758 37.5046 240.395 36.6335 239.67 35.9111C238.945 35.1462 238.07 34.7638 237.046 34.7638H233.206C232.225 34.7638 231.371 34.4238 230.646 33.7439C229.921 33.0215 229.558 32.1504 229.558 31.1305V2.00098H240.63V18.3824H249.91C250.209 18.3824 250.465 18.4886 250.678 18.7011C250.891 18.9136 250.998 19.1685 250.998 19.466V29.1546C250.998 29.452 250.891 29.707 250.678 29.9195C250.465 30.1319 250.209 30.2382 249.91 30.2382H240.63V33.6164C240.63 33.9139 240.737 34.1689 240.95 34.3813C241.163 34.5938 241.419 34.7 241.718 34.7H250.87C251.169 34.7 251.425 34.5938 251.638 34.3813C251.851 34.1689 251.958 33.9139 251.958 33.6164V32.5328Z" />{" "}
              <path d="M271.328 22.7168V14.7492H287.328V22.7168H279.328V30.6844H263.328V22.7168H271.328ZM287.328 38.652H279.328V30.6844H287.328V38.652ZM279.328 38.652V46.6196H263.328V38.652H279.328Z" />{" "}
            </svg>
          </Link>
          <div className="flex items-center gap-2">
            <a
              href="https://discord.gg/4bySmj75"
              target="_blank"
              className="dark:bg-black/20 bg-white/20 border dark:border-black/20 border-white/20 w-12 rounded-md h-11 flex-shrink-0 grid place-content-center"
              rel="noreferrer"
            >
              <svg
                viewBox="0 0 256 199"
                width="1em"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                className="w-6 h-6"
              >
                <path
                  d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
                  fill="#000000"
                />
              </svg>
            </a>
            <a
              href="http://github.com/naymurdev/uilayout"
              target="_blank"
              className="dark:bg-black/20 bg-white/20 border dark:border-black/20 border-white/20 w-12 rounded-md h-11 flex-shrink-0 grid place-content-center"
              rel="noreferrer"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 1024 1024"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(64)"
                  fill="#000000"
                />
              </svg>
            </a>
          </div>
        </div>
      </TimelineAnimation>
      <div className="lg:container lg:px-0 px-3 mx-auto mt-0 ">
        <div className="w-full ">
          <section className="xl:mr-0 mr-3 mt-16 w-full">
            <TimelineAnimation
              as="article"
              animationNum={2}
              timelineRef={timelineRef}
              customVariants={revealVariants}
              className="flex md:flex-row flex-col gap-4 justify-between mb-4 mt-0 rounded-lg dark:from-black/40 to-blue-100 to-100% from-zinc-100 border backdrop-blur-md p-6 2xl:w-[90%] mx-auto relative"
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 z-10 w-full h-full bg-[repeating-linear-gradient(135deg,#475aff33_0px_1px,transparent_1px_15px)] [mask-image:radial-gradient(ellipse_50%_135%_at_93%_0%,#000_55%,transparent_100%)]"></div>
              <div className="space-y-2 rounded-md dark:text-white text-black">
                <span className="text-sm text-gray-600">blocks/FAQs</span>
                <h1
                  className={cn(
                    "mb-0 flex scroll-m-20 not-prose items-center lg:text-3xl text-2xl gap-2 font-medium tracking-tight"
                  )}
                >
                  <div className="lg:w-10 w-8 lg:h-10  h-8 bg-primary grid place-content-center text-primary-foreground rounded-lg">
                    <Component />
                  </div>
                  FAQs
                </h1>
                <p className="sm:text-sm text-xs text-primary/70">
                  Beautiful FAQ layouts to start your landing page.
                </p>
              </div>
              <div className="text-right max-w-lg z-20 space-y-2">
                <p className="text-sm text-primary font-medium">
                  Get access to all premium blocks, lifetime updates, <br /> and
                  faster workflow — all in a single upgrade.
                </p>
                <a
                  href="https://pro.ui-layouts.com/"
                  target="_blank"
                  className="bg-blue-600 w-fit ml-auto text-primary-foreground shadow-md shadow-blue-500 px-4 py-2 rounded-lg hover:shadow-blue-600 transition flex items-center justify-center gap-2 text-white"
                  rel="noreferrer"
                >
                  Get the Pro{" "}
                  <img
                    src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif"
                    alt="🔥"
                    width="24"
                    height="24"
                  />
                </a>
                <p className="text-xs text-muted-foreground mt-1">
                  One-time payment. No subscriptions.
                </p>
              </div>
            </TimelineAnimation>
            <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6 py-16">
              {sectionData.map((block, index) => (
                <TimelineAnimation
                  as="a"
                  animationNum={2 + index}
                  timelineRef={timelineRef}
                  customVariants={revealVariants}
                  key={block.id}
                  href={`https://pro.ui-layouts.com/${block.url}`}
                  className="relative group no-underline  dark:bg-neutral-900 bg-neutral-200 sm:p-4 p-2 rounded-lg border dark:border-neutral-800 border-neutral-300"
                >
                  <Image
                    src={block.imgSrc}
                    alt={block.name}
                    width={400}
                    height={400}
                    className="rounded-lg w-full object-cover aspect-video"
                  />
                  <h3 className="mt-2  md:text-lg text-xs font-medium">
                    {block.name} ({block.blocks})
                  </h3>
                </TimelineAnimation>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Others1;