import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="my-10 px-4">
      <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* <!-- Page content here --> */}
    <Outlet />
  </div> 
  <div className="drawer-side">
    <label for="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content rounded-md">
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