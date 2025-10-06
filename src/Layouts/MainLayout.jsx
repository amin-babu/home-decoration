import React from 'react';
import Navber from '../components/Navber';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navber />
      <div className='flex-1 w-11/12 max-w-screen-2xl mx-auto my-4'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;