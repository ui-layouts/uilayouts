import fs from 'fs';
import path from 'path';
import { visit } from 'unist-util-visit';
import { u } from 'unist-builder';
import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';
import { remarkCodeHike, recmaCodeHike } from 'codehike/mdx';
import rehypeSlug from 'rehype-slug';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { AllComponents } from './configs/docs';

const chConfig = {
  components: { code: 'PreCode' },
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function rehypeComponent() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.type === 'mdxJsxFlowElement' && node.name === 'TabCodePreview') {
        // console.log('Found CodePreview element:', node);

        const nameAttribute = node.attributes.find(
          (attr: { name: string; }) => attr.name === 'name'
        );
        const name = nameAttribute ? nameAttribute.value : null;

        // console.log('CodePreview name:', name);

        if (!name) {
          console.log('No name found for TabCodePreview');
          return;
        }

        try {
          const currentComponentData = AllComponents.find((comp) => comp.componentName === name) || null;

          if (!currentComponentData) {
            console.error(`Component not found: ${name}`);
            return;
          }

          // console.log('Found component data:', currentComponentData);

          const filesContent =
            currentComponentData.filesArray?.map((file: { filesrc: string; name: any; }) => {
              const filePath = path.join(process.cwd(), file.filesrc);
              const source = fs.readFileSync(filePath, 'utf8');
              return {
                name: file.name,
                content: source,
                path: file.filesrc,
                componentName: currentComponentData.componentName,
              };
            }) || [];
          // console.log(filesContent);

          // console.log('Files content:', filesContent);
          // console.log('checking inner node:', node.children);

          node.children = filesContent.map((file: { content: any; name: any; componentName: any; }) =>
            u('element', {
              tagName: 'PreCode',
              properties: {
                codeblock: JSON.stringify(file.content), // Stringify the content
                filename: file.name,
                componentname: file.componentName,
              },
              children: node.children,
            })
          );

          // console.log('Updated node children:', node.children);
        } catch (error) {
          console.error(`Error processing component ${name}:`, error);
        }
      }
      if (
        node.type === 'mdxJsxFlowElement' &&
        node.name === 'DrawerCodePreview'
      ) {
        // console.log('Found CodePreview element:', node);

        const nameAttribute = node.attributes.find(
          (attr: { name: string; }) => attr.name === 'name'
        );
        const name = nameAttribute ? nameAttribute.value : null;

        // console.log('CodePreview name:', node, node.children);

        if (!name) {
          console.log('No name found for CodePreview');
          return;
        }

        try {
          const currentComponentData = AllComponents.find((comp) => comp.componentName === name) || null;

          if (!currentComponentData) {
            console.error(`Component not found: ${name}`);
            return;
          }

          // console.log('Found component data:', currentComponentData);

          const filePath = path.join(
            process.cwd(),
            `./registry/${currentComponentData.filesrc}`
          );
          const source = fs.readFileSync(filePath, 'utf8');

          // console.log('Files content:', source);
          node.children = [
            u('element', {
              tagName: 'PreCode',
              properties: {
                codeblock: JSON.stringify(source), // Stringify the content
                comName: currentComponentData.componentName,
                filesrc: currentComponentData.filesrc,
              },
              children: node.children,
            }),
          ];

          // console.log('Updated node children:', node.children);
        } catch (error) {
          console.error(`Error processing component ${name}:`, error);
        }
      }
    });
  };
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, [remarkCodeHike, chConfig]],
    recmaPlugins: [[recmaCodeHike, chConfig]],
    rehypePlugins: [rehypeSlug, rehypeComponent],
    jsx: true,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
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
  images: {
    remotePatterns: [
      {
        hostname: 'avatars.githubusercontent.com',
      },
      {
        hostname: 'res.cloudinary.com',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'img.freepik.com',
      },
    ],
  },
  webpack: (config: { resolve: { alias: any; }; }, { isServer }: any) => {
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
