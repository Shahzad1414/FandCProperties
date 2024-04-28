import React, { useState } from "react";
import banner from "../assets/banner.png";
import { AiTwotoneRightCircle } from "react-icons/ai";
import { AiTwotoneLeftCircle } from "react-icons/ai";

const Carousel = () => {
  const images = [
    banner,
    banner,
    banner,
    banner,
    banner,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative md:mt-10">
      <div className="overflow-hidden relative">
        <div className="flex justify-center">
          <div className="transform transition-transform translate-x-0">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
      <button
        className="absolute top-1/2 left-16 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l"
        onClick={prevSlide}
      >
       
      </button>
      <button
        className="absolute top-1/2 right-16 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
