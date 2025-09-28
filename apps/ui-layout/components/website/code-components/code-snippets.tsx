interface ComponentCodePreviewProps {
  name: string;
  classname?: string;
  tabclassname?: string;
  copyclass?: string;
}
import { getComponentCode } from '@/lib/get-component-code';
import { PreCoded } from './pre-coded';

export default async function CodeSnippets({
  name,
  classname = 'p-0',
  tabclassname,
  copyclass,
}: ComponentCodePreviewProps) {
  const fileContent = await getComponentCode(name);

  return (
    <>
      <PreCoded
        codeblock={fileContent}
        classname={classname}
        tabclassname={tabclassname}
        copyclass={copyclass}
      />
    </>
  );
}
