import React from 'react';
import { PreCoded } from './pre-coded';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/website/ui/tabs';
import { PreCode } from './pre-code';

interface CodePreviewProps {
  children: React.ReactNode;
}

export default function TabCodePreview({ children }: CodePreviewProps) {
  const Codes = React.Children.toArray(children) as React.ReactElement<any>[];

  const parsedCodes = Codes.map((code: React.ReactElement<any>) => {
    const props = code.props;

    return {
      ...code,
      props: {
        ...props,
        codeblock: JSON.parse(props.codeblock),
      },
    };
  });

  const formatParseCodes = (children: any, compname: string) => {
    if (!children) return [];

    const parsedArray = Array.isArray(children) ? children : [children];

    return parsedArray.map((child: any) => ({
      $$typeof: child.$$typeof,
      type: child.type,
      key: child.key,
      ref: child.ref,
      props: {
        codeblock: child.props.codeblock.value,
        filename: child.props.codeblock.meta,
        componentname: compname,
        lang: child.props.codeblock.lang,
      },
      _owner: child._owner,
      _store: child._store,
    }));
  };

  const formattedCodes = formatParseCodes(
    parsedCodes[0]?.props.children,
    Codes[0]?.props.componentname
  );
  const updatedCodes = [...parsedCodes, ...formattedCodes];

  return (
    <>
      <Tabs
        defaultValue={`${updatedCodes[0]?.props.componentname}-${updatedCodes[0]?.props.filename}`}
        className='w-full relative mt-1 mb-4'
      >
        <TabsList className='mb-0  bg-muted px-0.5'>
          {updatedCodes.map((componentName) => (
            <TabsTrigger
              key={`${componentName.props.componentname}-${componentName.props.filename}`}
              value={`${componentName.props.componentname}-${componentName.props.filename}`}
              className='flex gap-2 items-center data-[state=active]:bg-white m-0 not-prose'
            >
              {componentName.props.filename}
            </TabsTrigger>
          ))}
        </TabsList>
        {updatedCodes.map((componentName) => (
          <TabsContent
            key={`${componentName.props.componentname}-${componentName.props.filename}`}
            value={`${componentName.props.componentname}-${componentName.props.filename}`}
            className='m-0'
          >
            <PreCode
              classname='p-0 '
              codeblock={{
                value: componentName?.props.codeblock,
                lang: componentName?.props.lang || 'tsx',
                meta: '',
              }}
              cssclass='mt-2'
            />
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
