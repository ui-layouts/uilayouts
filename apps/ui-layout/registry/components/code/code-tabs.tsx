import { CodeTabs } from '@/components/ui/code-tabs';
import React from 'react';

function CodeTabsCompponent() {
  return (
    <div className='w-full bg-background p-4 rounded-lg'>
      <CodeTabs
        tabs={[
          { id: 'npm', label: 'npm', code: 'npm i thing', lang: 'bash' },
          { id: 'pnpm', label: 'pnpm', code: 'pnpm add thing', lang: 'bash' },
          { id: 'yarn', label: 'yarn', code: 'yarn add thing', lang: 'bash' },
        ]}
        defaultValue='npm'
      />
      <CodeTabs
        tabs={[
          {
            id: 'ui-layouts',
            label: 'ui-layouts',
            code: 'npx ui-layouts add code-tabs',
            lang: 'bash',
          },
          {
            id: 'shadcn',
            label: 'shadcn',
            code: 'npx shadcn@latest add code-tabs',
            lang: 'bash',
          },
        ]}
        isLogos={true}
        defaultValue='ui-layouts'
      />
    </div>
  );
}

export default CodeTabsCompponent;
