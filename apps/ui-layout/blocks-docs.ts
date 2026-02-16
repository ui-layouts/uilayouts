import {
  HeroShareApp,
  TeamIntegration,
  HeroDigitalSuccess,
  HeroSocialApp,
  HeroAiEcommerce,
  HeroAiInfrastructure,
  HeroFinancial,
  HeroAiValueProposition,
  FaqFounder,
  FaqTabbedExplorer,
  FaqGlassCard,
  FaqJourney,
  FaqInteractivePreview,
  FaqMinimalist,
  TeamClipPath,
  TeamClassic,
  TeamExpert,
  TeamMagic,
  TeamModern,
  TeamSocial,
  TeamSynth,
  TeamTroops,
  TeamVR,
  AboutMission,
  AboutAgency,
  AboutCreative,
  AboutArchitecture,
  AboutSass,
  AboutECommerce,
  AboutBusiness,
  AboutVision,
  AboutExperience,
  GrowthPlans,
  PricingOverview,
  StartupPlans,
  SubscriptionDetails,
  ProductPacks,
  AdvancedStats,
  StatsBanner,
  StatsBento,
  StatsSection,
  DetailedStats,
  BoldStats,
  MinimalStats,
  MarqueeTestimonials,
  StackTestimonials,
  SpotlightTestimonial,
  MessengerTestimonials,
  CustomerExperience,
  ImpactExperience,
  PortfolioExperience,
  CreativeExperience,
  WorkExperience,
  FeatureFlow,
  FeatureHero,
  FeatureHighlights,
  FeaturePlatform,
  FeatureServices,
  AboutWhyUs,
  BentoFooter,
  BoldFooter,
  MinimalFooter,
  FooterSimple,
  FooterPrivilege,
  GrowthBusiness,
  ChatTestimonials,
  FeatureVelocity,
  AboutMe,
  HeroFooter,
  EntrepreneursBlogs,
  TestimonialBasic,
  TestimonialCarousel,
  FeatureNature,
  AboutBento,
  FeatureBento,
  DetailedFooter,
} from '@repo/blocks';
import {
  HeroSectionImg,
  AboutSectionImg,
  ExperienceSectionImg,
  FaqSectionImg,
  FooterSectionImg,
  PricingSectionImg,
  StatsSectionImg,
  TeamSectionImg,
  TestimonialSectionImg,
  FeatureSectionImg,
} from '@repo/blocks/assets/index';

export const blocksDesign = [
  {
    id: 'hero-section',
    name: 'Hero Section',
    url: '/blocks/hero-section',
    des: 'Beautiful hero layouts to start your landing page.',
    imgclass: 'bg-linear-to-t from-blue-600 dark:to-blue-800 to-blue-200',
    textClass: 'text-white',
    tags: ['hero', 'landing', 'above-the-fold'],
    imgSrc: HeroSectionImg,
    blocks: [
      {
        id: 'hero-digital-success',
        name: 'Digital Success',
        des: 'A modern hero section with call-to-action and image.',
        tags: ['hero', 'modern', 'cta', 'streamline'],
        componentSrc: HeroDigitalSuccess,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/hero-section/hero-digital-success.tsx?raw'),
            fileName: 'digital-success.tsx',
            pathSrc:
              '../../packages/blocks/src/hero-section/hero-digital-success.tsx',
          },
          {
            fileSrc: require('./components/ui/motion-drawer.tsx?raw'),
            pathSrc: './components/ui/motion-drawer.tsx',
            fileName: 'motion-drawer.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
          {
            fileSrc: require('./hooks/use-media-query.tsx?raw'),
            pathSrc: './hooks/use-media-query.tsx',
            fileName: 'use-media-query.tsx',
          },
        ],
      },
      {
        id: 'hero-ai-value-proposition',
        name: 'AI Value Proposition',
        des: 'A modern hero section with call-to-action and image.',
        tags: ['hero', 'modern', 'ai-value-proposition'],
        componentSrc: HeroAiValueProposition,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/hero-section/hero-ai-value-proposition.tsx?raw'),
            fileName: 'hero-ai-value-proposition.tsx',
            pathSrc:
              '../../packages/blocks/src/hero-section/hero-ai-value-proposition.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'hero-share-app',
        name: 'Share App',
        des: 'A modern hero section with call-to-action and image.',
        tags: ['hero', 'modern', 'share-app'],
        componentSrc: HeroShareApp,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/hero-section/hero-share-app.tsx?raw'),
            fileName: 'share-app.tsx',
            pathSrc:
              '../../packages/blocks/src/hero-section/hero-share-app.tsx',
          },
          {
            fileSrc: require('./components/ui/motion-drawer.tsx?raw'),
            pathSrc: './components/ui/motion-drawer.tsx',
            fileName: 'motion-drawer.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
          {
            fileSrc: require('./hooks/use-media-query.tsx?raw'),
            pathSrc: './hooks/use-media-query.tsx',
            fileName: 'use-media-query.tsx',
          },
        ],
      },
      {
        id: 'hero-social-app',
        name: 'Social App',
        des: 'A modern hero section with call-to-action and image.',
        tags: ['hero', 'modern', 'social-app'],
        componentSrc: HeroSocialApp,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/hero-section/hero-social-app.tsx?raw'),
            fileName: 'social-app.tsx',
            pathSrc:
              '../../packages/blocks/src/hero-section/hero-social-app.tsx',
          },
          {
            fileSrc: require('./components/ui/motion-drawer.tsx?raw'),
            pathSrc: './components/ui/motion-drawer.tsx',
            fileName: 'motion-drawer.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
          {
            fileSrc: require('./hooks/use-media-query.tsx?raw'),
            pathSrc: './hooks/use-media-query.tsx',
            fileName: 'use-media-query.tsx',
          },
        ],
      },
      {
        id: 'hero-ai-ecommerce',
        name: 'AI Ecommerce',
        des: 'A modern hero section with call-to-action and image.',
        tags: ['hero', 'modern', 'ai-ecommerce'],
        componentSrc: HeroAiEcommerce,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/hero-section/hero-ai-ecommerce.tsx?raw'),
            fileName: 'hero-ai-ecommerce.tsx',
            pathSrc:
              '../../packages/blocks/src/hero-section/hero-ai-ecommerce.tsx',
          },
          {
            fileSrc: require('./components/ui/motion-drawer.tsx?raw'),
            pathSrc: './components/ui/motion-drawer.tsx',
            fileName: 'motion-drawer.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
          {
            fileSrc: require('./hooks/use-media-query.tsx?raw'),
            pathSrc: './hooks/use-media-query.tsx',
            fileName: 'use-media-query.tsx',
          },
        ],
      },
      {
        id: 'hero-ai-infrastructure',
        name: 'AI Infrastructure',
        des: 'A modern hero section with call-to-action and image.',
        tags: ['hero', 'modern', 'ai-infrastructure'],
        componentSrc: HeroAiInfrastructure,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/hero-section/hero-ai-infrastructure.tsx?raw'),
            fileName: 'hero-ai-infrastructure.tsx',
            pathSrc:
              '../../packages/blocks/src/hero-section/hero-ai-infrastructure.tsx',
          },
          {
            fileSrc: require('./components/ui/motion-drawer.tsx?raw'),
            pathSrc: './components/ui/motion-drawer.tsx',
            fileName: 'motion-drawer.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
          {
            fileSrc: require('./hooks/use-media-query.tsx?raw'),
            pathSrc: './hooks/use-media-query.tsx',
            fileName: 'use-media-query.tsx',
          },
        ],
      },
      {
        id: 'hero-financial',
        name: 'Financial',
        des: 'A modern hero section with call-to-action and image.',
        tags: ['hero', 'modern', 'financial'],
        componentSrc: HeroFinancial,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/hero-section/hero-financial.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/hero-section/hero-financial.tsx',
            fileName: 'hero-financial.tsx',
          },
          {
            fileSrc: require('./components/ui/motion-drawer.tsx?raw'),
            pathSrc: './components/ui/motion-drawer.tsx',
            fileName: 'motion-drawer.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
          {
            fileSrc: require('./hooks/use-media-query.tsx?raw'),
            pathSrc: './hooks/use-media-query.tsx',
            fileName: 'use-media-query.tsx',
          },
        ],
      },
      // {
      //   id: 'hero-team-integration',
      //   name: 'Team Integration',
      //   des: 'A modern hero section with call-to-action and image.',
      //   imgSrc: OrganizationHeroImg,
      //   tags: ['hero', 'modern', 'team-integration'],
      //   componentSrc: TeamIntegration,
      //   filePath: [
      //     {
      //       fileSrc: require('../../packages/blocks/src/hero-section/team-intergration.tsx?raw'),
      //       fileName: 'team-intergration.tsx',
      //     },
      //   ],
      // },
    ],
  },

  {
    id: 'feature-section',
    name: 'Feature Section',
    url: '/blocks/feature-section',
    des: 'Beautiful Feature layouts to start your landing page',
    imgclass: 'bg-linear-to-t from-green-400 dark:to-green-800 to-green-100',
    textClass: 'text-primary',
    imgSrc: FeatureSectionImg,
    tags: ['feature', 'feature section', 'feature'],
    blocks: [
      {
        id: 'feature-flow',
        name: 'Feature Flow',
        des: 'A modern FAAQ section .',
        tags: ['feature', 'modern', 'feature flow'],
        componentSrc: FeatureFlow,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/feature-section/feature-flow.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/feature-section/feature-flow.tsx',
            fileName: 'feature-flow.tsx',
          },
          {
            fileSrc: require('./components/ui/carousel.tsx?raw'),
            pathSrc: './components/ui/carousel.tsx',
            fileName: 'carousel.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'feature-hero',
        name: 'Feature Hero',
        des: 'A modern FAAQ section .',
        tags: ['feature', 'modern', 'feature hero'],
        componentSrc: FeatureHero,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/feature-section/feature-hero.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/feature-section/feature-hero.tsx',
            fileName: 'feature-hero.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'feature-bento',
        name: 'Feature Bento',
        des: 'A modern FAAQ section .',
        tags: ['feature', 'modern', 'feature bento'],
        componentSrc: FeatureBento,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/feature-section/feature-bento?raw'),
            pathSrc:
              '../../packages/blocks/src/feature-section/feature-bento.tsx',
            fileName: 'feature-bento.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'feature-nature',
        name: 'Feature Nature',
        des: 'A modern FAAQ section .',
        tags: ['feature', 'modern', 'feature Nature'],
        componentSrc: FeatureNature,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/feature-section/feature-nature?raw'),
            pathSrc:
              '../../packages/blocks/src/feature-section/feature-nature.tsx',
            fileName: 'feature-nature.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'feature-velocity',
        name: 'Feature Velocity',
        des: 'A modern FAAQ section .',
        tags: ['feature', 'modern', 'feature Velocity'],
        componentSrc: FeatureVelocity,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/feature-section/feature-velocity?raw'),
            pathSrc:
              '../../packages/blocks/src/feature-section/feature-velocity.tsx',
            fileName: 'feature-velocity.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'feature-highlights',
        name: 'Feature Highlights',
        des: 'A modern FAAQ section .',
        tags: ['feature', 'modern', 'feature highlights'],
        componentSrc: FeatureHighlights,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/feature-section/feature-highlights.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/feature-section/feature-highlights.tsx',
            fileName: 'feature-highlights.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'feature-platform',
        name: 'Feature Platform',
        des: 'A modern FAAQ section .',
        tags: ['feature', 'modern', 'feature platform'],
        componentSrc: FeaturePlatform,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/feature-section/feature-platform.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/feature-section/feature-platform.tsx',
            fileName: 'feature-platform.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'feature-service',
        name: 'Feature Service',
        des: 'A modern FAAQ section .',
        tags: ['feature', 'modern', 'feature service'],
        componentSrc: FeatureServices,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/feature-section/feature-service.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/feature-section/feature-service.tsx',
            fileName: 'feature-service.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
    ],
  },
  {
    id: 'about-section',
    name: 'About Section',
    url: '/blocks/about-section',
    des: 'Beautiful About layouts to start your landing page.',
    imgclass: 'bg-linear-to-t from-purple-500 dark:to-purple-800 to-purple-200',
    textClass: 'text-primary',
    imgSrc: AboutSectionImg,
    tags: ['about', 'about section', 'about '],
    blocks: [
      {
        id: 'about-ecommerse',
        name: 'About e-commerse',
        des: 'A modern FAAQ section',
        tags: ['ecommerse', 'modern', 'about'],
        componentSrc: AboutECommerce,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/about-section/about-ecommerse.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/about-section/about-ecommerse.tsx',
            fileName: 'about-ecommerse.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'about-creative',
        name: 'Creative',
        des: 'A modern FAAQ section .',
        tags: ['creative', 'modern', 'about'],
        componentSrc: AboutCreative,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/about-section/about-creative.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/about-section/about-creative.tsx',
            fileName: 'about-agency.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'about-me',
        name: 'Creative',
        des: 'A modern FAAQ section .',
        tags: ['me', 'modern', 'about'],
        componentSrc: AboutMe,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/about-section/about-me.tsx?raw'),
            pathSrc: '../../packages/blocks/src/about-section/about-me.tsx',
            fileName: 'about-me.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'about-sass',
        name: 'SASS',
        des: 'A modern FAAQ section .',
        tags: ['sass', 'modern', 'about'],
        componentSrc: AboutSass,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/about-section/about-sass.tsx?raw'),
            pathSrc: '../../packages/blocks/src/about-section/about-sass.tsx',
            fileName: 'about-sass.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },

      {
        id: 'about-agency',
        name: 'Agency',
        des: 'A modern FAAQ section .',
        tags: ['about', 'modern', 'agency'],
        componentSrc: AboutAgency,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/about-section/about-agency.tsx?raw'),
            pathSrc: '../../packages/blocks/src/about-section/about-agency.tsx',
            fileName: 'about-agency.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },

      {
        id: 'about-architecture',
        name: 'Architecture',
        des: 'A modern FAAQ section .',
        tags: ['architecture', 'modern', 'about'],
        componentSrc: AboutArchitecture,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/about-section/about-architecture.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/about-section/about-architecture.tsx',
            fileName: 'about-architecture.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'about-mission',
        name: 'Mission',
        des: 'A modern FAAQ section .',
        tags: ['about', 'modern', 'mission'],
        componentSrc: AboutMission,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/about-section/about-mission.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/about-section/about-mission.tsx',
            fileName: 'about-founder.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'about-bento',
        name: 'Bento',
        des: 'A modern FAAQ section .',
        tags: ['about', 'modern', 'Bento'],
        componentSrc: AboutBento,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/about-section/about-bento.tsx?raw'),
            pathSrc: '../../packages/blocks/src/about-section/about-bento.tsx',
            fileName: 'about-bento.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'about-business',
        name: 'Business',
        des: 'A modern FAAQ section .',
        tags: ['business', 'modern', 'about'],
        componentSrc: AboutBusiness,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/about-section/about-business.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/about-section/about-business.tsx',
            fileName: 'about-business.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'about-whyus',
        name: 'About Why Us',
        des: 'A modern about section .',
        tags: ['about', 'modern', 'about why us'],
        componentSrc: AboutWhyUs,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/about-section/about-whyus.tsx?raw'),
            pathSrc: '../../packages/blocks/src/about-section/about-whyus.tsx',
            fileName: 'feature-whyus.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'about-vision',
        name: 'Vision',
        des: 'A modern FAAQ section .',
        tags: ['vision', 'modern', 'about'],
        componentSrc: AboutVision,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/about-section/about-vision.tsx?raw'),
            pathSrc: '../../packages/blocks/src/about-section/about-vision.tsx',
            fileName: 'about-vision.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'about-experience',
        name: 'Experience',
        des: 'A modern FAAQ section .',
        tags: ['experience', 'modern', 'about'],
        componentSrc: AboutExperience,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/about-section/about-experience.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/about-section/about-experience.tsx',
            fileName: 'about-experience.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
    ],
  },
  {
    id: 'team-section',
    name: 'Team Section',
    url: '/blocks/team-section',
    imgclass: 'bg-linear-to-t from-indigo-800 dark:to-indigo-900 to-indigo-100',
    des: 'Beautiful FAQ layouts to start your landing page.',
    textClass: 'text-primary',
    imgSrc: TeamSectionImg,
    tags: ['team', 'team section', 'team'],
    blocks: [
      {
        id: 'team-clippath',
        name: 'Clip Path',
        des: 'A modern FAAQ section .',
        tags: ['team', 'modern', 'clip path'],
        componentSrc: TeamClipPath,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/faq-section/faq-founder.tsx?raw'),
            pathSrc: '../../packages/blocks/src/faq-section/faq-founder.tsx',
            fileName: 'faq-founder.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'team-classic',
        name: 'Classic',
        des: 'A modern FAAQ section .',
        tags: ['team', 'modern', 'classic'],
        componentSrc: TeamClassic,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/team-section/team-classic.tsx?raw'),
            pathSrc: '../../packages/blocks/src/team-section/team-classic.tsx',
            fileName: 'team-classic.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'team-expert',
        name: 'Expert',
        des: 'A modern FAAQ section .',
        tags: ['team', 'modern', 'expert'],
        componentSrc: TeamExpert,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/team-section/team-expert.tsx?raw'),
            pathSrc: '../../packages/blocks/src/team-section/team-expert.tsx',
            fileName: 'team-expert.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'team-magic',
        name: 'Magic',
        des: 'A modern FAAQ section .',
        tags: ['team', 'modern', 'magic'],
        componentSrc: TeamMagic,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/team-section/team-magic.tsx?raw'),
            pathSrc: '../../packages/blocks/src/team-section/team-magic.tsx',
            fileName: 'team-magic.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'team-modern',
        name: 'Modern',
        des: 'A modern FAAQ section .',
        tags: ['team', 'modern', 'modern'],
        componentSrc: TeamModern,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/team-section/team-modern.tsx?raw'),
            pathSrc: '../../packages/blocks/src/team-section/team-modern.tsx',
            fileName: 'team-modern.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'team-social',
        name: 'Social',
        des: 'A modern FAAQ section .',
        tags: ['team', 'modern', 'social'],
        componentSrc: TeamSocial,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/team-section/team-social.tsx?raw'),
            pathSrc: '../../packages/blocks/src/team-section/team-social.tsx',
            fileName: 'team-social.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'team-synth',
        name: 'Synth',
        des: 'A modern FAAQ section .',
        tags: ['team', 'modern', 'synth'],
        componentSrc: TeamSynth,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/team-section/team-synth.tsx?raw'),
            pathSrc: '../../packages/blocks/src/team-section/team-synth.tsx',
            fileName: 'team-synth.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'team-troops',
        name: 'Troops',
        des: 'A modern FAAQ section .',
        tags: ['team', 'modern', 'troops'],
        componentSrc: TeamTroops,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/team-section/team-synth.tsx?raw'),
            pathSrc: '../../packages/blocks/src/team-section/team-synth.tsx',
            fileName: 'team-synth.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'team-vr',
        name: 'VR',
        des: 'A modern FAAQ section .',
        tags: ['team', 'modern', 'vr'],
        componentSrc: TeamVR,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/team-section/team-vr.tsx?raw'),
            pathSrc: '../../packages/blocks/src/team-section/team-vr.tsx',
            fileName: 'team-vr.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
    ],
  },

  {
    id: 'stats-section',
    name: 'Stats Section',
    url: '/blocks/stats-section',
    des: 'Beautiful Stats layouts to start your landing page.',
    textClass: 'text-primary',
    imgclass: 'bg-linear-to-t from-red-500 dark:to-orange-500 to-orange-100',
    imgSrc: StatsSectionImg,
    tags: ['stats', 'stats section', 'stats'],
    blocks: [
      {
        id: 'advanced-stats',
        name: 'Advanced Stats',
        des: 'A modern FAAQ section .',
        tags: ['stats', 'modern', 'advanced stats'],
        componentSrc: AdvancedStats,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/stats-section/advanced-stats/index.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/stats-section/advanced-stats/index.tsx',
            fileName: 'index.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'stats-banner',
        name: 'Stats Banner',
        des: 'A modern FAAQ section .',
        tags: ['stats', 'modern', 'stats banner'],
        componentSrc: StatsBanner,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/stats-section/stats-banner.tsx?raw'),
            pathSrc: '../../packages/blocks/src/stats-section/stats-banner.tsx',
            fileName: 'stats-banner.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'stats-bento',
        name: 'Stats Bento',
        des: 'A modern FAAQ section .',
        tags: ['stats', 'modern', 'stats bento'],
        componentSrc: StatsBento,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/stats-section/stats-bento.tsx?raw'),
            pathSrc: '../../packages/blocks/src/stats-section/stats-bento.tsx',
            fileName: 'stats-bento.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'stats-section',
        name: 'Stats Section',
        des: 'A modern stats section with animated counters.',
        tags: ['stats', 'modern', 'counters'],
        componentSrc: StatsSection,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/stats-section/stats-section.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/stats-section/stats-section.tsx',
            fileName: 'stats-section.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'stats-details',
        name: 'Stats Details',
        des: 'A detailed stats section with descriptions.',
        tags: ['stats', 'modern', 'detailed'],
        componentSrc: DetailedStats,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/stats-section/stats-details.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/stats-section/stats-details.tsx',
            fileName: 'stats-details.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'stats-bold',
        name: 'Stats Bold',
        des: 'A bold and impactful stats section design.',
        tags: ['stats', 'modern', 'bold'],
        componentSrc: BoldStats,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/stats-section/stats-bold.tsx?raw'),
            pathSrc: '../../packages/blocks/src/stats-section/stats-bold.tsx',
            fileName: 'stats-bold.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'stats-minimal',
        name: 'Stats Minimal',
        des: 'A clean and minimal stats section layout.',
        tags: ['stats', 'modern', 'minimal'],
        componentSrc: MinimalStats,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/stats-section/stats-minimal.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/stats-section/stats-minimal.tsx',
            fileName: 'stats-minimal.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
    ],
  },
  {
    id: 'testimonial-section',
    name: 'Testimonial Section',
    url: '/blocks/testimonial-section',
    des: 'Beautiful Testimonial layouts to start your landing page.',
    textClass: 'text-primary',
    imgclass: 'bg-linear-to-t from-neutral-300 to-neutral-100',
    imgSrc: TestimonialSectionImg,
    tags: ['testimonial', 'testimonial section', 'testimonial'],
    blocks: [
      {
        id: 'stack-testimonial',
        name: 'Stack Testimonial',
        des: 'A modern FAAQ section .',
        tags: ['testimonial', 'modern', 'stack testimonial'],
        componentSrc: StackTestimonials,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/testimonial-section/stack-testimonial.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/testimonial-section/stack-testimonial.tsx',
            fileName: 'stack-testimonial.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'spotlight-testimonial',
        name: 'Spotlight Testimonial',
        des: 'A modern FAAQ section .',
        tags: ['testimonial', 'modern', 'spotlight testimonial'],
        componentSrc: SpotlightTestimonial,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/testimonial-section/spotlight-testimonial.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/testimonial-section/spotlight-testimonial.tsx',
            fileName: 'spotlight-testimonial.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'messenger-testimonial',
        name: 'Messenger Testimonial',
        des: 'A modern FAAQ section .',
        tags: ['testimonial', 'modern', 'messenger testimonial'],
        componentSrc: MessengerTestimonials,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/testimonial-section/messenger-testimonial.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/testimonial-section/messenger-testimonial.tsx',
            fileName: 'messenger-testimonial.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'chat-interface-testimonial',
        name: 'Chat Interface',
        des: 'A modern FAAQ section .',
        tags: ['testimonial', 'modern', 'chat-interface testimonial'],
        componentSrc: ChatTestimonials,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/testimonial-section/chat-interface.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/testimonial-section/chat-interface.tsx',
            fileName: 'chat-interface.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'testimonial-basic',
        name: 'Testimonial Basic',
        des: 'A modern FAAQ section .',
        tags: ['testimonial', 'modern', 'testimonial basic'],
        componentSrc: TestimonialBasic,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/testimonial-section/testimonial-basic.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/testimonial-section/testimonial-basic.tsx',
            fileName: 'testimonial-basic.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'testimonial-carousel',
        name: 'Testimonial Carousel',
        des: 'A modern FAAQ section .',
        tags: ['testimonial', 'modern', 'testimonial carousel'],
        componentSrc: TestimonialCarousel,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/testimonial-section/testimonial-carousel.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/testimonial-section/testimonial-carousel.tsx',
            fileName: 'testimonial-carousel.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'marque-testimonial',
        name: 'Marque Testimonial',
        des: 'A modern FAAQ section .',
        tags: ['testimonial', 'modern', 'marque testimonial'],
        componentSrc: MarqueeTestimonials,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/testimonial-section/marque-testimonial.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/testimonial-section/marque-testimonial.tsx',
            fileName: 'marque-testimonial.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
    ],
  },
  {
    id: 'experience-section',
    name: 'Experience Section',
    url: '/blocks/experience-section',
    des: 'Beautiful Experience layouts to start your landing page.',
    imgclass: 'bg-linear-to-t from-rose-400 dark:to-yellow-400 to-orange-300',
    textClass: 'text-primary',
    imgSrc: ExperienceSectionImg,
    tags: ['experience', 'experience section', 'experience'],
    blocks: [
      {
        id: 'impact-experience',
        name: 'Impact Experience',
        des: 'A modern FAAQ section .',
        tags: ['experience', 'modern', 'impact experience'],
        componentSrc: ImpactExperience,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/experience-section/impact-experience.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/experience-section/impact-experience.tsx',
            fileName: 'impact-experience.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'portfolio-experience',
        name: 'Portfolio Experience',
        des: 'A modern FAAQ section .',
        tags: ['experience', 'modern', 'portfolio experience'],
        componentSrc: PortfolioExperience,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/experience-section/portfolio-experience.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/experience-section/portfolio-experience.tsx',
            fileName: 'portfolio-experience.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'creative-experience',
        name: 'Creative Experience',
        des: 'A modern FAAQ section .',
        tags: ['experience', 'modern', 'creative experience'],
        componentSrc: CreativeExperience,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/experience-section/creative-experience.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/experience-section/creative-experience.tsx',
            fileName: 'creative-experience.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'work-experience',
        name: 'Work Experience',
        des: 'A modern FAAQ section .',
        tags: ['experience', 'modern', 'work experience'],
        componentSrc: WorkExperience,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/experience-section/work-experience.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/experience-section/work-experience.tsx',
            fileName: 'work-experience.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'customer-experience',
        name: 'Customer Experience',
        des: 'A modern FAAQ section .',
        tags: ['experience', 'modern', 'customer experience'],
        componentSrc: CustomerExperience,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/experience-section/customer-experience.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/experience-section/customer-experience.tsx',
            fileName: 'customer-experience.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
    ],
  },
  {
    id: 'pricing-section',
    name: 'Pricing Section',
    url: '/blocks/pricing-section',
    des: 'Beautiful Pricing layouts to start your landing page.',
    imgclass:
      'bg-linear-to-tr from-yellow-400 dark:to-yellow-400 via-blue-200 to-blue-500',
    textClass: 'text-primary',
    imgSrc: PricingSectionImg,
    tags: ['pricing', 'pricing section', 'pricing'],
    blocks: [
      {
        id: 'growth-plans',
        name: 'Growth Plans',
        des: 'A modern FAAQ section .',
        tags: ['pricing', 'modern', 'growth plans'],
        componentSrc: GrowthPlans,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/pricing-section/growth-plans.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/pricing-section/growth-plans.tsx',
            fileName: 'growth-plans.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'pricing-overview',
        name: 'Overview',
        des: 'A modern FAAQ section .',
        tags: ['pricing', 'modern', 'overview'],
        componentSrc: PricingOverview,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/pricing-section/pricing-overview.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/pricing-section/pricing-overview.tsx',
            fileName: 'pricing-overview.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'pricing-grow-business',
        name: 'Grow Business',
        des: 'A modern FAAQ section .',
        tags: ['pricing', 'modern', 'grow business'],
        componentSrc: GrowthBusiness,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/pricing-section/grow-business.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/pricing-section/grow-business.tsx',
            fileName: 'grow-business.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'product-packs',
        name: 'Packs',
        des: 'A modern FAAQ section .',
        tags: ['pricing', 'modern', 'product packs'],
        componentSrc: ProductPacks,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/pricing-section/product-packs.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/pricing-section/product-packs.tsx',
            fileName: 'product-packs.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'startup-plans',
        name: 'Startup Plans',
        des: 'A modern startup plans section .',
        tags: ['pricing', 'modern', 'startup'],
        componentSrc: StartupPlans,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/pricing-section/startup-plans.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/pricing-section/startup-plans.tsx',
            fileName: 'startup-plans.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'subscription-details',
        name: 'Subscription Details',
        des: 'A modern subscription plans section .',
        tags: ['pricing', 'modern', 'subscription'],
        componentSrc: SubscriptionDetails,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/pricing-section/subscription-details.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/pricing-section/subscription-details.tsx',
            fileName: 'subscription-details.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
    ],
  },
  {
    id: 'faq-section',
    name: 'FAQ Section',
    url: '/blocks/faq-section',
    des: 'Beautiful FAQ layouts to start your landing page.',
    textClass: 'text-primary',
    imgclass: 'bg-linear-to-br from-blue-600 dark:to-blue-800 to-blue-200',
    imgSrc: FaqSectionImg,
    tags: ['FAQ', 'landing', 'above-the-fold'],
    blocks: [
      {
        id: 'faq-founder',
        name: 'FAQs Founder',
        des: 'A modern FAAQ section .',
        tags: ['FAQ', 'modern', 'founder'],
        componentSrc: FaqFounder,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/faq-section/faq-founder.tsx?raw'),
            pathSrc: '../../packages/blocks/src/faq-section/faq-founder.tsx',
            fileName: 'faq-founder.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'faq-tabbed-explorer',
        name: 'Tabbed Explorer FAQ',
        des: 'A modern FAAQ section .',
        tags: ['FAQ', 'modern', 'tabbed explorer'],
        componentSrc: FaqTabbedExplorer,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/faq-section/faq-tabbed-explorer.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/faq-section/faq-tabbed-explorer.tsx',
            fileName: 'faq-tabbed-explorer.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'faq-glass-card',
        name: 'Glass Card',
        des: 'A modern FAAQ section .',
        tags: ['FAQ', 'modern', 'glass card'],
        componentSrc: FaqGlassCard,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/faq-section/faq-glass-card.tsx?raw'),
            pathSrc: '../../packages/blocks/src/faq-section/faq-glass-card.tsx',
            fileName: 'faq-glass-card.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'faq-interactive-preview',
        name: 'Interactive Preview',
        des: 'A modern FAAQ section .',
        tags: ['FAQ', 'modern', 'interactive preview'],
        componentSrc: FaqInteractivePreview,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/faq-section/faq-interactive-preview.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/faq-section/faq-interactive-preview.tsx',
            fileName: 'faq-interactive-preview.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'faq-journey',
        name: 'Journey',
        des: 'A modern FAAQ section .',
        tags: ['FAQ', 'modern', 'Journey'],
        componentSrc: FaqJourney,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/faq-section/faq-journey.tsx?raw'),
            pathSrc: '../../packages/blocks/src/faq-section/faq-journey.tsx',
            fileName: 'faq-journey.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'faq-minimilastic',
        name: 'Minimilastic',
        des: 'A modern FAAQ section .',
        tags: ['FAQ', 'modern', 'faq minimilastic'],
        componentSrc: FaqMinimalist,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/faq-section/faq-minimilastic.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/faq-section/faq-minimilastic.tsx',
            fileName: 'faq-minimilastic.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
    ],
  },
  {
    id: 'footer-section',
    name: 'Footer Section',
    url: '/blocks/footer-section',
    des: 'Beautiful Footer layouts to start your landing page.',
    imgclass: 'bg-linear-to-tr from-neutral-800 to-neutral-200',
    textClass: 'text-primary',
    imgSrc: FooterSectionImg,
    tags: ['footer', 'footer section', 'footer'],
    blocks: [
      {
        id: 'footer-hero',
        name: 'Footer Hero',
        des: 'A modern FAAQ section .',
        tags: ['footer', 'modern', 'footer bento'],
        componentSrc: HeroFooter,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/footer-section/hero-footer.tsx?raw'),
            pathSrc: '../../packages/blocks/src/footer-section/hero-footer.tsx',
            fileName: 'hero-footer.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'footer-bento',
        name: 'Footer Bento',
        des: 'A modern FAAQ section .',
        tags: ['footer', 'modern', 'footer bento'],
        componentSrc: BentoFooter,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/footer-section/footer-bento.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/footer-section/footer-bento.tsx',
            fileName: 'footer-bento.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'footer-bold',
        name: 'Footer Bold',
        des: 'A modern FAAQ section .',
        tags: ['footer', 'modern', 'footer bold'],
        componentSrc: BoldFooter,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/footer-section/footer-bold.tsx?raw'),
            pathSrc: '../../packages/blocks/src/footer-section/footer-bold.tsx',
            fileName: 'footer-bold.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'footer-detailed',
        name: 'Footer Detailed',
        des: 'A modern FAAQ section .',
        tags: ['footer', 'modern', 'footer detailed'],
        componentSrc: DetailedFooter,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/footer-section/footer-detailed.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/footer-section/footer-detailed.tsx',
            fileName: 'footer-detailed.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'footer-minimal',
        name: 'Footer Minimal',
        des: 'A modern FAAQ section .',
        tags: ['footer', 'modern', 'footer minimal'],
        componentSrc: MinimalFooter,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/footer-section/footer-minimal.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/footer-section/footer-minimal.tsx',
            fileName: 'footer-minimal.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'footer-privilege',
        name: 'Footer Privilege',
        des: 'A modern FAAQ section .',
        tags: ['footer', 'modern', 'footer privilege'],
        componentSrc: FooterPrivilege,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/footer-section/footer-privilege.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/footer-section/footer-privilege.tsx',
            fileName: 'footer-privilege.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
      {
        id: 'footer-simple',
        name: 'Footer Simple',
        des: 'A modern FAAQ section .',
        tags: ['footer', 'modern', 'footer simple'],
        componentSrc: FooterSimple,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/footer-section/footer-simple.tsx?raw'),
            pathSrc:
              '../../packages/blocks/src/footer-section/footer-simple.tsx',
            fileName: 'footer-simple.tsx',
          },
          {
            fileSrc: require('./components/ui/timeline-animation.tsx?raw'),
            pathSrc: './components/ui/timeline-animation.tsx',
            fileName: 'timeline-animation.tsx',
          },
        ],
      },
    ],
  },
];

export function getBlocksDesignMeta() {
  return blocksDesign.map((s) => ({
    id: s.id,
    name: s.name,
    url: s.url,
    des: s.des,
    tags: Array.from(
      new Set([
        ...(s.tags || []),
        ...(s.blocks?.flatMap((b: any) => b.tags || []) || []),
      ])
    ),
  }));
}

export function getMinimalBlocksBySection() {
  return blocksDesign.map((section) => ({
    id: section.id,
    name: section.name,
    url: section.url,
    des: section.des,
    imgclass: section.imgclass,
    textClass: section.textClass,
    imgSrc: section.imgSrc,
    tags: section.tags,
    blocks: (section.blocks ?? []).map((block) => ({
      id: block.id,
      name: block.name,
      des: block.des,
    })),
  }));
}
