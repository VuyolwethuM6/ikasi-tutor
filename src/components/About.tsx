import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import SectionTitle from './ui/SectionTitle';

const About = () => {
  return (
    <div className="bg-gray-50 py-16">
      <Container>
        <SectionTitle>About IKasi Tutor Movement</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/class.jpg"
              alt="Students studying"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2018 in the heart of Cape Town's townships, IKasi Tutor Movement was born from a vision to bridge the educational gap in our communities. We believe that every student deserves access to quality education, regardless of their background.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our dedicated team of tutors works tirelessly to provide exceptional Mathematics and Science education, helping students not just to pass, but to excel in their studies.
            </p>
            <Button variant="primary">
              Read Our Story
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;