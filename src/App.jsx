import React from "react";

import Announcement from "./components/layout/Announcement/Announcement";
import Header from "./components/layout/Header/Header";
// import Hero from "./components/layout/Hero/Hero";
// import Banner from "./components/layout/Banner/Banner";
// import SliderBanner from "./components/layout/SliderBanner/SliderBanner";
import Footer from "./components/layout/Footer/Footer";
// import Services from "./pages/Services/Services";
import BackToTop from "./components/layout/BackToTop/BackToTop";
import ScrollToTop from "./components/helper/ScrollToTop";

import { ProductProvider } from "./context/ProductContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <ProductProvider>
      <ScrollToTop />
      <Announcement />
      <Header />
      <main className="bg-black">
        {/*
        <SliderBanner />
        <Services />
        <Banner /> */}
        <AppRoutes />
      </main>
      <Footer />
      <BackToTop />
    </ProductProvider>
  );
}

export default App;
