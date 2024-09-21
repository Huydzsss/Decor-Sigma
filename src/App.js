import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import LoginResgister from './components/Login/LoginResgister';
import Shop_cart from './components/Cart/Shop_cart';
import ProductD from './components/Shop/ProductD';
import Louise from './components/Room/Louise';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/LoginResgister" element={<LoginResgister />} />
        <Route path="/Shop_cart" element={<Shop_cart />} />
        <Route path="/product/:id" element={<ProductD />} />
        <Route path="/Louise" element={<Louise />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
