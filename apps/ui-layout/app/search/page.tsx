import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Search | UI Layouts',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim();

  if (query) {
    redirect(`/components?search=${encodeURIComponent(query)}`);
  }

  redirect('/components');
}
