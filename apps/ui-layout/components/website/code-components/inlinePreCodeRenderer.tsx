import { PreCode } from './pre-code';

export async function InlinePreCodeRenderer({ children }: { children?: any }) {
  const codeElement = children?.props || {};

  const rawCode = String(codeElement.children || '');
  const lang = codeElement.className?.replace('language-', '') || 'txt';

  const codeblock = {
    value: rawCode,
    lang,
    meta: '', // future: derive meta from ```tsx !!meta
  };

  return <PreCode codeblock={codeblock} classname='my-2' />;
}
