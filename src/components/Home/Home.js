import React from "react";
import Header from "./Header";
import Slide from "./Slide";
import Service from "./Service";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import ProductPage from "./ProductPage";
import Banner from "./Banner";
import QuickCart from "../Modal/QuickCart";
import QuickView from "../Modal/QuickView";
import QuickWL from "../Modal/QuickWL";


export default function Home() {
  
  return (
    <div>
      <Header />
      <main className="main-content">
        <Slide />
        <Banner />
        <ProductPage />
        <Service />
        <Testimonials />
        <Footer />
        <QuickView />
        <QuickWL />
        
      </main>
    </div>

  );
} 