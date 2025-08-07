
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail,PhoneCallIcon, MapIcon,Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-500/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">N</span>
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500">
                Neurovis
              </h2>
            </div>
            <p className="text-gray-300 max-w-md">
              A modern software development agency building intelligent digital solutions for startups, enterprises, and students worldwide.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4 pb-2 border-b border-green-500/10">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/pricing" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/references" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/blog" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/booking" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-4 pb-2 border-b border-green-500/10">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-green-500" />
                <span>info@neurovis.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-green-500" />
                <span>neurovis.site@gmail.com</span>
              </li>
              {/* <li className="text-gray-300">
                <span className="block text-sm">Islamabad, Pakistan</span>
                <span className="block text-sm">+92 339 6800123</span>
              </li> */}
              <li className="flex items-center space-x-3 text-gray-300">
                <MapIcon size={16} className="text-green-500" />
                <span>Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <PhoneCallIcon size={16} className="text-green-500" />
                <span>+92 339 6800123</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500/10 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Neurovis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
