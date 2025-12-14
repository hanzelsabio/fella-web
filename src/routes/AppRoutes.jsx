import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import Services from "../pages/Services/Services";
import FAQ from "../components/layout/FAQ/FAQ";
import ContactPage from "../pages/Contact/ContactPage";
import ProductDetails from "../pages/Services/ProductDetails";
import ContactForm from "../pages/Contact/ContactForm";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/services" element={<Services />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/contact-form" element={<ContactForm />} />
    </Routes>
  );
}
