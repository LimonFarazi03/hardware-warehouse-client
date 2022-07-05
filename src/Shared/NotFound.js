import React from 'react';
import notFound from '../assets/Images/notFound.gif';

const NotFound = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <img src={notFound} alt="Notfound"/>
    </div>
  );
};

export default NotFound;