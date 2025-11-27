'use client';
import React, { useState, useRef, useEffect } from 'react';
import { TagsInput } from '@/components/ui/tags-input';

export default function App() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className='max-w-xl mx-auto py-16'>
      <TagsInput tags={tags} setTags={setTags} className='lg:w-96' />
    </div>
  );
}
