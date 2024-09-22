import React, { useState, useEffect } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import QuickCart from "../Modal/QuickCart";
import axios from "axios";
export default function Shop_W() {
    const [products, setProducts] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:3001/techwiz/products')
            .then(response => {
                console.log("Products:", response.data);
                setProducts(response.data);
            })
            .catch(error => {
                setError("There was an error fetching the products!");
                console.error("Error fetching products:", error);
            });
    }, []);
    useEffect(() => {
        // Giả sử bạn lấy wishlist từ sessionStorage hoặc API
        const items = JSON.parse(sessionStorage.getItem('wishlistItems')) || [];
        setWishlistItems(items);
    }, []);

    const handleRemoveFromWishlist = (index) => {
        const updatedWishlist = wishlistItems.filter((_, i) => i !== index);
        setWishlistItems(updatedWishlist);
        sessionStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));
    };
    const handleAddToCart = (product) => {
        const updatedCartItems = [...cartItems, product];
        setCartItems(updatedCartItems);
        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    
        const updatedWishlistItems = wishlistItems.filter(item => item.id !== product.id);
        setWishlistItems(updatedWishlistItems);
        sessionStorage.setItem('wishlistItems', JSON.stringify(updatedWishlistItems));
    
        const quickCartModal = new window.bootstrap.Modal(document.getElementById('action-CartAddModal'));
        quickCartModal.show();
    };
    

    return (
        <div>
            <Header />
            <div className="wishlist-page-area section-space">
                <div className="container">
                    <table className="wishlist-table-content table-responsive">
                        <thead>
                            <tr>
                                <th className="width-remove" />
                                <th className="width-thumbnail" />
                                <th className="width-name">Product</th>
                                <th className="width-price">Unit price</th>
                                <th className="width-stock-status">Stock status</th>
                                <th className="width-wishlist-cart" />
                            </tr>
                        </thead>
                        <tbody>
                            {wishlistItems.length === 0 ? (
                                <tr>
                                    <td colSpan="6">Your wishlist is empty.</td>
                                </tr>
                            ) : (
                                wishlistItems.map((item, index) => (
                                    <tr key={index}>
                                        <td className="product-remove">
                                            <button onClick={() => handleRemoveFromWishlist(index)}>×</button>
                                        </td>
                                        <td className="product-thumbnail">
                                            <a href={`/product/${item.id}`}>
                                                <img src={item.picture} alt="Image" width={96} height={96} />
                                            </a>
                                        </td>
                                        <td className="product-name">
                                            <h5><a href={`/product/${item.id}`}>{item.product_name}</a></h5>
                                        </td>
                                        <td className="product-price"><span className="amount">${item.price}</span></td>
                                        <td className="stock-status">
                                            <span><i className="fa fa-check" /> In Stock</span>
                                        </td>
                                        <td className="wishlist-cart">
                                            <a href="#" onClick={() =>handleAddToCart(item)}>Add to Cart</a>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <QuickCart cartItems={cartItems}/>
            <Footer />
        </div>
    );
}
