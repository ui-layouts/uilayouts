import { CodeSurface } from './code-surface';
import styles from './code-surface.module.css';
import { TabsBtn, TabsContent, TabsProvider } from '@/components/ui/tab';
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

      <TabsProvider defaultValue="typescript" wobbly>
        <div className={styles.languages} role="group" aria-label="Code language">
          {['typescript', 'javascript'].map(language => (
            <TabsBtn key={language} value={language} className="p-0 2xl:p-0">
              <button type="button" className={styles.language}>{language === 'typescript' ? 'TS' : 'JS'}</button>
            </TabsBtn>
          ))}
        </div>

        {/* Typescript Block */}
        <TabsContent className="p-0 px-0" value='typescript'>
          <div className={styles.shell}>
            <CopyButton code={value} classname='right-2 bg-card border' />
            <CodeSurface html={tsHtml} />
          </div>
        </TabsContent>

        {/* Javascript Block */}
        <TabsContent className="p-0 px-0" value='javascript'>
          <div className={styles.shell}>
            <CopyButton
              code={formattedJsCode}
              classname='right-2 bg-card border'
            />
            <CodeSurface html={jsHtml} />
          </div>
        </TabsContent>
      </TabsProvider>
    </div>
  );
}
