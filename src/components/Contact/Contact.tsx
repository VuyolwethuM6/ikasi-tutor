import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import ContactForm from './ContactForm';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '123 Main Road, Khayelitsha, Cape Town'
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+27 (21) 123-4567'
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@ikasitutor.co.za'
  }
];

const Contact = () => {
  return (
    <div className="py-16 bg-gray-50">
      <Container>
        <SectionTitle>Contact Us</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start">
                    <Icon className="h-6 w-6 text-red-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;