import React, { useState, useEffect } from "react";
import Header from "../Home/Header";
import HeaderCP from "./HeaderCP";
import Footer from "../Home/Footer";
import QuickCart from "../Modal/QuickCart";

export default function Compare() {
  const [compareItems, setCompareItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCompareItems = sessionStorage.getItem("compareItems");
    if (storedCompareItems) {
      setCompareItems(JSON.parse(storedCompareItems));
    }
  }, []);

  const handleAddToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    const quickCartModal = new window.bootstrap.Modal(document.getElementById('action-CartAddModal'));
    quickCartModal.show();
  };

  const handleRemoveCompareItem = (id) => {
    const updatedCompareItems = compareItems.filter(item => item.id !== id);
    setCompareItems(updatedCompareItems);
    sessionStorage.setItem('compareItems', JSON.stringify(updatedCompareItems));
  };

  return (
    <div>
      <Header />
      <HeaderCP />
      <div className="compare-page-area section-space">
        <div className="container">
          <div className="compare-table table-responsive">
            {compareItems.length > 0 ? (
              <table className="table table-bordered mb-0">
                <tbody className="compare-table-content">
                  <tr>
                    <td className="first-column">Product</td>
                    {compareItems.map((item) => (
                      <td className="product-image-title" key={item.id}>
                        <a href={`/product/${item.id}`} className="image">
                          <img
                            className="img-fluid"
                            src={item.picture}
                            alt={item.product_name}
                            width={290}
                            height={248}
                          />
                        </a>
                        <a href="/shop" className="category">
                          {item.category}
                        </a>
                        <a href={`/product/${item.id}`} className="title">
                          {item.product_name}
                        </a>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="first-column">Description</td>
                    {compareItems.map((item) => (
                      <td className="pro-desc" key={item.id}>
                        <p>{item.description}</p>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="first-column">Price</td>
                    {compareItems.map((item) => (
                      <td className="pro-price" key={item.id}>
                        ${item.price}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="first-column">Add to cart</td>
                    {compareItems.map((item) => (
                      <td key={item.id}>
                        <a
                          href="#!"
                          onClick={() => handleAddToCart(item)}
                          className={`check-btn ${
                            item.stock === "Stock Out" ? "disabled" : ""
                          }`}
                        >
                          Add to Cart
                        </a>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="first-column">Rating</td>
                    {compareItems.map((item) => (
                      <td className="pro-ratting" key={item.id}>
                        {[...Array(item.rating)].map((_, index) => (
                          <img
                            key={index}
                            src="assets/images/icons/star.svg"
                            width={17}
                            height={17}
                            alt="icon-star"
                          />
                        ))}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="first-column">Remove</td>
                    {compareItems.map((item) => (
                      <td className="pro-remove" key={item.id}>
                        <button onClick={() => handleRemoveCompareItem(item.id)}>
                          <i className="icon-close" />
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            ) : (
              <p>No products to compare.</p>
            )}
          </div>
        </div>
      </div>
      <QuickCart cartItems={cartItems} />
      <Footer />
    </div>
  );
}
