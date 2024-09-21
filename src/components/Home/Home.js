import React from "react";
import Header from "./Header";
import Slide from "./Slide";
import Service from "./Service";
import Fprojects from "./Fprojects";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Footer from "./Footer";
import ProductPage from "./ProductPage";
import Banner from "./Banner";
import QuickCart from "../Modal/QuickCart";
import QuickView from "../Modal/QuickView";
import QuickWL from "../Modal/QuickWL";
import Wishlist from "../Shop/WhistList";

export default function Home() {
  
  return (
    <div>
      <Header />
      <main className="main-content">
        <Slide />
        <Banner />
        <ProductPage />
        <Service />
        <Fprojects />
        <Testimonials />
        <Blog />
        <Footer />
        <QuickView />
        <QuickWL />
        
      </main>
    </div>

  );
} 