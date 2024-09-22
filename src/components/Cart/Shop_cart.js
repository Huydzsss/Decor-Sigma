import React, { useState, useEffect } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

export default function Shop_cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems.map(item => ({ ...item, quantity: 1 })));
    }, []);

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleRemoveItem = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const handleQuantityChange = (index, newQuantity) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity = newQuantity;
        setCartItems(updatedCartItems);
        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    return (
        <div>
            <Header cartProduct={cartItems} />
            <div className="page-header-area">
                <div className="page-header-content bg-img" data-bg-img="assets/images/photos/bg1.jpg">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Cart</li>
                    </ol>
                </div>
            </div>
            <div className="product-area section-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cart-table-wrap">
                                <div className="cart-table table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="width-thumbnail" />
                                                <th className="width-name">Product</th>
                                                <th className="width-price"> Price</th>
                                                <th className="width-quantity">Quantity</th>
                                                <th className="width-subtotal">Subtotal</th>
                                                <th className="width-remove" />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="product-thumbnail">
                                                        <a href={`/product/${item.id}`}>
                                                            <img className="w-100" src={item.picture} alt="Image" width={96} height={96} />
                                                        </a>
                                                    </td>
                                                    <td className="product-name">
                                                        <h5><a href={`/product/${item.id}`}>{item.product_name}</a></h5>
                                                    </td>
                                                    <td className="product-price"><span className="amount">${item.price.toFixed(2)}</span></td>
                                                    <td className="cart-quality">
                                                        <div className="product-details-quality">
                                                            <div className="pro-qty">
                                                                <input
                                                                    type="number"
                                                                    title="Quantity"
                                                                    value={item.quantity}
                                                                    min="1"
                                                                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                                                />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="product-total">
                                                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                                                    </td>
                                                    <td className="product-remove">
                                                        <a href="#/" onClick={() => handleRemoveItem(index)}>
                                                            <i className="icon-close" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="cart-shiping-update-wrapper">
                                <div className="cart-shiping-btn continure-btn">
                                    <a className="btn btn-link" href="/Shop"><i className="fa fa-angle-left" /> Back To Shop</a>
                                </div>
                            </div>
                            <div className="grand-total-wrap mt-10 mt-lg-0">
                                <div className="grand-total-content">
                                    <h5>Subtotal <span>${totalAmount.toFixed(2)}</span></h5>
                                    <div className="grand-total">
                                        <h4>Total <span>${totalAmount.toFixed(2)}</span></h4>
                                    </div>
                                </div>
                                <div className="grand-total-btn">
                                    <a
                                        className="btn btn-link"
                                        href="/Checkout"
                                        onClick={() => {
                                            sessionStorage.setItem('checkoutItems', JSON.stringify(cartItems));
                                            setCartItems([]);
                                            sessionStorage.setItem('cartItems', JSON.stringify([]));
                                        }}
                                    >
                                        Proceed to checkout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
