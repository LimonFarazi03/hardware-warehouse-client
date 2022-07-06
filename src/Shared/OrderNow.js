import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import image from '../assets/Images/tools.jpg'
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

import { toast } from 'react-toastify';

const OrderNow = (event) => {

  const [user, loading, haveError] = useAuthState(auth);
  const {id} = useParams();
  const url = `http://localhost:5000/services/${id}`
  
  const { isLoading, error, data:service,refetch } = useQuery('orderNow', () =>
     fetch(url).then(res =>
       res.json()
     )
   );
   const handleBooking = (event) =>{
    event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const productName = event.target.productName.value;
      const quantity = event.target.quantity.value;
      const address = event.target.address.value;
      if(quantity < 85){
        return toast.warn("MiniMum Order 85 Pic's")
      }else if(quantity > service.available){
        return toast.warn(`We dose not accept more then ${service.available}`)
      };
      const booking = {
        productId: service._id,
        name,
        email,
        productName,
        quantity,
        address
      }
      const url = 'http://localhost:5000/booking'
      fetch(url,{
        method:'POST',
        body: JSON.stringify(booking),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      .then(response => response.json)
      .then(data => {
        if(data){
          toast.success('successfully Order placed');
          event.target.reset();
          refetch()
        }else{
          toast.warn('something wrong')
        }
      });
      
   };
   if(isLoading){
    return <p>loading</p>
   }
  return (
    <div className="h-screen flex justify-center items-center my-28">
      <form onSubmit={handleBooking}>
      <div className="card w-96 bg-base-100 shadow-xl"> 
  <div>
    <div className="mt-2 flex justify-center">
      <img src={service.image} alt="image"/>
    </div>
  </div>
    <div className="card-body">
    <h2 className="text-center text-2xl uppercase">You are Ordering for <span className="font-bold text-primary">{service.name}</span></h2>
    {/* Name */}
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input name="name" disabled type="text" value={user?.displayName} className="input input-bordered w-full max-w-xs" />
  <label className="label">
    <span className="label-text-alt">Alt label</span>
  </label>
</div>
{/* Email */}
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input name="email" disabled type="email" value={user?.email} className="input input-bordered w-full max-w-xs" />
</div>
{/* Product Name */}
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Product Name</span>
  </label>
  <input name="productName" disabled type="text" value={service.name} className="input input-bordered w-full max-w-xs" />
</div>
{/* Quantity */}
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Quantity</span>
  </label>
  <input required name="quantity" type="number" placeholder="How much you want to order" className="input input-bordered w-full max-w-xs" />
  <label className="label">
    <span className="label-text text-red-500">* Minimum Order 85 pic's or above</span>
  </label>
</div>
{/* textarea  */}
<textarea required name="address" className="bg-gray-100 p-1 mt-2 rounded" placeholder="Address.." cols="20" rows="4"></textarea>
{/* Button */}
  <input className="btn btn-success mt-2" type="submit" value="Place Order" />
  </div>
</div>
      </form>
    </div>
  );
};

export default OrderNow;