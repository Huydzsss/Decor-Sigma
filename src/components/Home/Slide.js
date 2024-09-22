import React from "react";

export default function Slide() {
  return (
    <div>
    <div className="hero-slider-area position-relative">
  <div className="swiper hero-slider-container">
    <div className="swiper-wrapper">
      <div className="swiper-slide hero-slide-item" data-bg-img="assets/images/slider/slider1-bg1.png">
        <div className="container h-100">
          <div className="row align-items-center position-relative h-100">
            <div className="col-lg-6 col-md-7 col-sm-12 col-12">
              <div className="hero-slide-content">
                <h3 className="hero-slide-sub-title">A watch is a portable</h3>
                <h1 className="hero-slide-title">Wooden Store</h1>
                <p className="hero-slide-desc">Experience the decibels like your ears deserve to. Safe for the ears, <br className="d-none d-xl-block" />very for the heart.</p>
                <div className="btn-wrp d-flex align-items-center justify-content-center justify-content-md-start">
                  <a className="btn btn-secondary" href="/Shop"> Explore More <i className="icon icofont-cart-alt" /></a>
                  <div className="btn-play-wrp ms-4 ms-lg-8"><a className="btn-play ht-popup-video" data-fancybox data-type="iframe" href="https://www.youtube.com/watch?v=_9VUPq3SxOc"> <i className="icon icofont-play" /></a> View Video</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-5 col-sm-12 col-12">
              <div className="hero-slide-thumb">
                <img src="assets/images/slider/slider1-2.png" width={570} height={474} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide hero-slide-item" data-bg-img="assets/images/slider/slider1-bg1.png">
        <div className="container h-100">
          <div className="row align-items-center position-relative h-100">
            <div className="col-lg-6 col-md-7 col-sm-12 col-12">
              <div className="hero-slide-content">
                <h3 className="hero-slide-sub-title">A watch is a portable</h3>
                <h1 className="hero-slide-title">Smart Furniture</h1>
                <p className="hero-slide-desc">Experience the decibels like your ears deserve to. Safe for <br className="d-none d-xl-block" />the ears, very for the heart. A treat to your ears.</p>
                <div className="btn-wrp d-flex align-items-center justify-content-center justify-content-md-start">
                  <a className="btn btn-secondary" href="/Shop"> Explore More <i className="icon icofont-cart-alt" /></a>
                  <div className="btn-play-wrp ms-4 ms-lg-8"><a className="btn-play ht-popup-video" data-fancybox data-type="iframe" href="https://www.youtube.com/watch?v=_9VUPq3SxOc"> <i className="icon icofont-play" /></a> View Video</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-5 col-sm-12 col-12">
              <div className="hero-slide-thumb">
                <img src="assets/images/slider/slider1-1.png" width={570} height={570} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide hero-slide-item" data-bg-img="assets/images/slider/slider1-bg1.png">
        <div className="container h-100">
          <div className="row align-items-center position-relative h-100">
            <div className="col-lg-6 col-md-7 col-sm-12 col-12">
              <div className="hero-slide-content">
                <h3 className="hero-slide-sub-title">A watch is a portable</h3>
                <h1 className="hero-slide-title">Smart Furniture Minimal Store</h1>
                <p className="hero-slide-desc">Experience the decibels like your ears deserve to. Safe for <br className="d-none d-xl-block" />the ears, very for the heart. A treat to your ears.</p>
                <div className="btn-wrp d-flex align-items-center justify-content-center justify-content-md-start">
                  <a className="btn btn-secondary" href="/Shop"> Explore More <i className="icon icofont-cart-alt" /></a>
                  <div className="btn-play-wrp ms-4 ms-lg-8"><a className="btn-play ht-popup-video" data-fancybox data-type="iframe" href="https://www.youtube.com/watch?v=_9VUPq3SxOc"> <i className="icon icofont-play" /></a> View Video</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-5 col-sm-12 col-12">
              <div className="hero-slide-thumb">
                <img src="assets/images/slider/slider1-3.png" width={570} height={375} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*== Add Pagination ==*/}
    <div className="hero-slide-one-pagination" />
    {/*== Start Swiper Navigation ==*/}
    <div className="swiper-button-prev swiper-button-two" />
    <div className="swiper-button-next swiper-button-two" />
  </div>
</div>




    </div>
  )
}