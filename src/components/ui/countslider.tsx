import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountSliderProps {
  startCounting: number;
}

const CountSlider: React.FC<CountSliderProps> = ({ startCounting }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [studentCount, setStudentCount] = useState<number>(0);
  const [campusCount, setCampusCount] = useState<number>(0);
  const [successCount, setSuccessCount] = useState<number>(0);

  useEffect(() => {
    let studentInterval: NodeJS.Timeout;
    let campusInterval: NodeJS.Timeout;
    let successInterval: NodeJS.Timeout;

    if (startCounting) {
      studentInterval = setInterval(() => {
        setStudentCount((prevCount) => (prevCount < 200 ? prevCount + 1 : 200));
      }, 30); // Adjust the interval for smoother counting

      campusInterval = setInterval(() => {
        setCampusCount((prevCount) => (prevCount < 2 ? prevCount + 1 : 2));
      }, 30); // Adjust the interval for smoother counting

      successInterval = setInterval(() => {
        setSuccessCount((prevCount) => (prevCount < 100 ? prevCount + 1 : 100));
      }, 30); // Adjust the interval for smoother counting
    }

    return () => {
      clearInterval(studentInterval);
      clearInterval(campusInterval);
      clearInterval(successInterval);
    };
  }, [startCounting]);

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % 3); // 3 slides: Students, Campus, Placed Successfully
  };

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-4 md:mx-20 lg:mx-52 my-10 relative">
      {/* Slider for small screens (sm and below) */}
      <div className="block sm:hidden relative overflow-hidden w-full">
        {[
          { count: studentCount, label: "Students" },
          { count: campusCount, label: "Campus" },
          { count: successCount, label: "Placed Successfully" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`bg-white w-full h-full flex flex-col items-center justify-center rounded-md shadow-md absolute top-0 left-full transform ${
              index === activeSlide ? "translate-x-0" : "translate-x-full"
            } transition-transform ease-in-out duration-500`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-6xl text-primary font-bold mb-3">
              {item.count}
              <span className="text-primary">
                {item.label === "Placed Successfully" ? "%" : "+"}
              </span>
            </h2>
            <p className="text-sm">{item.label}</p>
          </motion.div>
        ))}

        {/* Navigation buttons */}
        <button
          onClick={handlePrevSlide}
          className="bg-white w-10 h-10 rounded-full flex justify-center items-center shadow-md absolute top-0 left-0 transform translate-x-0 md:-translate-x-20"
        >
          {"<"}
        </button>
        <button
          onClick={handleNextSlide}
          className="bg-white w-10 h-10 rounded-full flex justify-center items-center shadow-md absolute top-0 right-0 transform translate-x-0 md:translate-x-20"
        >
          {">"}
        </button>
      </div>

      {/* Flex layout for medium screens (md and above) */}
      <div className="flex justify-between items-center w-full">
        {[
          { count: studentCount, label: "Students" },
          { count: campusCount, label: "Campus" },
          { count: successCount, label: "Placed Successfully" },
        ].map((item, index) => (
          <div key={index} className="mb-5 md:mb-0">
            <h2 className="md:text-6xl text-3xl text-primary font-bold mb-3">
              {item.count}
              <span className="text-primary">
                {item.label === "Placed Successfully" ? "%" : "+"}
              </span>
            </h2>
            <p className="text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountSlider;
