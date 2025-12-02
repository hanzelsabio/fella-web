import React, { createContext, useContext, useState, useEffect } from "react";
import servicesData from "../data/services"; // <-- import your services data

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [services, setServices] = useState([]); // <-- ADD THIS
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      setServices(servicesData); // <-- ADD THIS
      setLoading(false);
    } catch (err) {
      setError("Failed to load data");
      setLoading(false);
    }
  }, []);

  return (
    <ProductContext.Provider
      value={{
        services, // <-- MAKE IT AVAILABLE
        loading,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
