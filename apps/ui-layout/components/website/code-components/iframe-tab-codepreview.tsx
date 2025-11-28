import { z } from 'zod';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/website/ui/tabs';

import { CopyButton } from './copy-button';
import { highlightCode } from '@/lib/shiki-highlighter';

function parseMdxTabs(rawChildren: any) {
  const preArray = Array.isArray(rawChildren) ? rawChildren : [rawChildren];

  return preArray
    .filter((node: any) => node?.type === 'pre')
    .map((node: any) => {
      const codeNode = node.props.children;

      const raw = codeNode.props.children || '';
      const lang = codeNode.props.className?.replace('language-', '') ?? 'txt';

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
    });
}

// --------------------------------------------
// ENTRY FROM MDX
// --------------------------------------------
export default async function IframeTabCodePreview(props: any) {
  const tabs = parseMdxTabs(props.children);

  const highlightedHtml = await Promise.all(
    tabs.map((t) => highlightCode(t.value, t.lang))
  );

  // --------------- CASE 1: Single code block ---------------
  if (tabs.length === 1) {
    return (
      <div
        className='rounded bg-zinc-900 p-4'
        dangerouslySetInnerHTML={{ __html: highlightedHtml[0] }}
      />
    );
  }

  // --------------- CASE 2: Multiple tabs -------------------
  return (
    <Tabs defaultValue={tabs[0].meta}>
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.meta} value={tab.meta}>
            {tab.meta}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab, i) => (
        <TabsContent key={tab.meta} value={tab.meta}>
          <CopyButton code={tab.value} />
          <div
            className='rounded bg-zinc-900 p-4'
            dangerouslySetInnerHTML={{ __html: highlightedHtml[i] }}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
