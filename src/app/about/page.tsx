"use client";
import { Assosciations } from "@/components/ui/Association";
import { Button } from "@/components/ui/button";
import CampusInfo from "@/components/ui/campus-info";
import Whyus from "@/components/ui/why-us";
import React, { useState } from "react";
import aboutus from "../../../public/image/aboutusimage.webp";
import Image from "next/image";
import { MdOutlineReadMore } from "react-icons/md";
import { IoAirplane } from "react-icons/io5";
import { FaEye, FaFistRaised } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleRoute = () => {
    router.push("/aboutus");
  };

  const slides = [
    {
      icon: <IoAirplane fill="#091B5A" size={50} />,
      text: "GLOBAL PLACEMENTS",
    },
    {
      icon: <FaFistRaised fill="#091B5A" size={50} />,
      text: "OUR MISSION",
    },
    {
      icon: <FaEye fill="#091B5A" size={50} />,
      text: "OUR VISION",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <>
      <div className="bg-primary text-white h-32 px-4 md:px-16 lg:px-32 flex flex-col justify-center">
        <h1 className="text-xl md:text-2xl font-bold">Home / About</h1>
      </div>

      <div className="px-4 md:px-16 lg:px-32 py-10">
        <div className="flex flex-col lg:flex-row py-10">
          <div className="w-full lg:w-1/2">
            <Image
              src={aboutus}
              alt="aboutus"
              layout="responsive"
              width={3000}
              height={2000}
              className="rounded-md"
            />
          </div>

          <div className="mt-8 lg:mt-0 lg:ml-12 w-full lg:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-5">
              ABOUT US
            </h1>
            <p className="text-sm md:text-base lg:text-md leading-relaxed">
              It gives us immense pleasure to introduce you to Global Spectra
              Institute Of Hospitality Management (GSIHM). It is located in a
              small hamlet, Pradhan Nagar, in Siliguri the foothills of
              Darjeeling.
              <br />
              <br />
              We are an ISO 9001:2015 Certified Institute AFFILIATED with
              COUNCIL FOR VOCATIONAL EDUCATION & SKILL DEVELOPMENT licensed
              under Ministry of Corporate Affairs. GSIHM was formed in the Year
              2017 by Industry Professionals coming from the Operations and HR
              background of Hospitality and Aviation. The Organisation has able
              and experienced faculties with good Academic Background and
              Professional Experience in the fields of Hotel, Aviation, Cruise
              and Travel Tourism. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nisi aut perferendis libero neque molestias! Eos
              sint aut est. Animi, ipsum? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Vero facere minus iusto maxime
              veritatis officia illum non neque molestias molestiae?
            </p>
          </div>
        </div>

        <div className="py-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-5">
            MORE INFO
          </h1>
          <p className="text-sm md:text-base lg:text-md leading-relaxed">
            It gives us immense pleasure to introduce you to Global Spectra
            Institute Of Hospitality Management (GSIHM). It is located in a
            small hamlet, Pradhan Nagar, in Siliguri the foothills of
            Darjeeling.
            <br />
            <br />
            We are an ISO 9001:2015 Certified Institute AFFILIATED with COUNCIL
            FOR VOCATIONAL EDUCATION & SKILL DEVELOPMENT licensed under Ministry
            of Corporate Affairs. GSIHM was formed in the Year 2017 by Industry
            Professionals coming from the Operations and HR background of
            Hospitality and Aviation. The Organisation has able and experienced
            faculties with good Academic Background and Professional Experience
            in the fields of Hotel, Aviation, Cruise and Travel Tourism. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nisi aut
            perferendis libero neque molestias! Eos sint aut est. Animi, ipsum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            facere minus iusto maxime veritatis officia illum non neque
            molestias molestiae?
          </p>
        </div>

        <div className="px-6 md:px-12 lg:px-36 pb-10 md:pb-16 lg:pb-20">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-5">
              WHY US
            </h1>
          </div>

          <div className="block md:hidden relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
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
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
            >
              ❯
            </button>
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
        </div>
        <CampusInfo />
        <Assosciations />
      </div>
    </>
  );
};

export default About;
