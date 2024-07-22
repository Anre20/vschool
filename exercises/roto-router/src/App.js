import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
