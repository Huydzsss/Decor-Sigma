import React, { useState } from "react";
import axios from "axios"; // Import axios
import HeaderLR from "./HeaderLR";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import { useNavigate } from 'react-router-dom';

import "./LoginRes.css";

export default function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [loginErrors, setLoginErrors] = useState({});

    const handleInputChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const validateLogin = () => {
        const errors = {};
        if (!loginData.email) errors.email = "Email cannot be empty.";
        if (!loginData.password) errors.password = "Password cannot be empty.";
        return errors;
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const errors = validateLogin();
        if (Object.keys(errors).length === 0) {
            try {
                const response = await axios.post("http://localhost:3001/techwiz/user", loginData);
                console.log("Login successful:", response.data);
                
                localStorage.setItem("username", response.data.username);
                localStorage.setItem("password", response.data.password);
                localStorage.setItem("email", response.data.email);

                localStorage.setItem("token", response.data.token);
                navigate('/Account');
            } catch (error) {
                console.error("Login failed:", error);
                setLoginErrors({ server: "Login failed. Please check your credentials." });
            }
        } else {
            setLoginErrors(errors);
        }
    };
    console.log("Login data:", loginData);

    return (
        <div>
            <Header />
            <HeaderLR />
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
                <div className="row w-100">
                    <section className="vh-100">
                        <div className="container-fluid h-custom">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-md-9 col-lg-6 col-xl-5">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                        className="img-fluid"
                                        alt="Sample"
                                    />
                                </div>
                                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                    <form onSubmit={handleLoginSubmit}>
                                        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                            <button type="button" className="btn btn-primary btn-floating mx-1">
                                                <i className="fab fa-facebook-f" />
                                            </button>
                                            <button type="button" className="btn btn-primary btn-floating mx-1">
                                                <i className="fab fa-twitter" />
                                            </button>
                                            <button type="button" className="btn btn-primary btn-floating mx-1">
                                                <i className="fab fa-linkedin-in" />
                                            </button>
                                        </div>
                                        <div className="divider d-flex align-items-center my-4">
                                            <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                        </div>
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control form-control-lg"
                                                placeholder="Enter a valid email address"
                                                onChange={handleInputChange}
                                            />
                                            {loginErrors.email && <p className="text-danger">{loginErrors.email}</p>}
                                            {loginErrors.server && <p className="text-danger">{loginErrors.server}</p>}
                                        </div>
                                        {/* Password input */}
                                        <div className="form-outline mb-3">
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control form-control-lg"
                                                placeholder="Enter password"
                                                onChange={handleInputChange}
                                            />
                                            {loginErrors.password && <p className="text-danger">{loginErrors.password}</p>}
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            {/* Checkbox */}
                                            <div className="form-check mb-0">
                                                <input className="form-check-input me-2" type="checkbox" id="rememberMe" />
                                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                            </div>
                                            <a href="#!" className="text-body">Forgot password?</a>
                                        </div>
                                        <div className="text-center text-lg-start mt-4 pt-2">
                                            <button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                                            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/Register" className="link-danger">Register</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}
