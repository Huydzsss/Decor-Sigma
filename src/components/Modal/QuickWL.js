import React from "react";

export default function QuickWL(){
    return(
        <div>
           <aside className="product-action-modal modal fade" id="action-WishlistModal" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">
        <div className="product-action-view-content">
          <div className="d-flex align-items-center">
            <button type="button" className="btn-close" data-bs-dismiss="modal">
              <i className="icofont-close" />
            </button>
            <div className="modal-action-messages">
              <i className="fa fa-check-square-o" /> Added to wishlist successfully!
            </div>
          </div>
          <div className="modal-action-product">
            <div className="thumb">
              <img src="assets/images/shop/1.jpg" alt="Organic Food Juice" width={466} height={320} />
            </div>
            <h4 className="product-name"><a href="single-product.html">Product with video</a></h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</aside>

        </div>
    )
}