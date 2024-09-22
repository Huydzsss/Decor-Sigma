import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Text.css";

export default function Header({ cartProduct }) {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    const storedCartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);

    const user = sessionStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, [cartProduct]);

  useEffect(() => {
    if (searchTerm) {
      axios.get(`http://localhost:3001/techwiz/search?q=${searchTerm}`)
        .then(response => {
          setSearchResults(response.data);
        })
        .catch(error => {
          console.error("Error searching products:", error);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <header className="header-wrapper">
        <div className="header-top">
          <div className="container">
            <div className="row align-items-center justify-content-between align-items-center">
              <div className="col-xl-2 col-md-3 col-6">
                <div className="header-logo">
                  <a href="/">
                    <h1 className="sigma">Σigma</h1>
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-md-6 d-none d-lg-block">
                <form className="header-search-box" onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="form-control"
                    type="text"
                    id="search"
                    placeholder="Search our store"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <button type="submit" className="btn-src">Search <i className="icon icofont-search-2" /></button>
                  {searchResults.length > 0 && (
                    <ul className="search-suggestions">
                      {searchResults.map((product) => (
                        <li key={product.id}>
                          <a href={`/product/${product.id}`}>{product.product_name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </form>
              </div>
              <div className="col-xl-2 col-md-3 col-6 d-flex justify-content-end align-items-center">
                <button className="header-action-cart" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithCartSidebar" aria-controls="offcanvasWithCartSidebar">
                  <i className="cart-icon icofont-cart" />
                  <span className="cart-amount">${totalAmount.toFixed(2)}</span>
                  <span className="cart-count">{cartItems.length}</span>
                </button>
                <div className="header-info-dropdown d-none d-lg-block">
                  <button type="button" className="btn-info dropdown-toggle" id="dropdownCurrency" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="icofont-gear-alt" />
                  </button>
                  <div className="dropdown-menu header-dropdown-menu" aria-labelledby="dropdownCurrency">
                    <h6 className="header-dropdown-menu-title">Currency</h6>
                    <ul>
                      <li><a href="/Shop_w">Whislist</a></li>
                      <li><a href="/Shop_cart">Cart</a></li>
                      <li><a href="/Compare">Compare</a></li>
                    </ul>
                    <h6 className="header-dropdown-menu-title style-two">Account</h6>
                    <ul>
                      {!isLoggedIn ? (
                        <>
                          <li><a href="/Login">Login</a></li>
                          <li><a href="/Register">Register</a></li>
                        </>
                      ) : (
                        <li><a href="/Account">My Account</a></li>
                      )}
                    </ul>
                  </div>
                </div>
                <button className="btn-menu-two d-lg-none me-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                  <i className="icon-menu" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="header-two-area d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-9 col-lg-9">
                <div className="header-navigation ms-0">
                  <ul className="main-nav">
                    <li className="main-nav-item has-submenu"><a className="main-nav-link" href="/">Home</a></li>
                    
                    <li className="main-nav-item has-submenu position-static"><a className="main-nav-link" href="/Shop">Shop</a></li>
                    <li className="main-nav-item has-submenu"><a className="main-nav-link" href="#">Room</a>
                      <ul className="submenu-nav">
                        <li className="submenu-nav-item"><a className="submenu-nav-link" href="/Lounge">Lounge</a></li>
                        <li className="submenu-nav-item"><a className="submenu-nav-link" href="/Bedroom">Bedroom</a></li>
                        <li className="submenu-nav-item"><a className="submenu-nav-link" href="/Kitchen">Kitchen</a></li>
                        <li className="submenu-nav-item"><a className="submenu-nav-link" href="/Dining">Dining room</a></li>
                        <li className="submenu-nav-item"><a className="submenu-nav-link" href="/Office">Office</a></li>
                        <li className="submenu-nav-item"><a className="submenu-nav-link" href="/Outdoor">Out door</a></li>
                      </ul>
                    </li>
                    <li className="main-nav-item"><a className="main-nav-link" href="/Contact">Contact</a></li>
                    <li className="main-nav-item"><a className="main-nav-link" href="/AboutUs">About</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3">
                <div className="header-action d-flex align-items-center justify-content-end">
                  <div className="phone-item-action">
                    <a href="tel:+00123456789"><i className="icon icofont-headphone-alt" /> (+01)-800-3456</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <aside className="sidebar-cart-modal offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithCartSidebar">
        <div className="offcanvas-header">
          <button type="button" className="btn-close cart-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="sidebar-cart-inner offcanvas-body">
          <div className="sidebar-cart-content">
            <div className="sidebar-cart-all">
              <div className="cart-header">
                <h3>Shopping Cart</h3>
                <div className="close-style-wrap">
                  <button type="button" className="btn-close cart-close" data-bs-dismiss="offcanvas" aria-label="Close">
                    <i className="icon-close" />
                  </button>
                </div>
              </div>
              <div className="cart-content cart-content-padding">
                <ul>
                  {cartItems.map((item, index) => (
                    <li className="single-product-cart" key={index}>
                      <div className="cart-img">
                        <a href={`/product/${item.id}`}>
                          <img src={item.picture} alt={item.product_name} width={70} height={82} />
                        </a>
                      </div>
                      <div className="cart-title">
                        <h4>
                          <a href={`/product/${item.id}`}>{item.product_name}</a>
                        </h4>
                        <span> 1 × <span className="price"> ${item.price} </span></span>
                      </div>
                      <div className="cart-delete">
                        <a href="#/">
                          <i className="pe-7s-trash icons" />
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="cart-total">
                  <h4>Subtotal: <span>${totalAmount.toFixed(2)}</span></h4>
                </div>
                <div className="cart-checkout-btn">
                  <a className="cart-btn" href="/Shop_cart">view cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <aside className="aside-side-menu-wrapper off-canvas-area offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions">
        <div className="offcanvas-header" data-bs-dismiss="offcanvas">
          <button type="button" className="btn-close"><i className="icon icon-close" /></button>
        </div>
        <div className="offcanvas-body">
          <div className="aside-search-form">
            <form action="#" method="post">
              <input id="search-input2" type="search" className="form-control" placeholder="Search our store" />
              <button className="search-button" type="button"><i className="icon-magnifier" /></button>
            </form>
          </div>
          <div className="res-mobile-menu">
            <nav id="offcanvasNav" className="offcanvas-menu">
              <ul>
                <li><a href="/">Home</a>
                  
                </li>
                <li><a href="/Shop">Shop</a>
                  
                </li>
                <li><a href="javascript:void(0)">Room</a>
                  <ul>
                    <li><a href="/Louge">Louge</a></li>
                    <li><a href="/Bedroom">Bedroom</a></li>
                    <li><a href="/Kitchen">Kitchen</a></li>
                    <li><a href="/Dining">Dining room</a></li>
                    <li><a href="/Office">Office</a></li>
                    <li><a href="/Outdoor">Out door</a></li>


                  </ul>
                </li>
                <li><a href="/AboutUs">About us</a>
                  
                </li>
                <li><a href="/Contact">Contact</a></li>
              </ul>
            </nav>
          </div>
          <nav id="offcanvasNav2" className="offcanvas-menu offcanvas-menu-two">
            <ul>
              <li><a href="javascript:void(0)">Currency</a>
                <ul>
                  <li><a href="/Shop_w">Whist List</a></li>
                  <li><a href="/Compare">Compare</a></li>
                  <li><a href="/Cart">Cart</a></li>
                </ul>
              </li>
              <li><a href="javascript:void(0)">Account</a>
                <ul>
                  <li><a href="login-register.html">Login</a></li>
                  <li><a href="login-register.html">Register</a></li>
                  <li><a href="account.html">My Account</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}