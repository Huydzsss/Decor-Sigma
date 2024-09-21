import React from "react";
import "../Btn.css"
export default function Footer(){
    return(
        <div>
            <footer className="footer-two-area">
  {/*== Start Footer Main ==*/}
  <div className="footer-main">
    <div className="container">
      <div className="row mb-n6">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="widget-item">
            <h4 className="widget-title">About Info</h4>
            <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetTitleId-4">About Info</h4>
            <div id="widgetTitleId-4" className="collapse widget-collapse-body">
              <div className="widget-about">
                <p className="widget-about-desc text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br className="d-none d-xl-block" />sed do eiusmod tempor inci ut labore et dolore.</p>
              </div>
              <div className="widget-contact">
                <div className="widget-info-item"><i className="icon icon-location-pin" /> Addresss: 123 Pall Mall, London England</div>
                <div className="widget-info-item"><i className="icon icon-envelope" /> Email: hello@example.com</div>
                <div className="widget-info-item"><i className="icon icon-phone" /> Phone: (012) 345 6789</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-12 mt-4 mt-md-0">
          <div className="widget-item">
            <h4 className="widget-title">Quick Links</h4>
            <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetTitleId-1">Quick Links</h4>
            <div id="widgetTitleId-1" className="collapse widget-collapse-body">
              <ul className="widget-nav">
                <li><a href="account.html">My account</a></li>
                <li><a href="about-us.html">About us</a></li>
                <li><a href="contact.html">Returns</a></li>
                <li><a href="contact.html">Privacy Policy</a></li>
                <li><a href="contact.html">Site Map</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-12 mt-4 mt-md-6 mt-lg-0">
          <div className="widget-item">
            <h4 className="widget-title">Information</h4>
            <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetTitleId-2">Information</h4>
            <div id="widgetTitleId-2" className="collapse widget-collapse-body">
              <ul className="widget-nav">
                <li><a href="shop.html">New collection</a></li>
                <li><a href="shop.html">Manufacturers</a></li>
                <li><a href="shop.html">New products</a></li>
                <li><a href="shop.html">Suppliers</a></li>
                <li><a href="shop.html">Delivery &amp; returns</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-12 mt-4 mt-md-6 mt-lg-0">
          <div className="widget-item">
            <h4 className="widget-title">Follow Us On</h4>
            <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetTitleId-3">Follow Us On</h4>
            <div id="widgetTitleId-3" className="collapse widget-collapse-body">
              <ul className="widget-social-list">
                <li><a href="https://www.facebook.com/" target="_blank" rel="noopener"><i className="icon icon-social-facebook" /> Facebook</a></li>
                <li><a href="https://www.twitter.com/" target="_blank" rel="noopener"><i className="icon icon-social-twitter" /> Twitter</a></li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener"><i className="icon icon-social-instagram" /> Instagram</a></li>
                <li><a href="https://www.youtube.com/" target="_blank" rel="noopener"><i className="icon icon-social-youtube" /> Youtube</a></li>
                <li><a href="https://www.pinterest.com/" target="_blank" rel="noopener"><i className="icon icon-social-pinterest" /> Pinterest</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== End Footer Main ==*/}
  {/*== Start Footer Bottom ==*/}
  <div className="footer-bottom">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 col-12 text-center text-md-start mt-3 mt-md-0 order-1 order-md-0">
          <p className="copyright text-white">© 2024 Sigma. Made with <i className="icofont-heart-alt" /> by <a target="_blank" href="https://github.com/Huydzsss/Decor-Sigma">Decor</a></p>
        </div>
        
      </div>
    </div>
  </div>
  {/*== End Footer Bottom ==*/}
</footer>

        </div>
    )
}