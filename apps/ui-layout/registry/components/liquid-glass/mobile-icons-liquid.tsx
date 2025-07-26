import { LiquidGlassCard } from '@/components/ui/liquid-glass';
import {
  RotateCcw,
  Bell,
  Moon,
  ChevronsUpDown,
  Sun,
  VolumeX,
  Flashlight,
  Timer,
  Camera,
  CircleDot,
} from 'lucide-react';

const MobileIcons = () => {
  return (
    <>
      <div
        className='p-8 flex w-full mx-auto rounded-xl flex-wrap gap-8 items-start justify-center'
        style={{
          background:
            'url("https://images.unsplash.com/photo-1669369229708-68021c85f849?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center / cover no-repeat',
        }}
      >
        <div className='grid grid-cols-4 gap-4 p-6 rounded-3xl '>
          <LiquidGlassCard className='w-16 h-16 rounded-ful flex items-center justify-center text-white text-2xl '>
            <RotateCcw className='w-8 h-8' />
            <span className='sr-only'>Rotation Lock</span>
          </LiquidGlassCard>
          <LiquidGlassCard className='w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl '>
            <Bell className='w-8 h-8' />
            <span className='sr-only'>Notifications</span>
          </LiquidGlassCard>
          <LiquidGlassCard className='w-16 h-40 rounded-full  flex items-center justify-center text-white text-2xl row-span-2 '>
            <Sun className='w-8 h-8' />
            <span className='sr-only'>Brightness</span>
          </LiquidGlassCard>
          <LiquidGlassCard className='w-16 h-40 rounded-full  flex items-center justify-center text-white text-2xl row-span-2 '>
            <VolumeX className='w-8 h-8' />
            <span className='sr-only'>Mute Volume</span>
          </LiquidGlassCard>

          <LiquidGlassCard className='col-span-2 h-16 rounded-full flex items-center justify-center px-4 gap-2 text-white text-lg'>
            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 rounded-full flex items-center justify-center shrink-0'>
                <Moon className='w-6 h-6' />
              </div>
              <span className='font-medium'>Focus</span>
              <ChevronsUpDown className='w-5 h-5 ml-auto' />
              <span className='sr-only'>Focus Mode</span>
            </div>
          </LiquidGlassCard>

          <LiquidGlassCard className='w-16 h-16 rounded-full  flex items-center justify-center text-white text-2xl '>
            <Flashlight className='w-8 h-8' />
            <span className='sr-only'>Flashlight</span>
          </LiquidGlassCard>
          <LiquidGlassCard className='w-16 h-16 rounded-full  flex items-center justify-center text-white text-2xl '>
            <Timer className='w-8 h-8' />
            <span className='sr-only'>Timer</span>
          </LiquidGlassCard>
          <LiquidGlassCard className='w-16 h-16 rounded-full  flex items-center justify-center text-white text-2xl '>
            <Camera className='w-8 h-8' />
            <span className='sr-only'>Camera</span>
          </LiquidGlassCard>
          <LiquidGlassCard className='w-16 h-16 rounded-full  flex items-center justify-center text-white text-2xl '>
            <CircleDot className='w-8 h-8' />
            <span className='sr-only'>Record Screen</span>
          </LiquidGlassCard>
        </div>
      </div>
    </>
  );
};

export default MobileIcons;
