import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#ffe0e9] via-[#d7f9f1] to-[#f0faff] p-6">
      <div className="bg-white shadow-xl rounded-xl p-10 max-w-md w-full text-center">
        <h1 className="text-7xl font-extrabold text-gray-800 mb-4">404</h1>
        <p className="text-gray-600 mb-6 text-lg">
          Oops! The page you’re looking for <br /> doesn’t seem to exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-green-400 hover:bg-[#3db9b3] text-black font-semibold px-6 py-3 rounded-full transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
    );
};

export default NotFound;