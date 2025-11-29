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

import { highlightCode } from '@/lib/shiki-highlighter';

const EditComponents = lazy(() => import('./drawer-components-edit'));

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

  // ----------- SHIKI Highlight -----------
  const tsHtml = await highlightCode(getcode, 'tsx');
  const jsHtml = await highlightCode(jsFormattedCode, 'js');

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
          classname='dark:bg-muted bg-white right-10 top-0'
        />
        {/* <ResponsiveModal classname='p-2'>
          <ResponsiveModalTrigger asChild>
            <button className='flex gap-1 rounded-lg h-8 px-2 text-sm font-semibold'>
              Code
              <Code className=' h-5 w-5' />
            </button>
          </ResponsiveModalTrigger>
          <ResponsiveModalContent className='2xl:max-h-[62vh] max-h-[80vh] overflow-auto'>
            <Tabs defaultValue={`${parsedCodeblock.comName}-typescript`}>
              <TabsList className='absolute right-24 top-6 h-9 p-0.5 border dark:border-background'>
                <TabsTrigger
                  value={`${parsedCodeblock.comName}-typescript`}
                  className='h-8'
                >
                  Ts
                </TabsTrigger>
                <TabsTrigger
                  value={`${parsedCodeblock.comName}-javascript`}
                  className='h-8'
                >
                  Js
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value={`${parsedCodeblock.comName}-typescript`}
                className='mt-0 p-4'
              >
                <CopyButton code={getcode} classname='top-6 right-10' />
                <div
                  className='bg-codebg border rounded-md p-3 max-h-[450px] overflow-auto'
                  dangerouslySetInnerHTML={{ __html: tsHtml }}
                />
              </TabsContent>

              <TabsContent value={`${parsedCodeblock.comName}-javascript`}>
                <CopyButton code={jsFormattedCode} classname='top-6 right-10' />
                <div
                  className='bg-codebg border rounded-md p-3 max-h-[450px] overflow-auto'
                  dangerouslySetInnerHTML={{ __html: jsHtml }}
                />
              </TabsContent>
            </Tabs>
          </ResponsiveModalContent>
        </ResponsiveModal> */}

        {isEdit && (
          <SafeSuspense fallback={<LoadingFallback />}>
            <EditComponents
              baseCode={getcode}
              componentCenter={componentCenter}
            />
          </SafeSuspense>
        )}
      </div>
    </div>
  );
}
