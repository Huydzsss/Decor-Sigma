import React from "react";

export default function Testimonials() {
  return (
    <div>
    <div className="testimonial-area section-space bg-img" data-bg-img="assets/images/photos/bg1.jpg">
  <div className="container">
    <div className="section-title text-center pb-2">
      <h5 className="sub-title text-uppercase text-primary mt-n1">Explore The Awesome</h5>
      <h2 className="title mb-0 mt-n2">What Client Says</h2>
    </div>
    <div className="row">
      <div className="col-lg-10 m-auto">
        <div className="swiper-container-wrap swiper-button-style2 swiper-button-nav2">
          <div className="swiper testimonial-slider-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide testimonial-item">
                <div className="testimonial-content">
                  <div className="client-thumb">
                    <img src="assets/images/photos/client1.png" alt="Image" width={100} height={98} />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit.</p>
                  <h4 className="client-name mb-n1">Hester Perkins</h4>
                </div>
              </div>
              <div className="swiper-slide testimonial-item">
                <div className="testimonial-content">
                  <div className="client-thumb">
                    <img src="assets/images/photos/client2.png" alt="Image" width={100} height={98} />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit..</p>
                  <h4 className="client-name mb-n1">Hester Perkins</h4>
                </div>
              </div>
            </div>
          </div>
          {/*== Start Swiper Navigation ==*/}
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}