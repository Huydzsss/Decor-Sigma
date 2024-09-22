import React from "react";

export default function Banner(){
    return(
        <div>
          <div className="product-banner-area section-space">
  <div className="container">
    <div className="row gx-2 mb-n6">
      <div className="col-md-6 col-12 mb-4">
        {/*== Start Product Banner Item ==*/}
        <div className="product-banner-item">
          <div className="product-banner-thumb">
            <a href="/Shop"><img src="assets/images/shop/banner/v1.png" width={580} height={243} alt="Image-HasTech" /></a>
          </div>
        </div>
        {/*== End Product Banner Item ==*/}
      </div>
      <div className="col-md-6 col-12 mb-4">
        {/*== Start Product Banner Item ==*/}
        <div className="product-banner-item">
          <div className="product-banner-thumb">
            <a href="/Shop"><img src="assets/images/shop/banner/v2.png" width={580} height={243} alt="Image-HasTech" /></a>
          </div>
        </div>
        {/*== End Product Banner Item ==*/}
      </div>
    </div>
  </div>
</div>

        </div>
    )
}