import { CodeSurface } from './code-surface';
import styles from './code-surface.module.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/website/ui/tabs';
import { highlightCode } from '@/lib/shiki-highlighter';
import { cn } from '@/lib/utils';
import prettier from 'prettier';
import ts from 'typescript';
import { CopyButton } from './copy-button';
import { CopyNpmCommandButton } from './copy-npm-button';

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
    const singleLine = !value.trimEnd().includes('\n');
    const copyPosition = singleLine ? 'top-1/2 -translate-y-1/2 bg-card' : 'top-2 bg-card';
    return (
      <div className={cn('relative z-2', cssclass)}>
        {!metahide && codeblock.meta && (
          <div className='text-left text-sm px-2 py-1 mt-3 border-dotted rounded-md w-fit'>
            {codeblock.meta}
          </div>
        )}

        <div className={styles.shell}>
          {checkNpm ? (
            <CopyNpmCommandButton code={value} classname={copyPosition} />
          ) : (
            <CopyButton code={value} classname={copyPosition} />
          )}

          <CodeSurface html={tsHtml} />
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

  const jsCode = result.outputText.replace(/"use strict";\s*/, '');

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
        <TabsList className='absolute bg-muted right-14 top-2 z-1 h-9 p-0.5 border dark:border-background'>
          <TabsTrigger value='typescript' className='h-8'>
            Ts
          </TabsTrigger>
          <TabsTrigger value='javascript' className='h-8'>
            Js
          </TabsTrigger>
        </TabsList>

        {/* Typescript Block */}
        <TabsContent value='typescript'>
          <div className={styles.shell}>
            <CopyButton code={value} classname='right-2 bg-card border' />
            <CodeSurface html={tsHtml} />
          </div>
        </TabsContent>

        {/* Javascript Block */}
        <TabsContent value='javascript'>
          <div className={styles.shell}>
            <CopyButton
              code={formattedJsCode}
              classname='right-2 bg-card border'
            />
            <CodeSurface html={jsHtml} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
