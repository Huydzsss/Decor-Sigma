import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import QuickCart from "../Modal/QuickCart"; // Import QuickCart
import QuickView from "../Modal/QuickView";
import QuickWL from "../Modal/QuickWL";
import QuickCompare from "../Modal/QuickCompare";

export default function ProductD() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [compareItems, setCompareItems] = useState([]);
    const [error, setError] = useState(null);
   

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/techwiz/products/${id}`);
                console.log("Product response:", response);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product:", error.response ? error.response.data : error);
                setError("There was an error fetching the product!");
            }
        };

        fetchProduct();

        const storedCartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
        const storedWishlistItems = JSON.parse(sessionStorage.getItem('wishlistItems')) || [];
        setWishlistItems(storedWishlistItems);

        const storedCompareItems = JSON.parse(sessionStorage.getItem('compareItems')) || [];
        setCompareItems(storedCompareItems);
   
    }, [id]);

    const handleAddToCart = (product) => {
        const storedCartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        const updatedCartItems = [...storedCartItems, product];
        setCartItems(updatedCartItems);
        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

        const quickCartModal = new window.bootstrap.Modal(document.getElementById('action-CartAddModal'));
        quickCartModal.show();
    };
    const handleCompare = (product) => {
        const updatedCompareItems = [...compareItems, product];
        setCompareItems(updatedCompareItems);
        sessionStorage.setItem('compareItems', JSON.stringify(updatedCompareItems));
        const quickCompareModal = new window.bootstrap.Modal(document.getElementById('action-CompareModal'));
        quickCompareModal.show();
    };


    const handleAddToWishlist = (product) => {
        const updatedWishlistItems = [...wishlistItems, product];
        setWishlistItems(updatedWishlistItems);
        sessionStorage.setItem('wishlistItems', JSON.stringify(updatedWishlistItems));

        const quickWLModal = new window.bootstrap.Modal(document.getElementById('action-WLModal'));
        quickWLModal.show();
    };


    if (error) {
        return <div>{error}</div>;
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <div className="page-header-area">
                <div className="page-header-content bg-img" data-bg-img="assets/images/photos/bg1.jpg">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Product Details</li>
                    </ol>
                </div>
            </div>
            <div className="product-details-section section-space">
                <div className="container">
                    <div className="row row-cols-md-2 row-cols-1 mb-n6">
                        <div className="col mb-4">
                            <div className="single-product-image">
                                <div className="product-image-slider swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide image-zoom">
                                            <img src={product.picture} width={600} height={700} alt={product.product_name} />
                                        </div>
                                    </div>
                                    <div className="swiper-pagination d-none" />
                                    <div className="swiper-button-prev d-none" />
                                    <div className="swiper-button-next d-none" />
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="single-product-content">
                                <h3 className="single-product-title">{product.product_name}</h3>
                                <div className="single-product-price">${product.price.toFixed(2)}</div>
                                <ul className="single-product-meta">
                                    <li><span className="label">Brand :</span> <span className="value">{product.brand}</span></li>
                                    <li><span className="label">Type :</span> <span className="value">{product.type}</span></li>
                                </ul>
                                <div className="single-product-actions">
                                    <div className="single-product-actions-item">
                                        <div className="product-quantity-count">
                                            <button className="dec qty-btn">-</button>
                                            <input className="product-quantity-box" type="number" name="quantity" defaultValue={1} min={1} />
                                            <button className="inc qty-btn">+</button>
                                        </div>
                                    </div>
                                    <div className="single-product-actions-item">
                                        <button className="btn btn-cart" onClick={() => handleAddToCart(product)}>ADD TO CART</button>
                                    </div>
                                    <div className="single-product-actions-item">
                                        <button className="btn btn-icon" onClick={() => handleAddToWishlist(product)}><i className="icon-heart" /></button>
                                    </div>
                                    <div className="single-product-actions-item">
                                        <button className="btn btn-icon" onClick={()=> handleCompare(product)}><i className="icon-refresh" /></button>
                                    </div>
                                </div>
                                

                            </div>
                            <ul className="single-product-meta">
                                <li><span className="label">Categories :</span> <span className="value links">
                                    <a href="/Shop">Accessories</a>
                                    <a href="/Shop">Deal Collections</a>
                                    <a href="/Shop">New Products</a>
                                    <a href="/Shop">Upsell Products</a>
                                </span></li>
                                <li><span className="label">Tags :</span> <span className="value links">
                                    <a href="/Shop">black</a>
                                    <a href="/Shop">fiber</a>
                                    <a href="/Shop">leather</a>
                                </span></li>

                            </ul>

                        </div>

                    </div>
                    <div className="single-product-description-area">
                        <div className="nav single-product-description-area-nav">
                            <button className="active" data-bs-toggle="tab" data-bs-target="#product-description">Description</button>
                            <button data-bs-toggle="tab" data-bs-target="#product-comments">Comments</button>
                            <button data-bs-toggle="tab" data-bs-target="#product-reviews">Reviews</button>
                            <button data-bs-toggle="tab" data-bs-target="#product-size-chart">Size Chart</button>
                            <button data-bs-toggle="tab" data-bs-target="#product-shipping-policy">Shipping Policy</button>
                        </div>
                        <div className="tab-content">
                            {/* Description Start */}
                            <div className="tab-pane fade show active" id="product-description">
                                <div className="single-product-description">
                                    <p>{product.description}</p>
                                </div>
                            </div>
                            {/* Description End */}
                            {/* Comments Start */}
                            <div className="tab-pane fade" id="product-comments">
                                <div className="block-title-2">
                                    <h4 className="title mb-4 fw-bold">Comments (2)</h4>
                                </div>
                                {/* Comment List Start */}
                                <ul className="comment-list list-unstyled">
                                    <li className="mb-3">
                                        <div className="comment-item">
                                            <div className="comment-content">
                                                <div className="comment-meta">
                                                    <h5 className="comment-name">Edna Watson</h5>
                                                    <span className="comment-date">November 27, 2023</span>
                                                </div>
                                                <p>Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.</p>
                                                <a href="#" className="comment-reply">Reply</a>
                                            </div>
                                        </div>
                                        <ul className="comment-child list-unstyled">
                                            <li>
                                                <div className="comment-item">
                                                    <div className="comment-content">
                                                        <div className="comment-meta">
                                                            <h5 className="comment-name">Hester Perkins</h5>
                                                            <span className="comment-date">November 27, 2023</span>
                                                        </div>
                                                        <p>Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.</p>
                                                        <a href="#" className="comment-reply">Reply</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                {/* Comment List End */}
                              
                                {/* Comment Form Start */}
                               
                                {/* Comment Form End */}
                            </div>

                            {/* Comments End */}
                            {/* Reviews Start */}
                            <div className="tab-pane fade" id="product-reviews">
                                <div className="block-title-2">
                                    <h4 className="title fw-bold mb-4">Customer Reviews</h4>
                                </div>
                                {/* Review List Start */}
                                <div className="review-list">
                                    <div className="review-item">
                                        <div className="review-content">
                                            
                                            <div className="review-meta">
                                                <h5 className="review-name">Edna Watson</h5>
                                                <span className="review-date">November 27, 2023</span>
                                            </div>
                                            <p>Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.</p>
                                        </div>
                                    </div>
                                    <div className="review-item">
                                        <div className="review-content">
                                            
                                            <div className="review-meta">
                                                <h5 className="review-name">Hester Perkins</h5>
                                                <span className="review-date">November 27, 2023</span>
                                            </div>
                                            <p>Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Review List End */}
                              
                                {/* Review Form Start */}
                                
                                {/* Review Form End */}
                            </div>
                            {/* Reviews End */}
                            {/* Size Chart Start */}
                            <div className="tab-pane fade" id="product-size-chart">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td className="cun-name"><span>UK</span></td>
                                            <td>18</td>
                                            <td>20</td>
                                            <td>22</td>
                                            <td>24</td>
                                            <td>26</td>
                                        </tr>
                                        <tr>
                                            <td className="cun-name"><span>European</span></td>
                                            <td>46</td>
                                            <td>48</td>
                                            <td>50</td>
                                            <td>52</td>
                                            <td>54</td>
                                        </tr>
                                        <tr>
                                            <td className="cun-name"><span>usa</span></td>
                                            <td>14</td>
                                            <td>16</td>
                                            <td>18</td>
                                            <td>20</td>
                                            <td>22</td>
                                        </tr>
                                        <tr>
                                            <td className="cun-name"><span>Australia</span></td>
                                            <td>28</td>
                                            <td>10</td>
                                            <td>12</td>
                                            <td>14</td>
                                            <td>16</td>
                                        </tr>
                                        <tr>
                                            <td className="cun-name"><span>Canada</span></td>
                                            <td>24</td>
                                            <td>18</td>
                                            <td>14</td>
                                            <td>42</td>
                                            <td>36</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Size Chart End */}
                            {/* Shipping Policy Start */}
                            <div className="tab-pane fade" id="product-shipping-policy">
                                <div className="block-title-2">
                                    <h4 className="title fw-bold mb-4">Shipping policy of our store</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate</p>
                                <ul>
                                    <li>1-2 business days (Typically by end of day)</li>
                                    <li>30 days money back guaranty</li>
                                    <li>24/7 live support</li>
                                    <li>odio dignissim qui blandit praesent</li>
                                    <li>luptatum zzril delenit augue duis dolore</li>
                                    <li>te feugait nulla facilisi.</li>
                                </ul>
                                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum</p>
                                <p>claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per</p>
                                <p>seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                            </div>
                            {/* Shipping Policy End */}
                        </div>
                    </div>

                </div>
            </div>

            <QuickCart cartItems={cartItems} />
            <QuickWL wishlistItems={wishlistItems}/>
            <QuickCompare compareItems={compareItems}/>
            <Footer />
        </div>
    );
}
