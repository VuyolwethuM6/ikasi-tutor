import React from 'react';
import { BookOpen, Brain, Rocket, Calendar } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Mathematics Tutorials',
    description: 'Expert tutoring in all mathematics topics from grade 8-12, focusing on problem-solving and exam preparation.',
    icon: Brain
  },
  {
    title: 'Science Tutorials',
    description: 'Comprehensive physical science and life science tutorials with practical experiments and demonstrations.',
    icon: BookOpen
  },
  {
    title: 'Exam Preparation',
    description: 'Intensive exam preparation sessions focusing on past papers and exam techniques.',
    icon: Rocket
  },
  {
    title: 'Holiday Bootcamps',
    description: 'Intensive holiday programs to boost understanding and academic performance.',
    icon: Calendar
  }
];

const Services = () => {
  return (
    <div className="py-16 bg-gray-50">
      <Container>
        <SectionTitle>Our Services</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;