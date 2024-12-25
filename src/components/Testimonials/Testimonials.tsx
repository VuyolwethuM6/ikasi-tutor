import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Sipho Ndlovu',
    role: 'Grade 12 Student',
    content: 'Thanks to IKasi Tutor, I improved my maths mark from 45% to 78%. Their tutors really care about our success!',
    image: 'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Thandi Khumalo',
    role: 'Parent',
    content: 'The transformation in my daughter\'s confidence and grades has been remarkable. Best investment in her education!',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Lwazi Dlamini',
    role: 'Grade 11 Student',
    content: 'The holiday bootcamp completely changed my understanding of Physical Science. I finally get it!',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  }
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-white">
      <Container>
        <SectionTitle>Student Success Stories</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;