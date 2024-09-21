import React from "react";

export default function QuickCart({ cartItems }) {
    return (
        <div>
            <aside className="product-action-modal modal fade" id="action-CartAddModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="product-action-view-content">
                                <div className="d-flex align-items-center">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal">
                                        <i className="icofont-close" />
                                    </button>
                                    <div className="modal-action-messages">
                                        <i className="fa fa-check-square-o" /> Added to cart successfully!
                                    </div>
                                </div>
                                <div className="modal-action-product">
                                    {cartItems.length > 0 ? (
                                        cartItems.map((item, index) => (
                                            <div key={index} className="cart-item">
                                                <div className="thumb">
                                                    <img src={item.picture} alt={item.product_name} width={100} height={100} />
                                                </div>
                                                <h4 className="product-name">{item.product_name}</h4>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No items in cart.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}
