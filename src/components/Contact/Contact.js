import React from "react";
import HeaderC from "./HeaderC";
import Footer from "../Home/Footer";
import Header from "../Home/Header";

export default function Contact() {
    return (
        <div>
            <Header/>
            <HeaderC />
            <div className="contact-area section-space">
                <div className="container">
                    <div className="contact-wrp">
                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <div className="contact-info-area mt-n1">
                                    <h3 className="contact-info-area-title">Contact</h3>
                                    {/*== Start Contact Info Item ==*/}
                                    <div className="contact-info-item">
                                        <div className="contact-info-icon"><i className="icon icon-location-pin" /></div>
                                        <div className="contact-info-content">
                                            <p>Address goes here, street, Crossroad 123.</p>
                                        </div>
                                    </div>
                                    {/*== End Contact Info Item ==*/}
                                    {/*== Start Contact Info Item ==*/}
                                    <div className="contact-info-item">
                                        <div className="contact-info-icon"><i className="icon icon-envelope" /></div>
                                        <div className="contact-info-content">
                                            <p>info@example.com / info@example.com</p>
                                        </div>
                                    </div>
                                    {/*== End Contact Info Item ==*/}
                                    {/*== Start Contact Info Item ==*/}
                                    <div className="contact-info-item">
                                        <div className="contact-info-icon"><i className="icon icon-screen-smartphone" /></div>
                                        <div className="contact-info-content">
                                            <p>+1 35 776 859 000 / +1 35 776 859 011</p>
                                        </div>
                                    </div>
                                    {/*== End Contact Info Item ==*/}
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="contact-form-area">
                                    {/*== Start Contact Form ==*/}
                                    <form className="contact-form" id="contact-form" action="https://htmldemo.net/dkoor/dkoor/assets/php/mail.php" method="post">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-input-item">
                                                    <input className="form-control" type="text" name="con_name" id="name" placeholder="Name" />
                                                    <i className="icon fa fa-user" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-input-item">
                                                    <input className="form-control" type="email" name="con_email" id="mail" placeholder="Email" />
                                                    <i className="icon fa fa-envelope" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-input-item">
                                            <input className="form-control" type="text" name="con_subject" id="subject" placeholder="Subject" />
                                            <i className="icon fa fa-phone-square" />
                                        </div>
                                        <div className="form-input-item">
                                            <textarea className="form-control" name="con_message" id="message" defaultValue={""} />
                                        </div>
                                        <button className="btn btn-submit mt-1" type="submit">Send Message</button>
                                    </form>
                                    {/*== End Contact Form ==*/}
                                    {/*== Message Notification ==*/}
                                    <div className="form-message mt-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container section-bottom-space">
                <div className="map-area mb-n1">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d802879.9165497769!2d144.83475730949783!3d-38.180874157285366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sbd!4v1636803638401!5m2!1sen!2sbd" />
                </div>
            </div>
            <Footer/>
        </div>
    )
}