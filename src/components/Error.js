import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="my-5 py-5 mx-2 sm:w-3/4 sm:mx-auto lg:w-3/5 text-center">
      <div className="my-5 border-2 border-main py-5 mx-2 rounded-xl sm:w-3/4 sm:mx-auto lg:w-3/5">
        <div className="flex flex-col items-center justify-between">
          <img
            src="/images/wyr.jpg"
            alt="avatar"
            className="h-20 w-20 rounded-full mb-5"
          />
          <p className="text-xl text-main font-semibold xl:text-2xl">
            Something went wrong!
          </p>
          <Link
            to="/"
            className="py-2 px-4 bg-blue rounded text-secondary text-xl focus:outline-none mx-auto font-semibold mt-5 xl:text-2xl"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
