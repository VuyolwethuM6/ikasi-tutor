import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram } from 'lucide-react';
import Container from '../ui/Container';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold">IKasi Tutor</span>
            </div>
            <p className="text-gray-400">
              Empowering township youth through quality education since 2018.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="/guide" className="text-gray-400 hover:text-white">Get Study Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover:text-white">Mathematics</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Physical Science</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Exam Prep</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Holiday Programs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} IKasi Tutor Movement. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
