import { useContext } from 'react';

import { CardInputContext } from '@/contexts/CardInputContext';

export const useCardInputContext = () => useContext(CardInputContext);
