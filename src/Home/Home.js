import React from 'react';
import image from '../assets/Images/tools.jpg'
import BusinessSum from '../Pages/BusinessSum';
import Items from '../Pages/Items';
import Banner from './Banner';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Items/>
      <BusinessSum/>
    </div>
  );
};

export default Home;