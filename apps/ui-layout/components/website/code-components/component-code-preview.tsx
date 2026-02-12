import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/website/ui/tabs';
import ComponentPreview from './component-preview';
// import { extractCodeFromFilePath } from '@/lib/code';
import React from 'react';
import { Code, Eye } from 'lucide-react';
import { PreCode } from './pre-code';
import { AllComponents } from '@/configs/docs';
import { buildFinalFiles, normalizeCodeChildren } from '@/lib/code';

type TComponentCodePreview = {
  component: React.ReactElement<any>;
  hasReTrigger?: boolean;
  name: string;
  children: React.ReactNode; //
  responsive?: boolean;
  isTab?: boolean;
  isFitheight?: boolean;
  isFit?: boolean;
  isNotCopy?: boolean;
  jsonName?: string;
};
export type TCurrComponentProps = {
  componentName: string;
  iframeSrc?: string;
  componentSrc?: React.LazyExoticComponent<React.FC<{}>>;
  filesrc?: string;
  examplePreview?: string;
  compIframeSrc?: string;
  filesArray?: any;
};

const getRaw = (v: any) => v?.default ?? v ?? '';

export default async function ComponentCodePreview({
  hasReTrigger,
  name,
  children,
  jsonName,
  responsive,
  isNotCopy = false,
  isFitheight = false,
  isFit = false,
}: TComponentCodePreview) {
  const codeBlocks = normalizeCodeChildren(children);

  const matchedComponent =
    AllComponents.find(
      (c: any) => c?.slug === name || c?.componentName === name
    ) ?? null;

  if (!matchedComponent) {
    return <div>Component not found</div>;
  }

  const normalizedFilesArray = Array.isArray(
    (matchedComponent as any).filesArray
  )
    ? (matchedComponent as any).filesArray.map((f: any) => ({
        ...f,
        filesrc: getRaw(f.filesrc),
      }))
    : undefined;

  const normalizedFileSrc = (matchedComponent as any).filesrc
    ? getRaw((matchedComponent as any).filesrc)
    : '';

  const currComponent: TCurrComponentProps & Record<string, any> = {
    ...(matchedComponent as any),
    filesrc: normalizedFileSrc,
    filesArray: normalizedFilesArray,
  };

  const finalFiles = buildFinalFiles({
    filesArray: currComponent.filesArray,
    childrenBlocks: codeBlocks,
  });

  const codeContent = { value: normalizedFileSrc, lang: 'tsx', meta: '' };
  return (
    <div className='not-prose relative z-0 flex items-center justify-between pb-3'>
      <Tabs
        defaultValue={`${name}preview`}
        className='relative mt-1 w-full rounded-lg'
      >
        <TabsList className='absolute left-0 pl-1 top-0 z-10 flex h-12 w-full justify-start rounded-b-none rounded-lg dark:bg-neutral-800'>
          <TabsTrigger
            value={`${name}preview`}
            className='flex gap-2 items-center data-[state=active]:bg-zinc-200 data-[state=active]:border-b-2 '
          >
            <Eye className='w-5 h-5' /> Preview
          </TabsTrigger>

          <TabsTrigger
            value={`${name}code`}
            className='flex gap-2 items-center data-[state=active]:bg-zinc-200 data-[state=active]:border-b-2'
          >
            <Code className='w-5 h-5' /> Code
          </TabsTrigger>
        </TabsList>

        <TabsContent
          className='px-0 pb-0 pt-12 mt-2 rounded-xl ring-offset-background'
          value={`${name}preview`}
        >
          <ComponentPreview
            hasReTrigger={hasReTrigger}
            iframeSrc={currComponent?.iframeSrc}
            componentName={currComponent?.componentName}
            code={normalizedFileSrc}
            responsive={responsive}
            isNotCopy={isNotCopy}
            jsonName={jsonName}
            isFitheight={isFitheight}
            isFit={isFit}
          />
        </TabsContent>

        <TabsContent className='mt-14' value={`${name}code`}>
          {!currComponent.filesArray?.length && (
            <PreCode codeblock={codeContent} classname='p-0' />
          )}

          {!!currComponent.filesArray?.length && (
            <TabsContent className='mt-14' value={`${name}code`}>
              {finalFiles.length === 1 ? (
                <PreCode
                  codeblock={{
                    value: finalFiles[0].value,
                    lang: finalFiles[0].lang,
                    meta: finalFiles[0].meta,
                  }}
                  classname='p-0'
                />
              ) : (
                <Tabs defaultValue={finalFiles[0].name} className='w-full'>
                  <TabsList>
                    {finalFiles.map((file) => (
                      <TabsTrigger key={file.name} value={file.name}>
                        {file.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {finalFiles.map((file) => (
                    <TabsContent key={file.name} value={file.name}>
                      <PreCode
                        codeblock={{
                          value: file.value,
                          lang: file.lang,
                          meta: file.meta,
                        }}
                        classname='p-0'
                      />
                    </TabsContent>
                  ))}
                </Tabs>
              )}
            </TabsContent>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
