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

    history.push(`/questions/question_${info.qid}`);
  };

  return (
    <div className="py-5 mx-2 my-5 border-2 border-main rounded-xl sm:w-3/4 sm:mx-auto lg:w-3/5">
      <div className="flex flex-col items-center justify-between">
        <img
          src={avatar}
          alt="avatar"
          className="w-20 h-20 mb-5 rounded-full"
        />
        <p className="text-xl font-semibold text-main xl:text-2xl">
          Would you rather
        </p>
        {unAnswered ? (
          <form
            className="flex flex-col items-center w-full px-10 my-5 sm:px-14 md:px-36"
            onSubmit={handleOptionSubmit}
          >
            <button
              className="w-full py-2 text-xl font-bold capitalize rounded cursor-pointer bg-main text-secondary xl:text-2xl focus:bg-blue"
              value="optionOne"
              onClick={handleOptionClick}
            >
              {question.optionOne.text}
            </button>
            <div className="my-2 text-2xl font-bold tracking-wide text-center divide-dashed text-red xl:text-3xl">
              OR
            </div>
            <button
              className="w-full px-4 py-2 text-xl font-bold capitalize rounded cursor-pointer bg-main text-secondary xl:text-2xl focus:bg-blue"
              value="optionTwo"
              onClick={handleOptionClick}
            >
              {question.optionTwo.text}
            </button>
            <button
              className="px-4 py-2 mx-auto mt-5 text-xl font-semibold rounded bg-red text-secondary focus:outline-none xl:text-2xl"
              disabled={answer === ''}
            >
              Confirm
            </button>
          </form>
        ) : (
          <form
            className="flex flex-col items-center w-full px-10 my-5 sm:px-14 md:px-36"
            onSubmit={handleOptionSubmit}
          >
            <div className="w-full py-2 text-xl font-bold text-center capitalize rounded bg-main text-secondary xl:text-2xl">
              {question.optionOne.text}
            </div>
            <div className="my-2 text-2xl font-bold tracking-wide text-center divide-dashed text-red xl:text-3xl">
              OR
            </div>
            <div className="w-full px-4 py-2 text-xl font-bold text-center capitalize rounded bg-main text-secondary xl:text-2xl">
              {question.optionTwo.text}
            </div>
            <Link
              to={`questions/question_${question.id}`}
              className="px-4 py-2 mx-auto mt-5 text-xl font-semibold rounded bg-red text-secondary focus:outline-none xl:text-2xl"
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
