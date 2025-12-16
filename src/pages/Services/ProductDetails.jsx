import React, { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";

import Footer from "../../components/layout/Footer/Footer";

function ProductDetails() {
  const { id } = useParams();
  const { products, services } = useProducts();
  const navigate = useNavigate();

  const allProducts = [...products, ...services];

  const product = allProducts.find((p) => String(p.id) === String(id));

  // States
  const [isFading, setIsFading] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);

  // Reset on product change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Recently Viewed Logic
  useEffect(() => {
    if (!product) return;

    const stored = JSON.parse(localStorage.getItem("recentlyViewed")) || [];

    const updated = stored.filter((p) => String(p.id) !== String(product.id));

    updated.unshift({
      id: product.id,
      title: product.title,
      image: product.image,
    });

    const limited = updated.slice(0, 5);

    localStorage.setItem("recentlyViewed", JSON.stringify(limited));
    setRecentlyViewed(limited);
  }, [product]);

  if (!product) return <p>Product not found.</p>;

  const featured = useMemo(() => {
    return products
      .filter((p) => String(p.id) !== String(id))
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  }, [products, id]);

  const handleProductClick = (targetId) => {
    setIsFading(true);
    setTimeout(() => {
      navigate(`/product/${targetId}`);
      setIsFading(false);
    }, 300);
  };

  const handleGetQuote = () => {
    navigate("/contact-form", {
      state: {
        service: selectedService,
        product: product, // optional, useful if needed
      },
    });
  };

  // Find the correct services in your services list
  const clothingLineService = services.find((s) =>
    s.title.toLowerCase().includes("clothing")
  );

  const noMinimumService = services.find((s) =>
    s.title.toLowerCase().includes("no minimum")
  );

  return (
    <>
      <div
        className={`transition-opacity duration-300 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Product Details */}
        <section className="max-w-6xl mx-auto py-10 md:py-20 px-8 sm:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* LEFT IMAGE */}
            <div className="flex flex-col items-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-md object-contain mb-6"
              />
            </div>

            {/* RIGHT INFO */}
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-xl md:text-2xl font-medium text-gray-800">
                {product.title}
              </h1>

              {/* Numbered List */}
              {product.body && (
                <ul className="list-disc pl-5 text-gray-700">
                  {product.body.map((item, index) => (
                    <li key={index} className="pb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Buttons */}
              <div className="pt-6 flex justify-center gap-4">
                <button
                  onClick={() =>
                    clothingLineService && openModal(clothingLineService)
                  }
                  className="w-100 bg-green-600 text-white py-2.5 px-5 hover:bg-green-700 transition"
                  style={{ cursor: "pointer" }}
                >
                  Clothing Line
                </button>

                <button
                  onClick={() =>
                    noMinimumService && openModal(noMinimumService)
                  }
                  className="w-100 bg-green-600 text-white py-2.5 px-5 hover:bg-green-700 transition"
                  style={{ cursor: "pointer" }}
                >
                  No Minimum
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="max-w-6xl mx-auto pb-30 px-8">
          <h2 className="text-xl font-medium text-gray-800 mb-6 text-center">
            Featured Products
          </h2>

          {featured.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {featured.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleProductClick(item.id)}
                  className="block p-4 text-center transition-transform duration-200 hover:scale-105"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain mb-4"
                  />
                  <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
                    {item.title}
                  </h3>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No featured products available.
            </p>
          )}
        </section>
      </div>

      <Footer />

      {/* MODAL (now correctly outside the section) */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="services_section p-6 max-w-4xl mx-auto bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 md:h-full max-w-sm mx-auto object-contain"
              />

              <div className="space-y-4 text-left px-2">
                <h1 className="text-2xl font-bold text-gray-800">
                  {selectedService.title}
                </h1>

                {/* FIXED: description is a string */}
                <p className="text-gray-900 font-semibold">
                  {selectedService.description}
                </p>

                {selectedService.body && (
                  <ol className="list-decimal list-inside text-gray-700">
                    {selectedService.body.map((item, index) => (
                      <li key={index} className="pb-1">
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              {/* FIXED — correct anchor */}
              <button
                onClick={handleGetQuote}
                className="bg-green-600 text-white py-2 px-5 hover:bg-green-700 transition"
                style={{ cursor: "pointer" }}
              >
                Get a quote
              </button>

              <button
                onClick={closeModal}
                className="bg-black text-white py-2 px-5 hover:bg-gray-800 transition"
                style={{ cursor: "pointer" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
