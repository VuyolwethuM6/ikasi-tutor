import React from 'react';
import { Users, BookOpen, Calendar } from 'lucide-react';
import Container from './ui/Container';

const stats = [
  {
    id: 1,
    name: 'Students Helped',
    value: '1000+',
    icon: Users,
  },
  {
    id: 2,
    name: 'Years of Impact',
    value: '6+',
    icon: Calendar,
  },
  {
    id: 3,
    name: 'Subjects Covered',
    value: '4',
    icon: BookOpen,
  },
];

const Stats = () => {
  return (
    <div className="bg-white py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className="h-12 w-12 text-red-600 mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg text-gray-600">{stat.name}</div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Stats;