import { LiquidGlassCard } from '@/components/ui/liquid-glass';
import { cn } from '@/lib/utils';

import {
  Bell,
  Search,
  BarChart2,
  Settings,
  Home,
} from 'lucide-react';

const SidebarMenu = ({className}:{className?:string}) => {
  return (
    <>
      <div
        className={cn('p-8 flex w-full py-20 rounded-xl items-center justify-center',className)}
        style={{
          background:
            'url("https://images.unsplash.com/photo-1752440093057-1c188e7137e9?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center / cover no-repeat',
        }}
      >
        <LiquidGlassCard glowIntensity="sm" shadowIntensity="sm" borderRadius="12px" blurIntensity="sm" draggable className='p-4 w-[280px]'>
          <nav className='space-y-2 w-full relative z-30 '>
            <button
              className='w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white text-gray-800 font-medium transition-colors hover:bg-gray-100'
              aria-current='page'
            >
              <Home className='w-5 h-5' />
              <span>Dashboard</span>
            </button>

            <button
              className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium transition-colors hover:bg-white/20'
            >
              <Search className='w-5 h-5' />
              <span>Search</span>
            </button>

            <button
              className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium transition-colors hover:bg-white/20'
            >
              <BarChart2 className='w-5 h-5' />
              <span>Sales Analytics</span>
            </button>

            <button
              className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium transition-colors hover:bg-white/20'
            >
              <Bell className='w-5 h-5' />
              <span>Notification</span>
            </button>

            <button
              className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium transition-colors hover:bg-white/20'
            >
              <Settings className='w-5 h-5' />
              <span>Account Settings</span>
            </button>
          </nav>
        </LiquidGlassCard>
      </div>
    </>
  );
};

export default SidebarMenu;
