import React, { useState, useEffect } from 'react';
import heroimage from '../assets/heroimage.jpg';
import silverstar from '../assets/silverstar.jpg';
import stanbic from '../assets/stanbic.jpg';
import service from '../assets/service.jpg';

const images = [heroimage, silverstar, service, stanbic];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 5s
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-2">
      <div className="text-wrap transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-sky-500">
        <h1 className="text-white text-4xl font-bold p-1 rounded text-center">
          Welcome to Our Space, The Center of Our City.
        </h1>

        {/* Carousel */}
        <div className="relative w-full mt-4 rounded-xl overflow-hidden max-h-[600px]">
          <img
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="w-full object-cover transition-opacity duration-700 ease-in-out rounded-xl"
          />
        </div>

        <p className="ml-8 mt-4 italic text-2xl text-white text-center">
          Empowering Innovation Across Africa
        </p>
      </div>
    </div>
  );
};

export default Hero;
