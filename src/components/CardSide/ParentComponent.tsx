import React from 'react';

import { useCardInputContext } from '@/hooks/contexts';

import { CardBack, CardFront, CardInput, Success } from '@/components/CardSide';

export default function ParentComponent() {
  const { step } = useCardInputContext();
  return (
    <div className='flex h-screen w-screen flex-col 2md:max-3xl:flex-row'>
      <div className=' flex h-1/3 bg-left-pane bg-cover bg-center bg-no-repeat 2md:max-3xl:h-full 2md:max-3xl:w-1/3'>
        <CardBack />
        <CardFront />
      </div>

      {/* <CardFront /> */}
      <div className='flex w-full min-w-fit items-center justify-center 2md:max-3xl:ml-40 2md:max-3xl:mt-0 2md:max-3xl:w-8/12'>
        {step === 1 && <CardInput />}
        {step === 2 && <Success />}
      </div>
    </div>
  );
}
