import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/website/ui/tabs';

import { highlightCode } from '@/lib/shiki-highlighter';
import { PreCode } from './pre-code';

function parseMdxTabs(rawChildren: any) {
  const preArray = Array.isArray(rawChildren) ? rawChildren : [rawChildren];

  return (
    preArray
      // .filter((node: any) => node?.type === 'pre')
      .map((node: any) => {
        const codeNode = node.props.children;

        const raw = codeNode.props.children || '';
        const lang =
          codeNode.props.className?.replace('language-', '') ?? 'txt';

        // split into lines
        const lines = raw.split('\n');

        // If multiple blocks: filename = first non-empty line
        const possibleFile = lines[0].trim();
        const looksLikeFile =
          possibleFile.includes('.') && !possibleFile.includes(' ');

        const meta = looksLikeFile ? possibleFile : null;

        // code without filename line
        const code = looksLikeFile ? lines.slice(1).join('\n') : raw;

        return { meta, lang, value: code };
      })
  );
}

// --------------------------------------------
// MAIN COMPONENT
// --------------------------------------------
export default async function IframeTabCodePreview(props: any) {
  const tabs = parseMdxTabs(props.children);

  // highlight all blocks
  const highlighted = await Promise.all(
    tabs.map((t) => highlightCode(t.value, t.lang))
  );

  // --------------------------------------------
  // CASE 1: SINGLE BLOCK → NO TABS
  // --------------------------------------------
  if (tabs.length === 1) {
    return (
      <PreCode
        codeblock={{
          value: tabs[0].value,
          lang: tabs[0].lang || 'tsx',
          meta: '',
        }}
        classname='mt-4'
      />
    );
  }

  // --------------------------------------------
  // CASE 2: MULTIPLE BLOCKS → SHOW TABS
  // --------------------------------------------
  return (
    <Tabs defaultValue={tabs[0].meta}>
      <TabsList className='px-1.5 h-11 w-fit flex justify-center dark:bg-neutral-800 bg-neutral-50'>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.meta}
            value={tab.meta}
            className='text-sm flex gap-1.5 items-center'
          >
            {tab.meta}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab, i) => (
        <TabsContent key={tab.meta} value={tab.meta}>
          <PreCode
            codeblock={{
              value: tab.value,
              lang: tab.lang || 'tsx',
              meta: '',
            }}
            classname='mt-2'
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
