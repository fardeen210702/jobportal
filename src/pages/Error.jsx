// 404Page.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-700">Oops! The page you're looking for doesn't exist.</p>
        <p className="mt-2 text-gray-500">It seems we can't find what you're looking for.</p>
        <Link
          to="/"
          className="mt-6 inline-block px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded text-sm sm:text-base"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
