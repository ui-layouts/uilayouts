'use client';

import { TagsInput } from '@/components/ui/tags-input';
import React, { useState, useRef, useEffect } from 'react';

export default function HomeYouutbTags() {
  const [tags, setTags] = useState<string[]>(['ui-layouts']);

  return (
    <div className='w-[90%] flex flex-col justify-center h-full mx-auto sm:py-0 py-6 '>
      <TagsInput tags={tags} setTags={setTags} editTag={false} />
  
    </div>
  );
}
