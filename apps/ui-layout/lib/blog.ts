export const blogCategories = ['Tutorials', 'UI Blocks', 'Design & Engineering', 'Guides & Collections'] as const;

export type BlogPost = {
  slug: string;
  title: string;
  category: (typeof blogCategories)[number];
  description: string;
  date: string;
  href: string;
  preview?: string;
  showArticleCover?: boolean;
};

export const blogPosts: readonly BlogPost[] = [
  {
    "slug": "liquid-glass-react",
    "title": "How to build an Apple-inspired liquid glass effect in React",
    "category": "Tutorials",
    "description": "See how LiquidGlassCard layers SVG displacement, backdrop blur and edge light. Tune the effect in a live React example.",
    "date": "2026-11-28",
    "href": "/components/liquid-glass",
    "showArticleCover": false
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
    "title": "How to Design a High-Converting SaaS Hero Section with React and Tailwind CSS",
    "category": "UI Blocks",
    "description": "A SaaS hero should explain what the product does before showing off how it looks.",
    "date": "2026-11-28",
    "href": "/blocks/hero-section#hero-ai-value-proposition",
    "preview": "/preview/hero-section/hero-ai-value-proposition"
  },
  {
    "slug": "bento-feature-grid",
    "title": "How to Build a Responsive Bento Grid Feature Section with Tailwind CSS",
    "category": "UI Blocks",
    "description": "A bento feature grid creates a hierarchy among capabilities without forcing every card to have the same weight.",
    "date": "2026-11-28",
    "href": "/blocks/feature-section#feature-bento",
    "preview": "/preview/feature-section/feature-bento"
  },
  {
    "slug": "about-page-design",
    "title": "How to Design a Modern About Us Section for a Website",
    "category": "UI Blocks",
    "description": "An about section is an opportunity to explain why the organization exists and how it works, rather than repeat the hero headline.",
    "date": "2026-11-28",
    "href": "/blocks/about-section#about-mission",
    "preview": "/preview/about-section/about-mission"
  },
  {
    "slug": "team-section-react",
    "title": "How to Build a Responsive Team Section in React and Tailwind CSS",
    "category": "UI Blocks",
    "description": "A team section introduces people who are accountable for the work.",
    "date": "2026-11-28",
    "href": "/blocks/team-section#team-classic",
    "preview": "/preview/team-section/team-classic"
  },
  {
    "slug": "stats-section-design",
    "title": "How to Design a Website Statistics Section with Clear, Meaningful Numbers",
    "category": "UI Blocks",
    "description": "A stats section communicates evidence, not decoration.",
    "date": "2026-11-28",
    "href": "/blocks/stats-section#stats-bento",
    "preview": "/preview/stats-section/stats-bento"
  },
  {
    "slug": "testimonial-section-design",
    "title": "How to Build a Customer Testimonial Section in React",
    "category": "UI Blocks",
    "description": "A testimonial should help a reader understand a real customer experience.",
    "date": "2026-11-28",
    "href": "/blocks/testimonial-section#testimonial-basic",
    "preview": "/preview/testimonial-section/testimonial-basic"
  },
  {
    "slug": "portfolio-experience-section",
    "title": "How to Build a Work Experience Timeline for a Portfolio Website",
    "category": "UI Blocks",
    "description": "A portfolio experience section is more useful when it explains the scope and impact of each role, rather than acting as a timeline of logos.",
    "date": "2026-11-28",
    "href": "/blocks/experience-section#portfolio-experience",
    "preview": "/preview/experience-section/portfolio-experience"
  },
  {
    "slug": "saas-pricing-section",
    "title": "How to Build a SaaS Pricing Table with React and Tailwind CSS",
    "category": "UI Blocks",
    "description": "A pricing block should make the cost and limitations of each plan easy to compare.",
    "date": "2026-11-28",
    "href": "/blocks/pricing-section#growth-plans",
    "preview": "/preview/pricing-section/growth-plans"
  },
  {
    "slug": "website-faq-section",
    "title": "How to Build a Responsive FAQ Section for a SaaS Landing Page",
    "category": "UI Blocks",
    "description": "An FAQ section answers questions that would otherwise interrupt a user's decision.",
    "date": "2026-11-28",
    "href": "/blocks/faq-section#faq-tabbed-explorer",
    "preview": "/preview/faq-section/faq-tabbed-explorer"
  },
  {
    "slug": "website-footer-design",
    "title": "How to Build a Responsive Website Footer with React and Tailwind CSS",
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
  },
  {
    "slug": "foldable-iphone-mockup-react",
    "title": "How to Build a 3D Foldable iPhone Mockup in React",
    "category": "Tutorials",
    "description": "A folding device mockup makes a product screenshot part of the interaction instead of a flat image.",
    "date": "2026-11-28",
    "href": "/components/iphone-duo"
  },
  {
    "slug": "react-drag-and-drop-dashboard",
    "title": "How to Build a Drag-and-Drop Dashboard with React and Swapy",
    "category": "Tutorials",
    "description": "Rearrange dashboard widgets without implementing a collision engine from scratch.",
    "date": "2026-11-28",
    "href": "/components/swapy"
  },
  {
    "slug": "animated-react-dialog",
    "title": "How to Build an Animated React Dialog with Motion",
    "category": "Tutorials",
    "description": "A dialog focuses attention on one decision without losing the context of the page behind it.",
    "date": "2026-11-28",
    "href": "/components/dialog"
  },
  {
    "slug": "react-color-picker-hex",
    "title": "Build a React Color Picker with HEX, HSV and an Eyedropper",
    "category": "Tutorials",
    "description": "A color picker needs to synchronize its visual selection and the value an application actually saves.",
    "date": "2026-11-28",
    "href": "/components/color-picker"
  },
  {
    "slug": "creative-animated-buttons-react",
    "title": "Creative CSS and React Button Hover Effects for Modern Websites",
    "category": "Tutorials",
    "description": "An animated button should clarify its affordance rather than disguise its label.",
    "date": "2026-11-28",
    "href": "/components/buttons"
  },
  {
    "slug": "css-noise-texture-background",
    "title": "How to Add a Subtle Noise Texture to CSS Backgrounds in React",
    "category": "Tutorials",
    "description": "Noise breaks up flat color and gradient banding without competing with foreground content.",
    "date": "2026-11-28",
    "href": "/components/noise"
  },
  {
    "slug": "interactive-3d-globe-react",
    "title": "How to Build an Interactive 3D Globe in React with Cobe",
    "category": "Tutorials",
    "description": "A globe can communicate geographic presence without loading a complete mapping interface.",
    "date": "2026-11-28",
    "href": "/components/globe"
  },
  {
    "slug": "animated-website-footer-react",
    "title": "How to Create an Animated Logo Footer in React",
    "category": "Tutorials",
    "description": "An animated footer gives a page a memorable ending without interrupting the main navigation.",
    "date": "2026-11-28",
    "href": "/components/footers"
  },
  {
    "slug": "react-donation-support-button",
    "title": "Build a Creative Buy Me a Coffee Support Button in React",
    "category": "Tutorials",
    "description": "A sponsorship button gives readers a clear way to support an independent project.",
    "date": "2026-11-28",
    "href": "/components/buy-me-coffee"
  },
  {
    "slug": "draggable-items-motion-react",
    "title": "How to Make Draggable Cards and Items in React with Motion",
    "category": "Tutorials",
    "description": "Draggable cards add direct manipulation to an otherwise static canvas.",
    "date": "2026-11-28",
    "href": "/components/drag-items"
  },
  {
    "slug": "webgl-image-ripple-effect-react",
    "title": "How to Create a Water Ripple Image Effect with React Three Fiber",
    "category": "Tutorials",
    "description": "A water ripple makes an image react to the pointer through a displacement field rather than moving the whole image.",
    "date": "2026-11-28",
    "href": "/components/image-ripple-effect"
  },
  {
    "slug": "animated-3d-blob-react-three-fiber",
    "title": "Build an Organic Animated 3D Blob with React Three Fiber",
    "category": "Tutorials",
    "description": "An organic blob adds a sculptural visual to a hero without needing a video file.",
    "date": "2026-11-28",
    "href": "/components/r3f-blob"
  },
  {
    "slug": "animated-mesh-gradient-react",
    "title": "How to Create Animated Mesh Gradient Backgrounds in React",
    "category": "Tutorials",
    "description": "Mesh gradients create soft color transitions that feel less linear than a two-stop CSS gradient.",
    "date": "2026-11-28",
    "href": "/components/mesh-gradients"
  },
  {
    "slug": "animated-number-counter-react",
    "title": "How to Animate Numbers and Counters in React with Number Flow",
    "category": "Tutorials",
    "description": "A rolling number transition helps people notice a changing value without losing its meaning.",
    "date": "2026-11-28",
    "href": "/components/motion-number"
  },
  {
    "slug": "animated-liquid-gradient-button-react",
    "title": "How to Build an Animated Liquid Gradient Button in React and Tailwind CSS",
    "category": "Tutorials",
    "description": "A liquid gradient border creates a flowing color highlight around a button; it is the effect behind UI Layouts' GitHub-style button, distinct from our Liquid Glass material.",
    "date": "2026-11-28",
    "href": "/components/liquid-gradient"
  },
  {
    "slug": "password-input-strength-react",
    "title": "Build a Password Input with Show/Hide and Strength Feedback in React",
    "category": "Tutorials",
    "description": "Password feedback should help users choose a strong password without collecting unnecessary personal information.",
    "date": "2026-11-28",
    "href": "/components/password"
  },
  {
    "slug": "react-tags-input-chips",
    "title": "How to Build a YouTube-Style Tags Input in React",
    "category": "Tutorials",
    "description": "A tags input turns free text into a manageable list of chips for topics, skills or labels.",
    "date": "2026-11-28",
    "href": "/components/tags-input"
  },
  {
    "slug": "international-phone-number-input-react",
    "title": "Build an International Phone Number Input with Country Codes in React",
    "category": "Tutorials",
    "description": "International phone inputs need to accommodate different country formats without assuming every number has the same length.",
    "date": "2026-11-28",
    "href": "/components/phone-input"
  },
  {
    "slug": "react-date-time-picker",
    "title": "How to Build a Date and Time Picker in React with shadcn/ui",
    "category": "Tutorials",
    "description": "A date-time picker makes scheduling easier when its time-zone assumptions are explicit.",
    "date": "2026-11-28",
    "href": "/components/datetime-picker"
  },
  {
    "slug": "searchable-multi-select-react",
    "title": "Build a Searchable Multi-Select Dropdown with React and shadcn/ui",
    "category": "Tutorials",
    "description": "A searchable multi-select helps users choose several values from a long list without losing context.",
    "date": "2026-11-28",
    "href": "/components/multi-selector"
  },
  {
    "slug": "css-clip-path-image-shapes",
    "title": "How to Create Custom Image Shapes with CSS Clip-Path and SVG",
    "category": "Tutorials",
    "description": "Clipping lets a rectangular image occupy a custom silhouette without exporting a different raster for every breakpoint.",
    "date": "2026-11-28",
    "href": "/components/clip-path"
  },
  {
    "slug": "svg-image-masking-react",
    "title": "How to Mask Images with SVG Shapes in React and CSS",
    "category": "Tutorials",
    "description": "An image mask controls visibility through alpha or luminance rather than just defining a hard geometric edge.",
    "date": "2026-11-28",
    "href": "/components/image-masking"
  },
  {
    "slug": "css-video-masking-react",
    "title": "How to Create SVG and Text-Masked Videos in React",
    "category": "Tutorials",
    "description": "A video mask lets motion fill a shape or lettering instead of a conventional rectangular player.",
    "date": "2026-11-28",
    "href": "/components/video-masking"
  },
  {
    "slug": "animated-hover-cards-react",
    "title": "How to Design Interactive Hover Cards in React and Tailwind CSS",
    "category": "Tutorials",
    "description": "A card can reveal a secondary visual on hover while its main message remains stable.",
    "date": "2026-11-28",
    "href": "/components/hover-cards"
  },
  {
    "slug": "react-ecommerce-product-cards",
    "title": "How to Build Modern Ecommerce Product Cards with React and Tailwind",
    "category": "Tutorials",
    "description": "A product card should let customers compare items before they visit a detail page.",
    "date": "2026-11-28",
    "href": "/components/product-cards"
  },
  {
    "slug": "scroll-timeline-animation-react",
    "title": "How to Create a Scroll-Triggered Timeline Animation in React",
    "category": "Tutorials",
    "description": "A timeline makes an ordered process easier to understand when its animation follows the content sequence.",
    "date": "2026-11-28",
    "href": "/components/timeline-animation"
  },
  {
    "slug": "react-scroll-reveal-animation",
    "title": "How to Animate Elements on Scroll in React with Motion",
    "category": "Tutorials",
    "description": "Scroll reveals help a page introduce content gradually, but must not delay reading or navigation.",
    "date": "2026-11-28",
    "href": "/components/scroll-animation"
  },
  {
    "slug": "scroll-linked-text-animation-react",
    "title": "How to Create Scroll-Linked Text Animations in React",
    "category": "Tutorials",
    "description": "Scroll-linked text moves in relation to the user's progress rather than running on an unrelated timer.",
    "date": "2026-11-28",
    "href": "/components/scroll-text"
  },
  {
    "slug": "scroll-velocity-marquee-react",
    "title": "Build a Scroll-Velocity Marquee with React and Motion",
    "category": "Tutorials",
    "description": "A velocity-reactive marquee speeds up and can change direction as the visitor scrolls.",
    "date": "2026-11-28",
    "href": "/components/scroll-text-marquee"
  },
  {
    "slug": "text-scramble-animation-react",
    "title": "How to Build a Text Scramble and Reveal Animation in React",
    "category": "Tutorials",
    "description": "A text scramble briefly replaces characters before resolving into a stable phrase.",
    "date": "2026-11-28",
    "href": "/components/randomized-text-effect"
  },
  {
    "slug": "progressive-carousel-react",
    "title": "Build a Progressive Carousel with Animated Slide Indicators in React",
    "category": "Tutorials",
    "description": "A progressive carousel communicates which item is active and how far an automatic transition has progressed.",
    "date": "2026-11-28",
    "href": "/components/progressive-carousel"
  },
  {
    "slug": "interactive-grid-background-react",
    "title": "How to Build an Interactive Grid Background with Hover Effects in React",
    "category": "Tutorials",
    "description": "An interactive grid of blocks can turn a quiet background into a subtle pointer-driven texture.",
    "date": "2026-11-28",
    "href": "/components/blocks"
  },
  {
    "slug": "animated-beam-integration-diagram-react",
    "title": "How to Build Animated Integration Beams and Connection Lines in React",
    "category": "Tutorials",
    "description": "Animated beams can explain how a product connects to other tools without drawing a separate video.",
    "date": "2026-11-28",
    "href": "/components/animated-beam"
  },
  {
    "slug": "animated-image-video-modal-react",
    "title": "Build an Animated Image and Video Lightbox in React",
    "category": "Tutorials",
    "description": "A media lightbox gives an image or video room to be viewed without navigating away.",
    "date": "2026-11-28",
    "href": "/components/media-modal"
  },
  {
    "slug": "linear-style-expandable-card-react",
    "title": "How to Create a Linear-Style Expanding Card Modal in React",
    "category": "Tutorials",
    "description": "An expanding card creates a continuous transition from a compact item to a detailed view.",
    "date": "2026-11-28",
    "href": "/components/linear-modal"
  },
  {
    "slug": "react-image-gallery-lightbox",
    "title": "Build an Animated Photo Gallery with a React Lightbox",
    "category": "Tutorials",
    "description": "A gallery lightbox gives readers a closer look at a photograph while preserving their position in the collection.",
    "date": "2026-11-28",
    "href": "/components/gallery-modal"
  },
  {
    "slug": "responsive-dialog-drawer-react",
    "title": "How to Build a Responsive Dialog and Mobile Bottom Sheet in React",
    "category": "Tutorials",
    "description": "A desktop dialog and a mobile bottom sheet can present the same task in forms that suit each viewport.",
    "date": "2026-11-28",
    "href": "/components/responsive-modal"
  },
  {
    "slug": "react-drawer-sidebar-bottom-sheet",
    "title": "Build a Multi-Directional Drawer with React and Vaul",
    "category": "Tutorials",
    "description": "A directional drawer can reveal navigation or contextual content from the edge that best fits the layout.",
    "date": "2026-11-28",
    "href": "/components/directional-drawer"
  },
  {
    "slug": "animated-sidebar-drawer-motion",
    "title": "How to Build an Animated Sidebar Drawer with React and Motion",
    "category": "Tutorials",
    "description": "A motion drawer lets a navigation or settings panel enter from the edge while preserving page context.",
    "date": "2026-11-28",
    "href": "/components/motion-drawer"
  },
  {
    "slug": "responsive-navbar-mobile-menu-react",
    "title": "How to Build a Responsive Navbar with a Mobile Drawer in React",
    "category": "Tutorials",
    "description": "A responsive header keeps the same navigation destinations available as space changes.",
    "date": "2026-11-28",
    "href": "/components/responsive-header"
  },
  {
    "slug": "horizontal-scroll-gallery-react",
    "title": "How to Build a Horizontal Scroll Gallery with React and Motion",
    "category": "Tutorials",
    "description": "A horizontal gallery can present a sequence of wide images while preserving a natural vertical page flow.",
    "date": "2026-11-28",
    "href": "/components/horizontal-scroll"
  },
  {
    "slug": "sticky-stacking-cards-scroll-animation",
    "title": "How to Create a Stacking Cards Scroll Animation with CSS and React",
    "category": "Tutorials",
    "description": "Stacking cards create a layered story as the next section approaches the previous one.",
    "date": "2026-11-28",
    "href": "/components/stacking-card"
  },
  {
    "slug": "lenis-smooth-scroll-react",
    "title": "How to Add Smooth Scrolling in React with Lenis and Motion",
    "category": "Tutorials",
    "description": "Smooth scrolling interpolates movement between input events and the displayed scroll position.",
    "date": "2026-11-28",
    "href": "/components/smooth-scroll"
  },
  {
    "slug": "sticky-scroll-storytelling-react",
    "title": "How to Build a Sticky Scroll Storytelling Section with React and Tailwind",
    "category": "Tutorials",
    "description": "Sticky storytelling keeps one visual in view while accompanying explanations advance.",
    "date": "2026-11-28",
    "href": "/components/sticky-scroll"
  },
  {
    "slug": "animated-image-tabs-react",
    "title": "How to Create Animated Image Tabs for Product Feature Showcases",
    "category": "Tutorials",
    "description": "Image tabs let visitors compare product workflows without leaving the section.",
    "date": "2026-11-28",
    "href": "/components/image-tabs"
  },
  {
    "slug": "macos-dock-magnification-react",
    "title": "How to Recreate the macOS Dock Magnification Effect in React",
    "category": "Tutorials",
    "description": "Dock magnification emphasizes the item closest to a pointer while nearby icons respond more subtly.",
    "date": "2026-11-28",
    "href": "/components/magnified-doc"
  },
  {
    "slug": "react-particle-sparkles-effect",
    "title": "How to Add a Sparkle Particle Effect to React Websites",
    "category": "Tutorials",
    "description": "A particle field can add depth to a decorative area without taking over the entire page.",
    "date": "2026-11-28",
    "href": "/components/sparkles"
  },
  {
    "slug": "sparkling-text-heading-react",
    "title": "How to Build a Sparkling Text Heading in React with tsParticles",
    "category": "Tutorials",
    "description": "A sparkling heading draws attention to a short phrase without requiring the letters themselves to move.",
    "date": "2026-11-28",
    "href": "/components/sparkles-title"
  },
  {
    "slug": "embla-carousel-react",
    "title": "How to Build a Responsive React Carousel with Embla Carousel",
    "category": "Tutorials",
    "description": "Embla provides carousel mechanics while your interface supplies the slide layout and navigation.",
    "date": "2026-11-28",
    "href": "/components/carousel"
  },
  {
    "slug": "motion-draggable-carousel-react",
    "title": "How to Build a Draggable Image Carousel with React and Framer Motion",
    "category": "Tutorials",
    "description": "A Motion-powered carousel gives you control over transitions, drag and visual emphasis.",
    "date": "2026-11-28",
    "href": "/components/framer-carousel"
  },
  {
    "slug": "animated-faq-accordion-react",
    "title": "How to Build an Animated FAQ Accordion in React",
    "category": "Tutorials",
    "description": "An FAQ accordion makes a long answer list easier to scan, as long as the questions remain discoverable.",
    "date": "2026-11-28",
    "href": "/components/faqs"
  },
  {
    "slug": "image-accordion-react-tailwind",
    "title": "How to Create an Expanding Image Accordion with React and Tailwind CSS",
    "category": "Tutorials",
    "description": "An image accordion expands the selected panel while neighboring images remain as context.",
    "date": "2026-11-28",
    "href": "/components/image-accordions"
  },
  {
    "slug": "responsive-bento-grid-react",
    "title": "How to Build Responsive Bento and CSS Grid Layouts in React",
    "category": "Tutorials",
    "description": "A responsive grid lets content determine the hierarchy without requiring separate desktop and mobile markup.",
    "date": "2026-11-28",
    "href": "/components/grid"
  },
  {
    "slug": "unsplash-masonry-grid-react",
    "title": "How to Build an Unsplash-Style Masonry Image Grid in React",
    "category": "Tutorials",
    "description": "Masonry organizes images of different heights into a balanced collection without forcing identical aspect ratios.",
    "date": "2026-11-28",
    "href": "/components/masonary-grid"
  },
  {
    "slug": "infinite-css-marquee-react",
    "title": "How to Create an Infinite Scrolling Marquee in React and CSS",
    "category": "Tutorials",
    "description": "A continuous marquee uses a repeating strip of content to avoid an obvious jump at the loop boundary.",
    "date": "2026-11-28",
    "href": "/components/marquee"
  },
  {
    "slug": "infinite-logo-marquee-tailwind",
    "title": "Build an Infinite Logo Carousel for SaaS Landing Pages",
    "category": "Tutorials",
    "description": "A brand logo strip communicates customer or partner relationships without taking much vertical space.",
    "date": "2026-11-28",
    "href": "/components/infinity-brand"
  },
  {
    "slug": "react-shimmer-loading-indicator",
    "title": "How to Build Shimmer Loaders and AI Progress Indicators in React",
    "category": "Tutorials",
    "description": "A shimmer loader communicates ongoing work without claiming more progress than the application knows.",
    "date": "2026-11-28",
    "href": "/components/shimmer-loader"
  },
  {
    "slug": "react-typewriter-text-effect",
    "title": "How to Build a Typewriter Text Animation in React",
    "category": "Tutorials",
    "description": "A typewriter effect reveals short text progressively while the final phrase stays stable.",
    "date": "2026-11-28",
    "href": "/components/type-writer"
  },
  {
    "slug": "animated-terminal-ui-react",
    "title": "How to Build a Developer Terminal Animation in React",
    "category": "Tutorials",
    "description": "A terminal-style intro combines status messages and typing to tell a short technical story.",
    "date": "2026-11-28",
    "href": "/components/terminal-ui"
  },
  {
    "slug": "shiki-syntax-highlighted-code-react",
    "title": "How to Build a Syntax-Highlighted Code Block with Shiki in React",
    "category": "Tutorials",
    "description": "A code block should preserve exact source text while making its structure easier to read.",
    "date": "2026-11-28",
    "href": "/components/code-block"
  },
  {
    "slug": "react-file-tree-code-viewer",
    "title": "How to Build an Interactive File Tree and Code Viewer in React",
    "category": "Tutorials",
    "description": "A file tree viewer helps documentation readers understand where multiple code snippets belong.",
    "date": "2026-11-28",
    "href": "/components/tree-code-viewer"
  },
  {
    "slug": "mdx-code-tabs-nextjs",
    "title": "How to Add Copyable Installation Code Tabs to MDX Documentation in Next.js",
    "category": "Tutorials",
    "description": "MDX can render interactive code examples alongside prose, which makes it useful for component installation guides.",
    "date": "2026-11-28",
    "href": "/components/code-tabs-mdx"
  },
  {
    "slug": "react-multi-language-code-tabs",
    "title": "How to Build Multi-Language Code Tabs with Syntax Highlighting in React",
    "category": "Tutorials",
    "description": "Code tabs let documentation show equivalent JavaScript, TypeScript or configuration examples without duplicating the entire page.",
    "date": "2026-11-28",
    "href": "/components/code-tabs"
  },
  {
    "slug": "animated-gradient-border-css-react",
    "title": "How to Create an Animated Gradient Border with CSS and React",
    "category": "Tutorials",
    "description": "Gradient borders make a card or control stand out without filling the entire surface with color.",
    "date": "2026-11-28",
    "href": "/components/gradient-border"
  }
];

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);

export function relatedBlogPosts(post: BlogPost) {
  const others = blogPosts.filter((item) => item.slug !== post.slug);
  return [...others.filter((item) => item.category === post.category), ...others.filter((item) => item.category !== post.category)].slice(0, 3);
}
