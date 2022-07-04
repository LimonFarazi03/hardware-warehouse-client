import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div class="my-10 px-4">
      <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    {/* <!-- Page content here --> */}
    <Outlet />
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content rounded-md">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="myProfile">My Profile</Link></li>
      <li><Link to="myOrders">My Orders</Link></li>
      <li><Link to="addReviews">Add Review</Link></li>
    </ul>
  
  </div>
</div>
    </div>
  );
};

export default Dashboard;