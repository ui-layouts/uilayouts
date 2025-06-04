import { Block, CodeBlock, parseProps } from 'codehike/blocks';
import { Pre, RawCode, highlight } from 'codehike/code';
import { z } from 'zod';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/website/ui/tabs';
import { PreCode } from './pre-code';
import { CopyButton } from './copy-button';

const Schema = Block.extend({ tabs: z.array(CodeBlock) });

export async function CodeWithTabs(props: unknown) {
  const { tabs } = parseProps(props, Schema);
  return <CodeTabs tabs={tabs} />;
}

export async function CodeTabs(props: { tabs: RawCode[] }) {
  const { tabs } = props;
  const highlighted = await Promise.all(
    tabs.map((tab) => highlight(tab, 'github-from-css'))
  );

  return (
    <Tabs
      defaultValue={tabs[0]?.meta}
      className=' rounded-xl  bg-neutral-200 dark:bg-black/40 backdrop-blur-md border relative p-1 my-5'
    >
      <TabsList className='rounded-lg mt-1 mx-1 bg-transparent dark:bg-transparent border-0'>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.meta}
            value={tab.meta}
            className='data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 '
          >
            {tab.meta}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, i) => (
        <TabsContent
          key={tab.meta}
          value={tab.meta}
          className='mt-1 p-1 '
        >
          <CopyButton
            code={highlighted[i].code}
            classname='top-1.5 dark:bg-muted bg-white absolute right-3'
          />

          <Pre
            code={highlighted[i]}
            className='m-0 text-xl rounded-xl  bg-neutral-50 dark:bg-zinc-900'
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
