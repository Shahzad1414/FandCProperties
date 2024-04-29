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

  const changeSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mt-10">
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
      <div className="flex justify-center mt-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="h-24 mx-2 cursor-pointer"
            onClick={() => changeSlide(index)}
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-16 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l"
        onClick={prevSlide}
      >
        prev
      </button>
      <button
        className="absolute top-1/2 right-16 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r"
        onClick={nextSlide}
      >
        next
      </button>
    </div>
  );
};

export default Carousel;
