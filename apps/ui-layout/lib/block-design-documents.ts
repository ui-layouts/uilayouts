import 'server-only';

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const blockDesignDocumentPaths: Record<string, string> = {
  'about-agency': 'packages/blocks/src/about-section/about-agency/design.md',
  'about-architecture': 'packages/blocks/src/about-section/about-architecture/design.md',
  'about-bento': 'packages/blocks/src/about-section/about-bento/design.md',
  'about-business': 'packages/blocks/src/about-section/about-business/design.md',
  'about-creative': 'packages/blocks/src/about-section/about-creative/design.md',
  'about-ecommerse': 'packages/blocks/src/about-section/about-ecommerse/design.md',
  'about-experience': 'packages/blocks/src/about-section/about-experience/design.md',
  'about-me': 'packages/blocks/src/about-section/about-me/design.md',
  'about-mission': 'packages/blocks/src/about-section/about-mission/design.md',
  'about-sass': 'packages/blocks/src/about-section/about-sass/design.md',
  'about-vision': 'packages/blocks/src/about-section/about-vision/design.md',
  'about-whyus': 'packages/blocks/src/about-section/about-whyus/design.md',
  'advanced-stats': 'packages/blocks/src/stats-section/advanced-stats/index/design.md',
  'chat-interface-testimonial': 'packages/blocks/src/testimonial-section/chat-interface/design.md',
  'creative-experience': 'packages/blocks/src/experience-section/creative-experience/design.md',
  'customer-experience': 'packages/blocks/src/experience-section/customer-experience/design.md',
  'faq-founder': 'packages/blocks/src/faq-section/faq-founder/design.md',
  'faq-glass-card': 'packages/blocks/src/faq-section/faq-glass-card/design.md',
  'faq-interactive-preview': 'packages/blocks/src/faq-section/faq-interactive-preview/design.md',
  'faq-journey': 'packages/blocks/src/faq-section/faq-journey/design.md',
  'faq-minimilastic': 'packages/blocks/src/faq-section/faq-minimilastic/design.md',
  'faq-tabbed-explorer': 'packages/blocks/src/faq-section/faq-tabbed-explorer/design.md',
  'feature-bento': 'packages/blocks/src/feature-section/feature-bento/design.md',
  'feature-flow': 'packages/blocks/src/feature-section/feature-flow/design.md',
  'feature-hero': 'packages/blocks/src/feature-section/feature-hero/design.md',
  'feature-highlights': 'packages/blocks/src/feature-section/feature-highlights/design.md',
  'feature-nature': 'packages/blocks/src/feature-section/feature-nature/design.md',
  'feature-platform': 'packages/blocks/src/feature-section/feature-platform/design.md',
  'feature-service': 'packages/blocks/src/feature-section/feature-service/design.md',
  'feature-velocity': 'packages/blocks/src/feature-section/feature-velocity/design.md',
  'footer-bento': 'packages/blocks/src/footer-section/footer-bento/design.md',
  'footer-bold': 'packages/blocks/src/footer-section/footer-bold/design.md',
  'footer-detailed': 'packages/blocks/src/footer-section/footer-detailed/design.md',
  'footer-hero': 'packages/blocks/src/footer-section/hero-footer/design.md',
  'footer-minimal': 'packages/blocks/src/footer-section/footer-minimal/design.md',
  'footer-privilege': 'packages/blocks/src/footer-section/footer-privilege/design.md',
  'footer-simple': 'packages/blocks/src/footer-section/footer-simple/design.md',
  'growth-plans': 'packages/blocks/src/pricing-section/growth-plans/design.md',
  'hero-ai-ecommerce': 'packages/blocks/src/hero-section/hero-ai-ecommerce/design.md',
  'hero-ai-infrastructure': 'packages/blocks/src/hero-section/hero-ai-infrastructure/design.md',
  'hero-ai-value-proposition':
    'packages/blocks/src/hero-section/hero-ai-value-proposition/design.md',
  'hero-digital-success': 'packages/blocks/src/hero-section/hero-digital-success/design.md',
  'hero-financial': 'packages/blocks/src/hero-section/hero-financial/design.md',
  'hero-share-app': 'packages/blocks/src/hero-section/hero-share-app/design.md',
  'hero-social-app': 'packages/blocks/src/hero-section/hero-social-app/design.md',
  'impact-experience': 'packages/blocks/src/experience-section/impact-experience/design.md',
  'marque-testimonial': 'packages/blocks/src/testimonial-section/marque-testimonial/design.md',
  'messenger-testimonial':
    'packages/blocks/src/testimonial-section/messenger-testimonial/design.md',
  'portfolio-experience': 'packages/blocks/src/experience-section/portfolio-experience/design.md',
  'pricing-grow-business': 'packages/blocks/src/pricing-section/grow-business/design.md',
  'pricing-overview': 'packages/blocks/src/pricing-section/pricing-overview/design.md',
  'product-packs': 'packages/blocks/src/pricing-section/product-packs/design.md',
  'spotlight-testimonial':
    'packages/blocks/src/testimonial-section/spotlight-testimonial/design.md',
  'stack-testimonial': 'packages/blocks/src/testimonial-section/stack-testimonial/design.md',
  'startup-plans': 'packages/blocks/src/pricing-section/startup-plans/design.md',
  'stats-banner': 'packages/blocks/src/stats-section/stats-banner/design.md',
  'stats-bento': 'packages/blocks/src/stats-section/stats-bento/design.md',
  'stats-bold': 'packages/blocks/src/stats-section/stats-bold/design.md',
  'stats-details': 'packages/blocks/src/stats-section/stats-details/design.md',
  'stats-minimal': 'packages/blocks/src/stats-section/stats-minimal/design.md',
  'stats-section': 'packages/blocks/src/stats-section/stats-section/design.md',
  'subscription-details': 'packages/blocks/src/pricing-section/subscription-details/design.md',
  'team-classic': 'packages/blocks/src/team-section/team-classic/design.md',
  'team-clippath': 'packages/blocks/src/team-section/team-clippath/design.md',
  'team-expert': 'packages/blocks/src/team-section/team-expert/design.md',
  'team-magic': 'packages/blocks/src/team-section/team-magic/design.md',
  'team-modern': 'packages/blocks/src/team-section/team-modern/design.md',
  'team-social': 'packages/blocks/src/team-section/team-social/design.md',
  'team-synth': 'packages/blocks/src/team-section/team-synth/design.md',
  'team-troops': 'packages/blocks/src/team-section/team-troops/design.md',
  'team-vr': 'packages/blocks/src/team-section/team-vr/design.md',
  'testimonial-basic': 'packages/blocks/src/testimonial-section/testimonial-basic/design.md',
  'testimonial-carousel': 'packages/blocks/src/testimonial-section/testimonial-carousel/design.md',
  'work-experience': 'packages/blocks/src/experience-section/work-experience/design.md',
};

export function getBlockDesignMarkdown(id: string) {
  const documentPath = blockDesignDocumentPaths[id];
  if (!documentPath) throw new Error(`Missing adjacent design document for block: ${id}`);

  const repositoryRoot = resolve(process.cwd(), '../..');
  const markdown = readFileSync(resolve(repositoryRoot, documentPath), 'utf8');
  if (!markdown.trim()) throw new Error(`Empty design document for block: ${id}`);

  return markdown;
}
