import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Profile from './Pages/Profile';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import Home from './Home/Home';
import Login from './Shared/Login';
import Signup from './Shared/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard';
import AddReview from './Pages/AddReview';
import MyOrders from './Pages/MyOrders';
import MyProfile from './Pages/MyProfile';
import Purchase from './Shared/Purchase';
import OrderNow from './Shared/OrderNow';
import RequireAuth from './Shared/RequireAuth';
import NotFound from './Shared/NotFound';
import Blogs from './Pages/Blogs';

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
          } />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="purchase" element={<RequireAuth><Purchase /></RequireAuth>} />
          <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
            <Route path="addReviews" element={<AddReview />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="myOrders/:id" element={<OrderNow />} />
            <Route path="myProfile" element={<MyProfile />} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;
