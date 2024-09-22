import React, { useState, useEffect } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function Account() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setUsername(decoded.username);
            setEmail(decoded.email);
        }
    }, []);

    const handleAccountUpdateSubmit = async (e) => {
        e.preventDefault();
    
        const updatedData = {
            email: document.getElementById("email").value,
            currentPassword: document.getElementById("current-pwd").value,
            newPassword: document.getElementById("new-pwd").value,
            username: document.getElementById("username").value,
        };
    
        const token = localStorage.getItem('token');
    
        try {
            const response = await axios.put("http://localhost:3001/techwiz/user", updatedData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log("Update successful:", response.data);
            alert("Cập nhật thành công!");
        } catch (error) {
            console.error("Update failed:", error);
            alert("Cập nhật thất bại! Vui lòng kiểm tra thông tin.");
        }
    };



    return (
        <div>
            <Header />
            <div className="page-header-area">
                <div className="page-header-content bg-img" data-bg-img="assets/images/photos/bg1.jpg">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Account</li>
                    </ol>
                </div>
            </div>
            <div className="account-area section-space">
                <div className="container">
                    <div className="myaccount-page-wrapper">
                        <div className="row">
                            <div className="col-lg-3 col-md-4">
                                <nav className="myaccount-tab-menu nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="myaccount-nav-link active" id="dashboad-tab" data-bs-toggle="tab" data-bs-target="#dashboad" type="button" role="tab" aria-controls="dashboad" aria-selected="true">Dashboard</button>
                                    <button className="myaccount-nav-link" id="orders-tab" data-bs-toggle="tab" data-bs-target="#orders" type="button" role="tab" aria-controls="orders" aria-selected="false"> Orders</button>
                                    <button className="myaccount-nav-link" id="download-tab" data-bs-toggle="tab" data-bs-target="#download" type="button" role="tab" aria-controls="download" aria-selected="false">Download</button>
                                    <button className="myaccount-nav-link" id="payment-method-tab" data-bs-toggle="tab" data-bs-target="#payment-method" type="button" role="tab" aria-controls="payment-method" aria-selected="false">Payment Method</button>
                                    <button className="myaccount-nav-link" id="address-edit-tab" data-bs-toggle="tab" data-bs-target="#address-edit" type="button" role="tab" aria-controls="address-edit" aria-selected="false">address</button>
                                    <button className="myaccount-nav-link" id="account-info-tab" data-bs-toggle="tab" data-bs-target="#account-info" type="button" role="tab" aria-controls="account-info" aria-selected="false">Account Details</button>
                                    <a className="myaccount-nav-link" href="/Login" onClick={() => localStorage.removeItem('username')}>Logout</a>
                                </nav>
                            </div>
                            <div className="col-lg-9 col-md-8">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="dashboad" role="tabpanel" aria-labelledby="dashboad-tab">
                                        <div className="myaccount-content">
                                            <h3>Dashboard</h3>
                                            <div className="welcome">
                                                <p>Hello, <strong>{username}</strong> (If Not <strong>Tuntuni !</strong><a href="login-register.html" className="logout"> Logout</a>)</p>
                                            </div>
                                            <p className="mb-0">From your account dashboard. you can easily check &amp; view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                                        <div className="myaccount-content">
                                            <h3>Orders</h3>
                                            <table className="myaccount-table table-responsive text-center table table-bordered">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>Order</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th>Total</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Aug 22, 2023</td>
                                                        <td>Pending</td>
                                                        <td>$3000</td>
                                                        <td><a href="shop-cart.html" className="check-btn sqr-btn ">View</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>July 22, 2023</td>
                                                        <td>Approved</td>
                                                        <td>$200</td>
                                                        <td><a href="shop-cart.html" className="check-btn sqr-btn ">View</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>June 12, 2017</td>
                                                        <td>On Hold</td>
                                                        <td>$990</td>
                                                        <td><a href="shop-cart.html" className="check-btn sqr-btn ">View</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="download" role="tabpanel" aria-labelledby="download-tab">
                                        <div className="myaccount-content">
                                            <h3>Downloads</h3>
                                            <table className="myaccount-table table-responsive text-center table table-bordered">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Date</th>
                                                        <th>Expire</th>
                                                        <th>Download</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Kuster - Kitchen &amp; Home Appliances</td>
                                                        <td>Aug 11, 2023</td>
                                                        <td>Yes</td>
                                                        <td><a href="#/" className="check-btn sqr-btn"><i className="fa fa-cloud-download" /> Download File</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>HasTech - Profolio Business Template</td>
                                                        <td>Sep 12, 2023</td>
                                                        <td>Never</td>
                                                        <td><a href="#/" className="check-btn sqr-btn"><i className="fa fa-cloud-download" /> Download File</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="payment-method" role="tabpanel" aria-labelledby="payment-method-tab">
                                        <div className="myaccount-content">
                                            <h3>Payment Method</h3>
                                            <p className="saved-message">You Can't Saved Your Payment Method yet.</p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="address-edit" role="tabpanel" aria-labelledby="address-edit-tab">
                                        <div className="myaccount-content">
                                            <h3>Billing Address</h3>
                                            <address>
                                                <p><strong>Alex Tuntuni</strong></p>
                                                <p>1355 Market St, Suite 900 <br />
                                                    San Francisco, CA 94103</p>
                                                <p>Mobile: (123) 456-7890</p>
                                            </address>
                                            <a href="index-2.html" className="check-btn sqr-btn"><i className="fa fa-edit" /> Edit Address</a>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="account-info" role="tabpanel" aria-labelledby="account-info-tab">
                                        <div className="myaccount-content">
                                            <h3>Account Details</h3>
                                            <form className="account-details-form mt-4" onSubmit={handleAccountUpdateSubmit}>
                                                <div className="single-input-item">
                                                    <label htmlFor="username" className="required">Username</label>
                                                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                                </div>
                                                <div className="single-input-item">
                                                    <label htmlFor="email" className="required">Email Address</label>
                                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                                </div>
                                                <fieldset>
                                                    <legend>Password change</legend>
                                                    <div className="single-input-item">
                                                        <label htmlFor="current-pwd" className="required">Current Password</label>
                                                        <input type="password" id="current-pwd" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
                                                    </div>
                                                    <div className="single-input-item">
                                                        <label htmlFor="new-pwd" className="required">New Password</label>
                                                        <input type="password" id="new-pwd" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                                                    </div>
                                                </fieldset>
                                                <div className="single-input-item">
                                                    <button className="check-btn sqr-btn">Save Changes</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
