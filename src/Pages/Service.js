import React from 'react';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { GiPriceTag } from 'react-icons/gi';

const Service = ({service}) => {
  const {des,image,minOrder,name,price} = service;
  return (
    <div className="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
  <figure><img src={image} alt="img" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-bold">{name}</h2>
    <p className='my-3'>{des.slice(0,65)}</p>
    <h2 className="card-title"><MdProductionQuantityLimits className='text-orange-700 text-xl'/> {minOrder}</h2>
    <h2 className="flex mt-0"><GiPriceTag className='mr-2 text-orange-700 text-xl'/> {price}</h2>
    <input className='mt-4 mb-2 btn' type="submit" value="Book Now" />
  </div>
</div>
  );
};

export default Service;