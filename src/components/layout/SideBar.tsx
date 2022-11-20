import React from 'react';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';

function SideBar() {
  return (
    <div className='fixed top-10  h-screen bg-slate-800 px-6 pt-12'>
      <div className='mb-8 grid gap-4'>
        <Button className='0 h-10 w-44 rounded-md py-3 pl-4 pr-1  hover:bg-primary-400 active:bg-primary-400'>
          <div className='flex w-full  flex-row items-center   '>
            <span className=' ml-1 rounded   bg-sky-400 py-0.5 px-1 text-xs text-white'>
              @
            </span>
            <span className='grow  p-1 text-left text-xs text-white'>
              Favorites
            </span>
            <span className='flex-none rounded   bg-sky-600 py-0.5 px-1 text-xs text-white '>
              5
            </span>
          </div>
        </Button>

        <Button
          variant='outline'
          className='h-10 w-44 rounded-md  border  border-slate-600 bg-slate-800 py-3 pl-4 pr-1 shadow-2xl hover:bg-slate-700 active:bg-slate-700'
        >
          <div className='flex  flex-row items-start   '>
            <span className='flex-3 ml-1  rounded bg-slate-700  py-0.5 px-1 text-xs text-pink-500 shadow-2xl shadow-inner'>
              @
            </span>
            <span className='flex-1 p-1 text-xs text-white'>
              Recently Played
            </span>
          </div>
        </Button>
      </div>
      <div className='mb-4 flex items-center justify-center'>
        <span className='flex-1 text-base font-bold text-white'>GAMES</span>
        <span className='flex-4 mr-3 text-white'>^</span>
      </div>
      <div className='mb-5 grid gap-2 text-sm'>
        <div className='flex items-center space-x-2'>
          <span className='flex-3 text-red-400'>@</span>
          <span className='flex-1 text-xs text-gray-400'>Vegas Wheel</span>
        </div>
        <div className='flex items-center space-x-2'>
          <span className='flex-3 text-blue-400'>@</span>
          <span className='flex-1 text-xs text-gray-400'>Boorio Poker</span>
        </div>
        <div className='flex items-center space-x-2'>
          <span className='flex-3 text-pink-400'>@</span>
          <span className='flex-1 text-xs text-gray-400'>
            Hilo<span className='ml-1 text-xs text-white'>(coming soon)</span>
          </span>
        </div>
        <div className='flex items-center space-x-2'>
          <span className='flex-3 text-orange-400'>@</span>
          <span className='flex-1 text-xs text-gray-400'>
            Blackjack
            <span className='ml-1 text-xs text-white'>(coming soon)</span>
          </span>
        </div>
      </div>
      <div className='mb-4 flex items-center justify-center'>
        <span className='flex-1 text-base font-bold text-white'>SOCIAL</span>
        <span className='flex-4 mr-3 text-white'>^</span>
      </div>
      <div className='mb-4 flex items-center justify-center'>
        <span className='flex-1 text-base font-bold text-white'>
          TECHNOLOGY
        </span>
        <span className='flex-4 mr-3 text-white'>^</span>
      </div>
      <div className='mb-4 flex items-center justify-center '>
        <span className='flex-1 text-base font-bold text-white'>SUPPORT</span>
        <span className='flex-4 mr-3 text-white'>^</span>
      </div>
      <hr className='border-1 my-4 mx-auto h-px' color='black' />

      <div className='mb-4 flex items-center justify-center'>
        <span className='flex-1 text-base font-bold text-white'>LANGUAGE</span>
      </div>
      <div className='mb-4 flex w-full  items-center justify-center rounded-xl bg-slate-900 hover:border hover:border-slate-500'>
        <span className='w-3/4 px-4 py-2 text-xs text-gray-400'>
          English | USDT
        </span>
        <div className='grid w-1/4 justify-items-end p-2 '>
          <span className='mr-2  text-sm text-gray-400'>^</span>
        </div>
      </div>
      <div className='flex flex-row items-center space-x-3'>
        <div className='xs:hidden  flex items-center justify-center rounded-xl bg-slate-900'>
          <UnstyledLink
            href='#'
            className=' px-4 py-2 text-sm text-gray-400  focus:rounded-xl focus:border focus:border-blue-500 focus:bg-sky-500 focus:text-white'
          >
            &
          </UnstyledLink>
          <UnstyledLink
            href='#'
            className=' px-4 py-2 text-sm text-gray-400  focus:rounded-xl focus:border focus:border-blue-500 focus:bg-sky-500 focus:text-white'
          >
            *
          </UnstyledLink>
        </div>

        <div className='flex flex-col'>
          <span className='text-sm font-bold text-white'>Dark mode</span>
          <span className='text-xs tracking-tight text-gray-400 antialiased'>
            Currently
          </span>
        </div>
      </div>
      <hr className='border-1 my-4 mx-auto h-px' color='black' />
      <div className='mb-5  grid gap-2 text-sm'>
        <div className='mb-3 flex items-center space-x-2'>
          <span className=' text-xs text-gray-400'>
            Privacy Policy
            <span className='ml-2 text-white'>+</span>
          </span>
        </div>
        <div className='flex items-center space-x-2'>
          <span className=' text-xs text-gray-400'>Terms & Conditions</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
