import React, { useState } from "react";
import QuickCart from "./QuickCart";
export default function QuickView({ product }) {
    const [cartItems, setCartItems] = useState([]);

    if (!product) {
        return null; // Nếu chưa chọn sản phẩm thì không hiển thị modal
    }

    const handleAddToCart = (product) => {
        const updatedCartItems = [...cartItems, product];
        setCartItems(updatedCartItems);
        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        const quickCartModal = new window.bootstrap.Modal(document.getElementById('action-CartAddModal'));
        quickCartModal.show();
    };

    return (
        <div>
            <aside className="product-cart-view-modal modal fade" id="action-QuickViewModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="product-quick-view-content">
                                <button type="button" className="btn-close" data-bs-dismiss="modal"><span>×</span></button>
                                <div className="row row-gutter-0">
                                    <div className="col-lg-6">
                                        <div className="single-product-slider">
                                            <div className="single-product-thumb">
                                                <div className="swiper single-product-quick-view-slider">
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <div className="thumb-item">
                                                                <img src={product.picture} width={600} height={700} alt={product.product_name} />
                                                            </div>
                                                        </div>
                                                        {/* Thêm các hình ảnh khác nếu có */}
                                                    </div>
                                                    <div className="swiper-button-next" />
                                                    <div className="swiper-button-prev" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-product-content">
                                            <h3 className="single-product-title">{product.product_name}</h3>
                                            <div className="single-product-price">{product.price}$</div>
                                            <ul className="single-product-meta">
                                                <li><span className="label">Type :</span> <span className="value">{product.type}</span></li>
                                                <li><span className="label">Brand :</span> <span className="value">{product.brand}</span></li>
                                                <li><span className="label">Description :</span> <span className="value">{product.description}</span></li>
                                            </ul>
                                            <div className="single-product-actions">
                                                <div className="single-product-actions-item">
                                                    <div className="product-quantity-count">
                                                        <button className="dec qty-btn">-</button>
                                                        <input className="product-quantity-box" type="text" name="quantity" defaultValue={1} />
                                                        <button className="inc qty-btn">+</button>
                                                    </div>
                                                </div>
                                                <div className="single-product-actions-item">
                                                    <button
                                                        className="btn btn-cart"
                                                        onClick={() => handleAddToCart(product)}
                                                    >
                                                        ADD TO CART
                                                    </button>
                                                </div>
                                                <div className="single-product-actions-item">
                                                    <button className="btn btn-icon"><i className="icon-heart" /></button>
                                                </div>
                                                <div className="single-product-actions-item">
                                                    <button className="btn btn-icon"><i className="icon-refresh" /></button>
                                                </div>
                                            </div>
                                            <ul className="single-product-meta">
                                                <li><span className="label">Share :</span> <span className="value social">
                                                    <a href="#/"><img src="assets/images/icons/social/facebook.png" alt="facebook" /></a>
                                                    <a href="#/"><img src="assets/images/icons/social/twitter.png" alt="twitter" /></a>
                                                    <a href="#/"><img src="assets/images/icons/social/pinterest.png" alt="pinterest" /></a>
                                                </span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <QuickCart cartItems={cartItems} />
        </div>
    );
}
