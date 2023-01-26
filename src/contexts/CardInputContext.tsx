import React, { useState } from 'react';

import { ICardInputContextProps } from '@/types/contexts';

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
  error: { cardno: '', expmonth: '', expyear: '', cvc: 'cvcError' },
  errorFunc: {
    cardno: () => null,
    expmonth: () => null,
    expyear: () => null,
    cvc: () => null,
  },
  validateCardDetails: () => null,
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
  const [step, setStep] = useState(1);

  const error = {
    cardno: cardNoError,
    expmonth: expMonthError,
    expyear: expYearError,
    cvc: cvcError,
  };

  const errorFunc = {
    cardno: setCardNoError,
    expmonth: setExpMonthError,
    expyear: setExpYearError,
    cvc: setCVCError,
  };

  const validateCardDetails = (
    value: string,
    func: (message: string) => void
  ) => {
    if (value == '') {
      func("Can't be blank");
      return;
    } else if (/[a-zA-Z]/.test(value)) {
      func('Numbers only');
      return;
    } else {
      func('');
    }
  };

  return (
    <CardInputContext.Provider
      value={{
        cardName: cardName,
        cardNo: cardNo,
        expMonth: expMonth,
        expYear: expYear,
        cvc,
        step,
        setStep,
        setCardName,
        setCardNo,
        setExpMonth,
        setExpYear,
        setCVC,
        error,
        errorFunc,
        validateCardDetails,
      }}
    >
      {props.children}
    </CardInputContext.Provider>
  );
};
