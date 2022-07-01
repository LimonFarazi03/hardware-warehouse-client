import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/Images/logo.png'; 

const Navbar = () => {
  return (
    <div class="navbar bg-base-100">
  <div class="flex-1">
    <Link to='/' class="btn btn-ghost normal-case text-xl">
      <img width={'42px'} src={logo} alt="" />
    </Link>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><Link to="##">Blogs</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </div>
</div>
  );
};

export default Navbar;