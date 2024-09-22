import React, { useState, useEffect } from "react";
import axios from "axios";
import QuickView from "../Modal/QuickView";
import QuickCart from "../Modal/QuickCart";
import Header from "./Header";
import QuickCompare from "../Modal/QuickCompare";
import QuickWL from "../Modal/QuickWL";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [compareItems, setCompareItems] = useState(() => {
    const savedCompare = sessionStorage.getItem("compareItems");
    return savedCompare ? JSON.parse(savedCompare) : [];
  });
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = sessionStorage.getItem("wishlistItems");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = sessionStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    axios.get('http://localhost:3001/techwiz/products')
      .then(response => {
        setProducts(response.data || []);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
      
  }, []);
  const handleCompare = (product) => {
    const updatedCompareItems = [...compareItems, product];
    setCompareItems(updatedCompareItems);
    sessionStorage.setItem('compareItems', JSON.stringify(updatedCompareItems));
    const quickCompareModal = new window.bootstrap.Modal(document.getElementById('action-CompareModal'));
    quickCompareModal.show();
};

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    const quickViewModal = new window.bootstrap.Modal(document.getElementById('action-QuickViewModal'));
    quickViewModal.show();
  };
  const handleAddToWishlist = (product) => {
    const updatedWishlistItems = [...wishlistItems, product];
    setWishlistItems(updatedWishlistItems);
    sessionStorage.setItem('wishlistItems', JSON.stringify(updatedWishlistItems));

    const quickWLModal = new window.bootstrap.Modal(document.getElementById('action-WLModal'));
    quickWLModal.show();
};

  const handleAddToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    const quickCartModal = new window.bootstrap.Modal(document.getElementById('action-CartAddModal'));
    quickCartModal.show();
  };

  return (
    <div>
      
      <div className="product-area section-space position-relative mt-n5">
        <div className="container">
          <div className="section-title text-center">
            <h5 className="sub-title text-uppercase text-primary mt-n1">Explore The Awesome</h5>
            <h2 className="title mb-0 mt-n2">Various Products</h2>
          </div>
          <div className="product-tab-content">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="new-products-tab" data-bs-toggle="tab" data-bs-target="#new-products" type="button" role="tab" aria-controls="new-products" aria-selected="true">New Products</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="best-selling-product-tab" data-bs-toggle="tab" data-bs-target="#best-selling-product" type="button" role="tab" aria-controls="best-selling-product" aria-selected="false">Best Selling</button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="new-products" role="tabpanel" aria-labelledby="new-products-tab">
                <div className="swiper-container-wrap swiper-button-style swiper-button-nav6">
                  <div className="swiper-button-prev" />
                  <div className="swiper-button-next" />
                  <div className="swiper product-tab-one-slider swiper-shadow-space">
                    <div className="swiper-wrapper">
                      {products.filter(product => product.best_seller === 0).length > 0 ? products.filter(product => product.best_seller === 0).map(product => (
                        <div className="swiper-slide" key={product.id}>
                          <div className="product-item">
                            <div className="product-item-thumb-wrap">
                              <a className="product-item-thumb" href={`/Shop?id=${product.id}`}>
                                <img src={product.picture} width={268} height={313} alt={product.product_name} />
                              </a>
                              {product.labels && product.labels.map(label => (
                                <span className={`label ${label.type}`} key={label.type}>{label.text}</span>
                              ))}
                              <div className="product-item-action">
                                <button type="button" className="product-action-btn action-btn-quick-view" onClick={() => handleQuickView(product)}>
                                  <i className="icon-magnifier" />
                                </button>
                                <button type="button" className="product-action-btn action-btn-wishlist" onClick={() => handleAddToWishlist(product)}>
                                  <i className="icon-heart" />
                                </button>
                                <button type="button" className="product-action-btn action-btn-compare" onClick={() => handleCompare(product)}>
                                  <i className="icon-refresh" />
                                </button>
                                <button type="button" className="product-action-btn action-btn-cart" onClick={() => handleAddToCart(product)}>
                                  <i className="icon-bag" />
                                </button>
                              </div>
                            </div>
                            <div className="product-item-info">
                              <h5 className="product-item-title"><a href={`/Shop?id=${product.id}`}>{product.product_name}</a></h5>
                              <div className="product-item-price">
                                {product.price && <span className="price-old">${product.price}</span>}
                                ${product.price}
                              </div>
                              <div className="product-item-review-icon">
                                {[...Array(product.rating)].map((_, i) => (
                                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" key={i} />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )) : <p>No products available</p>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="best-selling-product" role="tabpanel" aria-labelledby="best-selling-product-tab">
                <div className="swiper-container-wrap swiper-button-style swiper-button-nav11 mb-n6">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper product-tab-five-grid-slider">
                    <div className="swiper-wrapper">
                      {products.filter(product => product.best_seller === 1).length > 0 ? products.filter(product => product.best_seller === 1).map(product => (
                        <div className="swiper-slide" key={product.id}>
                          <div className="product-item mb-4">
                            <div className="product-item-thumb-wrap">
                              <a className="product-item-thumb" href={`/Shop?id=${product.id}`}>
                                <img src={product.picture} width={268} height={313} alt={product.product_name} />
                              </a>
                              {product.labels && product.labels.map(label => (
                                <span className={`label ${label.type}`} key={label.type}>{label.text}</span>
                              ))}
                              <div className="product-item-action">
                                <button type="button" className="product-action-btn action-btn-quick-view" data-tooltip-text="Quick View" onClick={() => handleQuickView(product)}>
                                  <i className="icon-magnifier" />
                                </button>
                                <button type="button" className="product-action-btn action-btn-wishlist" data-tooltip-text="Add to wishlist" onClick={() =>handleAddToWishlist(product)}>
                                  <i className="icon-heart" />
                                </button>
                                <button type="button" className="product-action-btn action-btn-compare" data-tooltip-text="Add to cart" onClick={() => handleCompare(product)}>
                                  <i className="icon-refresh" />
                                </button>
                                <button type="button" className="product-action-btn action-btn-cart" data-tooltip-text="Add to cart" onClick={() => handleAddToCart(product)}>
                                  <i className="icon-bag" />
                                </button>
                              </div>
                            </div>
                            <div className="product-item-info">
                              <h5 className="product-item-title"><a href={`/Shop?id=${product.id}`}>{product.product_name}</a></h5>
                              <div className="product-item-price">
                                {product.price && <span className="price-old">${product.price}</span>}
                                ${product.price}
                              </div>
                              <div className="product-item-review-icon">
                                {[...Array(product.rating)].map((_, i) => (
                                  <img src="assets/images/icons/star.svg" width={17} height={17} alt="icon-star" key={i} />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )) : <p>No products available</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuickView product={selectedProduct}/>
      <QuickCart cartItems={cartItems}/>
      <QuickWL wishlistItems={wishlistItems}/>
      <QuickCompare compareItems={compareItems}/>
    </div>
  );
}
