import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

function Reviews() {
  const reviews = [
    {
      name: "John D.",
      text: "Amazing quality prints! Super fast turnaround time. Highly recommended!",
      rating: 5,
    },
    {
      name: "Maria S.",
      text: "Great customer service and the shirts came out perfect. Will order again!",
      rating: 4,
    },
    {
      name: "Kevin P.",
      text: "Affordable yet premium quality materials. Really impressed with the results!",
      rating: 5,
    },
    {
      name: "Anne T.",
      text: "The colors were vibrant and the details were sharp. Love it!",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);

  // Scroll to selected card on mobile
  useEffect(() => {
    if (sliderRef.current) {
      const slide = sliderRef.current.children[current];
      slide?.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }, [current]);

  // Get initials from name
  const getInitials = (name) => {
    const parts = name.split(" ");
    return parts
      .map((p) => p[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section
      id="reviews"
      className="reviews_section bg-black text-white py-30 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-3xl font-semibold mb-10">
          Client Reviews
        </h1>

        {/* ---------- MOBILE SLIDER ---------- */}
        <div className="md:hidden">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="min-w-full snap-center py-10 px-6 shadow-lg flex flex-col items-center text-center"
              >
                <p className="text-sm leading-relaxed mb-4">"{review.text}"</p>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) =>
                    i < review.rating ? (
                      <FaStar key={i} className="text-yellow-400" />
                    ) : (
                      <FaRegStar key={i} className="text-yellow-400" />
                    )
                  )}
                </div>
                <h3 className="text-lg font-bold">{review.name}</h3>
              </div>
            ))}
          </div>

          {/* Dots (optional) */}
          <div className="flex justify-center mt-4 gap-2">
            {reviews.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full cursor-pointer transition ${
                  current === index ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* ---------- DESKTOP GRID (3 cards) ---------- */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, index) => (
            <div
              key={index}
              className="py-20 px-6 shadow-lg flex flex-col items-center text-center hover:scale-105 transition"
            >
              <p className="text-sm leading-relaxed mb-4">"{review.text}"</p>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) =>
                  i < review.rating ? (
                    <FaStar key={i} className="text-yellow-400" />
                  ) : (
                    <FaRegStar key={i} className="text-yellow-400" />
                  )
                )}
              </div>
              <h3 className="text-lg font-bold">{review.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
