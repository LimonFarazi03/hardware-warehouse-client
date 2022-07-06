import React from 'react';
import mapImage from '../assets/Images/map.jpg';
import { GiFlyingFlag } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';
import { VscFeedback } from 'react-icons/vsc';

const BusinessSum = () => {
  return (
    <div className='my-28'>
      <h1 className="text-center text-4xl font-bold uppercase text-green-400">Millions Business Trust Us</h1>
      <h1 className="text-center text-xl font-bold uppercase text-primary mt-2 mb-8">Try to Understand user experience</h1>
      <div>
      <div className="hero h-[75vh]" style={{backgroundImage:`url(${mapImage})`,backgroundSize: 'cover'}}>
  <div className="hero-overlay bg-opacity-5"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-auto grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-[350px]">
      <div className="max-auto">
      <GiFlyingFlag className='text-[80px] text-primary'/>
      <p className="text-4xl mt-2 text-primary font-bold">1250</p>
      </div>
      <div>
      <FaUsers className='text-[80px] text-primary'/>
      <p className="text-4xl mt-2 text-primary font-bold">1250</p>
      </div>
      <div>
      <VscFeedback className='text-[80px] text-primary'/>
      <p className="text-4xl mt-2 text-primary font-bold">1250</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default BusinessSum;