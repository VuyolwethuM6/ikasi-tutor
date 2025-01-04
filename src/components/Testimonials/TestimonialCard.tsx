import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

const TestimonialCard = ({ name, role, content, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all group">
      <div className="relative">
        <Quote className="absolute -top-2 -left-2 text-red-200 w-12 h-12 group-hover:text-red-100 transition-colors" />
        <p className="text-gray-700 text-lg mb-6 relative z-10 leading-relaxed font-medium">
          "{content}"
        </p>
      </div>
      <div className="flex items-center border-t border-gray-100 pt-4">
        <img
          src={image}
          alt={name}
          className="h-14 w-14 rounded-full object-cover mr-5 border-2 border-blue-50"
        />
        <div>
          <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;