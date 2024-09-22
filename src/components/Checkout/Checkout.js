import React,{useState,useEffect} from "react";
import Header from "../Home/Header";
import HeaderCheck from "./HeaderCheck";
import Footer from "../Home/Footer";
import { toast } from 'react-toastify';
export default function Checkout() {
    const [checkoutItems, setCheckoutItems] = useState([]);
    const [shippingCost, setShippingCost] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: '',
        streetAddress: '',
        city: '',
        district: '',
        phone: '',
        email: ''
    });

    useEffect(() => {
        const storedCheckoutItems = JSON.parse(sessionStorage.getItem('checkoutItems')) || [];
        setCheckoutItems(storedCheckoutItems);
    }, []);

    const totalAmount = checkoutItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleShippingChange = (e) => {
        const selectedShipping = e.target.value;
        if (selectedShipping === "free") {
            setShippingCost(0);
        } else if (selectedShipping === "flat") {
            setShippingCost(100);
        } else if (selectedShipping === "local") {
            setShippingCost(120);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { firstName, lastName, country, streetAddress, city, district, phone, email } = formData;
        if (!firstName || !lastName || !country || !streetAddress || !city || !district || !phone || !email) {
            toast.error("Please fill in all required fields!");
            return false;
        }
        if (!/^\d{10}$/.test(phone)) {
            toast.error("Please enter a valid phone number!");
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Please enter a valid email address!");
            return false;
        }
        return true;
    };
    const handlePlaceOrder = () => {
        if (validateForm()) {
            toast.success("Order placed successfully!");
            setFormData({
                firstName: '',
                lastName: '',
                companyName: '',
                country: '',
                streetAddress: '',
                city: '',
                district: '',
                phone: '',
                email: ''
            });
        }
    };
    
    return (
        <div>
            <Header/>
            <HeaderCheck/>
            <div className="section-space shop-checkout-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="checkout-coupon-wrap mb-8 mb-lg-10 pb-lg-2">
                                <p className="cart-page-title">Have a coupon? <a className="checkout-coupon-active" href="#/">Click here to enter your code</a></p>
                                <form className="checkout-coupon-content" action="#">
                                    <p>If you have a coupon code, please apply it below.</p>
                                    <input type="text" placeholder="Coupon code" />
                                    <button type="submit">Apply coupon</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                        <div className="billing-info-wrap">
                                <h3>Billing Details</h3>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="billing-info mb-4">
                                            <label>First name <abbr className="required" title="required">*</abbr></label>
                                            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="billing-info mb-4">
                                            <label>Last name <abbr className="required" title="required">*</abbr></label>
                                            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="billing-info mb-4">
                                            <label>Company name (optional)</label>
                                            <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="billing-select mb-4">
                                            <label>Country / Region <abbr className="required" title="required">*</abbr></label>
                                            <div className="select-style">
                                                <select className="select-active" name="country" value={formData.country} onChange={handleInputChange}>
                                                    <option value="">Select country</option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="Bahrain">Bahrain</option>
                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="billing-info mb-4">
                                            <label>Street Address <abbr className="required" title="required">*</abbr></label>
                                            <input className="billing-address" placeholder="House number and street name" type="text" name="streetAddress" value={formData.streetAddress} onChange={handleInputChange} />
                                            <input placeholder="Apartment, suite, unit, etc. (optional)" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="billing-info mb-4">
                                            <label>Town / City <abbr className="required" title="required">*</abbr></label>
                                            <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="billing-select mb-4">
                                            <label>District <abbr className="required" title="required">*</abbr></label>
                                            <div className="select-style">
                                                <select className="select-active" name="district" value={formData.district} onChange={handleInputChange}>
                                                    <option value="">Select district</option>
                                                    <option value="Barguna">Barguna</option>
                                                    <option value="Bandarban">Bandarban</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="billing-info mb-4">
                                            <label>Phone <abbr className="required" title="required">*</abbr></label>
                                            <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="billing-info mb-4">
                                            <label>Email Address <abbr className="required" title="required">*</abbr></label>
                                            <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout-account">
                                    <input className="checkout-toggle" type="checkbox" />
                                    <span>Ship to a different address?</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="your-order-area mt-10 mt-lg-0">
                                <h4>Your order</h4>
                                <div className="your-order-wrap">
                                    <div className="your-order-info-wrap">
                                        <div className="your-order-title">
                                            <h6>Product <span>Subtotal</span></h6>
                                        </div>
                                        <div className="your-order-product">
                                        <ul>
                                                {checkoutItems.map((item, index) => (
                                                    <li key={index}>
                                                        {item.product_name} × {item.quantity} <span>${(item.price * item.quantity).toFixed(2)}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="your-order-subtotal">
                                            <h3>Subtotal <span>${totalAmount.toFixed(2)}</span></h3>
                                        </div>
                                        <div className="your-order-shipping">
                                            <span>Shipping</span>
                                            <li><input type="radio" name="shipping" defaultValue="free" defaultChecked  onChange={handleShippingChange}/><label>Free shipping</label></li>
                                            <li><input type="radio" name="shipping" defaultValue="flat"  onChange={handleShippingChange}/><label>Flat rate: <span>$100.00</span></label></li>
                                            <li><input type="radio" name="shipping" defaultValue="local"  onChange={handleShippingChange}/><label>Local pickup: <span>$120.00</span></label></li>
                                        </div>
                                        <div className="your-order-total">
                                        <h3>Total <span>${(totalAmount + shippingCost).toFixed(2)}</span></h3>
                                        </div>
                                    </div>
                                    <div className="payment-method">
                                        <div className="pay-top sin-payment">
                                            <input id="payment_method_1" className="input-radio" type="radio" defaultValue="cheque" defaultChecked="checked" name="payment_method" />
                                            <label htmlFor="payment_method_1"> Direct Bank Transfer </label>
                                            <div className="payment-box payment_method_bacs">
                                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                            </div>
                                        </div>
                                        <div className="pay-top sin-payment">
                                            <input id="payment-method-2" className="input-radio" type="radio" defaultValue="cheque" name="payment_method" />
                                            <label htmlFor="payment-method-2">Check payments</label>
                                            <div className="payment-box payment_method_bacs">
                                                <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                            </div>
                                        </div>
                                        <div className="pay-top sin-payment">
                                            <input id="payment-method-3" className="input-radio" type="radio" defaultValue="cheque" name="payment_method" />
                                            <label htmlFor="payment-method-3">Cash on delivery </label>
                                            <div className="payment-box payment_method_bacs">
                                                <p>Pay with cash upon delivery. </p>
                                            </div>
                                        </div>
                                        <div className="pay-top sin-payment sin-payment-3">
                                            <input id="payment-method-4" className="input-radio" type="radio" defaultValue="cheque" name="payment_method" />
                                            <label htmlFor="payment-method-4">PayPal <img alt src="assets/images/photos/paypal.png" width={35} height={23} /><a href="#">What is PayPal?</a></label>
                                            <div className="payment-box payment_method_bacs">
                                                <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="payment-condition">
                                        <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="shop-checkout.html">privacy policy</a>.</p>
                                    </div>
                                </div>
                                <div className="place-order">
                                    <a href="#!" onClick={handlePlaceOrder}>Place Order</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}