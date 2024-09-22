import React, { useState } from "react";
import axios from "axios"; 
import HeaderLR from "./HeaderLR";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import "./LoginRes.css";

export default function Register() {
    const [registerData, setRegisterData] = useState({ email: "", password: "", confirmPassword: "", username: "" });
    const [registerErrors, setRegisterErrors] = useState({});

    const handleInputChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const validateRegister = () => {
        const errors = {};
        if (!registerData.email) errors.email = "Email cannot be empty.";
        if (!registerData.password) errors.password = "Password cannot be empty.";
        if (registerData.password !== registerData.confirmPassword) {
            errors.confirmPassword = "Passwords do not match.";
        }
        if (!registerData.username) errors.username = "Username cannot be empty.";
        return errors;
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const errors = validateRegister();
        if (Object.keys(errors).length === 0) {
            try {
                const response = await axios.post("http://localhost:3001/techwiz/register", registerData);
                console.log("Registration successful:", response.data);
                localStorage.setItem("username", response.data.username);
                localStorage.setItem("password", response.data.password);
                localStorage.setItem("email", response.data.email);

                localStorage.setItem("token", response.data.token);;
                // Đặt lại dữ liệu form sau khi đăng ký thành công
                setRegisterData({ email: "", password: "", confirmPassword: "", username: "" });
                setRegisterErrors({});
            } catch (error) {
                console.error("Registration failed:", error);
                setRegisterErrors({ server: "Registration failed. Please try again." });
            }
        } else {
            setRegisterErrors(errors);
        }
    };

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
                                    <form onSubmit={handleRegisterSubmit}>
                                        <h3 className="text-center mb-4">Sign Up</h3>
                                        <div className="divider d-flex align-items-center my-4">
                                        </div>
                                        {/* Username input */}
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                name="username"
                                                className="form-control form-control-lg"
                                                placeholder="Enter your username"
                                                value={registerData.username}
                                                onChange={handleInputChange}
                                            />
                                            {registerErrors.username && <p className="text-danger">{registerErrors.username}</p>}
                                        </div>
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control form-control-lg"
                                                placeholder="Enter a valid email address"
                                                value={registerData.email}
                                                onChange={handleInputChange}
                                            />
                                            {registerErrors.email && <p className="text-danger">{registerErrors.email}</p>}
                                            {registerErrors.server && <p className="text-danger">{registerErrors.server}</p>}
                                        </div>
                                        {/* Password input */}
                                        <div className="form-outline mb-3">
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control form-control-lg"
                                                placeholder="Enter password"
                                                value={registerData.password}
                                                onChange={handleInputChange}
                                            />
                                            {registerErrors.password && <p className="text-danger">{registerErrors.password}</p>}
                                        </div>
                                        {/* Confirm Password input */}
                                        <div className="form-outline mb-3">
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                className="form-control form-control-lg"
                                                placeholder="Confirm password"
                                                value={registerData.confirmPassword}
                                                onChange={handleInputChange}
                                            />
                                            {registerErrors.confirmPassword && <p className="text-danger">{registerErrors.confirmPassword}</p>}
                                        </div>
                                        <div className="text-center text-lg-start mt-4 pt-2">
                                            <button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Register</button>
                                            <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="/Login" className="link-danger">Login</a></p>
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
