import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      
      { name: 'Software Development', href: '/services' },
      { name: 'Web Development', href: '/services' },
      { name: 'Branding', href: '/services' },
      { name: 'Consulting', href: '/services' },
      { name: 'UI/UX Design', href: '/services' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    Resources: [
      { name: 'Case Studies', href: '/portfolio' },
      { name: 'Free Consultation', href: '/contact' },
      { name: 'Partnership', href: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    {icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },

  ];

  return (
    <footer className="relative mt-20">
      <div className="backdrop-blur-xl bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 group mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#2596be] rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <span className="text-white font-bold text-xl">Secula Studios</span>
              </Link>
              <p className="text-white/70 mb-6 max-w-md">
                Crafting digital experiences that matter. We bring your vision to life through innovative design and cutting-edge development.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-white/60">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-[#2596be]" />
                  <span>support@seculastudios.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-[#2596be]" />
                  <span>+27 (63) 727-7356</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-[#2596be]" />
                  <span>7 Ritson Road, Berea Durban</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-white font-semibold mb-4">{title}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-white/60 hover:text-[#2596be] transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div>
                <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
                <p className="text-white/60 text-sm">Get the latest insights and updates from our team.</p>
              </div>
              <div className="flex space-x-4 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2596be]/50 focus:border-[#2596be]/50 transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#2596be] hover:bg-[#2596be]/80 text-white font-medium rounded-lg transition-colors duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Secula Studios. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/60 hover:text-[#2596be] hover:bg-white/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;