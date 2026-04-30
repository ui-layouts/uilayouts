'use client';

import { MultiSelect } from '@/components/ui/multi-selector';
import { Cat, Dog, Fish, Rabbit, Turtle } from 'lucide-react';
import React, { useState } from 'react';

const frameworksList = [
  { value: 'react', label: 'React', icon: Turtle, disable: true },
  { value: 'nextjs', label: 'Nextjs', icon: Cat },
  { value: 'vue', label: 'Vue', icon: Dog },
  { value: 'svelte', label: 'Svelte', icon: Rabbit },
  { value: 'ember', label: 'Ember', icon: Fish },
];

function Home() {
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(['nextjs', 'svelte']);

  return (
    <div className='py-20 w-96 mx-auto'>
      <MultiSelect
        options={frameworksList}
        onValueChange={setSelectedFrameworks}
        defaultValue={selectedFrameworks}
        placeholder='Select frameworks'
        popoverClass='w-96'
        maxCount={3}
      />
      {/* <div className='mt-4'>
        <h2 className='text-xl font-semibold'>Selected Frameworks:</h2>
        <ul className='list-disc list-inside'>
          {selectedFrameworks.map((framework) => (
            <li key={framework}>{framework}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default Home;
