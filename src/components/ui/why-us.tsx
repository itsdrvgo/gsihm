"use client"

import React, { useState } from "react";
import { IoAirplane } from "react-icons/io5";
import { FaEye, FaFistRaised } from "react-icons/fa";
import { MdOutlineReadMore } from "react-icons/md";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "./button";

const Whyus = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleRoute = () => {
    router.push('/aboutus');
  };

  const slides = [
    {
      icon: <IoAirplane fill="#091B5A" size={50} />,
      text: 'GLOBAL PLACEMENTS'
    },
    {
      icon: <FaFistRaised fill="#091B5A" size={50} />,
      text: 'OUR MISSION'
    },
    {
      icon: <FaEye fill="#091B5A" size={50} />,
      text: 'OUR VISION'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="px-6 md:px-12 lg:px-36 pb-10 md:pb-16 lg:pb-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-5">
          WHY US
        </h1>
      </div>

      <div className="block md:hidden relative w-full overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-full flex flex-col items-center justify-center bg-white w-52 h-52 rounded-md shadow-md mx-auto p-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="flex flex-col items-center justify-center mb-5">
                {item.icon}
              </div>
              <div>
                <p className="font-semibold text-center">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full">❮</button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full">❯</button>
      </div>

      <div className="hidden md:flex justify-between items-center mx-4 md:mx-20 lg:mx-40 my-10 gap-6 md:gap-10">
        {slides.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white w-52 h-52 flex flex-col items-center justify-center rounded-md shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="flex flex-col items-center justify-center mb-5">
              {item.icon}
            </div>
            <div>
              <p className="font-semibold text-center">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-5 md:mt-0 justify-center">
        <Button  onClick={handleRoute} size={'lg'}>
          Read more
          <div className="flex flex-col items-center justify-center h-8 w-8">
            <MdOutlineReadMore size={20} />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Whyus;
