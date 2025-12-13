import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";

function Products() {
  const { products, loading, error } = useProducts();

  if (loading)
    return (
      <section className="collection_section">
        {/* Loading Skeleton Component */}
        <div className="collection_content max-w-6xl mx-auto py-30 px-8">
          <div className="collection_body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-pulse">
            {Array.from({ length: 8 }).map((_, index) => (
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
  if (error)
    return (
      <div className="collection_content max-w-6xl mx-auto py-80 px-8">
        <p className="text-center text-red-500">{error}</p>
      </div>
    );

  return (
    <section id="services" className="collection_section">
      {/* Brand Oversized Tee Collection */}
      <div className="collection_content max-w-6xl mx-auto py-30 px-8">
        <h2 className="collection_header text-xl font-medium mb-6 text-center uppercase">
          Choose A Clothing Package
        </h2>
        <div className="collection_body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="p-4 flex flex-col justify-between transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain mb-4"
              />
              {/* Product Info */}
              <h3 className="text-gray-800 font-medium text-center text-md mb-2 line-clamp-2">
                {product.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
