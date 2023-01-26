import React, { useEffect } from 'react';

import { ParentComponent } from '@/components/CardSide';

import { CardInputContextProvider } from '@/contexts/CardInputContext';

const Mentor = () => {
  useEffect(() => {
    // console.log('step', step);
  });

  return (
    <CardInputContextProvider>
      <ParentComponent />
    </CardInputContextProvider>
  );
};

export default Mentor;
