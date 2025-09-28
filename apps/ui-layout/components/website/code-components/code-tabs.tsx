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
  console.log(tabs);
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
            className='data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 gap-1'
          >
            {tab.meta === 'ui-layouts' ? (
              <>
                <svg
                  width='238'
                  height='264'
                  viewBox='0 0 238 264'
                  fill='none'
                  className='size-4'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M130 0C146.292 0 159.5 13.2076 159.5 29.5V39.5C159.5 55.2401 172.26 68 188 68H208C224.292 68 237.5 81.2076 237.5 97.5V234.5C237.5 250.792 224.292 264 208 264H105C88.7076 264 75.5 250.792 75.5 234.5V226.5C75.5 210.76 62.7401 198 47 198H29.5C13.2076 198 0 184.792 0 168.5V29.5C0 13.2076 13.2076 0 29.5 0H130ZM86 78C81.5817 78 78 81.5817 78 86V191C78 195.418 81.5817 199 86 199H158C162.418 199 166 195.418 166 191V86C166 81.5817 162.418 78 158 78H86Z'
                    fill='currentColor'
                  />
                </svg>

                {tab.meta}
              </>
            ) : (
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 256 256'
                  width='70'
                  height='70'
                  className='size-4'
                  fill='none'
                >
                  <rect width='256' height='256' fill='none'></rect>
                  <line
                    x1='208'
                    y1='128'
                    x2='128'
                    y2='208'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='32'
                  ></line>
                  <line
                    x1='192'
                    y1='40'
                    x2='40'
                    y2='192'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='32'
                  ></line>
                </svg>
                {tab.meta}
              </>
            )}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, i) => (
        <TabsContent key={tab.meta} value={tab.meta} className='mt-1 p-1 '>
          <CopyButton
            code={highlighted[i].code}
            classname='top-1.5 dark:bg-zinc-900 border bg-white absolute right-3'
          />

          <Pre
            code={highlighted[i]}
            className='m-0 text-xl rounded-xl bg-neutral-50 dark:bg-zinc-900'
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
