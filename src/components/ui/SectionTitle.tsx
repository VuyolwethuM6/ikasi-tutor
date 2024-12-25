import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{children}</h2>
      <div className="w-24 h-1 bg-red-600 mx-auto"></div>
    </div>
  );
};

export default SectionTitle;