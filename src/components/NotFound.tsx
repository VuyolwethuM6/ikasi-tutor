import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Container from './ui/Container';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="max-w-2xl w-full space-y-8 text-center flex flex-col items-center">
          {/* <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            404
          </h2> */}
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <img 
            src="/404-NotFound.jpg" 
            alt="Page Not Found" 
            className="w-64 object-contain mb-8"
          />
          
          <div className="flex justify-center space-x-4">
            <Link 
              to="/" 
              className="flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
            >
              <Home className="mr-2 h-5 w-5" /> 
              Go Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" /> 
              Go Back
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;