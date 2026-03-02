import path from 'path';
import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';
import rehypeSlug from 'rehype-slug';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
    jsx: true,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    turbo: {
      rules: {
        '*.html': {
          loaders: ['raw-loader'],
          as: '*.js',
        },
      },
    },
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  async redirects() {
    return [
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
  webpack: (
    config: { resolve: { alias: any }; module: { rules: any } },
    { isServer }: any
  ) => {
    config.module.rules.push({
      test: /\.txt$/,
      type: 'asset/source',
    });
    config.module.rules.push({
      test: /\.tsx?$/,
      resourceQuery: /raw/,
      use: 'raw-loader',
    });
    // Add path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@repo/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@repo/blocks': path.resolve(__dirname, '../../packages/blocks/src'),
      '@repo/blocks/assets': path.resolve(
        __dirname,
        '../../packages/blocks/assets'
      ),
    };
    return config;
  },
  // Add other Next.js config options here
};

export default withMDX(nextConfig);
