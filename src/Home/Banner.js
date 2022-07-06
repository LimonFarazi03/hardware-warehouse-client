import React from 'react';
import bannerImage from '../assets/Images/tools.jpg'

const Banner = () => {
  return (
    <div className="hero h-[75vh]" style={{backgroundImage:`url(${bannerImage})`,backgroundSize: 'cover'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
      <h1 className="mb-5 text-5xl font-bold text-primary">Search Tools.</h1>
      <input type="text" placeholder="Search" class="input rounded-lg input-bordered w-full max-w-xs" />
      <button className="mt-4 btn btn-success">Search</button>
    </div>
  </div>
</div>
  );
};

export default Banner;