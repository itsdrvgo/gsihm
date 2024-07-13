"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./button";
import { CgArrowTopRight } from "react-icons/cg";
import student from "../../../public/image/student.png";

const Header = () => {
  return (
    <div>
      <div className="">
        <div className="content_bg">
          <div className="md:w-42 w-full md:px-32 flex flex-col md:items-left md:py-32">
            <div className="flex gap-x-30 md:py-0 py-10">

              <div className="md:w-[70%] md:text-left text-center">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:text-2xl text-xl font-bold text-primary"
                >
                  Welcome to GSIHM
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="md:text-6xl text-2xl font-bold text-primary my-8"
                >
                  Global standards of high quality learning
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className=""
                >
                  Enhancing skills for a brighter career. GSIHM’s vision is to emerge as the strongest organisation for an ethical business approach & to achieve the corporate supremacy by providing incomparable services to our clients
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Button size="lg" className="mt-10">
                    Explore Courses <CgArrowTopRight className="ml-3" />
                  </Button>
                </motion.div>
              </div>

              <div className="md:block hidden">
                <Image src={student} alt="logo" width={390} height={390} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
