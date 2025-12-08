import React, { useState } from "react";
import { useProducts } from "../../context/ProductContext";

function Services() {
  const { services, loading, error } = useProducts();

  // Modal State
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);

  if (loading)
    return (
      <section id="services" className="services_section">
        <div className="services_content max-w-6xl mx-auto py-30 md:py-50 px-8">
          <div className="services_body grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-pulse">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="p-4 flex flex-col justify-between">
                <div className="w-full h-50 bg-gray-100 mb-4"></div>
                <div className="h-4 bg-gray-100 w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-100 w-1/2 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );

  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <section id="services" className="services_section">
      {/* Services */}
      <div className="services_content max-w-6xl mx-auto py-30 md:py-50 px-8">
        <h2 className="services_header text-xl font-medium uppercase mb-6 text-center">
          Choose a clothing package
        </h2>

        <div className="collection_body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((product) => (
            <button
              key={product.id}
              onClick={() => openModal(product)}
              className="p-4 flex flex-col justify-between transition-shadow text-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-70 object-contain mb-4"
              />

              <h3 className="text-gray-800 font-bold text-center text-md mb-2 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-gray-800 font-semibold text-center text-sm mb-2">
                {product.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4"
          onClick={closeModal}
        >
          <div className="">
            <div
              className="services_section p-6 max-w-lg mx-auto w-full shadow-xl gap-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-1 gap-10 items-center">
                {/* LEFT  */}
                <div className="flex flex-col items-center">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-70 h-70 object-contain mb-4"
                  />
                </div>

                {/* RIGHT  */}
                <div className="space-y-4 text-center px-5 mb-10">
                  <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                    {selectedService.title}
                  </h1>
                  <p className="text-md font-semibold text-gray-900">
                    {selectedService.description}
                  </p>
                  <p className="text-md text-gray-900">
                    {selectedService.body}
                  </p>
                </div>
                {/* <div className="md:w-2/3 flex flex-col items-center justify-center">
              <h2 className="text-xl font-bold mb-2">
                {selectedService.title}
              </h2>
              <h3 className="text-sm font-medium mb-2">
                {selectedService.heading}
              </h3>
              <p className="text-gray-700 mb-4">{selectedService.body}</p>
            </div> */}
              </div>
              <div className="mt-auto flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-black text-white py-2 px-5 hover:bg-gray-800 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
