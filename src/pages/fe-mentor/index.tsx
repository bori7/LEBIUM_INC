import React from 'react';

import { CardInput } from '@/components/CardSide';

const Mentor = () => {
  return (
    <div className='flex h-screen flex-row'>
      <div className='flex w-1/3 bg-left-pane bg-cover bg-center bg-no-repeat'></div>
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
              <p className='tracking-widest'>0000</p>
              <p className='tracking-widest'>0000</p>
              <p className='tracking-widest'>0000</p>
              <p className='tracking-widest'>0000</p>
            </div>
            <div className='mb-4 flex text-white'>
              <p className='tracking-wider'>JANE APPLESEED</p>
              <p className='ml-auto tracking-widest'>00/00</p>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-40 left-56  h-72 w-4/12 rounded-2xl bg-card-back bg-cover bg-center bg-no-repeat shadow-xl'>
        <div className='absolute top-32 right-16'>
          <p className='tracking-widest text-white'>000</p>
        </div>
      </div>
      {/* Card Side */}
      <div className='ml-40 flex w-2/3 items-center justify-center '>
        <CardInput />
      </div>
    </div>
  );
};

export default Mentor;
