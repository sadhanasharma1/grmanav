import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setShowAboutDropdown(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleAboutDropdown = () => {
      setShowAboutDropdown(!showAboutDropdown);
    };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img
                className="h-20 w-20"
                src="LogoBlack.png"
                alt="GR Manav Logo"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
                        <Link 
                          to="/" 
                          className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                        >
                          Home
                        </Link>
           
            <div 
              ref={dropdownRef}
              className="relative"
            >
              <button
                onClick={toggleAboutDropdown}
                onMouseEnter={() => setShowAboutDropdown(true)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                About Us
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${showAboutDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              <div
                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-200 origin-top ${
                  showAboutDropdown 
                    ? 'opacity-100 scale-y-100 translate-y-0' 
                    : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
                }`}
                onMouseLeave={() => setShowAboutDropdown(false)}
              >
                <div className="py-1">
                  <Link
                    to="/about/overview"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setShowAboutDropdown(false)}
                  >
                    Company Overview
                  </Link>
                  <Link
                    to="/about/leadership"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setShowAboutDropdown(false)}
                  >
                    Leadership
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              to="/industry-connect" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Industry Connect
            </Link>
            <Link 
              to="/projects" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Projects
            </Link>
            <Link 
              to="/clients" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Our Clients
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/about/overview"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Company Overview
            </Link>
            <Link
              to="/about/leadership"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Leadership
            </Link>
            <Link
              to="/industry-connect"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Industry Connect
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Projects
            </Link>
            <Link
              to="/clients"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Our Clients
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;