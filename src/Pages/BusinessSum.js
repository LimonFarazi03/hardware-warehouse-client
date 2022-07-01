import React from 'react';
import mapImage from '../assets/Images/map.jpg';
import { GiFlyingFlag } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';
import { VscFeedback } from 'react-icons/vsc';

const BusinessSum = () => {
  return (
    <div className='my-28'>
      <h1 class="text-center text-4xl font-bold uppercase text-primary">Millions Business Trust Us</h1>
      <h1 class="text-center text-xl font-bold uppercase text-secondary mt-2 mb-8">Try to Understand user experience</h1>
      <div>
      <div class="hero h-[75vh]" style={{backgroundImage:`url(${mapImage})`,backgroundSize: 'cover'}}>
  <div class="hero-overlay bg-opacity-5"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-auto grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-[350px]">
      <div class="max-auto">
      <GiFlyingFlag className='text-[80px] text-primary'/>
      <p class="text-4xl mt-2 text-primary font-bold">1250</p>
      </div>
      <div>
      <FaUsers className='text-[80px] text-primary'/>
      <p class="text-4xl mt-2 text-primary font-bold">1250</p>
      </div>
      <div>
      <VscFeedback className='text-[80px] text-primary'/>
      <p class="text-4xl mt-2 text-primary font-bold">1250</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default BusinessSum;