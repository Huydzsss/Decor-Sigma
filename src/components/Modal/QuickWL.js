import React from 'react';

export default function QuickWL({ wishlistItems = [] }) {
    return (
        <div className="modal fade" id="action-WLModal" tabIndex="-1" role="dialog" aria-labelledby="wishlistModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="wishlistModalLabel">Your Wishlist</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {wishlistItems.length === 0 ? (
                            <p>Your wishlist is empty.</p>
                        ) : (
                            <ul className="list-group">
                                {wishlistItems.map((item, index) => (
                                    <li className="list-group-item" key={index}>
                                        {item.product_name} - {item.price}$
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
