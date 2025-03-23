import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img
              src="LogoWhite.png"
              alt="GR Manav Logo"
              className="w-20 h-20"
            />
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 6206555858</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>grmanav0@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <div>
                  <p>ITD Cementation India Limited</p>
                  <p>Mundra Petrochem Limited</p>
                  <p>Mundra, Kachchh, Gujarat</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Main Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about/overview" className="hover:text-blue-400" onClick={scrollToTop}>
                  Company Overview
                </Link>
              </li>
              <li>
                <Link to="/about/leadership" className="hover:text-blue-400" onClick={scrollToTop}>
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/industry-connect" className="hover:text-blue-400" onClick={scrollToTop}>
                  Industry Connect
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-blue-400" onClick={scrollToTop}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-blue-400" onClick={scrollToTop}>
                  Our Clients
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400" onClick={scrollToTop}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Company Policy</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="hover:text-blue-400" onClick={scrollToTop}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-400" onClick={scrollToTop}>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/quality-policy" className="hover:text-blue-400" onClick={scrollToTop}>
                  Quality Policy
                </Link>
              </li>
              <li>
                <Link to="/safety-policy" className="hover:text-blue-400" onClick={scrollToTop}>
                  Safety Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <p className="mb-4">Stay updated with our latest news and updates</p>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p>Copyright © 2025 GR Manav Pvt. Ltd. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;