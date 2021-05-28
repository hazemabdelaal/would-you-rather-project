import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleSaveQuestion } from '../actions';

const AskQuestion = ({ history }) => {
  const authedUser = useSelector(state => state.authedUser);
  const users = useSelector(state => state.users);

  const avatar = users[authedUser].avatarURL;

  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');

  const handleOptionOne = e => {
    e.preventDefault();

    setOptionOne(e.target.value);
  };

  const handleOptionTwo = e => {
    e.preventDefault();

    setOptionTwo(e.target.value);
  };

  const dispatch = useDispatch();

  const handleQuestionSubmit = e => {
    e.preventDefault();

    const question = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    };

    // Options verification
    if (optionOne === '' && optionTwo === '') {
      alert('Kindly fill in the options');
    } else if (optionOne === '') {
      alert('Kindly fill in Option One');
    } else if (optionTwo === '') {
      alert('Kindly fill in Option Two');
    } else {
      dispatch(handleSaveQuestion(question)).then(() => history.push('/'));
    }

    setOptionOne('');
    setOptionTwo('');
  };

  return (
    <div className="container w-96 mx-auto p-10 rounded-lg flex flex-col items-center">
      <p className="text-4xl font-bold text-gray-500 mb-4 mr-4">
        Your Question
      </p>
      <div className="container border-8 border-gray-400 w-96 mt-8 p-10 rounded-lg mr-4">
        <div className="flex flex-col items-center justify-between">
          <img
            src={avatar}
            alt="logo"
            className="h-20 w-20 rounded-full mb-4"
          />
          <p className="text-center text-2xl font-bold text-gray-500">
            Would you rather
          </p>
          <form>
            <input
              type="text"
              className="bg-gray-200 rounded text-xl my-2 text-center focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent border-transparent py-1 text-gray-500 capitalize"
              placeholder="Option One"
              onChange={e => handleOptionOne(e)}
            />
            <div className="divide-dashed text-center font-bold text-gray-500 text-2xl">
              OR
            </div>
            <input
              type="text"
              className="bg-gray-200 rounded text-xl my-2 text-center focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent border-transparent py-1 text-gray-500 mb-4 capitalize"
              placeholder="Option Two"
              onChange={e => handleOptionTwo(e)}
            />
          </form>
          <button
            to="/"
            className="py-2 px-4 bg-gray-500 rounded hover:bg-gray-600 text-gray-100 text-xl focus:outline-none w-32 mx-auto text-center"
            onClick={handleQuestionSubmit}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
