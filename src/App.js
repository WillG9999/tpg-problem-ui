import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import Map from './pages/Map/Map';
import ComponentSandbox from './pages/ComponentSandbox/ComponentSandbox';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';



function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<Map />} />
        <Route path="/Sandbox" element={<ComponentSandbox />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
