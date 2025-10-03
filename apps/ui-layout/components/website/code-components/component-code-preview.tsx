import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/website/ui/tabs';
import ComponentPreview from './component-preview';
import { extractCodeFromFilePath } from '@/lib/code';
import React from 'react';
import { Code, Eye } from 'lucide-react';
import { PreCoded } from './pre-coded';
import { AllComponents } from '@/configs/docs';

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

export default async function ComponentCodePreview({
  hasReTrigger,
  name,
  children,
  jsonName,
  responsive,
  isTab = false,
  isNotCopy = false,
  isFitheight = false,
  isFit = false,
}: TComponentCodePreview) {
  const matchedComponent =
    AllComponents?.find((file) => file.componentName === name) || null;
  const currComponent = matchedComponent
    ? JSON.parse(JSON.stringify(matchedComponent))
    : null;

  if (!currComponent) {
    return <div>Componendt not found</div>;
  }

  const fileContent = extractCodeFromFilePath(
    `registry/${currComponent?.filesrc}`
  );

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
            component={currComponent}
            code={fileContent}
            responsive={responsive}
            isNotCopy={isNotCopy}
            jsonName={jsonName}
            isFitheight={isFitheight}
            isFit={isFit}
          />
        </TabsContent>
        <TabsContent className='mt-14' value={`${name}code`}>
          {!isTab && <PreCoded codeblock={fileContent} classname='p-0' />}
          {children !== undefined && <div>{children}</div>}
        </TabsContent>
      </Tabs>
    </div>
  );
}
