import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";

function Services() {
  const { services, loading, error } = useProducts();

  if (loading)
    return (
      <section className="services_section">
        {/* Loading Skeleton Component */}
        <div className="services_content max-w-6xl mx-auto py-10 px-8">
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
    <section className="services_section">
      {/* Packages */}
      {/* <div className="services_content max-w-6xl mx-auto py-10 px-8">
        <h2 className="services_header text-xl font-medium uppercase mb-6 text-center">
          What we offer
        </h2>
        <div className="collection_body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-h-[40vh]"></div>
      </div> */}

      {/* Services */}
      <div className="services_content max-w-6xl mx-auto py-10 px-8">
        <h2 className="services_header text-xl font-medium uppercase mb-6 text-center">
          Choose a clothing package
        </h2>
        <div className="collection_body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((product) => (
            <Link
              to={``}
              key={product.id}
              className="p-4 flex flex-col justify-between transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-70 object-contain mb-4"
              />
              {/* Product Info */}
              <h3 className="text-gray-800 font-bold text-center text-md mb-2 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-gray-800 font-semibold text-center text-sm mb-2">
                {product.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
