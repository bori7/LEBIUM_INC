export interface ICardInputContextProps {
  cardName: string;
  cardNo: string;
  expMonth: string;
  expYear: string;
  cvc: string;
  step: number;
  setStep: (step: number) => void;
  setCardName: (cardName: string) => void;
  setCardNo: (cardNo: string) => void;
  setExpMonth: (expMonth: string) => void;
  setExpYear: (expYear: string) => void;
  setCVC: (cvc: string) => void;
  error: ICardErrorContext;
  // errorFunc: ICardErrorFuncContext;
  validateCardDetails: (value: string, field: string) => void;
  validateAllCardInputs: () => boolean;
  generalError: string;
}

export interface ICardErrorContext {
  cardno: string;
  expmonth: string;
  expyear: string;
  cvc: string;
}

export interface ICardErrorFuncContext {
  cardno: (cardno: string) => void;
  expmonth: (expmonth: string) => void;
  expyear: (expyear: string) => void;
  cvc: (cvc: string) => void;
}
