import React from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import HeaderA from "./HeaderA";
import Testimonials from "../Home/Testimonials";
export default function AboutUs() {
  return (
    <div>
      <Header/>
      <HeaderA />
      <div className="divider-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="position-relative text-center text-lg-start">
                <img src="assets/images/photos/faq.png" width={550} height={550} alt="Image" />
                <a className="btn-video-play ht-popup-video" data-fancybox data-type="iframe" href="https://www.youtube.com/watch?v=_9VUPq3SxOc"> <i className="icon icofont-play" /></a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="divider-content">
                <h2 className="divider-title">What We Are.</h2>
                <div className="divider-desc">
                  <p>Ghona provide how all this Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <p>typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece</p>
                  <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials/>

      <Footer />
    </div>
  )
}