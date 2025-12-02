import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import FAQ from "../components/layout/FAQ/FAQ";
import ContactPage from "../pages/Contact/ContactPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
