import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Question = ({ question, button, unAnswered }) => {
  const users = useSelector(state => state.users);

  const author = question.author;
  const avatar = users[author].avatarURL;

  const handleOptionClick = e => {
    e.preventDefault();
    const option = e.target.value;
    return option;
  };

  const handleRoute = !unAnswered ? `question/${question.id}` : '/';

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
        <form>
          {unAnswered ? (
            <div>
              <div className="flex">
                <button
                  className="cursor-pointer bg-gray-400 rounded text-xl my-2 text-center focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent focus:bg-gray-700 border-transparent py-1 px-14 text-gray-100 capitalize hover:bg-gray-500 w-full checked:bg-gray-600"
                  onClick={handleOptionClick}
                >
                  {question.optionOne.text}
                </button>
              </div>
              <div className="divide-dashed text-center font-bold text-gray-500 text-2xl">
                OR
              </div>
              <div className="flex items-center">
                <button
                  className="cursor-pointer bg-gray-400 rounded text-xl my-2 text-center focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent 
                  focus:bg-gray-700 border-transparent py-1 px-14 text-gray-100 capitalize hover:bg-gray-500 w-full"
                  onClick={handleOptionClick}
                >
                  {question.optionTwo.text}
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="bg-gray-400 rounded text-xl my-2 text-center py-1 px-16 text-gray-100 capitalize">
                {question.optionOne.text}
              </p>
              <div className="divide-dashed text-center font-bold text-gray-500 text-2xl">
                OR
              </div>
              <p className="bg-gray-400 rounded text-xl my-2 text-center py-1 px-14 text-gray-100 capitalize">
                {question.optionTwo.text}
              </p>
            </div>
          )}
        </form>
        <Link
          to={handleRoute}
          className="py-2 px-4 bg-gray-500 rounded hover:bg-gray-600 text-gray-100 text-xl mt-2 focus:outline-none"
        >
          {button}
        </Link>
      </div>
    </div>
  );
};

export default Question;
