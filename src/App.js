import './App.css';
import Home from './Pages/Home';
import { Routes, Route, Link } from "react-router-dom";
import Profile from './Pages/Profile';

function App() {
  return (
    <div>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
