import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import ContactPage from "../pages/Contact/ContactPage";
import ProductDetails from "../pages/Services/ProductDetails";
import ContactForm from "../pages/Contact/ContactForm";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/contact-form" element={<ContactForm />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
