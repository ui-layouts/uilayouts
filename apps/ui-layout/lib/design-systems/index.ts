import { about_agencyDesign } from './blocks/about-agency';
import { about_architectureDesign } from './blocks/about-architecture';
import { about_bentoDesign } from './blocks/about-bento';
import { about_businessDesign } from './blocks/about-business';
import { about_creativeDesign } from './blocks/about-creative';
import { about_ecommerseDesign } from './blocks/about-ecommerse';
import { about_experienceDesign } from './blocks/about-experience';
import { about_meDesign } from './blocks/about-me';
import { about_missionDesign } from './blocks/about-mission';
import { about_sassDesign } from './blocks/about-sass';
import { about_visionDesign } from './blocks/about-vision';
import { about_whyusDesign } from './blocks/about-whyus';
import { advanced_statsDesign } from './blocks/advanced-stats';
import { chat_interface_testimonialDesign } from './blocks/chat-interface-testimonial';
import { creative_experienceDesign } from './blocks/creative-experience';
import { customer_experienceDesign } from './blocks/customer-experience';
import { faq_founderDesign } from './blocks/faq-founder';
import { faq_glass_cardDesign } from './blocks/faq-glass-card';
import { faq_interactive_previewDesign } from './blocks/faq-interactive-preview';
import { faq_journeyDesign } from './blocks/faq-journey';
import { faq_minimilasticDesign } from './blocks/faq-minimilastic';
import { faq_tabbed_explorerDesign } from './blocks/faq-tabbed-explorer';
import { feature_bentoDesign } from './blocks/feature-bento';
import { feature_flowDesign } from './blocks/feature-flow';
import { feature_heroDesign } from './blocks/feature-hero';
import { feature_highlightsDesign } from './blocks/feature-highlights';
import { feature_natureDesign } from './blocks/feature-nature';
import { feature_platformDesign } from './blocks/feature-platform';
import { feature_serviceDesign } from './blocks/feature-service';
import { feature_velocityDesign } from './blocks/feature-velocity';
import { footer_bentoDesign } from './blocks/footer-bento';
import { footer_boldDesign } from './blocks/footer-bold';
import { footer_detailedDesign } from './blocks/footer-detailed';
import { footer_heroDesign } from './blocks/footer-hero';
import { footer_minimalDesign } from './blocks/footer-minimal';
import { footer_privilegeDesign } from './blocks/footer-privilege';
import { footer_simpleDesign } from './blocks/footer-simple';
import { growth_plansDesign } from './blocks/growth-plans';
import { hero_ai_ecommerceDesign } from './blocks/hero-ai-ecommerce';
import { hero_ai_infrastructureDesign } from './blocks/hero-ai-infrastructure';
import { hero_ai_value_propositionDesign } from './blocks/hero-ai-value-proposition';
import { hero_digital_successDesign } from './blocks/hero-digital-success';
import { hero_financialDesign } from './blocks/hero-financial';
import { hero_share_appDesign } from './blocks/hero-share-app';
import { hero_social_appDesign } from './blocks/hero-social-app';
import { impact_experienceDesign } from './blocks/impact-experience';
import { marque_testimonialDesign } from './blocks/marque-testimonial';
import { messenger_testimonialDesign } from './blocks/messenger-testimonial';
import { portfolio_experienceDesign } from './blocks/portfolio-experience';
import { pricing_grow_businessDesign } from './blocks/pricing-grow-business';
import { pricing_overviewDesign } from './blocks/pricing-overview';
import { product_packsDesign } from './blocks/product-packs';
import { spotlight_testimonialDesign } from './blocks/spotlight-testimonial';
import { stack_testimonialDesign } from './blocks/stack-testimonial';
import { startup_plansDesign } from './blocks/startup-plans';
import { stats_bannerDesign } from './blocks/stats-banner';
import { stats_bentoDesign } from './blocks/stats-bento';
import { stats_boldDesign } from './blocks/stats-bold';
import { stats_detailsDesign } from './blocks/stats-details';
import { stats_minimalDesign } from './blocks/stats-minimal';
import { stats_sectionDesign } from './blocks/stats-section';
import { subscription_detailsDesign } from './blocks/subscription-details';
import { team_classicDesign } from './blocks/team-classic';
import { team_clippathDesign } from './blocks/team-clippath';
import { team_expertDesign } from './blocks/team-expert';
import { team_magicDesign } from './blocks/team-magic';
import { team_modernDesign } from './blocks/team-modern';
import { team_socialDesign } from './blocks/team-social';
import { team_synthDesign } from './blocks/team-synth';
import { team_troopsDesign } from './blocks/team-troops';
import { team_vrDesign } from './blocks/team-vr';
import { testimonial_basicDesign } from './blocks/testimonial-basic';
import { testimonial_carouselDesign } from './blocks/testimonial-carousel';
import { work_experienceDesign } from './blocks/work-experience';
import type { DesignSystemSpec } from './types';

export const blockDesignSystems: Record<string, DesignSystemSpec> = {
  'hero-ai-infrastructure': hero_ai_infrastructureDesign,
  'hero-digital-success': hero_digital_successDesign,
  'hero-ai-value-proposition': hero_ai_value_propositionDesign,
  'hero-share-app': hero_share_appDesign,
  'hero-social-app': hero_social_appDesign,
  'hero-ai-ecommerce': hero_ai_ecommerceDesign,
  'hero-financial': hero_financialDesign,
  'feature-flow': feature_flowDesign,
  'feature-hero': feature_heroDesign,
  'feature-bento': feature_bentoDesign,
  'feature-nature': feature_natureDesign,
  'feature-velocity': feature_velocityDesign,
  'feature-highlights': feature_highlightsDesign,
  'feature-platform': feature_platformDesign,
  'feature-service': feature_serviceDesign,
  'about-ecommerse': about_ecommerseDesign,
  'about-creative': about_creativeDesign,
  'about-me': about_meDesign,
  'about-sass': about_sassDesign,
  'about-agency': about_agencyDesign,
  'about-architecture': about_architectureDesign,
  'about-mission': about_missionDesign,
  'about-bento': about_bentoDesign,
  'about-business': about_businessDesign,
  'about-whyus': about_whyusDesign,
  'about-vision': about_visionDesign,
  'about-experience': about_experienceDesign,
  'team-clippath': team_clippathDesign,
  'team-classic': team_classicDesign,
  'team-expert': team_expertDesign,
  'team-magic': team_magicDesign,
  'team-modern': team_modernDesign,
  'team-social': team_socialDesign,
  'team-synth': team_synthDesign,
  'team-troops': team_troopsDesign,
  'team-vr': team_vrDesign,
  'advanced-stats': advanced_statsDesign,
  'stats-banner': stats_bannerDesign,
  'stats-bento': stats_bentoDesign,
  'stats-section': stats_sectionDesign,
  'stats-details': stats_detailsDesign,
  'stats-bold': stats_boldDesign,
  'stats-minimal': stats_minimalDesign,
  'stack-testimonial': stack_testimonialDesign,
  'spotlight-testimonial': spotlight_testimonialDesign,
  'messenger-testimonial': messenger_testimonialDesign,
  'chat-interface-testimonial': chat_interface_testimonialDesign,
  'testimonial-basic': testimonial_basicDesign,
  'testimonial-carousel': testimonial_carouselDesign,
  'marque-testimonial': marque_testimonialDesign,
  'impact-experience': impact_experienceDesign,
  'portfolio-experience': portfolio_experienceDesign,
  'creative-experience': creative_experienceDesign,
  'work-experience': work_experienceDesign,
  'customer-experience': customer_experienceDesign,
  'growth-plans': growth_plansDesign,
  'pricing-overview': pricing_overviewDesign,
  'pricing-grow-business': pricing_grow_businessDesign,
  'product-packs': product_packsDesign,
  'startup-plans': startup_plansDesign,
  'subscription-details': subscription_detailsDesign,
  'faq-founder': faq_founderDesign,
  'faq-tabbed-explorer': faq_tabbed_explorerDesign,
  'faq-glass-card': faq_glass_cardDesign,
  'faq-interactive-preview': faq_interactive_previewDesign,
  'faq-journey': faq_journeyDesign,
  'faq-minimilastic': faq_minimilasticDesign,
  'footer-hero': footer_heroDesign,
  'footer-bento': footer_bentoDesign,
  'footer-bold': footer_boldDesign,
  'footer-detailed': footer_detailedDesign,
  'footer-minimal': footer_minimalDesign,
  'footer-privilege': footer_privilegeDesign,
  'footer-simple': footer_simpleDesign,
};

export function getBlockDesignSystem(id: string) {
  const design = blockDesignSystems[id];
  if (!design) throw new Error(`Missing authored design system for block: ${id}`);
  return design;
}
