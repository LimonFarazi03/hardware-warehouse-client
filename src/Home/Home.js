import React from 'react';
import image from '../assets/Images/tools.jpg'
import BusinessSum from '../Pages/BusinessSum';
import Items from '../Pages/Items';
import Reviews from '../Pages/Reviews';
import Banner from './Banner';

const Home = () => {
  return (
    <div>
      <Banner />
      <Items />
      <BusinessSum />
      <Reviews />
    </div>
  );
};

export default Home;