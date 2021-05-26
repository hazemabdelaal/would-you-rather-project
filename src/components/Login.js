import React from 'react';

const Login = () => {
  return (
    <div className="container border-8 border-gray-400 w-80 mt-20 mx-auto p-10 rounded-lg">
      <div className="flex flex-col items-center justify-between">
        <p className="text-center text-3xl font-bold text-gray-500 mb-4">
          Select a User
        </p>
        <img
          src="/images/search.jpg"
          alt="avatar"
          className="h-20 w-20 rounded-full"
        />
        <select className="m-4 w-40 bg-gray-200 border-4 border-gray-400 focus:outline-none text-xl">
          <option>Sarah</option>
          <option>Tyler</option>
          <option>John</option>
        </select>
        <button className="py-2 px-4 bg-gray-500 rounded hover:bg-gray-600 text-gray-100 text-xl focus:outline-none">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Login;
