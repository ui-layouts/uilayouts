import { Block, CodeBlock, parseProps } from 'codehike/blocks';
import { z } from 'zod';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/website/ui/tabs';
import ComponentPreview from './component-preview';
import { PreCode } from './pre-code';
import { AllComponents } from '@/configs/docs';
import { Code, Eye } from 'lucide-react';
import { ReactNode } from 'react';

type TIframeCurrComponentProps = {
  componentName: string;
  iframelink?: string;
};

type IframeComponentPrieviewProps = {
  children?: ReactNode; // Include children in the props
};

const Schema = Block.extend({
  name: z.string(),
  hasReTrigger: z.boolean(),
  responsive: z.boolean().optional(),
  isFitheight: z.boolean().optional(),
  previewComp: z.boolean().optional(),
  hideDeviceOpt: z.boolean().optional(),
});
export default async function IframeComponentPrieview(
  props: unknown & IframeComponentPrieviewProps
) {
  const {
    name,
    hasReTrigger,
    responsive,
    children,
    isFitheight,
    hideDeviceOpt,
    previewComp,
  } = parseProps(props, Schema);

  const matchedComponent =
    AllComponents?.find((file) => file.componentName === name) || null;
  const currComponent = matchedComponent
    ? JSON.parse(JSON.stringify(matchedComponent))
    : null;

  console.log('component', name, currComponent);

  if (!currComponent) {
    return <div>Componentss not found</div>;
  }

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
            previewComp={previewComp}
            hideDeviceOpt={hideDeviceOpt}
            hasReTrigger={hasReTrigger}
            iframeComponent={currComponent.iframelink}
            code={''}
            responsive={responsive || false}
            isNotCopy={true}
            isFitheight={isFitheight}
          />
        </TabsContent>
        <TabsContent className='mt-11' value={`${name}code`}>
          {children}
        </TabsContent>
      </Tabs>
    </div>
  );
}
