import React from 'react';

import { useCardInputContext } from '@/hooks/contexts';

import {
  CardBackMobile,
  CardFrontMobile,
  CardInputMobile,
  SuccessMobile,
} from '@/components/CardSideMobile';

export default function ParentComponent() {
  const { step } = useCardInputContext();
  return (
    <div className='h-screen'>
      <div className='flex  h-screen w-screen flex-col  2md:max-3xl:flex-row'>
        <div className='flex h-1/3 w-screen  bg-left-pane bg-cover bg-center bg-no-repeat 2md:max-3xl:h-full 2md:max-3xl:w-1/3'>
          <CardBackMobile />
          <CardFrontMobile />
        </div>
        {/* <div className=' h-40 border border-purple-500'></div> */}
        {/* <CardFront /> */}
        <div className='flex w-full min-w-fit flex-col items-center justify-center pt-24  1xmd:max-2md:pt-24 2md:max-3xl:ml-40 2md:max-3xl:mt-0 2md:max-3xl:w-8/12 2md:max-3xl:pt-0'>
          {step === 1 && <CardInputMobile />}
          {/* {step === 1 && <CardInputMobile />} */}
          {/* {step === 1 && <CardInputMobile />} */}
          {step === 2 && <SuccessMobile />}
        </div>
      </div>
    </div>
  );
}
