import React, { useState, useRef, useEffect } from "react";
export default function Slider({ slides }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const Slide = ({ image, active }) => {
    const styles = {
      backgroundImage: `url(${image})`,
    };
    return (
      active && (
        <div className="w-full h-64 bg-red-100 relative">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={styles}
          ></div>
          <div className=" duration-300 absolute inset-0 z-10 flex justify-between items-center">
            <button
              className="bg-gray-400 hover:bg-gray-700 rounded-full text-xl text-white font-bold px-3 py-1 bg-opacity-40 ml-1"
              onClick={nextSlide}
            >
              &lt;
            </button>
            <button
              className="bg-gray-400 hover:bg-gray-700 rounded-full text-xl text-white font-bold px-3 py-1 bg-opacity-40 mr-1"
              onClick={prevSlide}
            >
              &gt;
            </button>
          </div>
        </div>
      )
    );
  };

  const prevSlide = () => {
    let slide = activeSlide - 1 < 0 ? slides.length - 1 : activeSlide - 1;
    setActiveSlide(slide);
  };

  const nextSlide = () => {
    let slide = activeSlide + 1 < slides.length ? activeSlide + 1 : 0;
    setActiveSlide(slide);
  };

  return (
    <div className="w-full">
      {slides.map((slide, index) => (
        <Slide key={index} image={slide} active={index === activeSlide} />
      ))}
    </div>
  );
}
