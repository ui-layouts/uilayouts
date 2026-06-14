'use client';
import { type Colors, Liquid } from '@/components/ui/liquid-gradient';
import { Github, Star } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';

const COLORS: Colors = {
  color1: '#FFFFFF',
  color2: '#1E10C5',
  color3: '#9089E2',
  color4: '#FCFCFE',
  color5: '#F9F9FD',
  color6: '#B2B8E7',
  color7: '#0E2DCB',
  color8: '#0017E9',
  color9: '#4743EF',
  color10: '#7D7BF4',
  color11: '#0B06FC',
  color12: '#C5C1EA',
  color13: '#1403DE',
  color14: '#B6BAF6',
  color15: '#C1BEEB',
  color16: '#290ECB',
  color17: '#3F4CC0',
};
const GitHubButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='flex justify-center'>
      <a
        href='https://github.com/ui-layouts/uilayouts'
        target='_blank'
        className='relative p-2 inline-block w-52 h-44 mx-auto group bg-muted rounded-lg'
        rel='noreferrer noopener'
      >
        <div className='absolute w-[142.81%] h-[168.57%] -top-[2.57%] left-1/2 -translate-x-1/2 filter blur-[19px] opacity-70 rotate-45'>
          <span className='absolute inset-0 rounded-lg bg-[#d9d9d9] filter blur-[6.5px]'></span>
          <div className='relative w-full h-full overflow-hidden rounded-lg'>
            <Liquid isHovered={isHovered} colors={COLORS} />
          </div>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[96.23%] h-[98.85%] rounded-lg bg-[#010128] filter blur-[7.3px]'></div>
        <div className='relative w-full h-full overflow-hidden rounded-lg bg-card z-50'>
          <Liquid isHovered={isHovered} colors={COLORS} buttonType />
        </div>
      </a>
    </div>
  );
};

export default GitHubButton;
