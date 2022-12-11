import React from 'react';

import Layout from '@/components/layout/Layout';

const Dashboard = () => {
  return (
    <Layout>
      <div className='flex h-screen flex-col bg-gradient-to-b from-coil-900 to-slate-900 text-red-500'>
        <div className='h-2/6  flex-1 bg-neutral-100'></div>
        <div className='h-4/6 flex-1 bg-current'></div>
      </div>
    </Layout>
  );
};

export default Dashboard;
