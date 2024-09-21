import React from "react";

export default function Fprojects(){
    return(
        <div>
            <div className="product-area section-space position-relative">
  <div className="container">
    <div className="section-title text-center">
      <h5 className="sub-title text-uppercase text-primary mt-n1">Awesome Products</h5>
      <h2 className="title mb-0 mt-n2">Featured Collections</h2>
    </div>
    <div className="swiper-container-wrap swiper-button-style swiper-button-nav14">
      {/*== Start Swiper Navigation ==*/}
      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />
      <div className="swiper product-slider-container swiper-shadow-space">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            {/*== Start Product Item ==*/}
            <div className="product-item">
              <div className="product-item-thumb-wrap">
                <a className="product-item-thumb" href="shop-single-product.html">
                  <img src="assets/images/shop/1.jpg" width={268} height={313} alt="Image-HasTech" />
                </a>
                <span className="label">Sale</span>
                <span className="label label-two">-15%</span>
                <span className="label label-new">New</span>
                <div className="product-item-action">
                  <button type="button" className="product-action-btn action-btn-quick-view" data-tooltip-text="Quick View" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                    <i className="icon-magnifier" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-wishlist" data-tooltip-text="Add to wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                    <i className="icon-heart" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-compare" data-tooltip-text="Compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                    <i className="icon-refresh" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-cart" data-tooltip-text="Add to cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                    <i className="icon-bag" />
                  </button>
                </div>
              </div>
              <div className="product-item-info">
                <h5 className="product-item-title"><a href="shop-single-product.html">1. New and sale badge product</a></h5>
                <div className="product-item-price"><span className="price-old">$130.00</span> $110.00</div>
                <div className="product-item-review-icon">
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                </div>
              </div>
            </div>
            {/*== End Product Item ==*/}
          </div>
          <div className="swiper-slide">
            {/*== Start Product Item ==*/}
            <div className="product-item">
              <div className="product-item-thumb-wrap">
                <div className="tab-content product-item-tab-content" id="productItem22-tabContent">
                  <div className="tab-pane fade show active" id="product-item1" role="tabpanel" aria-labelledby="product-item1-tab">
                    <a className="product-item-thumb" href="shop-single-product.html">
                      <img src="assets/images/shop/2.jpg" width={268} height={313} alt="Image-HasTech" />
                    </a>
                  </div>
                  <div className="tab-pane fade" id="product-item2" role="tabpanel" aria-labelledby="product-item2-tab">
                    <a className="product-item-thumb" href="shop-single-product.html">
                      <img src="assets/images/shop/3.jpg" width={268} height={313} alt="Image-HasTech" />
                    </a>
                  </div>
                  <div className="tab-pane fade" id="product-item3" role="tabpanel" aria-labelledby="product-item3-tab">
                    <a className="product-item-thumb" href="shop-single-product.html">
                      <img src="assets/images/shop/4.jpg" width={268} height={313} alt="Image-HasTech" />
                    </a>
                  </div>
                </div>
                <div className="nav nav-tabs product-item-tab-btn" id="productItem22-tab" role="tablist">
                  <button className="nav-link active" id="product-item1-tab" data-bs-toggle="tab" data-bs-target="#product-item1" type="button" role="tab" aria-controls="product-item1" aria-selected="true" data-bg-img="assets/images/shop/2.jpg" />
                  <button className="nav-link" id="product-item2-tab" data-bs-toggle="tab" data-bs-target="#product-item2" type="button" role="tab" aria-controls="product-item2" aria-selected="false" data-bg-img="assets/images/shop/3.jpg" />
                  <button className="nav-link" id="product-item3-tab" data-bs-toggle="tab" data-bs-target="#product-item3" type="button" role="tab" aria-controls="product-item3" aria-selected="false" data-bg-img="assets/images/shop/4.jpg" />
                </div>
                <span className="label">Sale</span>
                <span className="label label-two">-10%</span>
                <div className="product-item-action">
                  <button type="button" className="product-action-btn action-btn-quick-view" data-tooltip-text="Quick View" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                    <i className="icon-magnifier" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-wishlist" data-tooltip-text="Add to wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                    <i className="icon-heart" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-compare" data-tooltip-text="Compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                    <i className="icon-refresh" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-cart" data-tooltip-text="Add to cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                    <i className="icon-bag" />
                  </button>
                </div>
              </div>
              <div className="product-item-info">
                <h5 className="product-item-title"><a href="shop-single-product.html">10. This is the large title</a></h5>
                <div className="product-item-price"><span className="price-old">$21.00</span> $19.00</div>
                <div className="product-item-review-icon">
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                </div>
              </div>
            </div>
            {/*== End Product Item ==*/}
          </div>
          <div className="swiper-slide">
            {/*== Start Product Item ==*/}
            <div className="product-item">
              <div className="product-item-thumb-wrap">
                <div className="tab-content product-item-tab-content" id="productItem23-tabContent">
                  <div className="tab-pane fade show active" id="product-item4" role="tabpanel" aria-labelledby="product-item4-tab">
                    <a className="product-item-thumb" href="shop-single-product.html">
                      <img src="assets/images/shop/3.jpg" width={268} height={313} alt="Image-HasTech" />
                    </a>
                  </div>
                  <div className="tab-pane fade" id="product-item5" role="tabpanel" aria-labelledby="product-item5-tab">
                    <a className="product-item-thumb" href="shop-single-product.html">
                      <img src="assets/images/shop/4.jpg" width={268} height={313} alt="Image-HasTech" />
                    </a>
                  </div>
                  <div className="tab-pane fade" id="product-item6" role="tabpanel" aria-labelledby="product-item6-tab">
                    <a className="product-item-thumb" href="shop-single-product.html">
                      <img src="assets/images/shop/5.jpg" width={268} height={313} alt="Image-HasTech" />
                    </a>
                  </div>
                </div>
                <div className="nav nav-tabs product-item-tab-btn" id="productItem23-tab" role="tablist">
                  <button className="nav-link active" id="product-item4-tab" data-bs-toggle="tab" data-bs-target="#product-item4" type="button" role="tab" aria-controls="product-item4" aria-selected="true" data-bg-img="assets/images/shop/3.jpg" />
                  <button className="nav-link" id="product-item5-tab" data-bs-toggle="tab" data-bs-target="#product-item5" type="button" role="tab" aria-controls="product-item5" aria-selected="false" data-bg-img="assets/images/shop/4.jpg" />
                  <button className="nav-link" id="product-item6-tab" data-bs-toggle="tab" data-bs-target="#product-item6" type="button" role="tab" aria-controls="product-item6" aria-selected="false" data-bg-img="assets/images/shop/5.jpg" />
                </div>
                <div className="product-item-action">
                  <button type="button" className="product-action-btn action-btn-quick-view" data-tooltip-text="Quick View" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                    <i className="icon-magnifier" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-wishlist" data-tooltip-text="Add to wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                    <i className="icon-heart" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-compare" data-tooltip-text="Compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                    <i className="icon-refresh" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-cart" data-tooltip-text="Add to cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                    <i className="icon-bag" />
                  </button>
                </div>
              </div>
              <div className="product-item-info">
                <h5 className="product-item-title"><a href="shop-single-product.html">11. Product with video</a></h5>
                <div className="product-item-price"> $39.00</div>
                <div className="product-item-review-icon">
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                </div>
              </div>
            </div>
            {/*== End Product Item ==*/}
          </div>
          <div className="swiper-slide">
            {/*== Start Product Item ==*/}
            <div className="product-item">
              <div className="product-item-thumb-wrap">
                <div className="tab-content product-item-tab-content" id="productItem24-tabContent">
                  <div className="tab-pane fade show active" id="product-item7" role="tabpanel" aria-labelledby="product-item7-tab">
                    <a className="product-item-thumb" href="shop-single-product.html">
                      <img src="assets/images/shop/4.jpg" width={268} height={313} alt="Image-HasTech" />
                    </a>
                  </div>
                  <div className="tab-pane fade" id="product-item8" role="tabpanel" aria-labelledby="product-item8-tab">
                    <a className="product-item-thumb" href="shop-single-product.html">
                      <img src="assets/images/shop/5.jpg" width={268} height={313} alt="Image-HasTech" />
                    </a>
                  </div>
                  <div className="tab-pane fade" id="product-item9" role="tabpanel" aria-labelledby="product-item9-tab">
                    <a className="product-item-thumb" href="shop-single-product.html">
                      <img src="assets/images/shop/6.jpg" width={268} height={313} alt="Image-HasTech" />
                    </a>
                  </div>
                </div>
                <div className="nav nav-tabs product-item-tab-btn" id="productItem24-tab" role="tablist">
                  <button className="nav-link active" id="product-item7-tab" data-bs-toggle="tab" data-bs-target="#product-item7" type="button" role="tab" aria-controls="product-item7" aria-selected="true" data-bg-img="assets/images/shop/4.jpg" />
                  <button className="nav-link" id="product-item8-tab" data-bs-toggle="tab" data-bs-target="#product-item8" type="button" role="tab" aria-controls="product-item8" aria-selected="false" data-bg-img="assets/images/shop/5.jpg" />
                  <button className="nav-link" id="product-item9-tab" data-bs-toggle="tab" data-bs-target="#product-item9" type="button" role="tab" aria-controls="product-item9" aria-selected="false" data-bg-img="assets/images/shop/6.jpg" />
                </div>
                <span className="label">Sale</span>
                <span className="label label-two">-11%</span>
                <div className="product-item-action">
                  <button type="button" className="product-action-btn action-btn-quick-view" data-tooltip-text="Quick View" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                    <i className="icon-magnifier" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-wishlist" data-tooltip-text="Add to wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                    <i className="icon-heart" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-compare" data-tooltip-text="Compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                    <i className="icon-refresh" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-cart" data-tooltip-text="Add to cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                    <i className="icon-bag" />
                  </button>
                </div>
              </div>
              <div className="product-item-info">
                <h5 className="product-item-title"><a href="shop-single-product.html">10. This is the large title</a></h5>
                <div className="product-item-price"><span className="price-old">$21.00</span> $19.00</div>
                <div className="product-item-review-icon">
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                </div>
              </div>
            </div>
            {/*== End Product Item ==*/}
          </div>
          <div className="swiper-slide">
            {/*== Start Product Item ==*/}
            <div className="product-item">
              <div className="product-item-thumb-wrap">
                <a className="product-item-thumb" href="shop-single-product.html">
                  <img src="assets/images/shop/5.jpg" width={268} height={313} alt="Image-HasTech" />
                </a>
                <span className="label label-new">New</span>
                <div className="product-item-action">
                  <button type="button" className="product-action-btn action-btn-quick-view" data-tooltip-text="Quick View" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                    <i className="icon-magnifier" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-wishlist" data-tooltip-text="Add to wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                    <i className="icon-heart" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-compare" data-tooltip-text="Compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                    <i className="icon-refresh" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-cart" data-tooltip-text="Add to cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                    <i className="icon-bag" />
                  </button>
                </div>
              </div>
              <div className="product-item-info">
                <h5 className="product-item-title"><a href="shop-single-product.html">2. New badge product</a></h5>
                <div className="product-item-price">$80.00</div>
                <div className="product-item-review-icon">
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                </div>
              </div>
            </div>
            {/*== End Product Item ==*/}
          </div>
          <div className="swiper-slide">
            {/*== Start Product Item ==*/}
            <div className="product-item">
              <div className="product-item-thumb-wrap">
                <a className="product-item-thumb" href="shop-single-product.html">
                  <img src="assets/images/shop/6.jpg" width={268} height={313} alt="Image-HasTech" />
                </a>
                <span className="label">Sale</span>
                <span className="label label-two">-18%</span>
                <div className="product-item-action">
                  <button type="button" className="product-action-btn action-btn-quick-view" data-tooltip-text="Quick View" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                    <i className="icon-magnifier" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-wishlist" data-tooltip-text="Add to wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                    <i className="icon-heart" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-compare" data-tooltip-text="Compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                    <i className="icon-refresh" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-cart" data-tooltip-text="Add to cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                    <i className="icon-bag" />
                  </button>
                </div>
              </div>
              <div className="product-item-info">
                <h5 className="product-item-title"><a href="shop-single-product.html">3. Variable product</a></h5>
                <div className="product-item-price"><span className="price-old">$85.00</span> $70.00</div>
                <div className="product-item-review-icon">
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                </div>
              </div>
            </div>
            {/*== End Product Item ==*/}
          </div>
          <div className="swiper-slide">
            {/*== Start Product Item ==*/}
            <div className="product-item">
              <div className="product-item-thumb-wrap">
                <a className="product-item-thumb" href="shop-single-product.html">
                  <img src="assets/images/shop/7.jpg" width={268} height={313} alt="Image-HasTech" />
                </a>
                <span className="label">Soldout</span>
                <div className="product-item-action">
                  <button type="button" className="product-action-btn action-btn-quick-view" data-tooltip-text="Quick View" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                    <i className="icon-magnifier" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-wishlist" data-tooltip-text="Add to wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                    <i className="icon-heart" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-compare" data-tooltip-text="Compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                    <i className="icon-refresh" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-cart" data-tooltip-text="Add to cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                    <i className="icon-bag" />
                  </button>
                </div>
                <div className="countdown1" data-countdown="2025/01/05" />
              </div>
              <div className="product-item-info">
                <h5 className="product-item-title"><a href="shop-single-product.html">4. Soldout product</a></h5>
                <div className="product-item-price"><span className="price-old">$29.00</span> $19.00</div>
                <div className="product-item-review-icon">
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                </div>
              </div>
            </div>
            {/*== End Product Item ==*/}
          </div>
          <div className="swiper-slide">
            {/*== Start Product Item ==*/}
            <div className="product-item">
              <div className="product-item-thumb-wrap">
                <a className="product-item-thumb" href="shop-single-product.html">
                  <img src="assets/images/shop/8.jpg" width={268} height={313} alt="Image-HasTech" />
                </a>
                <div className="product-item-action">
                  <button type="button" className="product-action-btn action-btn-quick-view" data-tooltip-text="Quick View" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                    <i className="icon-magnifier" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-wishlist" data-tooltip-text="Add to wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                    <i className="icon-heart" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-compare" data-tooltip-text="Compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                    <i className="icon-refresh" />
                  </button>
                  <button type="button" className="product-action-btn action-btn-cart" data-tooltip-text="Add to cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                    <i className="icon-bag" />
                  </button>
                </div>
              </div>
              <div className="product-item-info">
                <h5 className="product-item-title"><a href="shop-single-product.html">5. Simple product</a></h5>
                <div className="product-item-price">$50.00</div>
                <div className="product-item-review-icon">
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" />
                </div>
              </div>
            </div>
            {/*== End Product Item ==*/}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        </div>
    )
}