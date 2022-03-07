
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  
  return (

    <BrowserRouter>
    <NavBar />
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="settings" element={<Settings />} />
    <Route path="single" element={<Single />} />
    <Route path="write" element={<Write />} />



  </Routes>
  </BrowserRouter>
);
}
  
export default App;