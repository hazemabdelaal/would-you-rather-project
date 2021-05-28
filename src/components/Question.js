import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { handleAnswerQuestion } from '../actions/index';

const Question = ({ question, unAnswered, history }) => {
  const authedUser = useSelector(state => state.authedUser);
  const users = useSelector(state => state.users);

  const author = question.author;
  const avatar = users[author].avatarURL;

  const [answer, setAnswer] = useState('');

  const handleOptionClick = e => {
    e.preventDefault();

    setAnswer(e.target.value);
  };

  const dispatch = useDispatch();

  const handleOptionSubmit = e => {
    e.preventDefault();

    const info = {
      authedUser,
      answer,
      qid: question.id,
    };

    dispatch(handleAnswerQuestion(info));

    history.push(`/question/${info.qid}`);
  };

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
        {unAnswered ? (
          <form
            className="flex flex-col justify-center"
            onSubmit={handleOptionSubmit}
          >
            <div className="flex relative">
              <button
                className="cursor-pointer bg-gray-400 rounded text-xl my-2 text-center focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent focus:bg-gray-700 border-transparent py-1 px-14 text-gray-100 capitalize hover:bg-gray-500 w-full checked:bg-gray-600"
                value="optionOne"
                onClick={handleOptionClick}
              >
                {question.optionOne.text}
              </button>
            </div>
            <div className="divide-dashed text-center font-bold text-gray-500 text-2xl">
              OR
            </div>
            <div className="items-center">
              <button
                className="cursor-pointer bg-gray-400 rounded text-xl my-2 text-center focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent 
                  focus:bg-gray-700 border-transparent py-1 px-14 text-gray-100 capitalize hover:bg-gray-500 w-72 mb-4"
                value="optionTwo"
                onClick={handleOptionClick}
              >
                {question.optionTwo.text}
              </button>
            </div>
            <button className="py-2 px-4 bg-gray-500 rounded hover:bg-gray-600 text-gray-100 text-xl focus:outline-none w-32 ml-20">
              Confirm
            </button>
          </form>
        ) : (
          <form
            className="flex flex-col justify-center"
            onSubmit={handleOptionSubmit}
          >
            <div className="items-center">
              <div className="bg-gray-400 rounded text-xl my-2 text-center border-transparent text-gray-100 py-1 px-14 capitalize w-72">
                {question.optionOne.text}
              </div>
            </div>
            <div className="divide-dashed text-center font-bold text-gray-500 text-2xl">
              OR
            </div>
            <div className="items-center">
              <div className="bg-gray-400 rounded text-xl my-2 text-center border-transparent text-gray-100 py-1 px-14 capitalize w-72 mb-4">
                {question.optionTwo.text}
              </div>
            </div>
            <Link
              to={`question/${question.id}`}
              className="py-2 px-6 bg-gray-500 rounded hover:bg-gray-600 text-gray-100 text-xl focus:outline-none w-32 ml-20 text-center"
            >
              View Poll
            </Link>
          </form>
        )}
      </div>
    </div>
  );
};

export default withRouter(Question);
