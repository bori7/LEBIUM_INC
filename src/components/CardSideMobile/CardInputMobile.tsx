import React from 'react';

import { useCardInputContext } from '@/hooks/contexts';

export default function CardInputMobile() {
  const {
    cardName,
    setCardName,
    cardNo,
    setCardNo,
    expMonth,
    setExpMonth,
    expYear,
    setExpYear,
    cvc,
    setCVC,
    error,
    validateCardDetails,
    setStep,
    validateAllCardInputs,
    generalError,
  } = useCardInputContext();

  const borderStyle = (err: string) => {
    const bstyle = `border border-${err ? 'red-500' : 'purple-800'} 
    focus:border-${err ? 'red-500' : 'purple-800'}   
    focus:ring-${err ? 'red-500' : 'purple-800'}  
    active:border-${err ? 'red-500' : 'purple-800'}   
    active:ring-${err ? 'red-500' : 'purple-800'}   
    dark:border-${err ? 'red-400' : 'purple-800'}   
    dark:focus:ring-${err ? 'red-400' : 'purple-800'} 
    focus:outline-none focus:ring-5 ring-opacity-50 
    `;
    return bstyle;
  };
  return (
    <div className='h-4/7 flex flex-col 2md:max-3xl:mt-0 2md:max-3xl:w-6/12'>
      <p className='px-3 text-base text-red-600'>{generalError}</p>
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
          className={`block
          h-12 w-full rounded-lg bg-gray-50 
          p-2.5 text-lg  text-purple-900 placeholder-gray-500 placeholder-opacity-50 
           dark:bg-gray-700 dark:text-white ${borderStyle('')}
          dark:placeholder-gray-400 dark:focus:ring-button-dark_violet first-letter:dark:focus:ring-button-dark_violet`}
          placeholder='e.g. Jane Appleseed'
          required
          maxLength={24}
          value={cardName}
          onChange={(e) => {
            setCardName(e.target.value);
          }}
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
          className={`block h-12 w-full rounded-lg ${borderStyle(
            error.cardno
          )}   bg-gray-50 p-2.5
           text-lg text-purple-900 placeholder-gray-500 placeholder-opacity-50 
           dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 
           
          `}
          placeholder='e.g. 1234 5678 9123 0000'
          required
          maxLength={16}
          value={cardNo}
          onChange={(e) => {
            validateCardDetails(e.target.value?.trim(), 'cardno');
            setCardNo(e.target.value?.trim());
          }}
        />
        <p className='mt-2 text-sm text-red-600'> {error.cardno}</p>
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
            <div className=''>
              <input
                type='text'
                id='exp_date'
                className={`block h-12 w-full rounded-lg ${borderStyle(
                  error.expmonth
                )}  bg-gray-50 p-2.5 
            text-lg text-purple-900 placeholder-gray-500 placeholder-opacity-50
               dark:bg-gray-700 dark:text-white 
             dark:placeholder-gray-400  `}
                placeholder='MM'
                maxLength={2}
                required
                value={expMonth}
                onChange={(e) => {
                  setExpMonth(e.target.value?.trim());
                  validateCardDetails(e.target.value?.trim(), 'expmonth');
                }}
              />
            </div>
            <div className=''>
              <input
                type='text'
                id='exp_date'
                className={`block h-12 w-full  ${borderStyle(
                  error.expyear
                )} rounded-lg  bg-gray-50 p-2.5 text-lg 
             text-purple-900 placeholder-gray-500 placeholder-opacity-50 
               dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 
               `}
                placeholder='YY'
                required
                maxLength={2}
                value={expYear}
                onChange={(e) => {
                  setExpYear(e.target.value?.trim());
                  validateCardDetails(e.target.value?.trim(), 'expyear');
                }}
              />
            </div>
          </div>
          <p className='mt-2 text-sm text-red-600'>
            {error.expyear || error.expmonth}
          </p>
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
            className={`block h-12 w-full  ${borderStyle(
              error.cvc
            )} rounded-lg  bg-gray-50 p-2.5 text-lg
           text-purple-900 placeholder-gray-500 placeholder-opacity-50 
             dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 
           
             `}
            placeholder='e.g. 123'
            maxLength={3}
            minLength={3}
            required
            value={cvc}
            onChange={(e) => {
              setCVC(e.target.value?.trim());
              validateCardDetails(e.target.value?.trim(), 'cvc');
            }}
          />
          <p className='mt-2 text-sm text-red-600'> {error.cvc}</p>
        </div>
      </div>
      <div className='align-items-center flex justify-center p-3'>
        <button
          type='button'
          className='mb-2 w-full rounded-lg bg-button-violet px-5 py-4 text-center 
          text-sm font-medium text-white hover:bg-purple-800 focus:outline-none 
          focus:ring-4 focus:ring-purple-300 dark:bg-purple-600
           dark:hover:bg-purple-700 dark:focus:ring-purple-900'
          onClick={() => {
            if (validateAllCardInputs()) {
              setStep(2);
            }
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
