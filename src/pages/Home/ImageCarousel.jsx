import React, { useState, useEffect, useRef } from "react";

const images = [
  "assets/nhexteriors.png",
  "assets/numberoneeagle.png",
  "assets/npa.png",
];

const ImageCarousel = ({
  autoPlay = true,
  autoPlayInterval = 5000,
  width = "1000px",
  height = "700px",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  useEffect(() => {
    if (!autoPlay) return;

    // start interval
    timerRef.current = setInterval(nextSlide, autoPlayInterval);

    // cleanup on unmount or when deps change
    return () => clearInterval(timerRef.current);
  }, [autoPlay, autoPlayInterval, length]);

  return (
    <div
      className="carousel-container relative overflow-hidden rounded-md"
      style={{ width, height }}
    >
      {images.map((src, index) => (
        <div
          key={index}
          className={`slide absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
      >
        ›
      </button>
    </div>
  );
};

export default ImageCarousel;
