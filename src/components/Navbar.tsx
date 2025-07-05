import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg'
          : 'backdrop-blur-sm bg-transparent'
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#2596be] rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img
                src="/logo_white.png"
                alt="Secula Studios Logo"
                className="relative z-10 object-contain w-auto h-12"
              />
            </div>
            {/* <span className="text-xl font-bold text-white">Secula Studios</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#2596be]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2596be] rounded-full"
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="relative overflow-hidden px-6 py-2 bg-[#2596be]/20 backdrop-blur-sm border border-[#2596be]/30 rounded-full text-white font-medium transition-all duration-300 hover:bg-[#2596be]/30 hover:border-[#2596be]/50 hover:shadow-lg hover:shadow-[#2596be]/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white transition-colors duration-300 border rounded-lg md:hidden bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0,
        }}
        className="overflow-hidden border-t md:hidden backdrop-blur-lg bg-black/50 border-white/20"
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-[#2596be] bg-[#2596be]/10'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-2 bg-[#2596be]/20 backdrop-blur-sm border border-[#2596be]/30 rounded-lg text-white font-medium text-center transition-all duration-300 hover:bg-[#2596be]/30"
          >
            Get Started
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;