import React from "react";

export default function Wishlist() {
    return (
        <div>
            <div className="page-header-area">
                <div className="page-header-content bg-img" data-bg-img="assets/images/photos/bg1.jpg">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Wishlist</li>
                    </ol>
                </div>
            </div>
            <div className="wishlist-page-area section-space">
  <div className="container">
    <table className="wishlist-table-content table-responsive">
      <thead>
        <tr>
          <th className="width-remove" />
          <th className="width-thumbnail" />
          <th className="width-name">Product</th>
          <th className="width-price"> Unit price </th>
          <th className="width-stock-status"> Stock status </th>
          <th className="width-wishlist-cart" />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="product-remove"><a href="shop-wishlist.html">×</a></td>
          <td className="product-thumbnail">
            <a href="shop-single-product.html"><img src="assets/images/shop/details/single-product-thumb-1.jpg" alt="Image" width={96} height={96} /></a>
          </td>
          <td className="product-name">
            <h5><a href="shop-single-product.html">New and sale product</a></h5>
          </td>
          <td className="product-price"><span className="amount">$120.00</span></td>
          <td className="stock-status">
            <span><i className="fa fa-check" /> In Stock</span>
          </td>
          <td className="wishlist-cart"><a href="shop-cart.html">Add to Cart</a></td>
        </tr>
        <tr>
          <td className="product-remove"><a href="shop-wishlist.html">×</a></td>
          <td className="product-thumbnail">
            <a href="shop-single-product.html"><img src="assets/images/shop/details/single-product-thumb-2.jpg" alt="Image" width={96} height={96} /></a>
          </td>
          <td className="product-name">
            <h5><a href="shop-single-product.html">This is the large title</a></h5>
          </td>
          <td className="product-price"><span className="amount">$120.00</span></td>
          <td className="stock-status">
            <span><i className="fa fa-check" /> In Stock</span>
          </td>
          <td className="wishlist-cart"><a href="shop-cart.html">Add to Cart</a></td>
        </tr>
        <tr>
          <td className="product-remove"><a href="shop-wishlist.html">×</a></td>
          <td className="product-thumbnail">
            <a href="shop-single-product.html"><img src="assets/images/shop/details/single-product-thumb-3.jpg" alt="Image" width={96} height={96} /></a>
          </td>
          <td className="product-name">
            <h5><a href="shop-single-product.html">Product with video</a></h5>
          </td>
          <td className="product-price"><span className="amount">$120.00</span></td>
          <td className="stock-status">
            <span><i className="fa fa-check" /> In Stock</span>
          </td>
          <td className="wishlist-cart"><a href="shop-cart.html">Add to Cart</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


        </div>
    )
}