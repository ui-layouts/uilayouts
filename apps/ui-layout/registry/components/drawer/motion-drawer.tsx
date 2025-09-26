import MotionDrawer from '@/components/ui/motion-drawer';
import React from 'react';
interface ListItem {
  name: string;
  url: string;
}
const data: ListItem[] = [
  { name: '1', url: '/private/loans' },
  { name: '2', url: '/private/cards' },
  { name: '3', url: '/private/deposits' },
  { name: '4', url: '/private/services' },
  { name: '5', url: '/private/services' },
  { name: '6', url: '/private/services' },
  { name: '7', url: '/private/services' },
];

function MotionDrawerExample() {
  return (
    <div>
      <MotionDrawer direction='left' width={300} className='text-black'>
        <nav className='space-y-4'>
          <h2 className='text-xl font-bold mb-4'>Menu</h2>
          <a href='#' className='block p-2 hover:bg-gray-100 rounded'>
            Home
          </a>
          <a href='#' className='block p-2 hover:bg-gray-100 rounded'>
            About
          </a>
          <a href='#' className='block p-2 hover:bg-gray-100 rounded'>
            Contact
          </a>
        </nav>
      </MotionDrawer>
      <h1 className='text-7xl text-center'>Motion Drawer</h1>
    </div>
  );
}

export default MotionDrawerExample;
