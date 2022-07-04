import React from 'react';
import { useQuery } from 'react-query'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyOrders = () => {

  const [user, loading, haveError] = useAuthState(auth);

  const url = `http://localhost:5000/myOrders?email=${user.email}`;
  const { isLoading, error, data:services, refetch } = useQuery('myOrder', () =>
     fetch(url).then(res =>
       res.json()
     )
   );

   if(isLoading){
    return <div className="flex h-screen justify-center items-center">
    <button className='btn loading'>Please Wait</button>
    </div>
   };

  return (
    <div>
    <h2 className="text-2xl text-center mt-2 mb-5 font-bold">My Orders: {services.length}</h2>
      <div className="px-3">
      <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>User Name</th>
        <th>Product Name</th>
        <th>Quality</th>
        <th>Address</th>
        <th>Payment Details</th>
      </tr>
    </thead>
    <tbody>
      {
        services.map((service,index) => <tr class="hover">
        <th>{index+1}</th>
        <td>{user?.displayName}</td>
        <td>{service.productName}</td>
        <td class="font-bold">{service.quantity}</td>
        <td>{service.address}</td>
        <td><button className="btn btn-sm btn-success">Pay now</button></td>
      </tr>)
      }
    </tbody>
  </table>
</div>
    </div>
    </div>
  );
};

export default MyOrders;