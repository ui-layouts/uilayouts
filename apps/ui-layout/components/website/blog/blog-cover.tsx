import Cover0 from '@/assets/preview/buttons.svg';
import Cover1 from '@/assets/preview/globe.svg';
import Cover2 from '@/assets/preview/coffee.svg';
import Cover3 from '@/assets/preview/drag-items.svg';
import Cover4 from '@/assets/preview/ripple.png';
import Cover5 from '@/assets/preview/blob.png';
import Cover6 from '@/assets/preview/mesh-gradient.png';
import Cover7 from '@/assets/preview/motion-number.svg';
import Cover8 from '@/assets/preview/password.svg';
import Cover9 from '@/assets/preview/youtube-tags.svg';
import Cover10 from '@/assets/preview/clip-path.svg';
import Cover11 from '@/assets/preview/image_masking.svg';
import Cover12 from '@/assets/preview/card.svg';
import Cover13 from '@/assets/preview/timeline.svg';
import Cover14 from '@/assets/preview/gallerynew.svg';
import Cover15 from '@/assets/preview/responsive.svg';
import Cover16 from '@/assets/preview/horizontal-scrolling.svg';
import Cover17 from '@/assets/preview/stacking card.svg';
import Cover18 from '@/assets/preview/sticky.svg';
import Cover19 from '@/assets/preview/tabs.svg';
import Cover20 from '@/assets/preview/sparkles.svg';
import Cover21 from '@/assets/preview/carousel.svg';
import Cover22 from '@/assets/preview/faqs.svg';
import Cover23 from '@/assets/preview/grid.svg';
import Cover24 from '@/assets/preview/gallery.svg';
import Image, { type StaticImageData } from 'next/image';
import imageReveal from '@/assets/preview/image-reveal.svg';
import imageTrail from '@/assets/preview/image_mousetrail.svg';
import tabs from '@/assets/preview/tabs.svg';
import faqs from '@/assets/preview/faqs.svg';
import {
  AboutSectionImg,
  ExperienceSectionImg,
  FaqSectionImg,
  FeatureSectionImg,
  FooterSectionImg,
  HeroAiInfrastructureImg,
  HeroAiValuePropositionImg,
  PricingSectionImg,
  StatsSectionImg,
  TeamSectionImg,
  TestimonialSectionImg,
} from '@repo/blocks/assets/index';

const covers: Record<string, string | StaticImageData> = {
  'foldable-iphone-mockup-react': '/blog/covers/foldable-iphone-mockup-react.svg',
  'react-drag-and-drop-dashboard': '/blog/covers/react-drag-and-drop-dashboard.svg',
  'animated-react-dialog': '/blog/covers/animated-react-dialog.svg',
  'react-color-picker-hex': '/blog/covers/react-color-picker-hex.svg',
  'creative-animated-buttons-react': Cover0,
  'css-noise-texture-background': '/blog/covers/css-noise-texture-background.svg',
  'interactive-3d-globe-react': Cover1,
  'animated-website-footer-react': '/blog/covers/animated-website-footer-react.svg',
  'react-donation-support-button': Cover2,
  'draggable-items-motion-react': Cover3,
  'webgl-image-ripple-effect-react': Cover4,
  'animated-3d-blob-react-three-fiber': Cover5,
  'animated-mesh-gradient-react': Cover6,
  'animated-number-counter-react': Cover7,
  'animated-liquid-gradient-button-react': '/blog/covers/animated-liquid-gradient-button-react.svg',
  'password-input-strength-react': Cover8,
  'react-tags-input-chips': Cover9,
  'international-phone-number-input-react': '/blog/covers/international-phone-number-input-react.svg',
  'react-date-time-picker': '/blog/covers/react-date-time-picker.svg',
  'searchable-multi-select-react': '/blog/covers/searchable-multi-select-react.svg',
  'css-clip-path-image-shapes': Cover10,
  'svg-image-masking-react': Cover11,
  'css-video-masking-react': '/blog/covers/css-video-masking-react.svg',
  'animated-hover-cards-react': Cover12,
  'react-ecommerce-product-cards': '/blog/covers/react-ecommerce-product-cards.svg',
  'scroll-timeline-animation-react': Cover13,
  'react-scroll-reveal-animation': '/blog/covers/react-scroll-reveal-animation.svg',
  'scroll-linked-text-animation-react': '/blog/covers/scroll-linked-text-animation-react.svg',
  'scroll-velocity-marquee-react': '/blog/covers/scroll-velocity-marquee-react.svg',
  'text-scramble-animation-react': '/blog/covers/text-scramble-animation-react.svg',
  'progressive-carousel-react': '/blog/covers/progressive-carousel-react.svg',
  'interactive-grid-background-react': '/blog/covers/interactive-grid-background-react.svg',
  'animated-beam-integration-diagram-react': '/blog/covers/animated-beam-integration-diagram-react.svg',
  'animated-image-video-modal-react': '/blog/covers/animated-image-video-modal-react.svg',
  'linear-style-expandable-card-react': '/blog/covers/linear-style-expandable-card-react.svg',
  'react-image-gallery-lightbox': Cover14,
  'responsive-dialog-drawer-react': Cover15,
  'react-drawer-sidebar-bottom-sheet': '/blog/covers/react-drawer-sidebar-bottom-sheet.svg',
  'animated-sidebar-drawer-motion': '/blog/covers/animated-sidebar-drawer-motion.svg',
  'responsive-navbar-mobile-menu-react': '/blog/covers/responsive-navbar-mobile-menu-react.svg',
  'horizontal-scroll-gallery-react': Cover16,
  'sticky-stacking-cards-scroll-animation': Cover17,
  'lenis-smooth-scroll-react': '/blog/covers/lenis-smooth-scroll-react.svg',
  'sticky-scroll-storytelling-react': Cover18,
  'animated-image-tabs-react': Cover19,
  'macos-dock-magnification-react': '/blog/covers/macos-dock-magnification-react.svg',
  'react-particle-sparkles-effect': Cover20,
  'sparkling-text-heading-react': '/blog/covers/sparkling-text-heading-react.svg',
  'embla-carousel-react': Cover21,
  'motion-draggable-carousel-react': '/blog/covers/motion-draggable-carousel-react.svg',
  'animated-faq-accordion-react': Cover22,
  'image-accordion-react-tailwind': '/blog/covers/image-accordion-react-tailwind.svg',
  'responsive-bento-grid-react': Cover23,
  'unsplash-masonry-grid-react': Cover24,
  'infinite-css-marquee-react': '/blog/covers/infinite-css-marquee-react.svg',
  'infinite-logo-marquee-tailwind': '/blog/covers/infinite-logo-marquee-tailwind.svg',
  'react-shimmer-loading-indicator': '/blog/covers/react-shimmer-loading-indicator.svg',
  'react-typewriter-text-effect': '/blog/covers/react-typewriter-text-effect.svg',
  'animated-terminal-ui-react': '/blog/covers/animated-terminal-ui-react.svg',
  'shiki-syntax-highlighted-code-react': '/blog/covers/shiki-syntax-highlighted-code-react.svg',
  'react-file-tree-code-viewer': '/blog/covers/react-file-tree-code-viewer.svg',
  'mdx-code-tabs-nextjs': '/blog/covers/mdx-code-tabs-nextjs.svg',
  'react-multi-language-code-tabs': '/blog/covers/react-multi-language-code-tabs.svg',
  'animated-gradient-border-css-react': '/blog/covers/animated-gradient-border-css-react.svg',
  'liquid-glass-react': '/blog/covers/liquid-glass.svg',
  'mac-genie-animation': '/blog/covers/mac-genie.svg',
  'progressive-blur-css': '/blog/covers/progressive-blur.svg',
  'image-reveal-animation': imageReveal,
  'animated-react-tabs': tabs,
  'dual-range-slider': '/blog/covers/range-slider.svg',
  'spotlight-card-css': '/blog/covers/spotlight.svg',
  'image-mouse-trail': imageTrail,
  'accessible-react-accordion': faqs,
  'react-file-upload': '/blog/covers/file-upload.svg',
  'saas-hero-section': HeroAiValuePropositionImg,
  'bento-feature-grid': FeatureSectionImg,
  'about-page-design': AboutSectionImg,
  'team-section-react': TeamSectionImg,
  'stats-section-design': StatsSectionImg,
  'testimonial-section-design': TestimonialSectionImg,
  'portfolio-experience-section': ExperienceSectionImg,
  'saas-pricing-section': PricingSectionImg,
  'website-faq-section': FaqSectionImg,
  'website-footer-design': FooterSectionImg,
  'nested-border-radius': '/blog/covers/border-radius.svg',
  'landing-page-sections': HeroAiInfrastructureImg,
};

export default function BlogCover({ slug, className = '', hero = false }: {
  slug: string;
  className?: string;
  hero?: boolean;
}) {
  const src = covers[slug];
  if (!src) return null;
  return (
    <div className={`relative isolate overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 ${className}`}>
      <Image
        src={src}
        alt=''
        fill
        sizes={hero ? '(max-width: 768px) 100vw, 1400px' : '(max-width: 640px) 112px, (max-width: 1024px) 176px, 224px'}
        className='object-contain'
      />
    </div>
  );
}
