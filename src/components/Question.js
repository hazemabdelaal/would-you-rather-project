import React from 'react';
import { useSelector } from 'react-redux';

const Question = ({ question, button, unAnswered }) => {
  const users = useSelector(state => state.users);

  const author = question.author;
  const avatar = users[author].avatarURL;

  return (
    <div className="container border-8 border-gray-400 w-96 mt-10 p-10 rounded-lg mx-auto">
      <div className="flex flex-col items-center justify-between">
        <img
          src={avatar}
          alt="avatar"
          className="h-20 w-20 rounded-full mb-4"
        />
        <p className="text-center text-2xl font-bold text-gray-500">
          Would you rather
        </p>
        <form action="submit">
          {unAnswered ? (
            <div>
              <div className="flex">
                <input
                  type="radio"
                  className="hidden"
                  id="radio"
                  name="radio"
                />
                <label
                  htmlFor="radio"
                  className="cursor-pointer bg-gray-400 rounded text-xl my-2 text-center focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent border-transparent py-1 px-14 text-gray-100 capitalize hover:bg-gray-500 w-full"
                >
                  {question.optionOne.text}
                </label>
              </div>
              <div className="divide-dashed text-center font-bold text-gray-500 text-2xl">
                OR
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  className="hidden"
                  id="radio"
                  name="radio"
                />
                <label
                  htmlFor="radio"
                  className="cursor-pointer bg-gray-400 rounded text-xl my-2 text-center focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent border-transparent py-1 px-14 text-gray-100 capitalize hover:bg-gray-500 w-full"
                >
                  {question.optionTwo.text}
                </label>
              </div>
            </div>
          ) : (
            <div>
              <p className="bg-gray-400 rounded text-xl my-2 text-center py-1 px-16 text-gray-100">
                {question.optionOne.text}
              </p>
              <div className="divide-dashed text-center font-bold text-gray-500 text-2xl">
                OR
              </div>
              <p className="bg-gray-400 rounded text-xl my-2 text-center py-1 px-14 text-gray-100">
                {question.optionTwo.text}
              </p>
            </div>
          )}
        </form>
        <button className="py-2 px-4 bg-gray-500 rounded hover:bg-gray-600 text-gray-100 text-xl mt-2 focus:outline-none">
          {button}
        </button>
      </div>
    </div>
  );
};

export default Question;
