import React from "react";

export default function HeaderA() {
    return (
        <div>
            <div className="page-header-area">
                <div className="page-header-content bg-img" data-bg-img="assets/images/photos/bg1.jpg">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">About</li>
                    </ol>
                </div>
            </div>

        </div>
    )
}