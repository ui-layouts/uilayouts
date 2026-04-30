'use client';

import { TagsInput } from '@/components/ui/tags-input';
import React, { useEffect, useRef, useState } from 'react';

export default function App() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className='max-w-md mx-auto py-16'>
      <TagsInput tags={tags} setTags={setTags} editTag={false} className='lg:w-96' />
    </div>
  );
}
