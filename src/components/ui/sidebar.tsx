import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }: any) => {
  const pathname = usePathname();

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
      transition={{  stiffness: 100 }}
    >
      <div className="flex justify-end mb-8">
        <button onClick={toggleSidebar} className="text-2xl">
          &times;
        </button>
      </div>
      <nav className="flex flex-col space-y-4">
        <Link href="/about" className={`link ${pathname === '/about' ? 'active' : ''}`} onClick={toggleSidebar}>
          About
        </Link>
        <Link href="/courses" className={`link ${pathname === '/courses' ? 'active' : ''}`} onClick={toggleSidebar}>
          Courses
        </Link>
        <Link href="/testimonial" className={`link ${pathname === '/testimonial' ? 'active' : ''}`} onClick={toggleSidebar}>
          Testimonial
        </Link>
        <Link href="/gallery" className={`link ${pathname === '/gallery' ? 'active' : ''}`} onClick={toggleSidebar}>
        Gallery
        </Link>
        <Link href="/contact" className={`link ${pathname === '/contact' ? 'active' : ''}`} onClick={toggleSidebar}>
          Contact
        </Link>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
