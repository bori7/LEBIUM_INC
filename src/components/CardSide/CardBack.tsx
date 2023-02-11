import React from 'react';

import { useCardInputContext } from '@/hooks/contexts';

export default function CardBack() {
  const { cvc } = useCardInputContext();

  return (
    <div
      className=' absolute right-10 top-10  h-72 w-7/12 
      rounded-2xl bg-card-back  bg-cover bg-center bg-no-repeat 
      shadow-xl 2md:max-3xl:top-2/4 2md:max-3xl:left-56 2md:max-3xl:w-4/12
    '
    >
      <div className='absolute top-32 right-16'>
        <p className='uppercase tracking-widest text-white'>{cvc || '000'}</p>
      </div>
    </div>
  );
}
