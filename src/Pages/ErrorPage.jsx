import React from 'react';
import { useRouteError } from 'react-router';
import Navber from '../components/Navber';
import Footer from '../components/Footer';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className='flex flex-col h-screen'>
      <Navber />
      <div className='flex-1 flex items-center text-center justify-center w-11/12 mx-auto'>
        <div>
          <span className='text-7xl font-bold'>404</span> <br />
          <p className='my-2'>Page Not Found</p>
          <span>{error.message}</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;