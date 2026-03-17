'use client';

import { Container } from '@/components/ui/container';
import { SearchItem } from '@/components/website/searchbar';
import { basePath } from '@/components/website/sidebar';
import { DocsNavigationCategories } from '@/configs/docs';
import { ArrowBigLeft, ArrowLeft, Info } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();

  // Combine all searchable data into one array
  const searchdata: SearchItem[] = [...basePath, ...DocsNavigationCategories];

  // Get the last segment of the URL
  const lastSegment: string = pathname?.split('/').pop()?.toLowerCase() || '';

  // Function to check for matches in searchdata
  const checkForMatches = (searchTerm: string): SearchItem[] => {
    return searchdata.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
  };

  // Function to split a search term into chunks of a specific size
  const splitSearchTerms = (searchString: string, chunkSize = 4): string[] => {
    const terms: string[] = [];
    for (let i = 0; i < searchString.length; i += chunkSize) {
      terms.push(searchString.slice(i, i + chunkSize));
    }
    return terms;
  };

  // Split the last segment into substrings
  const searchTerms: string[] = splitSearchTerms(lastSegment);

  // Gather all relevant matches from the search data
  const relevantMatches: SearchItem[] = Array.from(
    new Set(searchTerms.flatMap((term) => checkForMatches(term)))
  );

  return (
    <div className='h-screen w-full'>
      <Container className='h-screen w-full'>
        <div className='flex flex-col justify-center h-full p-10'>
          <p className='text-left 2xl:text-4xl'>
            <Info className='inline-block size-8' /> Could not find{' '}
            <code className=' dark:bg-primary-foreground bg-neutral-100 border text-primary rounded-md p-2 text-lg'>
              {lastSegment}
            </code>{' '}
          </p>
          {relevantMatches.length > 0 ? (
            <div className='mt-8 '>
              <p className='py-2'>Maybe you mean:</p>
              <ul className='flex flex-wrap  items-center gap-5 text-base'>
                {relevantMatches.map((item) => (
                  <li
                    key={item.href}
                    className=' p-2 px-3 hover:bg-primary  text-blue-600 hover:underline hover:text-primary-foreground border rounded-md dark:bg-neutral-800 bg-neutral-50'
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className='mt-4'>No similar pages found.</p>
          )}
          <Link
            href='/'
            className=' mt-6 flex items-center bg-primary text-primary-foreground p-2 w-fit'
          >
            <ArrowLeft /> Return Home
          </Link>
        </div>
      </Container>
    </div>
  );
}
