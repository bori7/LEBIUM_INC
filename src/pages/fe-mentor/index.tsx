import React, { useEffect } from 'react';

import { useCardInputContext } from '@/hooks/contexts';

import { CardBack, CardFront, CardInput, Success } from '@/components/CardSide';

import { CardInputContextProvider } from '@/contexts/CardInputContext';

const Mentor = () => {
  const { step } = useCardInputContext();
  useEffect(() => {
    // console.log('step', step);
  });

  return (
    <CardInputContextProvider>
      <div className='flex h-screen flex-row'>
        <div className='flex w-1/3 bg-left-pane bg-cover bg-center bg-no-repeat'></div>
        <CardFront />
        <CardBack />
        <div className='ml-40 flex w-2/3 items-center justify-center '>
          {step === 1 && <CardInput />}
          {step === 2 && <Success />}
        </div>
      </div>
    </CardInputContextProvider>
  );
};

export default Mentor;
