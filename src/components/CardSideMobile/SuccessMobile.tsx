import React from 'react';

import { useCardInputContext } from '@/hooks/contexts';

export default function SuccessMobile() {
  const { setStep } = useCardInputContext();
  return (
    <div className='h-4/7 flex w-2/5 flex-col p-3'>
      <div className=' mb-2  flex justify-center '>
        <div className='h-20 w-20 bg-icon-complete bg-cover bg-center bg-no-repeat' />
      </div>
      <div className='my-3 text-center'>
        <p className='font-button-violet my-4 font-space_grotesk text-3xl font-medium tracking-widest'>
          THANK YOU!
        </p>
        <p className='font-medium tracking-wide text-gray-400'>
          We've added your card details
        </p>
      </div>
      <div className='align-items-center mt-3 flex justify-center'>
        <button
          type='button'
          className='mb-2 w-full rounded-lg bg-button-violet px-5 py-4 text-center
           text-sm font-medium text-white hover:bg-purple-800 focus:outline-none 
           focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700
            dark:focus:ring-purple-900'
          onClick={() => {
            setStep(1);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
