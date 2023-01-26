import React from 'react';

import { useCardInputContext } from '@/hooks/contexts';

import { CardBack, CardFront, CardInput, Success } from '@/components/CardSide';

export default function ParentComponent() {
  const { step } = useCardInputContext();
  return (
    <div className='flex h-screen flex-row'>
      <div className='flex w-1/3 bg-left-pane bg-cover bg-center bg-no-repeat'></div>
      <CardFront />
      <CardBack />
      <div className='ml-40 flex w-2/3 items-center justify-center '>
        {step === 1 && <CardInput />}
        {step === 2 && <Success />}
      </div>
    </div>
  );
}
