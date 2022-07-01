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

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;
