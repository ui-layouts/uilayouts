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
    new: true,
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
      'blur',
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
      'shadow',
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
    group: DOCS_CATEGORY_GROUP.AnimationMotion,
    new: false,
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
      'Image Mouse Trail Without Componnents',
    ],
  },
  {
    href: '/components/image-reveal',
    name: 'Image Reveal',
    key: DOCS_CATEGORY_KEY['image-reveal'],
    new: false,
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
    tags: ['drawer', 'responsive drawer', 'navigation', 'responsive', 'menu'],
  },

  {
    href: '/components/directional-drawer',
    name: 'Directional Drawer',
    key: DOCS_CATEGORY_KEY['directional-drawer'],
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

export interface IAllComponents {
  category: DocsCategoryKey;
  componentName: string;
  componentSrc?: React.LazyExoticComponent<React.ComponentType<any>>;
  iframeSrc?: string;
  tags?: string[];
  iframe?: boolean;
  center?: boolean;
  href?: string;
  iframelink?: string;
  filesrc?: string;
  filesArray?: DocsFileRef[];
}

export const AllComponents: IAllComponents[] = [
  {
    category: DOCS_CATEGORY_KEY['liquid-glass'],
    componentName: COMPONENT_KEYS.LIQUID_GLASS_SIDEBAR_MENU,
    filesrc: 'components/liquid-glass/sidebar-menu.tsx',
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
    componentName: COMPONENT_KEYS.LIQUID_GLASS_MOBILE_ICONS,
    filesrc: 'components/liquid-glass/mobile-icons-liquid.tsx',
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
    componentName: COMPONENT_KEYS.LIQUID_GLASS_WEATHER,
    filesrc: 'components/liquid-glass/weather-liquid.tsx',
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
    componentName: COMPONENT_KEYS.LIQUID_GLASS_NOTIFICATION,
    filesrc: 'components/liquid-glass/notification.tsx',
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
    filesrc: 'components/color-picker/index.tsx',
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
    filesrc: 'components/color-picker/raws-color-picker.tsx',
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
    filesrc: 'components/swapy/default-swapy.tsx',
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
    filesrc: 'components/swapy/swapy-opacity.tsx',
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
    filesrc: 'components/swapy/swapy-without-components.tsx',
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
    filesrc: 'components/swapy/swapy-handle.tsx',
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
    iframelink: COMPONENT_KEYS.R3F_BLOB,
    tags: ['r3f-blob', 'threejs r3f blob', 'React3 Fiber r3f blob'],
  },
  {
    category: DOCS_CATEGORY_KEY['mesh-gradients'],
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
    componentName: COMPONENT_KEYS.CARD_GLOBE,
    iframelink: 'card-globe',
    tags: ['3D Globe', '3D Globe Card'],
  },
  {
    category: DOCS_CATEGORY_KEY['globe'],
    componentName: COMPONENT_KEYS.CARD_GLOBE2,
    iframelink: 'card-globe2',
    tags: ['White 3D Globe', 'White 3D Globe Card'],
  },
  {
    category: DOCS_CATEGORY_KEY['horizontal-scroll'],
    componentName: COMPONENT_KEYS.HORIZONTALSCROLL,
    iframelink: 'horizontal-scrolling-section',
    tags: ['White 3D Globe', 'White 3D Globe Card'],
  },
  {
    category: DOCS_CATEGORY_KEY['stacking-card'],
    componentName: COMPONENT_KEYS.STACKING_CARD,
    iframelink: 'stacking-card',
    tags: ['Card Stack', 'Interactive Cards'],
  },
  {
    category: DOCS_CATEGORY_KEY['stacking-card'],
    componentName: COMPONENT_KEYS.CSS_CARD_STACKING,
    iframelink: 'css-stacking-details-card',
    tags: ['CSS Stacking', 'Details Card'],
  },
  {
    category: DOCS_CATEGORY_KEY['stacking-card'],
    componentName: COMPONENT_KEYS.CSS_IMAGE_STACKING,
    iframelink: 'css-stacking-card',
    tags: ['CSS Image Stack', 'Stacking Card'],
  },
  {
    category: DOCS_CATEGORY_KEY['smooth-scroll'],
    componentName: COMPONENT_KEYS.SMOOTH_SCROLL,
    iframelink: 'smooth-scroll',
    tags: ['Smooth Scrolling', 'Lenis Smooth Scroll', 'Scroll Animation'],
  },
  {
    category: DOCS_CATEGORY_KEY['sticky-scroll'],
    componentName: COMPONENT_KEYS.STICKY_SCROLL_SECTION,
    iframelink: 'sticky-scroll-section',
    tags: ['Sticky Scroll', 'Section'],
  },
  {
    category: DOCS_CATEGORY_KEY['sticky-scroll'],
    componentName: COMPONENT_KEYS.STICKY_GALLERY,
    iframelink: 'sticky-gallery',
    tags: ['Sticky Gallery', 'Gallery Scroll'],
  },
  {
    category: DOCS_CATEGORY_KEY['sticky-scroll'],
    componentName: COMPONENT_KEYS.STICKY_HERO_SECTION,
    iframelink: 'sticky-hero-section',
    tags: ['Sticky Hero', 'Hero Section'],
  },
  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_GLOBE,
    iframelink: 'sparkles-globe',
    tags: ['Sparkles', '3D Globe Sparkles', 'Globe Hero Section'],
  },
  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_SECTION,
    iframelink: 'sparkles-section',
    tags: ['Sparkles', 'Sparkles Section'],
  },
  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_BRANDING,
    iframelink: 'sparkles-branding',
    tags: ['Sparkles', 'Sparkles Branding'],
  },
  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_TITLE,
    iframelink: 'sparkles-title',
    tags: ['Sparkles', 'Sparkles Title'],
  },
  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_TITLE2,
    iframelink: 'sparkles-title2',
    tags: ['Sparkles', 'Sparkles Title'],
  },
  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_TITLE3,
    iframelink: 'sparkles-title3',
    tags: ['Sparkles', 'Sparkles Title'],
  },
  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_TITLE4,
    iframelink: 'sparkles-title4',
    tags: ['Sparkles', 'Sparkles Title'],
  },
  {
    category: DOCS_CATEGORY_KEY['phone-input'],
    componentName: COMPONENT_KEYS.PHONE_INPUT,
    filesrc: 'components/form/phone-number/index.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/form/phone-number')
    ),
    iframeSrc: 'live-components/phone-input',
    tags: ['phone-input', 'Phone Input', 'Input'],
  },
  {
    category: DOCS_CATEGORY_KEY['buy-me-coffee'],
    componentName: COMPONENT_KEYS.BUYME_ACOFFEE,
    filesrc: 'components/buy-me-coffee.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/buy-me-coffee')
    ),
    iframeSrc: 'live-components/buyme-acoffee',
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
    filesrc: 'components/form/file-upload/chat-form.tsx',
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
    filesrc: 'components/form/file-upload/img-preview.tsx',
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
    componentName: COMPONENT_KEYS.FILE_UPLOAD,
    filesrc: 'components/form/file-upload/index.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/form/file-upload')
    ),
    iframeSrc: 'live-components/file-upload',
    tags: ['DropZone input', 'File Upload Input ', 'file-upload'],
  },
  {
    category: DOCS_CATEGORY_KEY['multi-selector'],
    componentName: COMPONENT_KEYS.MULTI_SELECTOR,
    filesrc: 'components/form/multiple-selector.tsx',
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
        filesrc: 'registry/components/form/multiple-selector.tsx',
      },
      {
        name: 'popover.tsx',
        filesrc: 'components/website/ui/popover.tsx',
      },
      {
        name: 'command.tsx',
        filesrc: 'components/website/ui/command.tsx',
      },
      {
        name: 'button.tsx',
        filesrc: 'components/website/ui/button.tsx',
      },
    ],
  },
  {
    category: DOCS_CATEGORY_KEY['tags-input'],
    componentName: COMPONENT_KEYS.TAGSEDIT_FALSE,
    filesrc: 'components/form/tags-input/tagsedit-false.tsx',
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
    filesrc: 'components/form/tags-input/index.tsx',
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
    filesrc: 'components/form/datetime-picker/time-picker.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/form/datetime-picker/time-picker')
    ),
    iframeSrc: 'live-components/time-picker',
    tags: ['time picker', 'time-picker', 'Time Picker'],
  },

  {
    category: DOCS_CATEGORY_KEY['datetime-picker'],
    componentName: COMPONENT_KEYS.DATE_PICKER,
    filesrc: 'components/form/datetime-picker/date-picker.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/form/datetime-picker/date-picker')
    ),
    iframeSrc: 'live-components/date-picker',
    tags: ['date picker', 'date-picker', 'Date Picker'],
  },
  {
    category: DOCS_CATEGORY_KEY['datetime-picker'],
    componentName: COMPONENT_KEYS.DATETIME_PICKER,
    filesrc: 'components/form/datetime-picker/index.tsx',
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
    filesrc: 'components/number-flow/motion-number-slider.tsx',
    tags: [
      'input slider',
      'Default range slider',
      'default-Range-Slider',
      'animated motion number slider',
      'motion input slider',
    ],
    componentSrc: React.lazy(
      () => import('@/registry/components/number-flow/motion-number-slider')
    ),
    iframeSrc: 'live-components/motion-number-slider',
  },
  {
    category: DOCS_CATEGORY_KEY['range-slider'],
    componentName: COMPONENT_KEYS.DUAL_RANGE_SLIDER,
    filesrc: 'components/form/slider/dual-range-slider.tsx',
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
    filesrc: 'components/form/slider/static-range-slider.tsx',
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
    filesrc: 'components/form/slider/position-range-slider.tsx',
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
    filesrc: 'components/form/password/showhide-pass.tsx',
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
    filesrc: 'components/form/password/pass-strength-indicator.tsx',
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
    componentName: COMPONENT_KEYS.PASS_STRENGTHINDICATOR2,
    filesrc: 'components/form/password/pass-strength-indicator2.tsx',
    componentSrc: React.lazy(
      () =>
        import('@/registry/components/form/password/pass-strength-indicator2')
    ),
    iframeSrc: 'live-components/pass-strengthindicator2',
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
    componentName: COMPONENT_KEYS.PASS_STRENGTHINDICATOR3,
    filesrc: 'components/form/password/pass-strength-indicator3.tsx',
    componentSrc: React.lazy(
      () =>
        import('@/registry/components/form/password/pass-strength-indicator3')
    ),
    iframeSrc: 'live-components/pass-strengthindicator3',
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
        filesrc:
          'registry/components/form/password/pass-strength-indicator3.tsx',
      },
      {
        name: 'hover-card.tsx',
        filesrc: 'components/website/ui/hover-card.tsx',
      },
    ],
  },
  {
    category: DOCS_CATEGORY_KEY['password'],
    componentName: COMPONENT_KEYS.PASS_STRENGTHINDICATOR4,
    filesrc: 'components/form/password/pass-strength-indicator4.tsx',
    componentSrc: React.lazy(
      () =>
        import('@/registry/components/form/password/pass-strength-indicator4')
    ),
    iframeSrc: 'live-components/pass-strengthindicator4',
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
        filesrc:
          'registry/components/form/password/pass-strength-indicator4.tsx',
      },
      {
        name: 'hover-card.tsx',
        filesrc: 'components/website/ui/hover-card.tsx',
      },
    ],
  },
  {
    category: DOCS_CATEGORY_KEY['password'],
    componentName: COMPONENT_KEYS.CONFIRM_PASS_CHECK,
    filesrc: 'components/form/password/confirm-pass-check.tsx',
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
        filesrc: 'registry/components/form/password/confirm-pass-check.tsx',
      },
      {
        name: 'hover-card.tsx',
        filesrc: 'components/website/ui/hover-card.tsx',
      },
    ],
  },
  {
    category: DOCS_CATEGORY_KEY['drag-items'],
    componentName: COMPONENT_KEYS.DRAG_ITEMS,
    filesrc: 'components/drag/drag-items.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/drag/drag-items')
    ),
    iframeSrc: 'live-components/drag-items',
    tags: ['drag', 'draggable', 'items', 'sortable', 'list'],
  },

  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_BACKGROUND_SHINE,
    filesrc: 'components/button/btn-bg-shine.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-bg-shine')
    ),
    iframeSrc: 'live-components/button-background-shine',
    center: true,
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_BACKGROUND_SPOTLIGHT,
    filesrc: 'components/button/btn-animated-gradient.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-animated-gradient')
    ),
    iframeSrc: 'live-components/button-background-spotlight',
    center: true,
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_ACTIVE,
    filesrc: 'components/button/btn-active.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-active')
    ),
    iframeSrc: 'live-components/button-hover-active',
    center: true,
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_2,
    filesrc: 'components/button/btn-hover-right.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-hover-right')
    ),
    iframeSrc: 'live-components/button-hover-2',
    center: true,
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_3,
    filesrc: 'components/button/btn-click-down.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-click-down')
    ),
    iframeSrc: 'live-components/button-hover-3',
    center: true,
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_4,
    filesrc: 'components/button/btn-hover-down.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-hover-down')
    ),
    iframeSrc: 'live-components/button-hover-4',
    center: true,
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_5,
    filesrc: 'components/button/btn-hover-multiple.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-hover-multiple')
    ),
    iframeSrc: 'live-components/button-hover-5',
    center: true,
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_6,
    filesrc: 'components/button/btn-hover-underline.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-hover-underline')
    ),
    iframeSrc: 'live-components/button-hover-6',
    center: true,
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_7,
    filesrc: 'components/button/btn-hover-top-flip.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-hover-top-flip')
    ),
    iframeSrc: 'live-components/button-hover-7',
    center: true,
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_8,
    filesrc: 'components/button/btn-hover-left-flip.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-hover-left-flip')
    ),
    center: true,
    iframeSrc: 'live-components/button-hover-8',
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_9,
    filesrc: 'components/button/btn-hover-top-slowflip.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-hover-top-slowflip')
    ),
    center: true,
    iframeSrc: 'live-components/button-hover-9',
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_10,
    filesrc: 'components/button/btn-text-change.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-text-change')
    ),
    center: true,
    iframeSrc: 'live-components/button-hover-10',
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_11,
    filesrc: 'components/button/btn-cross-arrow.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-cross-arrow')
    ),
    center: true,
    iframeSrc: 'live-components/button-hover-11',
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_12,
    filesrc: 'components/button/btn-black-shadow.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-black-shadow')
    ),
    center: true,
    iframeSrc: 'live-components/btn-hover12',
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_13,
    filesrc: 'components/button/btn-hover-outline.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-hover-outline')
    ),
    center: true,
    iframeSrc: 'live-components/button-hover-13',
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_HOVER_14,
    filesrc: 'components/button/btn-hover14.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-hover14')
    ),
    center: true,
    iframeSrc: 'live-components/button-hover-14',
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.BUTTON_ROTATING_GRADIENT,
    filesrc: 'components/button/btn-rotating-gradient.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-rotating-gradient')
    ),
    center: true,
    iframeSrc: 'live-components/btn-rotating-bgGradient',
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.CREATIVE_BUTTON_1,
    filesrc: 'components/button/btn-creative-right.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-creative-right')
    ),
    center: true,
    iframeSrc: 'live-components/creative-button-1',
  },
  {
    category: DOCS_CATEGORY_KEY['buttons'],
    componentName: COMPONENT_KEYS.CREATIVE_BUTTON_2,
    filesrc: 'components/button/btn-creative-top.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/button/btn-creative-top')
    ),
    center: true,
    iframeSrc: 'live-components/creative-button-2',
  },
  {
    category: DOCS_CATEGORY_KEY['footers'],
    componentName: COMPONENT_KEYS.ANIMATED_LOGO_FOOTER,
    filesrc: 'components/footers/animated-logo-footer.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/footers/animated-logo-footer')
    ),
    iframeSrc: 'live-components/animated-logo-footer',
    tags: ['footer', 'animation', 'logo', 'branding', 'animated'],
  },
  {
    category: DOCS_CATEGORY_KEY['footers'],
    componentName: COMPONENT_KEYS.HOVER_FOOTER,
    filesrc: 'components/footers/hover-footer.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/footers/hover-footer')
    ),
    iframeSrc: 'live-components/hover-footer',
    tags: ['footer', 'hover', 'interactive', 'branding'],
    filesArray: [
      {
        name: 'index.tsx',
        filesrc: 'registry/components/footers/hover-footer.tsx',
      },
      {
        name: 'cursor-follow-text.tsx',
        filesrc: 'components/ui/cursor-follow-text.tsx',
      },
    ],
  },
  {
    category: DOCS_CATEGORY_KEY['noise'],
    componentName: COMPONENT_KEYS.NOISE_EFFECT,
    filesrc: 'components/noise-effect/section-noise.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/noise-effect/section-noise')
    ),
    iframeSrc: 'live-components/noise-effect',
    tags: ['noise', 'effect', 'visual', 'distortion', 'shader'],
  },
  {
    category: DOCS_CATEGORY_KEY['accordion'],
    componentName: COMPONENT_KEYS.GRID_LAYOUT_ACCORDION,
    filesrc: 'components/accordion/gridlayout.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/accordion/gridlayout')
    ),
    iframeSrc: 'live-components/grid-layout-accordion',
    tags: ['accordion', 'grid', 'layout', 'expandable', 'collapsible'],
  },
  {
    category: DOCS_CATEGORY_KEY['accordion'],
    componentName: COMPONENT_KEYS.SINGLE_LAYOUT_ACCORDION,
    filesrc: 'components/accordion/singlelayout.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/accordion/singlelayout')
    ),
    iframeSrc: 'live-components/single-layout-accordion',
    tags: ['accordion', 'layout', 'single', 'expandable', 'collapsible'],
  },
  {
    category: DOCS_CATEGORY_KEY['accordion'],
    componentName: COMPONENT_KEYS.MULTI_LAYOUT_ACCORDION,
    filesrc: 'components/accordion/multilayout.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/accordion/multilayout')
    ),
    iframeSrc: 'live-components/multi-layout-accordion',
    tags: ['accordion', 'layout', 'multi', 'expandable', 'collapsible'],
  },
  {
    category: DOCS_CATEGORY_KEY['faqs'],
    componentName: COMPONENT_KEYS.FAQ_ACCORDION,
    filesrc: 'components/accordion/faq.tsx',
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
    filesrc: 'components/accordion/image-hover.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/accordion/image-hover')
    ),
    iframeSrc: 'live-components/image-hover-accordion',
    tags: ['accordion', 'image', 'hover', 'interactive', 'expandable'],
  },
  {
    category: DOCS_CATEGORY_KEY['image-accordions'],
    componentName: COMPONENT_KEYS.TAILWIND_IMAGE_ACCORDION,
    filesrc: 'components/accordion/tailwind-image-accordion.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/accordion/tailwind-image-accordion')
    ),
    iframeSrc: 'live-components/tailwind-image-accordion',
    tags: ['accordion', 'image', 'tailwind', 'responsive', 'expandable'],
  },
  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.DEFAULT_SLIDER,
    filesrc: 'components/carousel/default-slider.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/default-slider')
    ),
    iframeSrc: 'live-components/default-slider',
    tags: ['carousel', 'default', 'slider', 'basic-slider', 'embla-carousel'],
  },
  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.ALIGN_SLIDER,
    filesrc: 'components/carousel/align-slider.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/align-slider')
    ),
    iframeSrc: 'live-components/align-slider',
    tags: ['carousel', 'align', 'centered', 'alignment-slider'],
  },
  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.CLASSNAME_SLIDER,
    filesrc: 'components/carousel/classname-slider.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/classname-slider')
    ),
    iframeSrc: 'live-components/classname-slider',
    tags: ['carousel', 'classname', 'custom-slider', 'themed-slider'],
  },
  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.NUMBER_SLIDER,
    filesrc: 'components/carousel/number-slider.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/number-slider')
    ),
    iframeSrc: 'live-components/number-slider',
    tags: ['carousel', 'number', 'numeric-slider', 'counter-slider'],
  },
  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.SCALE_SLIDER,
    filesrc: 'components/carousel/scale-slider.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/scale-slider')
    ),
    iframeSrc: 'live-components/scale-slider',
    tags: ['carousel', 'scale', 'zoom-slider', 'scalable-carousel'],
  },
  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.THUMBNAIL_SLIDER,
    filesrc: 'components/carousel/thumnail-slider.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/thumnail-slider')
    ),
    iframeSrc: 'live-components/thumbnail-slider',
    tags: ['carousel', 'thumbnail', 'preview-slider', 'image-carousel'],
  },
  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.VERTICAL_SLIDER,
    filesrc: 'components/carousel/vertical-slider.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/vertical-slider')
    ),
    iframeSrc: 'live-components/vertical-slider',
    tags: ['carousel', 'vertical', 'preview-slider', 'image-carousel'],
  },
  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.VERTICAL_THUMBNAIL_SLIDER,
    filesrc: 'components/carousel/verticalthumbs-slider.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/verticalthumbs-slider')
    ),
    iframeSrc: 'live-components/verticalthumbs-slider',
    tags: ['carousel', 'vertical', 'preview-slider', 'image-carousel'],
  },
  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.VERTICAL_THUMBNAIL_AUTOSTART_SLIDER,
    filesrc: 'components/carousel/verticalthumbs-autostart-slider.tsx',
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
    filesrc: 'components/carousel/autoscroll-slider.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/autoscroll-slider')
    ),
    iframeSrc: 'live-components/autoscroll-slider',
    tags: ['carousel', 'autoscroller', 'auto-slider', 'autoplay-carousel'],
  },
  {
    category: DOCS_CATEGORY_KEY['carousel'],
    componentName: COMPONENT_KEYS.AUTOSTART_SLIDER,
    filesrc: 'components/carousel/autostart-slider.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/autostart-slider')
    ),
    iframeSrc: 'live-components/autostart-slider',
    tags: ['carousel', 'autostart', 'auto-slider', 'autoplay-carousel'],
  },
  {
    category: DOCS_CATEGORY_KEY['progressive-carousel'],
    componentName: COMPONENT_KEYS.HORIZONTAL_PROGRESSIVE_CAROUSEL,
    filesrc: 'components/carousel/horizontal-progressive.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/horizontal-progressive')
    ),
    iframeSrc: 'live-components/horizontal-progressive-carousel',
    tags: ['carousel', 'horizontal', 'progressive-carousel', 'scroll-carousel'],
  },
  {
    category: DOCS_CATEGORY_KEY['progressive-carousel'],
    componentName: COMPONENT_KEYS.VERTICAL_PROGRESSIVE_CAROUSEL,
    filesrc: 'components/carousel/verticle-progressive.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/verticle-progressive')
    ),
    iframeSrc: 'live-components/vertical-progressive-carousel',
    tags: ['carousel', 'vertical', 'progressive-carousel', 'vertical-scroll'],
  },
  {
    category: DOCS_CATEGORY_KEY['framer-carousel'],
    componentName: COMPONENT_KEYS.FRAMER_DRAG_SLIDING_CAROUSEL,
    filesrc: 'components/carousel/framer/framer-drag-sliding-carousel.tsx',
    componentSrc: React.lazy(
      () =>
        import(
          '@/registry/components/carousel/framer/framer-drag-sliding-carousel'
        )
    ),
    iframeSrc: 'live-components/framer-drag-sliding-carousel',
    tags: ['carousel', 'motion/react', 'animated-carousel', 'carousel-2'],
  },
  {
    category: DOCS_CATEGORY_KEY['framer-carousel'],
    componentName: COMPONENT_KEYS.FRAMER_CAROUSEL_1,
    filesrc: 'components/carousel/framer-carousel1.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/framer-carousel1')
    ),
    iframeSrc: 'live-components/framer-carousel-1',
    tags: ['carousel', 'motion/react', 'animated-carousel', 'carousel-1'],
  },
  {
    category: DOCS_CATEGORY_KEY['framer-carousel'],
    componentName: COMPONENT_KEYS.FRAMER_NORMAL_CAROUSEL,
    filesrc: 'components/carousel/framer/framer-normal-carousel.tsx',
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
    filesrc: 'components/carousel/framer/framer-autoplay.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/framer/framer-autoplay')
    ),
    iframeSrc: 'live-components/framer-autoplay-carousel',
    tags: ['carousel', 'motion/react', 'animated-carousel', 'carousel-1'],
  },
  {
    category: DOCS_CATEGORY_KEY['framer-carousel'],
    componentName: COMPONENT_KEYS.FRAMER_DRAGGABLE_CAROUSEL,
    filesrc: 'components/carousel/framer/framer-draggable-carousel.tsx',
    componentSrc: React.lazy(
      () =>
        import(
          '@/registry/components/carousel/framer/framer-draggable-carousel'
        )
    ),
    iframeSrc: 'live-components/framer-draggable-carousel',
    tags: ['carousel', 'motion/react', 'animated-carousel', 'carousel-1'],
  },
  {
    category: DOCS_CATEGORY_KEY['framer-carousel'],
    componentName: COMPONENT_KEYS.FRAMER_MULTI_CAROUSEL,
    filesrc: 'components/carousel/framer/framer-multi-carousel.tsx',
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
    filesrc: 'components/carousel/framer/framer-thumnbails.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/carousel/framer/framer-thumnbails')
    ),
    iframeSrc: 'live-components/framer-thumnbails',
    tags: ['carousel', 'motion/react', 'animated-carousel', 'carousel-1'],
  },
  {
    category: DOCS_CATEGORY_KEY['framer-carousel'],
    componentName: COMPONENT_KEYS.FRAMER_MOVEABLE_THUMBNAILS,
    filesrc: 'components/carousel/framer/framer-moveable-thumnbails.tsx',
    componentSrc: React.lazy(
      () =>
        import(
          '@/registry/components/carousel/framer/framer-moveable-thumnbails'
        )
    ),
    iframeSrc: 'live-components/framer-moveable-thumnbails',
    tags: ['carousel', 'motion/react', 'animated-carousel', 'carousel-1'],
  },
  {
    category: DOCS_CATEGORY_KEY['image-reveal'],
    componentName: COMPONENT_KEYS.IMAGE_REVEAL,
    filesrc: 'components/image-reveal/image-reveal.tsx',
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
    filesrc: 'components/image-reveal/index.tsx',
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
    filesrc: 'components/liquid-gradient/index.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/liquid-gradient/index')
    ),
    iframeSrc: 'live-components/liquid-gradient',
    tags: ['liquid-gradient', 'liquid-gradient', 'uilayouts liquid-gradient'],
  },
  {
    category: DOCS_CATEGORY_KEY['uilayouts-github-button'],
    componentName: COMPONENT_KEYS.UILAYOUTS_GITHUB_BUTTON,
    filesrc: 'components/liquid-gradient/github-repo-btn.tsx',
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
    filesrc: 'components/blurvignette/blurvignettevideo.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/blurvignette/blurvignettevideo')
    ),
    iframeSrc: 'live-components/blur-vignette-video',
    tags: [
      'blur',
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
    filesrc: 'components/blurvignette/blurvignetteimg.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/blurvignette/blurvignetteimg')
    ),
    iframeSrc: 'live-components/blur-vignette-img',
    tags: [
      'blur',
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
    filesrc: 'components/blurvignette/blurvignettecard.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/blurvignette/blurvignettecard')
    ),
    iframeSrc: 'live-components/blur-vignette-card',
    tags: [
      'blur',
      'vignette',
      'card',
      'blur-card',
      'overlay',
      'background-effect',
      'shadow',
      'card-design',
    ],
  },
  {
    category: DOCS_CATEGORY_KEY['animated-beam'],
    componentName: COMPONENT_KEYS.ANIMATED_BEAM_DEFAULT,
    filesrc: 'components/animated-beam/default.tsx',
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
    filesrc: 'components/animated-beam/bidirectional.tsx',
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
    filesrc: 'components/animated-beam/unidirectional.tsx',
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
    filesrc: 'components/animated-beam/multiple-input.tsx',
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
    filesrc: 'components/animated-beam/multiple-output.tsx',
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
    filesrc: 'components/bg-blocks/blocksone.tsx',
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
    filesrc: 'components/number-flow/motion-number-input.tsx',
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
      () => import('@/registry/components/number-flow/motion-number-input')
    ),
    iframeSrc: 'live-components/motion-number-input',
  },
  {
    category: DOCS_CATEGORY_KEY['motion-number'],
    componentName: COMPONENT_KEYS.NUMBER_FLOW_TRADING,
    filesrc: 'components/number-flow/number-flow-trading.tsx',
    tags: [
      'animation',
      'number-increment',
      'counter',
      'trading',
      'motion number trading',
      'post-effect',
    ],
    componentSrc: React.lazy(
      () => import('@/registry/components/number-flow/number-flow-trading')
    ),
    iframeSrc: 'live-components/motion-number-trading',
    filesArray: [
      {
        name: 'index.tsx',
        filesrc: 'registry/components/number-flow/number-flow-trading.tsx',
      },
    ],
  },
  {
    category: DOCS_CATEGORY_KEY['motion-number'],
    componentName: COMPONENT_KEYS.MOTION_NUMBER_SLIDER,
    filesrc: 'components/number-flow/motion-number-slider.tsx',
    tags: [
      'animation',
      'shadcn slider',
      'animated slider tag',
      'motion number slider',
      'number-sequence',
    ],
    componentSrc: React.lazy(
      () => import('@/registry/components/number-flow/motion-number-slider')
    ),
    iframeSrc: 'live-components/motion-number-slider',
    filesArray: [
      {
        name: 'index.tsx',
        filesrc: 'registry/components/number-flow/motion-number-slider.tsx',
      },
      {
        name: 'slider.tsx',
        filesrc: 'components/ui/slider.tsx',
      },
    ],
  },
  {
    category: DOCS_CATEGORY_KEY['motion-number'],
    componentName: COMPONENT_KEYS.MOTION_NUMBER_UPVOTES,
    filesrc: 'components/number-flow/motion-number-upvotes.tsx',
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
      () => import('@/registry/components/number-flow/motion-number-upvotes')
    ),
    iframeSrc: 'live-components/motion-number-upvotes',
  },
  {
    category: DOCS_CATEGORY_KEY['image-mousetrail'],
    componentName: COMPONENT_KEYS.IMAGE_MOUSETRAIL_DEFAULT,
    filesrc: 'components/mousetrail/default-mousetrail.tsx',
    tags: ['mouse-trail', 'animation', 'image-effect', 'motion-trail'],
    componentSrc: React.lazy(
      () => import('@/registry/components/mousetrail/default-mousetrail')
    ),
    iframeSrc: 'live-components/image-mousetrail-default',
  },
  {
    category: DOCS_CATEGORY_KEY['image-mousetrail'],
    componentName: COMPONENT_KEYS.IMAGE_MOUSETRAIL_SMALL,
    filesrc: 'components/mousetrail/small-images.tsx',
    tags: ['mouse-trail', 'small-images', 'interactive'],
    componentSrc: React.lazy(
      () => import('@/registry/components/mousetrail/small-images')
    ),
    iframeSrc: 'live-components/image-mousetrail-small',
  },
  {
    category: DOCS_CATEGORY_KEY['image-mousetrail'],
    componentName: COMPONENT_KEYS.IMAGE_MOUSETRAIL_DISAPPEAR,
    filesrc: 'components/mousetrail/disappear-images.tsx',
    tags: ['disappearing-effect', 'interactive-animation', 'mouse-motion'],
    componentSrc: React.lazy(
      () => import('@/registry/components/mousetrail/disappear-images')
    ),
    iframeSrc: 'live-components/image-mousetrail-disappear',
  },
  {
    category: DOCS_CATEGORY_KEY['image-mousetrail'],
    componentName: COMPONENT_KEYS.IMAGE_MOUSETRAIL_WITHOUT_COMPONENT,
    filesrc: 'components/mousetrail/without-component-mousetrail.tsx',
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
    componentName: COMPONENT_KEYS.DIRECTIONAL_DRAWER,
    filesrc: 'components/drawer/directional-drawer.tsx',
    tags: ['sidebar', 'navigation', 'drawer', 'responsive'],
    componentSrc: React.lazy(
      () => import('@/registry/components/drawer/directional-drawer')
    ),
    iframeSrc: 'live-components/directional-drawer',
    iframe: true,
  },
  {
    category: DOCS_CATEGORY_KEY['directional-drawer'],
    componentName: COMPONENT_KEYS.LEFT_DIRECTIONAL_DRAWER,
    filesrc: 'components/drawer/left-directional-drawer.tsx',
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
    filesrc: 'components/drawer/top-directional-drawer.tsx',
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
    filesrc: 'components/drawer/bottom-directional-drawer.tsx',
    tags: ['Left Sidebar', 'navigation', 'Left Drawer', 'Responsive Drawer'],
    componentSrc: React.lazy(
      () => import('@/registry/components/drawer/bottom-directional-drawer')
    ),
    iframeSrc: 'live-components/bottom-directional-drawer',
    iframe: true,
  },
  {
    category: DOCS_CATEGORY_KEY['motion-drawer'],
    componentName: COMPONENT_KEYS.MOTION_DRAWER,
    filesrc: 'components/drawer/motion-drawer.tsx',
    tags: ['Left Sidebar', 'navigation', 'Left Drawer', 'Responsive Drawer'],
    componentSrc: React.lazy(
      () => import('@/registry/components/drawer/motion-drawer')
    ),
    iframeSrc: 'live-components/motion-drawer',
    iframe: true,
  },
  {
    category: DOCS_CATEGORY_KEY['right-motion-drawer'],
    componentName: COMPONENT_KEYS.RIGHT_MOTION_DRAWER,
    filesrc: 'components/drawer/right-motion-drawer.tsx',
    tags: ['Left Sidebar', 'navigation', 'Left Drawer', 'Responsive Drawer'],
    componentSrc: React.lazy(
      () => import('@/registry/components/drawer/right-motion-drawer')
    ),
    iframeSrc: 'live-components/right-motion-drawer',
    iframe: true,
  },
  {
    category: DOCS_CATEGORY_KEY['responsive-header'],
    componentName: COMPONENT_KEYS.RESPONSIVE_HEADER,
    filesrc: 'components/drawer/responsive-header.tsx',
    tags: ['header', 'responsive', 'navigation-bar', 'menu'],
    componentSrc: React.lazy(
      () => import('@/registry/components/drawer/responsive-header')
    ),
    iframeSrc: 'live-components/responsive-header',
    iframe: true,
  },
  {
    category: DOCS_CATEGORY_KEY['responsive-modal'],
    componentName: COMPONENT_KEYS.RESPONSIVE_MODAL,
    filesrc: 'components/modal/responsive-modal.tsx',
    tags: ['modal', 'responsive', 'drawer', 'menu'],
    componentSrc: React.lazy(
      () => import('@/registry/components/modal/responsive-modal')
    ),
    iframe: true,
    iframeSrc: 'live-components/responsive-modal',
  },
  {
    category: DOCS_CATEGORY_KEY['dialog'],
    componentName: COMPONENT_KEYS.DIALOG,
    filesrc: 'components/modal/dialog-default.tsx',
    tags: ['dialog', 'popup', 'modal', 'UI-component'],
    componentSrc: React.lazy(
      () => import('@/registry/components/modal/dialog-default')
    ),
    iframeSrc: 'live-components/dialog',
    iframe: true,
  },
  {
    category: DOCS_CATEGORY_KEY['media-modal'],
    componentName: COMPONENT_KEYS.MEDIA_MODAL,
    filesrc: 'components/modal/media-modal-default.tsx',
    tags: ['media', 'modal', 'popup', 'UI'],
    componentSrc: React.lazy(
      () => import('@/registry/components/modal/media-modal-default')
    ),
    iframeSrc: 'live-components/media-modal',
    iframe: true,
  },
  {
    category: DOCS_CATEGORY_KEY['media-modal'],
    componentName: COMPONENT_KEYS.IMAGEMODALSL,
    filesrc: 'components/modal/image-modals.tsx',
    tags: ['image modal', 'modal', 'popup', 'UI'],
    componentSrc: React.lazy(
      () => import('@/registry/components/modal/image-modals')
    ),
    iframeSrc: 'live-components/imagemodals',
    iframe: true,
  },
  {
    category: DOCS_CATEGORY_KEY['linear-modal'],
    componentName: COMPONENT_KEYS.LINEAR_MODAL,
    filesrc: 'components/linear-modal/index.tsx',
    tags: ['card', 'linear-layout', 'UI-component', 'modal-card'],
    componentSrc: React.lazy(
      () => import('@/registry/components/linear-modal')
    ),
    iframeSrc: 'live-components/linear-modal',
    iframe: false,
  },
  {
    category: DOCS_CATEGORY_KEY['linear-modal'],
    componentName: COMPONENT_KEYS.LINEAR_MODAL_STANDALONE,
    filesrc: 'components/linear-modal/standalone-version.tsx',
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
    filesrc: 'components/linear-modal/center-content.tsx',
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
    filesrc: 'components/modal/gallery-modal/accordion-modal.tsx',
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
    filesrc: 'components/modal/gallery-modal/modal-slider.tsx',
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
    filesrc: 'components/modal/gallery-modal/unsplash-modal.tsx',
    tags: ['gallery', 'unsplash', 'media', 'image-gallery'],
    componentSrc: React.lazy(
      () => import('@/registry/components/modal/gallery-modal/unsplash-modal')
    ),
    iframeSrc: 'live-components/gallery-modal-unsplash',
    iframe: true,
  },
  {
    category: DOCS_CATEGORY_KEY['scroll-animation'],
    componentName: COMPONENT_KEYS.SCROLL_ANIMATION,
    filesrc: 'components/scroll-animation/scroll-element.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/scroll-animation/scroll-element')
    ),
    iframeSrc: 'live-components/scroll-animation',
    tags: ['scroll', 'animation', 'element'],
  },
  {
    category: DOCS_CATEGORY_KEY['scroll-animation'],
    componentName: COMPONENT_KEYS.SCROLL_ANIMATION_REPEAT,
    filesrc: 'components/scroll-animation/repeat-scroll.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/scroll-animation/repeat-scroll')
    ),
    iframeSrc: 'live-components/scroll-animation-repeat',
    tags: ['scroll', 'repeat', 'animation'],
  },
  {
    category: DOCS_CATEGORY_KEY['scroll-animation'],
    componentName: COMPONENT_KEYS.SCROLL_ANIMATION_TEXT,
    filesrc: 'components/scroll-animation/text-scroll.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/scroll-animation/text-scroll')
    ),
    iframeSrc: 'live-components/scroll-animation-text',
    tags: ['text', 'scroll', 'animation'],
  },
  {
    category: DOCS_CATEGORY_KEY['timeline-animation'],
    componentName: COMPONENT_KEYS.TIMELINE_ANIMATION,
    filesrc: 'components/timeline-animation/index.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/timeline-animation')
    ),
    iframeSrc: 'live-components/timeline-animation',
    tags: ['timeline', 'animation', 'scroll'],
  },
  {
    category: DOCS_CATEGORY_KEY['scroll-text'],
    componentName: COMPONENT_KEYS.TEXT_SCROLL_ANIMATION,
    filesrc: 'components/text-animation/scroll-text-animation.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/text-animation/scroll-text-animation')
    ),
    iframeSrc: 'live-components/text-scroll-animation',
    tags: ['scroll', 'text-animation', 'text', 'animation'],
  },
  {
    category: DOCS_CATEGORY_KEY['scroll-text-marquee'],
    componentName: COMPONENT_KEYS.SCROLL_TEXT_MARQUEE,
    filesrc: 'components/text-animation/text-marque/animationone.tsx',
    componentSrc: React.lazy(
      () =>
        import('@/registry/components/text-animation/text-marque/animationone')
    ),
    iframeSrc: 'live-components/scroll-text-marquee',
    tags: ['marquee', 'text', 'animation'],
  },
  {
    category: DOCS_CATEGORY_KEY['scroll-text-marquee'],
    componentName: COMPONENT_KEYS.SCROLL_TEXT_MARQUEE2,
    filesrc: 'components/text-animation/text-marque/animationtwo.tsx',
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
    filesrc: 'components/text-animation/text-randomized/index.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/text-animation/text-randomized')
    ),
    iframeSrc: 'live-components/randomized-text-unveil',
    tags: ['random', 'text', 'effect'],
  },
  {
    category: DOCS_CATEGORY_KEY['horizontal-scroll'],
    componentName: COMPONENT_KEYS.FRAMERHORIZONTALSCROLL,
    filesrc: 'components/scroll-animation/framer-horizontal-scroll.tsx',
    componentSrc: React.lazy(
      () =>
        import(
          '@/registry/components/scroll-animation/framer-horizontal-scroll'
        )
    ),
    iframeSrc: 'live-components/framerhorizontalscroll',

    tags: ['horizontal', 'scroll', 'framer'],
  },
  {
    category: DOCS_CATEGORY_KEY['infinity-brand'],
    componentName: COMPONENT_KEYS.INFINTYBAND,
    filesrc: 'components/marquee/infinity-band-scroll.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/marquee/infinity-band-scroll')
    ),
    iframeSrc: 'live-components/infintyband',
    tags: ['infinity', 'brand', 'marquee'],
  },
  {
    category: DOCS_CATEGORY_KEY['grid'],
    componentName: COMPONENT_KEYS.NORMALGRID,
    filesrc: 'components/grid/normal-grid.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/grid/normal-grid')
    ),
    iframeSrc: 'live-components/normalGrid',
    tags: ['grid', 'Normal Grid', 'normal grid', 'normalgrid'],
  },
  {
    category: DOCS_CATEGORY_KEY['grid'],
    componentName: COMPONENT_KEYS.BOXGRID,
    filesrc: 'components/grid/box-grid.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/grid/box-grid')
    ),
    iframeSrc: 'live-components/boxgrid',
    tags: ['grid', 'box grid', 'Box Grid'],
  },
  {
    category: DOCS_CATEGORY_KEY['grid'],
    componentName: COMPONENT_KEYS.CONDITIONGRID,
    filesrc: 'components/grid/condition-grid.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/grid/condition-grid')
    ),
    iframeSrc: 'live-components/conditionGrid',
    tags: ['grid', 'condition grid', 'Contidion Grid'],
  },
  {
    category: DOCS_CATEGORY_KEY['grid'],
    componentName: COMPONENT_KEYS.UNSPLASHGRID,
    filesrc: 'components/grid/unsplash-grid.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/grid/unsplash-grid')
    ),
    iframeSrc: 'live-components/unsplashGrid',
    tags: ['grid', 'unsplash grid', 'Unsplash Grid'],
  },
  {
    category: DOCS_CATEGORY_KEY['marquee'],
    componentName: COMPONENT_KEYS.DEFAULT_MARQUEE,
    filesrc: 'components/marquee/default-marquee.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/marquee/default-marquee')
    ),
    iframeSrc: 'live-components/default-marquee',
    tags: ['default', 'marquee', 'animation'],
  },
  {
    category: DOCS_CATEGORY_KEY['marquee'],
    componentName: COMPONENT_KEYS.VERTICLE_MARQUEE,
    filesrc: 'components/marquee/verticle-marquee.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/marquee/verticle-marquee')
    ),
    iframeSrc: 'live-components/verticl-emarquee',
    tags: ['vertical', 'marquee', 'animation'],
  },
  {
    category: DOCS_CATEGORY_KEY['marquee'],
    componentName: COMPONENT_KEYS.LOGOS_MARQUEE,
    filesrc: 'components/marquee/verticle-marquee.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/marquee/verticle-marquee')
    ),
    iframeSrc: 'live-components/logos-marquee',
    tags: ['logos', 'marquee', 'animation'],
  },
  {
    category: DOCS_CATEGORY_KEY['marquee'],
    componentName: COMPONENT_KEYS.MARQUEE_3D,
    filesrc: 'components/marquee/3d-marquee.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/marquee/3d-marquee')
    ),
    iframeSrc: 'live-components/3d-marquee',
    tags: ['3d', 'marquee', 'animation'],
  },
  {
    category: DOCS_CATEGORY_KEY['clip-path'],
    componentName: COMPONENT_KEYS.CREATIVE_CLIPPATH,
    filesrc: 'components/clip-path/clip-path-creative.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/clip-path-creative')
    ),
    iframeSrc: 'live-components/creative-clippath',
    tags: ['clip-path', 'creative', 'masking'],
  },
  {
    category: DOCS_CATEGORY_KEY['clip-path'],
    componentName: COMPONENT_KEYS.CORPORATE_CLIPPATH,
    filesrc: 'components/clip-path/clip-path-corporate.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/clip-path-corporate')
    ),
    iframeSrc: 'live-components/corporate-clippath',
    tags: ['clip-path', 'corporate', 'masking'],
  },
  {
    category: DOCS_CATEGORY_KEY['clip-path'],
    componentName: COMPONENT_KEYS.SYMBOLIC_CLIPPATH,
    filesrc: 'components/clip-path/clip-path-symbolic.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/clip-path-symbolic')
    ),
    iframeSrc: 'live-components/symbolic-clippath',
    tags: ['clip-path', 'symbolic', 'masking'],
  },
  {
    category: DOCS_CATEGORY_KEY['clip-path'],
    componentName: COMPONENT_KEYS.CREATIVE_MASK_CLIPPATH,
    filesrc: 'components/clip-path/clip-path-creative-mask.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/clip-path-creative-mask')
    ),
    iframeSrc: 'live-components/creative-mask-clippath',
    tags: ['clip-path', 'creative', 'mask'],
  },
  {
    category: DOCS_CATEGORY_KEY['clip-path'],
    componentName: COMPONENT_KEYS.WATERSPLASH_CLIPPATH,
    filesrc: 'components/clip-path/clip-path-water-splash.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/clip-path-water-splash')
    ),
    iframeSrc: 'live-components/watersplash-clippath',
    tags: ['clip-path ', 'Water Splash Clip-Path', 'creative', 'mask'],
  },
  {
    category: DOCS_CATEGORY_KEY['image-masking'],
    componentName: COMPONENT_KEYS.CREATIVE_IMAGEMASKING,
    filesrc: 'components/clip-path/creative-image-masking.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/creative-image-masking')
    ),
    iframeSrc: 'live-components/creative-imagemasking',
    tags: ['image-masking', 'creative', 'masking'],
  },
  {
    category: DOCS_CATEGORY_KEY['image-masking'],
    componentName: COMPONENT_KEYS.ANIMAL_IMAGEMASKING,
    filesrc: 'components/clip-path/animal-image-masking.tsx',
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
    filesrc: 'components/clip-path/center-image-masking.tsx',
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
    filesrc: 'components/clip-path/fixed-bg-image-masking.tsx',
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
    filesrc: 'components/clip-path/water-splash-image-masking.tsx',
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
    filesrc: 'components/clip-path/creative-video-masking.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/creative-video-masking')
    ),
    iframeSrc: 'live-components/creative-videomasking',
    tags: ['video', 'masking', 'creative'],
  },
  {
    category: DOCS_CATEGORY_KEY['video-masking'],
    componentName: COMPONENT_KEYS.SPLASHWATER_VIDEOMASKING,
    filesrc: 'components/clip-path/splash-water-video-masking.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/splash-water-video-masking')
    ),
    iframeSrc: 'live-components/splashwater-videomasking',
    tags: ['video', 'splash', 'masking'],
  },
  {
    category: DOCS_CATEGORY_KEY['video-masking'],
    componentName: COMPONENT_KEYS.HEXAGON_VIDEOMASKING,
    filesrc: 'components/clip-path/hexagon-video-masking.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/hexagon-video-masking')
    ),
    iframeSrc: 'live-components/hexagon-videomasking',
    tags: ['hexagon video masking', ' hexagon masking', 'creative'],
  },
  {
    category: DOCS_CATEGORY_KEY['video-masking'],
    componentName: COMPONENT_KEYS.HEXAGON2_VIDEOMASKING,
    filesrc: 'components/clip-path/hexagon2-video-masking.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/hexagon2-video-masking')
    ),
    iframeSrc: 'live-components/hexagon2-videomasking',
    tags: ['hexagon video masking2', ' hexagon masking2', 'creative'],
  },
  {
    category: DOCS_CATEGORY_KEY['video-masking'],
    componentName: COMPONENT_KEYS.TEXTOVERLAY_VIDEOMASKING,
    filesrc: 'components/clip-path/text-overlay-video-masking.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/clip-path/text-overlay-video-masking')
    ),
    iframeSrc: 'live-components/textoverlay-videomasking',
    tags: ['text overlay video', 'text-overlay video masking', 'masking'],
  },
  {
    category: DOCS_CATEGORY_KEY['gradient-border'],
    componentName: COMPONENT_KEYS.GRADIENT_BORDER,
    filesrc: 'components/card/gradient-border.tsx',
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
    filesrc: 'components/card/stripe-card.tsx',
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
    filesrc: 'components/card/stripe-card2.tsx',
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
    filesrc: 'components/card/hover-card4.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/card/hover-card4')
    ),
    iframeSrc: 'live-components/hovercard4',
    tags: ['hover', 'card', 'animation', 'interaction', 'design', 'ui'],
  },
  {
    category: DOCS_CATEGORY_KEY['hover-cards'],
    componentName: COMPONENT_KEYS.HOVERCARD3,
    filesrc: 'components/card/hover-card3.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/card/hover-card3')
    ),
    iframeSrc: 'live-components/hovercard3',
    tags: ['hover', 'card', 'animation', 'interaction', 'design', 'ui'],
  },
  {
    category: DOCS_CATEGORY_KEY['hover-cards'],
    componentName: COMPONENT_KEYS.HOVERCARD2,
    filesrc: 'components/card/hover-card2.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/card/hover-card2')
    ),
    iframeSrc: 'live-components/hovercard2',
    tags: ['hover', 'card', 'animation', 'interaction', 'design', 'ui'],
  },
  {
    category: DOCS_CATEGORY_KEY['hover-cards'],
    componentName: COMPONENT_KEYS.HOVERCARD1,
    filesrc: 'components/card/hover-card1.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/card/hover-card1')
    ),
    iframeSrc: 'live-components/hovercard1',
    tags: ['hover', 'card', 'animation', 'interaction', 'design', 'ui'],
  },
  {
    category: DOCS_CATEGORY_KEY['hover-cards'],
    componentName: COMPONENT_KEYS.CUIP_CARD,
    filesrc: 'components/card/cuip-card.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/card/cuip-card')
    ),
    iframeSrc: 'live-components/cuip-card',
    tags: ['card', 'ui', 'design', 'interaction', 'hover', 'style'],
  },
  {
    category: DOCS_CATEGORY_KEY['product-cards'],
    componentName: COMPONENT_KEYS.PRODUCTCARD1,
    filesrc: 'components/card/product-card1.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/card/product-card1')
    ),
    iframeSrc: 'live-components/productcard1',
    tags: ['product', 'card', 'ui', 'design', 'ecommerce', 'style'],
  },
  {
    category: DOCS_CATEGORY_KEY['product-cards'],
    componentName: COMPONENT_KEYS.PRODUCTCARD2,
    filesrc: 'components/card/product-card2.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/card/product-card2')
    ),
    iframeSrc: 'live-components/productcard2',
    tags: ['product', 'card', 'ui', 'design', 'ecommerce', 'style'],
  },
  {
    category: DOCS_CATEGORY_KEY['product-cards'],
    componentName: COMPONENT_KEYS.PRODUCTCARD3,
    filesrc: 'components/card/product-card3.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/card/product-card3')
    ),
    iframeSrc: 'live-components/productcard3',
    tags: ['product', 'card', 'ui', 'design', 'ecommerce', 'style'],
  },
  {
    category: DOCS_CATEGORY_KEY['product-cards'],
    componentName: COMPONENT_KEYS.PRODUCTCARD4,
    filesrc: 'components/card/product-card4.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/card/product-card4')
    ),
    iframeSrc: 'live-components/productcard4',
    tags: ['product', 'card', 'ui', 'design', 'ecommerce', 'style'],
  },
  {
    category: DOCS_CATEGORY_KEY['product-cards'],
    componentName: COMPONENT_KEYS.PRODUCTCARD5,
    filesrc: 'components/card/product-card5.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/card/product-card5')
    ),
    iframeSrc: 'live-components/productcard5',
    tags: ['product', 'card', 'ui', 'design', 'ecommerce', 'style'],
  },
  {
    category: DOCS_CATEGORY_KEY['product-cards'],
    componentName: COMPONENT_KEYS.PRODUCTCARD6,
    filesrc: 'components/card/product-card6.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/card/product-card6')
    ),
    iframeSrc: 'live-components/productcard6',
    tags: ['product', 'card', 'ui', 'design', 'ecommerce', 'style'],
  },
  {
    category: DOCS_CATEGORY_KEY['spotlight-cards'],
    componentName: COMPONENT_KEYS.SPOTLIGHT_CARD1,
    filesrc: 'components/spotlight-cards/spotlight-card1.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/spotlight-cards/spotlight-card1')
    ),
    iframeSrc: 'live-components/spotlight-card1',
    tags: ['spotlight', 'card', 'ui', 'design', 'highlight', 'feature'],
  },
  {
    category: DOCS_CATEGORY_KEY['spotlight-cards'],
    componentName: COMPONENT_KEYS.SPOTLIGHT_CARD2,
    filesrc: 'components/spotlight-cards/spotlight-card2.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/spotlight-cards/spotlight-card2')
    ),
    iframeSrc: 'live-components/spotlight-card2',
    tags: ['spotlight', 'card', 'ui', 'design', 'highlight', 'feature'],
  },
  {
    category: DOCS_CATEGORY_KEY['spotlight-cards'],
    componentName: COMPONENT_KEYS.SPOTLIGHT_CARD3,
    filesrc: 'components/spotlight-cards/spotlight-card3.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/spotlight-cards/spotlight-card3')
    ),
    iframeSrc: 'live-components/spotlight-card3',
    tags: ['spotlight', 'card', 'ui', 'design', 'highlight', 'feature'],
  },
  {
    category: DOCS_CATEGORY_KEY['spotlight-cards'],
    componentName: COMPONENT_KEYS.SPOTLIGHT_CARD4,
    filesrc: 'components/spotlight-cards/spotlight-card4.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/spotlight-cards/spotlight-card4')
    ),
    iframeSrc: 'live-components/spotlight-card4',
    tags: ['spotlight', 'card', 'ui', 'design', 'highlight', 'feature'],
  },
  {
    category: DOCS_CATEGORY_KEY['tabs'],
    componentName: COMPONENT_KEYS.MAINTABS,
    filesrc: 'components/tabs/preview-tab.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/tabs/preview-tab')
    ),
    iframeSrc: 'live-components/maintabs',
    tags: ['tabs', 'ui', 'navigation', 'component', 'design'],
  },
  {
    category: DOCS_CATEGORY_KEY['tabs'],
    componentName: COMPONENT_KEYS.CREATIVE_TAB,
    filesrc: 'components/tabs/home-tab.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/tabs/home-tab')
    ),
    iframeSrc: 'live-components/creative-tab',
    tags: ['tabs', 'ui', 'navigation', 'component', 'design', 'creative'],
  },
  {
    category: DOCS_CATEGORY_KEY['tabs'],
    componentName: COMPONENT_KEYS.REGISTER_TAB,
    filesrc: 'components/tabs/register-tab.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/tabs/register-tab')
    ),
    iframeSrc: 'live-components/register-tab',
    tags: ['tabs', 'ui', 'navigation', 'form', 'registration', 'design'],
  },
  {
    category: DOCS_CATEGORY_KEY['magnified-doc'],
    componentName: COMPONENT_KEYS.MAGNIFIED_TAB,
    filesrc: 'components/tabs/magnified-tabs.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/tabs/magnified-tabs')
    ),
    iframeSrc: 'live-components/magnified-tab',
    tags: ['tabs', 'ui', 'magnified', 'document', 'design'],
  },
  {
    category: DOCS_CATEGORY_KEY['image-tabs'],
    componentName: COMPONENT_KEYS.IMAGE_TAB1,
    filesrc: 'components/tabs/img-tabs1.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/tabs/img-tabs1')
    ),
    iframeSrc: 'live-components/image-tab1',
    tags: ['tabs', 'image', 'ui', 'gallery', 'design'],
  },
  {
    category: DOCS_CATEGORY_KEY['image-tabs'],
    componentName: COMPONENT_KEYS.IMAGE_TAB2,
    filesrc: 'components/tabs/img-tabs2.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/tabs/img-tabs2')
    ),
    iframeSrc: 'live-components/image-tab2',
    tags: ['tabs', 'image', 'ui', 'gallery', 'design'],
  },
  {
    category: DOCS_CATEGORY_KEY['image-tabs'],
    componentName: COMPONENT_KEYS.IMAGE_TAB3,
    filesrc: 'components/tabs/img-tabs3.tsx',
    componentSrc: React.lazy(
      () => import('@/registry/components/tabs/img-tabs3')
    ),
    iframeSrc: 'live-components/image-tab3',
    tags: ['tabs', 'image', 'ui', 'gallery', 'design'],
  },
];
