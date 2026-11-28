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
