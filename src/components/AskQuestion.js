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
    <div className="my-5 py-5 mx-2 sm:w-3/4 sm:mx-auto lg:w-3/5 text-center">
      <p className="text-main text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
        Your Question
      </p>
      <div className="my-5 border-2 border-main py-5 mx-2 rounded-xl sm:w-3/4 sm:mx-auto lg:w-3/5">
        <div className="flex flex-col items-center justify-between">
          <img
            src={avatar}
            alt="logo"
            className="h-20 w-20 rounded-full mb-5"
          />
          <p className="text-xl text-main font-semibold xl:text-2xl">
            Would you rather
          </p>
          <form className="flex flex-col items-center w-full px-10 my-5 sm:px-14 md:px-36">
            <input
              type="text"
              className="w-full bg-main rounded py-2 capitalize text-secondary font-bold text-xl xl:text-2xl text-center placeholder-secondary"
              placeholder="Option One"
              onChange={e => handleOptionOne(e)}
            />
            <div className="divide-dashed text-center font-bold text-red text-2xl my-2 tracking-wide xl:text-3xl">
              OR
            </div>
            <input
              type="text"
              className="w-full bg-main rounded py-2 capitalize text-secondary font-bold text-xl xl:text-2xl text-center placeholder-secondary"
              placeholder="Option Two"
              onChange={e => handleOptionTwo(e)}
            />
          </form>
          <button
            to="/"
            className="py-2 px-4 bg-red rounded text-secondary text-xl focus:outline-none mx-auto font-semibold mt-5 xl:text-2xl"
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
