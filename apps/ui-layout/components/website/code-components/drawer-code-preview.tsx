import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/website/ui/tabs';

import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalTrigger,
} from '@/components/ui/responsive-modal';

import React, { lazy } from 'react';
import { Code } from 'lucide-react';
import prettier from 'prettier';
import ts from 'typescript';

import { CopyButton } from './copy-button';
import ComponentBlocks from './component-block';
import { cn } from '@/lib/utils';
import { SafeSuspense } from '@/lib/safeSuspense';
import { Button } from '../ui/button';
import { AllComponents } from '@/configs/docs';

const LoadingFallback = () => (
  <div className='fixed bottom-4 right-4 z-50'>
    <Button variant='outline' size='icon' disabled className='animate-pulse'>
      Loading...
    </Button>
  </div>
);

type ComponentCodePreview = {
  component: React.ReactElement<any>;
  hasReTrigger?: boolean;
  name: string;
  children: React.ReactNode;
  responsive?: boolean;
  componentCenter?: boolean;
  isEdit?: boolean;
  isCard?: string;
};

export default async function DrawerCodePreview({
  hasReTrigger,
  name,
  children,
  isCard,
  responsive,
  isEdit = true,
  componentCenter = false,
}: ComponentCodePreview) {
  const Codes = React.Children.toArray(children) as React.ReactElement<any>[];
  const parsedCodeblock = Codes[0]?.props;

  const matchedComponent =
    AllComponents?.find((file) => file.componentName === name) || null;

  if (!matchedComponent) return <div>Component not found</div>;

  const getcode = JSON.parse(parsedCodeblock.codeblock);

  // ----------- TSX → JS Compile -----------
  const result = ts.transpileModule(getcode, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ESNext,
      jsx: ts.JsxEmit.Preserve,
      removeComments: true,
    },
  });

  const jsFormattedCode = await prettier.format(
    result.outputText.replace(/"use strict";\s*/, ''),
    {
      parser: 'babel',
      semi: true,
      singleQuote: true,
      trailingComma: 'es5',
      printWidth: 80,
    }
  );

  return (
    <div
      className={`${
        isCard ? 'p-10 h-[550px]' : '2xl:p-20 py-16 px-2'
      } my-2 w-full border-2 rounded-lg overflow-hidden
        dark:bg-[#020203]
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),
        linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
        bg-size-[20px_20px]
        relative grid place-content-center`}
    >
      <div className='not-prose'>
        <ComponentBlocks componentfile={parsedCodeblock.filesrc} />
      </div>

      <div className='absolute top-2 right-2 flex items-center gap-2'>
        <CopyButton
          code={parsedCodeblock.codeblock}
          classname='bg-white right-10 top-0'
        />

        {isEdit && (
          <SafeSuspense fallback={<LoadingFallback />}>
            {/* <EditComponents
              baseCode={getcode}
              componentCenter={componentCenter}
            /> */}
          </SafeSuspense>
        )}
      </div>
    </div>
  );
}
