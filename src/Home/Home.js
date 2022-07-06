import React from 'react';
import image from '../assets/Images/tools.jpg'
import BusinessSum from '../Pages/BusinessSum';
import Items from '../Pages/Items';
import Reviews from '../Pages/Reviews';
import Support from '../Pages/Support';
import Banner from './Banner';

const Home = () => {
  return (
    <div>
      <Banner />
      <Items />
      <BusinessSum />
      <Support />
      <Reviews />
    </div>
  );
};

export default Home;