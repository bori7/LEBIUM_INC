import React from 'react';

import { useCardInputContext } from '@/hooks/contexts';

export default function CardBack() {
  const { cvc } = useCardInputContext();

  return (
    <div className='absolute bottom-40 left-56  h-72 w-4/12 rounded-2xl bg-card-back bg-cover bg-center bg-no-repeat shadow-xl'>
      <div className='absolute top-32 right-16'>
        <p className='uppercase tracking-widest text-white'>{cvc || '000'}</p>
      </div>
    </div>
  );
}
