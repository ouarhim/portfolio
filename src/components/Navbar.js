import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('title');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const getTargetId = (baseId) => {
    return isMobile ? `mobile-${baseId}` : baseId;
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
          onSetActive={handleSetActive}
          className="text-xl font-bold cursor-pointer hover:text-purple-400 transition-colors"
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <Link 
            to={getTargetId('branding')} 
            smooth={true} 
            duration={500} 
            spy={true}
            activeClass="text-purple-400"
            onSetActive={handleSetActive}
            className="font-bold cursor-pointer hover:text-purple-400 transition-colors"
          >
            Branding
          </Link>
          <Link 
            to={getTargetId('packaging')} 
            smooth={true} 
            duration={500} 
            spy={true}
            activeClass="text-purple-400"
            onSetActive={handleSetActive}
            className="font-bold cursor-pointer hover:text-purple-400 transition-colors"
          >
            Packaging
          </Link>
          <Link 
            to={getTargetId('book-cover')} 
            smooth={true} 
            duration={500} 
            spy={true}
            activeClass="text-purple-400"
            onSetActive={handleSetActive}
            className="font-bold cursor-pointer hover:text-purple-400 transition-colors"
          >
            Cover Design
          </Link>
          <Link 
            to={getTargetId('poster')} 
            smooth={true} 
            duration={500} 
            spy={true}
            activeClass="text-purple-400"
            onSetActive={handleSetActive}
            className="font-bold cursor-pointer hover:text-purple-400 transition-colors"
          >
            Poster
          </Link>
          <Link 
            to={getTargetId('merchandise-design')} 
            smooth={true} 
            duration={500} 
            spy={true}
            activeClass="text-purple-400"
            onSetActive={handleSetActive}
            className="font-bold cursor-pointer hover:text-purple-400 transition-colors"
          >
            Merchandise Design
          </Link>
          <Link 
            to={getTargetId('web-design')} 
            smooth={true} 
            duration={500} 
            spy={true}
            activeClass="text-purple-400"
            onSetActive={handleSetActive}
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
            onSetActive={handleSetActive}
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
              onSetActive={handleSetActive}
              className="cursor-pointer hover:text-purple-400 transition-colors" 
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="mobile-branding" 
              smooth={true} 
              duration={500} 
              spy={true}
              activeClass="text-purple-400"
              onSetActive={handleSetActive}
              className="cursor-pointer hover:text-purple-400 transition-colors" 
              onClick={closeMobileMenu}
            >
              Branding
            </Link>
          </li>
          <li>
            <Link 
              to="mobile-packaging" 
              smooth={true} 
              duration={500} 
              spy={true}
              activeClass="text-purple-400"
              onSetActive={handleSetActive}
              className="cursor-pointer hover:text-purple-400 transition-colors" 
              onClick={closeMobileMenu}
            >
              Packaging
            </Link>
          </li>
          <li>
            <Link 
              to="mobile-book-cover" 
              smooth={true} 
              duration={500} 
              spy={true}
              activeClass="text-purple-400"
              onSetActive={handleSetActive}
              className="cursor-pointer hover:text-purple-400 transition-colors" 
              onClick={closeMobileMenu}
            >
              Book Cover
            </Link>
          </li>
          <li>
            <Link 
              to="mobile-poster" 
              smooth={true} 
              duration={500} 
              spy={true}
              activeClass="text-purple-400"
              onSetActive={handleSetActive}
              className="cursor-pointer hover:text-purple-400 transition-colors" 
              onClick={closeMobileMenu}
            >
              Poster
            </Link>
          </li>
          <li>
            <Link 
              to="mobile-merchandise-design" 
              smooth={true} 
              duration={500} 
              spy={true}
              activeClass="text-purple-400"
              onSetActive={handleSetActive}
              className="cursor-pointer hover:text-purple-400 transition-colors" 
              onClick={closeMobileMenu}
            >
              Merchandise Design
            </Link>
          </li>
          <li>
            <Link 
              to="mobile-web-design" 
              smooth={true} 
              duration={500} 
              spy={true}
              activeClass="text-purple-400"
              onSetActive={handleSetActive}
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
              onSetActive={handleSetActive}
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