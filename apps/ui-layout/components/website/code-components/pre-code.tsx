import { highlightCode } from '@/lib/shiki-highlighter';
import prettier from 'prettier';
import ts from 'typescript';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/website/ui/tabs';

import { CopyButton } from './copy-button';
import { CopyNpmCommandButton } from './copy-npm-button';
import { cn } from '@/lib/utils';

export async function PreCode({
  codeblock,
  classname,
  cssclass,
  metahide,
}: {
  codeblock: { value: string; lang: string; meta: string };
  classname?: string;
  cssclass?: string;
  metahide?: boolean;
}) {
  const { value, lang } = codeblock;
  const checkNpm = value?.startsWith('npm');
  const showCompilerTab = lang !== 'tsx';

  // --- highlight TS/TSX with shiki
  const tsHtml = await highlightCode(value, lang);

  if (showCompilerTab) {
    return (
      <div className={cn('relative z-2', cssclass)}>
        {!metahide && codeblock.meta && (
          <div className='text-left text-sm px-2 py-1 mt-3 border-dotted rounded-md w-fit'>
            {codeblock.meta}
          </div>
        )}

        <div className='relative'>
          {checkNpm ? (
            <CopyNpmCommandButton
              code={value}
              classname='top-2.5 dark:bg-neutral-800 bg-white'
            />
          ) : (
            <CopyButton code={value} classname='top-3.5 bg-white' />
          )}

          <div
            className='not-prose max-h-[550px] overflow-x-hidden rounded-md text-sm border p-0.1 dark:border-neutral-800'
            dangerouslySetInnerHTML={{ __html: tsHtml }}
          />
        </div>
      </div>
    );
  }

  // --- transpile TSX → JS
  const result = ts.transpileModule(value, {
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
  });

  const jsHtml = await highlightCode(formattedJsCode, 'js');

  return (
    <div className='relative z-2'>
      {!metahide && codeblock.meta && (
        <div className='text-left text-sm px-2 py-1 mt-3 border-dotted rounded-md bg-primary-foreground w-fit'>
          {codeblock.meta}
        </div>
      )}

      <Tabs defaultValue={'typescript'} className='relative'>
        <TabsList className='absolute dark:bg-zinc-800 right-14 top-2 z-1 h-9 p-0.5 border dark:border-background'>
          <TabsTrigger value='typescript' className='h-8'>
            Ts
          </TabsTrigger>
          <TabsTrigger value='javascript' className='h-8'>
            Js
          </TabsTrigger>
        </TabsList>

        {/* Typescript Block */}
        <TabsContent value='typescript'>
          <div className='relative'>
            <CopyButton
              code={value}
              classname='right-2 dark:bg-zinc-800 border bg-white'
            />
            <div
              className='not-prose max-h-[550px] overflow-x-hidden rounded-md text-sm border dark:border-neutral-800'
              dangerouslySetInnerHTML={{ __html: tsHtml }}
            />
          </div>
        </TabsContent>

        {/* Javascript Block */}
        <TabsContent value='javascript'>
          <div className='relative'>
            <CopyButton
              code={formattedJsCode}
              classname='right-2 dark:bg-zinc-800 border bg-white'
            />
            <div
              className='not-prose max-h-[550px] overflow-x-hidden rounded-md text-sm border dark:border-neutral-800'
              dangerouslySetInnerHTML={{ __html: jsHtml }}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
