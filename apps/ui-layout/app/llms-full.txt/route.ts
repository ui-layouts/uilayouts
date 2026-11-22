import { llmsIndex } from '@/lib/llms-index';

export const dynamic = 'force-static';

export async function GET() {
  return new Response(await llmsIndex(true), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Robots-Tag': 'noindex, follow' },
  });
}
