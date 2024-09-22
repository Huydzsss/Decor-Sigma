import React from "react";

export default function QuickCompare({ compareItems }) {
  return (
    <div>
      <aside
        className="product-action-modal modal fade"
        id="action-CompareModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="product-action-view-content">
                <div className="d-flex align-items-center">
                  <button type="button" className="btn-close" data-bs-dismiss="modal">
                    <i className="icofont-close" />
                  </button>
                  <div className="modal-action-messages">
                    <i className="fa fa-check-square-o" /> Added to compare successfully!
                  </div>
                </div>
                {compareItems.length > 0 ? (
                  compareItems.map((product) => (
                    <div className="modal-action-product" key={product.id}>
                      <div className="thumb">
                        <img
                          src={product.picture}
                          alt={product.product_name}
                          width={466}
                          height={320}
                        />
                      </div>
                      <h4 className="product-name">
                        <a href={`/product/${product.id}`}>{product.product_name}</a>
                      </h4>
                    </div>
                  ))
                ) : (
                  <p>No products in the compare list.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
