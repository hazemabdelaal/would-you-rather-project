import React from 'react';

const Leaderboard = () => {
  return (
    <div className="container w-80 mx-auto p-10 rounded-lg flex flex-col items-center">
      <p className="text-4xl font-bold text-gray-500 mb-4">Top Score</p>
      <div className="flex flex-col items-center justify-center border-4 border-gray-400 w-60 p-4 rounded-lg">
        <img
          src="/images/search.jpg"
          alt="avatar"
          className="h-20 w-20 rounded-full"
        />
        <p className="text-center text-3xl font-bold text-gray-500 mb-4">
          Hazem
        </p>
        <div className="container border-4 border-gray-400 rounded-lg text-xl text-gray-500 py-1 px-2 font-semibold tracking-wide">
          <p>Score: 5</p>
          <p>Answered: 2</p>
          <p>Asked: 3</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-4 border-gray-400 w-60 p-4 rounded-lg my-3">
        <img
          src="/images/search.jpg"
          alt="avatar"
          className="h-20 w-20 rounded-full"
        />
        <p className="text-center text-3xl font-bold text-gray-500 mb-4">
          Hazem
        </p>
        <div className="container border-4 border-gray-400 rounded-lg text-xl text-gray-500 py-1 px-2 font-semibold tracking-wide">
          <p>Score: 5</p>
          <p>Answered: 2</p>
          <p>Asked: 3</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-4 border-gray-400 w-60 p-4 rounded-lg">
        <img
          src="/images/search.jpg"
          alt="avatar"
          className="h-20 w-20 rounded-full"
        />
        <p className="text-center text-3xl font-bold text-gray-500 mb-4">
          Hazem
        </p>
        <div className="container border-4 border-gray-400 rounded-lg text-xl text-gray-500 py-1 px-2 font-semibold tracking-wide">
          <p>Score: 5</p>
          <p>Answered: 2</p>
          <p>Asked: 3</p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
