'use client';
import React, { useState, useRef, useEffect } from 'react';
import { TagsInput } from '@/components/ui/tags-input';

export default function App() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className='max-w-xl mx-auto py-16'>
      <TagsInput tags={tags} setTags={setTags} className='lg:w-96' />
      {/* <div className='mt-4'>
        <p>Current Tags:</p>
        <div className='flex gap-2 mt-2'>
          {tags.map((tag) => (
            <span
              key={tag}
              className='px-2 py-1 text-sm text-gray-700 bg-gray-200 rounded'
            >
              {tag}
            </span>
          ))}
        </div>
      </div> */}
    </div>
  );
}
