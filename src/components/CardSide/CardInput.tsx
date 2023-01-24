import * as React from 'react';

export default function CardInput() {
  return (
    <div className='h-4/7 flex w-2/5 flex-col '>
      <div className='mb-2  p-3'>
        <label
          htmlFor='card_holder_name'
          className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
        >
          CARDHOLDER NAME
        </label>
        <input
          type='text'
          id='card_holder_name'
          className='block h-12
          w-full rounded-lg border border-gray-300 bg-gray-50
          p-2.5 text-lg  text-gray-900 placeholder-gray-500 placeholder-opacity-50 focus:border-button-dark_violet
          dark:border-button-dark_violet dark:bg-gray-700 dark:text-white
          dark:placeholder-gray-400 dark:focus:ring-button-dark_violet first-letter:dark:focus:ring-button-dark_violet'
          placeholder='e.g. Jane Appleseed'
          required
        />
      </div>
      <div className='my-3  p-3'>
        <label
          htmlFor='card_number'
          className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
        >
          CARD NUMBER
        </label>
        <input
          type='text'
          id='card_number'
          className='block h-12 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 
        text-lg text-gray-900 placeholder-gray-500 placeholder-opacity-50 focus:border-button-dark_violet
          dark:border-button-dark_violet dark:bg-gray-700 dark:text-white dark:placeholder-gray-400
          dark:focus:border-button-dark_violet'
          placeholder='e.g. 1234 5678 9123 0000'
          required
        />
      </div>
      <div className='flex space-x-3 p-3'>
        <div className='w-1/2'>
          <label
            htmlFor='exp_date'
            className='font-input mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            EXP. DATE (MM/YY)
          </label>
          <div className='flex space-x-2'>
            <input
              type='text'
              id='exp_date'
              className='block h-12 w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 
            text-lg text-gray-900 placeholder-gray-500 placeholder-opacity-50 focus:border-button-dark_violet
              dark:border-button-dark_violet dark:bg-gray-700 dark:text-white 
             dark:placeholder-gray-400 dark:focus:border-button-dark_violet '
              placeholder='MM'
              required
            />
            <input
              type='text'
              id='exp_date'
              className='block h-12 w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg 
             text-gray-900 placeholder-gray-500 placeholder-opacity-50 focus:border-button-dark_violet
              dark:border-button-dark_violet dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 
               dark:focus:ring-button-dark_violet'
              placeholder='YY'
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor='first_name'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            CVC
          </label>
          <input
            type='text'
            id='first_name'
            className='block h-12 w-full  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg
           text-gray-900 placeholder-gray-500 placeholder-opacity-50  focus:ring-button-dark_violet
            dark:border-button-dark_violet dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-button-dark_violet
             '
            placeholder='e.g. 123'
            required
          />
        </div>
      </div>
      <div className='align-items-center flex justify-center p-3'>
        <button
          type='button'
          className='mb-2 w-full rounded-lg bg-button-violet px-5 py-4 text-center text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
