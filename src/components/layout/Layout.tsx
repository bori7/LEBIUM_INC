import React from 'react';

import Header from '@/components/layout/Header';
import SideBar from '@/components/layout/SideBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='h-full '>
      <Header />
      <div className='flex h-full flex-row '>
        <SideBar />

        <div className='ml-56 h-full w-full'>{children}</div>
      </div>
    </div>
  );
}
