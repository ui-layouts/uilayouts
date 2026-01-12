import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/website/ui/tabs';
import { highlightCode } from '@/lib/shiki-highlighter';
import { CopyButton } from './copy-button';

export default async function CodeWithTabs({ children }: any) {
  // console.log('children', children);

  const blocks = Array.isArray(children) ? children : [children];
  // console.log('blocks', blocks);

  // Extract raw code + language
  const parsed = blocks
    // .filter((n: any) => n?.type === 'pre')
    .map((node: any) => {
      const codeNode = node.props.children;
      return {
        value: codeNode.props.children || '',
        lang: codeNode.props.className?.replace('language-', '') || 'txt',
      };
    });

  // console.log('parsed', parsed);

  // Highlight everything
  const highlighted = await Promise.all(
    parsed.map((t) => highlightCode(t.value, t.lang))
  );

  // -------------------------
  // CASE 1 — Only one block
  // -------------------------
  if (parsed.length === 1) {
    return (
      <div
        className='rounded bg-zinc-900 p-4'
        dangerouslySetInnerHTML={{ __html: highlighted[0] }}
      />
    );
  }

  // -------------------------
  // CASE 2 — Always two blocks → fixed tabs
  // -------------------------
  const tabs = [
    { meta: 'ui-layouts', html: highlighted[0], code: parsed[0].value },
    { meta: 'shadcn', html: highlighted[1], code: parsed[1].value },
  ];

  return (
    <Tabs
      defaultValue='ui-layouts'
      className='rounded-xl bg-codebg dark:border-neutral-800 backdrop-blur-md border relative p-1 my-5'
    >
      <TabsList className='rounded-lg mt-1 mx-1 dark:bg-transparent bg-transparent border-0'>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.meta}
            value={tab.meta}
            className='data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 gap-1 data-[state=active]:border'
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
                ui-layouts
              </>
            ) : (
              <>
                <svg viewBox='0 0 256 256' className='size-4' fill='none'>
                  <line
                    x1='208'
                    y1='128'
                    x2='128'
                    y2='208'
                    stroke='currentColor'
                    strokeWidth='32'
                  />
                  <line
                    x1='192'
                    y1='40'
                    x2='40'
                    y2='192'
                    stroke='currentColor'
                    strokeWidth='32'
                  />
                </svg>
                shadcn
              </>
            )}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent
          key={tab.meta}
          value={tab.meta}
          className='mt-1 border-none'
        >
          <CopyButton
            code={tab.code}
            classname='top-1.5 border bg-white absolute right-3'
          />
          <div
            className='cliblocks rounded-xl p-1 px-2 border-none'
            dangerouslySetInnerHTML={{ __html: tab.html }}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
