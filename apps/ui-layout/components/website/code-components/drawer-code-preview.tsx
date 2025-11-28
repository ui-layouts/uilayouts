// import { TabsProvider, TabsBtn, TabsContent } from './tabs';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/website/ui/tabs';

import {
  ResponsiveModal,
  ResponsiveModalContent,
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

import { highlightCode } from '@/lib/shiki-highlighter'; // <-- NEW

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

export type TCurrComponentProps = {
  componentName: string;
  iframeSrc?: string;
  componentSrc?: React.LazyExoticComponent<React.FC<{}>>;
  filesrc?: string;
  compIframeSrc?: string;
  filesArray?: any;
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

  if (!matchedComponent) {
    return <div>Component not found</div>;
  }

  const getcode = JSON.parse(Codes[0]?.props.codeblock);

  // --------------------------
  //  TSX → JS TRANSPILE
  // --------------------------
  const result = ts.transpileModule(getcode, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ESNext,
      jsx: ts.JsxEmit.Preserve,
      removeComments: true,
    },
  });

  let jsCode = result.outputText.replace(/"use strict";\s*/, '');

  const formattedJsCode = await prettier.format(jsCode, {
    parser: 'babel',
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
    printWidth: 80,
    jsxBracketSameLine: true,
  });

  const tsCode = {
    value: getcode,
    lang: 'tsx',
  };

  const jsCodeblock = {
    value: formattedJsCode,
    lang: 'js',
  };

  // --------------------------
  // SHIKI HIGHLIGHT (REPLACES CODEHIKE)
  // --------------------------
  const tsHtml = await highlightCode(tsCode.value, tsCode.lang);
  const jsHtml = await highlightCode(jsCodeblock.value, jsCodeblock.lang);

  return (
    <>
      <div
        className={`${
          isCard ? 'p-10 h-[550px]' : '2xl:p-20 py-16 px-2 h-fit'
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

        <div className='absolute top-2 right-2 flex justify-center items-center gap-2'>
          <CopyButton
            code={parsedCodeblock.codeblock}
            classname='relative top-0 left-0 dark:bg-muted bg-white'
          />

          <ResponsiveModal
            classname='max-w-(--breakpoint-lg) p-2'
            triggerContent={
              <button className='flex gap-1 bg-foreground rounded-lg h-8 px-2 dark:text-black text-white text-sm font-semibold items-center'>
                Code
                <Code className='dark:text-black text-white h-5 w-5 font-semibold' />
              </button>
            }
          >
            <ResponsiveModalContent className='2xl:max-h-[62vh] max-h-[80vh] overflow-auto'>
              <Tabs
                className='relative'
                defaultValue={`${parsedCodeblock.comName}-typescript`}
              >
                <TabsList
                  className={cn(
                    'absolute right-22 top-6 z-1 h-9 p-0.5 border dark:border-background'
                  )}
                >
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

                {/* TS VIEW */}
                <TabsContent
                  className='mt-0 p-4'
                  value={`${parsedCodeblock.comName}-typescript`}
                >
                  <CopyButton
                    code={tsCode.value}
                    classname={cn('top-6 right-10')}
                  />

                  <div
                    className='m-0 bg-codebg max-h-[450px] border rounded-md p-3 overflow-auto'
                    dangerouslySetInnerHTML={{ __html: tsHtml }}
                  />

                  {parsedCodeblock.children}
                </TabsContent>

                {/* JS VIEW */}
                <TabsContent value={`${parsedCodeblock.comName}-javascript`}>
                  <CopyButton
                    code={formattedJsCode}
                    classname={cn('top-6 right-10')}
                  />

                  <div
                    className='m-0 bg-codebg max-h-[450px] border rounded-md p-3 overflow-auto'
                    dangerouslySetInnerHTML={{ __html: jsHtml }}
                  />

                  {parsedCodeblock.children}
                </TabsContent>
              </Tabs>
            </ResponsiveModalContent>
          </ResponsiveModal>

          {/* {isEdit && (
            <SafeSuspense fallback={<LoadingFallback />}>
              <EditComponents
                baseCode={getcode}
                componentCenter={componentCenter}
              />
            </SafeSuspense>
          )} */}
        </div>
      </div>
    </>
  );
}
