'use client';
import React, { useState } from 'react';
import { TypeWritter } from '@/components/ui/typing-writter';

function TypeWritterDemo() {
  const [key, setKey] = useState(0);

  const handleComplete = () => {
    console.log('Typing complete');
    setKey((prev) => prev + 1);
  };

  return (
    <div>
      <TypeWritter
        key={key}
        text='New Role Detected'
        charDelay={55}
        onComplete={handleComplete}
      />
    </div>
  );
}

export default TypeWritterDemo;
