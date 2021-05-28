import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="container border-8 border-gray-400 w-96 mt-32 mx-auto p-10 rounded-lg">
      <div className="flex flex-col items-center justify-between">
        <img
          src="/images/wyr.jpg"
          alt="avatar"
          className="h-20 w-20 rounded-full mb-4"
        />
        <p className="text-center text-2xl font-bold text-gray-500">
          Something went wrong!
        </p>
        <Link
          to="/"
          className="py-2 px-4 bg-gray-500 rounded hover:bg-gray-600 text-gray-100 text-xl mt-4 focus:outline-none"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Error;
