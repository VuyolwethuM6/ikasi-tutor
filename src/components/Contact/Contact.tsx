import React from 'react';
import { MapPin, Phone, MessageCircle, Facebook, Mail } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'Cwango Cresent Road, Philippi, South Africa',
    action: () => window.open('https://maps.google.com?q=123+Main+Road,+Khayelitsha,+Cape+Town', '_blank')
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+27 60 282 2069',
    action: () => window.location.href = 'tel:+27602822069'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    content: '+27602 822069',
    action: () => window.open('https://wa.me/27602822069', '_blank')
  },
  {
    icon: Facebook,
    title: 'Facebook',
    content: 'IKasi Tutor Movement',
    action: () => window.open('https://facebook.com/ikasitutor', '_blank')
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'support@ikasitutor.com',
    action: () => window.location.href = 'mailto:support@ikasitutor.com'
  }
];

const Contact = () => {
  return (
    <div className="py-16 bg-gray-50">
      <Container>
        <SectionTitle>Contact Us</SectionTitle>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-8">
          We're here to help! Reach out to us through any of these convenient methods.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div 
                key={index} 
                className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                onClick={info.action}
              >
                <Icon className="h-6 w-6 text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-xl mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Contact;