"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import logo from "../../../public/image/logo.png";
import Sidebar from "./sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const linkVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header 
      className="z-50 w-full bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center font-medium text-primary px-4 md:px-36 py-6">
        <div>
        <Link href="/">  <Image src={logo} alt="logo" width={100} height={100} /> </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-2xl">
            <FaBars />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-x-4 md:gap-x-8">
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <Link href="/about" className={`link ${pathname === '/about' ? 'underline' : ''} hover:underline`}>
              About
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <Link href="/courses" className={`link ${pathname === '/courses' ? 'underline' : ''} hover:underline`}>
              Courses
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <Link href="/testimonial" className={`link ${pathname === '/testimonial' ? 'underline' : ''} hover:underline`}>
              Testimonial
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <Link href="/gallery" className={`link ${pathname === '/gallery' ? 'underline' : ''} hover:underline`}>
              Gallery
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <Link href="/contact" className={`link ${pathname === '/contact' ? 'underline' : ''} hover:underline`}>
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </motion.header>
  );
};

export default Navbar;
