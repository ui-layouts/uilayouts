import {
  COMPONENT_KEYS,
  DOCS_CATEGORY_GROUP,
  DOCS_CATEGORY_KEY,
} from '../const/docs';
import {
  DocsCategoryKey,
  DocsFileRef,
  DocsNavigationCategory,
} from '../types/docs';
import React from 'react';

export const DocsNavigationCategories: DocsNavigationCategory[] = [
  {
    href: '/components/liquid-glass',
    name: 'Liquid-Glass',
    key: DOCS_CATEGORY_KEY['liquid-glass'],
    group: DOCS_CATEGORY_GROUP.VisualEffects,
    new: true,
    tags: [
      'Liquid-Glass',
      'liquid glass',
      'liquid glass component',
      'liquid glass card',
      'liquid glass weather',
      'liquid glass weather component',
      'liquid glass notification',
      'liquid glass notification component',
      'liquid glass mobile icons',
      'liquid glass mobile icons component',
      'liquid glass sidebar menu',
      'liquid glass sidebar menu component',
    ],
  },
  {
    href: '/components/swapy',
    name: 'Swapy Drag',
    key: DOCS_CATEGORY_KEY['swapy'],
    group: DOCS_CATEGORY_GROUP.AnimationMotion,
    new: true,
    updated: false,
    tags: [
      'Swapy drag',
      'swapy draggable',
      'swapy items',
      'swapy sortable',
      'swapy list',
    ],
  },
  {
    href: '/components/dialog',
    name: 'Dialog',
    key: DOCS_CATEGORY_KEY['dialog'],
    group: DOCS_CATEGORY_GROUP.Overlays,
    tags: ['dialog', 'popup', 'modal', 'UI-component'],
  },
  {
    href: '/components/color-picker',
    name: 'Color Picker',
    key: DOCS_CATEGORY_KEY['color-picker'],
    group: DOCS_CATEGORY_GROUP.Forms,
    tags: [],
  },
  {
    href: '/components/buttons',
    name: 'Buttons',
    key: DOCS_CATEGORY_KEY['buttons'],
    group: DOCS_CATEGORY_GROUP.Forms,
    tags: [],
    updated: false,
  },
  {
    href: '/components/noise',
    name: 'Noise',
    key: DOCS_CATEGORY_KEY['noise'],
    group: DOCS_CATEGORY_GROUP.VisualEffects,
    new: false,
    tags: ['noise', 'effect', 'visual', 'distortion', 'shader'],
  },
  {
    href: '/components/globe',
    name: 'Globe',
    key: DOCS_CATEGORY_KEY['globe'],
    group: DOCS_CATEGORY_GROUP.Visual3D,
    tags: ['threejs', '3d globe', 'r3f globe', 'cobe', 'code globe example'],
  },
  {
    href: '/components/footers',
    name: 'Footers',
    key: DOCS_CATEGORY_KEY['footers'],
    group: DOCS_CATEGORY_GROUP.Layout,
    tags: [
      'footer',
      'animation',
      'logo',
      'branding',
      'animated',
      'hover',
      'interactive',
    ],
  },

  {
    href: '/components/buy-me-coffee',
    name: 'Buy Me A Coffee',
    key: DOCS_CATEGORY_KEY['buy-me-coffee'],
    group: DOCS_CATEGORY_GROUP.DataDisplay,
    tags: [
      'Sponser',
      'Buy me a coffee',
      'co-fi',
      'Buy-me-a-coffee',
      'supports',
    ],
  },

  {
    href: '/components/drag-items',
    name: 'Drag Items',
    key: DOCS_CATEGORY_KEY['drag-items'],
    updated: false,
    group: DOCS_CATEGORY_GROUP.AnimationMotion,

    tags: ['drag', 'draggable', 'items', 'sortable', 'list'],
  },
  {
    href: '/components/image-ripple-effect',
    name: 'Img Ripple Effect',
    key: DOCS_CATEGORY_KEY['image-ripple-effect'],
    group: DOCS_CATEGORY_GROUP.Visual3D,
    tags: [
      'img-ripple-effect',
      'image ripple effect',
      'images-ripple-effect',
      'threejs ripple effect',
      'React three Fiber Ripple Effect',
    ],
  },
  {
    href: '/components/r3f-blob',
    name: 'R3F Blob',
    key: DOCS_CATEGORY_KEY['r3f-blob'],
    group: DOCS_CATEGORY_GROUP.Visual3D,
    new: true,
    tags: ['r3f-blob', 'threejs blob', 'animated blob', 'blob'],
  },
  {
    href: '/components/mesh-gradients',
    name: 'Mesh Gradients',
    key: DOCS_CATEGORY_KEY['mesh-gradients'],
    group: DOCS_CATEGORY_GROUP.Visual3D,
    new: true,
    tags: [
      'mesh-gradient',
      'Mesh Gradients',
      'Gradients',
      'r3f gradients',
      'threejs gradients',
    ],
  },
  {
    href: '/components/blur-vignette',
    name: 'Blur Vignette',
    key: DOCS_CATEGORY_KEY['blur-vignette'],
    group: DOCS_CATEGORY_GROUP.VisualEffects,
    tags: [
      'blur-sm',
      'vignette',
      'video',
      'blur-vignette',
      'background',
      'overlay',
      'effect',
      'media',
      'visual-effect',
      'image',
      'blur-effect',
      'vignette-img',
      'fade',
      'card',
      'blur-card',
      'background-effect',
      'shadow-sm',
      'card-design',
    ],
  },
  {
    href: '/components/motion-number',
    name: 'Motion Number',
    key: DOCS_CATEGORY_KEY['motion-number'],
    group: DOCS_CATEGORY_GROUP.Forms,
    tags: [
      'animation',
      'number-animation',
      'input',
      'input animation',
      'motion number input',
      'number-flow',
      'number flow',
      'number-increment',
      'counter',
      'trading',
      'motion number trading',
      'post-effect',
      'shadcn slider',
      'animated slider tag',
      'motion number slider',
      'number-sequence',
      'upvotes',
      'motion number',
      'motion-number',
      'like dislikes',
      'like-dislikes',
      'downvotes',
    ],
  },
  {
    href: '/components/liquid-gradient',
    name: 'liquid-gradient',
    key: DOCS_CATEGORY_KEY['liquid-gradient'],
    group: DOCS_CATEGORY_GROUP.VisualEffects,
    tags: [
      'uilayouts',
      'github',
      'button',
      'liquid-gradient',
      'Liquid Gradient',
      'github-button',
      'uilayouts github button',
      'repository',
      'link',
      'cta',
      'stars',
      'fork',
      'open-source',
      'profile',
    ],
  },
  {
    href: '/components/range-slider',
    name: 'Range Slider',
    key: DOCS_CATEGORY_KEY['range-slider'],
    group: DOCS_CATEGORY_GROUP.Forms,
    tags: [
      'input slider',
      'Default range slider',
      'default-Range-Slider',
      'animated motion number slider',
      'motion input slider',
      'dual range slider',
      'Dual-Range-Slider',
      'static range slider',
      'Static-Range-Slider',
      'Basic Range-Slider',
      'Default Range-Slider',
      'position range slider',
      'Position-Range-Slider',
      'Position Range-Slider',
      'form component',
      'input',
      'user interface',
    ],
  },
  {
    href: '/components/password',
    name: 'Password',
    key: DOCS_CATEGORY_KEY['password'],
    group: DOCS_CATEGORY_GROUP.Forms,
    tags: [
      'password',
      'pass',
      'password hide show icon',
      'showhide pass',
      'show/hide pass',
      'Show/Hide Pass',
      'Pass Show/Hide ',
      'Pass Strength Indicator',
      'pass-strength-indicator',
      'Progress Password Input',
      'ProgressPasswordInput',
      'Pass Strength Indicator2',
      'pass-strength-indicator2',
      'Progress Password2',
      'ProgressPasswordInput2',
      'Strong Pass Hover Indicator',
      'Hover Indicator',
      'Divide Progress Password ',
      'Progress Divide Password2 ',
      'DivideProgressPasswordInput2',
      'Inline Pass Indicator',
      'Password Status Indicator',
      'Pass Status Indicator',
      'Status Password ',
      'StatusPasswordInput',
      'Confirm pass',
      'Confirm Pass With Indicator',
      'Confirm Password Check',
      'Confirm Password',
      'form component',
      'input',
      'user interface',
    ],
  },
  {
    href: '/components/tags-input',
    name: 'UTube Tags',
    key: DOCS_CATEGORY_KEY['tags-input'],
    group: DOCS_CATEGORY_GROUP.Forms,
    tags: [
      'Tags Input',
      'Tags Edit False',
      'Youtube Tags',
      'Github Like Tags',
      'github tags',
      'input tags',
      'form component',
      'input',
      'user interface',
    ],
  },
  {
    href: '/components/phone-input',
    name: 'Phone Input',
    key: DOCS_CATEGORY_KEY['phone-input'],
    group: DOCS_CATEGORY_GROUP.Forms,
    tags: [
      'phone-input',
      'Phone Input',
      'Input',
      'form component',
      'input',
      'user interface',
    ],
  },
  {
    href: '/components/datetime-picker',
    name: 'Datetime Picker',
    key: DOCS_CATEGORY_KEY['datetime-picker'],
    group: DOCS_CATEGORY_GROUP.Forms,
    tags: [
      'time picker',
      'time-picker',
      'Time Picker',
      'date picker',
      'date-picker',
      'Date Picker',
      'date time picker',
      'date-time picker',
      'DateTime Picker',
      'form component',
      'input',
      'user interface',
    ],
  },
  {
    href: '/components/multi-selector',
    name: 'Multi Selector',
    key: DOCS_CATEGORY_KEY['multi-selector'],
    group: DOCS_CATEGORY_GROUP.Forms,
    tags: [
      'Multi Selector Input',
      'Selector Input Tag',
      'Multiple Selector Input',
      'form component',
      'input',
      'user interface',
    ],
  },
  {
    href: '/components/file-upload',
    name: 'File Upload',
    key: DOCS_CATEGORY_KEY['file-upload'],
    new: false,
    group: DOCS_CATEGORY_GROUP.Forms,
    tags: [
      'DropZone input',
      'File Upload Input ',
      'file-upload',
      'file upload preview',
      'chat box upload file',
      'Chat Box',
      'Chat-Box',
      'Img preview',
      'form component',
      'input',
      'user interface',
    ],
  },
  {
    href: '/components/clip-path',
    name: 'Clip-Path ',
    key: DOCS_CATEGORY_KEY['clip-path'],
    new: false,
    group: DOCS_CATEGORY_GROUP.MediaGalleries,
    tags: ['clip-path', 'creative', 'masking', 'corporate', 'symbolic', 'mask'],
  },
  {
    href: '/components/image-masking',
    name: 'Image Masking',
    key: DOCS_CATEGORY_KEY['image-masking'],
    new: false,
    group: DOCS_CATEGORY_GROUP.MediaGalleries,
    tags: [
      'image-masking',
      'creative',
      'masking',
      'animal-image-masking',
      'Animal Image Masking ',
      'center-image-masking',
      'background Image Masking ',
      'fixedbg-image-masking',
      'Fixed BG Image Masking ',
      'Watersplash-image-masking',
      'Water Splash Image Masking ',
      'BG Image Masking ',
    ],
  },
  {
    href: '/components/video-masking',
    name: 'Video Masking',
    key: DOCS_CATEGORY_KEY['video-masking'],
    new: false,
    group: DOCS_CATEGORY_GROUP.MediaGalleries,
    tags: [
      'video',
      'masking',
      'creative',
      'splash',
      'hexagon video masking',
      ' hexagon masking',
      'hexagon video masking2',
      ' hexagon masking2',
      'text overlay video',
      'text-overlay video masking',
    ],
  },
  {
    href: '/components/hover-cards',
    name: 'Hover cards',
    key: DOCS_CATEGORY_KEY['hover-cards'],
    group: DOCS_CATEGORY_GROUP.DataDisplay,
    tags: [
      'hover',
      'stripe',
      'card',
      'animation',
      'interaction',
      'design',
      'ui',
      'style',
      'ui card',
      'component',
    ],
  },
  {
    href: '/components/product-cards',
    name: 'Product-Cards',
    key: DOCS_CATEGORY_KEY['product-cards'],
    group: DOCS_CATEGORY_GROUP.DataDisplay,
    tags: [
      'product',
      'card',
      'ui',
      'design',
      'ecommerce',
      'style',
      'ui card',
      'component',
    ],
  },
  {
    href: '/components/gradient-border',
    name: 'gradient-border',
    key: DOCS_CATEGORY_KEY['gradient-border'],
    group: DOCS_CATEGORY_GROUP.DataDisplay,
    tags: [
      'gradient',
      'border',
      'card',
      'background',
      'style',
      'design',
      'ui',
      'effect',
      'ui card',
      'component',
    ],
  },
  {
    href: '/components/spotlight-cards',
    name: 'Spotlight cards',
    key: DOCS_CATEGORY_KEY['spotlight-cards'],
    group: DOCS_CATEGORY_GROUP.VisualEffects,
    tags: [
      'spotlight',
      'card',
      'ui',
      'design',
      'highlight',
      'feature',
      'ui card',
      'component',
    ],
  },
  {
    href: '/components/timeline-animation',
    name: 'Timeline Animation',
    key: DOCS_CATEGORY_KEY['timeline-animation'],
    group: DOCS_CATEGORY_GROUP.AnimationMotion,
    new: false,
    updated: true,
    tags: [
      'timeline-animation',
      'timeline animation',
      'animation',
      'scroll',
      'motion',
      'interactive',
    ],
  },
  {
    href: '/components/scroll-animation',
    name: 'Scroll Animation',
    key: DOCS_CATEGORY_KEY['scroll-animation'],
    new: false,
    updated: true,
    group: DOCS_CATEGORY_GROUP.AnimationMotion,
    tags: [
      'scroll',
      'animation',
      'element',
      'repeat',
      'text',
      'motion',
      'interactive',
    ],
  },
  {
    href: '/components/scroll-text',
    name: 'Scroll Text',
    key: DOCS_CATEGORY_KEY['scroll-text'],
    new: false,
    updated: true,
    group: DOCS_CATEGORY_GROUP.AnimationMotion,
    tags: ['scroll', 'text', 'animation'],
  },
  {
    href: '/components/scroll-text-marquee',
    name: 'Text Maruqee',
    key: DOCS_CATEGORY_KEY['scroll-text-marquee'],
    group: DOCS_CATEGORY_GROUP.AnimationMotion,
    tags: ['marquee', 'text', 'animation'],
  },
  {
    href: '/components/randomized-text-effect',
    name: 'Randomized Text',
    key: DOCS_CATEGORY_KEY['randomized-text-effect'],
    group: DOCS_CATEGORY_GROUP.AnimationMotion,
    new: false,
    tags: ['random', 'text', 'effect'],
  },
  {
    href: '/components/image-mousetrail',
    name: 'Image Mousetrail',
    key: DOCS_CATEGORY_KEY['image-mousetrail'],
    group: DOCS_CATEGORY_GROUP.AnimationMotion,
    new: false,
    tags: [
      'mouse-trail',
      'animation',
      'image-effect',
      'motion-trail',
      'small-images',
      'interactive',
      'disappearing-effect',
      'interactive-animation',
      'mouse-motion',
      'Without Component Mousetrail',
      'Image Mouse Trail Without Components',
    ],
  },
  {
    href: '/components/image-reveal',
    name: 'Image Reveal',
    key: DOCS_CATEGORY_KEY['image-reveal'],
    group: DOCS_CATEGORY_GROUP.VisualEffects,
    tags: [
      'image',
      'reveal',
      'image-reveal',
      'transition',
      'animation',
      'hover-effect',
      'scroll-reveal',
      'gallery',
      'fade-in',
      'image-reveal2',
      'scroll',
      'parallax',
      'fade',
    ],
  },
  {
    href: '/components/progressive-carousel',
    name: 'Progressive Carousel',
    key: DOCS_CATEGORY_KEY['progressive-carousel'],
    new: false,
    group: DOCS_CATEGORY_GROUP.MediaGalleries,
    tags: [
      'carousel',
      'horizontal',
      'progressive-carousel',
      'scroll-carousel',
      'vertical',
      'vertical-scroll',
    ],
  },
  {
    href: '/components/blocks',
    name: 'Blocks',
    key: DOCS_CATEGORY_KEY['blocks'],
    group: DOCS_CATEGORY_GROUP.VisualEffects,
    tags: [
      'blocks',
      'background',
      'bg-blocks',
      'layout',
      'design',
      'grid',
      'tiles',
      'bg-effect',
    ],
  },
  {
    href: '/components/animated-beam',
    name: 'Animated Beam',
    key: DOCS_CATEGORY_KEY['animated-beam'],
    group: DOCS_CATEGORY_GROUP.VisualEffects,
    tags: [
      'animated',
      'beam',
      'default',
      'animation',
      'effect',
      'motion',
      'visual',
      'light-beam',
      'bidirectional',
      'light',
      'visual-motion',
      'unidirectional',
      'multiple-input',
      'data-input',
      'multiple-output',
      'visual-output',
    ],
  },

  {
    href: '/components/media-modal',
    name: 'Media Modal',
    key: DOCS_CATEGORY_KEY['media-modal'],
    group: DOCS_CATEGORY_GROUP.Overlays,
    tags: ['media', 'modal', 'popup', 'UI', 'image modal'],
  },
  {
    href: '/components/linear-modal',
    name: 'Linear Modal',
    key: DOCS_CATEGORY_KEY['linear-modal'],
    group: DOCS_CATEGORY_GROUP.Overlays,
    updated: true,
    tags: [
      'card',
      'linear-layout',
      'linear-modal',
      'linear-card',
      'UI-component',
      'modal-card',
    ],
  },
  {
    href: '/components/gallery-modal',
    name: 'Gallery Modal',
    key: DOCS_CATEGORY_KEY['gallery-modal'],
    group: DOCS_CATEGORY_GROUP.Overlays,
    tags: [
      'gallery',
      'accordion',
      'modal',
      'media',
      'slider',
      'media-modal',
      'interactive',
      'unsplash',
      'image-gallery',
    ],
  },
  {
    href: '/components/responsive-modal',
    name: 'Responsive Modal',
    key: DOCS_CATEGORY_KEY['responsive-modal'],
    group: DOCS_CATEGORY_GROUP.Overlays,
    updated: true,
    tags: ['drawer', 'responsive drawer', 'navigation', 'responsive', 'menu'],
  },

  {
    href: '/components/directional-drawer',
    name: 'Directional Drawer',
    key: DOCS_CATEGORY_KEY['directional-drawer'],
    new: true,
    group: DOCS_CATEGORY_GROUP.Overlays,
    tags: [
      'sidebar',
      'vaul',
      'navigation',
      'drawer',
      'responsive',
      'Left Sidebar',
      'right drawer',
      'top drawer',
      'bottom drawer',
      'Left Drawer',
      'directional drawer',
      'Responsive Drawer',
    ],
  },
  {
    href: '/components/motion-drawer',
    name: 'Motion Drawer',
    key: DOCS_CATEGORY_KEY['motion-drawer'],
    group: DOCS_CATEGORY_GROUP.Overlays,
    new: true,
    tags: [
      'sidebar',
      'navigation',
      'drawer',
      'responsive',
      'Left Sidebar',
      'right drawer',
      'framer-motion drawer',
      'motion drawer',
    ],
  },
  {
    href: '/components/responsive-header',
    name: 'Responsive-Header',
    key: DOCS_CATEGORY_KEY['responsive-header'],
    group: DOCS_CATEGORY_GROUP.Layout,
    updated: true,
    tags: ['header', 'responsive', 'navigation-bar', 'menu'],
  },
  {
    href: '/components/horizontal-scroll',
    name: 'Horizontal Scroll',
    key: DOCS_CATEGORY_KEY['horizontal-scroll'],
    group: DOCS_CATEGORY_GROUP.AnimationMotion,
    tags: [
      'White 3D Globe',
      'White 3D Globe Card',
      'horizontal',
      'scroll',
      'framer',
    ],
  },
  {
    href: '/components/stacking-card',
    name: 'Stacking Card',
    key: DOCS_CATEGORY_KEY['stacking-card'],
    group: DOCS_CATEGORY_GROUP.AnimationMotion,
    tags: [
      'Card Stack',
      'Interactive Cards',
      'CSS Stacking',
      'Details Card',
      'CSS Image Stack',
      'Stacking Card',
    ],
  },
  {
    href: '/components/smooth-scroll',
    name: 'Smooth-Scroll',
    key: DOCS_CATEGORY_KEY['smooth-scroll'],
    group: DOCS_CATEGORY_GROUP.AnimationMotion,
    tags: ['Smooth Scrolling', 'Lenis Smooth Scroll', 'Scroll Animation'],
  },
  {
    href: '/components/sticky-scroll',
    name: 'Sticky Scroll',
    key: DOCS_CATEGORY_KEY['sticky-scroll'],
    group: DOCS_CATEGORY_GROUP.AnimationMotion,
    new: false,
    tags: [
      'Sticky Scroll',
      'Section',
      'Sticky Gallery',
      'Gallery Scroll',
      'Sticky Hero',
      'Hero Section',
    ],
  },
  {
    href: '/components/tabs',
    name: 'Tabs',
    key: DOCS_CATEGORY_KEY['tabs'],
    group: DOCS_CATEGORY_GROUP.Navigation,
    tags: [
      'tabs',
      'ui',
      'navigation',
      'component',
      'design',
      'creative',
      'form',
      'registration',
    ],
  },
  {
    href: '/components/image-tabs',
    name: 'Image Tabs',
    key: DOCS_CATEGORY_KEY['image-tabs'],
    group: DOCS_CATEGORY_GROUP.Navigation,
    tags: ['tabs', 'image', 'ui', 'gallery', 'design'],
  },
  {
    href: '/components/magnified-doc',
    name: 'Magnified-Doc',
    key: DOCS_CATEGORY_KEY['magnified-doc'],
    group: DOCS_CATEGORY_GROUP.Navigation,
    tags: ['tabs', 'ui', 'magnified', 'document', 'design'],
  },
  {
    href: '/components/sparkles',
    name: 'Sparkles',
    key: DOCS_CATEGORY_KEY['sparkles'],
    group: DOCS_CATEGORY_GROUP.AnimationMotion,
    tags: [
      'sparkles',
      '3d globe sparkles',
      'animation sparkles',
      'sparkles particle',
    ],
  },
  {
    href: '/components/sparkles-title',
    name: 'Sparkles Title',
    key: DOCS_CATEGORY_KEY['sparkles-title'],
    group: DOCS_CATEGORY_GROUP.AnimationMotion,
    tags: ['sparkles title', 'mousemove sparkles'],
  },
  {
    href: '/components/carousel',
    name: 'Carousel',
    key: DOCS_CATEGORY_KEY['carousel'],
    updated: true,
    group: DOCS_CATEGORY_GROUP.MediaGalleries,
    tags: [
      'carousel',
      'default',
      'slider',
      'basic-slider',
      'embla-carousel',
      'align',
      'centered',
      'alignment-slider',
      'classname',
      'custom-slider',
      'themed-slider',
      'number',
      'numeric-slider',
      'counter-slider',
      'scale',
      'zoom-slider',
      'scalable-carousel',
      'thumbnail',
      'preview-slider',
      'image-carousel',
      'autostart',
      'auto-slider',
      'autoplay-carousel',
    ],
  },
  {
    href: '/components/framer-carousel',
    name: 'Framer Carousel',
    key: DOCS_CATEGORY_KEY['framer-carousel'],
    group: DOCS_CATEGORY_GROUP.MediaGalleries,
    updated: true,
    tags: [
      'carousel',
      'motion/react',
      'animated-carousel',
      'carousel-2',
      'carousel-1',
    ],
  },
  {
    href: '/components/accordion',
    name: 'Accordion',
    key: DOCS_CATEGORY_KEY['accordion'],
    group: DOCS_CATEGORY_GROUP.Disclosure,
    updated: true,
    tags: [
      'accordion',
      'faqs accordion',
      'layout',
      'expandable',
      'collapsible',
      'single',
      'multi',
    ],
  },
  {
    href: '/components/faqs',
    name: 'FAQs',
    key: DOCS_CATEGORY_KEY['faqs'],
    group: DOCS_CATEGORY_GROUP.Disclosure,
    tags: [
      'accordion',
      'faq',
      'questions',
      'answers',
      'expandable',
      'collapsible',
    ],
  },
  {
    href: '/components/image-accordions',
    name: 'Image Accordion',
    key: DOCS_CATEGORY_KEY['image-accordions'],
    group: DOCS_CATEGORY_GROUP.Disclosure,
    tags: [
      'accordion',
      'image',
      'hover',
      'interactive',
      'expandable',
      'tailwind',
      'responsive',
    ],
  },
  {
    href: '/components/grid',
    name: 'Grid',
    key: DOCS_CATEGORY_KEY['grid'],
    group: DOCS_CATEGORY_GROUP.Layout,
    tags: [
      'grid',
      'Normal Grid',
      'normal grid',
      'normalgrid',
      'box grid',
      'Box Grid',
      'condition grid',
      'Contidion Grid',
      'unsplash grid',
      'Unsplash Grid',
    ],
  },
  {
    href: '/components/masonary-grid',
    name: 'Masonary',
    key: DOCS_CATEGORY_KEY['masonary-grid'],
    group: DOCS_CATEGORY_GROUP.Layout,
    tags: ['bento grid', 'grid', 'masonary grid'],
  },
  {
    href: '/components/marquee',
    name: 'Marquee',
    key: DOCS_CATEGORY_KEY['marquee'],
    group: DOCS_CATEGORY_GROUP.AnimationMotion,
    tags: ['default', 'marquee', 'animation', 'vertical', 'logos', '3d'],
  },
  {
    href: '/components/infinity-brand',
    name: 'Infinity Brand',
    key: DOCS_CATEGORY_KEY['infinity-brand'],
    group: DOCS_CATEGORY_GROUP.AnimationMotion,
    tags: ['infinity', 'brand', 'marquee'],
  },
];
const humanize = (key: string) =>
  key
    .replace(/[_-]+/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());

export interface IAllComponents {
  category: DocsCategoryKey;
  componentName: string;
  componentSrc?: React.LazyExoticComponent<React.ComponentType<any>>;
  iframeSrc?: string;
  tags: string[];
  iframe?: boolean;
  center?: boolean;
  href: string;
  slug: string;
  title: string;
  iframelink?: string;
  filesrc?: string;
  filesArray?: DocsFileRef[];
  description: string;
}
export type ComponentMeta = {
  category: string;
  slug: string;
  href: string;
  title: string;
  description: string;
  tags: string[];
};

export const AllComponents: IAllComponents[] = [
  {
    category: DOCS_CATEGORY_KEY['liquid-glass'],
    title: humanize(COMPONENT_KEYS.LIQUID_GLASS_SIDEBAR_MENU),
    slug: 'liquid-glass/sidebar-menu',
    description:
      'LIQUID GLASS SIDEBAR MENU component with liquid-like animations',
    href: '/components/liquid-glass/sidebar-menu',
    componentName: COMPONENT_KEYS.LIQUID_GLASS_SIDEBAR_MENU,
    filesrc: require('../registry/components/liquid-glass/sidebar-menu.tsx?raw'),
    iframeSrc: 'live-components/liquid-glass-sidebar-menu',
    componentSrc: React.lazy(
      () => import('@/registry/components/liquid-glass/sidebar-menu')
    ),
    tags: [
      'liquid-glass',
      'liquid glass',
      'liquid glass component',
      'reactjs liquid glass components',
      'nextjs liquid glass components',
    ],
  },

  {
    category: 'liquid-glass',
    title: humanize(COMPONENT_KEYS.LIQUID_GLASS_MOBILE_ICONS),
    slug: 'liquid-glass/mobile-icons',
    description:
      'LIQUID GLASS MOBILE ICONS component with liquid-like animations',
    href: '/components/liquid-glass/mobile-icons',
    componentName: COMPONENT_KEYS.LIQUID_GLASS_MOBILE_ICONS,
    filesrc: require('../registry/components/liquid-glass/mobile-icons-liquid.tsx?raw'),
    iframeSrc: 'live-components/liquid-glass-mobile-icons',
    componentSrc: React.lazy(
      () => import('@/registry/components/liquid-glass/mobile-icons-liquid')
    ),
    tags: [
      'liquid-glass',
      'liquid glass',
      'liquid glass component',
      'reactjs liquid glass components',
      'nextjs liquid glass components',
    ],
  },

  {
    category: 'liquid-glass',
    title: humanize(COMPONENT_KEYS.LIQUID_GLASS_WEATHER),
    slug: 'liquid-glass/weather',
    description: 'LIQUID GLASS WEATHER component with liquid-like animations',
    href: '/components/liquid-glass/weather',
    componentName: COMPONENT_KEYS.LIQUID_GLASS_WEATHER,
    filesrc: require('../registry/components/liquid-glass/weather-liquid.tsx?raw'),
    iframeSrc: 'live-components/liquid-glass-weather',
    componentSrc: React.lazy(
      () => import('@/registry/components/liquid-glass/weather-liquid')
    ),
    tags: [
      'liquid-glass',
      'liquid glass',
      'liquid glass component',
      'reactjs liquid glass components',
      'nextjs liquid glass components',
    ],
  },

  {
    category: 'liquid-glass',
    title: humanize(COMPONENT_KEYS.LIQUID_GLASS_NOTIFICATION),
    slug: 'liquid-glass/notification',
    description:
      'LIQUID GLASS NOTIFICATION component with liquid-like animations',
    href: '/components/liquid-glass/notification',
    componentName: COMPONENT_KEYS.LIQUID_GLASS_NOTIFICATION,
    filesrc: require('../registry/components/liquid-glass/notification.tsx?raw'),
    iframeSrc: 'live-components/liquid-glass-notification',
    componentSrc: React.lazy(
      () => import('@/registry/components/liquid-glass/notification')
    ),
    tags: [
      'liquid-glass',
      'liquid glass',
      'liquid glass component',
      'reactjs liquid glass components',
      'nextjs liquid glass components',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['color-picker'],
    componentName: COMPONENT_KEYS.DEFAULT_COLOR_PICKER,
    title: humanize(COMPONENT_KEYS.DEFAULT_COLOR_PICKER),
    href: '/components/color-picker',
    slug: 'color-picker',
    description: 'DEFAULT COLOR PICKER component',
    filesrc: require('../registry/components/color-picker/index.tsx?raw'),
    iframeSrc: 'live-components/default-color-picker',
    componentSrc: React.lazy(
      () => import('@/registry/components/color-picker/index')
    ),
    tags: [
      'color-picker',
      'color picker',
      'react-colorfull',
      'color picker component',
      'reactjs color picker components',
      'nextjs color picker components',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['color-picker'],
    componentName: COMPONENT_KEYS.RAWS_COLOR_PICKER,
    title: humanize(COMPONENT_KEYS.RAWS_COLOR_PICKER),
    href: '/components/color-picker',
    slug: 'color-picker',
    description: 'RAWS COLOR PICKER component',
    filesrc: require('../registry/components/color-picker/raws-color-picker.tsx?raw'),
    iframeSrc: 'live-components/raws-color-picker',
    componentSrc: React.lazy(
      () => import('@/registry/components/color-picker/raws-color-picker')
    ),
    tags: [
      'color-picker',
      'color picker',
      'raws color picker',
      'nextjs color picker',
      'reactjs color picker',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['swapy'],
    componentName: COMPONENT_KEYS.DEFAULT_SWAPY,
    title: humanize(COMPONENT_KEYS.DEFAULT_SWAPY),
    href: '/components/swapy',
    slug: 'swapy',
    description: 'DEFAULT SWAPY component',
    filesrc: require('../registry/components/swapy/default-swapy.tsx?raw'),
    iframeSrc: 'live-components/default-swapy',
    componentSrc: React.lazy(
      () => import('@/registry/components/swapy/default-swapy')
    ),
    tags: [
      'Swapy drag',
      'swapy draggable',
      'swapy items',
      'swapy sortable',
      'swapy list',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['swapy'],
    componentName: COMPONENT_KEYS.OPACITY_SWAPY,
    title: humanize(COMPONENT_KEYS.OPACITY_SWAPY),
    href: '/components/swapy',
    slug: 'swapy',
    description: 'OPACITY SWAPY component',
    filesrc: require('../registry/components/swapy/swapy-opacity.tsx?raw'),
    iframeSrc: 'live-components/swapy-opacity',
    componentSrc: React.lazy(
      () => import('@/registry/components/swapy/swapy-opacity')
    ),
    tags: [
      'Swapy drag',
      'swapy draggable',
      'swapy items',
      'swapy sortable',
      'swapy list',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['swapy'],
    componentName: COMPONENT_KEYS.SWAPY_WITHOUT_COMPONENTS,
    title: humanize(COMPONENT_KEYS.SWAPY_WITHOUT_COMPONENTS),
    href: '/components/swapy',
    slug: 'swapy',
    description: 'SWAPY WITHOUT COMPONENTS component',
    filesrc: require('../registry/components/swapy/swapy-without-components.tsx?raw'),
    iframeSrc: 'live-components/swapy-without-components',
    componentSrc: React.lazy(
      () => import('@/registry/components/swapy/swapy-without-components')
    ),
    tags: [
      'Swapy without components',
      'swapy draggable',
      'swapy items',
      'swapy sortable',
      'swapy list',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['swapy'],
    componentName: COMPONENT_KEYS.SWAPY_HANDLE,
    title: humanize(COMPONENT_KEYS.SWAPY_HANDLE),
    href: '/components/swapy',
    slug: 'swapy',
    description: 'SWAPY HANDLE component',
    filesrc: require('../registry/components/swapy/swapy-handle.tsx?raw'),
    iframeSrc: 'live-components/swapy-handle',
    componentSrc: React.lazy(
      () => import('@/registry/components/swapy/swapy-handle')
    ),
    tags: [
      'Swapy drag',
      'swapy draggable',
      'swapy items',
      'swapy sortable',
      'swapy list',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['r3f-blob'],
    componentName: COMPONENT_KEYS.R3F_BLOB,
    title: humanize(COMPONENT_KEYS.R3F_BLOB),
    href: '/components/r3f-blob',
    slug: 'r3f-blob',
    description: 'R3F BLOB component using Three.js',
    iframelink: COMPONENT_KEYS.R3F_BLOB,
    tags: ['r3f-blob', 'threejs r3f blob', 'React3 Fiber r3f blob'],
  },

  {
    category: DOCS_CATEGORY_KEY['mesh-gradients'],
    title: humanize(COMPONENT_KEYS.MESH_SHADERGRADIENT),
    href: '/components/mesh-gradients',
    slug: 'mesh-gradients',
    description:
      'MESH SHADERGRADIENT component using Three.js with stunning gradient effects',
    componentName: COMPONENT_KEYS.MESH_SHADERGRADIENT,
    iframelink: COMPONENT_KEYS.MESH_SHADERGRADIENT,
    tags: [
      'mesh-gradient',
      'threejs mesh graddient',
      'React3 Fiber mesh Gradient',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['mesh-gradients'],
    componentName: COMPONENT_KEYS.MESH_GRADIENT_BACKGROUND3,
    title: humanize(COMPONENT_KEYS.MESH_GRADIENT_BACKGROUND3),
    href: '/components/mesh-gradients',
    slug: 'mesh-gradients',
    description:
      'MESH GRADIENT BACKGROUND3 component using Three.js with stunning gradient effects',
    iframelink: COMPONENT_KEYS.MESH_GRADIENT_BACKGROUND3,
    tags: [
      'mesh-gradient',
      'threejs mesh graddient',
      'React3 Fiber mesh Gradient',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['mesh-gradients'],
    componentName: COMPONENT_KEYS.MESH_GRADIENT_BACKGROUND2,
    title: humanize(COMPONENT_KEYS.MESH_GRADIENT_BACKGROUND2),
    href: '/components/mesh-gradients',
    slug: 'mesh-gradients',
    description:
      'MESH GRADIENT BACKGROUND2 component using Three.js with stunning gradient effects',
    iframelink: COMPONENT_KEYS.MESH_GRADIENT_BACKGROUND2,
    tags: [
      'mesh-gradient',
      'threejs mess graddient',
      'React3 Fiber Mess Gradient',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['mesh-gradients'],
    componentName: COMPONENT_KEYS.MESH_GRADIENT_BACKGROUND,
    title: humanize(COMPONENT_KEYS.MESH_GRADIENT_BACKGROUND),
    href: '/components/mesh-gradients',
    slug: 'mesh-gradients',
    description:
      'MESH GRADIENT BACKGROUND component using Three.js with stunning gradient effects',
    iframelink: COMPONENT_KEYS.MESH_GRADIENT_BACKGROUND,
    tags: [
      'mesh-gradient',
      'threejs mess graddient',
      'React3 Fiber Mess Gradient',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['image-ripple-effect'],
    componentName: COMPONENT_KEYS.IMG_RIPPLE_EFFECT,
    title: humanize(COMPONENT_KEYS.IMG_RIPPLE_EFFECT),
    href: '/components/image-ripple-effect',
    slug: 'image-ripple-effect',
    description: 'IMG RIPPLE EFFECT component using Three.js',
    iframelink: 'img-ripple-effect',
    tags: [
      'img-ripple-effect',
      'threejs ripple effect',
      'React three Fiber Ripple Effect',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['image-ripple-effect'],
    componentName: COMPONENT_KEYS.SINGLE_IMG_RIPPLE_EFFECT,
    title: humanize(COMPONENT_KEYS.SINGLE_IMG_RIPPLE_EFFECT),
    href: '/components/image-ripple-effect',
    slug: 'image-ripple-effect',
    description: 'SINGLE IMG RIPPLE EFFECT component using Three.js',
    iframelink: 'img-ripple-effect2',
    tags: [
      'single img-ripple-effect',
      'img-ripple-effect',
      'threejs ripple effect',
      'React three Fiber Ripple Effect',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['globe'],
    componentName: COMPONENT_KEYS.CARD_GLOBE_DEFAULT,
    componentSrc: React.lazy(
      () => import('@/registry/components/globe/card-globe-default')
    ),
    title: humanize(COMPONENT_KEYS.CARD_GLOBE_DEFAULT),
    href: '/components/globe',
    slug: 'globe',
    description: 'CARD GLOBE DEFAULT component',
    filesrc: require('../registry/components/globe/card-globe-default.tsx?raw'),
    iframeSrc: 'live-components/card-globe-default',
    tags: ['3D Globe', '3D Globe Card'],
  },

  {
    category: DOCS_CATEGORY_KEY['globe'],
    componentName: COMPONENT_KEYS.CARD_GLOBE_WHITE,
    componentSrc: React.lazy(
      () => import('@/registry/components/globe/card-globe-white')
    ),
    title: humanize(COMPONENT_KEYS.CARD_GLOBE_WHITE),
    href: '/components/globe',
    slug: 'globe',
    description: 'CARD GLOBE WHITE component',
    filesrc: require('../registry/components/globe/card-globe-white.tsx?raw'),
    iframeSrc: 'live-components/card-globe-white',
    tags: ['White 3D Globe', 'White 3D Globe Card'],
  },

  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_GLOBE,
    title: humanize(COMPONENT_KEYS.SPARKLES_GLOBE),
    href: '/components/sparkles',
    slug: 'sparkles',
    description: 'SPARKLES GLOBE component',
    iframelink: 'sparkles-globe',
    tags: ['Sparkles', '3D Globe Sparkles', 'Globe Hero Section'],
  },

  {
    category: DOCS_CATEGORY_KEY['horizontal-scroll'],
    componentName: COMPONENT_KEYS.HORIZONTALSCROLL,
    title: humanize(COMPONENT_KEYS.HORIZONTALSCROLL),
    href: '/components/horizontal-scroll',
    slug: 'horizontal-scroll',
    description: 'HORIZONTALSCROLL - horizontal scroll component',
    iframelink: 'horizontal-scrolling-section',
    tags: ['White 3D Globe', 'White 3D Globe Card'],
  },

  {
    category: DOCS_CATEGORY_KEY['stacking-card'],
    componentName: COMPONENT_KEYS.STACKING_CARD,
    title: humanize(COMPONENT_KEYS.STACKING_CARD),
    href: '/components/stacking-card',
    slug: 'stacking-card',
    description: 'STACKING CARD component',
    iframelink: 'stacking-card',
    tags: ['Card Stack', 'Interactive Cards'],
  },

  {
    category: DOCS_CATEGORY_KEY['stacking-card'],
    componentName: COMPONENT_KEYS.CSS_CARD_STACKING,
    title: humanize(COMPONENT_KEYS.CSS_CARD_STACKING),
    href: '/components/stacking-card',
    slug: 'stacking-card',
    description: 'CSS CARD STACKING component',
    iframelink: 'css-stacking-details-card',
    tags: ['CSS Stacking', 'Details Card'],
  },

  {
    category: DOCS_CATEGORY_KEY['stacking-card'],
    componentName: COMPONENT_KEYS.CSS_IMAGE_STACKING,
    title: humanize(COMPONENT_KEYS.CSS_IMAGE_STACKING),
    href: '/components/stacking-card',
    slug: 'stacking-card',
    description: 'CSS IMAGE STACKING component',
    iframelink: 'css-stacking-card',
    tags: ['CSS Image Stack', 'Stacking Card'],
  },

  {
    category: DOCS_CATEGORY_KEY['smooth-scroll'],
    componentName: COMPONENT_KEYS.SMOOTH_SCROLL,
    href: '/components/smooth-scroll',
    title: humanize(COMPONENT_KEYS.SMOOTH_SCROLL),
    slug: 'smooth-scroll',
    description: 'SMOOTH SCROLL component',
    iframelink: 'smooth-scroll',
    tags: ['Smooth Scrolling', 'Lenis Smooth Scroll', 'Scroll Animation'],
  },

  {
    category: DOCS_CATEGORY_KEY['sticky-scroll'],
    componentName: COMPONENT_KEYS.STICKY_SCROLL_SECTION,
    title: humanize(COMPONENT_KEYS.STICKY_SCROLL_SECTION),
    href: '/components/sticky-scroll',
    slug: 'sticky-scroll',
    description: 'STICKY SCROLL SECTION component',
    iframelink: 'sticky-scroll-section',
    tags: ['Sticky Scroll', 'Section'],
  },

  {
    category: DOCS_CATEGORY_KEY['sticky-scroll'],
    componentName: COMPONENT_KEYS.STICKY_GALLERY,
    title: humanize(COMPONENT_KEYS.STICKY_GALLERY),
    href: '/components/sticky-scroll',
    slug: 'sticky-scroll',
    description: 'STICKY GALLERY component',
    iframelink: 'sticky-gallery',
    tags: ['Sticky Gallery', 'Gallery Scroll'],
  },

  {
    category: DOCS_CATEGORY_KEY['sticky-scroll'],
    componentName: COMPONENT_KEYS.STICKY_HERO_SECTION,
    title: humanize(COMPONENT_KEYS.STICKY_HERO_SECTION),
    href: '/components/sticky-scroll',
    slug: 'sticky-scroll',
    description: 'STICKY HERO SECTION component',
    iframelink: 'sticky-hero-section',
    tags: ['Sticky Hero', 'Hero Section'],
  },
  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_SECTION,
    title: humanize(COMPONENT_KEYS.SPARKLES_SECTION),
    href: '/components/sparkles',
    slug: 'sparkles',
    description: 'SPARKLES SECTION component',
    iframelink: 'sparkles-section',
    tags: ['Sparkles', 'Sparkles Section'],
  },

  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_BRANDING,
    title: humanize(COMPONENT_KEYS.SPARKLES_BRANDING),
    href: '/components/sparkles',
    slug: 'sparkles',
    description: 'SPARKLES BRANDING component',
    iframelink: 'sparkles-branding',
    tags: ['Sparkles', 'Sparkles Branding'],
  },

  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_TITLE,
    title: humanize(COMPONENT_KEYS.SPARKLES_TITLE),
    href: '/components/sparkles',
    slug: 'sparkles',
    description: 'SPARKLES TITLE component',
    iframelink: 'sparkles-title',
    tags: ['Sparkles', 'Sparkles Title'],
  },

  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_TITLE2,
    title: humanize(COMPONENT_KEYS.SPARKLES_TITLE2),
    href: '/components/sparkles',
    slug: 'sparkles',
    description: 'SPARKLES TITLE2 component',
    iframelink: 'sparkles-title2',
    tags: ['Sparkles', 'Sparkles Title'],
  },

  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_TITLE3,
    iframelink: 'sparkles-title3',
    title: humanize(COMPONENT_KEYS.SPARKLES_TITLE3),
    href: '/components/sparkles',
    slug: 'sparkles',
    description: 'SPARKLES TITLE3 component',
    tags: ['Sparkles', 'Sparkles Title'],
  },

  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_TITLE4,
    href: '/components/sparkles',
    title: humanize(COMPONENT_KEYS.SPARKLES_TITLE4),
    slug: 'sparkles-title4',
    description: 'SPARKLES TITLE4 component',
    iframelink: 'sparkles-title4',
    tags: ['Sparkles', 'Sparkles Title'],
  },

  {
    category: DOCS_CATEGORY_KEY['phone-input'],
    componentName: COMPONENT_KEYS.PHONE_INPUT_DEFAULT,
    href: '/components/phone-input',
    title: humanize(COMPONENT_KEYS.PHONE_INPUT_DEFAULT),
    slug: 'phone-input-default',
    description: 'PHONE INPUT DEFAULT component',
    filesrc: require('../registry/components/form/phone-number/index.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/form/phone-number')
    ),
    iframeSrc: 'live-components/phone-input',
    tags: ['phone-input', 'Phone Input', 'Input'],
  },

  {
    category: DOCS_CATEGORY_KEY['buy-me-coffee'],
    componentName: COMPONENT_KEYS.BUYME_ACOFFEE,
    href: '/components/buy-me-coffee',
    title: humanize(COMPONENT_KEYS.BUYME_ACOFFEE),
    slug: 'buy-me-acoffee',
    description: 'BUYME ACOFFEE component',
    filesrc: require('../registry/components/buy-me-coffee.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/buy-me-coffee')
    ),
    iframeSrc: 'live-components/buy-me-acoffee',
    tags: [
      'Sponser',
      'Buy me a coffee',
      'co-fi',
      'Buy-me-a-coffee',
      'supports',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['file-upload'],
    componentName: COMPONENT_KEYS.CHAT_FORM_DROPZONE,
    href: '/components/file-upload',
    title: humanize(COMPONENT_KEYS.CHAT_FORM_DROPZONE),
    slug: 'chat-form-dropzone',
    description: 'CHAT FORM DROPZONE - file upload component',
    filesrc: require('../registry/components/form/file-upload/chat-form.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/form/file-upload/chat-form')
    ),
    iframeSrc: 'live-components/chat-form-dropzone',
    tags: [
      'DropZone input',
      'File Upload Input ',
      'file-upload',
      'file upload preview',
      'chat box upload file',
      'Chat Box',
      'Chat-Box',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['file-upload'],
    componentName: COMPONENT_KEYS.IMGPREVIEW_DROPZONE,
    href: '/components/file-upload',
    title: humanize(COMPONENT_KEYS.IMGPREVIEW_DROPZONE),
    slug: 'imgpreview-dropzone',
    description: 'IMGPREVIEW DROPZONE - file upload component',
    filesrc: require('../registry/components/form/file-upload/img-preview.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/form/file-upload/img-preview')
    ),
    iframeSrc: 'live-components/imgpreview-dropzone',
    tags: [
      'DropZone input',
      'File Upload Input ',
      'file-upload',
      'file upload preview',
      'Img preview',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['file-upload'],
    componentName: COMPONENT_KEYS.FILE_UPLOAD_DEFAULT,
    href: '/components/file-upload',
    title: humanize(COMPONENT_KEYS.FILE_UPLOAD_DEFAULT),
    slug: 'file-upload-default',
    description: 'FILE UPLOAD DEFAULT - file upload component',
    filesrc: require('../registry/components/form/file-upload/index.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/form/file-upload')
    ),
    iframeSrc: 'live-components/file-upload',
    tags: ['DropZone input', 'File Upload Input ', 'file-upload'],
  },

  {
    category: DOCS_CATEGORY_KEY['multi-selector'],
    componentName: COMPONENT_KEYS.MULTI_SELECTOR_DEFAULT,
    href: '/components/multi-selector',
    title: humanize(COMPONENT_KEYS.MULTI_SELECTOR_DEFAULT),
    slug: 'multi-selector-default',
    description: 'MULTI SELECTOR DEFAULT - multi-selector component',
    componentSrc: React.lazy(
      () => import('@/registry/components/form/multiple-selector')
    ),
    iframeSrc: 'live-components/multi-selector',
    tags: [
      'Multi Selector Input',
      'Selector Input Tag',
      'Multiple Selector Input',
    ],
    filesArray: [
      {
        name: 'index.tsx',
        filesrc: require('../registry/components/form/multiple-selector.tsx?raw'),
      },

      {
        name: 'popover.tsx',
        filesrc: require('../components/website/ui/popover.tsx?raw'),
      },

      {
        name: 'command.tsx',
        filesrc: require('../components/website/ui/command.tsx?raw'),
      },

      {
        name: 'button.tsx',
        filesrc: require('../components/website/ui/button.tsx?raw'),
      },
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['tags-input'],
    componentName: COMPONENT_KEYS.TAGSEDIT_FALSE,
    href: '/components/tags-input',
    title: humanize(COMPONENT_KEYS.TAGSEDIT_FALSE),
    slug: 'tagsedit-false',
    description: 'TAGSEDIT FALSE - tags input component',
    filesrc: require('../registry/components/form/tags-input/tagsedit-false.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/form/tags-input/tagsedit-false')
    ),
    iframeSrc: 'live-components/tagsedit-false',
    tags: [
      'Tags Input',
      'Tags Edit False',
      'Youtube Tags',
      'Github Like Tags',
      'github tags',
      'input tags',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['tags-input'],
    componentName: COMPONENT_KEYS.TAGS_INPUT,
    href: '/components/tags-input',
    title: humanize(COMPONENT_KEYS.TAGS_INPUT),
    slug: 'tags-input',
    description: 'TAGS INPUT - tags input component',
    filesrc: require('../registry/components/form/tags-input/index.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/form/tags-input')
    ),
    iframeSrc: 'live-components/tags-input',
    tags: [
      'Tags Input',
      'Youtube Tags',
      'Github Like Tags',
      'github tags',
      'input tags',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['datetime-picker'],
    componentName: COMPONENT_KEYS.TIME_PICKER,
    href: '/components/datetime-picker',
    title: humanize(COMPONENT_KEYS.TIME_PICKER),
    slug: 'time-picker',
    description: 'TIME PICKER - date/time picker component',
    filesrc: require('../registry/components/form/datetime-picker/time-picker.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/form/datetime-picker/time-picker')
    ),
    iframeSrc: 'live-components/time-picker',
    tags: ['time picker', 'time-picker', 'Time Picker'],
  },
  {
    category: DOCS_CATEGORY_KEY['datetime-picker'],
    componentName: COMPONENT_KEYS.DATE_PICKER,
    href: '/components/datetime-picker',
    title: humanize(COMPONENT_KEYS.DATE_PICKER),
    slug: 'date-picker',
    description: 'DATE PICKER - date/time picker component',
    filesrc: require('../registry/components/form/datetime-picker/date-picker.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/form/datetime-picker/date-picker')
    ),
    iframeSrc: 'live-components/date-picker',
    tags: ['date picker', 'date-picker', 'Date Picker'],
  },

  {
    category: DOCS_CATEGORY_KEY['datetime-picker'],
    componentName: COMPONENT_KEYS.DATETIME_PICKER_DEFAULT,
    href: '/components/datetime-picker',
    title: humanize(COMPONENT_KEYS.DATETIME_PICKER_DEFAULT),
    slug: 'datetime-picker-default',
    description: 'DATETIME PICKER DEFAULT - date/time picker component',
    filesrc: require('../registry/components/form/datetime-picker/index.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/form/datetime-picker')
    ),
    iframeSrc: 'live-components/datetime-picker',
    tags: [
      'date picker',
      'time picker',
      'date time picker',
      'date-time picker',
      'DateTime Picker',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['range-slider'],
    componentName: COMPONENT_KEYS.MOTION_NUMBER_SLIDER,
    href: '/components/range-slider',
    title: humanize(COMPONENT_KEYS.MOTION_NUMBER_SLIDER),
    slug: 'motion-number-slider',
    description:
      'MOTION NUMBER SLIDER - range slider component with smooth motion effects',
    filesrc: require('../registry/components/motion-number/motion-number-slider.tsx?raw'),
    tags: [
      'input slider',
      'Default range slider',
      'default-Range-Slider',
      'animated motion number slider',
      'motion input slider',
    ],
    componentSrc: React.lazy(
      () => import('@/registry/components/motion-number/motion-number-slider')
    ),
    iframeSrc: 'live-components/motion-number-slider',
  },

  {
    category: DOCS_CATEGORY_KEY['range-slider'],
    componentName: COMPONENT_KEYS.DUAL_RANGE_SLIDER,
    href: '/components/range-slider',
    title: humanize(COMPONENT_KEYS.DUAL_RANGE_SLIDER),
    slug: 'dual-range-slider',
    description: 'DUAL RANGE SLIDER - range slider component',
    filesrc: require('../registry/components/form/slider/dual-range-slider.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/form/slider/dual-range-slider')
    ),
    iframeSrc: 'live-components/dual-range-slider',
    tags: [
      'input slider',
      'dual range slider',
      'Dual-Range-Slider',
      'animated motion number slider',
      'motion input slider',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['range-slider'],
    componentName: COMPONENT_KEYS.STATIC_RANGE_SLIDER,
    href: '/components/range-slider',
    title: humanize(COMPONENT_KEYS.STATIC_RANGE_SLIDER),
    slug: 'static-range-slider',
    description: 'STATIC RANGE SLIDER - range slider component',
    filesrc: require('../registry/components/form/slider/static-range-slider.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/form/slider/static-range-slider')
    ),
    iframeSrc: 'live-components/static-range-slider',
    tags: [
      'input slider',
      'static range slider',
      'Static-Range-Slider',
      'Basic Range-Slider',
      'Default Range-Slider',
      'animated motion number slider',
      'motion input slider',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['range-slider'],
    componentName: COMPONENT_KEYS.POSITION_RANGE_SLIDER,
    href: '/components/range-slider',
    title: humanize(COMPONENT_KEYS.POSITION_RANGE_SLIDER),
    slug: 'position-range-slider',
    description: 'POSITION RANGE SLIDER - range slider component',
    filesrc: require('../registry/components/form/slider/position-range-slider.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/form/slider/position-range-slider')
    ),
    iframeSrc: 'live-components/position-range-slider',
    tags: [
      'input slider',
      'position range slider',
      'Position-Range-Slider',
      'Position Range-Slider',
      'animated motion number slider',
      'motion input slider',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['password'],
    componentName: COMPONENT_KEYS.SHOWHIDE_PASS,
    href: '/components/password',
    title: humanize(COMPONENT_KEYS.SHOWHIDE_PASS),
    slug: 'showhide-pass',
    description: 'SHOWHIDE PASS - password component',
    filesrc: require('../registry/components/form/password/showhide-pass.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/form/password/showhide-pass')
    ),
    iframeSrc: 'live-components/showhide-pass',
    tags: [
      'password',
      'pass',
      'password hide show icon',
      'showhide pass',
      'show/hide pass',
      'Show/Hide Pass',
      'Pass Show/Hide ',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['password'],
    componentName: COMPONENT_KEYS.PASS_STRENGTHINDICATOR,
    href: '/components/password',
    title: humanize(COMPONENT_KEYS.PASS_STRENGTHINDICATOR),
    slug: 'pass-strengthindicator',
    description: 'PASS STRENGTHINDICATOR - password component',
    filesrc: require('../registry/components/form/password/pass-strength-indicator.tsx?raw'),
    componentSrc: React.lazy(
      () =>
        import('@/registry/components/form/password/pass-strength-indicator')
    ),
    iframeSrc: 'live-components/pass-strengthindicator',
    iframe: true,
    tags: [
      'password',
      'pass',
      'Pass Strength Indicator',
      'pass-strength-indicator',
      'Progress Password Input',
      'ProgressPasswordInput',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['password'],
    componentName: COMPONENT_KEYS.PASS_STRENGTH_DOTTED_INDICATOR,
    href: '/components/password',
    title: humanize(COMPONENT_KEYS.PASS_STRENGTH_DOTTED_INDICATOR),
    slug: 'pass-strength-dotted-indicator',
    description: 'PASS STRENGTH DOTTED INDICATOR - password component',
    filesrc: require('../registry/components/form/password/pass-strength-dotted-indicator.tsx?raw'),
    componentSrc: React.lazy(
      () =>
        import('@/registry/components/form/password/pass-strength-dotted-indicator')
    ),
    iframeSrc: 'live-components/pass-strength-dotted-indicator',
    iframe: true,

    tags: [
      'password',
      'pass',
      'Pass Strength Indicator2',
      'pass-strength-indicator2',
      'Progress Password2',
      'ProgressPasswordInput2',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['password'],
    componentName: COMPONENT_KEYS.PASS_STRENGTH_HOVER_INDICATOR,
    href: '/components/password',
    title: humanize(COMPONENT_KEYS.PASS_STRENGTH_HOVER_INDICATOR),
    slug: 'pass-strength-hover-indicator',
    description:
      'PASS STRENGTH HOVER INDICATOR - password component with smooth hover effects',
    componentSrc: React.lazy(
      () =>
        import('@/registry/components/form/password/pass-strength-hover-indicator')
    ),
    iframeSrc: 'live-components/pass-strength-hover-indicator',
    iframe: true,
    tags: [
      'password',
      'pass',
      'Strong Pass Hover Indicator',
      'Hover Indicator',
      'Pass Strength Indicator2',
      'pass-strength-indicator2',
      'Divide Progress Password ',
      'Progress Divide Password2 ',
      'DivideProgressPasswordInput2',
    ],
    filesArray: [
      {
        name: 'index.tsx',
        filesrc: require('../registry/components/form/password/pass-strength-hover-indicator.tsx?raw'),
      },

      {
        name: 'hover-card.tsx',
        filesrc: require('../components/website/ui/hover-card.tsx?raw'),
      },
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['password'],
    componentName: COMPONENT_KEYS.PASS_STRENGTH_INLINE_INDICATOR,
    href: '/components/password',
    title: humanize(COMPONENT_KEYS.PASS_STRENGTH_INLINE_INDICATOR),
    slug: 'pass-strength-inline-indicator',
    description: 'PASS STRENGTH INLINE INDICATOR - password component',
    componentSrc: React.lazy(
      () =>
        import('@/registry/components/form/password/pass-strength-inline-indicator')
    ),
    iframeSrc: 'live-components/pass-strength-inline-indicator',
    iframe: true,
    tags: [
      'password',
      'pass',
      'Inline Pass Indicator',
      'Password Status Indicator',
      'Pass Status Indicator',
      'Status Password ',
      'StatusPasswordInput',
    ],
    filesArray: [
      {
        name: 'index.tsx',
        filesrc: require('../registry/components/form/password/pass-strength-inline-indicator.tsx?raw'),
      },

      {
        name: 'hover-card.tsx',
        filesrc: require('../components/website/ui/hover-card.tsx?raw'),
      },
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['password'],
    componentName: COMPONENT_KEYS.CONFIRM_PASS_CHECK,
    href: '/components/password',
    title: humanize(COMPONENT_KEYS.CONFIRM_PASS_CHECK),
    slug: 'confirm-pass-check',
    description: 'CONFIRM PASS CHECK - password component',
    componentSrc: React.lazy(
      () => import('@/registry/components/form/password/confirm-pass-check')
    ),
    iframeSrc: 'live-components/confirm-pass-check',
    iframe: true,

    tags: [
      'password',
      'pass',
      'Confirm pass',
      'Confirm Pass With Indicator',
      'Confirm Password Check',
      'Confirm Password',
    ],
    filesArray: [
      {
        name: 'index.tsx',
        filesrc: require('../registry/components/form/password/confirm-pass-check.tsx?raw'),
      },
      {
        name: 'hover-card.tsx',
        filesrc: require('../components/website/ui/hover-card.tsx?raw'),
      },
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['drag-items'],
    componentName: COMPONENT_KEYS.DRAG_ITEMS,
    href: '/components/drag-items',
    title: humanize(COMPONENT_KEYS.DRAG_ITEMS),
    slug: 'drag-items',
    description: 'DRAG ITEMS component',
    filesrc: require('../registry/components/drag/drag-items.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/drag/drag-items')
    ),
    iframeSrc: 'live-components/drag-items',
    tags: ['drag', 'draggable', 'items', 'sortable', 'list'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_BACKGROUND_SHINE,
    href: '/components/buttons',
    title: humanize(COMPONENT_KEYS.BUTTON_BACKGROUND_SHINE),
    slug: 'button-background-shine',
    description: 'BUTTON BACKGROUND SHINE - button component',
    filesrc: require('../registry/components/button/btn-bg-shine.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-bg-shine')
    ),
    iframeSrc: 'live-components/button-background-shine',
    center: true,
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_BACKGROUND_SPOTLIGHT,
    href: '/components/buttons',
    title: humanize(COMPONENT_KEYS.BUTTON_BACKGROUND_SPOTLIGHT),
    slug: 'button-background-spotlight',
    description: 'BUTTON BACKGROUND SPOTLIGHT - button component',
    filesrc: require('../registry/components/button/btn-animated-gradient.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-animated-gradient')
    ),
    iframeSrc: 'live-components/button-background-spotlight',
    center: true,
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_ACTIVE,
    href: '/components/buttons',
    title: humanize(COMPONENT_KEYS.BUTTON_HOVER_ACTIVE),
    slug: 'button-hover-active',
    description:
      'BUTTON HOVER ACTIVE - button component with smooth hover effects',
    filesrc: require('../registry/components/button/btn-active.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-active')
    ),
    iframeSrc: 'live-components/button-hover-active',
    center: true,
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_2,
    href: '/components/buttons',
    title: humanize(COMPONENT_KEYS.BUTTON_HOVER_2),
    slug: 'button-hover-2',
    description: 'BUTTON HOVER 2 - button component with smooth hover effects',
    filesrc: require('../registry/components/button/btn-hover-right.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-hover-right')
    ),
    iframeSrc: 'live-components/button-hover-2',
    center: true,
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_3,
    href: '/components/buttons',
    title: humanize(COMPONENT_KEYS.BUTTON_HOVER_3),
    slug: 'button-hover-3',
    description: 'BUTTON HOVER 3 - button component with smooth hover effects',
    filesrc: require('../registry/components/button/btn-click-down.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-click-down')
    ),
    iframeSrc: 'live-components/button-hover-3',
    center: true,
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_4,
    href: '/components/buttons',
    title: humanize(COMPONENT_KEYS.BUTTON_HOVER_4),
    slug: 'button-hover-4',
    description: 'BUTTON HOVER 4 - button component with smooth hover effects',
    filesrc: require('../registry/components/button/btn-hover-down.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-hover-down')
    ),
    iframeSrc: 'live-components/button-hover-4',
    center: true,
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_5,
    href: '/components/buttons',
    title: humanize(COMPONENT_KEYS.BUTTON_HOVER_5),
    slug: 'button-hover-5',
    description: 'BUTTON HOVER 5 - button component with smooth hover effects',
    filesrc: require('../registry/components/button/btn-hover-multiple.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-hover-multiple')
    ),
    iframeSrc: 'live-components/button-hover-5',
    center: true,
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_6,
    href: '/components/buttons',
    title: humanize(COMPONENT_KEYS.BUTTON_HOVER_6),
    slug: 'button-hover-6',
    description: 'BUTTON HOVER 6 - button component with smooth hover effects',
    filesrc: require('../registry/components/button/btn-hover-underline.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-hover-underline')
    ),
    iframeSrc: 'live-components/button-hover-6',
    center: true,
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_7,
    href: '/components/buttons',
    title: humanize(COMPONENT_KEYS.BUTTON_HOVER_7),
    slug: 'button-hover-7',
    description: 'BUTTON HOVER 7 - button component with smooth hover effects',
    filesrc: require('../registry/components/button/btn-hover-top-flip.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-hover-top-flip')
    ),
    iframeSrc: 'live-components/button-hover-7',
    center: true,
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_8,
    href: '/components/buttons',
    title: humanize(COMPONENT_KEYS.BUTTON_HOVER_8),
    slug: 'button-hover-8',
    description: 'BUTTON HOVER 8 - button component with smooth hover effects',
    filesrc: require('../registry/components/button/btn-hover-left-flip.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-hover-left-flip')
    ),
    center: true,
    iframeSrc: 'live-components/button-hover-8',
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_9,
    href: '/components/buttons',
    title: humanize(COMPONENT_KEYS.BUTTON_HOVER_9),
    slug: 'button-hover-9',
    description: 'BUTTON HOVER 9 - button component with smooth hover effects',
    filesrc: require('../registry/components/button/btn-hover-top-slowflip.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-hover-top-slowflip')
    ),
    center: true,
    iframeSrc: 'live-components/button-hover-9',
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_10,
    href: '/components/buttons',
    title: humanize(COMPONENT_KEYS.BUTTON_HOVER_10),
    slug: 'button-hover-10',
    description: 'BUTTON HOVER 10 - button component with smooth hover effects',
    filesrc: require('../registry/components/button/btn-text-change.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-text-change')
    ),
    center: true,
    iframeSrc: 'live-components/button-hover-10',
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_11,
    href: '/components/buttons',
    title: humanize(COMPONENT_KEYS.BUTTON_HOVER_11),
    slug: 'button-hover-11',
    description: 'BUTTON HOVER 11 - button component with smooth hover effects',
    filesrc: require('../registry/components/button/btn-cross-arrow.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-cross-arrow')
    ),
    center: true,
    iframeSrc: 'live-components/button-hover-11',
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_12,
    href: '/components/buttons',
    title: humanize(COMPONENT_KEYS.BUTTON_HOVER_12),
    slug: 'button-hover-12',
    description: 'BUTTON HOVER 12 - button component with smooth hover effects',
    filesrc: require('../registry/components/button/btn-black-shadow.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-black-shadow')
    ),
    center: true,
    iframeSrc: 'live-components/btn-hover12',
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_13,
    href: '/components/buttons',
    title: humanize(COMPONENT_KEYS.BUTTON_HOVER_13),
    slug: 'button-hover-13',
    description: 'BUTTON HOVER 13 - button component with smooth hover effects',
    filesrc: require('../registry/components/button/btn-hover-outline.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-hover-outline')
    ),
    center: true,
    iframeSrc: 'live-components/button-hover-13',
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_14,
    href: '/components/buttons',
    title: humanize(COMPONENT_KEYS.BUTTON_HOVER_14),
    slug: 'button-hover-14',
    description: 'BUTTON HOVER 14 - button component with smooth hover effects',
    filesrc: require('../registry/components/button/btn-hover14.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-hover14')
    ),
    center: true,
    iframeSrc: 'live-components/button-hover-14',
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_ROTATING_GRADIENT,
    href: '/components/buttons',
    title: humanize(COMPONENT_KEYS.BUTTON_ROTATING_GRADIENT),
    slug: 'button-rotating-gradient',
    description:
      'BUTTON ROTATING GRADIENT - button component with stunning gradient effects',
    filesrc: require('../registry/components/button/btn-rotating-gradient.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-rotating-gradient')
    ),
    center: true,
    iframeSrc: 'live-components/btn-rotating-bgGradient',
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.CREATIVE_BUTTON_1,
    href: '/components/buttons',
    title: humanize(COMPONENT_KEYS.CREATIVE_BUTTON_1),
    slug: 'creative-button-1',
    description: 'CREATIVE BUTTON 1 - button component with creative design',
    filesrc: require('../registry/components/button/btn-creative-right.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-creative-right')
    ),
    center: true,
    iframeSrc: 'live-components/creative-button-1',
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.CREATIVE_BUTTON_2,
    title: humanize(COMPONENT_KEYS.CREATIVE_BUTTON_2),
    href: '/components/buttons',
    slug: 'creative-button-2',
    description: 'CREATIVE BUTTON 2 - button component with creative design',
    filesrc: require('../registry/components/button/btn-creative-top.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-creative-top')
    ),
    center: true,
    iframeSrc: 'live-components/creative-button-2',
    tags: ['button', 'hover', 'active', 'button hover', 'button active'],
  },

  {
    category: DOCS_CATEGORY_KEY['footers'],
    componentName: COMPONENT_KEYS.ANIMATED_LOGO_FOOTER,
    title: humanize(COMPONENT_KEYS.ANIMATED_LOGO_FOOTER),
    href: '/components/footers',
    slug: 'animated-logo-footer',
    description: 'ANIMATED LOGO FOOTER component with beautiful animations',
    filesrc: require('../registry/components/footers/animated-logo-footer.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/footers/animated-logo-footer')
    ),
    iframeSrc: 'live-components/animated-logo-footer',
    tags: ['footer', 'animation', 'logo', 'branding', 'animated'],
  },

  {
    category: DOCS_CATEGORY_KEY['footers'],
    componentName: COMPONENT_KEYS.HOVER_FOOTER,
    title: humanize(COMPONENT_KEYS.HOVER_FOOTER),
    href: '/components/footers',
    slug: 'hover-footer',
    description: 'HOVER FOOTER component with smooth hover effects',
    componentSrc: React.lazy(
      () => import('@/registry/components/footers/hover-footer')
    ),
    iframeSrc: 'live-components/hover-footer',
    tags: ['footer', 'hover', 'interactive', 'branding'],
    filesArray: [
      {
        name: 'index.tsx',
        filesrc: require('../registry/components/footers/hover-footer.tsx?raw'),
      },

      {
        name: 'cursor-follow-text.tsx',
        filesrc: require('../components/ui/cursor-follow-text.tsx?raw'),
      },
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['noise'],
    componentName: COMPONENT_KEYS.NOISE_EFFECT,
    title: humanize(COMPONENT_KEYS.NOISE_EFFECT),
    href: '/components/noise',
    slug: 'noise',
    description: 'NOISE EFFECT component',
    filesrc: require('../registry/components/noise-effect/section-noise.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/noise-effect/section-noise')
    ),
    iframeSrc: 'live-components/noise-effect',
    tags: ['noise', 'effect', 'visual', 'distortion', 'shader'],
  },

  {
    category: DOCS_CATEGORY_KEY['accordion'],
    componentName: COMPONENT_KEYS.GRID_LAYOUT_ACCORDION,
    title: humanize(COMPONENT_KEYS.GRID_LAYOUT_ACCORDION),
    href: '/components/accordion',
    slug: 'grid-layout-accordion',
    description: 'GRID LAYOUT ACCORDION - accordion component',
    filesrc: require('../registry/components/accordion/gridlayout.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/accordion/gridlayout')
    ),
    iframeSrc: 'live-components/grid-layout-accordion',
    tags: ['accordion', 'grid', 'layout', 'expandable', 'collapsible'],
  },

  {
    category: DOCS_CATEGORY_KEY['accordion'],
    componentName: COMPONENT_KEYS.SINGLE_LAYOUT_ACCORDION,
    title: humanize(COMPONENT_KEYS.SINGLE_LAYOUT_ACCORDION),
    href: '/components/accordion',
    slug: 'single-layout-accordion',
    description: 'SINGLE LAYOUT ACCORDION - accordion component',
    filesrc: require('../registry/components/accordion/singlelayout.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/accordion/singlelayout')
    ),
    iframeSrc: 'live-components/single-layout-accordion',
    tags: ['accordion', 'layout', 'single', 'expandable', 'collapsible'],
  },

  {
    category: DOCS_CATEGORY_KEY['accordion'],
    componentName: COMPONENT_KEYS.MULTI_LAYOUT_ACCORDION,
    title: humanize(COMPONENT_KEYS.MULTI_LAYOUT_ACCORDION),
    href: '/components/accordion',
    slug: 'multi-layout-accordion',
    description: 'MULTI LAYOUT ACCORDION - accordion component',
    filesrc: require('../registry/components/accordion/multilayout.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/accordion/multilayout')
    ),
    iframeSrc: 'live-components/multi-layout-accordion',
    tags: ['accordion', 'layout', 'multi', 'expandable', 'collapsible'],
  },

  {
    category: DOCS_CATEGORY_KEY['faqs'],
    componentName: COMPONENT_KEYS.FAQ_ACCORDION,
    href: '/components/accordion',
    title: humanize(COMPONENT_KEYS.FAQ_ACCORDION),
    slug: 'faq-accordion',
    description: 'FAQ ACCORDION component',
    filesrc: require('../registry/components/accordion/faq.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/accordion/faq')
    ),
    iframeSrc: 'live-components/faq-accordion',
    tags: [
      'accordion',
      'faq',
      'questions',
      'answers',
      'expandable',
      'collapsible',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['image-accordions'],
    componentName: COMPONENT_KEYS.IMAGE_HOVER_ACCORDION,
    href: '/components/image-accordions',
    title: humanize(COMPONENT_KEYS.IMAGE_HOVER_ACCORDION),
    slug: 'image-hover-accordion',
    description: 'IMAGE HOVER ACCORDION component with smooth hover effects',
    filesrc: require('../registry/components/accordion/image-hover.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/accordion/image-hover')
    ),
    iframeSrc: 'live-components/image-hover-accordion',
    tags: ['accordion', 'image', 'hover', 'interactive', 'expandable'],
  },

  {
    category: DOCS_CATEGORY_KEY['image-accordions'],
    componentName: COMPONENT_KEYS.TAILWIND_IMAGE_ACCORDION,
    href: '/components/image-accordions',
    title: humanize(COMPONENT_KEYS.TAILWIND_IMAGE_ACCORDION),
    slug: 'tailwind-image-accordion',
    description: 'TAILWIND IMAGE ACCORDION component styled with Tailwind CSS',
    filesrc: require('../registry/components/accordion/tailwind-image-accordion.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/accordion/tailwind-image-accordion')
    ),
    iframeSrc: 'live-components/tailwind-image-accordion',
    tags: ['accordion', 'image', 'tailwind', 'responsive', 'expandable'],
  },

  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.DEFAULT_SLIDER,
    href: '/components/carousel',
    title: humanize(COMPONENT_KEYS.DEFAULT_SLIDER),
    slug: 'default-slider',
    description: 'DEFAULT SLIDER - carousel component',
    filesrc: require('../registry/components/carousel/default-slider.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/default-slider')
    ),
    iframeSrc: 'live-components/default-slider',
    tags: ['carousel', 'default', 'slider', 'basic-slider', 'embla-carousel'],
  },

  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.ALIGN_SLIDER,
    href: '/components/carousel',
    title: humanize(COMPONENT_KEYS.ALIGN_SLIDER),
    slug: 'align-slider',
    description: 'ALIGN SLIDER - carousel component',
    filesrc: require('../registry/components/carousel/align-slider.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/align-slider')
    ),
    iframeSrc: 'live-components/align-slider',
    tags: ['carousel', 'align', 'centered', 'alignment-slider'],
  },

  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.CLASSNAME_SLIDER,
    href: '/components/carousel',
    title: humanize(COMPONENT_KEYS.CLASSNAME_SLIDER),
    slug: 'classname-slider',
    description: 'CLASSNAME SLIDER - carousel component',
    filesrc: require('../registry/components/carousel/classname-slider.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/classname-slider')
    ),
    iframeSrc: 'live-components/classname-slider',
    tags: ['carousel', 'classname', 'custom-slider', 'themed-slider'],
  },

  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.NUMBER_SLIDER,
    href: '/components/carousel',
    title: humanize(COMPONENT_KEYS.NUMBER_SLIDER),
    slug: 'number-slider',
    description: 'NUMBER SLIDER - carousel component',
    filesrc: require('../registry/components/carousel/number-slider.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/number-slider')
    ),
    iframeSrc: 'live-components/number-slider',
    tags: ['carousel', 'number', 'numeric-slider', 'counter-slider'],
  },

  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.SCALE_SLIDER,
    href: '/components/carousel',
    title: humanize(COMPONENT_KEYS.SCALE_SLIDER),
    slug: 'scale-slider',
    description: 'SCALE SLIDER - carousel component',
    filesrc: require('../registry/components/carousel/scale-slider.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/scale-slider')
    ),
    iframeSrc: 'live-components/scale-slider',
    tags: ['carousel', 'scale', 'zoom-slider', 'scalable-carousel'],
  },

  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.THUMBNAIL_SLIDER,
    href: '/components/carousel',
    title: humanize(COMPONENT_KEYS.THUMBNAIL_SLIDER),
    slug: 'thumbnail-slider',
    description: 'THUMBNAIL SLIDER - carousel component',
    filesrc: require('../registry/components/carousel/thumnail-slider.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/thumnail-slider')
    ),
    iframeSrc: 'live-components/thumbnail-slider',
    tags: ['carousel', 'thumbnail', 'preview-slider', 'image-carousel'],
  },

  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.VERTICAL_SLIDER,
    href: '/components/carousel',
    title: humanize(COMPONENT_KEYS.VERTICAL_SLIDER),
    slug: 'vertical-slider',
    description: 'VERTICAL SLIDER - carousel component',
    filesrc: require('../registry/components/carousel/vertical-slider.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/vertical-slider')
    ),
    iframeSrc: 'live-components/vertical-slider',
    tags: ['carousel', 'vertical', 'preview-slider', 'image-carousel'],
  },

  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.VERTICAL_THUMBNAIL_SLIDER,
    href: '/components/carousel',
    title: humanize(COMPONENT_KEYS.VERTICAL_THUMBNAIL_SLIDER),
    slug: 'vertical-thumbnail-slider',
    description: 'VERTICAL THUMBNAIL SLIDER - carousel component',
    filesrc: require('../registry/components/carousel/verticalthumbs-slider.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/verticalthumbs-slider')
    ),
    iframeSrc: 'live-components/verticalthumbs-slider',
    tags: ['carousel', 'vertical', 'preview-slider', 'image-carousel'],
  },

  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.VERTICAL_THUMBNAIL_AUTOSTART_SLIDER,
    href: '/components/carousel',
    title: humanize(COMPONENT_KEYS.VERTICAL_THUMBNAIL_AUTOSTART_SLIDER),
    slug: 'vertical-thumbnail-autostart-slider',
    description: 'VERTICAL THUMBNAIL AUTOSTART SLIDER - carousel component',
    filesrc: require('../registry/components/carousel/verticalthumbs-autostart-slider.tsx?raw'),
    componentSrc: React.lazy(
      () =>
        import('@/registry/components/carousel/verticalthumbs-autostart-slider')
    ),
    iframeSrc: 'live-components/verticalthumbs-autostart-slider',
    tags: ['carousel', 'vertical', 'preview-slider', 'image-carousel'],
  },

  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.AUTOSCROLL_SLIDER,
    href: '/components/carousel',
    title: humanize(COMPONENT_KEYS.AUTOSCROLL_SLIDER),
    slug: 'autoscroll-slider',
    description: 'AUTOSCROLL SLIDER - carousel component',
    filesrc: require('../registry/components/carousel/autoscroll-slider.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/autoscroll-slider')
    ),
    iframeSrc: 'live-components/autoscroll-slider',
    tags: ['carousel', 'autoscroller', 'auto-slider', 'autoplay-carousel'],
  },

  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.AUTOSTART_SLIDER,
    href: '/components/carousel',
    title: humanize(COMPONENT_KEYS.AUTOSTART_SLIDER),
    slug: 'autostart-slider',
    description: 'AUTOSTART SLIDER - carousel component',
    filesrc: require('../registry/components/carousel/autostart-slider.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/autostart-slider')
    ),
    iframeSrc: 'live-components/autostart-slider',
    tags: ['carousel', 'autostart', 'auto-slider', 'autoplay-carousel'],
  },

  {
    category: DOCS_CATEGORY_KEY['progressive-carousel'],
    componentName: COMPONENT_KEYS.HORIZONTAL_PROGRESSIVE_CAROUSEL,
    href: '/components/progressive-carousel',
    title: humanize(COMPONENT_KEYS.HORIZONTAL_PROGRESSIVE_CAROUSEL),
    slug: 'horizontal-progressive-carousel',
    description: 'HORIZONTAL PROGRESSIVE CAROUSEL component',
    filesrc: require('../registry/components/carousel/horizontal-progressive.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/horizontal-progressive')
    ),
    iframeSrc: 'live-components/horizontal-progressive-carousel',
    tags: ['carousel', 'horizontal', 'progressive-carousel', 'scroll-carousel'],
  },

  {
    category: DOCS_CATEGORY_KEY['progressive-carousel'],
    componentName: COMPONENT_KEYS.VERTICAL_PROGRESSIVE_CAROUSEL,
    href: '/components/progressive-carousel',
    title: humanize(COMPONENT_KEYS.VERTICAL_PROGRESSIVE_CAROUSEL),
    slug: 'vertical-progressive-carousel',
    description: 'VERTICAL PROGRESSIVE CAROUSEL component',
    filesrc: require('../registry/components/carousel/verticle-progressive.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/verticle-progressive')
    ),
    iframeSrc: 'live-components/vertical-progressive-carousel',
    tags: ['carousel', 'vertical', 'progressive-carousel', 'vertical-scroll'],
  },

  {
    category: DOCS_CATEGORY_KEY['framer-carousel'],
    componentName: COMPONENT_KEYS.FRAMER_DRAG_SLIDING_CAROUSEL,
    href: '/components/framer-carousel',
    title: humanize(COMPONENT_KEYS.FRAMER_DRAG_SLIDING_CAROUSEL),
    slug: 'framer-drag-sliding-carousel',
    description: 'FRAMER DRAG SLIDING CAROUSEL component',
    filesrc: require('../registry/components/carousel/framer/framer-drag-sliding-carousel.tsx?raw'),
    componentSrc: React.lazy(
      () =>
        import('@/registry/components/carousel/framer/framer-drag-sliding-carousel')
    ),
    iframeSrc: 'live-components/framer-drag-sliding-carousel',
    tags: ['carousel', 'motion/react', 'animated-carousel', 'carousel-2'],
  },

  {
    category: DOCS_CATEGORY_KEY['framer-carousel'],
    componentName: COMPONENT_KEYS.FRAMER_CAROUSEL_1,
    href: '/components/framer-carousel',
    title: humanize(COMPONENT_KEYS.FRAMER_CAROUSEL_1),
    slug: 'framer-carousel-1',
    description: 'FRAMER CAROUSEL 1 component',
    filesrc: require('../registry/components/carousel/framer-carousel1.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/framer-carousel1')
    ),
    iframeSrc: 'live-components/framer-carousel-1',
    tags: ['carousel', 'motion/react', 'animated-carousel', 'carousel-1'],
  },

  {
    category: DOCS_CATEGORY_KEY['framer-carousel'],
    componentName: COMPONENT_KEYS.FRAMER_NORMAL_CAROUSEL,
    href: '/components/framer-carousel',
    title: humanize(COMPONENT_KEYS.FRAMER_NORMAL_CAROUSEL),
    slug: 'framer-normal-carousel',
    description: 'FRAMER NORMAL CAROUSEL component',
    filesrc: require('../registry/components/carousel/framer/framer-normal-carousel.tsx?raw'),
    componentSrc: React.lazy(
      () =>
        import('@/registry/components/carousel/framer/framer-normal-carousel')
    ),
    iframeSrc: 'live-components/framer-normal-carousel',
    tags: ['carousel', 'motion/react', 'animated-carousel', 'carousel-1'],
  },

  {
    category: DOCS_CATEGORY_KEY['framer-carousel'],
    componentName: COMPONENT_KEYS.FRAMER_AUTOPLAY_CAROUSEL,
    href: '/components/framer-carousel',
    title: humanize(COMPONENT_KEYS.FRAMER_AUTOPLAY_CAROUSEL),
    slug: 'framer-autoplay-carousel',
    description: 'FRAMER AUTOPLAY CAROUSEL component',
    filesrc: require('../registry/components/carousel/framer/framer-autoplay.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/framer/framer-autoplay')
    ),
    iframeSrc: 'live-components/framer-autoplay-carousel',
    tags: ['carousel', 'motion/react', 'animated-carousel', 'carousel-1'],
  },

  {
    category: DOCS_CATEGORY_KEY['framer-carousel'],
    componentName: COMPONENT_KEYS.FRAMER_DRAGGABLE_CAROUSEL,
    href: '/components/framer-carousel',
    title: humanize(COMPONENT_KEYS.FRAMER_DRAGGABLE_CAROUSEL),
    slug: 'framer-draggable-carousel',
    description: 'FRAMER DRAGGABLE CAROUSEL component',
    filesrc: require('../registry/components/carousel/framer/framer-draggable-carousel.tsx?raw'),
    componentSrc: React.lazy(
      () =>
        import('@/registry/components/carousel/framer/framer-draggable-carousel')
    ),
    iframeSrc: 'live-components/framer-draggable-carousel',
    tags: ['carousel', 'motion/react', 'animated-carousel', 'carousel-1'],
  },

  {
    category: DOCS_CATEGORY_KEY['framer-carousel'],
    componentName: COMPONENT_KEYS.FRAMER_MULTI_CAROUSEL,
    href: '/components/framer-carousel',
    title: humanize(COMPONENT_KEYS.FRAMER_MULTI_CAROUSEL),
    slug: 'framer-multi-carousel',
    description: 'FRAMER MULTI CAROUSEL component',
    filesrc: require('../registry/components/carousel/framer/framer-multi-carousel.tsx?raw'),
    componentSrc: React.lazy(
      () =>
        import('@/registry/components/carousel/framer/framer-multi-carousel')
    ),
    iframeSrc: 'live-components/framer-multi-carousel',
    tags: ['carousel', 'motion/react', 'animated-carousel', 'carousel-1'],
  },

  {
    category: DOCS_CATEGORY_KEY['framer-carousel'],
    componentName: COMPONENT_KEYS.FRAMER_THUMBNAILS,
    href: '/components/framer-carousel',
    title: humanize(COMPONENT_KEYS.FRAMER_THUMBNAILS),
    slug: 'framer-thumbnails',
    description: 'FRAMER THUMBNAILS component',
    filesrc: require('../registry/components/carousel/framer/framer-thumnbails.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/framer/framer-thumnbails')
    ),
    iframeSrc: 'live-components/framer-thumnbails',
    tags: ['carousel', 'motion/react', 'animated-carousel', 'carousel-1'],
  },

  {
    category: DOCS_CATEGORY_KEY['framer-carousel'],
    componentName: COMPONENT_KEYS.FRAMER_MOVEABLE_THUMBNAILS,
    href: '/components/framer-carousel',
    title: humanize(COMPONENT_KEYS.FRAMER_MOVEABLE_THUMBNAILS),
    slug: 'framer-moveable-thumbnails',
    description: 'FRAMER MOVEABLE THUMBNAILS component',
    filesrc: require('../registry/components/carousel/framer/framer-moveable-thumnbails.tsx?raw'),
    componentSrc: React.lazy(
      () =>
        import('@/registry/components/carousel/framer/framer-moveable-thumnbails')
    ),
    iframeSrc: 'live-components/framer-moveable-thumnbails',
    tags: ['carousel', 'motion/react', 'animated-carousel', 'carousel-1'],
  },

  {
    category: DOCS_CATEGORY_KEY['image-reveal'],
    componentName: COMPONENT_KEYS.IMAGE_REVEAL,
    href: '/components/image-reveal',
    title: humanize(COMPONENT_KEYS.IMAGE_REVEAL),
    slug: 'image-reveal',
    description: 'IMAGE REVEAL - image reveal component',
    filesrc: require('../registry/components/image-reveal/image-reveal.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/image-reveal/image-reveal')
    ),
    iframeSrc: 'live-components/image-reveal',
    tags: [
      'image',
      'reveal',
      'image-reveal',
      'transition',
      'animation',
      'hover-effect',
      'scroll-reveal',
      'gallery',
      'fade-in',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['image-reveal'],
    componentName: COMPONENT_KEYS.IMAGE_REVEAL2,
    href: '/components/image-reveal',
    title: humanize(COMPONENT_KEYS.IMAGE_REVEAL2),
    slug: 'image-reveal2',
    description: 'IMAGE REVEAL2 - image reveal component',
    filesrc: require('../registry/components/image-reveal/index.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/image-reveal/index')
    ),
    iframeSrc: 'live-components/image-reveal2',
    tags: [
      'image',
      'reveal',
      'image-reveal2',
      'scroll',
      'animation',
      'parallax',
      'hover-effect',
      'gallery',
      'fade',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['liquid-gradient'],
    componentName: COMPONENT_KEYS.LIQUID_GRADIENT,
    href: '/components/liquid-gradient',
    title: humanize(COMPONENT_KEYS.LIQUID_GRADIENT),
    slug: 'liquid-gradient',
    description:
      'LIQUID GRADIENT - liquid gradient component with stunning gradient effects',
    filesrc: require('../registry/components/liquid-gradient/index.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/liquid-gradient/index')
    ),
    iframeSrc: 'live-components/liquid-gradient',
    tags: ['liquid-gradient', 'liquid-gradient', 'uilayouts liquid-gradient'],
  },

  {
    category: DOCS_CATEGORY_KEY['liquid-button'],
    componentName: COMPONENT_KEYS.LIQUID_BUTTON,
    href: '/components/liquid-button',
    title: humanize(COMPONENT_KEYS.LIQUID_BUTTON),
    slug: 'liquid-button',
    description:
      'LIQUID BUTTON - liquid button component with liquid-like animations',
    filesrc: require('../registry/components/liquid-gradient/github-repo-btn.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/liquid-gradient/github-repo-btn')
    ),
    iframeSrc: 'live-components/uilayouts-github-button',
    tags: [
      'github',
      'button',
      'github-button',
      'uilayouts github button',
      'repository',
      'link',
      'cta',
      'stars',
      'fork',
      'open-source',
      'profile',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['blur-vignette'],
    componentName: COMPONENT_KEYS.BLUR_VIGNETTE_VIDEO,
    href: '/components/blur-vignette',
    title: humanize(COMPONENT_KEYS.BLUR_VIGNETTE_VIDEO),
    slug: 'blur-vignette-video',
    description: 'BLUR VIGNETTE VIDEO - blur vignette component',
    filesrc: require('../registry/components/blurvignette/blurvignettevideo.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/blurvignette/blurvignettevideo')
    ),
    iframeSrc: 'live-components/blur-vignette-video',
    tags: [
      'blur-sm',
      'vignette',
      'video',
      'blur-vignette',
      'background',
      'overlay',
      'effect',
      'media',
      'visual-effect',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['blur-vignette'],
    componentName: COMPONENT_KEYS.BLUR_VIGNETTE_IMG,
    href: '/components/blur-vignette',
    title: humanize(COMPONENT_KEYS.BLUR_VIGNETTE_IMG),
    slug: 'blur-vignette-img',
    description: 'BLUR VIGNETTE IMG - blur vignette component',
    filesrc: require('../registry/components/blurvignette/blurvignetteimg.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/blurvignette/blurvignetteimg')
    ),
    iframeSrc: 'live-components/blur-vignette-img',
    tags: [
      'blur-sm',
      'vignette',
      'image',
      'blur-effect',
      'vignette-img',
      'media',
      'background',
      'fade',
      'overlay',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['blur-vignette'],
    componentName: COMPONENT_KEYS.BLUR_VIGNETTE_CARD,
    href: '/components/blur-vignette',
    title: humanize(COMPONENT_KEYS.BLUR_VIGNETTE_CARD),
    slug: 'blur-vignette-card',
    description: 'BLUR VIGNETTE CARD - blur vignette component',
    filesrc: require('../registry/components/blurvignette/blurvignettecard.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/blurvignette/blurvignettecard')
    ),
    iframeSrc: 'live-components/blur-vignette-card',
    tags: [
      'blur-sm',
      'vignette',
      'card',
      'blur-card',
      'overlay',
      'background-effect',
      'shadow-sm',
      'card-design',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['animated-beam'],
    componentName: COMPONENT_KEYS.ANIMATED_BEAM_DEFAULT,
    href: '/components/animated-beam',
    title: humanize(COMPONENT_KEYS.ANIMATED_BEAM_DEFAULT),
    slug: 'animated-beam-default',
    description:
      'ANIMATED BEAM DEFAULT - animated beam component with beautiful animations',
    filesrc: require('../registry/components/animated-beam/default.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/animated-beam/default')
    ),
    iframeSrc: 'live-components/animated-beam-default',
    tags: [
      'animated',
      'beam',
      'default',
      'animation',
      'effect',
      'motion',
      'visual',
      'light-beam',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['animated-beam'],
    componentName: COMPONENT_KEYS.ANIMATED_BEAM_BIDIRECTIONAL,
    href: '/components/animated-beam',
    title: humanize(COMPONENT_KEYS.ANIMATED_BEAM_BIDIRECTIONAL),
    slug: 'animated-beam-bidirectional',
    description:
      'ANIMATED BEAM BIDIRECTIONAL - animated beam component with beautiful animations',
    filesrc: require('../registry/components/animated-beam/bidirectional.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/animated-beam/bidirectional')
    ),
    iframeSrc: 'live-components/animated-beam-bidirectional',
    tags: [
      'animated',
      'beam',
      'bidirectional',
      'animation',
      'motion',
      'effect',
      'light',
      'visual-motion',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['animated-beam'],
    componentName: COMPONENT_KEYS.ANIMATED_BEAM_UNIDIRECTIONAL,
    href: '/components/animated-beam',
    title: humanize(COMPONENT_KEYS.ANIMATED_BEAM_UNIDIRECTIONAL),
    slug: 'animated-beam-unidirectional',
    description:
      'ANIMATED BEAM UNIDIRECTIONAL - animated beam component with beautiful animations',
    filesrc: require('../registry/components/animated-beam/unidirectional.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/animated-beam/unidirectional')
    ),
    iframeSrc: 'live-components/animated-beam-unidirectional',
    tags: [
      'animated',
      'beam',
      'unidirectional',
      'motion',
      'effect',
      'animation',
      'light-beam',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['animated-beam'],
    componentName: COMPONENT_KEYS.ANIMATED_BEAM_MULTIPLE_INPUT,
    href: '/components/animated-beam',
    title: humanize(COMPONENT_KEYS.ANIMATED_BEAM_MULTIPLE_INPUT),
    slug: 'animated-beam-multiple-input',
    description:
      'ANIMATED BEAM MULTIPLE INPUT - animated beam component with beautiful animations',
    filesrc: require('../registry/components/animated-beam/multiple-input.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/animated-beam/multiple-input')
    ),
    iframeSrc: 'live-components/animated-beam-multiple-input',
    tags: [
      'animated',
      'beam',
      'multiple-input',
      'animation',
      'effect',
      'visual',
      'data-input',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['animated-beam'],
    componentName: COMPONENT_KEYS.ANIMATED_BEAM_MULTIPLE_OUTPUT,
    href: '/components/animated-beam',
    title: humanize(COMPONENT_KEYS.ANIMATED_BEAM_MULTIPLE_OUTPUT),
    slug: 'animated-beam-multiple-output',
    description:
      'ANIMATED BEAM MULTIPLE OUTPUT - animated beam component with beautiful animations',
    filesrc: require('../registry/components/animated-beam/multiple-output.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/animated-beam/multiple-output')
    ),
    iframeSrc: 'live-components/animated-beam-multiple-output',
    tags: [
      'animated',
      'beam',
      'multiple-output',
      'animation',
      'effect',
      'visual-output',
      'motion',
      'visual-motion',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['blocks'],
    componentName: COMPONENT_KEYS.BG_BLOCKS_ONE,
    href: '/components/blocks',
    title: humanize(COMPONENT_KEYS.BG_BLOCKS_ONE),
    slug: 'bg-blocks-one',
    description: 'BG BLOCKS ONE component',
    filesrc: require('../registry/components/bg-blocks/blocksone.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/bg-blocks/blocksone')
    ),
    iframeSrc: 'live-components/bg-blocks-one',
    tags: [
      'blocks',
      'background',
      'bg-blocks',
      'layout',
      'design',
      'grid',
      'tiles',
      'bg-effect',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['motion-number'],
    componentName: COMPONENT_KEYS.MOTION_NUMBER_INPUT,
    href: '/components/motion-number',
    title: humanize(COMPONENT_KEYS.MOTION_NUMBER_INPUT),
    slug: 'motion-number-input',
    description:
      'MOTION NUMBER INPUT - motion number component with smooth motion effects',
    filesrc: require('../registry/components/motion-number/motion-number-input.tsx?raw'),
    tags: [
      'animation',
      'number-animation',
      'input',
      'input animation',
      'motion number input',
      'number-flow',
      'number flow',
    ],
    componentSrc: React.lazy(
      () => import('@/registry/components/motion-number/motion-number-input')
    ),
    iframeSrc: 'live-components/motion-number-input',
  },

  {
    category: DOCS_CATEGORY_KEY['motion-number'],
    componentName: COMPONENT_KEYS.NUMBER_FLOW_TRADING,
    href: '/components/motion-number',
    title: humanize(COMPONENT_KEYS.NUMBER_FLOW_TRADING),
    slug: 'number-flow-trading',
    description: 'NUMBER FLOW TRADING - motion number component',
    filesrc: require('../registry/components/motion-number/number-flow-trading.tsx?raw'),
    tags: [
      'animation',
      'number-increment',
      'counter',
      'trading',
      'motion number trading',
      'post-effect',
    ],
    componentSrc: React.lazy(
      () => import('@/registry/components/motion-number/number-flow-trading')
    ),
    iframeSrc: 'live-components/motion-number-trading',
  },

  {
    category: DOCS_CATEGORY_KEY['motion-number'],
    componentName: COMPONENT_KEYS.MOTION_NUMBER_SLIDER,
    href: '/components/motion-number',
    title: humanize(COMPONENT_KEYS.MOTION_NUMBER_SLIDER),
    slug: 'motion-number-slider',
    description:
      'MOTION NUMBER SLIDER - motion number component built with shadcn/ui with smooth motion effects',
    tags: [
      'animation',
      'shadcn slider',
      'animated slider tag',
      'motion number slider',
      'number-sequence',
    ],
    componentSrc: React.lazy(
      () => import('@/registry/components/motion-number/motion-number-slider')
    ),
    iframeSrc: 'live-components/motion-number-slider',
    filesArray: [
      {
        name: 'index.tsx',
        filesrc: require('../registry/components/motion-number/motion-number-slider.tsx?raw'),
      },

      {
        name: 'slider.tsx',
        filesrc: require('../components/ui/slider.tsx?raw'),
      },
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['motion-number'],
    componentName: COMPONENT_KEYS.MOTION_NUMBER_UPVOTES,
    href: '/components/motion-number',
    title: humanize(COMPONENT_KEYS.MOTION_NUMBER_UPVOTES),
    slug: 'motion-number-upvotes',
    description:
      'MOTION NUMBER UPVOTES - motion number component with smooth motion effects',
    filesrc: require('../registry/components/motion-number/motion-number-upvotes.tsx?raw'),
    tags: [
      'animation',
      'upvotes',
      'motion number',
      'motion-number',
      'like dislikes',
      'upvotes component',
      'like-dislikes',
      'upvotes',
      'downvotes',
    ],
    componentSrc: React.lazy(
      () => import('@/registry/components/motion-number/motion-number-upvotes')
    ),
    iframeSrc: 'live-components/motion-number-upvotes',
  },

  {
    category: DOCS_CATEGORY_KEY['image-mousetrail'],
    componentName: COMPONENT_KEYS.IMAGE_MOUSETRAIL_DEFAULT,
    href: '/components/image-mousetrail',
    title: humanize(COMPONENT_KEYS.IMAGE_MOUSETRAIL_DEFAULT),
    slug: 'image-mousetrail-default',
    description: 'IMAGE MOUSETRAIL DEFAULT - mouse trail component',
    filesrc: require('../registry/components/mousetrail/default-mousetrail.tsx?raw'),
    tags: ['mouse-trail', 'animation', 'image-effect', 'motion-trail'],
    componentSrc: React.lazy(
      () => import('@/registry/components/mousetrail/default-mousetrail')
    ),
    iframeSrc: 'live-components/image-mousetrail-default',
  },

  {
    category: DOCS_CATEGORY_KEY['image-mousetrail'],
    componentName: COMPONENT_KEYS.IMAGE_MOUSETRAIL_SMALL,
    href: '/components/image-mousetrail',
    title: humanize(COMPONENT_KEYS.IMAGE_MOUSETRAIL_SMALL),
    slug: 'image-mousetrail-small',
    description: 'IMAGE MOUSETRAIL SMALL - mouse trail component',
    filesrc: require('../registry/components/mousetrail/small-images.tsx?raw'),
    tags: ['mouse-trail', 'small-images', 'interactive'],
    componentSrc: React.lazy(
      () => import('@/registry/components/mousetrail/small-images')
    ),
    iframeSrc: 'live-components/image-mousetrail-small',
  },

  {
    category: DOCS_CATEGORY_KEY['image-mousetrail'],
    componentName: COMPONENT_KEYS.IMAGE_MOUSETRAIL_DISAPPEAR,
    href: '/components/image-mousetrail',
    title: humanize(COMPONENT_KEYS.IMAGE_MOUSETRAIL_DISAPPEAR),
    slug: 'image-mousetrail-disappear',
    description: 'IMAGE MOUSETRAIL DISAPPEAR - mouse trail component',
    filesrc: require('../registry/components/mousetrail/disappear-images.tsx?raw'),
    tags: ['disappearing-effect', 'interactive-animation', 'mouse-motion'],
    componentSrc: React.lazy(
      () => import('@/registry/components/mousetrail/disappear-images')
    ),
    iframeSrc: 'live-components/image-mousetrail-disappear',
  },

  {
    category: DOCS_CATEGORY_KEY['image-mousetrail'],
    componentName: COMPONENT_KEYS.IMAGE_MOUSETRAIL_WITHOUT_COMPONENT,
    href: '/components/image-mousetrail',
    title: humanize(COMPONENT_KEYS.IMAGE_MOUSETRAIL_WITHOUT_COMPONENT),
    slug: 'image-mousetrail-without-component',
    description: 'IMAGE MOUSETRAIL WITHOUT COMPONENT - mouse trail component',
    filesrc: require('../registry/components/mousetrail/without-component-mousetrail.tsx?raw'),
    tags: [
      'Without Component Mousetrail',
      'Image Mouse Trail Without Componnents',
    ],
    componentSrc: React.lazy(
      () =>
        import('@/registry/components/mousetrail/without-component-mousetrail')
    ),
    iframeSrc: 'live-components/image-mousetrail-without-component',
  },

  {
    category: DOCS_CATEGORY_KEY['directional-drawer'],
    componentName: COMPONENT_KEYS.DIRECTIONAL_DRAWER_DEFAULT,
    href: '/components/directional-drawer',
    title: humanize(COMPONENT_KEYS.DIRECTIONAL_DRAWER_DEFAULT),
    slug: 'directional-drawer-default',
    description: 'DIRECTIONAL DRAWER DEFAULT - directional drawer component',
    filesrc: require('../registry/components/drawer/directional-drawer-default.tsx?raw'),
    tags: ['sidebar', 'navigation', 'drawer', 'responsive'],
    componentSrc: React.lazy(
      () => import('@/registry/components/drawer/directional-drawer-default')
    ),
    iframeSrc: 'live-components/directional-drawer-default',
    iframe: true,
  },

  {
    category: DOCS_CATEGORY_KEY['directional-drawer'],
    componentName: COMPONENT_KEYS.LEFT_DIRECTIONAL_DRAWER,
    href: '/components/directional-drawer',
    title: humanize(COMPONENT_KEYS.LEFT_DIRECTIONAL_DRAWER),
    slug: 'left-directional-drawer',
    description: 'LEFT DIRECTIONAL DRAWER - directional drawer component',
    filesrc: require('../registry/components/drawer/left-directional-drawer.tsx?raw'),
    tags: ['Left Sidebar', 'navigation', 'Left Drawer', 'Responsive Drawer'],
    componentSrc: React.lazy(
      () => import('@/registry/components/drawer/left-directional-drawer')
    ),
    iframeSrc: 'live-components/left-directional-drawer',
    iframe: true,
  },

  {
    category: DOCS_CATEGORY_KEY['directional-drawer'],
    componentName: COMPONENT_KEYS.TOP_DIRECTIONAL_DRAWER,
    href: '/components/directional-drawer',
    title: humanize(COMPONENT_KEYS.TOP_DIRECTIONAL_DRAWER),
    slug: 'top-directional-drawer',
    description: 'TOP DIRECTIONAL DRAWER - directional drawer component',
    filesrc: require('../registry/components/drawer/top-directional-drawer.tsx?raw'),
    tags: ['Left Sidebar', 'navigation', 'Left Drawer', 'Responsive Drawer'],
    componentSrc: React.lazy(
      () => import('@/registry/components/drawer/top-directional-drawer')
    ),
    iframeSrc: 'live-components/top-directional-drawer',
    iframe: true,
  },

  {
    category: DOCS_CATEGORY_KEY['directional-drawer'],
    componentName: COMPONENT_KEYS.BOTTOM_DIRECTIONAL_DRAWER,
    href: '/components/directional-drawer',
    title: humanize(COMPONENT_KEYS.BOTTOM_DIRECTIONAL_DRAWER),
    slug: 'bottom-directional-drawer',
    description: 'BOTTOM DIRECTIONAL DRAWER - directional drawer component',
    filesrc: require('../registry/components/drawer/bottom-directional-drawer.tsx?raw'),
    tags: ['Left Sidebar', 'navigation', 'Left Drawer', 'Responsive Drawer'],
    componentSrc: React.lazy(
      () => import('@/registry/components/drawer/bottom-directional-drawer')
    ),
    iframeSrc: 'live-components/bottom-directional-drawer',
    iframe: true,
  },

  {
    category: DOCS_CATEGORY_KEY['motion-drawer'],
    componentName: COMPONENT_KEYS.MOTION_DRAWER_DEFAULT,
    href: '/components/motion-drawer',
    title: humanize(COMPONENT_KEYS.MOTION_DRAWER_DEFAULT),
    slug: 'motion-drawer-default',
    description:
      'MOTION DRAWER DEFAULT - motion drawer component with smooth motion effects',
    filesrc: require('../registry/components/drawer/motion-drawer.tsx?raw'),
    tags: ['Left Sidebar', 'navigation', 'Left Drawer', 'Responsive Drawer'],
    componentSrc: React.lazy(
      () => import('@/registry/components/drawer/motion-drawer')
    ),
    iframeSrc: 'live-components/motion-drawer-default',
    iframe: true,
  },

  {
    category: DOCS_CATEGORY_KEY['right-motion-drawer'],
    componentName: COMPONENT_KEYS.RIGHT_MOTION_DRAWER,
    href: '/components/motion-drawer',
    title: humanize(COMPONENT_KEYS.RIGHT_MOTION_DRAWER),
    slug: 'right-motion-drawer',
    description: 'RIGHT MOTION DRAWER component with smooth motion effects',
    filesrc: require('../registry/components/drawer/right-motion-drawer.tsx?raw'),
    tags: ['Left Sidebar', 'navigation', 'Left Drawer', 'Responsive Drawer'],
    componentSrc: React.lazy(
      () => import('@/registry/components/drawer/right-motion-drawer')
    ),
    iframeSrc: 'live-components/right-motion-drawer',
    iframe: true,
  },

  {
    category: DOCS_CATEGORY_KEY['responsive-header'],
    componentName: COMPONENT_KEYS.RESPONSIVE_HEADER_DEFAULT,
    href: '/components/responsive-header',
    title: humanize(COMPONENT_KEYS.RESPONSIVE_HEADER_DEFAULT),
    slug: 'responsive-header-default',
    description:
      'RESPONSIVE HEADER DEFAULT - responsive header component fully responsive design',
    filesrc: require('../registry/components/drawer/responsive-header.tsx?raw'),
    tags: ['header', 'responsive', 'navigation-bar', 'menu'],
    componentSrc: React.lazy(
      () => import('@/registry/components/drawer/responsive-header')
    ),
    iframeSrc: 'live-components/responsive-header-default',
    iframe: true,
  },

  {
    category: DOCS_CATEGORY_KEY['responsive-modal'],
    componentName: COMPONENT_KEYS.RESPONSIVE_MODAL_DEFAULT,
    href: '/components/responsive-modal',
    title: humanize(COMPONENT_KEYS.RESPONSIVE_MODAL_DEFAULT),
    slug: 'responsive-modal-default',
    description:
      'RESPONSIVE MODAL DEFAULT - responsive modal component fully responsive design',
    filesrc: require('../registry/components/modal/responsive-modal.tsx?raw'),
    tags: ['modal', 'responsive', 'drawer', 'menu'],
    componentSrc: React.lazy(
      () => import('@/registry/components/modal/responsive-modal')
    ),
    iframe: true,
    iframeSrc: 'live-components/responsive-modal-default',
  },

  {
    category: DOCS_CATEGORY_KEY['dialog'],
    componentName: COMPONENT_KEYS.DIALOG_DEFAULT,
    href: '/components/dialog',
    title: humanize(COMPONENT_KEYS.DIALOG_DEFAULT),
    slug: 'dialog-default',
    description: 'DIALOG DEFAULT - dialog component',
    filesrc: require('../registry/components/modal/dialog-default.tsx?raw'),
    tags: ['dialog', 'popup', 'modal', 'UI-component'],
    componentSrc: React.lazy(
      () => import('@/registry/components/modal/dialog-default')
    ),
    iframeSrc: 'live-components/dialog-default',
    iframe: true,
  },

  {
    category: DOCS_CATEGORY_KEY['media-modal'],
    componentName: COMPONENT_KEYS.MEDIA_MODAL_DEFAULT,
    href: '/components/media-modal',
    title: humanize(COMPONENT_KEYS.MEDIA_MODAL_DEFAULT),
    slug: 'media-modal-default',
    description: 'MEDIA MODAL DEFAULT - media modal component',
    filesrc: require('../registry/components/modal/media-modal-default.tsx?raw'),
    tags: ['media', 'modal', 'popup', 'UI'],
    componentSrc: React.lazy(
      () => import('@/registry/components/modal/media-modal-default')
    ),
    iframeSrc: 'live-components/media-modal-default',
    iframe: false,
  },

  {
    category: DOCS_CATEGORY_KEY['media-modal'],
    componentName: COMPONENT_KEYS.IMAGEMODALS,
    href: '/components/media-modal',
    title: humanize(COMPONENT_KEYS.IMAGEMODALS),
    slug: 'imagemodals',
    description: 'IMAGEMODALS - media modal component',
    filesrc: require('../registry/components/modal/image-modals.tsx?raw'),
    tags: ['image modal', 'modal', 'popup', 'UI'],
    componentSrc: React.lazy(
      () => import('@/registry/components/modal/image-modals')
    ),
    iframeSrc: 'live-components/imagemodals',
    iframe: true,
  },

  {
    category: DOCS_CATEGORY_KEY['linear-modal'],
    componentName: COMPONENT_KEYS.LINEAR_MODAL_DEFAULT,
    href: '/components/linear-modal',
    title: humanize(COMPONENT_KEYS.LINEAR_MODAL_DEFAULT),
    slug: 'linear-modal-default',
    description: 'LINEAR MODAL DEFAULT - linear modal component',
    filesrc: require('../registry/components/linear-modal/index.tsx?raw'),
    tags: ['card', 'linear-layout', 'UI-component', 'modal-card'],
    componentSrc: React.lazy(
      () => import('@/registry/components/linear-modal')
    ),
    iframeSrc: 'live-components/linear-modal-default',
    iframe: false,
  },

  {
    category: DOCS_CATEGORY_KEY['linear-modal'],
    componentName: COMPONENT_KEYS.LINEAR_MODAL_STANDALONE,
    href: '/components/linear-modal',
    title: humanize(COMPONENT_KEYS.LINEAR_MODAL_STANDALONE),
    slug: 'linear-modal-standalone',
    description: 'LINEAR MODAL STANDALONE - linear modal component',
    filesrc: require('../registry/components/linear-modal/standalone-version.tsx?raw'),
    tags: [
      'linear-modal',
      'without components',
      'linear-layout',
      'UI-component',
      'modal-card',
    ],
    componentSrc: React.lazy(
      () => import('@/registry/components/linear-modal/standalone-version')
    ),
    iframeSrc: 'live-components/linear-modal-standalone',
    iframe: true,
  },

  {
    category: DOCS_CATEGORY_KEY['linear-modal'],
    componentName: COMPONENT_KEYS.LINEAR_MODAL_CENTER_CONTENT,
    href: '/components/linear-modal',
    title: humanize(COMPONENT_KEYS.LINEAR_MODAL_CENTER_CONTENT),
    slug: 'linear-modal-center-content',
    description: 'LINEAR MODAL CENTER CONTENT - linear modal component',
    filesrc: require('../registry/components/linear-modal/center-content.tsx?raw'),
    tags: [
      'linear-modal',
      'without components',
      'linear-layout',
      'UI-component',
      'modal-card',
    ],
    componentSrc: React.lazy(
      () => import('@/registry/components/linear-modal/center-content')
    ),
    iframeSrc: 'live-components/linear-modal-center-content',
    iframe: true,
  },

  {
    category: DOCS_CATEGORY_KEY['gallery-modal'],
    componentName: COMPONENT_KEYS.GALLERY_MODAL_ACCORDION,
    href: '/components/gallery-modal',
    title: humanize(COMPONENT_KEYS.GALLERY_MODAL_ACCORDION),
    slug: 'gallery-modal-accordion',
    description: 'GALLERY MODAL ACCORDION - gallery modal component',
    filesrc: require('../registry/components/modal/gallery-modal/accordion-modal.tsx?raw'),
    tags: ['gallery', 'accordion', 'modal', 'media'],
    componentSrc: React.lazy(
      () => import('@/registry/components/modal/gallery-modal/accordion-modal')
    ),
    iframeSrc: 'live-components/gallery-modal-accordion',
    iframe: true,
  },

  {
    category: DOCS_CATEGORY_KEY['gallery-modal'],
    componentName: COMPONENT_KEYS.GALLERY_MODAL_SLIDER,
    href: '/components/gallery-modal',
    title: humanize(COMPONENT_KEYS.GALLERY_MODAL_SLIDER),
    slug: 'gallery-modal-slider',
    description: 'GALLERY MODAL SLIDER - gallery modal component',
    filesrc: require('../registry/components/modal/gallery-modal/modal-slider.tsx?raw'),
    tags: ['gallery', 'slider', 'media-modal', 'interactive'],
    componentSrc: React.lazy(
      () => import('@/registry/components/modal/gallery-modal/modal-slider')
    ),
    iframeSrc: 'live-components/gallery-modal-slider',
    iframe: true,
  },

  {
    category: DOCS_CATEGORY_KEY['gallery-modal'],
    componentName: COMPONENT_KEYS.GALLERY_MODAL_UNSPLASH,
    href: '/components/gallery-modal',
    title: humanize(COMPONENT_KEYS.GALLERY_MODAL_UNSPLASH),
    slug: 'gallery-modal-unsplash',
    description: 'GALLERY MODAL UNSPLASH - gallery modal component',
    filesrc: require('../registry/components/modal/gallery-modal/unsplash-modal.tsx?raw'),
    tags: ['gallery', 'unsplash', 'media', 'image-gallery'],
    componentSrc: React.lazy(
      () => import('@/registry/components/modal/gallery-modal/unsplash-modal')
    ),
    iframeSrc: 'live-components/gallery-modal-unsplash',
    iframe: true,
  },

  {
    category: DOCS_CATEGORY_KEY['scroll-animation'],
    componentName: COMPONENT_KEYS.SCROLL_ANIMATION_DEFAULT,
    href: '/components/scroll-animation',
    title: humanize(COMPONENT_KEYS.SCROLL_ANIMATION_DEFAULT),
    slug: 'scroll-animation-default',
    description: 'SCROLL ANIMATION DEFAULT - scroll animation component',
    filesrc: require('../registry/components/scroll-animation/scroll-element.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/scroll-animation/scroll-element')
    ),
    iframeSrc: 'live-components/scroll-animation-default',
    tags: ['scroll', 'animation', 'element'],
  },

  {
    category: DOCS_CATEGORY_KEY['scroll-animation'],
    componentName: COMPONENT_KEYS.SCROLL_ANIMATION_REPEAT,
    href: '/components/scroll-animation',
    title: humanize(COMPONENT_KEYS.SCROLL_ANIMATION_REPEAT),
    slug: 'scroll-animation-repeat',
    description: 'SCROLL ANIMATION REPEAT - scroll animation component',
    filesrc: require('../registry/components/scroll-animation/repeat-scroll.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/scroll-animation/repeat-scroll')
    ),
    iframeSrc: 'live-components/scroll-animation-repeat',
    tags: ['scroll', 'repeat', 'animation'],
  },

  {
    category: DOCS_CATEGORY_KEY['scroll-animation'],
    componentName: COMPONENT_KEYS.SCROLL_ANIMATION_TEXT,
    href: '/components/scroll-animation',
    title: humanize(COMPONENT_KEYS.SCROLL_ANIMATION_TEXT),
    slug: 'scroll-animation-text',
    description: 'SCROLL ANIMATION TEXT - scroll animation component',
    filesrc: require('../registry/components/scroll-animation/text-scroll.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/scroll-animation/text-scroll')
    ),
    iframeSrc: 'live-components/scroll-animation-text',
    tags: ['text', 'scroll', 'animation'],
  },

  {
    category: DOCS_CATEGORY_KEY['timeline-animation'],
    componentName: COMPONENT_KEYS.TIMELINE_ANIMATION_DEFAULT,
    href: '/components/timeline-animation',
    title: humanize(COMPONENT_KEYS.TIMELINE_ANIMATION_DEFAULT),
    slug: 'timeline-animation-default',
    description: 'TIMELINE ANIMATION DEFAULT - timeline animation component',
    filesrc: require('../registry/components/timeline-animation/index.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/timeline-animation')
    ),
    iframeSrc: 'live-components/timeline-animation-default',
    tags: ['timeline', 'animation', 'scroll'],
  },

  {
    category: DOCS_CATEGORY_KEY['scroll-text'],
    componentName: COMPONENT_KEYS.TEXT_SCROLL_ANIMATION,
    href: '/components/scroll-text',
    title: humanize(COMPONENT_KEYS.TEXT_SCROLL_ANIMATION),
    slug: 'text-scroll-animation',
    description: 'TEXT SCROLL ANIMATION component',
    filesrc: require('../registry/components/text-animation/scroll-text-animation.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/text-animation/scroll-text-animation')
    ),
    iframeSrc: 'live-components/text-scroll-animation',
    tags: ['scroll', 'text-animation', 'text', 'animation'],
  },

  {
    category: DOCS_CATEGORY_KEY['scroll-text-marquee'],
    componentName: COMPONENT_KEYS.SCROLL_TEXT_MARQUEE_UNIDIRECTIONAL,
    href: '/components/scroll-text-marquee-unidirectional',
    title: humanize(COMPONENT_KEYS.SCROLL_TEXT_MARQUEE_UNIDIRECTIONAL),
    slug: 'scroll-text-marquee-unidirectional',
    description:
      'SCROLL TEXT MARQUEE UNIDIRECTIONAL component made with motion',
    filesrc: require('../registry/components/text-animation/text-marque/animationone.tsx?raw'),
    componentSrc: React.lazy(
      () =>
        import('@/registry/components/text-animation/text-marque/animationone')
    ),
    iframeSrc: 'live-components/scroll-text-marquee',
    tags: ['marquee', 'text', 'animation'],
  },

  {
    category: DOCS_CATEGORY_KEY['scroll-text-marquee'],
    componentName: COMPONENT_KEYS.SCROLL_TEXT_MARQUEE_BIDIRECTIONAL,
    href: '/components/scroll-text-marquee-bidirectional',
    title: humanize(COMPONENT_KEYS.SCROLL_TEXT_MARQUEE_BIDIRECTIONAL),
    slug: 'scroll-text-marquee-bidirectional',
    description: 'SCROLL TEXT MARQUEE BIDIRECTIONAL component made with motion',
    filesrc: require('../registry/components/text-animation/text-marque/animationtwo.tsx?raw'),
    componentSrc: React.lazy(
      () =>
        import('@/registry/components/text-animation/text-marque/animationtwo')
    ),
    iframeSrc: 'live-components/scroll-text-marquee2',
    tags: ['marquee', 'text', 'animation'],
  },

  {
    category: DOCS_CATEGORY_KEY['randomized-text-effect'],
    componentName: COMPONENT_KEYS.RANDOMIZED_TEXT_UNVEIL,
    href: '/components/randomized-text-effect',
    title: humanize(COMPONENT_KEYS.RANDOMIZED_TEXT_UNVEIL),
    slug: 'randomized-text-unveil',
    description: 'RANDOMIZED TEXT UNVEIL - randomized text effect component',
    filesrc: require('../registry/components/text-animation/text-randomized/index.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/text-animation/text-randomized')
    ),
    iframeSrc: 'live-components/randomized-text-unveil',
    tags: ['random', 'text', 'effect'],
  },

  {
    category: DOCS_CATEGORY_KEY['horizontal-scroll'],
    componentName: COMPONENT_KEYS.FRAMERHORIZONTALSCROLL,
    href: '/components/horizontal-scroll',
    title: humanize(COMPONENT_KEYS.FRAMERHORIZONTALSCROLL),
    slug: 'framerhorizontalscroll',
    description: 'FRAMERHORIZONTALSCROLL - horizontal scroll component',
    filesrc: require('../registry/components/scroll-animation/framer-horizontal-scroll.tsx?raw'),
    componentSrc: React.lazy(
      () =>
        import('@/registry/components/scroll-animation/framer-horizontal-scroll')
    ),
    iframeSrc: 'live-components/framerhorizontalscroll',
    tags: ['horizontal', 'scroll', 'framer'],
  },

  {
    category: DOCS_CATEGORY_KEY['infinity-brand'],
    componentName: COMPONENT_KEYS.INFINTYBAND,
    href: '/components/infinity-brand',
    title: humanize(COMPONENT_KEYS.INFINTYBAND),
    slug: 'infintyband',
    description: 'INFINTYBAND - infinity brand component',
    filesrc: require('../registry/components/marquee/infinity-band-scroll.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/marquee/infinity-band-scroll')
    ),
    iframeSrc: 'live-components/infintyband',
    tags: ['infinity', 'brand', 'marquee'],
  },

  {
    category: DOCS_CATEGORY_KEY['grid'],
    componentName: COMPONENT_KEYS.NORMALGRID,
    href: '/components/normal-grid',
    title: humanize(COMPONENT_KEYS.NORMALGRID),
    slug: 'normalgrid',
    description: 'NORMALGRID - grid component',
    filesrc: require('../registry/components/grid/normal-grid.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/grid/normal-grid')
    ),
    iframeSrc: 'live-components/normalGrid',
    tags: ['grid', 'Normal Grid', 'normal grid', 'normalgrid'],
  },

  {
    category: DOCS_CATEGORY_KEY['grid'],
    componentName: COMPONENT_KEYS.BOXGRID,
    href: '/components/box-grid',
    title: humanize(COMPONENT_KEYS.BOXGRID),
    slug: 'boxgrid',
    description: 'BOXGRID - grid component',
    filesrc: require('../registry/components/grid/box-grid.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/grid/box-grid')
    ),
    iframeSrc: 'live-components/boxgrid',
    tags: ['grid', 'box grid', 'Box Grid'],
  },

  {
    category: DOCS_CATEGORY_KEY['grid'],
    componentName: COMPONENT_KEYS.CONDITIONGRID,
    href: '/components/condition-grid',
    title: humanize(COMPONENT_KEYS.CONDITIONGRID),
    slug: 'conditiongrid',
    description: 'CONDITIONGRID - grid component',
    filesrc: require('../registry/components/grid/condition-grid.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/grid/condition-grid')
    ),
    iframeSrc: 'live-components/conditionGrid',
    tags: ['grid', 'condition grid', 'Contidion Grid'],
  },

  {
    category: DOCS_CATEGORY_KEY['grid'],
    componentName: COMPONENT_KEYS.UNSPLASHGRID,
    href: '/components/unsplash-grid',
    title: humanize(COMPONENT_KEYS.UNSPLASHGRID),
    slug: 'unsplashgrid',
    description: 'UNSPLASHGRID - grid component',
    filesrc: require('../registry/components/grid/unsplash-grid.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/grid/unsplash-grid')
    ),
    iframeSrc: 'live-components/unsplashGrid',
    tags: ['grid', 'unsplash grid', 'Unsplash Grid'],
  },

  {
    category: DOCS_CATEGORY_KEY['marquee'],
    componentName: COMPONENT_KEYS.DEFAULT_MARQUEE,
    href: '/components/default-marquee',
    title: humanize(COMPONENT_KEYS.DEFAULT_MARQUEE),
    slug: 'default-marquee',
    description: 'DEFAULT MARQUEE - marquee component',
    filesrc: require('../registry/components/marquee/default-marquee.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/marquee/default-marquee')
    ),
    iframeSrc: 'live-components/default-marquee',
    tags: ['default', 'marquee', 'animation'],
  },

  {
    category: DOCS_CATEGORY_KEY['marquee'],
    componentName: COMPONENT_KEYS.VERTICLE_MARQUEE,
    href: '/components/verticle-marquee',
    title: humanize(COMPONENT_KEYS.VERTICLE_MARQUEE),
    slug: 'verticle-marquee',
    description: 'VERTICLE MARQUEE - marquee component',
    filesrc: require('../registry/components/marquee/verticle-marquee.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/marquee/verticle-marquee')
    ),
    iframeSrc: 'live-components/verticl-emarquee',
    tags: ['vertical', 'marquee', 'animation'],
  },

  {
    category: DOCS_CATEGORY_KEY['marquee'],
    componentName: COMPONENT_KEYS.LOGOS_MARQUEE,
    href: '/components/marquee',
    title: humanize(COMPONENT_KEYS.LOGOS_MARQUEE),
    slug: 'logos-marquee',
    description: 'LOGOS MARQUEE - marquee component',
    filesrc: require('../registry/components/marquee/logos-marquee.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/marquee/logos-marquee')
    ),
    iframeSrc: 'live-components/logos-marquee',
    tags: ['logos', 'marquee', 'animation'],
  },

  {
    category: DOCS_CATEGORY_KEY['marquee'],
    componentName: COMPONENT_KEYS.MARQUEE_3D,
    href: '/components/marquee-3d',
    title: humanize(COMPONENT_KEYS.MARQUEE_3D),
    slug: 'marquee-3d',
    description: 'MARQUEE 3D - marquee component',
    filesrc: require('../registry/components/marquee/3d-marquee.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/marquee/3d-marquee')
    ),
    iframeSrc: 'live-components/3d-marquee',
    tags: ['3d', 'marquee', 'animation'],
  },

  {
    category: DOCS_CATEGORY_KEY['clip-path'],
    componentName: COMPONENT_KEYS.CREATIVE_CLIPPATH,
    href: '/components/clip-path',
    title: humanize(COMPONENT_KEYS.CREATIVE_CLIPPATH),
    slug: 'creative-clippath',
    description: 'CREATIVE CLIPPATH - clip-path component with creative design',
    filesrc: require('../registry/components/clip-path/clip-path-creative.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/clip-path-creative')
    ),
    iframeSrc: 'live-components/creative-clippath',
    tags: ['clip-path', 'creative', 'masking'],
  },

  {
    category: DOCS_CATEGORY_KEY['clip-path'],
    componentName: COMPONENT_KEYS.CORPORATE_CLIPPATH,
    href: '/components/clip-path',
    title: humanize(COMPONENT_KEYS.CORPORATE_CLIPPATH),
    slug: 'corporate-clippath',
    description: 'CORPORATE CLIPPATH - clip-path component',
    filesrc: require('../registry/components/clip-path/clip-path-corporate.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/clip-path-corporate')
    ),
    iframeSrc: 'live-components/corporate-clippath',
    tags: ['clip-path', 'corporate', 'masking'],
  },

  {
    category: DOCS_CATEGORY_KEY['clip-path'],
    componentName: COMPONENT_KEYS.SYMBOLIC_CLIPPATH,
    href: '/components/clip-path',
    title: humanize(COMPONENT_KEYS.SYMBOLIC_CLIPPATH),
    slug: 'symbolic-clippath',
    description: 'SYMBOLIC CLIPPATH - clip-path component',
    filesrc: require('../registry/components/clip-path/clip-path-symbolic.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/clip-path-symbolic')
    ),
    iframeSrc: 'live-components/symbolic-clippath',
    tags: ['clip-path', 'symbolic', 'masking'],
  },

  {
    category: DOCS_CATEGORY_KEY['clip-path'],
    componentName: COMPONENT_KEYS.CREATIVE_MASK_CLIPPATH,
    href: '/components/clip-path',
    title: humanize(COMPONENT_KEYS.CREATIVE_MASK_CLIPPATH),
    slug: 'creative-mask-clippath',
    description:
      'CREATIVE MASK CLIPPATH - clip-path component with creative design',
    filesrc: require('../registry/components/clip-path/clip-path-creative-mask.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/clip-path-creative-mask')
    ),
    iframeSrc: 'live-components/creative-mask-clippath',
    tags: ['clip-path', 'creative', 'mask'],
  },

  {
    category: DOCS_CATEGORY_KEY['clip-path'],
    componentName: COMPONENT_KEYS.WATERSPLASH_CLIPPATH,
    href: '/components/clip-path',
    title: humanize(COMPONENT_KEYS.WATERSPLASH_CLIPPATH),
    slug: 'watersplash-clippath',
    description: 'WATERSPLASH CLIPPATH - clip-path component',
    filesrc: require('../registry/components/clip-path/clip-path-water-splash.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/clip-path-water-splash')
    ),
    iframeSrc: 'live-components/watersplash-clippath',
    tags: ['clip-path ', 'Water Splash Clip-Path', 'creative', 'mask'],
  },

  {
    category: DOCS_CATEGORY_KEY['image-masking'],
    componentName: COMPONENT_KEYS.CREATIVE_IMAGEMASKING,
    href: '/components/image-masking',
    title: humanize(COMPONENT_KEYS.CREATIVE_IMAGEMASKING),
    slug: 'creative-imagemasking',
    description:
      'CREATIVE IMAGEMASKING - image masking component with creative design',
    filesrc: require('../registry/components/clip-path/creative-image-masking.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/creative-image-masking')
    ),
    iframeSrc: 'live-components/hexagon2-videomasking',
    tags: ['image-masking', 'creative', 'masking'],
  },

  {
    category: DOCS_CATEGORY_KEY['image-masking'],
    componentName: COMPONENT_KEYS.ANIMAL_IMAGEMASKING,
    href: '/components/image-masking',
    title: humanize(COMPONENT_KEYS.ANIMAL_IMAGEMASKING),
    slug: 'animal-imagemasking',
    description: 'ANIMAL IMAGEMASKING - image masking component',
    filesrc: require('../registry/components/clip-path/animal-image-masking.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/animal-image-masking')
    ),
    iframeSrc: 'live-components/animal-imagemasking',
    tags: [
      'animal-image-masking',
      'Animal Image Masking ',
      'creative',
      'masking',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['image-masking'],
    componentName: COMPONENT_KEYS.CENTER_IMAGEMASKING,
    href: '/components/image-masking',
    title: humanize(COMPONENT_KEYS.CENTER_IMAGEMASKING),
    slug: 'center-imagemasking',
    description: 'CENTER IMAGEMASKING - image masking component',
    filesrc: require('../registry/components/clip-path/center-image-masking.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/center-image-masking')
    ),
    iframeSrc: 'live-components/center-imagemasking',
    tags: [
      'center-image-masking',
      'background Image Masking ',
      'creative',
      'masking',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['image-masking'],
    componentName: COMPONENT_KEYS.FIXEDBG_IMAGEMASKING,
    href: '/components/image-masking',
    title: humanize(COMPONENT_KEYS.FIXEDBG_IMAGEMASKING),
    slug: 'fixedbg-imagemasking',
    description: 'FIXEDBG IMAGEMASKING - image masking component',
    filesrc: require('../registry/components/clip-path/fixed-bg-image-masking.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/fixed-bg-image-masking')
    ),
    iframeSrc: 'live-components/fixedbg-imagemasking',
    tags: [
      'fixedbg-image-masking',
      'Fixed BG Image Masking ',
      'creative',
      'masking',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['image-masking'],
    componentName: COMPONENT_KEYS.WATERSPLASH_IMAGEMASKING,
    href: '/components/image-masking',
    title: humanize(COMPONENT_KEYS.WATERSPLASH_IMAGEMASKING),
    slug: 'watersplash-imagemasking',
    description: 'WATERSPLASH IMAGEMASKING - image masking component',
    filesrc: require('../registry/components/clip-path/water-splash-image-masking.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/water-splash-image-masking')
    ),
    iframeSrc: 'live-components/watersplash-imagemasking',
    tags: [
      'Watersplash-image-masking',
      'Water Splash Image Masking ',
      'BG Image Masking ',
      'creative',
      'masking',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['video-masking'],
    componentName: COMPONENT_KEYS.CREATIVE_VIDEOMASKING,
    href: '/components/video-masking',
    title: humanize(COMPONENT_KEYS.CREATIVE_VIDEOMASKING),
    slug: 'creative-videomasking',
    description:
      'CREATIVE VIDEOMASKING - video masking component with creative design',
    filesrc: require('../registry/components/clip-path/creative-video-masking.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/creative-video-masking')
    ),
    iframeSrc: 'live-components/creative-videomasking',
    tags: ['video', 'masking', 'creative'],
  },

  {
    category: DOCS_CATEGORY_KEY['video-masking'],
    componentName: COMPONENT_KEYS.SPLASHWATER_VIDEOMASKING,
    href: '/components/video-masking',
    title: humanize(COMPONENT_KEYS.SPLASHWATER_VIDEOMASKING),
    slug: 'splashwater-videomasking',
    description: 'SPLASHWATER VIDEOMASKING - video masking component',
    filesrc: require('../registry/components/clip-path/splash-water-video-masking.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/splash-water-video-masking')
    ),
    iframeSrc: 'live-components/splashwater-videomasking',
    tags: ['video', 'splash', 'masking'],
  },

  {
    category: DOCS_CATEGORY_KEY['video-masking'],
    componentName: COMPONENT_KEYS.HEXAGON_VIDEOMASKING,
    href: '/components/video-masking',
    title: humanize(COMPONENT_KEYS.HEXAGON_VIDEOMASKING),
    slug: 'hexagon-videomasking',
    description: 'HEXAGON VIDEOMASKING - video masking component',
    filesrc: require('../registry/components/clip-path/hexagon-video-masking.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/hexagon-video-masking')
    ),
    iframeSrc: 'live-components/hexagon-videomasking',
    tags: ['hexagon video masking', ' hexagon masking', 'creative'],
  },

  {
    category: DOCS_CATEGORY_KEY['video-masking'],
    componentName: COMPONENT_KEYS.HEXAGON2_VIDEOMASKING,
    href: '/components/video-masking',
    title: humanize(COMPONENT_KEYS.HEXAGON2_VIDEOMASKING),
    slug: 'hexagon2-videomasking',
    description: 'HEXAGON2 VIDEOMASKING - video masking component',
    filesrc: require('../registry/components/clip-path/hexagon2-video-masking.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/hexagon2-video-masking')
    ),
    iframeSrc: 'live-components/hexagon2-videomasking',
    tags: ['hexagon video masking2', ' hexagon masking2', 'creative'],
  },

  {
    category: DOCS_CATEGORY_KEY['video-masking'],
    componentName: COMPONENT_KEYS.TEXTOVERLAY_VIDEOMASKING,
    href: '/components/video-masking',
    title: humanize(COMPONENT_KEYS.TEXTOVERLAY_VIDEOMASKING),
    slug: 'textoverlay-videomasking',
    description: 'TEXTOVERLAY VIDEOMASKING - video masking component',
    filesrc: require('../registry/components/clip-path/text-overlay-video-masking.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/text-overlay-video-masking')
    ),
    iframeSrc: 'live-components/textoverlay-videomasking',
    tags: ['text overlay video', 'text-overlay video masking', 'masking'],
  },

  {
    category: DOCS_CATEGORY_KEY['gradient-border'],
    componentName: COMPONENT_KEYS.GRADIENT_BORDER,
    href: '/components/gradient-border',
    title: humanize(COMPONENT_KEYS.GRADIENT_BORDER),
    slug: 'gradient-border',
    description: 'GRADIENT BORDER component with stunning gradient effects',
    filesrc: require('../registry/components/card/gradient-border.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/card/gradient-border')
    ),
    iframeSrc: 'live-components/gradient-border',
    tags: [
      'gradient',
      'border',
      'card',
      'background',
      'style',
      'design',
      'ui',
      'effect',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['hover-cards'],
    componentName: COMPONENT_KEYS.STRIPECARD,
    href: '/components/hover-cards',
    title: humanize(COMPONENT_KEYS.STRIPECARD),
    slug: 'stripecard',
    description: 'STRIPECARD - hover card component',
    filesrc: require('../registry/components/card/stripe-card.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/card/stripe-card')
    ),
    iframeSrc: 'live-components/stripecard',
    tags: [
      'hover',
      'stripe',
      'card',
      'animation',
      'interaction',
      'design',
      'ui',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['hover-cards'],
    componentName: COMPONENT_KEYS.STRIPECARD2,
    href: '/components/hover-cards',
    title: humanize(COMPONENT_KEYS.STRIPECARD2),
    slug: 'stripecard2',
    description: 'STRIPECARD2 - hover card component',
    filesrc: require('../registry/components/card/stripe-card2.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/card/stripe-card2')
    ),
    iframeSrc: 'live-components/stripecard2',
    tags: [
      'hover',
      'stripe',
      'card',
      'animation',
      'interaction',
      'design',
      'ui',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['hover-cards'],
    componentName: COMPONENT_KEYS.HOVERCARD4,
    href: '/components/hover-cards',
    title: humanize(COMPONENT_KEYS.HOVERCARD4),
    slug: 'hovercard4',
    description: 'HOVERCARD4 - hover card component with smooth hover effects',
    filesrc: require('../registry/components/card/hover-card4.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/card/hover-card4')
    ),
    iframeSrc: 'live-components/hovercard4',
    tags: ['hover', 'card', 'animation', 'interaction', 'design', 'ui'],
  },

  {
    category: DOCS_CATEGORY_KEY['hover-cards'],
    componentName: COMPONENT_KEYS.HOVERCARD3,
    href: '/components/hover-cards',
    title: humanize(COMPONENT_KEYS.HOVERCARD3),
    slug: 'hovercard3',
    description: 'HOVERCARD3 - hover card component with smooth hover effects',
    filesrc: require('../registry/components/card/hover-card3.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/card/hover-card3')
    ),
    iframeSrc: 'live-components/hovercard3',
    tags: ['hover', 'card', 'animation', 'interaction', 'design', 'ui'],
  },

  {
    category: DOCS_CATEGORY_KEY['hover-cards'],
    componentName: COMPONENT_KEYS.HOVERCARD2,
    href: '/components/hover-cards',
    title: humanize(COMPONENT_KEYS.HOVERCARD2),
    slug: 'hovercard2',
    description: 'HOVERCARD2 - hover card component with smooth hover effects',
    filesrc: require('../registry/components/card/hover-card2.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/card/hover-card2')
    ),
    iframeSrc: 'live-components/hovercard2',
    tags: ['hover', 'card', 'animation', 'interaction', 'design', 'ui'],
  },

  {
    category: DOCS_CATEGORY_KEY['hover-cards'],
    componentName: COMPONENT_KEYS.HOVERCARD1,
    href: '/components/hover-cards',
    title: humanize(COMPONENT_KEYS.HOVERCARD1),
    slug: 'hovercard1',
    description: 'HOVERCARD1 - hover card component with smooth hover effects',
    filesrc: require('../registry/components/card/hover-card1.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/card/hover-card1')
    ),
    iframeSrc: 'live-components/hovercard1',
    tags: ['hover', 'card', 'animation', 'interaction', 'design', 'ui'],
  },

  {
    category: DOCS_CATEGORY_KEY['hover-cards'],
    componentName: COMPONENT_KEYS.CREATIVE_HOVER_CARD,
    href: '/components/hover-cards',
    title: humanize(COMPONENT_KEYS.CREATIVE_HOVER_CARD),
    slug: 'creative-hover-card',
    description:
      'CREATIVE HOVER CARD - hover card component with smooth hover effects',
    filesrc: require('../registry/components/card/creative-hover-card.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/card/creative-hover-card')
    ),
    iframeSrc: 'live-components/creative-hover-card',
    tags: ['card', 'ui', 'design', 'interaction', 'hover', 'style'],
  },

  {
    category: DOCS_CATEGORY_KEY['product-cards'],
    componentName: COMPONENT_KEYS.PRODUCTCARD1,
    href: '/components/product-cards',
    title: humanize(COMPONENT_KEYS.PRODUCTCARD1),
    slug: 'productcard1',
    description: 'PRODUCTCARD1 - product card component',
    filesrc: require('../registry/components/card/product-card1.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/card/product-card1')
    ),
    iframeSrc: 'live-components/productcard1',
    tags: ['product', 'card', 'ui', 'design', 'ecommerce', 'style'],
  },

  {
    category: DOCS_CATEGORY_KEY['product-cards'],
    componentName: COMPONENT_KEYS.PRODUCTCARD2,
    href: '/components/product-cards',
    title: humanize(COMPONENT_KEYS.PRODUCTCARD2),
    slug: 'productcard2',
    description: 'PRODUCTCARD2 - product card component',
    filesrc: require('../registry/components/card/product-card2.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/card/product-card2')
    ),
    iframeSrc: 'live-components/productcard2',
    tags: ['product', 'card', 'ui', 'design', 'ecommerce', 'style'],
  },

  {
    category: DOCS_CATEGORY_KEY['product-cards'],
    componentName: COMPONENT_KEYS.PRODUCTCARD3,
    href: '/components/product-cards',
    title: humanize(COMPONENT_KEYS.PRODUCTCARD3),
    slug: 'productcard3',
    description: 'PRODUCTCARD3 - product card component',
    filesrc: require('../registry/components/card/product-card3.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/card/product-card3')
    ),
    iframeSrc: 'live-components/productcard3',
    tags: ['product', 'card', 'ui', 'design', 'ecommerce', 'style'],
  },

  {
    category: DOCS_CATEGORY_KEY['product-cards'],
    componentName: COMPONENT_KEYS.PRODUCTCARD4,
    href: '/components/product-cards',
    title: humanize(COMPONENT_KEYS.PRODUCTCARD4),
    slug: 'productcard4',
    description: 'PRODUCTCARD4 - product card component',
    filesrc: require('../registry/components/card/product-card4.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/card/product-card4')
    ),
    iframeSrc: 'live-components/productcard4',
    tags: ['product', 'card', 'ui', 'design', 'ecommerce', 'style'],
  },

  {
    category: DOCS_CATEGORY_KEY['product-cards'],
    componentName: COMPONENT_KEYS.PRODUCTCARD5,
    href: '/components/product-cards',
    title: humanize(COMPONENT_KEYS.PRODUCTCARD5),
    slug: 'productcard5',
    description: 'PRODUCTCARD5 - product card component',
    filesrc: require('../registry/components/card/product-card5.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/card/product-card5')
    ),
    iframeSrc: 'live-components/productcard5',
    tags: ['product', 'card', 'ui', 'design', 'ecommerce', 'style'],
  },

  {
    category: DOCS_CATEGORY_KEY['product-cards'],
    componentName: COMPONENT_KEYS.PRODUCTCARD6,
    href: '/components/product-cards',
    title: humanize(COMPONENT_KEYS.PRODUCTCARD6),
    slug: 'productcard6',
    description: 'PRODUCTCARD6 - product card component',
    filesrc: require('../registry/components/card/product-card6.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/card/product-card6')
    ),
    iframeSrc: 'live-components/productcard6',
    tags: ['product', 'card', 'ui', 'design', 'ecommerce', 'style'],
  },

  {
    category: DOCS_CATEGORY_KEY['spotlight-cards'],
    componentName: COMPONENT_KEYS.SPOTLIGHT_CARD1,
    href: '/components/spotlight-cards',
    title: humanize(COMPONENT_KEYS.SPOTLIGHT_CARD1),
    slug: 'spotlight-card1',
    description: 'SPOTLIGHT CARD1 - spotlight card component',
    filesrc: require('../registry/components/spotlight-cards/spotlight-card1.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/spotlight-cards/spotlight-card1')
    ),
    iframeSrc: 'live-components/spotlight-card1',
    tags: ['spotlight', 'card', 'ui', 'design', 'highlight', 'feature'],
  },

  {
    category: DOCS_CATEGORY_KEY['spotlight-cards'],
    componentName: COMPONENT_KEYS.SPOTLIGHT_CARD2,
    href: '/components/spotlight-cards',
    title: humanize(COMPONENT_KEYS.SPOTLIGHT_CARD2),
    slug: 'spotlight-card2',
    description: 'SPOTLIGHT CARD2 - spotlight card component',
    filesrc: require('../registry/components/spotlight-cards/spotlight-card2.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/spotlight-cards/spotlight-card2')
    ),
    iframeSrc: 'live-components/spotlight-card2',
    tags: ['spotlight', 'card', 'ui', 'design', 'highlight', 'feature'],
  },

  {
    category: DOCS_CATEGORY_KEY['spotlight-cards'],
    componentName: COMPONENT_KEYS.SPOTLIGHT_CARD3,
    href: '/components/spotlight-cards',
    title: humanize(COMPONENT_KEYS.SPOTLIGHT_CARD3),
    slug: 'spotlight-card3',
    description: 'SPOTLIGHT CARD3 - spotlight card component',
    filesrc: require('../registry/components/spotlight-cards/spotlight-card3.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/spotlight-cards/spotlight-card3')
    ),
    iframeSrc: 'live-components/spotlight-card3',
    tags: ['spotlight', 'card', 'ui', 'design', 'highlight', 'feature'],
  },

  {
    category: DOCS_CATEGORY_KEY['spotlight-cards'],
    componentName: COMPONENT_KEYS.SPOTLIGHT_CARD4,
    href: '/components/spotlight-cards',
    title: humanize(COMPONENT_KEYS.SPOTLIGHT_CARD4),
    slug: 'spotlight-card4',
    description: 'SPOTLIGHT CARD4 - spotlight card component',
    filesrc: require('../registry/components/spotlight-cards/spotlight-card4.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/spotlight-cards/spotlight-card4')
    ),
    iframeSrc: 'live-components/spotlight-card4',
    tags: ['spotlight', 'card', 'ui', 'design', 'highlight', 'feature'],
  },

  {
    category: DOCS_CATEGORY_KEY['tabs'],
    componentName: COMPONENT_KEYS.MAINTABS,
    href: '/components/tabs',
    title: humanize(COMPONENT_KEYS.MAINTABS),
    slug: 'maintabs',
    description: 'MAINTABS - tabs component',
    filesrc: require('../registry/components/tabs/preview-tab.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/tabs/preview-tab')
    ),
    iframeSrc: 'live-components/maintabs',
    tags: ['tabs', 'ui', 'navigation', 'component', 'design'],
  },

  {
    category: DOCS_CATEGORY_KEY['tabs'],
    componentName: COMPONENT_KEYS.CREATIVE_TAB,
    href: '/components/tabs',
    title: humanize(COMPONENT_KEYS.CREATIVE_TAB),
    slug: 'creative-tab',
    description: 'CREATIVE TAB - tabs component with creative design',
    filesrc: require('../registry/components/tabs/home-tab.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/tabs/home-tab')
    ),
    iframeSrc: 'live-components/creative-tab',
    tags: ['tabs', 'ui', 'navigation', 'component', 'design', 'creative'],
  },

  {
    category: DOCS_CATEGORY_KEY['tabs'],
    componentName: COMPONENT_KEYS.REGISTER_TAB,
    href: '/components/tabs',
    title: humanize(COMPONENT_KEYS.REGISTER_TAB),
    slug: 'register-tab',
    description: 'REGISTER TAB - tabs component',
    filesrc: require('../registry/components/tabs/register-tab.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/tabs/register-tab')
    ),
    iframeSrc: 'live-components/register-tab',
    tags: ['tabs', 'ui', 'navigation', 'form', 'registration', 'design'],
  },

  {
    category: DOCS_CATEGORY_KEY['magnified-doc'],
    componentName: COMPONENT_KEYS.MAGNIFIED_TAB,
    href: '/components/magnified-doc',
    title: humanize(COMPONENT_KEYS.MAGNIFIED_TAB),
    slug: 'magnified-tab',
    description: 'MAGNIFIED TAB component',
    filesrc: require('../registry/components/tabs/magnified-tabs.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/tabs/magnified-tabs')
    ),
    iframeSrc: 'live-components/magnified-tab',
    tags: ['tabs', 'ui', 'magnified', 'document', 'design'],
  },

  {
    category: DOCS_CATEGORY_KEY['image-tabs'],
    componentName: COMPONENT_KEYS.IMAGE_TAB1,
    href: '/components/image-tabs',
    title: humanize(COMPONENT_KEYS.IMAGE_TAB1),
    slug: 'image-tab1',
    description: 'IMAGE TAB1 component',
    filesrc: require('../registry/components/tabs/img-tabs1.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/tabs/img-tabs1')
    ),
    iframeSrc: 'live-components/image-tab1',
    tags: ['tabs', 'image', 'ui', 'gallery', 'design'],
  },

  {
    category: DOCS_CATEGORY_KEY['image-tabs'],
    componentName: COMPONENT_KEYS.IMAGE_TAB2,
    href: '/components/image-tabs',
    title: humanize(COMPONENT_KEYS.IMAGE_TAB2),
    slug: 'image-tab2',
    description: 'IMAGE TAB2 component',
    filesrc: require('../registry/components/tabs/img-tabs2.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/tabs/img-tabs2')
    ),
    iframeSrc: 'live-components/image-tab2',
    tags: ['tabs', 'image', 'ui', 'gallery', 'design'],
  },

  {
    category: DOCS_CATEGORY_KEY['image-tabs'],
    componentName: COMPONENT_KEYS.IMAGE_TAB_STANDALONE,
    href: '/components/image-tabs',
    title: humanize(COMPONENT_KEYS.IMAGE_TAB_STANDALONE),
    slug: 'image-tab-standalone',
    description: 'IMAGE TAB STANDALONE component',
    filesrc: require('../registry/components/tabs/img-tabs-standalone.tsx?raw'),
    componentSrc: React.lazy(
      () => import('@/registry/components/tabs/img-tabs-standalone')
    ),
    iframeSrc: 'live-components/image-tab-standalone',
    tags: ['tabs', 'image', 'ui', 'gallery', 'design'],
  },
];

export const ComponentMetaByCategory = AllComponents.reduce((map, m) => {
  const list = map.get(m.category) ?? [];
  list.push(m);
  map.set(m.category, list);
  return map;
}, new Map<string, ComponentMeta[]>());
