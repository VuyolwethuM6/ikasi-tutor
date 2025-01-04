import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { Phone, MessageCircle } from 'lucide-react';

const Newsletter = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/27123456789?text=I%20want%20to%20order%20the%20Ikasi%20Mathematics%20Study%20Guide', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+27123456789';
  };

  return (
    <div className="bg-gray-100 py-16">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Book Image */}
          <div className="flex justify-center">
            <img 
              src="/ikasi-mathematics.png" 
              alt="Ikasi Mathematics Study Guide" 
              className="max-w-full h-auto rounded-lg shadow-xl transform transition-transform hover:scale-105"
            />
          </div>

          {/* Book Description */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ikasi Mathematics Study Guide
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              A comprehensive Mathematics study guide in both isiXhosa and English, 
              designed to make learning mathematics accessible and engaging for students.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Bilingual Content (isiXhosa & English)</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Comprehensive Mathematics Coverage</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Easy to Understand Explanations</span>
              </div>
            </div>

            {/* Call to Action Text */}
            <div className="text-center md:text-left mb-6">
              <p className="text-xl font-semibold text-gray-800">
                Place Your Order Today!
              </p>
              <p className="text-gray-600 mb-4">
                Contact us directly to get your copy of the Ikasi Mathematics Study Guide
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button 
                onClick={handleWhatsApp} 
                className="bg-green-600 text-white hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Order
              </Button>
              <Button 
                onClick={handleCall}
                variant="outline" 
                className="border-red-600 text-black hover:bg-red-50 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call to Order
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;