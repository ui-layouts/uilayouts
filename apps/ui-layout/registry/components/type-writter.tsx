import React from 'react';
import { TypeWritter } from '@/components/ui/typing-writter';

function TypeWritterDemo() {
  return (
    <div>
      <TypeWritter
        text='New Role Detected'
        charDelay={55}
        onComplete={() => {}}
      />
    </div>
  );
}

export default TypeWritterDemo;
