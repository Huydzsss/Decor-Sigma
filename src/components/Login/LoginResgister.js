import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderLR from "./HeaderLR";
import Footer from "../Home/Footer";
import Header from "../Home/Header";

export default function LoginRegister() {
    const [user, setUser] = useState([]);
    const [loginData, setLoginData] = useState({ username: "", password: "" });
    const [registerData, setRegisterData] = useState({ username: "", email: "", password: "" });
    const [loginErrors, setLoginErrors] = useState({});
    const [registerErrors, setRegisterErrors] = useState({});

    useEffect(() => {
        axios.get('http://localhost:3001/techwiz/user')
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
            });
    }, []);

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleRegisterChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const validateLogin = () => {
        const errors = {};
        if (!loginData.username) errors.username = "Username cannot be empty.";
        if (!loginData.password) errors.password = "Password cannot be empty.";
        return errors;
    };

    const validateRegister = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, one letter and one number

        if (!registerData.username) errors.username = "Username cannot be empty.";
        if (!registerData.email) {
            errors.email = "Email cannot be empty.";
        } else if (!emailRegex.test(registerData.email)) {
            errors.email = "Invalid email format.";
        }
        if (!registerData.password) {
            errors.password = "Password cannot be empty.";
        } else if (!passwordRegex.test(registerData.password)) {
            errors.password = "Password must be at least 8 characters long and contain at least one letter and one number.";
        }
        return errors;
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const errors = validateLogin();
        if (Object.keys(errors).length === 0) {
            // Handle login
            console.log("Logging in with:", loginData);
        } else {
            setLoginErrors(errors);
        }
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const errors = validateRegister();
        if (Object.keys(errors).length === 0) {
            // Handle registration
            console.log("Registering with:", registerData);
        } else {
            setRegisterErrors(errors);
        }
    };

    return (
        <div>
            <Header />
            <HeaderLR />
            <div className="login-register-area section-space">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 login-register-border">
                            <div className="login-register-content">
                                <div className="login-register-title mb-30">
                                    <h3>Login</h3>
                                    <p>Welcome back! Please enter your username and password to login.</p>
                                </div>
                                <div className="login-register-style login-register-pr">
                                    <form onSubmit={handleLoginSubmit}>
                                        <div className="login-register-input">
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Username or email address"
                                                value={loginData.username}
                                                onChange={handleLoginChange}
                                            />
                                            {loginErrors.username && <p className="error">{loginErrors.username}</p>}
                                        </div>
                                        <div className="login-register-input">
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={loginData.password}
                                                onChange={handleLoginChange}
                                            />
                                            {loginErrors.password && <p className="error">{loginErrors.password}</p>}
                                            <div className="forgot">
                                                <a href="login-register.html">Forgot?</a>
                                            </div>
                                        </div>
                                        <div className="remember-me-btn">
                                            <input type="checkbox" />
                                            <label>Remember me</label>
                                        </div>
                                        <div className="btn-register">
                                            <button type="submit" className="btn-register-now">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="login-register-content login-register-pl">
                                <div className="login-register-title mb-30">
                                    <h3>Register</h3>
                                    <p>Create new account today to reap the benefits of a personalized shopping experience.</p>
                                </div>
                                <div className="login-register-style">
                                    <form onSubmit={handleRegisterSubmit}>
                                        <div className="login-register-input">
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Username"
                                                value={registerData.username}
                                                onChange={handleRegisterChange}
                                            />
                                            {registerErrors.username && <p className="error">{registerErrors.username}</p>}
                                        </div>
                                        <div className="login-register-input">
                                            <input
                                                type="text"
                                                name="email"
                                                placeholder="E-mail address"
                                                value={registerData.email}
                                                onChange={handleRegisterChange}
                                            />
                                            {registerErrors.email && <p className="error">{registerErrors.email}</p>}
                                        </div>
                                        <div className="login-register-input">
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={registerData.password}
                                                onChange={handleRegisterChange}
                                            />
                                            {registerErrors.password && <p className="error">{registerErrors.password}</p>}
                                        </div>
                                        <div className="login-register-paragraph">
                                            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="login-register.html">privacy policy.</a></p>
                                        </div>
                                        <div className="btn-register">
                                            <button type="submit" className="btn-register-now">Register</button>
                                        </div>
                                    </form>
                                    <div className="register-benefits">
                                        <h4>Sign up today and you will be able to:</h4>
                                        <p>The Loke Buyer Protection has you covered from click to delivery. Sign up <br />or sign in and you will be able to:</p>
                                        <ul>
                                            <li><i className="icon-check" /> Speed your way through checkout</li>
                                            <li><i className="icon-check" /> Track your orders easily</li>
                                            <li><i className="icon-check" /> Keep a record of all your purchases</li>
                                        </ul>
                                    </div>
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
