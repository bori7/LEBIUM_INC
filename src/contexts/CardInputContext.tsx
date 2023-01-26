import React, { useState } from 'react';

import {
  ICardErrorFuncContext,
  ICardInputContextProps,
} from '@/types/contexts';

export const CardInputContext = React.createContext<ICardInputContextProps>({
  cardName: '',
  cardNo: '',
  expMonth: '',
  expYear: '',
  cvc: '',
  step: 1,
  setStep: () => null,
  setCardName: () => null,
  setCardNo: () => null,
  setExpMonth: () => null,
  setExpYear: () => null,
  setCVC: () => null,
  error: { cardno: '', expmonth: '', expyear: '', cvc: '' },
  // errorFunc: {
  //   cardno: () => null,
  //   expmonth: () => null,
  //   expyear: () => null,
  //   cvc: () => null,
  // },
  validateCardDetails: () => null,
  validateAllCardInputs: () => false,
  generalError: '',
});

export const CardInputContextProvider = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [cardName, setCardName] = useState('');
  const [cardNo, setCardNo] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvc, setCVC] = useState('');
  const [cardNoError, setCardNoError] = useState('');
  const [expMonthError, setExpMonthError] = useState('');
  const [expYearError, setExpYearError] = useState('');
  const [cvcError, setCVCError] = useState('');
  const [stepC, setStepC] = useState(1);
  const [generalError, setGeneralError] = useState('');

  const error = {
    cardno: cardNoError,
    expmonth: expMonthError,
    expyear: expYearError,
    cvc: cvcError,
  };

  const cardDetails = {
    cardno: cardNo,
    expmonth: expMonth,
    expyear: expYear,
    cvc: cvc,
  };

  const errorDisplay = {
    cardno: 'Card Number',
    expmonth: 'Exp. Month',
    expyear: 'Exp. Year',
    cvc: 'CVC',
  };

  const inputLen = {
    cardno: 16,
    expmonth: 2,
    expyear: 2,
    cvc: 3,
  };

  const errorFunc = {
    cardno: setCardNoError,
    expmonth: setExpMonthError,
    expyear: setExpYearError,
    cvc: setCVCError,
  };

  const setStep = (s: number) => {
    setStepC(s);
  };
  type OnlyKeys = keyof ICardErrorFuncContext;
  const validateCardDetails = (value: string, field: string) => {
    if (value == '') {
      errorFunc[field as OnlyKeys]("Can't be blank");
      return;
    } else if (/[a-zA-Z]/.test(value)) {
      errorFunc[field as OnlyKeys]('Wrong Format');
      return;
    } else {
      errorFunc[field as OnlyKeys]('');
    }
  };

  const validateAllCardInputs = () => {
    for (const k of Object.keys(error)) {
      if (error[k as OnlyKeys]) {
        // console.log('s1', 'trouble');
        setGeneralError('Invalid Inputs');
        return false;
      }
      const fieldLength = inputLen[k as OnlyKeys];
      if (fieldLength > cardDetails[k as OnlyKeys].length) {
        errorFunc[k as OnlyKeys](
          `${errorDisplay[k as OnlyKeys]} must be ${fieldLength} digits`
        );
        return false;
      }
    }
    if (!cardName || !cardNo || !expMonth || !expYear || !cvc) {
      // console.log('s2', 'trouble');
      setGeneralError('No Blank Inputs');
      return false;
    }
    setGeneralError('');
    // console.log('s', 'No trouble');
    return true;
  };

  return (
    <CardInputContext.Provider
      value={{
        cardName: cardName,
        cardNo: cardNo,
        expMonth: expMonth,
        expYear: expYear,
        cvc,
        step: stepC,
        setStep,
        setCardName,
        setCardNo,
        setExpMonth,
        setExpYear,
        setCVC,
        error,
        validateCardDetails,
        validateAllCardInputs,
        generalError,
      }}
    >
      {props.children}
    </CardInputContext.Provider>
  );
};
