import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        {/* <Route index element={<Home />} /> */}
        
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;