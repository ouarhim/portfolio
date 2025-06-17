import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="title" 
          smooth={true} 
          duration={500} 
          spy={true}
          activeClass="text-purple-400"
          className="text-xl font-bold cursor-pointer hover:text-purple-400 transition-colors"
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <Link 
            to="branding" 
            smooth={true} 
            duration={500} 
            spy={true}
            activeClass="text-purple-400"
            className="font-bold cursor-pointer hover:text-purple-400 transition-colors"
          >
            Branding
          </Link>
          <Link 
            to="packaging" 
            smooth={true} 
            duration={500} 
            spy={true}
            activeClass="text-purple-400"
            className="font-bold cursor-pointer hover:text-purple-400 transition-colors"
          >
            Packaging
          </Link>
          <Link 
            to="book-cover" 
            smooth={true} 
            duration={500} 
            spy={true}
            activeClass="text-purple-400"
            className="font-bold cursor-pointer hover:text-purple-400 transition-colors"
          >
            Cover Design
          </Link>
          <Link 
            to="poster" 
            smooth={true} 
            duration={500} 
            spy={true}
            activeClass="text-purple-400"
            className="font-bold cursor-pointer hover:text-purple-400 transition-colors"
          >
            Poster
          </Link>
          <Link 
            to="merchandise-design" 
            smooth={true} 
            duration={500} 
            spy={true}
            activeClass="text-purple-400"
            className="font-bold cursor-pointer hover:text-purple-400 transition-colors"
          >
            Merchandise Design
          </Link>
          <Link 
            to="web-design" 
            smooth={true} 
            duration={500} 
            spy={true}
            activeClass="text-purple-400"
            className="font-bold cursor-pointer hover:text-purple-400 transition-colors"
          >
            Web Design
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            spy={true}
            activeClass="text-purple-400"
            className="font-bold cursor-pointer hover:text-purple-400 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="outline-none mobile-menu-button">
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-white" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <ul className="flex flex-col items-center space-y-4 mt-4">
          <li>
            <Link 
              to="title" 
              smooth={true} 
              duration={500} 
              spy={true}
              activeClass="text-purple-400"
              className="cursor-pointer hover:text-purple-400 transition-colors" 
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="branding" 
              smooth={true} 
              duration={500} 
              spy={true}
              activeClass="text-purple-400"
              className="cursor-pointer hover:text-purple-400 transition-colors" 
              onClick={closeMobileMenu}
            >
              Branding
            </Link>
          </li>
          <li>
            <Link 
              to="packaging" 
              smooth={true} 
              duration={500} 
              spy={true}
              activeClass="text-purple-400"
              className="cursor-pointer hover:text-purple-400 transition-colors" 
              onClick={closeMobileMenu}
            >
              Packaging
            </Link>
          </li>
          <li>
            <Link 
              to="book-cover" 
              smooth={true} 
              duration={500} 
              spy={true}
              activeClass="text-purple-400"
              className="cursor-pointer hover:text-purple-400 transition-colors" 
              onClick={closeMobileMenu}
            >
              Book Cover
            </Link>
          </li>
          <li>
            <Link 
              to="poster" 
              smooth={true} 
              duration={500} 
              spy={true}
              activeClass="text-purple-400"
              className="cursor-pointer hover:text-purple-400 transition-colors" 
              onClick={closeMobileMenu}
            >
              Poster
            </Link>
          </li>
          <li>
            <Link 
              to="merchandise-design" 
              smooth={true} 
              duration={500} 
              spy={true}
              activeClass="text-purple-400"
              className="cursor-pointer hover:text-purple-400 transition-colors" 
              onClick={closeMobileMenu}
            >
              Merchandise Design
            </Link>
          </li>
          <li>
            <Link 
              to="web-design" 
              smooth={true} 
              duration={500} 
              spy={true}
              activeClass="text-purple-400"
              className="cursor-pointer hover:text-purple-400 transition-colors" 
              onClick={closeMobileMenu}
            >
              Web Design
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              spy={true}
              activeClass="text-purple-400"
              className="cursor-pointer hover:text-purple-400 transition-colors" 
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 