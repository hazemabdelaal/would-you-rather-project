import React, { useState } from 'react';

const Home = () => {
  const [unAnswered, setUnAnswered] = useState(true);

  return (
    <div>
      <div className="mx-auto mt-5 flex justify-center py-3 relative">
        <div className="text-center mx-auto">
          <button
            className="font-semibold text-2xl text-gray-100 border-2 bg-gray-500 rounded-lg py-1 px-2 hover:bg-gray-600 hover:text-gray-100 ml-20 focus:outline-none"
            onClick={() => setUnAnswered(false)}
          >
            Answered
          </button>
        </div>
        <div className="text-center mx-auto">
          <button
            className="font-semibold text-2xl text-gray-100 border-2 bg-gray-500 rounded-lg py-1 px-2 hover:bg-gray-600 hover:text-gray-100 mr-10 focus:outline-none"
            onClick={() => setUnAnswered(true)}
          >
            Un Answered
          </button>
        </div>
      </div>
      {unAnswered ? (
        <div className="container border-8 border-gray-400 w-80 mt-10 p-10 rounded-lg mx-auto">
          <div className="flex flex-col items-center justify-between">
            <img
              src="/images/wyr.jpg"
              alt="avatar"
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
      ) : (
        <div className="container border-8 border-gray-400 w-80 mt-10 p-10 rounded-lg mx-auto">
          <div className="flex flex-col items-center justify-between">
            <img
              src="/images/wyr.jpg"
              alt="avatar"
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
                disabled
              />
              <div className="divide-dashed text-center font-bold text-gray-500">
                OR
              </div>
              <input
                type="text"
                className="bg-gray-200 rounded text-xl my-2 text-center focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent border-transparent py-1"
                placeholder="Option One"
                disabled
              />
            </form>
            <button className="py-2 px-4 bg-gray-500 rounded hover:bg-gray-600 text-gray-100 text-xl mt-2 focus:outline-none">
              View Poll
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
