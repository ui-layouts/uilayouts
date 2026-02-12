import { Suspense } from 'react';
import { CopyButton } from './copy-button';
import {
  getComponentPreview,
  getComponentCode,
} from '@/lib/component-projections';
export default function BoxComponentPreview({
  name,
  isCard,
}: {
  name: string;
  isCard?: string;
}) {
  const preview = getComponentPreview(name);
  const code = getComponentCode(name);

  if (!preview || !code) {
    return <div>Component not found</div>;
  }

  return (
    <>
      <div
        className={`${
          isCard ? 'p-10 h-[550px]' : '2xl:p-20 py-16 px-2'
        } my-2 w-full border rounded-lg overflow-hidden
            dark:bg-neutral-900 bg-neutral-100
            relative grid place-content-center`}
      >
        <div className='not-prose'>
          <Suspense fallback={<div>Loading preview...</div>}>
            <preview.componentSrc />
          </Suspense>
        </div>

        <div className='absolute top-2 right-2'>
          <CopyButton code={code.filesrc ?? ''} />
        </div>
      </div>
    </>
  );
}
