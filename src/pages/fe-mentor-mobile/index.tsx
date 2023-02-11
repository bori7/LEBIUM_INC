import React, { useEffect } from 'react';

import { ParentComponentMobile } from '@/components/CardSideMobile';

import { CardInputContextProvider } from '@/contexts/CardInputContext';

const Mentor = () => {
  useEffect(() => {
    // console.log('step', step);
  });

  return (
    <CardInputContextProvider>
      <ParentComponentMobile />
    </CardInputContextProvider>
  );
};

export default Mentor;
