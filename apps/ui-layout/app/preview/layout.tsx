import { noIndexMetadata } from '@/lib/seo';

export const metadata = noIndexMetadata;

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
