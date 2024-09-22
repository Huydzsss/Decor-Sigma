import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Login from './components/LoginResgister/Login';
import Shop_cart from './components/Cart/Shop_cart';
import ProductD from './components/Shop/ProductD';
import Lounge from './components/Room/Lounge';
import Checkout from './components/Checkout/Checkout';
import Register from './components/LoginResgister/Resgister';
import Account from './components/LoginResgister/Account';
import Bedroom from './components/Room/Bedroom';
import Kitchen from './components/Room/Kitchen';
import Dining from './components/Room/Dining';
import Office from './components/Room/Office';
import Outdoor from './components/Room/Outdoor';
import Shop_W from './components/WhistList/Shop_w';
import Compare from './components/Compare/Compare';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Shop_cart" element={<Shop_cart />} />
        <Route path="/product/:id" element={<ProductD />} />
        <Route path="/Lounge" element={<Lounge />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Bedroom" element={<Bedroom />} />
        <Route path="/Kitchen" element={<Kitchen />} />
        <Route path="/Dining" element={<Dining />} />
        <Route path="/Office" element={<Office />} />
        <Route path="/Outdoor" element={<Outdoor />} />
        <Route path="/Shop_W" element={<Shop_W />} />
        <Route path="/Compare" element={<Compare />} />

        
        </Routes>
      </div>
      <ToastContainer/>
    </Router>
  );
}

export default App;
