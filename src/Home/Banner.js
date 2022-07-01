import React from 'react';
import bannerImage from '../assets/Images/tools.jpg'

const Banner = () => {
  return (
    <div class="hero h-[75vh]" style={{backgroundImage:`url(${bannerImage})`,backgroundSize: 'cover'}}>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold text-primary">Hello there</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Banner;