interface ComponentCodePreviewProps {
  name: string;
  classname?: string;
  tabclassname?: string;
  copyclass?: string;
}
import { getComponentCode } from '@/lib/get-component-code';
import { PreCode } from './pre-code';

export default async function CodeSnippets({
  name,
  classname = 'p-0',
  tabclassname,
  copyclass,
}: ComponentCodePreviewProps) {
  const fileContent = await getComponentCode(name);
  const codeContent = { value: fileContent, lang: 'tsx', meta: '' };

  return (
    <>
      <PreCode codeblock={codeContent} classname={classname} />
    </>
  );
}
