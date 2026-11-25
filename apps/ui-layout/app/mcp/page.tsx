import McpPage from '@/components/website/home/mcp-page';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'UI Layouts MCP Server for React and Tailwind Components',
  description:
    'Connect the UI Layouts MCP server to editors like Cursor and Claude to find React components, read the documentation, and use the source code in your app.',
  path: '/mcp',
  image: '/mcp.jpg',
});

export default function Page() {
  return <McpPage />;
}
