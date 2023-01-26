import React from 'react';

import { useCardInputContext } from '@/hooks/contexts';

export default function CardFront() {
  const { cardName, cardNo, expMonth, expYear } = useCardInputContext();
  return (
    <div className='absolute left-32 top-40 h-72 w-4/12 rounded-2xl bg-card-front bg-cover bg-center bg-no-repeat py-8 px-20 shadow-md'>
      <div className='flex flex-col'>
        <div className='flex h-36 flex-row'>
          <div className='flex h-16 items-center space-x-4 '>
            <div className='h-14 w-14 items-center justify-center rounded-full bg-white' />
            <div className='h-6 w-6 items-center justify-center rounded-full border border-white' />
          </div>
        </div>
        <div className='flex flex-col space-y-6 '>
          <div className='flex-3 flex space-x-4 text-3xl text-white'>
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
