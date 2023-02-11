import React from 'react';

import { useCardInputContext } from '@/hooks/contexts';

export default function CardBackMobile() {
  const { cvc } = useCardInputContext();

  return (
    <div
      className=' absolute right-4 top-10 h-44 w-10/12 rounded-2xl 
      bg-card-back bg-cover  bg-center bg-no-repeat shadow-xl 
      2md:max-3xl:top-2/4 2md:max-3xl:left-56 2md:max-3xl:h-72 2md:max-3xl:w-4/12
    '
    >
      <div className='absolute top-20 right-8 2md:max-3xl:top-32 2md:max-3xl:right-16'>
        <p className='uppercase tracking-widest text-white'>{cvc || '000'}</p>
      </div>
    </div>
  );
}
