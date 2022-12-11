import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

// const links = [
//   { href: '/', label: 'Route 1' },
//   { href: '/', label: 'Route 2' },
// ];

export default function Header() {
  return (
    <header className=' sticky top-0 z-50    bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 px-6 py-3'>
      <div className='flex  justify-items-center '>
        <div className='mt-1.5 w-72  items-center  pl-6'>
          <UnstyledLink href='/' className='text-xl font-bold text-white'>
            LEB<span className='text-blue-500'>I</span>UM
          </UnstyledLink>
        </div>

        <div className='flex  w-full'>
          <div className=' flex w-3/4   space-x-6 '>
            <div className='xs:hidden  flex items-center justify-items-center rounded-xl bg-slate-800'>
              <UnstyledLink
                href='#'
                className='  px-4 py-2 text-xs text-gray-400  focus:rounded-xl focus:border focus:border-slate-500 focus:bg-slate-700 focus:text-white'
              >
                Gaming
              </UnstyledLink>
              <UnstyledLink
                href='#'
                className='px-4  py-2 text-xs text-gray-400  focus:rounded-xl focus:border focus:border-slate-500 focus:bg-slate-700 focus:text-white'
              >
                Support
              </UnstyledLink>
            </div>

            <div className='ml-4 flex w-64  items-center justify-center rounded-xl bg-slate-800 hover:border hover:border-slate-500'>
              {/* <UnstyledLink
                href='#'
                className='w-3/4 px-4 py-2 text-xs text-gray-400'
              >
                Search for Games
              </UnstyledLink> */}
              <input
                className='active k:border-slate-500 w-3/4 rounded-l-xl bg-slate-800 px-4  py-2 text-xs text-gray-400 hover:border hover:border-slate-500 active:border'
                placeholder=' Search for Games'
                type='text'
              />
              <div className='grid w-1/4 justify-items-end p-2 '>
                <UnstyledLink href='#' className='  text-sm text-gray-400'>
                  O
                </UnstyledLink>
              </div>
            </div>
          </div>

          <div className='flex w-72 space-x-2 '>
            <div className='items-center justify-items-center rounded-xl bg-slate-800 px-4 py-3 text-xs text-gray-400 hover:border hover:border-slate-500'>
              <UnstyledLink href='#' className='w-7/8'>
                Get Borio Tokens
              </UnstyledLink>
              <UnstyledLink href='#' className='ml-5 '>
                ^
              </UnstyledLink>
            </div>

            <UnstyledLink
              href='#'
              className='px-2 py-2 text-sm font-bold text-white'
            >
              Bori. O
            </UnstyledLink>
            <UnstyledLink href='#' className='p-2 '>
              PIC
            </UnstyledLink>
          </div>
        </div>
      </div>
    </header>
  );
}
