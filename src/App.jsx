import React from "react";

import Announcement from "./components/layout/Announcement/Announcement";
import Header from "./components/layout/Header/Header";
// import Hero from "./components/layout/Hero/Hero";
// import Banner from "./components/layout/Banner/Banner";
// import SliderBanner from "./components/layout/SliderBanner/SliderBanner";
// import Services from "./pages/Services/Services";
import BackToTop from "./components/layout/BackToTop/BackToTop";
import ScrollToTop from "./components/helper/ScrollToTop";
import ScrollToHash from "./components/helper/ScrollToHash";

import { ProductProvider } from "./context/ProductContext";
import AppRoutes from "./routes/AppRoutes";

import "./assets/styles/globals.css";

function App() {
  return (
    <ProductProvider>
      <ScrollToHash />
      <ScrollToTop />
      <Announcement />
      <Header />
      <main className="main_background">
        {/*
        <SliderBanner />
        <Services />
        <Banner /> */}
        <AppRoutes />
        {/* <Footer /> */}
      </main>
      <BackToTop />
    </ProductProvider>
  );
}

export default App;
