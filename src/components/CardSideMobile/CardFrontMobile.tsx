import React from 'react';

import { useCardInputContext } from '@/hooks/contexts';

export default function CardFrontMobile() {
  const { cardName, cardNo, expMonth, expYear } = useCardInputContext();
  return (
    <div
      className='absolute left-5 right-4 top-40 h-48 w-10/12 rounded-2xl bg-card-front bg-cover bg-center bg-no-repeat p-4 
      shadow-md 2md:max-3xl:left-32 2md:max-3xl:top-40 2md:max-3xl:h-72 2md:max-3xl:w-4/12 2md:max-3xl:py-8 2md:max-3xl:px-20'
    >
      <div className='flex flex-col'>
        <div className='flex h-20 flex-row 2md:max-3xl:h-36'>
          <div className='flex h-16 items-center space-x-4 '>
            <div className='h-10 w-10 items-center justify-center rounded-full bg-white 2md:max-3xl:h-14 2md:max-3xl:w-14' />
            <div className='h-4 w-4 items-center justify-center rounded-full border border-white 2md:max-3xl:h-6 2md:max-3xl:w-6' />
          </div>
        </div>
        <div className='flex flex-col space-y-6 '>
          <div className='flex-3 mx-2 flex space-x-3 pr-3 text-xl text-white 2md:max-3xl:text-3xl'>
            <p className='uppercase tracking-widest'>
              {cardNo.slice(0, 4) || '0000'}
            </p>
            <p className='uppercase tracking-widest'>
              {cardNo.slice(4, 8) || '0000'}
            </p>
            <p className='uppercase tracking-widest'>
              {cardNo.slice(8, 12) || '0000'}
            </p>
            <p className='uppercase tracking-widest'>
              {cardNo.slice(12) || '0000'}
            </p>
          </div>
          <div className='mb-4 flex text-white'>
            <p className='uppercase tracking-wider'>
              {cardName || 'JANE APPLESEED'}
            </p>
            <p className='ml-auto uppercase tracking-widest'>{`${
              expMonth || '00'
            }/${expYear || '00'}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
