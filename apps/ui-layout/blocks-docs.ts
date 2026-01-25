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
  AboutSections1,
  AboutSections2,
  AboutSections3,
  TeamClipPath,
  TeamClassic,
  TeamExpert,
  TeamMagic,
  TeamModern,
  TeamSocial,
  TeamSynth,
  TeamTroops,
  TeamVR,
} from '@repo/blocks';

import { FaqImg, HeroDigitalSuccessImg } from '@repo/blocks/assets/index';

export const blocksDesign = [
  {
    id: 'hero-section',
    name: 'Hero Section',
    url: '/blocks/hero-section',
    des: 'Beautiful hero layouts to start your landing page.',
    imgclass: 'object-cover',
    textClass: 'text-white',
    imgSrc: HeroDigitalSuccessImg,
    tags: ['hero', 'landing', 'above-the-fold'],
    blocks: [
      {
        id: 'hero-digital-sucess',
        name: 'Digital Sucess',
        des: 'A modern hero section with call-to-action and image.',
        tags: ['hero', 'modern', 'cta', 'streamline'],
        componentSrc: HeroDigitalSuccess,
        filePath: [
          {
            fileSrc: require('../../packages/blocks/src/hero-section/hero-digital-sucess.tsx?raw'),
            fileName: 'digital-sucess.tsx',
            pathSrc:
              '../../packages/blocks/src/hero-section/hero-digital-sucess.tsx',
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
    id: 'faq-section',
    name: 'FAQ Section',
    url: '/blocks/faq-section',
    des: 'Beautiful FAQ layouts to start your landing page.',
    imgclass: 'object-contain',
    textClass: 'text-primary',
    imgSrc: FaqImg,
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
        name: 'Interactive Preview',
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
    id: 'about-section',
    name: 'About Section',
    url: '/blocks/about-section',
    des: 'Beautiful FAQ layouts to start your landing page.',
    imgclass: 'object-contain',
    textClass: 'text-primary',
    imgSrc: FaqImg,
    tags: ['about', 'about section', 'about '],
    blocks: [
      {
        id: 'about-section1',
        name: 'FAQs Founder',
        des: 'A modern FAAQ section .',
        tags: ['FAQ', 'modern', 'founder'],
        componentSrc: AboutSections1,
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
        id: 'about-section2',
        name: 'Tabbed Explorer FAQ',
        des: 'A modern FAAQ section .',
        tags: ['FAQ', 'modern', 'tabbed explorer'],
        componentSrc: AboutSections2,
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
        id: 'about-section3',
        name: 'Glass Card',
        des: 'A modern FAAQ section .',
        tags: ['FAQ', 'modern', 'glass card'],
        componentSrc: AboutSections3,
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
    ],
  },
  {
    id: 'team-section',
    name: 'Team Section',
    url: '/blocks/team-section',
    des: 'Beautiful FAQ layouts to start your landing page.',
    imgclass: 'object-contain',
    textClass: 'text-primary',
    imgSrc: FaqImg,
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
];
