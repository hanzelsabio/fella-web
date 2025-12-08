import React, { useState, useEffect, useRef } from "react";

function OurWorks() {
  const images = [
    "/src/assets/images/Gallery/fella-stan-1.jpg",
    "/src/assets/images/Gallery/fella-stan-2.jpg",
    "/src/assets/images/Gallery/fella-stan-3.jpg",
    "/src/assets/images/Gallery/fella-stan-3.jpg",
    "/src/assets/images/Gallery/fella-stan-2.jpg",
    "/src/assets/images/Gallery/fella-stan-1.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const sliderRef = useRef(null);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Scroll into view when current changes
  useEffect(() => {
    if (sliderRef.current) {
      const slide = sliderRef.current.children[current];
      slide?.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }, [current]);

  return (
    <section id="our-works" className="our_works_section">
      <div className="mx-auto">
        {/* ---------------- MOBILE SLIDER ---------------- */}
        <div
          className="md:hidden relative"
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onTouchStart={() => setIsInteracting(true)}
          onTouchEnd={() => setIsInteracting(false)}
        >
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="min-w-full snap-center overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Work ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white p-2"
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white p-2"
          >
            ❯
          </button>
        </div>

        {/* ---------------- DESKTOP GRID ---------------- */}
        <div className="hidden md:grid grid-cols-3">
          {images.map((src, index) => (
            <div key={index} className="w-full overflow-hidden">
              <img
                src={src}
                alt={`Work ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurWorks;
