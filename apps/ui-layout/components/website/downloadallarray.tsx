import {
  AllComponents,
  DocsNavigationCategories,
} from '@/configs/docs';
import React from 'react';
import { Button } from './ui/button';

const MainComponentsDownloader: React.FC = () => {
  const processData = () => {
    const updatedMainComponents = DocsNavigationCategories.map((mainComponent) => {
      const matchingAllComponents = AllComponents.filter(
        (allComponent) =>
          allComponent.category === mainComponent.key
      );

      if (matchingAllComponents.length > 0) {
        const allTags = new Set(
          matchingAllComponents.flatMap((comp) => comp.tags || [])
        );

        // Add some relevant general tags based on the component category

        //@ts-ignore
        switch (mainComponent.component) {
          case 'Form':
            allTags.add('form component');
            allTags.add('input');
            allTags.add('user interface');
            break;
          case 'Card':
            allTags.add('ui card');
            allTags.add('component');
            allTags.add('design');
            break;
          case 'Animation':
            allTags.add('animation');
            allTags.add('motion');
            allTags.add('interactive');
            break;
          // Add more cases for other component types as needed
        }

        return {
          ...mainComponent,
          tags: Array.from(allTags),
        };
      }

      return mainComponent;
    });

    return updatedMainComponents;
  };

  const downloadData = () => {
    const updatedData = processData();
    const fileContent = `
import { MainComponent } from './types';

export const MainComponents: MainComponent[] = ${JSON.stringify(
      updatedData,
      null,
      2
    )};
    `.trim();

    const blob = new Blob([fileContent], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.tsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className='h-fit'>
      <Button onClick={downloadData}>Download Updated MainComponents</Button>
    </div>
  );
};

export default MainComponentsDownloader;
