import path from 'path';
import type { Root } from 'mdast';
import createMDX from '@next/mdx';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const __dirname = process.cwd();

// Keep an authored Examples section together, including its nested headings and source tabs.
function examplesFirst() {
  return (tree: Root, file: { path?: string }) => {
    if (!file.path?.replaceAll('\\', '/').includes('/content/components/')) return;
    const nodes = tree.children;
    const start = nodes.findIndex(node => node.type === 'heading' && node.depth === 2
      && node.children.some(child => child.type === 'text' && /^examples?$/i.test(child.value.trim())));
    if (start < 0) return;
    const firstSection = nodes.findIndex(node => node.type === 'heading' && node.depth === 2);
    if (firstSection === start) return;
    const next = nodes.slice(start + 1).findIndex(node => node.type === 'heading' && node.depth <= 2);
    const examples = nodes.splice(start, next < 0 ? nodes.length - start : next + 1);
    nodes.splice(firstSection, 0, ...examples);
  };
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, examplesFirst],
    rehypePlugins: [rehypeSlug],
    jsx: true,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    rules: {
      '*.html': {
        loaders: ['raw-loader'],
        as: '*.js',
      },
    },
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  async redirects() {
    return [
      { source: '/live-components/liquid-glass-sidebar-menu', destination: '/live-components/glassformism-sidebar-menu', permanent: true },
      { source: '/live-components/liquid-glass-mobile-icons', destination: '/live-components/glassformism-mobile-icons', permanent: true },
      { source: '/live-components/liquid-glass-weather', destination: '/live-components/glassformism-weather', permanent: true },
      { source: '/live-components/liquid-glass-notification', destination: '/live-components/glassformism-notification', permanent: true },
      { source: '/components/image-effect-glass-mark', destination: '/components/liquid-glass', permanent: true },
      { source: '/live-components/image-effect-glass-mark', destination: '/live-components/liquid-glass-landscape-icons', permanent: true },
      { source: '/components/image-effect-glass-photo-controls', destination: '/components/liquid-glass', permanent: true },
      { source: '/live-components/image-effect-glass-photo-controls', destination: '/live-components/liquid-glass-photo-controls', permanent: true },
      {
        source: '/profitables',
        destination: 'https://profitables.ui-layouts.com/',
        permanent: true,
      },
      {
        source: '/components/animated-slider',
        destination: '/components/range-slider',
        permanent: true,
      },
      { source: '/components/clipPath', destination: '/components/clip-path', permanent: true },
      {
        source: '/components/bg-mesh-gradient',
        destination: '/components/mesh-gradients',
        permanent: true,
      },
      { source: '/components/3d-blob', destination: '/components/r3f-blob', permanent: true },
      { source: '/components/box-grid', destination: '/components/grid', permanent: true },
      { source: '/components/condition-grid', destination: '/components/grid', permanent: true },
      { source: '/components/normal-grid', destination: '/components/grid', permanent: true },
      { source: '/components/unsplash-grid', destination: '/components/grid', permanent: true },
      {
        source: '/components/default-marquee',
        destination: '/components/marquee',
        permanent: true,
      },
      {
        source: '/components/verticle-marquee',
        destination: '/components/marquee',
        permanent: true,
      },
      { source: '/components/marquee-3d', destination: '/components/marquee', permanent: true },
      {
        source: '/components/scroll-text-marquee-bidirectional',
        destination: '/components/scroll-text-marquee',
        permanent: true,
      },
      {
        source: '/components/scroll-text-marquee-unidirectional',
        destination: '/components/scroll-text-marquee',
        permanent: true,
      },
      {
        source: '/components/liquid-button',
        destination: '/components/liquid-gradient',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'ui-layouts.com',
          },
        ],
        destination: 'https://www.ui-layouts.com/:path*',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatars.githubusercontent.com',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'picsum.photos',
      },
      {
        hostname: 'img.freepik.com',
      },
      {
        hostname: 'pbs.twimg.com',
      },
    ],
  },
  webpack: (config: { resolve: { alias: any }; module: { rules: any } }, { isServer }: any) => {
    config.module.rules.push({
      test: /\.txt$/,
      type: 'asset/source',
    });
    config.module.rules.push({
      test: /\.[jt]sx?$/,
      resourceQuery: /raw/,
      use: 'raw-loader',
    });
    // Add path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@repo/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@repo/blocks': path.resolve(__dirname, '../../packages/blocks/src'),
      '@repo/blocks/assets': path.resolve(__dirname, '../../packages/blocks/assets'),
    };
    return config;
  },
  // Add other Next.js config options here
};
// @ts-expect-error
export default withMDX(nextConfig);
