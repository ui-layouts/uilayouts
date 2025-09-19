import { DocsSection } from '../types/docs';
import { DOCS_CATEGORY, COMPONENT_KEYS } from '../const/docs';


export const dataArray: DocsSection[] = [
  {
    name: DOCS_CATEGORY.Default,
    componentArray: [
      {
        componentName: COMPONENT_KEYS.LIQUID_GLASS_SIDEBAR_MENU,
        filesrc: 'components/liquid-glass/sidebar-menu.tsx',
        iframeSrc: 'live-components/liquid-glass-sidebar-menu',
      },
      {
        componentName: COMPONENT_KEYS.LIQUID_GLASS_MOBILE_ICONS,
        filesrc: 'components/liquid-glass/mobile-icons-liquid.tsx',
        iframeSrc: 'live-components/liquid-glass-mobile-icons',
      },
      {
        componentName: COMPONENT_KEYS.LIQUID_GLASS_WEATHER,
        filesrc: 'components/liquid-glass/weather-liquid.tsx',
        iframeSrc: 'live-components/liquid-glass-weather',
      },
      {
        componentName: COMPONENT_KEYS.LIQUID_GLASS_NOTIFICATION,
        filesrc: 'components/liquid-glass/notification.tsx',
        iframeSrc: 'live-components/liquid-glass-notification',
      },
      {
        componentName: COMPONENT_KEYS.DRAG_ITEMS,
        filesrc: 'components/drag/drag-items.tsx',
        iframeSrc: 'live-components/drag-items',
      },
      {
        componentName: COMPONENT_KEYS.CARD_GLOBE,
        iframelink: 'card-globe',
      },
      {
        componentName: COMPONENT_KEYS.CARD_GLOBE2,
        iframelink: 'card-globe2',
      },
      {
        componentName: COMPONENT_KEYS.SPARKLES_GLOBE,
        iframelink: 'sparkles-globe',
      },
      {
        componentName: COMPONENT_KEYS.ANIMATED_LOGO_FOOTER,
        filesrc: 'components/footers/animated-logo-footer.tsx',
        iframeSrc: 'live-components/animated-logo-footer',
      },
      {
        componentName: COMPONENT_KEYS.HOVER_FOOTER,
        iframeSrc: 'live-components/hover-footer',
        filesrc: 'components/footers/hover-footer.tsx',
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
        componentName: COMPONENT_KEYS.BUTTON_BACKGROUND_SHINE,
        filesrc: 'components/button/btn-bg-shine.tsx',
        iframeSrc: 'live-components/button-background-shine',
      },
      {
        componentName: COMPONENT_KEYS.BUTTON_BACKGROUND_SPOTLIGHT,
        filesrc: 'components/button/btn-animated-gradient.tsx',
        iframeSrc: 'live-components/button-background-spotlight',
      },
      {
        componentName: COMPONENT_KEYS.BUTTON_HOVER_ACTIVE,
        filesrc: 'components/button/btn-active.tsx',
        iframeSrc: 'live-components/button-hover-active',
      },
      {
        componentName: COMPONENT_KEYS.BUTTON_HOVER_2,
        filesrc: 'components/button/btn-hover-right.tsx',
        iframeSrc: 'live-components/button-hover-2',
      },
      {
        componentName: COMPONENT_KEYS.BUTTON_HOVER_3,
        filesrc: 'components/button/btn-click-down.tsx',
        iframeSrc: 'live-components/button-hover-3',
      },
      {
        componentName: COMPONENT_KEYS.BUTTON_HOVER_4,
        filesrc: 'components/button/btn-hover-down.tsx',
        iframeSrc: 'live-components/button-hover-4',
      },
      {
        componentName: COMPONENT_KEYS.BUTTON_HOVER_5,
        filesrc: 'components/button/btn-hover-multiple.tsx',
        iframeSrc: 'live-components/button-hover-5',
      },
      {
        componentName: COMPONENT_KEYS.BUTTON_HOVER_6,
        filesrc: 'components/button/btn-hover-underline.tsx',
        iframeSrc: 'live-components/button-hover-6',
      },
      {
        componentName: COMPONENT_KEYS.BUTTON_HOVER_7,
        filesrc: 'components/button/btn-hover-top-flip.tsx',
        iframeSrc: 'live-components/button-hover-7',
      },
      {
        componentName: COMPONENT_KEYS.BUTTON_HOVER_8,
        filesrc: 'components/button/btn-hover-left-flip.tsx',
        iframeSrc: 'live-components/button-hover-8',
      },
      {
        componentName: COMPONENT_KEYS.BUTTON_HOVER_9,
        filesrc: 'components/button/btn-hover-top-slowflip.tsx',
        iframeSrc: 'live-components/button-hover-9',
      },
      {
        componentName: COMPONENT_KEYS.BUTTON_HOVER_10,
        filesrc: 'components/button/btn-text-change.tsx',
        iframeSrc: 'live-components/button-hover-10',
      },
      {
        componentName: COMPONENT_KEYS.BUTTON_HOVER_11,
        filesrc: 'components/button/btn-cross-arrow.tsx',
        iframeSrc: 'live-components/button-hover-11',
      },
      {
        componentName: COMPONENT_KEYS.BUTTON_HOVER_12,
        filesrc: 'components/button/btn-black-shadow.tsx',
        iframeSrc: 'live-components/btn-hover12',
      },
      {
        componentName: COMPONENT_KEYS.BUTTON_HOVER_13,
        filesrc: 'components/button/btn-hover-outline.tsx',
        iframeSrc: 'live-components/button-hover-13',
      },
      {
        componentName: COMPONENT_KEYS.BUTTON_HOVER_14,
        filesrc: 'components/button/btn-hover14.tsx',
        iframeSrc: 'live-components/button-hover-14',
      },
      {
        componentName: COMPONENT_KEYS.BUTTON_ROTATING_GRADIENT,
        filesrc: 'components/button/btn-rotating-gradient.tsx',
        iframeSrc: 'live-components/btn-rotating-bgGradient',
      },
      {
        componentName: COMPONENT_KEYS.CREATIVE_BUTTON_1,
        filesrc: 'components/button/btn-creative-right.tsx',
        iframeSrc: 'live-components/creative-button-1',
      },
      {
        componentName: COMPONENT_KEYS.CREATIVE_BUTTON_2,
        filesrc: 'components/button/btn-creative-top.tsx',
        iframeSrc: 'live-components/creative-button-2',
      },
      {
        componentName: COMPONENT_KEYS.NOISE_EFFECT,
        filesrc: 'components/noise-effect/section-noise.tsx',
        iframeSrc: 'live-components/noise-effect',
      },
      {
        componentName: COMPONENT_KEYS.BUYME_ACOFFEE, // TODO: 이거 다름 문제있음
        filesrc: 'components/buy-me-coffee.tsx',
        iframeSrc: 'live-components/buyme-acoffee',
      },
    ],
    type: DOCS_CATEGORY.Default,
  },
  {
    name: DOCS_CATEGORY.ThreeJS,
    componentArray: [
      {
        componentName: COMPONENT_KEYS.IMG_RIPPLE_EFFECT, // TODO: 이거 다름 문제있음
        iframelink: 'img-ripple-effect',
      },
      {
        componentName: COMPONENT_KEYS.R3F_BLOB, // TODO: 이거 다름 문제있음
        iframelink: 'r3f-blob',
      },
      {
        componentName: COMPONENT_KEYS.MESH_SHADERGRADIENT, // TODO: 이거 다름 문제있음
        iframelink: 'mesh-shadergradient',
      },
      {
        componentName: COMPONENT_KEYS.LEMON_MESH_GRADIENTS,  // TODO: 이거 다름 문제있음
        iframelink: 'mesh-gradient-background',
      },
      {
        componentName: COMPONENT_KEYS.YELLOW_MESH_GRADIENTS, // TODO: 이거 다름 문제있음
        iframelink: 'mesh-gradient-background3',
      },
      {
        componentName: COMPONENT_KEYS.BLUE_MESH_GRADIENTS, // TODO: 이거 다름 문제있음
        iframelink: 'mesh-gradient-background2',
      },
    ],
    type: DOCS_CATEGORY.ThreeJS,
  },

  {
    name: DOCS_CATEGORY.Accordion,
    componentArray: [
      {
        componentName: COMPONENT_KEYS.GRID_LAYOUT_ACCORDION,
        filesrc: 'components/accordion/gridlayout.tsx',
        iframeSrc: 'live-components/grid-layout-accordion',
      },
      {
        componentName: COMPONENT_KEYS.SINGLE_LAYOUT_ACCORDION,
        filesrc: 'components/accordion/singlelayout.tsx',
        iframeSrc: 'live-components/single-layout-accordion',
      },
      {
        componentName: COMPONENT_KEYS.MULTI_LAYOUT_ACCORDION,
        filesrc: 'components/accordion/multilayout.tsx',
        iframeSrc: 'live-components/multi-layout-accordion',
      },
      {
        componentName: COMPONENT_KEYS.FAQ_ACCORDION,
        filesrc: 'components/accordion/faq.tsx',
        iframeSrc: 'live-components/faq-accordion',
      },
      {
        componentName: COMPONENT_KEYS.IMAGE_HOVER_ACCORDION,
        filesrc: 'components/accordion/image-hover.tsx',
        iframeSrc: 'live-components/image-hover-accordion',
      },
      {
        componentName: COMPONENT_KEYS.TAILWIND_IMAGE_ACCORDION,
        filesrc: 'components/accordion/tailwind-image-accordion.tsx',
        iframeSrc: 'live-components/tailwind-image-accordion',
      },
    ],
    type: DOCS_CATEGORY.Accordion,
  },
  {
    name: DOCS_CATEGORY.Form,
    componentArray: [
      {
        componentName: COMPONENT_KEYS.PHONE_INPUT,
        filesrc: 'components/form/phone-number/index.tsx',
        iframeSrc: 'live-components/phone-input',
      },
      {
        componentName: COMPONENT_KEYS.DUAL_RANGE_SLIDER, // TODO: 이거 다름 문제있음
        filesrc: 'components/form/slider/dual-range-slider.tsx',
        iframeSrc: 'live-components/dual-range-slider',
      },
      {
        componentName: COMPONENT_KEYS.STATIC_RANGE_SLIDER, // TODO: 이거 다름 문제있음
        filesrc: 'components/form/slider/static-range-slider.tsx',
        iframeSrc: 'live-components/static-range-slider',
      },
      {
        componentName: COMPONENT_KEYS.POSITION_RANGE_SLIDER, // TODO: 이거 다름 문제있음
        filesrc: 'components/form/slider/position-range-slider.tsx',
        iframeSrc: 'live-components/position-range-slider',
      },
      {
        componentName: COMPONENT_KEYS.SHOWHIDE_PASS, // TODO: 이거 다름 문제있음
        filesrc: 'components/form/password/showhide-pass.tsx',
        iframeSrc: 'live-components/showhide-pass',
      },
      {
        componentName: COMPONENT_KEYS.PASS_STRENGTHINDICATOR,  // TODO: 이거 다름 문제있음
        filesrc: 'components/form/password/pass-strength-indicator.tsx',
        iframeSrc: 'live-components/pass-strengthindicator',
      },
      {
        componentName: COMPONENT_KEYS.PASS_STRENGTHINDICATOR2,// TODO: 이거 다름 문제있음
        filesrc: 'components/form/password/pass-strength-indicator2.tsx',
        iframeSrc: 'live-components/pass-strengthindicator2',
      },
      {
        componentName: COMPONENT_KEYS.PASS_STRENGTHINDICATOR3,// TODO: 이거 다름 문제있음
        filesrc: 'components/form/password/pass-strength-indicator3.tsx',
        iframeSrc: 'live-components/pass-strengthindicator3',
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
        componentName: COMPONENT_KEYS.PASS_STRENGTHINDICATOR4, // TODO: 이거 다름 문제있음
        filesrc: 'components/form/password/pass-strength-indicator4.tsx',
        iframeSrc: 'live-components/pass-strengthindicator4',
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
        componentName: COMPONENT_KEYS.CONFIRM_PASS_CHECK, // TODO: 이거 다름 문제있음
        filesrc: 'components/form/password/confirm-pass-check.tsx',
        iframeSrc: 'live-components/confirm-pass-check',
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
        componentName: COMPONENT_KEYS.DATETIME_PICKER, // TODO: 이거 다름 문제있음
        filesrc: 'components/form/datetime-picker/index.tsx',
        iframeSrc: 'live-components/datetime-picker',
      },
      {
        componentName: COMPONENT_KEYS.TIME_PICKER, // TODO: 이거 다름 문제있음
        filesrc: 'components/form/datetime-picker/time-picker.tsx',

        iframeSrc: 'live-components/time-picker',
      },
      {
        componentName: COMPONENT_KEYS.DATE_PICKER, // TODO: 이거 다름 문제있음
        filesrc: 'components/form/datetime-picker/date-picker.tsx',
        iframeSrc: 'live-components/date-picker',
      },
      {
        componentName: COMPONENT_KEYS.TAGS_INPUT, // TODO: 이거 다름 문제있음
        filesrc: 'components/form/tags-input/index.tsx',
        iframeSrc: 'live-components/tags-input',
      },
      {
        componentName: COMPONENT_KEYS.TAGSEDIT_FALSE, // TODO: 이거 다름 문제있음
        filesrc: 'components/form/tags-input/tagsedit-false.tsx',
        iframeSrc: 'live-components/tagsedit-false',
      },
      {
        componentName: COMPONENT_KEYS.MULTI_SELECTOR,
        filesrc: 'components/form/multiple-selector.tsx',
        iframeSrc: 'live-components/multi-selector',
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
        componentName: COMPONENT_KEYS.FILE_UPLOAD,
        filesrc: 'components/form/file-upload/index.tsx',
        iframeSrc: 'live-components/file-upload',
      },
      {
        componentName: COMPONENT_KEYS.IMGPREVIEW_DROPZONE, // TODO: 이거 다름 문제있음
        filesrc: 'components/form/file-upload/img-preview.tsx',
        iframeSrc: 'live-components/imgpreview-dropzone',
      },
      {
        componentName: COMPONENT_KEYS.CHAT_FORM_DROPZONE, // TODO: 이거 다름 문제있음
        filesrc: 'components/form/file-upload/chat-form.tsx',
        iframeSrc: 'live-components/chat-form-dropzone',
      },
    ],
    type: DOCS_CATEGORY.Form,
  },
  {
    name: DOCS_CATEGORY.Sparkles,
    componentArray: [
      {
        componentName: COMPONENT_KEYS.SPARKLES_GLOBE,
        iframelink: 'sparkles-globe',
      },
      {
        componentName: COMPONENT_KEYS.SPARKLES_SECTION, // TODO: 이거 다름 문제있음
        iframelink: 'sparkles-section',
      },
      {
        componentName: COMPONENT_KEYS.SPARKLES_BRANDING, // TODO: 이거 다름 문제있음
        iframelink: 'sparkles-branding',
      },
      {
        componentName: COMPONENT_KEYS.SPARKLES_TITLE, // TODO: 이거 다름 문제있음
        iframelink: 'sparkles-title',
      },
      {
        componentName: COMPONENT_KEYS.SPARKLES_TITLE2, // TODO: 이거 다름 문제있음
        iframelink: 'sparkles-title2',
      },
      {
        componentName: COMPONENT_KEYS.SPARKLES_TITLE2, // TODO: 이거 다름 문제있음
        iframelink: 'sparkles-title2',
      },
      {
        componentName: COMPONENT_KEYS.SPARKLES_TITLE3, // TODO: 이거 다름 문제있음
        iframelink: 'sparkles-title3',
      },
      {
        componentName: COMPONENT_KEYS.SPARKLES_TITLE4, // TODO: 이거 다름 문제있음
        iframelink: 'sparkles-title4',
      },
    ],
    type: DOCS_CATEGORY.Sparkles,
  },
  {
    name: DOCS_CATEGORY.Swapy,
    componentArray: [
      {
        componentName: COMPONENT_KEYS.DEFAULT_SWAPY,
        filesrc: 'components/swapy/default-swapy.tsx',
        iframeSrc: 'live-components/default-swapy',
      },
      {
        componentName: COMPONENT_KEYS.OPACITY_SWAPY,
        filesrc: 'components/swapy/swapy-opacity.tsx',
        iframeSrc: 'live-components/swapy-opacity',
      },
      {
        componentName: COMPONENT_KEYS.SWAPY_HANDLE,
        filesrc: 'components/swapy/swapy-handle.tsx',
        iframeSrc: 'live-components/swapy-handle',
      },
      {
        componentName: COMPONENT_KEYS.SWAPY_WITHOUT_COMPONENTS,
        filesrc: 'components/swapy/swapy-without-components.tsx',
        iframeSrc: 'live-components/swapy-without-components',
      },
    ],
    type: DOCS_CATEGORY.Swapy,
  },
  {
    name: DOCS_CATEGORY.ColorPicker,
    componentArray: [
      {
        componentName: COMPONENT_KEYS.DEFAULT_COLOR_PICKER,
        filesrc: 'components/color-picker/index.tsx',
        iframeSrc: 'live-components/default-color-picker',
      },
      {
        componentName: COMPONENT_KEYS.RAWS_COLOR_PICKER,
        filesrc: 'components/color-picker/raws-color-picker.tsx',
        iframeSrc: 'live-components/raws-color-picker',
      },
    ],
    type: DOCS_CATEGORY.ColorPicker,
  },
  {
    name: DOCS_CATEGORY.Carousel,
    componentArray: [
      {
        componentName: COMPONENT_KEYS.DEFAULT_SLIDER,
        filesrc: 'components/carousel/default-slider.tsx',
        iframeSrc: 'live-components/default-slider',
      },
      {
        componentName: COMPONENT_KEYS.ALIGN_SLIDER,
        filesrc: 'components/carousel/align-slider.tsx',
        iframeSrc: 'live-components/align-slider',
      },
      {
        componentName: COMPONENT_KEYS.CLASSNAME_SLIDER,
        filesrc: 'components/carousel/classname-slider.tsx',
        iframeSrc: 'live-components/classname-slider',
      },
      {
        componentName: COMPONENT_KEYS.NUMBER_SLIDER,
        filesrc: 'components/carousel/number-slider.tsx',
        iframeSrc: 'live-components/number-slider',
      },
      {
        componentName: COMPONENT_KEYS.SCALE_SLIDER,
        filesrc: 'components/carousel/scale-slider.tsx',
        iframeSrc: 'live-components/scale-slider',
      },
      {
        componentName: COMPONENT_KEYS.THUMBNAIL_SLIDER,
        filesrc: 'components/carousel/thumnail-slider.tsx',
        iframeSrc: 'live-components/thumbnail-slider',
      },
      {
        componentName: COMPONENT_KEYS.AUTOSTART_SLIDER,
        filesrc: 'components/carousel/autostart-slider.tsx',
        iframeSrc: 'live-components/autostart-slider',
      },
      {
        componentName: COMPONENT_KEYS.HORIZONTAL_PROGRESSIVE_CAROUSEL,
        filesrc: 'components/carousel/horizontal-progressive.tsx',
        iframeSrc: 'live-components/horizontal-progressive-carousel',
      },
      {
        componentName: COMPONENT_KEYS.VERTICAL_PROGRESSIVE_CAROUSEL,
        filesrc: 'components/carousel/verticle-progressive.tsx',
        iframeSrc: 'live-components/vertical-progressive-carousel',
      },
      {
        componentName: COMPONENT_KEYS.FRAMER_CAROUSEL_2,
        filesrc: 'components/carousel/framer-carousel2.tsx',
        iframeSrc: 'live-components/framer-carousel-2',
      },
      {
        componentName: COMPONENT_KEYS.FRAMER_CAROUSEL_1,
        filesrc: 'components/carousel/framer-carousel1.tsx',
        iframeSrc: 'live-components/framer-carousel-1',
      },
    ],
    type: DOCS_CATEGORY.Carousel,
  },
  {
    name: DOCS_CATEGORY.Creative,
    componentArray: [
      {
        componentName: COMPONENT_KEYS.IMAGE_REVEAL,
        filesrc: 'components/image-reveal/image-reveal.tsx',
        iframeSrc: 'live-components/image-reveal',
      },
      {
        componentName: COMPONENT_KEYS.IMAGE_REVEAL2,
        filesrc: 'components/image-reveal/index.tsx',
        iframeSrc: 'live-components/image-reveal2',
      },
      {
        componentName: COMPONENT_KEYS.UILAYOUTS_GITHUB_BUTTON,
        filesrc: 'components/github-repo-btn/index.tsx',
        iframeSrc: 'live-components/uilayouts-github-button',
      },
      {
        componentName: COMPONENT_KEYS.BLUR_VIGNETTE_VIDEO,
        filesrc: 'components/blurvignette/blurvignettevideo.tsx',
        iframeSrc: 'live-components/blur-vignette-video',
      },
      {
        componentName: COMPONENT_KEYS.BLUR_VIGNETTE_IMG,
        filesrc: 'components/blurvignette/blurvignetteimg.tsx',
        iframeSrc: 'live-components/blur-vignette-img',
      },
      {
        componentName: COMPONENT_KEYS.BLUR_VIGNETTE_CARD,
        filesrc: 'components/blurvignette/blurvignettecard.tsx',
        iframeSrc: 'live-components/blur-vignette-card',
      },
      {
        componentName: COMPONENT_KEYS.ANIMATED_BEAM_DEFAULT,
        filesrc: 'components/animated-beam/default.tsx',
        iframeSrc: 'live-components/animated-beam-default',
      },
      {
        componentName: COMPONENT_KEYS.ANIMATED_BEAM_BIDIRECTIONAL,
        filesrc: 'components/animated-beam/bidirectional.tsx',
        iframeSrc: 'live-components/animated-beam-bidirectional',
      },
      {
        componentName: COMPONENT_KEYS.ANIMATED_BEAM_UNIDIRECTIONAL,
        filesrc: 'components/animated-beam/unidirectional.tsx',
        iframeSrc: 'live-components/animated-beam-unidirectional',
      },
      {
        componentName: COMPONENT_KEYS.ANIMATED_BEAM_MULTIPLE_INPUT,
        filesrc: 'components/animated-beam/multiple-input.tsx',
        iframeSrc: 'live-components/animated-beam-multiple-input',
      },
      {
        componentName: COMPONENT_KEYS.ANIMATED_BEAM_MULTIPLE_OUTPUT,
        filesrc: 'components/animated-beam/multiple-output.tsx',
        iframeSrc: 'live-components/animated-beam-multiple-output',
      },
      {
        componentName: COMPONENT_KEYS.BG_BLOCKS_ONE,
        filesrc: 'components/bg-blocks/blocksone.tsx',
        iframeSrc: 'live-components/bg-blocks-one',
      },
      {
        componentName: COMPONENT_KEYS.MOTION_NUMBER_INPUT,
        filesrc: 'components/number-flow/motion-number-input.tsx',
        iframeSrc: 'live-components/motion-number-input',

      },
      {
        componentName: COMPONENT_KEYS.NUMBER_FLOW_TRADING, // TODO: 이거 다름 문제있음
        filesrc: 'components/number-flow/number-flow-trading.tsx',
        iframeSrc: 'live-components/motion-number-trading',
        filesArray: [
          {
            name: 'index.tsx',
            filesrc: 'registry/components/number-flow/number-flow-trading.tsx',
          },
        ],
      },
      {
        componentName: COMPONENT_KEYS.MOTION_NUMBER_SLIDER,
        filesrc: 'components/number-flow/motion-number-slider.tsx',
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
        iframeSrc: 'live-components/motion-number-slider',
      },
      {
        componentName: COMPONENT_KEYS.MOTION_NUMBER,
        filesrc: 'components/number-flow/motion-number.tsx',
        iframeSrc: 'live-components/motion-number',
      },
      {
        componentName: COMPONENT_KEYS.IMAGE_MOUSETRAIL_DEFAULT,
        filesrc: 'components/mousetrail/default-mousetrail.tsx',
        iframeSrc: 'live-components/image-mousetrail-default',
      },
      {
        componentName: COMPONENT_KEYS.IMAGE_MOUSETRAIL_SMALL,
        filesrc: 'components/mousetrail/small-images.tsx',
        iframeSrc: 'live-components/image-mousetrail-small',
      },
      {
        componentName: COMPONENT_KEYS.IMAGE_MOUSETRAIL_DISAPPEAR,
        filesrc: 'components/mousetrail/disappear-images.tsx',
        iframeSrc: 'live-components/image-mousetrail-disappear',
      },
      {
        componentName: COMPONENT_KEYS.IMAGE_MOUSETRAIL_WITHOUT_COMPONENT,
        filesrc: 'components/mousetrail/without-component-mousetrail.tsx',
        iframeSrc: 'live-components/image-mousetrail-without-component',
      },
    ],
    type: DOCS_CATEGORY.Creative,
  },
  {
    ////////////////////////////////
    name: DOCS_CATEGORY['Modal/Drawer'],
    componentArray: [
      {
        componentName: COMPONENT_KEYS.RESPONSIVE_DRAWER,
        filesrc: 'components/drawer/value-drawer.tsx',
        iframeSrc: 'live-components/responsive-drawer',
      },
      {
        componentName: COMPONENT_KEYS.RESPONSIVE_HEADER,
        filesrc: 'components/drawer/header-drawer.tsx',
        iframeSrc: 'live-components/responsive-header',
      },
      {
        componentName: COMPONENT_KEYS.SIDEBAR_DRAWER,
        filesrc: 'components/drawer/sidebar-drawer.tsx',
        iframeSrc: 'live-components/sidebar-drawer',
      },
      {
        componentName: COMPONENT_KEYS.LEFT_SIDEBAR_DRAWER,
        filesrc: 'components/drawer/left-sidebar-drawer.tsx',
        iframeSrc: 'live-components/left-sidebar-drawer',
      },

      {
        componentName: COMPONENT_KEYS.NESTED_DRAWER,
        filesrc: 'components/drawer/nested-value-drawer.tsx',
        iframeSrc: 'live-components/nested-drawer',
      },
      {
        componentName: COMPONENT_KEYS.DIALOG,
        filesrc: 'components/modal/dialog-default.tsx',
        iframeSrc: 'live-components/dialog',
      },
      {
        componentName: COMPONENT_KEYS.MEDIA_MODAL,
        filesrc: 'components/modal/media-modal-default.tsx',
        iframeSrc: 'live-components/media-modal',
      },
      {
        componentName: COMPONENT_KEYS.IMAGEMODALSL,
        filesrc: 'components/modal/image-modals.tsx',
        iframeSrc: 'live-components/imagemodals',
      },
      {
        componentName: COMPONENT_KEYS.LINEAR_MODAL,
        filesrc: 'components/linear-modal/index.tsx',
        iframeSrc: 'live-components/linear-modal',
      },
      {
        componentName: COMPONENT_KEYS.LINEAR_MODAL_STANDALONE,
        filesrc: 'components/linear-modal/standalone-version.tsx',
        iframeSrc: 'live-components/linear-modal-standalone',
      },
      {
        componentName: COMPONENT_KEYS.LINEAR_MODAL_CENTER_CONTENT,
        filesrc: 'components/linear-modal/center-content.tsx',
        iframeSrc: 'live-components/linear-modal-center-content',
      },
      {
        componentName: COMPONENT_KEYS.GALLERY_MODAL_ACCORDION,
        filesrc: 'components/modal/gallery-modal/accordion-modal.tsx',
        iframeSrc: 'live-components/gallery-modal-accordion',
      },
      {
        componentName: COMPONENT_KEYS.GALLERY_MODAL_SLIDER,
        filesrc: 'components/modal/gallery-modal/modal-slider.tsx',
        iframeSrc: 'live-components/gallery-modal-slider',
      },
      {
        componentName: COMPONENT_KEYS.GALLERY_MODAL_UNSPLASH,
        filesrc: 'components/modal/gallery-modal/unsplash-modal.tsx',
        iframeSrc: 'live-components/gallery-modal-unsplash',
      },
    ],
    type: DOCS_CATEGORY['Modal/Drawer'],
  },
  {
    name: DOCS_CATEGORY.Animation,
    componentArray: [
      {
        componentName: COMPONENT_KEYS.SCROLL_ELEMENT,
        filesrc: 'components/scroll-animation/scroll-element.tsx',
        iframeSrc: 'live-components/scroll-element',
      },
      {
        componentName: COMPONENT_KEYS.REPEAT_SCROLL_ELEMENT,
        filesrc: 'components/scroll-animation/repeat-scroll.tsx',
        iframeSrc: 'live-components/repeat-scroll-element',
      },
      {
        componentName: COMPONENT_KEYS.TEXT_SCROLL_ELEMENT,
        filesrc: 'components/scroll-animation/text-scroll.tsx',
        iframeSrc: 'live-components/text-scroll-element',
      },
      {
        componentName: COMPONENT_KEYS.TIMELINE_ANIMATION,
        filesrc: 'components/timeline-animation/index.tsx',
        iframeSrc: 'live-components/timeline-animation',
      },
    ],
    type: DOCS_CATEGORY.Animation,
  },
  {
    name: DOCS_CATEGORY.TextAnimation,
    componentArray: [
      {
        componentName: COMPONENT_KEYS.TEXT_SCROLL_ANIMATION,
        filesrc: 'components/text-animation/scroll-text-animation.tsx',
        iframeSrc: 'live-components/text-scroll-animation',
      },
      {
        componentName: COMPONENT_KEYS.SCROLL_TEXT_MARQUEE,
        filesrc: 'components/text-animation/text-marque/animationone.tsx',
        iframeSrc: 'live-components/scroll-text-marquee',
      },
      {
        componentName: COMPONENT_KEYS.SCROLL_TEXT_MARQUEE2,
        filesrc: 'components/text-animation/text-marque/animationtwo.tsx',
        iframeSrc: 'live-components/scroll-text-marquee2',
      },
      {
        componentName: COMPONENT_KEYS.RANDOMIZED_TEXT_UNVEIL,
        filesrc: 'components/text-animation/text-randomized/index.tsx',
        iframeSrc: 'live-components/randomized-text-unveil',
      },
    ],
    type: DOCS_CATEGORY.TextAnimation,
  },
  {
    name: DOCS_CATEGORY.Scroll,
    componentArray: [
      {
        componentName: COMPONENT_KEYS.HORIZONTALSCROLL,
        iframelink: 'horizontal-scrolling-section',
      },
      {
        componentName: COMPONENT_KEYS.STACKING_CARD,
        iframelink: 'stacking-card',
      },
      {
        componentName: COMPONENT_KEYS.CSS_CARD_STACKING,
        iframelink: 'css-stacking-details-card',
      },
      {
        componentName: COMPONENT_KEYS.CSS_IMAGE_STACKING,
        iframelink: 'css-stacking-card',
      },
      {
        componentName: COMPONENT_KEYS.SMOOTH_SCROLL,
        iframelink: 'smooth-scroll',
      },
      {
        componentName: COMPONENT_KEYS.STICKY_SCROLL_SECTION,
        iframelink: 'sticky-scroll-section',
      },
      {
        componentName: COMPONENT_KEYS.STICKY_GALLERY,
        iframelink: 'sticky-gallery',
      },
      {
        componentName: COMPONENT_KEYS.STICKY_HERO_SECTION,
        iframelink: 'sticky-hero-section',
      },

      {
        componentName: COMPONENT_KEYS.FRAMERHORIZONTALSCROLL,
        filesrc: 'components/scroll-animation/framer-horizontal-scroll.tsx',
        iframeSrc: 'live-components/framerhorizontalscroll',
        filesArray: [
          {
            name: 'index.tsx',
            filesrc:
              'registry/components/scroll-animation/framer-horizontal-scroll.tsx',
          },
        ],
      },
    ],
    type: DOCS_CATEGORY.Scroll,
  },
  {
    name: DOCS_CATEGORY.Grid,
    componentArray: [
      {
        componentName: COMPONENT_KEYS.BOXGRID,
        filesrc: 'components/grid/box-grid.tsx',
        iframeSrc: 'live-components/boxgrid',
      },
      {
        componentName: COMPONENT_KEYS.CONDITIONGRID,
        filesrc: 'components/grid/condition-grid.tsx',
        iframeSrc: 'live-components/conditionGrid',
      },
      {
        componentName: COMPONENT_KEYS.NORMALGRID,
        filesrc: 'components/grid/normal-grid.tsx',
        iframeSrc: 'live-components/normalGrid',
      },
      {
        componentName: COMPONENT_KEYS.UNSPLASHGRID,
        filesrc: 'components/grid/unsplash-grid.tsx',
        iframeSrc: 'live-components/unsplashGrid',
      },
    ],
    type: DOCS_CATEGORY.Grid,
  },
  {
    name: DOCS_CATEGORY.Marquee,
    componentArray: [
      {
        componentName: COMPONENT_KEYS.INFINTYBAND, 
        filesrc: 'components/marquee/infinity-band-scroll.tsx',
        iframeSrc: 'live-components/infintyband',
      },
      {
        componentName: COMPONENT_KEYS.DEFAULT_MARQUEE,
        filesrc: 'components/marquee/default-marquee.tsx',
        iframeSrc: 'live-components/default-marquee',
      },
      {
        componentName: COMPONENT_KEYS.VERTICLE_MARQUEE,
        filesrc: 'components/marquee/verticle-marquee.tsx',
        iframeSrc: 'live-components/verticl-emarquee',
      },
      {
        componentName: COMPONENT_KEYS.LOGOS_MARQUEE,
        filesrc: 'components/marquee/verticle-marquee.tsx',
        iframeSrc: 'live-components/logos-marquee',
      },
      {
        componentName: COMPONENT_KEYS.MARQUEE_3D,
        filesrc: 'components/marquee/3d-marquee.tsx',
        iframeSrc: 'live-components/3d-marquee',
      },
    ],
    type: DOCS_CATEGORY.Marquee,
  },
  {
    name: DOCS_CATEGORY['Clip-Path'],
    componentArray: [
      {
        componentName: COMPONENT_KEYS.CREATIVE_CLIPPATH,
        filesrc: 'components/clip-path/clip-path-creative.tsx',
        iframeSrc: 'live-components/creative-clippath',
      },
      {
        componentName: COMPONENT_KEYS.CORPORATE_CLIPPATH,
        filesrc: 'components/clip-path/clip-path-corporate.tsx',
        iframeSrc: 'live-components/corporate-clippath',
      },
      {
        componentName: COMPONENT_KEYS.SYMBOLIC_CLIPPATH,
        filesrc: 'components/clip-path/clip-path-symbolic.tsx',
        iframeSrc: 'live-components/symbolic-clippath',
      },
      {
        componentName: COMPONENT_KEYS.CREATIVE_MASK_CLIPPATH,
        filesrc: 'components/clip-path/clip-path-creative-mask.tsx',
        iframeSrc: 'live-components/creative-mask-clippath',
      },
      {
        componentName: COMPONENT_KEYS.WATERSPLASH_CLIPPATH,
        filesrc: 'components/clip-path/clip-path-water-splash.tsx',
        iframeSrc: 'live-components/watersplash-clippath',
      },
      {
        componentName: COMPONENT_KEYS.CREATIVE_IMAGEMASKING,
        filesrc: 'components/clip-path/creative-image-masking.tsx',
        iframeSrc: 'live-components/creative-imagemasking',
      },
      {
        componentName: COMPONENT_KEYS.ANIMAL_IMAGEMASKING,
        filesrc: 'components/clip-path/animal-image-masking.tsx',
        iframeSrc: 'live-components/animal-imagemasking',
      },
      {
        componentName: COMPONENT_KEYS.WATERSPLASH_IMAGEMASKING,
        filesrc: 'components/clip-path/water-splash-image-masking.tsx',
        iframeSrc: 'live-components/watersplash-imagemasking',
      },
      {
        componentName: COMPONENT_KEYS.CENTER_IMAGEMASKING,
        filesrc: 'components/clip-path/center-image-masking.tsx',
        iframeSrc: 'live-components/center-imagemasking',
      },
      {
        componentName: COMPONENT_KEYS.FIXEDBG_IMAGEMASKING,
        filesrc: 'components/clip-path/fixed-bg-image-masking.tsx',
        iframeSrc: 'live-components/fixedbg-imagemasking',
      },
      {
        componentName: COMPONENT_KEYS.CREATIVE_VIDEOMASKING,
        filesrc: 'components/clip-path/creative-video-masking.tsx',
        iframeSrc: 'live-components/creative-videomasking',
      },
      {
        componentName: COMPONENT_KEYS.SPLASHWATER_VIDEOMASKING,
        filesrc: 'components/clip-path/splash-water-video-masking.tsx',
        iframeSrc: 'live-components/splashwater-videomasking',
      },
      {
        componentName: COMPONENT_KEYS.TEXTOVERLAY_VIDEOMASKING,
        filesrc: 'components/clip-path/text-overlay-video-masking.tsx',
        iframeSrc: 'live-components/textoverlay-videomasking',
      },
      {
        componentName: COMPONENT_KEYS.HEXAGON_VIDEOMASKING,
        filesrc: 'components/clip-path/hexagon-video-masking.tsx',
        iframeSrc: 'live-components/hexagon-videomasking',
      },
      {
        componentName: COMPONENT_KEYS.HEXAGON2_VIDEOMASKING,
        filesrc: 'components/clip-path/hexagon2-video-masking.tsx',
        iframeSrc: 'live-components/hexagon2-videomasking',
      },
    ],
    type: DOCS_CATEGORY['Clip-Path'],
  },
  {
    name: DOCS_CATEGORY.Card,
    componentArray: [
      {
        componentName: COMPONENT_KEYS.GRADIENT_BORDER,
        filesrc: 'components/card/gradient-border.tsx',
        iframeSrc: 'live-components/gradient-border',
      },
      {
        componentName: COMPONENT_KEYS.STRIPECARD,
        filesrc: 'components/card/stripe-card.tsx',
        iframeSrc: 'live-components/stripecard',
      },
      {
        componentName: COMPONENT_KEYS.STRIPECARD2,
        filesrc: 'components/card/stripe-card2.tsx',
        iframeSrc: 'live-components/stripecard2',
      },
      {
        componentName: COMPONENT_KEYS.HOVERCARD4,
        filesrc: 'components/card/hover-card4.tsx',
        iframeSrc: 'live-components/hovercard4',
      },
      {
        componentName: COMPONENT_KEYS.HOVERCARD3,
        filesrc: 'components/card/hover-card3.tsx',
        iframeSrc: 'live-components/hovercard3',
      },
      {
        componentName: COMPONENT_KEYS.HOVERCARD2,
        filesrc: 'components/card/hover-card2.tsx',
        iframeSrc: 'live-components/hovercard2',
      },
      {
        componentName: COMPONENT_KEYS.HOVERCARD1,
        filesrc: 'components/card/hover-card1.tsx',
        iframeSrc: 'live-components/hovercard1',
      },
      {
        componentName: COMPONENT_KEYS.CUIP_CARD,
        filesrc: 'components/card/cuip-card.tsx',
        iframeSrc: 'live-components/cuip-card',
      },
      {
        componentName: COMPONENT_KEYS.PRODUCTCARD1,
        filesrc: 'components/card/product-card1.tsx',
        iframeSrc: 'live-components/productcard1',
      },
      {
        componentName: COMPONENT_KEYS.PRODUCTCARD2,
        filesrc: 'components/card/product-card2.tsx',
        iframeSrc: 'live-components/productcard2',
      },
      {
        componentName: COMPONENT_KEYS.PRODUCTCARD3,
        filesrc: 'components/card/product-card3.tsx',
        iframeSrc: 'live-components/productcard3',
      },
      {
        componentName: COMPONENT_KEYS.PRODUCTCARD4,
        filesrc: 'components/card/product-card4.tsx',
        iframeSrc: 'live-components/productcard4',
      },
      {
        componentName: COMPONENT_KEYS.PRODUCTCARD5,
        filesrc: 'components/card/product-card5.tsx',
        iframeSrc: 'live-components/productcard5',
      },
      {
        componentName: COMPONENT_KEYS.PRODUCTCARD6,
        filesrc: 'components/card/product-card6.tsx',
        iframeSrc: 'live-components/productcard6',
      },

      {
        componentName: COMPONENT_KEYS.SPOTLIGHT_CARD1,
        filesrc: 'components/spotlight-cards/spotlight-card1.tsx',
        iframeSrc: 'live-components/spotlight-card1',
      },
      {
        componentName: COMPONENT_KEYS.SPOTLIGHT_CARD2,
        filesrc: 'components/spotlight-cards/spotlight-card2.tsx',
        iframeSrc: 'live-components/spotlight-card2',
      },
      {
        componentName: COMPONENT_KEYS.SPOTLIGHT_CARD3,
        filesrc: 'components/spotlight-cards/spotlight-card3.tsx',
        iframeSrc: 'live-components/spotlight-card3',
      },
      {
        componentName: COMPONENT_KEYS.SPOTLIGHT_CARD4,
        filesrc: 'components/spotlight-cards/spotlight-card4.tsx',
        iframeSrc: 'live-components/spotlight-card4',
      },
    ],
    type: DOCS_CATEGORY.Card,
  },
  {
    name: DOCS_CATEGORY.Tabs,
    componentArray: [
      {
        componentName: COMPONENT_KEYS.MAINTABS,
        filesrc: 'components/tabs/preview-tab.tsx',
        iframeSrc: 'live-components/maintabs',
      },
      {
        componentName: COMPONENT_KEYS.CREATIVE_TAB,
        filesrc: 'components/tabs/home-tab.tsx',
        iframeSrc: 'live-components/creative-tab',
      },
      {
        componentName: COMPONENT_KEYS.REGISTER_TAB,
        filesrc: 'components/tabs/register-tab.tsx',
        iframeSrc: 'live-components/register-tab',
      },
      {
        componentName: COMPONENT_KEYS.MAGNIFIED_TAB,
        filesrc: 'components/tabs/magnified-tabs.tsx',
        iframeSrc: 'live-components/magnified-tab',
      },
      {
        componentName: COMPONENT_KEYS.IMAGE_TAB1,
        filesrc: 'components/tabs/img-tabs1.tsx',
        iframeSrc: 'live-components/image-tab1',
      },
      {
        componentName: COMPONENT_KEYS.IMAGE_TAB2,
        filesrc: 'components/tabs/img-tabs2.tsx',
        iframeSrc: 'live-components/image-tab2',
      },
      {
        componentName: COMPONENT_KEYS.IMAGE_TAB3,
        filesrc: 'components/tabs/img-tabs3.tsx',
        iframeSrc: 'live-components/image-tab3',
      },
    ],
    type: DOCS_CATEGORY.Tabs,
  },
];
