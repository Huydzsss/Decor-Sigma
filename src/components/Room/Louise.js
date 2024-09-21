import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Home/Header";
import HeaderS from "../Shop/HeaderS";
import QuickCart from "../Modal/QuickCart";
import QuickView from "../Modal/QuickView";
import Footer from "../Home/Footer";
import axios from "axios";


export default function Louise() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [error, setError] = useState(null);
    const [sortOption, setSortOption] = useState("title-ascending");
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios.get('http://localhost:3001/techwiz/product_categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                setError("There was an error fetching the categories!");
                console.error("There was an error fetching the categories!", error);
            });

        axios.get('http://localhost:3001/techwiz/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                setError("There was an error fetching the products!");
                console.error("There was an error fetching the products!", error);
            });
    }, []);

    useEffect(() => {
        const storedCartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const handleQuickView = (product) => {
        setSelectedProduct(product);
        const quickViewModal = new window.bootstrap.Modal(document.getElementById('action-QuickViewModal'));
        quickViewModal.show();
    };

    const handleAddToCart = (product) => {
        const updatedCartItems = [...cartItems, product];
        setCartItems(updatedCartItems);
        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        const quickCartModal = new window.bootstrap.Modal(document.getElementById('action-CartAddModal'));
        quickCartModal.show();
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
        setCurrentPage(1);
    };

    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
        setCurrentPage(1);
    };

    const sortedProducts = [...products].sort((a, b) => {
        switch (sortOption) {
            case "title-ascending":
                return a.product_name.localeCompare(b.product_name);
            case "title-descending":
                return b.product_name.localeCompare(a.product_name);
            case "price-ascending":
                return a.price - b.price;
            case "price-descending":
                return b.price - a.price;
            case "created-ascending":
                return new Date(a.createdAt) - new Date(b.createdAt);
            case "created-descending":
                return new Date(b.createdAt) - new Date(a.createdAt);
            default:
                return 0;
        }
    });

    const filteredProducts = selectedCategory
        ? sortedProducts.filter(product => product.category_id === selectedCategory)
        : sortedProducts;

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <Header cartItems={cartItems} />
            <HeaderS />
            <div className="product-area section-space">
                <div className="container">
                    <div className="shop-top-bar">
                        <div className="shop-top-bar-item">
                            <label htmlFor="SortBy">Sort by :</label>
                            <select className="select-shoing" name="SortBy" id="SortBy" onChange={handleSortChange}>
                                <option value="title-ascending">Alphabetically, A-Z</option>
                                <option value="title-descending">Alphabetically, Z-A</option>
                                <option value="price-ascending">Price, low to high</option>
                                <option value="price-descending">Price, high to low</option>
                                <option value="created-descending">Date, new to old</option>
                                <option value="created-ascending">Date, old to new</option>
                            </select>
                        </div>
                        <div className="shop-top-bar-item">
                            <p>Showing {indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} results</p>
                        </div>
                        <div className="shop-top-bar-item">
                            <label htmlFor="paginateBy">Show :</label>
                            <select className="select-shoing-count" name="paginateBy" id="paginateBy" onChange={handleItemsPerPageChange}>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12} selected>12</option>
                                <option value={13}>13</option>
                            </select>
                        </div>
                    </div>

                    <div className="tab-content">
                        <div className="tab-pane fade show active">
                            <div className="row">
                                {currentProducts.map(product => (
                                    <div className="col-sm-6 col-lg-4 mb-4" key={product.id}>
                                        <div className="product-item">
                                            <div className="product-item-thumb-wrap">
                                                <Link className="product-item-thumb" to={`/product/${product.id}`}>
                                                    <img src={product.picture} width={268} height={313} alt={product.product_name} />
                                                </Link>
                                                <span className="label">{product.type}</span>
                                                <div className="product-item-action">
                                                    <button
                                                        type="button"
                                                        className="product-action-btn action-btn-quick-view"
                                                        data-tooltip-text="Quick View"
                                                        onClick={() => handleQuickView(product)}
                                                    >
                                                        <i className="icon-magnifier" />
                                                    </button>
                                                    <button type="button" className="product-action-btn action-btn-wishlist" data-tooltip-text="Add to wishlist">
                                                        <i className="icon-heart" />
                                                    </button>
                                                    <button type="button" className="product-action-btn action-btn-compare" data-tooltip-text="Compare">
                                                        <i className="icon-refresh" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="product-action-btn action-btn-cart"
                                                        data-tooltip-text="Add to cart"
                                                        onClick={() => handleAddToCart(product)}
                                                    >
                                                        <i className="icon-bag" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product-item-info">
                                                <h5 className="product-item-title"><Link to={`/product/${product.id}`}>{product.product_name}</Link></h5>
                                                <div className="product-item-price">{product.price}$</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Pagination Controls */}
                    <ul className="page-numbers justify-content-center">
                        <li>
                            <button className="page-number prev" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                                <i className="icon-arrow-left" />
                            </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index}>
                                <button
                                    className={`page-number ${index + 1 === currentPage ? 'active' : ''}`}
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                        <li>
                            <button className="page-number next" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
                                <i className="icon-arrow-right" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <QuickView product={selectedProduct} />
            <QuickCart cartItems={cartItems} />
            <Footer />
        </div>
    );
}