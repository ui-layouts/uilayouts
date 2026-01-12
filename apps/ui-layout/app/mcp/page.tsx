import React from 'react';
import McpPage from '@/components/website/home/mcp-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'UI-Layouts MCP',
    template: '%s · UI-Layouts',
  },
  metadataBase: new URL('https://ui-layouts.com/mcp'),
  description:
    'UI-Layouts MCP exposes real UI components, documentation, and source code to AI editors like Cursor and Claude, reducing hallucinations and improving AI-assisted frontend workflows.',
  keywords: [
    'UI-Layouts MCP',
    'Model Context Protocol',
    'MCP frontend',
    'AI frontend development',
    'AI code editors',
    'Cursor AI',
    'Claude AI',
    'AI IDE',
    'AI assisted coding',
    'AI UI generation',
    'frontend AI tools',
    'React component library',
    'Tailwind component library',
    'shadcn ui',
    'design system',
    'AI context protocol',
    'prevent AI hallucinations',
    'frontend workflow',
    'AI native development',
    'open source UI components',
    'React UI components',
    'Tailwind CSS components',
  ],
  authors: [
    {
      name: 'Naymur Rahman',
      url: 'https://naymur-rahman.com/',
    },
  ],
  creator: 'naymur',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ui-layouts.com/mcp',
    title: 'UI-Layouts MCP',
    description:
      'Give AI editors real UI context. UI-Layouts MCP lets tools like Cursor and Claude read components, docs, and source code instead of hallucinating UI.',
    siteName: 'UI-Layouts',
    images: [
      {
        url: 'https://ui-layouts.com/mcp.png',
        width: 1200,
        height: 630,
        alt: 'UI-Layouts MCP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI-Layouts MCP',
    description:
      'A Model Context Protocol for frontend developers. Let AI editors read real UI components and documentation.',
    images: ['https://ui-layouts.com/mcp.png'],
    creator: '@naymur_dev',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: 'https://ui-layouts.com/site.webmanifest',
};

function page() {
  return (
    <>
      <McpPage />
    </>
  );
}

export default page;
