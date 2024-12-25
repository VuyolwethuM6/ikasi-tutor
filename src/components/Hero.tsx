import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-16"> {/* Added pt-16 for navbar spacing */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Students learning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <Container className="relative h-[calc(100vh-4rem)] flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Township Youth Through Education Since 2018
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Transforming lives through quality Mathematics and Science education in township communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" className="flex items-center justify-center">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="justify-center">
              Join Us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;