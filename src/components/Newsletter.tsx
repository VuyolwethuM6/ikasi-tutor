import React, { useState } from 'react';
import Container from './ui/Container';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className="bg-gray-900 py-12">
      <Container>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with IKasi Tutor
          </h3>
          <p className="text-gray-400 mb-6 px-4">
            Get the latest news, study tips, and success stories delivered to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md"
                required
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;