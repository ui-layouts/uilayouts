'use client';
import { TagsInput } from '@/components/ui/tags-input';
import React, { useEffect, useRef, useState } from 'react';

export default function App() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className='max-w-xl mx-auto py-16'>
      <TagsInput tags={tags} setTags={setTags} className='lg:w-96' />
    </div>
  );
}
