import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Nav-bar/NavBar';
import Home from './components/pages/home/Home';
import Footer from './components/footer/Footer';
import Coin from './components/pages/coin/Coin';

function App() {
  return (
  
      <div className="bg-gradient-to-r from-color-one via-color-two to-color-three text-white min-h-screen font-s">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:coinId" element={<Coin />} />
        </Routes>
        <Footer />
      </div>
   
  );
}

export default App;
