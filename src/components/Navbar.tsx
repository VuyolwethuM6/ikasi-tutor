import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Impact', href: '/impact' },
    { name: 'Join Us', href: '/join' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* <GraduationCap className={`h-8 w-8 ${isScrolled ? 'text-red-600' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              IKasi Tutor
            </span> */}
              <img 
                src="ikasi-logo.png" 
                alt="ikasi logo" 
                className={`
                  h-12 w-auto 
                  transition-all duration-300 ease-in-out 
                  ${isScrolled ? 'opacity-90 scale-95' : 'opacity-100 scale-100'}
                  hover:scale-105 hover:opacity-80
                `} 
              />
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-red-600' 
                    : 'text-white hover:text-red-200'
                }`}
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant={isScrolled ? "primary" : "outline"} 
              className="px-4 py-2 text-sm"
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-red-600' 
                  : 'text-white hover:text-red-200'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <div className="flex items-center">
            <GraduationCap className="h-6 w-6 text-red-600" />
            <span className="ml-2 text-lg font-bold text-gray-900">IKasi Tutor</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="px-2 py-4 space-y-1 overflow-y-auto max-h-[calc(100vh-4rem)]">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 px-3">
            <Button variant="primary" className="w-full text-sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;