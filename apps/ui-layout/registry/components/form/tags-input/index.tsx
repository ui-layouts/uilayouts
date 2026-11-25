'use client';
import { TagsInput } from '@/components/ui/tags-input';
import React, { useEffect, useRef, useState } from 'react';

export default function App() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className='mx-auto w-[calc(100%-1rem)] max-w-sm py-16'>
      <TagsInput tags={tags} setTags={setTags} />
    </div>
  );
}
