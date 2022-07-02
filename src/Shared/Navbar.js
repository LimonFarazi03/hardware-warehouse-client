import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/Images/logo.png'; 
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';


const Navbar = () => {
  // Have User
  const [user, loading, error] = useAuthState(auth);
  // SignOut
  const logout = () => {
    signOut(auth);
    toast.success('LogOut successfully')
  };
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-xl">
      <img width={'42px'} src={logo} alt="" />
    </Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="##">Blogs</Link></li>
      {user ? <button onClick={logout} className="btn btn-ghost"><p>LogOut</p></button>:<li><Link  className="btn btn-ghost" to="/login">Login</Link></li>}
    </ul>
  </div>
</div>
  );
};

export default Navbar;