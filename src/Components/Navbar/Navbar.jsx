import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const hoverVariants = {
    hover: {
      scale: 1.1,
      fontWeight: 500,
      color: '#D500F9',
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  const menuItems = [
    { name: 'Naslovna', path: '/' },
    { name: 'Ples', path: '/ples' },
    { name: 'Kutak za mladence', path: '/mladenci' },
    { name: 'Rođendani', path: '/rodendan' },
    { name: 'Jutarnja čuvaonica za djecu', path: '/cuvaonica' },
    { name: 'Najam', path: '/najam' },
    { name: 'Pravilnik', path: '/pravilnik' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-magenta-500 p-4">
      <div className="flex justify-between items-center bg-white rounded-full p-4">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 p-2 w-full justify-center">
          {menuItems.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }}>
              <Link to={item.path} className="navigacija text-black drop-shadow-md hover:drop-shadow-xl">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden w-full flex justify-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-magenta-500 hover:text-black focus:outline-none p-2 rounded-full bg-white border-2 border-magenta-500"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="bg-white rounded-lg mt-2 p-4 mx-4 space-y-2 flex flex-col items-center">
          {menuItems.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <Link 
                to={item.path} 
                onClick={handleLinkClick}
                className="block text-black text-center py-3 px-4 rounded-lg hover:bg-magenta-100 transition-colors w-full"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
