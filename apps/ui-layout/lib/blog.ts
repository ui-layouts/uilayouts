export const blogCategories = ['Tutorials', 'UI Blocks', 'Design & Engineering', 'Guides & Collections'] as const;

export type BlogPost = {
  slug: string;
  title: string;
  category: (typeof blogCategories)[number];
  description: string;
  date: string;
  href: string;
  preview?: string;
};

export const blogPosts: readonly BlogPost[] = [
  {
    "slug": "liquid-glass-react",
    "title": "How to build an Apple-inspired liquid glass effect in React",
    "category": "Tutorials",
    "description": "Liquid glass is more than a translucent background: the surface needs to remain readable while the scenery behind it changes.",
    "date": "2026-11-28",
    "href": "/components/liquid-glass"
  },
  {
    "slug": "mac-genie-animation",
    "title": "Recreating the macOS Genie animation on the web",
    "category": "Tutorials",
    "description": "A typical minimize animation only scales a rectangle.",
    "date": "2026-11-28",
    "href": "/components/mac-genie"
  },
  {
    "slug": "progressive-blur-css",
    "title": "How to create progressive blur with CSS and React",
    "category": "Tutorials",
    "description": "A hard blur boundary can look like a separate strip pasted on an image.",
    "date": "2026-11-28",
    "href": "/components/blur-vignette"
  },
  {
    "slug": "image-reveal-animation",
    "title": "Building an interactive image reveal animation",
    "category": "Tutorials",
    "description": "An image reveal should feel like an image being uncovered, rather than an image moving into a changing box.",
    "date": "2026-11-28",
    "href": "/components/image-reveal"
  },
  {
    "slug": "animated-react-tabs",
    "title": "How to build animated tabs that feel natural",
    "category": "Tutorials",
    "description": "Animated tabs are useful when the selected state needs to be easy to track across nearby controls.",
    "date": "2026-11-28",
    "href": "/components/tabs"
  },
  {
    "slug": "dual-range-slider",
    "title": "Designing a dual-range slider for React filters",
    "category": "Tutorials",
    "description": "A dual-range slider represents two values, such as a price or temperature interval.",
    "date": "2026-11-28",
    "href": "/components/range-slider"
  },
  {
    "slug": "spotlight-card-css",
    "title": "Create cursor-following spotlight cards in React",
    "category": "Tutorials",
    "description": "A spotlight card draws attention to the area under a pointer without replacing the normal card hierarchy.",
    "date": "2026-11-28",
    "href": "/components/spotlight-cards"
  },
  {
    "slug": "image-mouse-trail",
    "title": "How to create an image mouse trail for a portfolio",
    "category": "Tutorials",
    "description": "An image trail can make a portfolio landing page feel tactile, but spawning an image on every pointer event quickly becomes noisy and costly.",
    "date": "2026-11-28",
    "href": "/components/image-mousetrail"
  },
  {
    "slug": "accessible-react-accordion",
    "title": "Build accessible animated accordions in React",
    "category": "Tutorials",
    "description": "Accordions trade vertical space for progressive disclosure.",
    "date": "2026-11-28",
    "href": "/components/accordion"
  },
  {
    "slug": "react-file-upload",
    "title": "Building a reliable drag-and-drop file upload in React",
    "category": "Tutorials",
    "description": "A good upload control gives immediate feedback without hiding the ordinary file picker.",
    "date": "2026-11-28",
    "href": "/components/file-upload"
  },
  {
    "slug": "saas-hero-section",
    "title": "How to design a SaaS hero section with React and Tailwind",
    "category": "UI Blocks",
    "description": "A SaaS hero should explain what the product does before showing off how it looks.",
    "date": "2026-11-28",
    "href": "/blocks/hero-section#hero-ai-value-proposition",
    "preview": "/preview/hero-section/hero-ai-value-proposition"
  },
  {
    "slug": "bento-feature-grid",
    "title": "Build a responsive bento feature grid with Tailwind CSS",
    "category": "UI Blocks",
    "description": "A bento feature grid creates a hierarchy among capabilities without forcing every card to have the same weight.",
    "date": "2026-11-28",
    "href": "/blocks/feature-section#feature-bento",
    "preview": "/preview/feature-section/feature-bento"
  },
  {
    "slug": "about-page-design",
    "title": "Designing an about section that tells a credible story",
    "category": "UI Blocks",
    "description": "An about section is an opportunity to explain why the organization exists and how it works, rather than repeat the hero headline.",
    "date": "2026-11-28",
    "href": "/blocks/about-section#about-mission",
    "preview": "/preview/about-section/about-mission"
  },
  {
    "slug": "team-section-react",
    "title": "Build a responsive team section for a modern website",
    "category": "UI Blocks",
    "description": "A team section introduces people who are accountable for the work.",
    "date": "2026-11-28",
    "href": "/blocks/team-section#team-classic",
    "preview": "/preview/team-section/team-classic"
  },
  {
    "slug": "stats-section-design",
    "title": "Designing a stats section that makes numbers meaningful",
    "category": "UI Blocks",
    "description": "A stats section communicates evidence, not decoration.",
    "date": "2026-11-28",
    "href": "/blocks/stats-section#stats-bento",
    "preview": "/preview/stats-section/stats-bento"
  },
  {
    "slug": "testimonial-section-design",
    "title": "Build a trustworthy testimonial section in React",
    "category": "UI Blocks",
    "description": "A testimonial should help a reader understand a real customer experience.",
    "date": "2026-11-28",
    "href": "/blocks/testimonial-section#testimonial-basic",
    "preview": "/preview/testimonial-section/testimonial-basic"
  },
  {
    "slug": "portfolio-experience-section",
    "title": "How to create a portfolio experience section",
    "category": "UI Blocks",
    "description": "A portfolio experience section is more useful when it explains the scope and impact of each role, rather than acting as a timeline of logos.",
    "date": "2026-11-28",
    "href": "/blocks/experience-section#portfolio-experience",
    "preview": "/preview/experience-section/portfolio-experience"
  },
  {
    "slug": "saas-pricing-section",
    "title": "How to build a clear SaaS pricing section in React",
    "category": "UI Blocks",
    "description": "A pricing block should make the cost and limitations of each plan easy to compare.",
    "date": "2026-11-28",
    "href": "/blocks/pricing-section#growth-plans",
    "preview": "/preview/pricing-section/growth-plans"
  },
  {
    "slug": "website-faq-section",
    "title": "Build a useful FAQ section with React and Tailwind",
    "category": "UI Blocks",
    "description": "An FAQ section answers questions that would otherwise interrupt a user's decision.",
    "date": "2026-11-28",
    "href": "/blocks/faq-section#faq-tabbed-explorer",
    "preview": "/preview/faq-section/faq-tabbed-explorer"
  },
  {
    "slug": "website-footer-design",
    "title": "Design a responsive website footer with React and Tailwind",
    "category": "UI Blocks",
    "description": "A footer is a second navigation opportunity after the main content.",
    "date": "2026-11-28",
    "href": "/blocks/footer-section#footer-detailed",
    "preview": "/preview/footer-section/footer-detailed"
  },
  {
    "slug": "nested-border-radius",
    "title": "The geometry of nested border radii in UI design",
    "category": "Design & Engineering",
    "description": "When an inset surface follows the contour of its outer shell, choosing independent corner radii can create a visibly uneven gap.",
    "date": "2026-11-28",
    "href": "/components/gradient-border"
  },
  {
    "slug": "landing-page-sections",
    "title": "Which UI blocks do you need for a SaaS landing page?",
    "category": "Guides & Collections",
    "description": "A landing page is a sequence of questions a visitor needs answered.",
    "date": "2026-11-28",
    "href": "/blocks/hero-section#hero-ai-infrastructure",
    "preview": "/preview/hero-section/hero-ai-infrastructure"
  }
];

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);

export function relatedBlogPosts(post: BlogPost) {
  const others = blogPosts.filter((item) => item.slug !== post.slug);
  return [...others.filter((item) => item.category === post.category), ...others.filter((item) => item.category !== post.category)].slice(0, 3);
}
