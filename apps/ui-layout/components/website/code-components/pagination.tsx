import Link from 'next/link';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { groupedDocsNavigationCategories } from '@/lib/grouped-docs';

export function ComponentPagination({ doc }: any) {

  const flatDocsNavigationCategories = Object.values(groupedDocsNavigationCategories).flat();
  const currentIndex = flatDocsNavigationCategories.findIndex(
    (comp) => comp.href === `/components/${doc.slug}`
  );

  // Get the previous component, if it exists
  const previousComponent =
    currentIndex > 0 ? flatDocsNavigationCategories[currentIndex - 1] : null;

  // Get the next component, if it exists
  const nextComponent =
    currentIndex < flatDocsNavigationCategories.length - 1
      ? flatDocsNavigationCategories[currentIndex + 1]
      : null;

  return (
    <div className='flex flex-row items-center justify-between mt-5 mb-2'>
      {previousComponent && (
        <Link
          href={previousComponent.href}
          className='group sm:text-base text-xs relative inline-flex no-underline h-12 items-center justify-center overflow-hidden rounded-md dark:bg-zinc-900 bg-gray-100   border px-3 font-medium dark:text-white text-black transition-all duration-200 hover:translate-x-[3px] translate-x-[0px] hover:translate-y-[-3px] translate-y-[0px] hover:[box-shadow:5px_5px_rgb(28_39_56)] dark:hover:[box-shadow:-5px_5px_rgb(229_231_235)] '
        >
          <ChevronsLeft className='mr-1 h-4 w-4' />
          {previousComponent.name}
        </Link>
      )}
      {nextComponent && (
        <Link
          href={nextComponent.href}
          className='ml-auto sm:text-base text-xs relative inline-flex h-12 no-underline items-center justify-center overflow-hidden rounded-md dark:bg-zinc-900 bg-gray-100   border px-3 font-medium dark:text-white text-black transition-all duration-200 hover:translate-x-[-3px] translate-x-[0px] hover:translate-y-[-3px] translate-y-[0px] hover:[box-shadow:5px_5px_rgb(28_39_56)] dark:hover:[box-shadow:5px_5px_rgb(229_231_235)] '
        >
          {nextComponent.name}
          <ChevronsRight className='ml-1 h-4 w-4' />
        </Link>
      )}
    </div>
  );
}
