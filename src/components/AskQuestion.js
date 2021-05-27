import React from 'react';

const AskQuestion = () => {
  return (
    <div className="container border-8 border-gray-400 w-80 mt-32 mx-auto p-10 rounded-lg">
      <div className="flex flex-col items-center justify-between">
        <img
          src="/images/wyr.jpg"
          alt="logo"
          className="h-20 w-20 rounded-full mb-4"
        />
        <p className="text-center text-2xl font-bold text-gray-500">
          Would you rather
        </p>
        <form action="submit" className="my-">
          <input
            type="text"
            className="bg-gray-200 rounded text-xl my-2 text-center focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent border-transparent py-1"
            placeholder="Option One"
          />
          <div className="divide-dashed text-center font-bold text-gray-500">
            OR
          </div>
          <input
            type="text"
            className="bg-gray-200 rounded text-xl my-2 text-center focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent border-transparent py-1"
            placeholder="Option One"
          />
        </form>
        <button className="py-2 px-4 bg-gray-500 rounded hover:bg-gray-600 text-gray-100 text-xl mt-2 focus:outline-none">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default AskQuestion;
