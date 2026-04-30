'use client';

import React, { useEffect, useRef, useState } from 'react';
import { TagsInput } from '@/components/ui/tags-input';

export default function App() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className='max-w-md mx-auto py-16'>
      <TagsInput tags={tags} setTags={setTags} editTag={false} className='lg:w-96' />
    </div>
  );
}
