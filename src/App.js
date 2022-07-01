import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Profile from './Pages/Profile';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import Home from './Home/Home';

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
